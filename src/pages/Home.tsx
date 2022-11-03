import { Typography } from '@mui/material'

const Home = (): React.ReactElement => {
  return (
    <div>
      <Typography
        sx={{
          textAlign: 'center',
          marginTop: '20px',
          fontWeight: '400',
          fontSize: '2rem',
        }}
      >
        Home title
      </Typography>
    </div>
  )
}

export default Home
