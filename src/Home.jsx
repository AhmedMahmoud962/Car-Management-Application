import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Container, Button, Typography, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCar } from './CarReducer'

const Home = () => {
  const cars = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  // State for search query
  const [filter, setFilter] = useState('')

  // Handle delete
  const handleDeletedClick = (id) => {
    dispatch(deleteCar({ id }))
  }

  // Filter cars based on search query
  const filteredCars = cars.filter((car) =>
    car.carModel.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <Container
      style={{
        margin: '70px auto',
      }}
    >
      {/* Heading */}
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Car Management Application
        </Typography>
      </div>

      {/* Add New Car  */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '10px',
        }}
      >
        {/* Search  */}
        <TextField
          label="Search by Model"
          variant="outlined"
          size="small"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ width: '250px', marginBottom: '5px' }}
        />

        {/* Add New Car Button */}
        <Link to="/add">
          <Button variant="contained" color="primary">
            Add New Car
          </Button>
        </Link>
      </div>

      {/* count dynamic */}
      <Typography
        style={{ padding: '10px 0', fontSize: '20px', fontWeight: 'bold' }}
        variant="h6"
        color="textSecondary"
      >
        Count Of Cars : {filteredCars.length} cars
      </Typography>
      {/* Table Container */}
      <TableContainer
        style={{
          overflowX: 'auto',
          backgroundColor: '#fff',
          padding: '20px',
          boxSizing: 'border-box',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
        }}
      >
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Model</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align="right">
                Price
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align="right">
                Color
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align="right">
                Date
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCars.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  align="center"
                  style={{ fontSize: '16px', color: '#777' }}
                >
                  No cars found
                </TableCell>
              </TableRow>
            ) : (
              filteredCars.map((car) => (
                <TableRow
                  key={car.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{car.carModel}</TableCell>
                  <TableCell align="right">{car.carPrice}</TableCell>
                  <TableCell align="right">{car.carColor}</TableCell>
                  <TableCell align="right">{car.carDate}</TableCell>
                  <TableCell align="right">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '10px',
                      }}
                    >
                      <Link
                        to={`/view/${car.id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="contained"
                          color="info"
                          size="small"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                          }}
                        >
                          <VisibilityIcon fontSize="small" /> View
                        </Button>
                      </Link>
                      <Link
                        to={`/edit/${car.id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                          }}
                        >
                          <EditIcon fontSize="small" /> Edit
                        </Button>
                      </Link>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                        }}
                        onClick={() => handleDeletedClick(car.id)}
                      >
                        <DeleteIcon fontSize="small" /> Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Home
