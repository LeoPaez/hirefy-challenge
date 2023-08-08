import styled from "styled-components"
import Navbar from "./components/Navbar"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E4E0FD;
  height: 100vh;
`

const App = () => {
  return (
    <> 
      <Wrapper>
        <Navbar />
      </Wrapper>
    </>
  )
}

export default App
