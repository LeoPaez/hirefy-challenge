import styled from "styled-components"

import NavbarLink from "./NavbarLink"

import HirefyLogo from "../assets/hirefy-logo.png"
import CloseIcon from "../assets/close-icon.png"


const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 10px 10px 0px;
  background-color: #FFF;
  width: 280px;
`

const NavbarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0D5287;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0 10px 0 0;
`
const NavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
const NavbarLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h1 {
    color: #FFF;
    font-size: 20px;
  }
`
const NavbarLogo = styled.img`
  width: 36px;
`
const NavbarClose = styled.img`
  width: 18px;
`

const NavbarFooter = styled.footer`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px 20px;
  p {
    font-size: 14px;
  }
  div {
    display: flex;
    gap: 8px;
    font-size: 12px;
  }
  a {
    text-decoration: none;
    color: #3F769F;
  }
`

const Navbar = () => {
  const links = [
    {
      label: 'Home',
      img: "/src/assets/home-icon.png",
      url: '/',
    },
    {
      label: 'How it works',
      img: "/src/assets/question-icon.png",
      url: '/',
    },
    {
      label: 'Marketplace',
      img: "/src/assets/group-icon.png",
      url: '/',
    },
    {
      label: 'For Talents',
      img: "/src/assets/contacts-icon.png",
      url: '/',
    },
    {
      label: 'Categories',
      img: "/src/assets/settings-icon.png",
      nestedLinks: [
        {
          label: 'Lorem ipsum',
          url: '/',
        },
        {
          label: 'Lorem ipsum',
          url: '/',
        },
        {
          label: 'Lorem ipsum',
          nestedLinks: [
            {
              label: 'Lorem ipsum',
              url: '/',
            },
          ],
        },
        {
          label: 'Lorem ipsum',
          url: '/',
        },
        {
          label: 'Lorem ipsum',
          nestedLinks: [
            {
              label: 'Lorem ipsum',
              url: '/',
            },
            {
              label: 'Lorem ipsum',
              url: '/',
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <NavbarContainer>
        <NavbarTop>
          <NavbarLogoContainer>
            <NavbarLogo src={HirefyLogo} alt="hirefy logo" />
            <h1>Hirefy</h1>
          </NavbarLogoContainer>
          <NavbarClose src={CloseIcon} />
        </NavbarTop>
        <NavbarLinks>
          <NavbarLink links={links} level={0} />
        </NavbarLinks>
        <NavbarFooter>
          <p>&copy; 2023 Hirefy. LLC.</p>
          <div>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Version</a>
          </div>
        </NavbarFooter>
      </NavbarContainer>
    </>
  )
}

export default Navbar