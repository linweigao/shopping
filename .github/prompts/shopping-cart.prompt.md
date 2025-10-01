---
description: "Prompt for creating shopping cart functionality"
---

# Shopping Cart Implementation Prompt

Create a complete shopping cart system that includes:

## Requirements

1. **Cart State Management**
   - Add items to cart with product ID and quantity
   - Update item quantities (increase/decrease)
   - Remove items from cart
   - Clear entire cart
   - Calculate cart totals (subtotal, tax, shipping, total)

2. **Cart Persistence**
   - Save cart state to localStorage/sessionStorage
   - Restore cart state on page reload
   - Sync cart with backend when user is authenticated

3. **Cart Validation**
   - Validate product availability and stock levels
   - Check for price changes since items were added
   - Handle discontinued products gracefully

4. **Cart UI Components**
   - Cart item display with product info, quantity controls, and remove button
   - Cart summary with totals breakdown
   - Empty cart state with call-to-action
   - Mini cart for header/navigation

5. **Shopping Cart API**
   - RESTful endpoints for cart operations
   - User authentication and cart ownership
   - Inventory checking and reservation

## Implementation Guidelines

- Use modern state management patterns
- Implement proper error handling for all operations
- Include loading states for async operations
- Add comprehensive unit and integration tests
- Follow accessibility best practices
- Optimize for performance with large numbers of items

## Example Usage

```javascript
// Add item to cart
await cartService.addItem({ productId: '123', quantity: 2 });

// Update quantity
await cartService.updateQuantity('123', 3);

// Remove item
await cartService.removeItem('123');

// Get cart summary
const summary = cartService.getCartSummary();
```

Please implement the shopping cart functionality following the project's established patterns and coding standards.