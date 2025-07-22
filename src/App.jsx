import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Explore from './pages/Explore';
import MockupViewer from './pages/MockupViewer';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <>
        <div className="bg-primary text-white h-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<LoginPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/mockup/:id" element={<MockupViewer />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </>
  )
}

export default App
