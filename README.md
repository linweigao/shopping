# Shopping App 🛍️

A modern React shopping application with a complete build process and development environment.

![Shopping App Screenshot](https://github.com/user-attachments/assets/d5e1e91e-db2c-44fa-ab27-67815c70c0f9)

## Features

- **Product Catalog**: Browse through a collection of products with images and prices
- **Shopping Cart**: Add and remove items from your cart with real-time total calculation
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern React**: Built with React 18, TypeScript, and functional components with hooks
- **Hot Module Replacement**: Development server with live reloading

## Tech Stack

- **React 18** - Modern JavaScript library for building user interfaces
- **TypeScript** - Strongly typed programming language that builds on JavaScript
- **Webpack 5** - Module bundler with development server
- **Babel** - JavaScript transpiler for modern JS features
- **CSS3** - Modern styling with flexbox and grid layouts

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shopping
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm start
```

This will:
- Start the webpack dev server on http://localhost:3000
- Enable hot module replacement for instant updates
- Open the app in your default browser

### Building for Production

Create a production build:
```bash
npm run build
```

This will:
- Bundle and minify all assets
- Generate optimized production files in the `dist/` directory
- Create source maps for debugging

### Development Build

Create a development build without starting the server:
```bash
npm run dev
```

## Project Structure

```
shopping/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.tsx             # Main application component (TypeScript)
│   ├── App.css             # Application styles
│   ├── index.tsx           # Entry point (TypeScript)
│   └── index.css           # Global styles
├── dist/                   # Production build output
├── webpack.config.js       # Webpack configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run dev` - Create development build
- `npm test` - Run tests (placeholder)
- `npx tsc --noEmit` - Run TypeScript type checking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.