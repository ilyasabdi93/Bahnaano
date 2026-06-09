# Requirements Document

## 1. Application Overview

### 1.1 Application Name
Fikrado Electronics

### 1.2 Application Description
A professional electronics e-commerce website featuring modern design with 3D animations, day/night mode toggle, multiple payment systems, and Google OAuth authentication.

## 2. Users and Usage Scenarios

### 2.1 Target Users
- Electronics consumers seeking smartphones, laptops, cameras, headphones, TVs, and accessories
- Users preferring mobile payment methods (Hormuud EVC Plus) or international card payments (Mastercard)

### 2.2 Core Usage Scenarios
- Browse and purchase electronics products
- Complete payment using Hormuud EVC Plus or Mastercard
- Manage shopping cart and orders
- Switch between light and dark themes based on preference

## 3. Page Structure and Functionality

### 3.1 Page Structure

```
Fikrado Electronics
├── Home Page
├── Product Listing Page
├── Product Detail Page
├── Shopping Cart Page
├── Checkout Page
├── Payment Page
├── Order Confirmation Page
├── Login Page
└── User Account Page
    ├── Order History
    └── Account Settings
```

### 3.2 Functionality by Page

#### 3.2.1 Home Page
- Display hero section with background image (https://miaoda-conversation-file.s3cdn.medo.dev/user-c790jgvcgglc/app-c7hn54wzdurl/20260608/4b0bc3ced2e37b45169969fde57a74fa.webp.jpg) featuring 3D animation effects
- Show featured electronics products
- Display product categories: smartphones, laptops, cameras, headphones, TVs, accessories
- Provide navigation to product listing pages
- Include day/night mode toggle button in header
- Show login button in header

#### 3.2.2 Product Listing Page
- Display product grid with sample electronics products
- Show product image, name, price for each item
- Provide click action to view product details
- Support day/night theme display

#### 3.2.3 Product Detail Page
- Display product image, name, price, description
- Show \"Add to Cart\" button
- Display product specifications
- Support day/night theme display

#### 3.2.4 Shopping Cart Page
- List all items added to cart with image, name, price, quantity
- Allow quantity adjustment for each item
- Allow item removal from cart
- Display total price
- Provide \"Proceed to Checkout\" button
- Support day/night theme display

#### 3.2.5 Checkout Page
- Display order summary with items and total price
- Collect shipping information: name, address, phone number
- Provide \"Continue to Payment\" button
- Support day/night theme display

#### 3.2.6 Payment Page
- Display two payment options:
  - Hormuud EVC Plus (Somali mobile payment)
  - Mastercard
- For Hormuud EVC Plus: collect mobile number
- For Mastercard: collect card number, expiry date, CVV, cardholder name
- Provide \"Complete Payment\" button
- Support day/night theme display

#### 3.2.7 Order Confirmation Page
- Display order confirmation message
- Show order number and details
- Provide link to view order in account page
- Support day/night theme display

#### 3.2.8 Login Page
- Display Google OAuth login button
- Use Google Client ID: 293057151720-j902kohmducgbernpo3su9st1rcf3fc0.apps.googleusercontent.com
- Redirect to previous page after successful login
- Support day/night theme display

#### 3.2.9 User Account Page
- Display user profile information
- Show order history with order number, date, total price, status
- Allow viewing order details
- Provide logout button
- Support day/night theme display

## 4. Business Rules and Logic

### 4.1 Authentication Flow
- Users must log in via Google OAuth to proceed to checkout
- Login uses Google Client ID: 293057151720-j902kohmducgbernpo3su9st1rcf3fc0.apps.googleusercontent.com
- After successful login, user session is maintained
- Logged-in users can access checkout and account pages

### 4.2 Shopping Cart Logic
- Users can add products to cart without logging in
- Cart data persists during browsing session
- Quantity can be adjusted between 1 and 99
- Total price updates automatically when quantity changes or items are removed

### 4.3 Payment Processing
- Users select one payment method: Hormuud EVC Plus or Mastercard
- For Hormuud EVC Plus: validate mobile number format
- For Mastercard: validate card number, expiry date, CVV format
- After payment submission, order is created and stored in backend
- Payment confirmation triggers order confirmation page display

### 4.4 Theme Toggle
- Day/night mode toggle button switches between light and dark themes
- Theme preference applies across all pages
- Theme selection persists during user session

### 4.5 Sample Products
- Website includes pre-populated sample products in categories:
  - Smartphones
  - Laptops
  - Cameras
  - Headphones
  - TVs
  - Accessories
- Each product has image, name, price, description, specifications

## 5. Exceptions and Edge Cases

| Scenario | Handling |
|----------|----------|
| User attempts checkout without login | Redirect to login page, return to checkout after login |
| Empty shopping cart at checkout | Display message \"Your cart is empty\", disable checkout button |
| Invalid payment information submitted | Display error message, allow user to correct and resubmit |
| Payment processing fails | Display error message, allow user to retry or select different payment method |
| Google OAuth login fails | Display error message, allow user to retry login |
| Network error during payment | Display error message, preserve cart data, allow user to retry |

## 6. Acceptance Criteria

1. User opens home page and sees hero section with background image (https://miaoda-conversation-file.s3cdn.medo.dev/user-c790jgvcgglc/app-c7hn54wzdurl/20260608/4b0bc3ced2e37b45169969fde57a74fa.webp.jpg) displaying 3D animation effects
2. User clicks on a product category and views product listing page with sample electronics products
3. User clicks on a product and views product detail page with specifications
4. User clicks \"Add to Cart\" and product is added to shopping cart
5. User navigates to shopping cart page and sees added items with total price
6. User clicks \"Proceed to Checkout\" and is redirected to login page
7. User clicks Google OAuth login button and successfully logs in using Google Client ID: 293057151720-j902kohmducgbernpo3su9st1rcf3fc0.apps.googleusercontent.com
8. User completes shipping information on checkout page
9. User selects payment method (Hormuud EVC Plus or Mastercard) and enters payment details
10. User clicks \"Complete Payment\" and sees order confirmation page with order number
11. User toggles day/night mode button and theme switches between light and dark across all pages

## 7. Out of Scope for Current Release

- User registration with email/password
- Product search functionality
- Product filtering and sorting options
- Product reviews and ratings
- Wishlist functionality
- Order tracking system
- Email notifications for order confirmation
- Admin panel for product management
- Inventory management system
- Multiple shipping address management
- Promotional codes and discounts
- Multi-language support
- Currency conversion
- Social media sharing
- Live chat support
- Product comparison feature
- Recently viewed products
- Recommended products based on browsing history