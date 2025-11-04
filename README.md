# FullStack Realtime Chat App

A modern real-time chat application with video calling capabilities built using the MERN stack and Stream Chat API.

## Features

- User authentication (login/signup)
- Real-time messaging
- Video calling
- Friend requests and connections
- Dark/light theme toggle
- Responsive design

## Tech Stack

### Frontend

- React 18
- Vite
- TailwindCSS with DaisyUI
- Stream Chat React SDK
- TanStack Query (React Query)
- Zustand for state management
- React Router v7

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Stream Chat SDK
- JWT for authentication

## Prerequisites

- Node.js >= 16.x
- MongoDB database
- Stream Chat account and API keys

## Project Structure

```
FullStackRealtimeChatApp/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── ...
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── hooks/
    │   ├── lib/
    │   ├── pages/
    │   ├── store/
    │   ├── App.jsx
    │   └── main.jsx
    ├── .env
    ├── package.json
    └── ...
```
