import React from 'react';
import Card from "../Card";
import './style.css'


const Section = ({cards,title,onAddCard,onEditCard}) => (

    <section className="section">
        <header>
            {title}
        </header>
        <div className="body">
            {cards.map( card => (
                <Card onChange={onEditCard} key={card.id} {...card} />
            ))}
        </div>
        <footer>
            <button onClick={onAddCard} className="add-card">
                Добавить карточку...
            </button>
        </footer>
    </section>

);

Section.defaultProps = {
    cards: [],
}

export default Section;