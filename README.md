
# 💸XpenseXpert: Expense Tracker Web App

A full-stack expense tracker web application built using **MongoDB**, **Express.js**, **React**, and **Node.js**, featuring **JWT authentication**, user-friendly dashboards, income/expense tracking, and graphical analysis.

![image](https://github.com/user-attachments/assets/e979b0cb-a026-42be-b1ff-4d83fabb94eb)
![image](https://github.com/user-attachments/assets/2923c48a-3185-4d4b-83df-845e071eeca7)



## 🚀 Features

- 🔐 User Authentication (Signup/Login) using JWT
- 📊 Dashboard with:
  - Add/Delete Transactions
  - Total Income, Expense & Remaining Balance
  - Dynamic Graph of Expenditures
- 💾 Persistent data storage with MongoDB
- 🔄 Real-time updates on transaction changes

## 🛠️ Tech Stack

| Frontend  | Backend      | Database | Authentication |
|-----------|--------------|----------|----------------|
| React.js  | Node.js      | MongoDB  | JWT            |
| Chart.js  | Express.js   | Mongoose | Bcrypt         |

---

## 📁 Folder Structure

```
root
├── client                  # React frontend
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       ├── services        # API calls
│       └── App.js
├── server                  # Express backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware          # JWT verification
│   └── server.js
└── README.md
```

---

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/PinakeshCrafts/XpenseXpert.git
cd XpenseXpert
```

2. **Setup Backend**
```bash
cd server
npm install
```

3. **Setup Frontend**
```bash
cd ../client
npm install
```

4. **Environment Variables**

Create a `.env` file in the `server/` directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## ▶️ Running the App

In the root directory:

```bash
# Start Backend
cd server
npm start

# In a new terminal, start Frontend
cd ../client
npm start
```

---


## 🔒 Authentication Flow

1. User signs up/logs in ➝ gets JWT
2. JWT stored in local storage/cookies
3. Every request to dashboard uses JWT for verification
4. Transactions are user-specific and securely fetched from MongoDB

---

## 📈 Expense Graph

Visual representation of user's expenses vs income using `Chart.js`, updated in real-time upon transaction changes.

---

## 📌 Future Enhancements

- Add Google OAuth login
- Export expenses as CSV/PDF
- Add categories/tags to transactions
- Mobile responsive UI

