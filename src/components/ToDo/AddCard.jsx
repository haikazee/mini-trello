import React, { useState } from 'react';
import styled from 'styled-components';
import addSign from '../../assets/image/add-card-sign.svg'
import { Form, Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
const AddCard = props => {

    const { TextArea } = Input;

    const AddCardDiv = styled.div`
        width: 272px;
        min-height: 45px;
  
    `;

    const AddCardButton = styled.button`
        width: 100%;
        height: 45px;
        display: ${props.showDiv ? 'none' : 'flex'};
        background-color: ${props => props.theme.lightBlack};
        padding: 10px 20px;
        color: ${props => props.theme.white};
        border-radius: 3px;
        align-items: center;
        border: none;
        cursor: pointer;
        transition: all 0.15s ease-in-out;
        margin: 0 5px;
        :first-child{
            margin-left: 0;
        }
        :hover{
            background-color: rgb(29 29 29 / 51%);
        }   
    `;  

    const Text = styled.span`
        margin-left: 10px;
    `;

    const FormDiv = styled.div`
        padding: 15px;
        background-color: ${props => props.theme.grey};
        display: ${props.showDiv ? 'flex' : 'none'};
        flex-direction: row;
        border-radius: 3px;
        min-height: 125px;
    `;

    // const Form = styled.form `
    //     width: 100%;
    // `;
  

    const onFinish = values =>{
        console.log(values);
    }

    let cardsList = [];
    let cardsText = cardsList.length ?  'Add another Card' : 'Add a Card';
    return (
        <AddCardDiv>
            <AddCardButton onClick = {props.showAddCardDivHandler} >
                <img src={addSign} alt="Add Card"/>
                <Text className='h3'>{cardsText}</Text>
            </AddCardButton>
            <FormDiv>
                <Form
                    name = "addCardForm"
                    className="form"
                    onFinish = {onFinish}
                >
                    <Form.Item
                        label=""
                        name="card-title"
                        
                        rules={[{ required: true, message: 'Please enter card title.' }]}
                    >
                        <TextArea 
                            autoSize={{ minRows: 3, maxRows: 7 }}
                            className="input"
                            placeholder="Enter Card Title"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" className="btn submit-btn h3">
                            Add Card
                        </Button>
                        <Button htmlType="button" className="btn h3 cancel-btn">
                            <CloseOutlined />
                        </Button>
                    </Form.Item>
                </Form>
            </FormDiv>
        </AddCardDiv>

    );
}

export default AddCard;