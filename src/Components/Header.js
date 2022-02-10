import React from 'react';
// import { StyledHeader } from './Styles/Header.styled'
import { Container } from "./Styles/Containers.styled";
import { Flex } from "./Styles/Flex.styled";
// import { Nav } from './Styles/Header.styled';
import { StyledHeader, Logo, Nav, Image } from './Styles/Header.styled';
import { Button } from './Styles/Button.styled';
// import { Image } from './Styles/Header.styled';

const Header = () => {

    return (
        //  we can pass props in styled-component, bg is a prop here, and will passed in Header.styled
        // <StyledHeader bg="red">
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt=''/>
                    <Button>Try it free</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>Build the Community your fans will love</h1>
                        <p>Huddle re-imagine the way we build communities. YOu have a voice but so does your audience. Create connections with your users as you engage in genuine discussion</p>

                        <Button bg='#ff0099' color= 'white'>
                            Get Started for free 

                        </Button>
                    </div>

                    <Image src='./images/illustration-mockups.svg' alt=''/>
                </Flex>
            </Container>
        </StyledHeader>
    );
};

export default Header;