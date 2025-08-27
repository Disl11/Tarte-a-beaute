# DOC - Ecommerce Tarte à Beauté

## Tarte à Beauté — Mini E-Commerce Shop

Front
-end web development project for a mini cosmetics shop, using HTML, CSS, and Vanilla JavaScript.

---

## Project Name

**TARTE À BEAUTÉ**

---

## Visual Identity

- **Color palette:**

  - `#e9cbff` (primary color)
  - `#fdecda` (secondary color)
  - `#fff` (tertiary color)
  - `#c779ff` (quaternary color)

- **Font:**
  - _Amita_ for headings
  - _Arial_ for body text

---

## Data — Cart and Orders Structure

json

- **Cart**

```
[
  {
    product: {},
    numberInCart: 2
  }
]
```

- **Orders**

```
[
  {
    coordinates: {},
    estimatedDeliveryDate: "",
    orderId: 0,
    paymentInfo: {},
    pricePaid: 0,
    products: [
      {},{}
    ]
  }
]
```

---

## _Description_

This project involves creating a mini online shop with a cart and ordering system, following best practices in **accessibility**, **eco-design**, and **responsive design** (mobile-first).

---

Main Features

- Home page listing products from a JSON file

- Search and filtering by name and category

- Add to cart from the product page

- Interactive cart with quantity management, removal, and dynamic total

- 3-step checkout: contact details, delivery, simulated payment

- Data persistence via localStorage

- Responsive & accessible design (keyboard navigation, ARIA, contrast…)

---

## Technologies Used

- HTML5 — Semantic structure

- CSS3 — Responsive, mobile-first

- Vanilla JavaScript — Cart logic, localStorage

- JSON — Mock API for product data

---

# Project Structure

```
/
├── assets/
│ ├── css/
│ │ └── style.css
│ │
│ ├── js/
│ │ ├── shared/
│ │ │ ├── api.js
│ │ │ ├── state.js
│ │ │ ├── domain.js
│ │ │ └── utils.js
│ │ │
│ │ └── pages/
│ │ ├── index.js
│ │ ├── product.js
│ │ ├── cart.js
│ │ └── checkout.js
│ │
│ ├── images/
│ └── fonts/
│
├── data/
│ └── products.json
│
├── docs/
│ └── maquettage.pdf
│
├── cart.html
├── checkout.html
├── index.html
├── product.html
└── README.md
```

---

## Methodology

Work done locally

Task management using Trello (Backlog → To Do → In Progress → Done)

Git workflow: main branch, dev branch, and one branch per feature/page

---

## Installation

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd Tarte-a-beaute
   ```

2. **Open the project**

   - Navigate to the project directory
   - Open `index.html` in your browser or use a local development server

3. **Using a local server (recommended)**

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:8000`
   - The home page will display all available products

**Note:** A local server is recommended to avoid CORS issues when loading the JSON data file.

---

# _Index Page_

- Products are loaded from the JSON data file using the API module.
- The page displays all products in a responsive grid layout with filtering and search capabilities.
- Pagination is automatically implemented when there are more than 25 products.

---

## _HTML Structure Creation_

- Product cards are generated dynamically using a template system.
- Each product article contains image, title, price, stock information, and add-to-cart button.
- Filter tags and search input are created dynamically based on available product categories.

---

## _Product Display and Interaction_

- **Product cards**: Display product image, name, price, and stock status with color coding.
- **Stock indicators**: Green for in-stock, red for low stock, grey for out of stock.
- **Add to cart**: Button is disabled if product is out of stock or already in cart.
- **Product navigation**: Clicking on product image redirects to detailed product page.

---

## _Search and Filtering_

- **Search functionality**: Real-time filtering by product name (case-insensitive).
- **Category filtering**: Dynamic tag buttons allow filtering by product categories.
- **Combined filtering**: Search and category filters work together.
- **Filter reset**: Clearing search input or deselecting tags refreshes the product list.

---

## _Pagination System_

- **Automatic pagination**: Activates when more than 25 products are displayed.
- **Page selector**: Dropdown menu to navigate between pages.
- **Responsive navigation**: Maintains filters and search when changing pages.
- **Scroll behavior**: Automatically scrolls to top when changing pages.

---

## _Accessibility & User Experience_

- Keyboard navigation support for all interactive elements
- Loading states and error handling for broken product images
- Cart tooltip updates in real-time when products are added
- Responsive design optimized for mobile and desktop

---

## _Use of Shared Modules_

- The script uses other files to:
  - Load products (`api.js`)
  - Manage cart state (`domain.js`, `state.js`)
  - Handle cart operations and UI updates (`utils.js`)

---

# _Product Page_

- The product ID is retrieved from the URL.
- Product data (name, price, stock, image, rating, etc.) is loaded using an external function.
- This data is then used to build the product display.

---

## _HTML Structure Creation_

- All elements (image, name, price, stock, rating, buttons) are generated with JavaScript.
- A structure using `<main>` and `<div class="container">` is created dynamically.

