---
applyTo: 
  - "**/*.{py,js,ts,go,java,php}"
  - "**/api/**"
  - "**/backend/**"
  - "**/server/**"
description: "Backend API development instructions for the shopping application"
---

# Backend API Development Instructions

## API Design Principles

- Follow RESTful conventions for resource-based endpoints
- Use consistent HTTP status codes
- Implement proper error handling with meaningful error messages
- Use JSON for request/response bodies
- Include API versioning strategy (e.g., /api/v1/)

## Core API Endpoints

### Product Management
```
GET    /api/v1/products              # List products with pagination/filtering
GET    /api/v1/products/{id}         # Get single product
POST   /api/v1/products              # Create product (admin)
PUT    /api/v1/products/{id}         # Update product (admin)
DELETE /api/v1/products/{id}         # Delete product (admin)
GET    /api/v1/categories            # List categories
GET    /api/v1/products/search       # Search products
```

### Shopping Cart
```
GET    /api/v1/cart                  # Get user's cart
POST   /api/v1/cart/items            # Add item to cart
PUT    /api/v1/cart/items/{id}       # Update cart item quantity
DELETE /api/v1/cart/items/{id}       # Remove item from cart
DELETE /api/v1/cart                  # Clear cart
```

### Order Management
```
GET    /api/v1/orders                # List user's orders
GET    /api/v1/orders/{id}           # Get order details
POST   /api/v1/orders                # Create order (checkout)
PUT    /api/v1/orders/{id}/status    # Update order status (admin)
```

### User Authentication
```
POST   /api/v1/auth/register         # User registration
POST   /api/v1/auth/login            # User login
POST   /api/v1/auth/logout           # User logout
POST   /api/v1/auth/refresh          # Refresh token
GET    /api/v1/auth/profile          # Get user profile
PUT    /api/v1/auth/profile          # Update user profile
```

## Data Models

### Product Model
- id, name, description, price, category_id
- images[], inventory_count, sku
- created_at, updated_at, is_active

### User Model
- id, email, password_hash, first_name, last_name
- phone, addresses[], created_at, updated_at

### Order Model
- id, user_id, status, total_amount
- shipping_address, billing_address
- order_items[], payment_info, created_at

### Cart Model
- user_id, product_id, quantity
- added_at, updated_at

## Security Guidelines

- Implement JWT-based authentication
- Use bcrypt or similar for password hashing
- Validate and sanitize all input data
- Implement rate limiting to prevent abuse
- Use CORS policies appropriately
- Never expose sensitive data in responses
- Implement proper authorization checks

## Database Guidelines

- Use database migrations for schema changes
- Implement proper indexing for search queries
- Use transactions for order processing
- Implement soft deletes where appropriate
- Use connection pooling for performance

## Error Handling

- Return consistent error response format:
```json
{
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "Product with ID 123 not found",
    "details": {}
  }
}
```

## Testing Guidelines

- Unit tests for business logic
- Integration tests for API endpoints
- Mock external services (payment gateways)
- Test authentication and authorization flows
- Test edge cases and error scenarios