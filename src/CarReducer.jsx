import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('carsState')
    if (serializedState === null) {
      return []
    }
    return JSON.parse(serializedState)
  } catch (error) {
    console.error('Failed to load state from Local Storage:', error)
    return []
  }
}

const initialState = loadStateFromLocalStorage()

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.push(action.payload)
      saveStateToLocalStorage(state)
      toast.success('Car Added Successfully')
    },
    updateCar: (state, action) => {
      const { id, carModel, carPrice, carColor, carDate } = action.payload
      const carToUpdate = state.find((car) => car.id === id)
      if (carToUpdate) {
        carToUpdate.carModel = carModel
        carToUpdate.carPrice = carPrice
        carToUpdate.carColor = carColor
        carToUpdate.carDate = carDate
      }
      saveStateToLocalStorage(state)
      toast.info('Car Updated Successfully')
    },
    deleteCar: (state, action) => {
      const { id } = action.payload
      const newState = state.filter((car) => car.id !== id)
      saveStateToLocalStorage(newState)
      toast.error('Car Deleted Successfully')
      return newState
    },
  },
})

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('carsState', serializedState)
  } catch (error) {
    console.error('Failed to save state to Local Storage:', error)
  }
}

export const { addCar, updateCar, deleteCar } = carSlice.actions
export default carSlice.reducer