---

## _Displaying Product Information_

- The product’s name, price, available stock, and rating are clearly shown.
- A default image is displayed if the original image link is broken.

---

## _Button Handling_

- Two buttons are displayed:
  - **Add to cart**: disabled if the product is out of stock or already in the cart.
  - **Continue shopping**: redirects to the homepage.
- Clicking **Add to cart** stores the product in the cart and disables the button.

---

## _Accessibility & User Feedback_

- Alt text for images
- Alert message during redirection
- Cart icon is updated after adding a product

---

## _Use of Shared Modules_

- The script uses other files to:
  - Load products (`api.js`)
  - Manage cart state (`domain.js`, `state.js`)
  - Get the product ID from the URL (`utils.js`)

---

# _Checkout Page_

- Multi-step checkout process with form validation and order processing.
- Validates cart contents and calculates total pricing including delivery fees.
- Handles customer information, payment details, and order confirmation.

---

## _Cart Validation and Pricing_

- **Empty cart check**: Redirects to cart page if no items are present.
- **Stock verification**: Revalidates product availability before order completion.
- **Dynamic pricing**: Calculates subtotal, delivery fees (free over 50€), and total.
- **Delivery estimation**: Automatically calculates delivery date (3 days from order).

---

## _Two-Step Form Process_

- **Step 1 - Customer Information**:

  - Personal details: name, email, phone number
  - Delivery address: street, city, postal code
  - Form validation with regex patterns for data integrity
  - Required field management based on active step

- **Step 2 - Payment Information**:
  - Credit card details: number, holder name, expiry, CVV
  - Terms and conditions acceptance
  - Payment validation including expiry date verification

---

## _Form Validation and Security_

- **Client-side validation**: Regex patterns for names, email, phone, postal codes
- **Card validation**: Number format and expiry date checks
- **Required fields**: Dynamic management based on current step
- **Error handling**: User feedback for invalid data and stock issues

---

## _Order Processing and Confirmation_

- **Order creation**: Combines customer data, payment info, and cart contents
- **Unique order ID**: Generated for tracking purposes
- **Data persistence**: Order saved to localStorage for future reference
- **Success page**: Displays order confirmation with all relevant details

---

## _Navigation and User Experience_

- **Step navigation**: Forward/backward movement between checkout steps
- **Cart integration**: Real-time cart tooltip updates
- **Responsive design**: Mobile-optimized form layouts
- **Accessibility**: ARIA labels, keyboard navigation, clear error messages

---

## _Use of Shared Modules_

- The script uses other files to:
  - Validate cart state and stock (`domain.js`)
  - Access cart data (`state.js`)
  - Handle UI updates and empty cart scenarios (`utils.js`)

---

# _Cart Page_

- Displays all products added to the cart with quantity management and pricing calculations.
- Provides interactive controls for quantity adjustment, item removal, and checkout navigation.
- Real-time calculation of subtotals, delivery fees, and total pricing.

---

## _HTML Structure Creation_

- Cart items are generated dynamically using JavaScript DOM manipulation.
- Each cart item contains product image, information, quantity controls, and price display.
- Price summary section displays subtotal, delivery fees, and total with continue shopping and checkout buttons.

---

## _Product Display and Information_

- **Product cards**: Display product image, name, individual price, and stock status.
- **Stock indicators**: Green for adequate stock (>10), red for low stock (≤10).
- **Image handling**: Fallback to default image if product image fails to load.
- **Product navigation**: Clicking on product image redirects to detailed product page.

---

## _Quantity Management and Controls_

- **Quantity controls**: Plus/minus buttons and direct input for quantity adjustment.
- **Stock validation**: Quantity cannot exceed available stock or maximum limit (10 items).
- **Real-time updates**: Item subtotal and cart total update immediately on quantity changes.
- **Input constraints**: Minimum quantity of 1, maximum based on stock availability.

---

## _Cart Operations and Actions_

- **Item removal**: Trash button to completely remove items from cart.
- **Cart persistence**: Changes are saved to localStorage for session persistence.
- **Dynamic recalculation**: All prices and totals update automatically on any cart modification.
- **Empty cart handling**: Appropriate UI updates when cart becomes empty.

---

## _Pricing and Calculations_

- **Individual pricing**: Each item displays unit price and calculated subtotal.
- **Delivery fees**: Free delivery for orders under 25€, 3.5€ fee for orders above.
- **Total calculation**: Combined product total plus applicable delivery fees.
- **Price formatting**: Consistent currency formatting with proper decimal places.

---

## _Navigation and User Experience_

- **Continue shopping**: Direct link back to product catalog.
- **Checkout navigation**: Proceed to checkout process with current cart contents.
- **Responsive design**: Mobile-optimized layout for all screen sizes.
- **User feedback**: Alerts for quantity limits and validation messages.

---

## _Use of Shared Modules_

- The script uses other files to:
  - Remove products from cart (`domain.js`)
  - Access current cart state (`state.js`)
