# Manus EV Calculator

A modern web application for calculating **Enterprise Value (EV)** and key valuation multiples. This tool is designed for CX consultants, customers, and financial professionals to quickly analyze company valuations.

## Features

✨ **Core Functionality:**
- Calculate Enterprise Value (EV) from market capitalization, debt, and cash
- Compute EV/Revenue multiple for valuation analysis
- Compute EV/EBITDA multiple for profitability-adjusted valuation
- Real-time form validation with clear error messages
- Professional, responsive user interface

🎯 **User Experience:**
- Clean, intuitive form layout with organized input fields
- Color-coded result cards for easy interpretation
- Optional company name field for record-keeping
- Reset button to clear all inputs and start over
- Mobile-friendly responsive design

## Technology Stack

| Technology | Purpose |
| --- | --- |
| **React 19** | Modern UI framework with hooks |
| **TypeScript** | Type-safe JavaScript development |
| **Vite** | Lightning-fast build tool and dev server |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **shadcn/ui** | Pre-built, accessible UI components |
| **Wouter** | Lightweight client-side routing |
| **Lucide React** | Beautiful icon library |

## Quick Start

### Prerequisites

- Node.js 18+ (https://nodejs.org/)
- pnpm 8+ (install globally: `npm install -g pnpm`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abvirkar-svg/manus-ev-calculator.git
   cd manus-ev-calculator
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### How to Use the Calculator

1. **Enter Financial Metrics:**
   - Company Name (optional)
   - Market Capitalization
   - Total Debt
   - Cash & Cash Equivalents
   - Annual Revenue
   - EBITDA

2. **Click Calculate:**
   - The application will validate all inputs
   - Compute the three key metrics
   - Display results in color-coded cards

3. **View Results:**
   - Enterprise Value (EV) in USD
   - EV/Revenue multiple (value per $1 of revenue)
   - EV/EBITDA multiple (value per $1 of EBITDA)

4. **Reset or Export:**
   - Use the Reset button to clear all fields and start over
   - Results can be manually copied for use in reports

### Example Calculation

**Input:**
- Market Cap: $10,000,000
- Total Debt: $2,000,000
- Cash: $500,000
- Revenue: $5,000,000
- EBITDA: $1,500,000

**Output:**
- Enterprise Value: $11,500,000
- EV/Revenue: 2.30x
- EV/EBITDA: 7.67x

## Project Structure

```
manus-ev-calculator/
├── client/                    # Frontend application
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx      # Main calculator page
│   │   ├── components/       # Reusable UI components
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions
│   │   ├── App.tsx           # Main app component
│   │   ├── main.tsx          # React entry point
│   │   └── index.css         # Global styles
│   ├── public/               # Static assets
│   └── index.html            # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── BUILD_INSTRUCTIONS.md     # Local build guide
├── RENDER_DEPLOYMENT.md      # Render.com deployment guide
└── README.md                 # This file
```

## Available Scripts

```bash
# Start development server with hot-reload
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Type-check TypeScript
pnpm type-check

# Run linter (if configured)
pnpm lint
```

## Deployment

### Deploy to Render.com

The application is optimized for static site hosting on Render.com. Follow these steps:

1. **Build the application:**
   ```bash
   pnpm build
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin master
   ```

3. **Deploy on Render.com:**
   - Go to https://dashboard.render.com
   - Create a new Static Site
   - Connect your GitHub repository
   - Set Build Command: `pnpm install && pnpm build`
   - Set Publish Directory: `client/dist`
   - Click Create

For detailed instructions, see **RENDER_DEPLOYMENT.md**.

### Live Application

Once deployed, your application will be accessible at:
```
https://manus-ev-calculator.onrender.com
```

(or your custom domain if configured)

## Formulas

The calculator uses the following financial formulas:

### Enterprise Value (EV)
```
EV = Market Capitalization + Total Debt - Cash & Cash Equivalents
```

### EV / Revenue Multiple
```
EV / Revenue = EV ÷ Annual Revenue
```

### EV / EBITDA Multiple
```
EV / EBITDA = EV ÷ EBITDA
```

## Form Validation

The application includes comprehensive form validation:

- All required fields must be filled
- All inputs must be valid numbers
- All inputs must be non-negative values
- Error messages appear inline for invalid fields
- Errors clear automatically when user starts typing

## Browser Support

The application supports all modern browsers:

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow React hooks best practices
- Use Tailwind CSS for styling
- Leverage shadcn/ui components for UI elements

### Component Structure

- Keep components focused and single-responsibility
- Use composition over inheritance
- Extract reusable components to `client/src/components/`
- Use custom hooks in `client/src/hooks/` for shared logic

### Styling

- Use Tailwind CSS utility classes
- Define custom styles in `client/src/index.css` for global styles
- Maintain design consistency across components
- Use semantic color tokens (e.g., `bg-background`, `text-foreground`)

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a Pull Request

## License

This project is provided as-is for use by Manus and its clients.

## Support

For issues, questions, or feedback:

1. Check the **BUILD_INSTRUCTIONS.md** for development help
2. Check the **RENDER_DEPLOYMENT.md** for deployment help
3. Review the GitHub Issues section
4. Contact the development team

## Roadmap

### Phase 2 (Future Enhancements)

- [ ] Industry benchmark comparison
- [ ] Color indicators for benchmark comparison (green/red)
- [ ] Export results as PDF/Excel
- [ ] Save calculation history to local storage
- [ ] Multiple company comparison
- [ ] Historical valuation tracking

## Changelog

### v1.0.0 (Initial Release)
- ✅ Core EV calculator functionality
- ✅ Enterprise Value calculation
- ✅ EV/Revenue multiple calculation
- ✅ EV/EBITDA multiple calculation
- ✅ Form validation and error handling
- ✅ Responsive UI design
- ✅ Render.com deployment ready

---

**Built with ❤️ for financial professionals and CX consultants**

**Repository:** https://github.com/abvirkar-svg/manus-ev-calculator
