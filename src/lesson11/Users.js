import React from 'react';
// import withLoading from "./hocs/withLoading";
// import withUsers from "./hocs/withUsers";
import WithUsersRenderProp from './hocs/WithUsersRenderProp';

class Users extends React.Component{
    render(){
        return(
            <WithUsersRenderProp>
                {(users) =>
                    <ul>
                        {users.map(u => {
                                return <li key={u.id}>{u.name}</li>
                            }
                        )}
                    </ul>}
            </WithUsersRenderProp>
        )
    }
}

export default Users;

// class Users extends React.Component{
//     componentDidMount(){
//         this.props.loadUsers();
//     }
//     render(){
//         const {users} = this.props;
//         return(
//             <ul>
//                 {users.map(u => {
//                         return <li key={u.id}>{u.name}</li>
//                     }
//                 )}
//             </ul>
//         )
//     }
// }
// export default withUsers(withLoading(Users));

// export default withLoading(withUsers(Users));





// class Users extends React.Component{
//     componentDidMount(){
//         this.props.loadUsers();
//     }
//     render(){
//         const {users} = this.props;
//         return(
//             <ul>
//                 {users.map(u => {
//                     return <li key={u.id}>{u.name}</li>
//                 }
//                 )}
//             </ul>
//         )
//     }
//  }
//  export default withUsers(withLoading(Users)); //связаны на порядок хоков
//withLoading выводит ...loading... //сначала в Users работает componentDidMount  this.props.loadUsers(); //в withUsers await 2 сек ии обрабатываеться идет в withLoading

// class Lesson11Users extends React.Component{
//     state = {
//         users:[]
//     };
//     async componentDidMount(){
//         const users = await fetch('http://jsonplaceholder.typicode.com/users')
//             .then(r => r.json());
//             this.setState({users})
//     }
//     render(){
//         const {users} = this.state;
//         return(
//             <ul>
//                 {users.map(u => {
//                     return <li key={u.id}>{u.name}</li>
//                 }
//                 )}
//             </ul>
//         )
//     }
//  }
//
// export default withLoading(Lesson11Users)