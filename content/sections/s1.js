import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const S1 = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Solution Here
                    </h4>
                    <p>Answer below this.</p>
                </Title>
                <GridContainer>
                    <GridItem>1st</GridItem>
                    <GridItem>2nd</GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem>3rd</GridItem>
                    <GridItem>4th</GridItem>
                </GridContainer>
            </Container>
        </StyledWrapper>
    )
}

export default S1

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`

const Title = styled.div`
h4{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsDiv = styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 11.5rem));
  grid-gap: 20px;
  justify-items: center;
  margin-top: 20px;
`;

const GridItem = styled.div`
  padding: 80px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 20px;
`;