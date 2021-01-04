import React from 'react';
import styled from 'styled-components';
import checkbox from '../../assets/image/task-list-check.svg';

const CardWrap = styled.div`
width: 272px;
height: 45px;
background-color: ${props => props.theme.grey };
padding: 10px 15px;
border-radius: 3px;
margin: 0 5px;
:first-child{
    margin-left: 0;
}
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.black };

`;

const TaskListCheck = styled.div`
    height: 10px;
    color: ${props => props.theme.darkGrey };
    display: flex;
   align-items: center;
`; 

const CardBody = styled.div`
    margin-top: 10px;

`;

const Card = props => {
    return(
        <CardWrap>
              <CardHeader>
                  <h2>Card 1</h2>
                    <TaskListCheck>
                        <img src={checkbox} alt="Task List"/>
                        &nbsp;
                        <span> 1/2</span>
                    </TaskListCheck>
              </CardHeader>
              <CardBody>

              </CardBody>
        </CardWrap>
    );
}

export default Card;