// ======== Imports ==============
import 'dotenv/config';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { bearer } from 'better-auth/plugins';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

// ======== Database Connection =============
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error('DATABASE_URL no esta definido');
const pool = new pg.Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);
export const prisma = new PrismaClient({ adapter });
const rawBaseUrl = process.env.BASE_URL;
const baseUrl =
  rawBaseUrl && /^https?:\/\//.test(rawBaseUrl)
    ? rawBaseUrl
    : 'http://localhost:3333';

// ======== Better Auth Configuration =============
export const auth = betterAuth({
  baseURL: baseUrl,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [bearer()], // Delete if you want to use cookies instead of tokens
  advanced: {
    useSecureCookies: process.env.NODE_ENV === 'production',
  },
});
