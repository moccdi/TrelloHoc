import React from 'react';

export default function withLoading(Component) {
    return class extends Component{
        constructor(props){
            super(props);
            this.state = {
                loading: true,
            }
        }

        async componentDidMount(){
            if(this.props.loadUsers()){
                await this.props.loadUsers();
            }
            this.setState({loading:false})
        }
        // async componentDidMount(){
        //     if(super.componentDidMount()){
        //         await super.componentDidMount();
        //     }
        //     this.setState({loading:false})
        // }

        render(){
            // console.log(this.state.loading)
          if(this.state.loading){
              return <div>...loading componentDidMount</div>
          } else {
              // console.log(super.render())
              return super.render();
          }
        }
    }
}


// export default function withLoading(Component) {
//     return class extends Component{
//         render(){
//             // const disi = {...this.props}
//             const {loading,...rest} = this.props;
//             // console.log(loading)
//             // console.log(rest)
//             // console.log(this.props)
//             // console.log(disi)
//             if(!loading){
//                 return <Component {...rest}/>
//             } else  {
//                 return <div>...loading...  withLoading</div>
//
//             }
//         }
//     }
// }