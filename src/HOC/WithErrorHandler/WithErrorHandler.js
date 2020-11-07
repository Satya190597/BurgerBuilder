import React,{Component} from 'react';
import Modal from '../../components/UI//Modal/Modal';
import Aux from '../Auxiliary';

const WithErrorHandler = (WrappedComponent,axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.response.use(req => {
                this.setState({error:null})
            })
            axios.interceptors.response.use(null,error => {
                console.log(error)
                this.setState({error:error})
            })
        }

        closeErrorModalHandler = () => {
            this.setState({error:null})
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modelClosed={this.closeErrorModalHandler}>
                        {this.state.error ? this.state.error.message:null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>    
            )
        }
    }
}

export default WithErrorHandler;