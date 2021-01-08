import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import taskAssignee from '../../../assets/image/task-assignee.svg';


const TaskView = props => {

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }

    const Wrap = styled.div`
        width: 100%;
        min-height: 65px;
        padding: 10px;
        border-radius: 3px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        background: ${props=> props.theme.primary};
        margin: 5px 0;
        cursor: pointer;

    `; 

    const Body = styled.div`
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 10px;
        min-height: 30px;
    `;
    const Footer = styled.div`
        font-size: 12px;
        line-height: 12px;
        color: #787878;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    const Assignee = styled.img.attrs({
        src: taskAssignee,
      })`
      width: 10px;
      height: 10px;
      margin-right: 5px;
      margin-bottom: 2px;
      `;

    return (
        <Wrap>
            <Body>
                <p>See constraints </p>
            </Body>
            <Footer>
                <div>
                    <Checkbox onChange={onChange}>Complete?</Checkbox>
                </div>
                <div>
                    <Assignee/>
                    <span>Rachel</span>
                </div>
            </Footer>
        </Wrap>
    );
}

export default TaskView;