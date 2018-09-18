import React from 'react';

export default function withLoadingTest(Component) {
    return class extends React.Component{
        state = {
            users:[]
        };
        loadUsers = async () => {
            const users = await fetch('http://jsonplaceholder.typicode.com/users')
                .then(r => r.json());
            this.setState({users})
        };
        render(){
            const isLoaded = false;
            if(isLoaded){
                return <Component
                    {...this.props}
                    users={this.state.users}
                    loadUsers={this.loadUsers}
                />
            } else  {
                return <div>...loading...withLoadingTest</div>
            }
        }
    }
}