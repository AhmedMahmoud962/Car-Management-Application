import './App.css'
// components
import Home from './Home.jsx'
import AddNewCar from './AddNewCar.jsx'
import EditCar from './EditCar.jsx'
import ViewCarDetails from './ViewCarDetails.jsx'
// routes
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNewCar />} />
        <Route path="/edit/:id" element={<EditCar />} />
        <Route path="/view/:id" element={<ViewCarDetails />} />
      </Routes>
    </>
  )
}

export default App
