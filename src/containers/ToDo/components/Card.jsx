import React from 'react';
import styled from 'styled-components';
import checkbox from '../../../assets/image/task-list-check.svg';
import Task from '../../Task/index.jsx';


const CardWrap = styled.div`
    min-width: 272px;
    min-height: 45px;
    height: fit-content;
    background-color: ${props => props.theme.grey };
    padding: 10px 15px;
    border-radius: 3px;
    margin: 0 5px;
    filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.25));
    :first-child{
        margin-left: 0;
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: ${props => props.theme.black };

`;

const TaskListCheck = styled.div`
    height: 18px;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: ${props => props.theme.darkGrey };
    display: flex;
   align-items: center;
`; 

const CardBody = styled.div`
    margin-top: 10px;

`;

const Card = props => {
    const { card } = props;
    const { tasks } = card;

    const taskList  = tasks ? (<TaskListCheck>
        <img src={checkbox} alt="Task List"/>
        &nbsp;
        <span> 1/2</span>
    </TaskListCheck>) : null

    return(
        <CardWrap>
              <CardHeader>
                  <h2>{card.title}</h2>
                    {taskList}
              </CardHeader>
              <CardBody>
                <Task tasks={tasks}/>
              </CardBody>
        </CardWrap>
    );
}

export default Card;