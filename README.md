# 📚 Bookstore Application (React)

A simple and user-friendly **Bookstore Application** built using **React**, **Redux Toolkit**, and **Material UI**.  
The application includes a complete **authentication flow (Register & Login)** and a **protected dashboard** where users can manage books.

🚀 **Live Demo (Surge Hosted):**  
👉 https://durgasankar-bookstore.surge.sh

---

## ✨ Features

- ✅ User Registration
- ✅ User Login (Authentication using Local Storage)
- ✅ Protected Routes (Dashboard accessible only after login)
- ✅ Add Books using Modal
- ✅ View Books in a Grid using Material UI Cards
- ✅ Mark Books as Read / Unread
- ✅ Delete Books
- ✅ Search Books (Global Search)
- ✅ Filter Books (All / Read / Unread)
- ✅ Logout Functionality with Toast Notification
- ✅ Responsive UI

---

## 🧭 Application Flow

1. **Registration Page**
   - User registers with details like name, email, password, etc.
   - User data is stored in **localStorage**

2. **Login Page**
   - User logs in using registered credentials
   - On successful login, an authentication token is saved in **localStorage**

3. **Dashboard (Protected Route)**
   - User is redirected to the dashboard after login
   - Users can:
     - Add new books
     - View all books
     - Search and filter books
     - Mark books as read/unread
     - Delete books

4. **Logout**
   - Clears authentication token from localStorage
   - Redirects user back to login page
   - Displays a success toast

---

## 🛠️ Tech Stack

- **Frontend:** React (Create React App)
- **State Management:** Redux Toolkit
- **UI Library:** Material UI (MUI)
- **Routing:** React Router DOM
- **Notifications:** Custom Toast Provider
- **Authentication:** Local Storage based
- **Deployment:** Surge

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/durgasankar/bookstore-frontend.git
cd bookstore-frontend
make sure node version 22 is installed 
npm install 
npm start