import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'

const Home = lazy(() => import('./Home'))
const Privacy = lazy(() => import('./Privacy'))
const Terms = lazy(() => import('./Terms'))

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-xl">Loading...</div></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Suspense>
  )
}
