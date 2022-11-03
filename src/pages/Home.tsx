import { Typography, Box } from '@mui/material'

const Home = (): React.ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{
          textAlign: 'left',
          fontWeight: '400',
          fontSize: '8rem',
        }}
      >
        Hansi Brahimasi
      </Typography>
      <Typography
        sx={{
          textAlign: 'left',
          marginTop: '20px',
          fontWeight: '300',
          fontSize: '3rem',
        }}
      >
        An analogue journey...
      </Typography>
    </Box>
  )
}

export default Home
