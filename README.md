# The Smur - Jewelry Portfolio

This is a portfolio project for a jewelry business, built with Next.js and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have [pnpm](https://pnpm.io/installation) installed on your system.

### Installing pnpm

You can install pnpm using one of the following commands, depending on your operating system.

**Windows (via PowerShell):**

Open PowerShell as Administrator and run:
```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

**macOS (via Homebrew):**

```bash
brew install pnpm
```

**Linux (or other systems with curl):**

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

After installation, you may need to restart your terminal or run the command suggested by the installer to add `pnpm` to your system's PATH.

## Getting Started

Follow these steps to set up and run the project locally:

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd thesmur
    ```

2.  **Install dependencies:**

    Use `pnpm` to install the project dependencies.

    ```bash
    pnpm install
    ```

3.  **Build the application:**

    This command builds the static assets for production.

    ```bash
    pnpm build
    ```

4.  **Run the application locally:**

    This command serves the statically exported `out` directory.

    ```bash
    pnpm start
    ```

    The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

-   `pnpm dev`: Starts the development server with hot-reloading.
-   `pnpm build`: Builds the application for production.
-   `pnpm start`: Serves the production build.
-   `pnpm lint`: Lints the codebase.
-   `pnpm deploy`: Deploys the application to GitHub Pages.

A responsive portfolio for a small jewelry business built with Next.js and Bootstrap.

## Features

- **Next.js Framework:** Leveraging file-based routing and SSR/SSG for improved performance and SEO.
- **Responsive Design:** Mobile-friendly layout using Bootstrap.
- **Flexible Collections:** Easily update collections and items by modifying `data/collections.js`.
- **Additional Pages:** About Us and Contact Us pages to share your story and allow visitors to reach out.
- **Chic and Contemporary Aesthetic:** Custom CSS provides a modern, elegant look.

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
