import { useState } from 'react'
// MUI
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
} from '@mui/material'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { addCar } from './CarReducer' // Ensure this import is correct
// react router
import { useNavigate } from 'react-router-dom'
const AddNewCar = () => {
  // State for form inputs
  const [carModel, setCarModel] = useState('')
  const [carPrice, setCarPrice] = useState('')
  const [carColor, setCarColor] = useState('')
  const [carDate, setCarDate] = useState('')

  // Redux state and dispatch
  const cars = useSelector((state) => state.cars)
  const dispatch = useDispatch()
  // React Router navigation
  const navigate = useNavigate()
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    // Dispatch the addCar action
    dispatch(
      addCar({
        id: cars.length + 1,
        carModel,
        carPrice,
        carColor,
        carDate,
      }),
    )
    navigate('/')
    // reset inputs
    setCarModel('')
    setCarPrice('')
    setCarColor('')
    setCarDate('')
  }

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          backgroundColor: '#fff',
          padding: '20px',
          boxSizing: 'border-box',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Add New Car
        </Typography>
        <form id="carForm" onSubmit={handleSubmit}>
          {/* Car Model Input */}
          <TextField
            label="Car Model"
            margin="normal"
            fullWidth
            required
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
          />

          {/* Price Input */}
          <TextField
            label="Price"
            type="text"
            margin="normal"
            fullWidth
            required
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
          />

          {/* Color Dropdown */}
          <FormControl margin="normal" fullWidth required>
            <InputLabel>Color</InputLabel>
            <Select
              label="Color"
              value={carColor}
              onChange={(e) => setCarColor(e.target.value)}
            >
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Green">Green</MenuItem>
              <MenuItem value="Black">Black</MenuItem>
              <MenuItem value="White">White</MenuItem>
            </Select>
          </FormControl>

          {/* Date Input */}
          <TextField
            label=" Date"
            type="date"
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            margin="normal"
            value={carDate}
            onChange={(e) => setCarDate(e.target.value)}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{
              marginTop: '30px',
              padding: '15px 40px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Add Car
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default AddNewCar
