import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo_auracode.jpg'
import { useNavigate } from 'react-router-dom'

// Use `$isFullScreen` as a transient prop for styled-components
const NavbarContainer = styled.div`
  height: ${({ $isFullScreen }) => ($isFullScreen ? '0' : '4.5rem')};
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavbarContent = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`

const Logo = styled.img`
  width: 60px;
`

const MainHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #fff;

  span {
    font-weight: 700;
  }
`

// Modify the Navbar component
const Navbar = ({ isFullScreen }) => {
  const navigate = useNavigate()
  return (
    // Pass `$isFullScreen` to the styled component instead of `isFullScreen`
    <NavbarContainer $isFullScreen={isFullScreen}>
      <NavbarContent onClick={() => navigate('/')}>
        <Logo src={logo} />
        <MainHeading>
          AuraCode
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  )
}

// For the styled div, use `$isFullScreen` as well
const StyledDiv = styled.div`
  width: 100%;
  height: ${(props) => (props.$isFullScreen ? '100vh' : 'auto')};
`;

export default Navbar
