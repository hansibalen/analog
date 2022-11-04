import { Typography, Box } from '@mui/material'
import { TabTitle } from '../../utils/GeneralFunctions'

const Home = (): React.ReactElement => {
  TabTitle('HB Analogue - Home')
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 'calc(100vh - 104px)',
      }}
    >
      <Typography
        sx={{
          fontWeight: '400',
          fontSize: '9rem',
        }}
      >
        Hansi Brahimasi
      </Typography>
      <Typography
        sx={{
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
