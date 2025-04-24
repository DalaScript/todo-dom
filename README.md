
# Todo DOM – Todo App Frontend

## 🚀 Overview
This is the **frontend UI** for the `Todo API - Task Management System`, built entirely using **Vanilla JavaScript**, **HTML**, and **TailwindCSS**, as part of my learning journey at the **LineDev Bootcamp**.

> ⚠️ This is a standalone frontend project. To run it fully, you need to clone and run the backend from this repo:  
> 🔗 [`todo-back`](https://github.com/DalaScript/todo-back)

---

## 📌 Features
✅ **User Registration & Login**  
✅ **JWT-based Authentication** (stored in `localStorage`)  
✅ **Create / Edit / Delete Tasks**  
✅ **Filter Tasks by Completion, Priority, or Date Range**  
✅ **Sort Tasks** (Newest / Oldest)  
✅ **Task Completion Toggle**  
✅ **View Profile Info** (username, email, role)  
✅ **Logout Functionality**  
✅ **Admin Route Support** (on backend)  
✅ **Fully styled with TailwindCSS**  
✅ **Clean modular JS structure**

---

## 🛠️ Technologies Used
- **HTML + TailwindCSS**
- **Vanilla JavaScript (ES6 Modules)**
- **Fetch API** for server communication
- **LocalStorage** for persisting JWT tokens
- **serve** npm package to run the frontend

---

## 📦 Setup & Installation
### **1️⃣ Clone the frontend**
```bash
git clone https://github.com/DalaScript/todo-dom
cd todo-dom
```

### **2️⃣ Install dependencies**
```bash
npm install
```

### **3️⃣ Start the frontend using serve**
```bash
npx serve .
```
It will output a local URL like `http://localhost:3000`, where you can open the app.

### **4️⃣ Clone and run the backend (required)**
```bash
git clone https://github.com/DalaScript/todo-back
cd todo-back
npm install
npm run dev
```
Make sure the backend is running at `http://localhost:5000`

---

## 🔐 Auth Flow
1. Register or log in at `/register.html` or `/index.html`
2. Upon successful login, JWT is saved to `localStorage`
3. Token is included in `Authorization` headers for protected routes
4. Tasks, profile info, and more are fetched securely
5. Logout clears token and redirects back to login

---

## 🧠 Backend API Repo
This frontend app connects with the backend here:  
🔗 [`todo-back`](https://github.com/DalaScript/todo-back)

The backend provides:
- MongoDB-based task storage
- User auth with hashed passwords
- JWT token handling
- Rate limiting & role-based access
- Caching & performance optimizations

---

## 🤝 Contributing
Feel free to fork and submit issues!

**Created with LineDev by DalaScript** 💻

---

## Author

### Connect with Me

- [Instagram](https://www.instagram.com/DalaScript)
- [YouTube](https://www.youtube.com/@DalaScript)

### Coding Profiles

- [freeCodeCamp](https://www.freecodecamp.org/DalaScript)
- [FrontendMentor](https://www.frontendmentor.io/profile/DalaScript)
- [GitHub](https://github.com/DalaScript)


