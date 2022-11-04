import { Typography, Box, styled, Link as MUILink } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logon.png'

// Styled components
const NavbarContainer = styled(Box)((_) => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const PathLink = styled(Typography)((_) => ({
  fontSize: '1.6rem',
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
      {/* Logo */}
      <StyledLink href="/">
        <img src={logo} alt="navbar-logo" />
      </StyledLink>

      <PathBox>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <PathLink>Home</PathLink>
        </Link>
        <Link to="/Work" style={{ textDecoration: 'none' }}>
          <PathLink>Gallery</PathLink>
        </Link>
        <Link to="/About" style={{ textDecoration: 'none' }}>
          <PathLink>About</PathLink>
        </Link>
      </PathBox>
    </NavbarContainer>
  )
}

export default Navbar
