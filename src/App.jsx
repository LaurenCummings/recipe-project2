import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:recipe" element={<RecipePage />} />
      </Routes>
    </div>
  )
}

export default App
