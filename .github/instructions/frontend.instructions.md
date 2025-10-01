---
applyTo: 
  - "**/*.{js,ts,jsx,tsx}"
description: "Frontend development instructions for the shopping application"
---

# Frontend Development Instructions

## Framework Guidelines

### React/Next.js (if chosen)
- Use functional components with hooks
- Implement proper state management (useState, useContext, or Redux)
- Use TypeScript for type safety
- Follow component composition patterns

### Vue.js (if chosen)
- Use Composition API for new components
- Implement proper reactivity patterns
- Use TypeScript with Vue
- Follow single-file component structure

## Shopping UI Components

### Product Components
- ProductCard: Display product image, name, price, and quick actions
- ProductList: Grid/list view with pagination and sorting
- ProductDetail: Comprehensive product information with image gallery
- ProductSearch: Search bar with autocomplete and filters

### Shopping Cart Components
- CartItem: Individual cart item with quantity controls
- CartSummary: Order total calculation with taxes and shipping
- MiniCart: Dropdown cart preview in header
- CartDrawer: Slide-out cart for mobile

### Checkout Components
- CheckoutForm: Multi-step checkout process
- PaymentForm: Secure payment input with validation
- AddressForm: Shipping and billing address inputs
- OrderConfirmation: Order success page with details

## Styling Guidelines

- Use consistent spacing and typography
- Implement responsive design (mobile-first approach)
- Use CSS-in-JS or CSS modules for component-specific styles
- Follow accessible design principles (ARIA labels, keyboard navigation)
- Implement loading states and error handling UI

## State Management

- Cart state should persist across sessions (localStorage/sessionStorage)
- User authentication state management
- Product data caching for performance
- Error state handling with user-friendly messages

## Performance Optimization

- Implement lazy loading for product images
- Use virtual scrolling for large product lists
- Implement code splitting for route-based chunks
- Optimize bundle size with tree shaking
- Use memoization for expensive computations