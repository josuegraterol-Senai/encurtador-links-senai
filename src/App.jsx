import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import RedirectHandler from './components/RedirectHandler'

function App() {
    return (
          <Router>
                <div className="min-h-screen bg-zinc-950 text-zinc-100">
                        <Routes>
                                  <Route path="/" element={<Login />} />
                                  <Route path="/dashboard" element={<Dashboard />} />
                                  <Route path="/r/:shortCode" element={<RedirectHandler />} />
                        </Routes>Routes>
                </div>div>
          </Router>Router>
        )
}

export default App</Router>
