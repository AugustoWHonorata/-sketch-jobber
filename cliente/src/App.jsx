import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import JobsPages from './pages/JobsPage'
import JobsFormPage from './pages/JobsFormPage'
import { Navigation } from './componets/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
          <Navigation />
          <Routes>
            <Route path='/' element={<Navigate to={'/jobs'} />} />
            <Route path='/jobs' element={<JobsPages />} />
            <Route path='/jobs-create' element={<JobsFormPage />} />
            <Route path="/jobs/:id" element={<JobsFormPage />} />
          </Routes>
          <Toaster />
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
