import { Typography } from '@mui/material'
import { TabTitle } from '../../utils/GeneralFunctions'

const Work = (): React.ReactElement => {
  TabTitle('HB Analogue - Gallery')
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
        Work title
      </Typography>
    </div>
  )
}

export default Work
