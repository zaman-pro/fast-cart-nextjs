# Next.js Product Management App

A simple **Next.js 15 (App Router)** application with basic authentication using **NextAuth.js**. Users can view public pages like landing and product details, and, after logging in, access a protected product management page to add new products.

---

## Project Overview

This project demonstrates a simple product management system with the following features:

- Publicly accessible pages:

  - Landing page with navbar, hero, product highlights, and footer
  - Product list and product details pages

- Authentication with NextAuth.js (credentials or social login)
- Protected dashboard page to add products (accessible only after login)
- Basic CRUD interaction with a database or mock backend
- Optional enhancements like loading spinners, toast messages, and theme toggle

---

## Core Features

### 1. Landing Page (`/`)

- Navbar, Hero, Product Highlights, Footer
- Navigation to **Login** and **Products**
- Publicly accessible, no authentication required

### 2. Login Page (`/login`)

- NextAuth.js authentication (credentials or social login like Google)
- Redirects to `/products` after successful login

### 3. Product List Page (`/products`)

- Publicly accessible
- Fetches and displays a list of products
- Each product includes:

  - Name
  - Description
  - Price
  - Details button

### 4. Product Details Page (`/products/[id]`)

- Shows full details of a single product
- Publicly accessible

### 5. Protected Page: Add Product (`/dashboard/add-product`)

- Accessible only when logged in
- Form to add a new product and store it in the database
- Redirects unauthenticated users to `/login`

---

## Optional Enhancements

- Loading spinner while submitting forms
- Toast notifications on successful product creation
- Light/dark theme toggle

---

## Technologies Used

- **Next.js 15** (App Router)
- **NextAuth.js** for authentication
- **MongoDB** or mock backend for storing products
- **React** (functional components with hooks)
- **Tailwind CSS** for styling
- **React Icons** for icons and UI enhancements

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd <repository-directory>
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables**

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_MONGODB_URI=<your-mongodb-connection-string>
DB_NAME=<database-name>
NEXTAUTH_SECRET=<any-random-secret>
NEXTAUTH_SECRET=<your-local/host-url>

```

1. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Route Summary

| Route                    | Description      | Access    |
| ------------------------ | ---------------- | --------- |
| `/`                      | Landing Page     | Public    |
| `/login`                 | Login Page       | Public    |
| `/products`              | Product List     | Public    |
| `/products/[id]`         | Product Details  | Public    |
| `/dashboard/add-product` | Add Product Page | Protected |

---

## Project Structure (Highlights)

```
/app
  /dashboard
    add-product/page.jsx       # Protected add product page
  /products
    [id]/page.jsx              # Product details page
    page.jsx                   # Product list page
  /login/page.jsx               # Login page
  /page.jsx                     # Landing page
/actions
  auth/
    registerUser.js             # API action for user registration
/lib
  dbConnect.js                  # MongoDB connection helper
```

---

## Notes

- Ensure MongoDB is running and the URI is correctly set in `.env.local`.
- Protected routes are implemented using **NextAuth.js session checks**.
- Forms include basic loading states and error/success feedback.

---

## License

MIT License

# Next.js Product Management App

A simple **Next.js 15 (App Router)** application with basic authentication using **NextAuth.js**. Users can view public pages like landing and product details, and, after logging in, access a protected product management page to add new products.

---

## Project Overview

This project demonstrates a simple product management system with the following features:

- Publicly accessible pages:

  - Landing page with navbar, hero, product highlights, and footer
  - Product list and product details pages

- Authentication with NextAuth.js (credentials or social login)
- Protected dashboard page to add products (accessible only after login)
- Basic CRUD interaction with a database or mock backend
- Optional enhancements like loading spinners, toast messages, and theme toggle

---

## Core Features

### 1. Landing Page (`/`)

- Navbar, Hero, Product Highlights, Footer
- Navigation to **Login** and **Products**
- Publicly accessible, no authentication required

### 2. Login Page (`/login`)

- NextAuth.js authentication (credentials or social login like Google)
- Redirects to `/products` after successful login

### 3. Product List Page (`/products`)

- Publicly accessible
- Fetches and displays a list of products
- Each product includes:

  - Name
  - Description
  - Price
  - Details button

### 4. Product Details Page (`/products/[id]`)

- Shows full details of a single product
- Publicly accessible

### 5. Protected Page: Add Product (`/dashboard/add-product`)

- Accessible only when logged in
- Form to add a new product and store it in the database
- Redirects unauthenticated users to `/login`

---

## Optional Enhancements

- Loading spinner while submitting forms
- Toast notifications on successful product creation
- Light/dark theme toggle

---

## Technologies Used

- **Next.js 15** (App Router)
- **NextAuth.js** for authentication
- **MongoDB** or mock backend for storing products
- **React** (functional components with hooks)
- **Tailwind CSS** for styling
- **React Icons** for icons and UI enhancements

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd <repository-directory>
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables**

Create a `.env.local` file with the following variables:

```env
MONGODB_URI=<your-mongodb-connection-string>
DB_NAME=<database-name>
NEXTAUTH_SECRET=<any-random-secret>
GOOGLE_CLIENT_ID=<optional-if-google-login>
GOOGLE_CLIENT_SECRET=<optional-if-google-login>
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Route Summary

| Route                    | Description      | Access    |
| ------------------------ | ---------------- | --------- |
| `/`                      | Landing Page     | Public    |
| `/login`                 | Login Page       | Public    |
| `/products`              | Product List     | Public    |
| `/products/[id]`         | Product Details  | Public    |
| `/dashboard/add-product` | Add Product Page | Protected |

---

## Project Structure (Highlights)

```
/app
  /dashboard
    add-product/page.jsx       # Protected add product page
  /products
    [id]/page.jsx              # Product details page
    page.jsx                   # Product list page
  /login/page.jsx               # Login page
  /page.jsx                     # Landing page
/actions
  auth/
    registerUser.js             # API action for user registration
/lib
  dbConnect.js                  # MongoDB connection helper
```

---

## Notes

- Ensure MongoDB is running and the URI is correctly set in `.env.local`.
- Protected routes are implemented using **NextAuth.js session checks**.
- Forms include basic loading states and error/success feedback.

---
