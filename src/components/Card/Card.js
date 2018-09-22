import React from 'react';
import './style.css';



const Card = ({ text, setEditingMode, showEditButton }) => (
    <div className="card" >
        <p>{text}</p>
        {showEditButton && (
            <button onClick={() => setEditingMode(true)} className="edit-btn">
                Edit
            </button>
        )}
    </div>
);
Card.defaultProps = {
    showEditButton: false,
};
export default Card;



// const withToggle2 = compose( // теперь используем withState & withHandlers в методе compose
//     withState('toggledOn', 'toggle', true,'show', 'hide'),
//     withHandlers({ // withHandlers принимает объект обработчиков событий
//         // в каждом обработчике доступен метод toggle, который является stateUpdater-ом и обновляет стейт
//         show: ({ toggle }) => (e) => toggle(true),
//         hide: ({ toggle }) => (e) => toggle(false),
//         toggle: ({ toggle }) => (e) => toggle((current) => !current)
//     })
// )


// const Card = withToggle2(({text, toggledOn, toggle, show, hide }) => (
//     <Fragment>
//     <div className="card">
//         <p>{text}</p>
//             <button className="edit-btn">Edit</button>
//         </div>
//             <span>
//     <span className="disi" onMouseEnter={ show } onMouseLeave={ hide }>diiis</span>
//         { toggledOn && <div className="Tooltip">{ text }</div> }
//     </span>
//     </Fragment>
// )
// )
// Card.defaultProps = {
//     showEditButton: false,
// }
