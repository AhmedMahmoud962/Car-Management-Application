import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Paper, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const ViewCarDetails = () => {
  const { id } = useParams()
  const cars = useSelector((state) => state.cars)
  const car = cars.find((car) => car.id === parseInt(id))

  // No car found
  if (!car) {
    return (
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Car not found!
        </Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#333' }}
      >
        Car Details
      </Typography>

      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ display: 'block' }}>
          {/* Car Model */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #ddd',
              pb: 1,
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#555' }}>
              Car Model:
            </Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>
              {car.carModel}
            </Typography>
          </Box>

          {/* Price */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #ddd',
              pb: 1,
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#555' }}>
              Price:
            </Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>
              {car.carPrice}
            </Typography>
          </Box>

          {/* Color */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #ddd',
              pb: 1,
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#555' }}>
              Color:
            </Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>
              {car.carColor}
            </Typography>
          </Box>

          {/*  Date */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#555' }}>
              Date:
            </Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>
              {car.carDate}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Back Home Page */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}
          >
            Back to Home
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

export default ViewCarDetails
