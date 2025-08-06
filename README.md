# The Smur - Jewelry Portfolio

A responsive portfolio for a jewelry business built with Next.js, Tailwind CSS, and statically exported for high performance.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Available Scripts](#available-scripts)
- [Build and Production](#build-and-production)
- [Image Optimization](#image-optimization)
- [Deployment](#deployment)

---

## Prerequisites

Before you begin, ensure you have the following tools installed on your system.

### 1. pnpm

This project uses `pnpm` as its package manager. You can install it using one of the following commands:

- **Windows (PowerShell):**
  ```powershell
  iwr https://get.pnpm.io/install.ps1 -useb | iex
  ```
- **macOS (Homebrew):**
  ```bash
  brew install pnpm
  ```
- **Linux (curl):**
  ```bash
  curl -fsSL https://get.pnpm.io/install.sh | sh -
  ```

### 2. ImageMagick

This is required for the image optimization script. It's a powerful tool for processing images from the command line.

- **macOS (Homebrew):**
  ```bash
  brew install imagemagick
  ```
- **Windows / Linux:**
  See the official [ImageMagick installation instructions](https://imagemagick.org/script/download.php).

---

## Local Development

1.  **Clone the Repository**
    ```bash
    git clone <your-repository-url>
    cd thesmur
    ```

2.  **Install Dependencies**
    This command installs all necessary packages from the public npm registry, as defined in the project's `.npmrc` file.
    ```bash
    pnpm install
    ```

3.  **Run the Development Server**
    This starts a hot-reloading development server, perfect for making and viewing changes live.
    ```bash
    pnpm dev
    ```
    The application will be available at `http://localhost:3000`.

---

## Available Scripts

-   `pnpm dev`: Starts the development server.
-   `pnpm build`: Creates a production-ready static build.
-   `pnpm start`: Previews the static production build locally.
-   `pnpm lint`: Lints the codebase for errors and style issues.
-   `pnpm optimize`: Optimizes all images in the `public` directory.
-   `pnpm deploy`: Deploys the `out` folder to the `gh-pages` branch.

---

## Build and Production

This project is configured for static export (`output: 'export'` in `next.config.mjs`).

-   **`pnpm build`**: This command compiles the application into a set of static HTML, CSS, and JavaScript files inside the `out` directory.
-   **`pnpm start`**: This command uses the `serve` package to start a local server for the static files in the `out` directory. This is how you preview the final production version of your site.

---

## Image Optimization

To keep the site fast, all images should be optimized. A script is provided to automate this process.

-   **What it does:** Finds all `.jpg`, `.jpeg`, and `.png` files in the `/public` directory, resizes them to a maximum width of 1200px, and strips all EXIF metadata.
-   **How to run it:**
    ```bash
    pnpm optimize
    ```

---

## Deployment

Deployment to GitHub Pages is fully automated using GitHub Actions.

-   **Trigger:** The workflow runs automatically on every push to the `main` branch.
-   **Process:** The action runs the `pnpm build` command to generate the static site and then deploys the contents of the `out` directory to the `gh-pages` branch, making it live.
