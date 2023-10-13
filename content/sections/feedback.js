import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Feedback = () => {
    return (
        <StyledWrapper>
        <Container >
            <Title>
                <h4>
                    Thanks for taking up this assignment.
                </h4>
                <p>Anything you would like to add over here?</p>
            </Title>

            <FeedbackDiv>
                <p>
                Thank you for this incredible opportunity, I thouroughly enjoyed working on this assignment. I am enthusiastic about the prospect of contributing my knowledge and skills to Zluri's success and working together to achieve our goals!
                </p>
            </FeedbackDiv>
            
        </Container>
        </StyledWrapper>
    )
}

export default Feedback

const StyledWrapper=styled(Wrapper)`
background:#FFFFFF;
`

const Title = styled.div`
h4{
    font-size: 24px;
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
    font-size: 16px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const FeedbackDiv= styled.div`
p{
    font-size:18px;
    color:#000000;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    
}
`