import React,{Component} from 'react';
import Layout from './components/layout/Layout';
import ToDo from './containers/ToDo/index.jsx';

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
      <ToDo />
    </Layout>
    );
  }
}

export default App;
