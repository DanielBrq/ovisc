# Ovis

Ovis is a modern web application designed with a **Mobile First** philosophy, ensuring an optimal user experience on handheld devices while scaling beautifully to desktop screens.

## 📱 Mobile First & PWA

Ovis is built as a **Progressive Web App (PWA)**. This means it combines the best of web and native apps.

**Why PWA?**
- **Installable:** You can install Ovis on your mobile home screen or desktop just like a native app, bypassing app stores.
- **Performance:** Designed for speed and smooth interactions.
- **Cross-Platform:** A single codebase runs seamlessly on iOS, Android, Windows, macOS, and Linux.
- **Offline Capabilities:** Enhanced reliability even with poor network conditions.

## 🚀 Setup Guide

Currently, the active development focus is on the client-side (Nuxt). The backend (NestJS) is not yet implemented.

### Prerequisites
Before you begin, ensure you have the following installed:
- **[Node.js](https://nodejs.org/)** (Latest LTS) or **[Bun](https://bun.sh/)** (Recommended for faster installs).
- **Git**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd ovisc
    ```

2.  **Navigate to the client directory:**
    The frontend logic is located in the `client` folder.
    ```bash
    cd client
    ```

3.  **Install dependencies:**
    I recommend you to use **Bun**, but npm works as well.
    ```bash
    # Using Bun (Fastest)
    bun install

    # Using npm
    npm install
    ```

### Running the App

Start the development server:

```bash
# Using Bun
bun run dev

# Using npm
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the app in action.