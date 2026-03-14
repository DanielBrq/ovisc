# Ovis

Ovis es la aplicación de gamificación diseñada para grupos juveniles. Combina un cliente Nuxt 4 + @nuxt/ui con un API AdonisJS v6 y tiene como objetivo escalar a multitenant con módulos de usuarios, misiones, economía virtual y auditorías.

## Objetivos y reglas clave
- **Meta:** Fomentar compromiso espiritual y social mediante economía virtual, XP/niveles automáticos y herramientas financieras para los líderes.
- **Roles:** Admin controla iglesias y auditoría, Leaders gestionan su iglesia y no pueden auto-depositar monedas, Players consumen tienda y misiones, Visitors requieren aprobación tras el onboarding.
- **Reglas de borrado:** Soft delete por defecto, hard delete solamente en tablas N:N, catálogos y calendario.
- **Onboarding:** Es obligatorio elegir iglesia; en caso de error el usuario regresa a Visitor hasta que alguien lo apruebe.
- **Roadmap:** Los módulos V1 incluyen Usuarios, Grupos/Iglesias, Notificaciones, Calendario, Tienda, Player stats, Mission Board. El roadmap V1.x.x cubre la extensión con Trabajos y Tesorería avanzada.

## Setup local (Bun)
1. Clona el repo y entra en él:
   ```bash
   git clone <repo>
   cd ovisc
   ```
2. Copia `web-app/.env.example` y `api-server/.env.example` y configura variables (URLs, Stripe, OAuth).
3. Instala dependencias solamente con Bun:
   ```bash
   cd web-app
   bun install

   cd ../api-server
   bun install
   ```
4. Levanta los servicios en consolas separadas:
   ```bash
   cd web-app
   bun run dev
   ```
   ```bash
   cd api-server
   bun run dev
   ```
   El cliente escucha en `http://localhost:3000`; ajusta `start/kernel.ts` si necesitas otro puerto para el backend.

## Arquitectura y módulos
- **API AdonisJS:** OpenAPI, middleware para broken access control, cache con Redis, control de permisos y auditoría de cambios sensibles.
- **Web Nuxt:** Pinia, TanStack Vue Query, diseño Mobile-First, `@vite-pwa/nuxt`, y directrices de Tailwind 4.
- **Módulos de negocio:** Usuarios (CRUD + social auth), Iglesias multi-tenant, Notificaciones universales, Calendario público/privado, Tienda con stock/temporales, Player stats con wallet y conversor, Mission Board (misiones individuales/grupales + notificaciones).
- **Corto plazo extra:** Trabajos como etiquetas personalizadas y Tesorería con ingresos/egresos, sobres presupuestarios y potencial integración con Stripe Connect.

## Documentación viva
Todos los detalles técnicos y estratégicos están en `docs/DEVELOPMENT-PLAN.ES.md`. Antes de modificar un módulo, lee ese roadmap para ver qué tareas están pendientes en backend y frontend. Los archivos `docs/README.md` y `docs/README.ES.md` complementan este documento con contexto en inglés y español.

## Referencias rápidas
- Usa solo Bun (`bun run dev`, `bun run build`, `bun run preview`).
- Actualiza `docs/README*.md` si cambias el proceso de desarrollo, las reglas de negocio o agregas nuevos módulos.
- Conserva los `.env.example` para replicar configuraciones locales si generas nuevas integraciones.
