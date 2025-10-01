# GitHub Copilot Instructions

These instructions define how GitHub Copilot should assist with the shopping project. The goal is to ensure consistent, high-quality code generation aligned with our conventions, stack, and best practices.

## 🧠 Context

- **Project Type**: Shopping Application (E-commerce)
- **Language**: To be determined based on implementation
- **Framework / Libraries**: To be determined based on stack selection
- **Architecture**: To be determined (likely MVC or Clean Architecture for scalability)

## 🔧 General Guidelines

- Use modern, idiomatic patterns for the chosen language/framework
- Always prefer named functions and avoid long anonymous closures
- Add type annotations/interfaces where applicable
- Use consistent indentation and formatting
- Prefer readability over cleverness
- Follow SOLID principles for maintainable code

## 📁 File Structure

Use this structure as a guide when creating or updating files:

```text
src/
  components/       # UI components (if frontend)
  controllers/      # API controllers (if backend)
  services/         # Business logic
  models/          # Data models
  utils/           # Utility functions
  config/          # Configuration files
tests/
  unit/            # Unit tests
  integration/     # Integration tests
  e2e/            # End-to-end tests
```

## 🧶 Patterns

### ✅ Patterns to Follow

- **Shopping Domain Patterns**:
  - Product catalog management
  - Shopping cart functionality
  - Order processing workflow
  - User authentication and authorization
  - Payment processing integration
  - Inventory management

- **Code Quality**:
  - Input validation for all user inputs
  - Proper error handling with meaningful messages
  - Logging for debugging and monitoring
  - Security best practices (input sanitization, secure authentication)
  - Performance optimization for product searches and listings

### 🚫 Patterns to Avoid

- Don't generate code without appropriate tests
- Don't hardcode sensitive data (API keys, database credentials)
- Avoid exposing internal implementation details in APIs
- Don't implement insecure payment or authentication flows
- Avoid storing sensitive user data without encryption

## 🛍️ Shopping-Specific Guidelines

### Product Management
- Products should have proper categorization and search capabilities
- Include product images, descriptions, and pricing
- Implement inventory tracking and stock management
- Support product variants (size, color, etc.)

### Shopping Cart
- Implement persistent cart functionality
- Handle cart abandonment scenarios
- Support quantity updates and item removal
- Calculate totals including taxes and shipping

### Order Processing
- Implement order lifecycle management
- Support order status tracking
- Include order history functionality
- Handle payment processing securely

### User Experience
- Implement responsive design for mobile and desktop
- Include product search and filtering
- Support user reviews and ratings
- Implement wishlist functionality

## 🧪 Testing Guidelines

- Use appropriate testing framework for the chosen stack
- Include unit tests for business logic
- Test payment workflows with mock services
- Include integration tests for API endpoints
- Test user authentication and authorization flows

## 🔒 Security Considerations

- Implement secure authentication (OAuth, JWT, etc.)
- Validate and sanitize all user inputs
- Use HTTPS for all communications
- Implement rate limiting for APIs
- Follow OWASP security best practices
- Secure payment data handling (PCI compliance considerations)

## 🧩 Example Prompts

- `Copilot, create a Product model with fields for name, description, price, category, and inventory count`
- `Copilot, implement a shopping cart service that can add, remove, and update item quantities`
- `Copilot, generate a secure user authentication system with registration and login`
- `Copilot, create an order processing workflow with status tracking`
- `Copilot, implement product search with filtering by category and price range`

## 🔁 Iteration & Review

- All Copilot-generated code should be reviewed before committing
- Ensure security best practices are followed, especially for payment and auth
- Test thoroughly, particularly for shopping cart and payment workflows
- Use comments to clarify business logic before invoking Copilot
- Consider performance implications for product catalog operations

## 📚 References

- E-commerce best practices documentation
- Payment gateway integration guides
- Security standards for e-commerce applications
- Framework-specific documentation (to be added when stack is chosen)