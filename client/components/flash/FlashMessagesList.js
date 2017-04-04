import React, {Component} from 'react';
import {connect} from 'react-redux';
import FlashMessage from './FlashMessage';
import {bindActionCreators} from 'redux';
import { deleteFlashMessageAction} from '../../actions/actionFlashMessages.js';

class FlashMessagesList extends Component {
    constructor(props){
        super(props);
    }

    displayFlashMessage(){
        return (
            this.props.reducerFlashMessages.map((reducerFlashMessages) => {
                return(
                        <FlashMessage 
                            key={reducerFlashMessages.id} 
                            reducerFlashMessages={reducerFlashMessages} 
                            deleteFlashMessageAction={this.props.deleteFlashMessageAction}
                        />
                );
            })
        );
    }
    render() {       
        const { deleteFlashMessageAction, reducerFlashMessages } = this.props;
        
        //console.log(this.props.deleteFlashMessageAction); 
        return (
            <div> {this.displayFlashMessage()}</div>
        );
    }
}

FlashMessagesList.propTypes = {
    reducerFlashMessages : React.PropTypes.array,
    deleteFlashMessageAction : React.PropTypes.func.isRequired
};
function matchDispatchToProps(dispatch){
    return bindActionCreators({deleteFlashMessageAction: deleteFlashMessageAction}, dispatch);   
}

function matchStateToProps(state){
   return{
        reducerFlashMessages : state.reducerFlashMessages
    };
}

export default connect(matchStateToProps, {deleteFlashMessageAction})(FlashMessagesList);
//export default FlashMessagesList;