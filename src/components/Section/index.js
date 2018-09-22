import uuid from 'uuid'
import { compose,withHandlers,withState,mapProps } from 'recompose';
import Section from "./Section";

const withAddingCard = compose(
    withState('cards','setCards', props => props.cards),
    withHandlers({
        onAddCard: props => () => { //card = {} присваивает значение прям в аргументе
            const newCards = [...props.cards,{id:uuid()}];
            props.setCards(newCards);
        },
        onEditCard:({cards,setCards}) => editedCardData => {
            const editedCardIndex = cards.findIndex(card => (
                card.id === editedCardData.id)
            );
            if(!editedCardIndex === -1){
                return;
            };
            const newCards = [
              ...cards.slice(0,editedCardIndex),
                {...cards[editedCardIndex],...editedCardData },
                ...cards.slice(editedCardIndex + 1),
            ];
            setCards(newCards);
        },
    }),
    mapProps(({setCards,...props}) => props),
);
export default compose(withAddingCard)(Section);
 //логика выполняеться 3 хуками,3 хука всязаны между собой и не могут выполняться в данным момент по отдельности
// export default compose(
//     withState('cards','setCards', props => props.cards),
//     withHandlers({
//         addCard: props => (card = {}) => { //card = {} присваивает значение прям в аргументе
//             const newCards = [...props.cards,{...card,id:uuid()}];
//             props.setCards(newCards);
//             },
//     }),
//     mapProps(({setCards,...props}) => props),
// )(Section);



