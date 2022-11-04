import { Typography } from '@mui/material'
import { TabTitle } from '../../utils/GeneralFunctions'

const Gallery = (): React.ReactElement => {
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
        Gallery title
      </Typography>
    </div>
  )
}

export default Gallery
