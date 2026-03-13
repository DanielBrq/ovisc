# Roadmap V1

-----------------------------------------------------------------------------

## Config API Server (AdonisJS v6)

- [ ] Redis cache
- [ ] OpenAPI
- [ ] Implementar seguridad Middleware contra Broken Access Control de cualquier entidad.
- [ ] Versionamiento de API.

## Config WEB App (Nuxt 4)

- [✅] Pages y routing
- [ ] Composables
- [ ] Stores (Pinia)
- [ ] Components (considerar si usar nuxt ui)
- [ ] Layouts (private and public), admin and player
- [ ] Services (API calls con TanStack vue Query)
- [ ] Utils (formatters, validators, DayJS, etc)
- [ ] Refactor Styles y Tailwind nueva nomencaltura/patrón

## Reglas de negocio

- Todo es soft delete, es hard delete solo cuando se trata de tablas intermedias de muchos a muchos y catalogs. Hay excepciones.
- El Leader por jerarquía puede ser player también pero no puede gestionarse sus propios recursos como monedas.
- El Admin (Daniel Barquero) tiene todos los permisos y roles, por supuesto tambien sujeto a los registros de auditoría.
- Admin y Leader tienen acceso exclusivo a:
    - Aprobar nuevos usuarios en la iglesia (rol Visitor -> Player)
    - Pagar a jugadores.
    - Gestionar catálogo de tienda.
    - Aceptar y entregar recompensas.
    - Acceder al panel de administración.
    - Ver historial de auditoría.
    - Gestionar eventos privados administrativo en el calendario.
    - Acceso a módulo financiero/tesorería.
    - Dashboard administrador.

-----------------------------------------------------------------------------

## Módulo Usuarios

***Nota:***
- Para registrar cuentas debe estar primero módulo Grupos/Iglesias, al menos una iglesia hardcodeada, luego se hace el resto.

**Backend**

- [ ] Crear usuario (Rol Visitor por default)
- [ ] Editar usuario
- [ ] Eliminar usuario
- [ ] Ver usuario (datos de mi perfil, datos básicos independientes al rol)
- [ ] Ver usuario ver otros perfiles (Implementar seguridad Middleware contra Broken Access Control).
- [ ] Listar usuarios (paginación)
- [ ] Ally Google
- [ ] Ally Facebook
- [ ] Roles (Admin, Leader, Player, Visitor)
- [ ] Middleware de roles y permisos

**Frontend**

- [ ] Crear usuario
- [ ] Editar usuario
- [ ] Eliminar usuario
- [ ] Ver usuario (mi perfil, datos básicos independientes al rol)
- [ ] Ver usuario ver otros perfiles.
- [ ] Listar usuarios (paginación)
- [ ] Register Google
- [ ] Register Facebook
- [ ] Login Google
- [ ] Login Facebook
- [ ] OnBoarding (Seleccionar grupo/iglesia)


## Módulo Grupos/Iglesias

***Nota:***
- Crear o gestionar iglesias multi-tenant solo lo hace el rol Admin, o sea yo Daniel Barquero.
- Un usuario puede pertenecer a una sola iglesia y los Leader gestionan sus propios grupos.
- Al crear usuario y aún no estar en una iglesia, se le obliga hacer OnBoarding.
- En caso de escoger mal la iglesia, se borra y vuelve a hacer onboarding (vuelve a ser visitor hasta que un Leader o Admin lo apruebe en el grupo).

**Backend**

- [ ] Crear iglesia
- [ ] Editar iglesia
- [ ] Eliminar iglesia
- [ ] Ver iglesia
- [ ] Listar iglesias (paginación)

**Frontend**

- [ ] Crear iglesia
- [ ] Editar iglesia
- [ ] Eliminar iglesia
- [ ] Ver iglesia
- [ ] Listar iglesias (paginación)

## Módulo Notificaciones

***Nota:***
- Feature universal y reutilizable, se generan notificaciones en cualquier módulo o contexto.

**Backend**

- [ ] Crear notificación por usuario (Notificaciones individuales de usuario como tienda, recompensas, etc)
- [ ] Crear notificación por grupo (Notificaciones generales de grupo como eventos, etc)
- [ ] Descartar notificación (update estado a visto/leído)
- [ ] Ver notificación (get individual)
- [ ] Listar notificaciones (get por usuario y paginación)

**Frontend**

- [ ] Header (con icono de notificaciones y contador de notificaciones no vistas)
- [ ] Componente Notificaciones (modal preview, listado simple) en tablet y desktop, en mobile va directo a page.
- [ ] Descartar notificación (update estado a visto/leído)
- [ ] Ver notificaciones (enrutamiento a /notifications page para ver listado)


## Módulo Calendario

***Nota:***
- Se registra por iglesia.
- Hay eventos publicos que ven todos y los privados que solo ven Leaders y Admin.
- *Borrador: Eventos que hace el Admin que se comparte entre iglesias, para eventos colaborativos*

**Backend**

- [ ] Crear evento
- [ ] Editar evento
- [ ] Eliminar evento (Hard delete)
- [ ] Ver evento (individual)
- [ ] Listar eventos (filtrados por iglesia, paginación y fechas, Default por mes pasado, actual y próximo)
- [ ] Generar notificaciones (nuevos eventos publicos para jugadores, privados para Leader)

**Frontend**

- [ ] Componente Calendario
- [ ] Crear evento
- [ ] Editar evento
- [ ] Eliminar evento
- [ ] Ver eventos en calendario


## Módulo Tienda

***Nota:***
- Se registra por iglesia.
- Solo Admin y Leader pueden gestionar tiendas.

**Backend**

