# Task Management Application

A React-based Task Management application built using **React**, **Redux Toolkit**, **Redux Thunk**, **React Router**, and **Material UI**.  
The application demonstrates clean state management, scalable architecture, and thoughtful UI/UX decisions while fulfilling all the given functional requirements.

---

## ✨ Overview

This application allows authenticated users to view, manage, and update tasks efficiently.  
It focuses on **predictable state management**, **component reusability**, and **user-friendly interactions**, following modern React and Redux best practices.

---

## 🛠️ Tech Stack

- **React 19**
- **Redux Toolkit**
- **Redux Thunk** (for async actions)
- **React Router v7**
- **Material UI (MUI v9)**

---

## ✅ Implemented Features

### 🔐 Authentication
- User **Registration** and **Login**
- Client-side authentication using local storage
- Protected routes using custom `ProtectedRoute`

---

### 📋 Task List (Dashboard)
- Tasks displayed in a **table format**
- Each task shows:
  - Title
  - Assigned To (email)
  - Status (Open, In-Progress, Under-Review, Done)
  - Priority (High / Medium / Low)
  - Start Date
  - End Date (only when task is Done)
- Row click navigates to **Task Details Page**
- Edit and Delete actions available per row
- Pagination support

---

### 🔁 Sorting
- Sorting enabled using header arrows for:
  - Title
  - Assigned To
  - Status
  - Priority
- Sorting order toggles between ascending and descending
- Sorting works seamlessly with pagination and filtering

---

### ✏️ Edit Task
- Edit action opens a **modal dialog**
- All task fields can be updated (status, priority, assignee, etc.)
- Form inputs are reusable custom components
- Task updates are handled via Redux state

---

### 🗑 Delete Task
- Delete button opens a confirmation dialog
- Task is removed only after explicit confirmation

---

### 📄 Task Details Page
- Accessible via `/tasks/:id`
- Displays full task information
- Supports browser refresh and direct URL access
- Shows loading skeleton while data is fetched
- Redirects safely if the task does not exist
- Includes a “Back to all tasks” button

---

### 🔄 Async Data Handling
- Tasks are fetched asynchronously using Redux Thunk
- Initial task data loaded from:
 


 https://jsonplaceholder.typicode.com/todos
- Tasks are enriched client-side with:
- Priority
- Dates
- Assigned email

---

## 🧠 Thought Process & Design Decisions (Short)

### State Management
- Redux Toolkit was chosen for **predictable state updates** and cleaner reducer logic
- Async logic is isolated using `createAsyncThunk`
- Selectors are used to derive filtered, sorted, and paginated data efficiently

### Data Flow
- Followed a clear pipeline:

Fetch → Filter → Sort → Paginate → Render
- This ensures consistent behavior and avoids UI bugs

### UI & UX
- Material UI ensures consistency, accessibility, and responsiveness
- Edit actions use modals to avoid unnecessary page navigation
- Skeleton loaders improve perceived performance during async operations

### Scalability
- Reusable components (`CustomButton`, `CustomTextInput`, etc.)
- Centralized utilities for sorting, validation, and date formatting
- Clean separation of concerns across pages, components, and reducers

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── common/
│   ├── layout/
│   └── tasks/
├── pages/
│   ├── Dashboard.jsx
│   ├── TaskDetailsPage.jsx
│   ├── Login.jsx
│   └── Registration.jsx
├── reducers/
│   ├── taskSlices.js
│   ├── taskThunks.js
│   └── taskSelector.js
├── routes/
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
├── utils/
│   ├── date.js
│   ├── sort.js
│   └── validation.js
└── App.jsx


