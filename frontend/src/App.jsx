import { Routes, Route } from 'react-router'

import { CallPage, ChatPage, HomePage, LoginPage, NotificationsPage, OnboardingPage, SignUpPage } from './pages'

import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='h-screen data-theme="night'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/notifications' element={<NotificationsPage />} />
        <Route path='/call' element={<CallPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/onboarding' element={<OnboardingPage />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App