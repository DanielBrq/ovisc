# Ovis

Ovis es una aplicación web moderna diseñada con una filosofía **Mobile First** (Móvil Primero), asegurando una experiencia de usuario óptima en dispositivos portátiles mientras se adapta perfectamente a pantallas de escritorio.

## 📱 Mobile First y PWA

Ovis está construida como una **Progressive Web App (PWA)** o Aplicación Web Progresiva. Esto significa que combina lo mejor de la web y las aplicaciones nativas.

**¿Por qué PWA?**
- **Instalable:** Puedes instalar Ovis en la pantalla de inicio de tu móvil o en tu escritorio como si fuera una app nativa, sin pasar por tiendas de aplicaciones.
- **Rendimiento:** Diseñada para ser rápida y ofrecer interacciones fluidas.
- **Multiplataforma:** Una única base de código funciona perfectamente en iOS, Android, Windows, macOS y Linux.
- **Capacidades Offline:** Mayor fiabilidad incluso con conexiones de red inestables.

## 🚀 Guía de Configuración (Setup)

Actualmente, el desarrollo se centra en el cliente (Nuxt). El backend (NestJS) aún no está implementado.

### Requisitos Previos
Antes de empezar, asegúrate de tener instalado lo siguiente:
- **[Node.js](https://nodejs.org/)** (Última versión LTS) o **[Bun](https://bun.sh/)** (Recomendado para instalaciones más rápidas).
- **Git**

### Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-del-repositorio>
    cd ovisc
    ```

2.  **Navegar al directorio del cliente:**
    La lógica del frontend se encuentra en la carpeta `client`.
    ```bash
    cd client
    ```

3.  **Instalar dependencias:**
    Recomiendo usar **Bun**, pero npm también funciona.
    ```bash
    # Usando Bun (Más rápido)
    bun install

    # Usando npm
    npm install
    ```

### Ejecutar la Aplicación

Inicia el servidor de desarrollo:

```bash
# Usando Bun
bun run dev

# Usando npm
npm run dev
```

Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación en funcionamiento.
