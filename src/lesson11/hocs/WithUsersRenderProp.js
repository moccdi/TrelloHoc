import React from 'react';

export default class WithUsersRenderProp extends React.Component{
        state = {
            users:[],
        }
        async componentDidMount (){
            await new Promise(ok => setTimeout(ok,1000))
                const users = await fetch('http://jsonplaceholder.typicode.com/users')
                    .then(r => r.json());
                this.setState({users,loading:false})
        }
        // loadUsers = async () => {
        //     await new Promise(ok => setTimeout(ok,1000))
        //     const users = await fetch('http://jsonplaceholder.typicode.com/users')
        //         .then(r => r.json());
        //     this.setState({users,loading:false})
        // };
        render(){
            const {children} = this.props;
            const {users} = this.state;
            return children(users);

            //children просто функция которую я вызываю как children пришел один без обертки ''не масив this.props будет иметь доступ благодаря
            // своей стелочности,а остальные параметры будут переданы как агрумент

        }

}