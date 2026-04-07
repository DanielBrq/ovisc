import { Controller, All, Req, Res } from '@nestjs/common';
import type { FastifyRequest, FastifyReply } from 'fastify';
import { auth } from './auth';

@Controller('api/auth')
export class AuthController {
  @All('*')
  async handleBetterAuth(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const headers = new Headers();
    Object.entries(req.headers).forEach(([key, value]) => {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach((v) => headers.append(key, v));
        } else {
          headers.append(key, value);
        }
      }
    });

    const betterReq = new Request(url.toString(), {
      method: req.method,
      headers: headers,
      body:
        req.method !== 'GET' && req.method !== 'HEAD'
          ? JSON.stringify(req.body)
          : undefined,
    });

    const response = await auth.handler(betterReq);

    res.status(response.status);
    response.headers.forEach((value, key) => res.header(key, value));

    const text = await response.text();
    if (text) {
      res.send(text);
    } else {
      res.send();
    }
  }
}
