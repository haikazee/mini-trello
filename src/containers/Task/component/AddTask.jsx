import React from 'react';
import styled from 'styled-components';

const AddTask = props => {

    const AddTaskButton = styled.button`
        width: 100%;
        height: 30px;
        font-size: 14px;
        line-height: 16px;
        color: ${props => props.theme.darkGrey};
        justify-content: flex-start;
        align-items: center;
        display: flex;
        border: none;
        padding-left: 5px;
        border-radius: 1px;
        transition: all 0.15s ease-in-out;
        cursor: pointer;
        background-color: inherit;
        :hover{
            background-color:  rgb(29 29 29 / 10%);
        }  
    `;

    return(
        <AddTaskButton>
            + {props.text}
        </AddTaskButton>
    );
}

export default AddTask;
