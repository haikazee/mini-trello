import React,{Component} from 'react';
import AddCard from './components/AddCard';
import Card from './components/Card';
class ToDo extends Component{

    constructor(props){
        super(props);
        this.state = {
            showAddCardDiv: false,
        }
    }

    showAddCardDivHandler = () => {  this.setState({showAddCardDiv : true})}

    render(){
        return(<React.Fragment>
            <Card/>
            <AddCard 
             showDiv = {this.state.showAddCardDiv} 
             showAddCardDivHandler={this.showAddCardDivHandler}
            />
        </React.Fragment>);
    }
}

export default ToDo;