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

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd FullStackRealtimeChatApp
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Environment Variables

### Backend (.env)

Create a [.env](file:///C:/Users/ACER/Desktop/total_file/Najot%20Ta'lim%20Total%20file/portfolio/crazy-project/FullStackRealtimeChatApp/frontend/.env) file in the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
```

### Frontend (.env)

Create a [.env](file:///C:/Users/ACER/Desktop/total_file/Najot%20Ta'lim%20Total%20file/portfolio/crazy-project/FullStackRealtimeChatApp/frontend/.env) file in the `frontend` directory:

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

## Running the Application

### Development Mode

1. Start the backend server:

```bash
cd backend
npm run dev
```

2. Start the frontend development server:

```bash
cd frontend
npm run dev
```

### Production Mode

1. Build the frontend:

```bash
cd frontend
npm run build
```

2. Start the backend server (serves frontend build):

```bash
cd backend
npm start
```

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

## Deployment

The application can be deployed to any platform that supports Node.js applications. For environment-specific deployment instructions, refer to your hosting provider's documentation.

Ensure all environment variables are properly configured in your production environment.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.
