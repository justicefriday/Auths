# AuthApp 

A full-stack MERN authentication application with secure login and registration functionality.

## Live Demo
- **Client:** https://auths-two.vercel.app
- **Backend:** https://auths-production.up.railway.app

## Built With

**Frontend**
- React.js (Vite)
- Zustand (state management with persist middleware)
- Bootstrap 5
- Axios
- React Router DOM
- React Toastify

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt (password hashing)
- CORS

## Features
- User registration with validation
- Secure login with JWT authentication
- Protected dashboard route
- Persistent login state across page refreshes
- Token expiry handling
- Responsive design (mobile friendly)
- Toast notifications for user feedback

##  Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account

Create a `.env` file:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```
```bash
npm run dev
```

**Frontend setup**
```bash
cd auth-mern-Client
npm install
```

Create a `.env` file:
```
VITE_API_URL=http://localhost:5000/api
```
```bash
npm run dev
```

## Project Structure
```
Client/
├── src/
│   ├── api/          # Axios API calls
│   ├── components/   # Header, Hero, Spinner
│   ├── pages/        # Login, Register, Dashboard
│   └── store/        # Zustand store
backend/
├── config/           # Database connection
├── controllers/      # Auth logic
├── middleware/        # JWT verification
├── models/           # User schema
└── routes/           # Auth routes
```

##  Author


- GitHub:https://github.com/justicefriday

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
