import React,{Component} from 'react';
import Layout from './components/layout/Layout'
import AddCard from './components/ToDo/AddCard'
import Card from './components/ToDo/Card';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      showAddCardDiv: false,
    }
  }

  showAddCardDivHandler = () => {  this.setState({showAddCardDiv : true})}
  render(){
    console.log(this.state.showAddCardDiv);
    return (
    <Layout>
      <Card/>
      <AddCard showDiv = {this.state.showAddCardDiv} showAddCardDivHandler={this.showAddCardDivHandler}/>
    </Layout>
    );
  }
}

export default App;
