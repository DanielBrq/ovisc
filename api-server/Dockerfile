# Fase 1: Instalación de dependencias
FROM oven/bun:latest AS base
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Fase 2: Construcción (Build) de AdonisJS
FROM base AS build
COPY . .
# AdonisJS compila TypeScript a JS
RUN bun run build

# Fase 3: Producción
FROM oven/bun:latest AS production
WORKDIR /app

# Definir variables de entorno
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3333

# Copiar el build
COPY --from=build /app/build ./build

# Instalar solo dependencias de producción dentro de la carpeta build
RUN cd build && bun install --production

EXPOSE 3333

# Ejecutar el servidor usando el runtime de Bun
CMD ["bun", "build/bin/server.js"]