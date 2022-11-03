import { Typography } from '@mui/material'

const About = (): React.ReactElement => {
  return (
    <div>
      <Typography
        sx={{
          textAlign: 'center',
          marginTop: '20px',
          fontWeight: '600',
          fontSize: '2rem',
        }}
      >
        About title
      </Typography>
    </div>
  )
}

export default About
