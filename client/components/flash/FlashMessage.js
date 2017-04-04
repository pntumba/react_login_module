import React, {Component} from 'react';
import classnames from 'classnames';

class FlashMessage extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.props.deleteFlashMessageAction(this.props.reducerFlashMessages.id);
    }
    render() {
        const { reducerFlashMessages, deleteFlashMessageAction} = this.props;
        return (
            <div className={classnames('alert', {
                    'alert-success': reducerFlashMessages.type === 'success',
                    'alert-danger': reducerFlashMessages.type === 'error'
                })}
                 key={reducerFlashMessages.id} 
            >
                <button onClick={this.onClick} className="close"><span>&times;</span></button>
                {reducerFlashMessages.text}
            </div>
        );
    }
}

FlashMessage.propTypes = {
    reducerFlashMessages : React.PropTypes.object.isRequired
}

export default FlashMessage;