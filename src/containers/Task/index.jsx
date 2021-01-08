import React, {Component} from 'react';
import AddTask from './component/AddTask';
import TaskDetailModal from './component/AddTaskModal.jsx';
import TaskView from './component/TaskView.jsx';

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        let tasks = [];
        let addTaskBtnText = tasks.length ? 'Add another task' : 'Add a task';
        return(
            <div>
                <TaskView/>
                <AddTask 
                text = {addTaskBtnText}
                />
                {/* <TaskDetailModal /> */}
            </div>
        )
    }
}

export default Task;