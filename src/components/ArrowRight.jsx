import ArrowRightIcon from "../assets/arrow-right.png"
import { styled } from "styled-components"

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ArrowIcon = styled.img`
  width: 20px;
`


const ArrowRight = () => {
  return (
    <ArrowContainer>
      <ArrowIcon src={ArrowRightIcon} alt="arrow right" />
    </ArrowContainer>
  )
}

export default ArrowRight