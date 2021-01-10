import React, {Component} from 'react';
import AddTask from './component/AddTask';
import AddTaskModal from './component/AddTaskModal.jsx';
import TaskView from './component/TaskView.jsx';
import {tasksRef, firestore} from '../../firebase';
import { connect } from 'react-redux';
import { getTask } from '../../store';

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {
            showAddCard: false,
            users: null
        };
        this.taskRef = null;
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleShowAddTaskModal = this.handleShowAddTaskModal.bind(this);
        this.handleCloseAddTaskModal = this.handleCloseAddTaskModal.bind(this);
    }

    handleAddTask(values){
        this.taskRef = tasksRef;
        var userId = values.assignee;
        const {users, cardId} = this.props;

        var user = users.find(user => user.id === userId);
        var assignee = {
            id : user.id,
            name: user.name
        }
        var task = {
            assignee,
            cardId,
            complete: false,
            ...values
        };
        console.log(task);
        this.taskRef.add({
            task
        })
        .then((docRef) =>{
            this.setState({
                showAddCard: false
            });
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    }

    handleShowAddTaskModal(){

        this.setState({
            showAddCard: true
        });
       
    }
    handleCloseAddTaskModal(){
        this.setState({
            showAddCard: false
        });
    }
    render(){
        const {tasks, users} = this.props;
        // console.log('tasks', tasks);
        let addTaskBtnText = tasks && tasks.length ? 'Add another task' : 'Add a task';
        let taskList = tasks ? tasks.map(task=> <TaskView task={task} key={task.id}/>) : null;
        let addTaskModal = this.state.showAddCard ? 
                            <AddTaskModal 
                                visible={this.state.showAddCard} 
                                closeModalHandler={this.handleCloseAddTaskModal}
                                users={users}
                                addTaskHandler = {this.handleAddTask}
                                /> : null;
        return(
            <div>
                {taskList}
                <AddTask 
                text = {addTaskBtnText}
                showCardHandler = {this.handleShowAddTaskModal}
                />
                {addTaskModal}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    task: state.todos.task,
    users: state.todos.users,

});
export default connect(mapStateToProps, {getTask})(Task);