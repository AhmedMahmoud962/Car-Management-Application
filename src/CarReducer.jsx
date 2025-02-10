import { createSlice } from '@reduxjs/toolkit'

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
    // add car
    addCar: (state, action) => {
      state.push(action.payload)
      saveStateToLocalStorage(state)
    },
    // update car
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
    },

    // delete car
    deleteCar: (state, action) => {
      const { id } = action.payload
      const newState = state.filter((car) => car.id !== id)
      saveStateToLocalStorage(newState)
      return newState
    },
  },
})

// save state to local storage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('carsState', serializedState)
  } catch (error) {
    console.error('Failed to save state to Local Storage:', error)
  }
}

export const { addCar, updateCar, deleteCar, view } = carSlice.actions
export default carSlice.reducer
