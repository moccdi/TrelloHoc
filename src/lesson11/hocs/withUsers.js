import React from 'react';


export default function withUsers(Component) {
    return class extends React.Component{
        state = {
            users:[],
            loading: true,
        };
        // async componentDidMount (){
        //     await new Promise(ok => setTimeout(ok,1000))
        //         const users = await fetch('http://jsonplaceholder.typicode.com/users')
        //             .then(r => r.json());
        //         this.setState({users,loading:false})
        // }
        loadUsers = async () => {
            await new Promise(ok => setTimeout(ok,1000))
            const users = await fetch('http://jsonplaceholder.typicode.com/users')
                .then(r => r.json());
            this.setState({users,loading:false})
        };
        render(){
            return <Component
                    {...this.props}
                    users={this.state.users}
                    loadUsers={this.loadUsers}
                    loading={this.state.loading}/>

        }
    }
}











// export default function withUsers(Component) {
//     return class extends React.Component{
//         state = {
//             users:[],
//             loading: true,
//         };
//         loadUsers = async () => {
//             await new Promise(ok => setTimeout(ok,1000))
//             const users = await fetch('http://jsonplaceholder.typicode.com/users')
//                 .then(r => r.json());
//             this.setState({users,loading:false})
//         };
//         render(){
//             const isLoaded = false;
//             if(isLoaded){
//                 return <Component
//                     {...this.props}
//                     users={this.state.users}
//                     loadUsers={this.loadUsers}
//                     loading={this.state.loading}/>
//             } else  {
//                 return <div>...loading  withUsers</div>
//             }
//         }
//     }
// }