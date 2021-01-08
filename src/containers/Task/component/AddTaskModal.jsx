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

    function onChange(value) {
        console.log(`selected ${value}`);
      }

    function onBlur() {
        console.log('blur');
      }
      
      function onFocus() {
        console.log('focus');
      }
      
      function onSearch(val) {
        console.log('search:', val);
      }

    return(
        <Modal 
            title="" 
            visible={true} 
            centered= {true}
            closable= {false}
            footer={null}
            requiredMark={false}
            wrapClassName="modal-wrap"
        >
        <Form
            name="task_detail_form"
            // onFinish={}
            hideRequiredMark
            colon={false}
            className="task-form form"
        >
            <Form.Item
                label= {<img src={taskTitle} alt="Task Title"/>}
                name="task_title"
              
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
                name="task_desc"
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
                name="task_assignee"
                rules={[{ required: true, message: 'Please a user to the task.' }]}

            >
                 <Select
                    showSearch
                    style={{ width: 160, marginLeft: 5 }}
                    placeholder="Assign a user"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </Form.Item>
            <Form.Item
             labelAlign="right"
            >
                <Button htmlType="submit" className="btn submit-btn h3 right">
                    Add Task
                </Button>
                <Button htmlType="button" className="btn h3 cancel-btn right">
                    <CloseOutlined />
                </Button>
            </Form.Item>
        </Form>
      </Modal>
    );
}

export default AddTaskModal;