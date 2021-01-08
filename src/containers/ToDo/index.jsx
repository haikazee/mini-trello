import React,{ Component } from 'react';
import AddCard from './components/AddCard';
import Card from './components/Card';
import { cardsRef  } from '../../firebase';
import { getCards } from '../../store';
import { connect } from 'react-redux';

const mapsDispatch =  { getCards };
class ToDo extends Component{

    constructor(props){
        super(props);
        this.state = {
            showAddCardDiv: false,
        };
        this.addCard = this.addCard.bind(this);
    }

    componentDidMount(){

        cardsRef.onSnapshot((querySnapshot) => {
            var cards = [];
            //querySnapshot is "iteratable" itself
            querySnapshot.forEach((cardDoc) => {
                var card = {
                    cardId: cardDoc.id, ...cardDoc.data()
                };

                cards.push(card);
                // console.log(card);
            })
            console.log(cards);
            this.props.getCards(cards);
        });
      
        
    }

    showAddCardDivHandler = () => {  this.setState({showAddCardDiv : true})}

    addCard(cardTitle){
        cardsRef.add({
            title: cardTitle,
            tasks: null
        })
        .then((docRef) =>{
            this.setState({showAddCardDiv: false})
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    render(){
        var cards = this.props.cards;
        console.log(cards);

       var cardlist = cards ? cards.map(card=> {return <Card card={card}/>;}) : null;
        return(<React.Fragment>
            {cardlist}
            <AddCard 
             showDiv = {this.state.showAddCardDiv} 
             showAddCardDivHandler={this.showAddCardDivHandler}
             addCardHandler = {this.addCard}
            />
        </React.Fragment>);
    }
}
const mapStateToProps = state => ({
    cards: state.todos.cards
  });

export default connect(mapStateToProps, mapsDispatch)(ToDo);