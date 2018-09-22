import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { compose,withHandlers,withState,mapProps,withReducer } from 'recompose';
import Users from "./lesson11/Users";
import App from "./components/App";

ReactDOM.render(<App/>, document.getElementById('lesson12__hoc'));



// const withToggle = compose(
//     withReducer('toggledOn', 'dispatch', (state, action) => {
//         switch(action.type) { // создаем функцию редьюсер
//             case 'SHOW':
//                 return true;
//             case 'HIDE':
//                 return false;
//             case 'TOGGLE':
//                 return !state;
//             default:
//                 return state;
//         }
//     }, false),
//     withHandlers({
//         show: ({ dispatch }) => (e) => dispatch({ type: 'SHOW' }), // пробрасываем action-ы в метод dispatch
//         hide: ({ dispatch }) => (e) => dispatch({ type: 'HIDE' }),
//         toggle: ({ dispatch }) => (e) => dispatch({ type: 'TOGGLE' })
//     })
// );
//
//
// const StatusList = () => // StatusList - текст который будет виден при клике на слово Active
//     <div className="StatusList">
//         <div>pending</div>
//         <div>inactive</div>
//         <div>active</div>
//     </div>;
//
// const Status = withToggle(({ status, toggledOn, toggle }) =>
//     <span onClick={ toggle }>
//     { status }
//         { toggledOn && <StatusList /> }
//   </span>
// );
//
// const Tooltip = withToggle(({ text, children, toggledOn, show, hide }) =>
//     <span >
//     { toggledOn && <div className="Tooltip">{ text }</div> }
//         <span onMouseEnter={ show } onMouseLeave={ hide }>{ children }</span>
//   </span>
// );
//
// const User2 = ({ name, status }) =>
//     <div className="User">
//         <Tooltip text="Cool Dude!">{ name }</Tooltip>—
//         <Status status={ status } />
//     </div>;
//
// const App2 = () =>
//     <div>
//         <User2 name="Tim" status="active" />
//     </div>;
// ReactDOM.render(
//     <App2 />,
//     document.getElementById('main')
// );






const withToggle = compose( // теперь используем withState & withHandlers в методе compose
    withState('toggledOn', 'toggle', true,'show', 'hide'),
    withHandlers({ // withHandlers принимает объект обработчиков событий
        // в каждом обработчике доступен метод toggle, который является stateUpdater-ом и обновляет стейт
        show: ({ toggle }) => (e) => toggle(true),
        hide: ({ toggle }) => (e) => toggle(false),
        toggle: ({ toggle }) => (e) => toggle((current) => !current)
    })
)

const StatusList = () => // StatusList - текст который будет виден при клике на слово Active
    <div className="StatusList">
        <div>pending</div>
        <div>inactive</div>
        <div>active</div>
    </div>;

const Status = withToggle(({ status, toggledOn, toggle }) =>
    <span onClick={ toggle }>
    { status }
        { toggledOn && <StatusList /> }
  </span>
);

const Tooltip = withToggle(({ text, children, toggledOn, show, hide }) =>
    <span>
           <span className="disi" onMouseEnter={ show } onMouseLeave={ hide }>{ children }</span>
    { toggledOn && <div className="Tooltip">{ text }</div> }

  </span>
);

const User2 = ({ name, status }) =>
    <div className="User">
        <Tooltip text="Cool Dude!">{ name }</Tooltip>—
        <Status status={ status } />
    </div>;

const App2 = () =>
    <div>
        <User2 name="Tim" status="active" />
    </div>;

ReactDOM.render(
    <App2 />,
    document.getElementById('main')
);




// const StatusList = () => // StatusList - текст который будет виден при клике на слово Active
//     <div className="StatusList">
//         <div>pending</div>
//         <div>inactive</div>
//         <div>active</div>
//     </div>;
//
// // Используем hoc withState,
// // где первый аргумент isToggle — имя стейта, второй toggle - имя функции stateUpdater-а
// // и третий аргумент initialState
// const Status =  withState('isToggle', 'toggle', false)
// (({ status, isToggle, toggle }) => // 'isToggle', 'toggle' доступны в качестве аргументов
//     <span onClick={ () => toggle(!isToggle) }> {/* На event onClick обрабатываем стейт компонента */}
//         { status }
//         { isToggle && <StatusList /> }
//     </span>
// );
//
// // Используем hoc withState,
// // где первый аргумент isToggle — имя стейта, второй toggle - имя функции stateUpdater-а
// // и третий аргумент initialState
// const Tooltip =  withState('isToggle', 'toggle', true)
// (({ text, children, isToggle, toggle }) => // 'isToggle', 'toggle' доступны в качестве аргументов
//     <span>
//       { isToggle && <div className="Tooltip">{ text }</div> }
//         <span onMouseEnter={ () => toggle(true) } onMouseLeave={ () => toggle(false) }>{ children }</span>
//         {/* На event-ы onMouseEnter и onMouseLeave обрабатываем стейт компонента */}
//     </span>
// );
//
// // Используем hoc withState,
// // где первый аргумент isToggle — имя стейта, второй toggle - имя функции stateUpdater-а
// // и третий аргумент initialState
// const User2 = ({ name, status }) =>
//     <div className="User">
//         <Tooltip text="Cool Dude!">{ name }</Tooltip>—
//         <Status status={ status } />
//     </div>;
//
// const App2 = () =>
//     <div>
//         <User2 name="Tim" status="active" />
//     </div>;
// ReactDOM.render(
//     <App2 />,
//     document.getElementById('main')
// );


ReactDOM.render(<Users />, document.getElementById('lesson11__test1'));






