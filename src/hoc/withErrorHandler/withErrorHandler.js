import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrrapedComponent, axios ) => {
    return class extends Component{

            state = {
                error: null
            };

            //this doesn't work in some cases I need to find other way to do it
        UNSAFE_componentWillMount(){
                this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState = ({error: null});
                return request;
            });

                this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState = ({error: error});
            });
        };
            // this is suppose to free the interceptors
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);


        }
        errorConfirmedHandler = ()=> {
            this.setState({error: null});
        }
        render(){
            return (        
                <React.Fragment>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message  : 'null'}
                    </Modal>
                    <WrrapedComponent {...this.props}/>
                </React.Fragment>);
        }
   }
}

export default withErrorHandler;