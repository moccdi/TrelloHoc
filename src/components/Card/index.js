import React from 'react'
import Card from "./Card";
import CardEditor from "../CardEditor";
import {
    compose,
    withState,
    branch,
    withHandlers,
    renderComponent,
    mapProps,
    lifecycle,
    renameProp,
} from 'recompose';


const withHoverHandling = Component => ({ setShowEditButton, ...props }) => (
    <div
        onMouseEnter={() => setShowEditButton(true)}
        onMouseLeave={() => setShowEditButton(false)}
    >
        <Component {...props} />
    </div>
);

const withShowingEditOnHover = compose(
    withState('showEditButton', 'setShowEditButton', false),
    withHoverHandling
);
const withEditing = compose(
    withState('isEditing','setEditingMode',false),
    mapProps(({onChange:onChangeCardInfo, ...props}) => ({
        ...props,
        onChangeCardInfo})),
    //renameProp('text','outerText'),
    withState('text','onChange',props => props.text), //вызывает только один раз
    lifecycle({
        componentWillReceiveProps(nexProps){
            if(nexProps.text !== this.props.text){
                nexProps.onChange(nexProps.text);
            }
        }
    }),
    withHandlers({
        onSave:({id, text,onChangeCardInfo,setEditingMode}) => () => {
            onChangeCardInfo({ id,text});
            setEditingMode(false);
        },
    }),
    branch(({ isEditing }) => isEditing , renderComponent(CardEditor)),
    mapProps(({ isEditing,...props}) => props),
);

export default compose(withShowingEditOnHover, withEditing)(Card);



// const withHoverHandling = Component => ({ setShowEditButton, ...props }) => (
//     <div
//         onMouseEnter={() => setShowEditButton(true)}
//         onMouseLeave={() => setShowEditButton(false)}
//     >
//         <Component {...props} />
//     </div>
// );
//
// const withShowingEditOnHover = compose(
//     withState('showEditButton', 'setShowEditButton', false),
//     withHoverHandling
// );
// const withEditing = compose(
//     withState('isEditing','setEditingMode',false),
//     mapProps(({onChange:onChangeCardInfo, ...props}) => ({
//         ...props,
//         onChangeCardInfo})),
//     withState('text','onChange',props => props.text), //вызывает только один раз
//     withHandlers({
//         onSave:({id, text,onChangeCardInfo,setEditingMode}) => () => {
//           onChangeCardInfo({ id,text});
//             setEditingMode(false);
//         },
//     }),
//     branch(({ isEditing }) => isEditing , renderComponent(CardEditor)),
//     mapProps(({ isEditing,...props}) => props),
// );
//
// export default compose(withShowingEditOnHover, withEditing)(Card);

// const withEditing = compose(
//     withState('isEditing','onEdit',false),
//     branch(({ isEditing }) => isEditing , renderComponent(CardEditor)),
//     mapProps(({ isEditing,...props}) => props)
// );
//branch он рендорит либо то либо то либо с лева або справа,по условию
// <div>
//     {
//         isEditing ? <CardEditor/> : <Card/>
//     }
//     </div>


// const withToggle2 = compose( // теперь используем withState & withHandlers в методе compose
//     withState('toggledOn', 'toggle', true,'show', 'hide'),
//     withHandlers({ // withHandlers принимает объект обработчиков событий
//         // в каждом обработчике доступен метод toggle, который является stateUpdater-ом и обновляет стейт
//         show: ({ toggle }) => (e) => toggle(true),
//         hide: ({ toggle }) => (e) => toggle(false),
//         toggle: ({ toggle }) => (e) => toggle((current) => !current)
//     })
// )

