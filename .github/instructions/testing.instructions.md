---
applyTo: 
  - "**/tests/**"
  - "**/*.test.{js,ts,py,go,java}"
  - "**/*.spec.{js,ts,py,go,java}"
description: "Testing instructions for the shopping application"
---

# Testing Instructions

## Testing Strategy

### Test Pyramid
- **Unit Tests (70%)**: Test individual functions and components
- **Integration Tests (20%)**: Test API endpoints and database interactions
- **E2E Tests (10%)**: Test complete user workflows

## Unit Testing Guidelines

### Frontend Components
- Test component rendering with different props
- Test user interactions (clicks, form submissions)
- Test state changes and side effects
- Mock external dependencies (APIs, services)

### Backend Services
- Test business logic functions
- Test data transformations
- Test error handling scenarios
- Mock database and external services

## Integration Testing

### API Testing
- Test complete request/response cycles
- Test authentication and authorization
- Test data persistence and retrieval
- Test error responses and status codes

### Database Testing
- Test queries and data relationships
- Test migrations and schema changes
- Test data validation and constraints
- Use test database with sample data

## E2E Testing Scenarios

### Shopping Workflows
1. **Product Browsing**
   - Search for products
   - Filter and sort results
   - View product details

2. **Shopping Cart**
   - Add products to cart
   - Update quantities
   - Remove items
   - Cart persistence across sessions

3. **Checkout Process**
   - Complete checkout form
   - Enter payment information
   - Place order successfully
   - Receive order confirmation

4. **User Account**
   - User registration
   - User login/logout
   - Profile management
   - Order history

## Test Data Management

### Test Fixtures
- Create reusable test data for products, users, orders
- Use factory patterns for generating test objects
- Implement data cleanup between tests
- Use database seeding for consistent test data

### Mock Services
- Mock payment gateways for testing
- Mock external APIs (shipping, inventory)
- Use in-memory databases for unit tests
- Mock email services for notifications

## Performance Testing

### Load Testing
- Test API endpoints under load
- Test database performance with large datasets
- Test concurrent user scenarios
- Monitor response times and resource usage

### Frontend Performance
- Test page load times
- Test bundle sizes and loading performance
- Test mobile responsiveness
- Test image loading and optimization

## Security Testing

### Authentication Testing
- Test login/logout functionality
- Test token expiration and refresh
- Test password reset workflows
- Test unauthorized access attempts

### Input Validation Testing
- Test SQL injection prevention
- Test XSS prevention
- Test CSRF protection
- Test file upload security

## Testing Best Practices

- Write tests before or alongside code (TDD/BDD)
- Keep tests simple and focused
- Use descriptive test names
- Maintain test independence
- Regular test maintenance and cleanup
- Achieve meaningful test coverage (aim for >80%)

## Example Test Scenarios

```javascript
// Frontend component test
describe('ProductCard', () => {
  it('should display product information correctly', () => {
    // Test implementation
  });
  
  it('should handle add to cart action', () => {
    // Test implementation
  });
});

// Backend API test
describe('POST /api/v1/cart/items', () => {
  it('should add item to cart successfully', () => {
    // Test implementation
  });
  
  it('should return error for invalid product', () => {
    // Test implementation
  });
});

// E2E test
describe('Checkout Flow', () => {
  it('should complete purchase successfully', () => {
    // Test complete workflow
  });
});
```