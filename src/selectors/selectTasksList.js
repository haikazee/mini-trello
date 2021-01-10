import {createSelector} from 'reselect';

const cardsSelector = state => state.todos.cards;

const selectTasksList = cards =>{
    return cards ? cards.map(card => {      
      var tasks =  card.tasks ? 
        Object.keys(card.tasks).map((k) => 
            {var task = {id: k, ...card.tasks[k] };
            return task;}
            ) 
            : null;
        return {...card, tasks};
    }) : null;
}

export default createSelector(cardsSelector, selectTasksList);