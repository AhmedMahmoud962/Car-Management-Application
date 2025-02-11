import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
const NoCarsFound = () => {
  return (
    <div style={styles.container}>
      <p style={styles.message}>NO DATA FOUND FOR THIS PAGE.</p>
      <Link to="/" style={{ textDecoration: 'none' , marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}
        >
          Back to Home
        </Button>
      </Link>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '4px',
    padding: '20px',
    margin: '20px 0',
    height: '90vh',
  },
  message: {
    fontSize: '18px',
    color: '#6c757d',
    margin: 0,
  },
}

export default NoCarsFound