- [ ] CRUD categorias de artículos (item con relación mucho a muchos).
- [ ] Agregar artículo (catálogo de artículos).
- [ ] Editar artículo (catálogo de artículos).
- [ ] Eliminar artículo (catálogo de artículos).
- [ ] Ver artículo (producto individual).
- [ ] Listar artículos (catálogo de artículos, paginación)
- [ ] Flujo rebaja y resposicion de stock y monedas (sistema pre-booking y reserva mientras se procesa el pedido).
- [ ] Calculos de descuento.
- [ ] Artículos temporales (con fecha de vencimiento -> isActive = false)
- [ ] Generar notificaciones (Peticion de pedido al leader, fases de pedido del jugador )

**Frontend**

- [ ] CRUD categorias de artículos.
- [ ] Crear artículo (catálogo de artículos).
- [ ] Editar artículo (catálogo de artículos).
- [ ] Eliminar artículo (catálogo de artículos).
- [ ] Ver artículo (producto individual).
- [ ] Listar artículos (catálogo de artículos, paginación)

## Módulo Player

***Nota:***
- Usa tabla aparte user_player_stats.
- Todos los usuarios tienene sta tabla por default.

**Backend**

- [ ] Ver stats
- [ ] Editar stats
- [ ] Listar stats
- [ ] Algoritmo de ganancia de exp.
- [ ] Algoritmo de subida de nivel.
- [ ] CRUD Wallet (Leader y Admin).
- [ ] Generar notificaciones (Pagos, subida de nivel, etc)

**Frontend**

- [ ] Vista mi perfil de usuario, con seccion stats.
- [ ] Vista perfil de otro usuario, con seccion cartera (monedas).
- [ ] Page o modal para conversor de monedas.
- [ ] Page pedidos realizados (en proceso, pagados, cancelados, reembolsados).
- [ ] Page o modal para pagar monedas a jugadores (Leader y Admin).

## Modulo Mission Board

***Nota:***
- Se registra por iglesia.
- Solo Admin y Leader pueden gestionar tareas del tablero de encargos.
- Si llega a la fecha límite de la mision, se marca como fallida (success=false).
- Se puede reutilizar o reiniciar (como entidad catalogo). Pero tambien se puede borrar (hard delete).

**Backend**

- [ ] Crear mision (Leader).
- [ ] Editar mision (Leader).
- [ ] Activar y desactivar mision (Leader), (toggle boolean).
- [ ] Eliminar mision (Leader).
- [ ] Ver mision (anyone).
- [ ] Listar misiones (anyone).
- [ ] Apuntarse a una mision (Player).
- [ ] Listar misiones apuntadas (Player).
- [ ] Sistema de participacion de encargos individual o grupal, min y max de jugadores necesario en el encargo.
- [ ] Control del flujo de los encargos (Leader, finalizacion o confirmación de encargo).
- [ ] Sistema de recompensas por encargos.
- [ ] Generar varias y diferentes notificaciones (apuntarse, confirmar, finalizar) version para Leader y otras para Player.

**Frontend**

- [ ] Crear mision (Leader).
- [ ] Editar mision (Leader).
- [ ] Activar y desactivar mision (Leader), (toggle boolean).
- [ ] Eliminar mision (Leader), (hard delete).
- [ ] Ver mision (anyone).
- [ ] Listar misiones (anyone).
- [ ] Apuntarse a una mision (Player).
- [ ] Sistema de participacion de encargos individual o grupal, min y max de jugadores necesario en el encargo.
- [ ] Control del flujo de los encargos (Leader, finalizacion o confirmación de encargo).
- [ ] Sistema de recompensas por encargos.

-----------------------------------------------------------------------------

# Roadmap V1.x.x (Post-Deployment)

## Módulo Trabajos

***Nota:***
- Se registra por iglesia.
- Solo Admin y Leader pueden gestionar tareas del tablero de encargos.
- Es feture visual, nada de logica de negocio, son como etiquetas #músico, #líder, etc...
- Hard Delete.
- No update, mas fácil volver a crear ya que es un simple label.
- Relacion muchos a muchos con users.

**Backend**

- [ ] CRUD Trabajos (Leader).

**Frontend**

- [ ] CRUD Trabajos (Leader).
- [ ] Seccion Trabajos en "mi perfil".

## Módulo de Tesorería (solo Leader y Admin)

***Nota:***
- Se registra por iglesia.
- Solo Leader puede gestionar la tesorería.
- Tenemos el dinero general del grupo y se puede tranferir a sobres (como hace el BCR, para separar dinero).
- Se pueden ver datos tanto general de tesoreria como de cada sobre individualmente.
- Los sobres aislan el dinero, para saber a que están destinados.
- Registrar auditoría de ingresos y egresos.
- *Posibilidad de usar stripe connect para enviar instrucciones a stripe. No se maneja dinero en la app. Pero si se sujeta a las reglas de negocio*.
- [https://docs.stripe.com/event-destinations]

**Backend**

- [ ] Registrar ingreso (Leader).
- [ ] Registrar egreso (Leader).
- [ ] Ver ingreso (anyone).
- [ ] Ver egreso (anyone).
- [ ] Listar ingresos (anyone).
- [ ] Listar egresos (anyone).
- [ ] Generar reporte de ingresos (Leader).
- [ ] Generar reporte de egresos (Leader).
- [ ] Feature de sobres.
- [ ] Generar notificaciones, depende webhook de stripe (ingresos, egresos).

**Frontend**

- [ ] Registrar ingreso (Leader).
- [ ] Registrar egreso (Leader).
- [ ] Ver ingreso (anyone).
- [ ] Ver egreso (anyone).
- [ ] Listar ingresos (anyone).
- [ ] Listar egresos (anyone).
- [ ] Generar reporte de ingresos (Leader).
- [ ] Generar reporte de egresos (Leader).
- [ ] Seccion Tesorería en "mi perfil".

## Módulo ??