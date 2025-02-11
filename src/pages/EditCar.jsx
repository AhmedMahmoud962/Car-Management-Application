import { useState, useEffect } from 'react'
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
// react router
import { useParams, useNavigate } from 'react-router-dom'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { updateCar } from '../CarReducer'

const EditCar = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cars = useSelector((state) => state.cars)
  const existingCar = cars.find((car) => car.id === parseInt(id))

  const [updateModel, setUpdateModel] = useState('')
  const [updatePrice, setUpdatePrice] = useState('')
  const [updateColor, setUpdateColor] = useState('')
  const [updateDate, setUpdateDate] = useState('')

  useEffect(() => {
    if (existingCar) {
      setUpdateModel(existingCar.carModel || '')
      setUpdatePrice(existingCar.carPrice || '')
      setUpdateColor(existingCar.carColor || '')
      setUpdateDate(existingCar.carDate || '')
    }
  }, [existingCar])

  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedCar = {
      id: parseInt(id),
      carModel: updateModel,
      carPrice: updatePrice,
      carColor: updateColor,
      carDate: updateDate,
    }

    dispatch(updateCar(updatedCar))
    navigate('/')
  }

  if (!existingCar) {
    return (
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h4" align="center">
          Car not found!
        </Typography>
      </Container>
    )
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
          Edit Car Details
        </Typography>
        <form id="carForm" onSubmit={handleSubmit}>
          <TextField
            label="Car Model"
            margin="normal"
            fullWidth
            required
            value={updateModel}
            onChange={(e) => setUpdateModel(e.target.value)}
          />
          <TextField
            label="Price"
            type="text"
            margin="normal"
            fullWidth
            required
            value={updatePrice}
            onChange={(e) => setUpdatePrice(e.target.value)}
          />
          <FormControl margin="normal" fullWidth required>
            <InputLabel>Color</InputLabel>
            <Select
              label="Color"
              value={updateColor}
              onChange={(e) => setUpdateColor(e.target.value)}
            >
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Green">Green</MenuItem>
              <MenuItem value="Black">Black</MenuItem>
              <MenuItem value="White">White</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Manufacture Date"
            type="date"
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            margin="normal"
            value={updateDate}
            onChange={(e) => setUpdateDate(e.target.value)}
          />
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
            Update
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default EditCar
