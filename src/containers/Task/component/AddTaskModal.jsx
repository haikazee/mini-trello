import React from 'react';
import styled from 'styled-components';
import { Modal, Button, Form, Input, Select } from 'antd';
import taskTitle from '../../../assets/image/task.svg';
import taskDesc from '../../../assets/image/task-desc.svg';
import taskAssignee from '../../../assets/image/task-assignee.svg';
import { CloseOutlined } from '@ant-design/icons';


const Label = styled.div`
    display: flex;
    align-items: center;
`;

const AddTaskModal = props => {

    const { TextArea } = Input;
    const { Option } = Select;
    const { users } = props;
    // console.log(props.users)

    const onFinish = (values) => {
        props.addTaskHandler(values);
    }

    const options = users && users.map(user => user.role === "user" ?
        <Option value={user.id}>{user.name} </Option> : null
    )
    return(
        <Modal 
            title="" 
            visible={props.visible} 
            centered= {true}
            closable= {false}
            maskClosable={true}
            footer={null}
            onCancel={()=>props.closeModalHandler()}
            requiredMark={false}
            wrapClassName="modal-wrap"
        >
        <Form
            name="task_detail_form"
            onFinish={onFinish}
            hideRequiredMark

            colon={false}
            className="task-form form"
        >
            <Form.Item
                label= {<img src={taskTitle} alt="Task Title"/>}
                name="title"
              
                rules={[{ required: true, message: 'Please enter task title.' }]}

            >
                <Input
                    placeholder="Enter task title"
                    className="input"
                />
            </Form.Item>
            <Label><img src={taskDesc} alt="Task Description"/> &nbsp;  &nbsp; Description</Label>
           
            <Form.Item
                label= ""
                name="description"
                labelCol = {12}
                className="desc"
                rules={[{ required: true, message: 'Please enter task title.' }]}

            >
                <TextArea 
                            autoSize={{ minRows: 3, maxRows: 7 }}
                            className="input"
                            placeholder="Enter a more detailed description here"
                        />
            </Form.Item>
            <Form.Item
                label= {<img src={taskAssignee} alt="Task Assignee"/>}
                name="assignee"
                rules={[{ required: true, message: 'Please a user to the task.' }]}

            >
                 <Select
                    showSearch
                    style={{ width: 160, marginLeft: 5 }}
                    placeholder="Assign a user"
                    optionFilterProp="children"
                    // onChange={onChange}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                   {options}
                </Select>
            </Form.Item>
            <Form.Item
             labelAlign="right"
            >
                <Button htmlType="submit" className="btn submit-btn h3 right">
                    Add Task
                </Button>
                <Button htmlType="button" className="btn h3 cancel-btn right" onClick={()=>props.closeModalHandler()}>
                    <CloseOutlined />
                </Button>
            </Form.Item>
        </Form>
      </Modal>
    );
}

export default AddTaskModal;