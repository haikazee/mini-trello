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
        const {tasks} = this.props;
        let addTaskBtnText = tasks && tasks.length ? 'Add another task' : 'Add a task';
        // let taskList = tasks ? tasks.map(task=> <TaskView task={task}/>) : null;
        return(
            <div>
                {/* {taskList} */}
                <AddTask 
                text = {addTaskBtnText}
                />
                {/* <TaskDetailModal /> */}
            </div>
        )
    }
}

export default Task;