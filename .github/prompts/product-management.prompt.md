---
description: "Prompt for implementing product management system"
---

# Product Management System Prompt

Create a comprehensive product management system for the shopping application that includes:

## Requirements

1. **Product Data Model**
   - Product entity with all necessary fields (name, description, price, SKU, etc.)
   - Product categories and subcategories
   - Product variants (size, color, etc.)
   - Product images and media management
   - Inventory tracking and stock levels

2. **Product CRUD Operations**
   - Create new products with validation
   - Read/retrieve products with filtering and pagination
   - Update existing products with change tracking
   - Soft delete products (maintain order history)

3. **Product Search and Filtering**
   - Full-text search across product names and descriptions
   - Filter by category, price range, brand, ratings
   - Sort by price, popularity, newest, ratings
   - Search suggestions and autocomplete

4. **Product Display Components**
   - Product grid/list views with responsive design
   - Product detail pages with image galleries
   - Product comparison functionality
   - Related/recommended products

5. **Admin Product Management**
   - Product creation and editing forms
   - Bulk product operations (import/export)
   - Inventory management interface
   - Product analytics and reporting

## Implementation Guidelines

- Use efficient database queries with proper indexing
- Implement caching for frequently accessed products
- Include image optimization and CDN integration
- Add comprehensive validation for all product data
- Implement proper error handling and user feedback
- Include admin security and role-based access control

## Search Performance

- Implement search indexing (Elasticsearch/Algolia)
- Use database views for complex queries
- Implement query optimization
- Add search result caching
- Include search analytics

## Example API Endpoints

```
GET    /api/v1/products?category=electronics&price_min=100&price_max=500
GET    /api/v1/products/search?q=smartphone&sort=price_asc
GET    /api/v1/products/{id}
POST   /api/v1/admin/products
PUT    /api/v1/admin/products/{id}
DELETE /api/v1/admin/products/{id}
```

Please implement the product management system following the project's established patterns and ensuring optimal performance for product catalogs.