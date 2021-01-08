import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/image/mini-trello-logo.svg';

const Header = styled.header`
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: ${props => props.theme.darkBrown};
`;

const Logo = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  width: 180px;
  height: inherit;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Main = styled.main`
  margin: 30px 0 0 30px;
  min-height: 100vh;
  overflow: overlay
`;

const H1 = styled.h1`
  color: ${props => props.theme.white}
`;

const Wrap = styled.div`
    margin-top: 30px;
    display: flex;
    overflow-x: scroll;
    min-height: inherit;
`;

const Layout = props => {


        return(
            <div className="App">
            <Header>
              <Logo className="logo">
                  <Image src={logo} alt="Mini Trello"/>
              </Logo>
              <Main>
                <H1> Board</H1>
                <Wrap>
                    {props.children}
                </Wrap>
              </Main>
            </Header>
            </div>
        )
   
}

export default Layout;