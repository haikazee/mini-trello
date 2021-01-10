import React,{ Component } from 'react';
import AddCard from './components/AddCard';
import Card from './components/Card';
import { cardsRef, usersRef  } from '../../firebase';
import { getCards, getAllUsers } from '../../store';
import selectTasksList from '../../selectors/selectTasksList';
import { connect } from 'react-redux';


class ToDo extends Component{

    constructor(props){
        super(props);
        this.state = {
            showAddCardDiv: false,
        };
        this.addCard = this.handleAddCard.bind(this);
        this.getCards = this.getCards.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.handleShowAddCardDivHandler = this.handleShowAddCardDivHandler.bind(this);
        this.handleCloseAddCard = this.handleCloseAddCard.bind(this);
        this.cardsRef = null;
        this.usersRef = null;
    }

    componentDidMount(){
        this.getCards();
        this.getUsers();
    }

    componentWillUnmount(){
        this.cardsRef = null;
        this.usersRef = null;
    }

    getCards(){
        this.cardsRef = cardsRef;
        this.cardsRef.onSnapshot((querySnapshot) => {
            var cards = [];
            querySnapshot.forEach((cardDoc) => {
                var card = {
                    id: cardDoc.id, ...cardDoc.data()
                };
                cards.push(card);
            })
            // console.log(cards);
            this.props.getCards(cards);
        });
    }
    getUsers(){
        this.usersRef = usersRef;
        this.usersRef.onSnapshot((querySnapshot) => {
            var users = [];
            querySnapshot.forEach((userDoc) => {
                var user = {
                    id: userDoc.id, ...userDoc.data()
                };
                users.push(user);
            })
            console.log('user',users);
            this.props.getAllUsers(users);
        });
    }

    handleShowAddCardDivHandler(){ 
         this.setState({showAddCardDiv : true})
    }

    handleAddCard(cardTitle){
        this.cardsRef.add({
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
    handleCloseAddCard(){
        this.setState({showAddCardDiv: false})
    }

    render(){
        var cards = this.props.cards;

       var cardlist = cards ? cards.map(card=> {return <Card card={card} key={card.id}/>;}) : null;
        return(<React.Fragment>
            {cardlist}
            <AddCard 
             showDiv = {this.state.showAddCardDiv} 
             showAddCardDivHandler={this.handleShowAddCardDivHandler}
             addCardHandler = {this.handleAddCard}
             closeAddCardHandler = {this.handleCloseAddCard}
            />
        </React.Fragment>);
    }
}
const mapStateToProps = state => ({
    cards: selectTasksList(state),
    
  });

export default connect(mapStateToProps, {getCards, getAllUsers} )(ToDo);