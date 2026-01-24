# Book Inventory Management System

The Book Inventory Management System is a web application built using React (Vite) that allows users to manage and explore a collection of books. The application fetches real book data from the Google Books API and also allows users to add, edit, and delete their own books with persistent storage.

This project was developed as part of a technical assignment to demonstrate core frontend skills such as API integration, CRUD operations, routing, and state management in React.

---

## Live Demo

https://react-book-inventory-system-lcrjbaamn-shubham34928s-projects.vercel.app/

---

## GitHub Repository

https://github.com/Shubham34928/book_inventory

---

## Features

- Fetches book data dynamically from the Google Books API  
- Displays books in a scrollable table layout  
- View detailed information for a selected book  
- Preview button opens the book preview in a new browser tab  
- Add new books to the inventory  
- Edit and delete user-added books  
- Persistent storage using browser localStorage  
- Client-side routing using React Router  
- Responsive UI built using custom CSS  

---

## Pages -

### Home Page
Displays a list of books fetched from the API along with user-added books. Users can add a new book, edit or delete user-added books, and navigate to the details page.

### Book Details Page
Displays detailed information about a selected book, including author, publisher, description, and a preview link that opens in a new tab.

---

## Form Validation

- Book title is required  
- Author name is required  
- Publisher name is required  
- Image URL is optional  

---

## Technologies Used

- React (Vite)
- JavaScript (ES6+)
- CSS
- React Router
- Google Books API
- Browser localStorage
- Vercel (deployment)

---

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Shubham34928/book_inventory.git
2. Navigate to the project directory:

   ```bash
   cd book_inventory
3. Install dependencies:

   ```bash
   npm install
4. Create a .env file in the root directory:

   ```bash
   textVITE_GOOGLE_BOOKS_API_KEY=your_api_key_here
5. Start the development server:
   ```bash
   npm run dev
6. The application will be accessible at `http://localhost:3000`.

---

## Deployment

The project is deployed on Vercel. Environment variables are configured in the Vercel dashboard, and client-side routing is handled correctly for production.

---
## Author :
### Shubham Bachane
GitHub:` https://github.com/Shubham34928`
