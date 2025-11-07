# Build and Development Instructions

This document provides instructions for building and running the **Manus EV Calculator** application locally and preparing it for deployment.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 18 or higher) - Download from https://nodejs.org/
- **pnpm** (version 8 or higher) - Install globally using: `npm install -g pnpm`
- **Git** - Download from https://git-scm.com/

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/abvirkar-svg/manus-ev-calculator.git
cd manus-ev-calculator
```

### 2. Install Dependencies

Install all required dependencies using pnpm:

```bash
pnpm install
```

This command will install all dependencies listed in `package.json` and create a `pnpm-lock.yaml` file.

## Development

### Start the Development Server

To run the application in development mode with hot-reload:

```bash
pnpm dev
```

The development server will start at `http://localhost:5173` (or another available port). Open this URL in your browser to see the application.

**Features of the development server:**
- Hot Module Replacement (HMR) for instant updates when you save files
- Source maps for easier debugging
- Detailed error messages in the console

### Project Structure

```
manus-ev-calculator/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── pages/         # Page components
│   │   │   └── Home.tsx   # Main calculator page
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── App.tsx        # Main app component with routing
│   │   ├── main.tsx       # React entry point
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   └── index.html         # HTML template
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite bundler configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── README.md              # Project documentation
```

## Building for Production

### Create a Production Build

To build the application for production:

```bash
pnpm build
```

This command will:
1. Compile TypeScript to JavaScript
2. Bundle all assets using Vite
3. Optimize the code for production
4. Generate static files in the `client/dist/` directory

The production build is optimized for performance and ready for deployment.

### Preview the Production Build

To preview the production build locally before deploying:

```bash
pnpm preview
```

This will start a local server serving the production build. Open the provided URL in your browser to verify the application works correctly.

## Available Scripts

Here are all available npm scripts defined in `package.json`:

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server with hot-reload |
| `pnpm build` | Build the application for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint to check code quality (if configured) |
| `pnpm type-check` | Run TypeScript type checking |

## Technology Stack

The application uses the following technologies:

| Technology | Purpose |
| --- | --- |
| **React 19** | UI framework |
| **TypeScript** | Type-safe JavaScript |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **shadcn/ui** | Pre-built UI components |
| **Wouter** | Client-side routing |
| **Lucide React** | Icon library |

## Code Quality

### TypeScript Checking

To check for TypeScript errors without building:

```bash
pnpm type-check
```

### Linting (if configured)

To run ESLint and check code quality:

```bash
pnpm lint
```

## Deployment Checklist

Before deploying to production, ensure:

- [ ] All features are implemented and tested
- [ ] No console errors or warnings
- [ ] TypeScript compilation is successful (`pnpm type-check`)
- [ ] Production build completes without errors (`pnpm build`)
- [ ] Production preview works correctly (`pnpm preview`)
- [ ] All changes are committed and pushed to GitHub

## Deploying to Render.com

Once your application is ready, follow the **RENDER_DEPLOYMENT.md** guide to deploy to Render.com.

### Quick Deployment Summary

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin master
   ```

2. Go to https://render.com and create a new Static Site
3. Connect your GitHub repository
4. Set the build command to: `pnpm install && pnpm build`
5. Set the publish directory to: `client/dist`
6. Click **Create Static Site** and wait for deployment

Your application will be live within a few minutes!

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. Check the console output for the actual URL.

### Dependencies Installation Issues

If you encounter issues installing dependencies:

1. Clear the pnpm cache:
   ```bash
   pnpm store prune
   ```

2. Delete `pnpm-lock.yaml` and reinstall:
   ```bash
   rm pnpm-lock.yaml
   pnpm install
   ```

### Build Failures

If the build fails:

1. Check for TypeScript errors:
   ```bash
   pnpm type-check
   ```

2. Clear the build cache:
   ```bash
   rm -rf client/dist
   pnpm build
   ```

## Additional Resources

- **React Documentation:** https://react.dev
- **Vite Documentation:** https://vitejs.dev
- **Tailwind CSS Documentation:** https://tailwindcss.com
- **shadcn/ui Documentation:** https://ui.shadcn.com
- **TypeScript Documentation:** https://www.typescriptlang.org

## Support

For issues or questions:

1. Check the GitHub repository: https://github.com/abvirkar-svg/manus-ev-calculator
2. Review the application's README.md
3. Check the Render.com documentation for deployment issues

---

**Happy coding! Your EV Calculator is ready to go!**
