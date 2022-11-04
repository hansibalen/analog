import { Typography } from '@mui/material'
import { TabTitle } from '../../utils/GeneralFunctions'

const About = (): React.ReactElement => {
  TabTitle('HB Analogue - About')
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
