import { Typography, Box, styled, Link as MUILink } from '@mui/material'
import { Link } from 'react-router-dom'

// Styled components
const NavbarContainer = styled(Box)((_) => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const PathLink = styled(Typography)((_) => ({
  fontSize: '1.2rem',
  '&:hover': {
    transition: 'all .2s linear',
    color: '#069A8E',
  },
}))

const PathBox = styled(Box)((_) => ({
  display: 'flex',
  flexDirection: 'row',
  alignSelf: 'center',
  gap: '30px',
}))

const StyledLink = styled(MUILink)(() => ({
  textDecoration: 'none',
}))

const Navbar = (): React.ReactElement => {
  return (
    <NavbarContainer>
      {/* Temporary logo */}
      <StyledLink href="/">
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: '600',
            fontSize: '2rem',
            letterSpacing: '.3rem',
            '&:hover': {
              transition: 'all .2s linear',
              color: '#069A8E',
            },
          }}
        >
          [hb]
        </Typography>
      </StyledLink>

      <PathBox>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <PathLink>Home</PathLink>
        </Link>
        <Link to="/About" style={{ textDecoration: 'none' }}>
          <PathLink>About</PathLink>
        </Link>
        <Link to="/Work" style={{ textDecoration: 'none' }}>
          <PathLink>Work</PathLink>
        </Link>
      </PathBox>

      {/* Temporary text, svg icons go here */}
      <PathBox>
        <StyledLink
          href="https://github.com/hnsblnbrg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PathLink>GitHub</PathLink>
        </StyledLink>
      </PathBox>
    </NavbarContainer>
  )
}

export default Navbar
