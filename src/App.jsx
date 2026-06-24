import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './LanguageContext'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App
