import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConstants from './../Core/constants';
import { addToast, removeToast } from './action';

import Toast from './Toast';

class ToastContainer extends React.Component {

    intervalRef = null;

    componentDidMount() {
        this.intervalRef = setInterval(() => {
            const { removeToast, toastList } = this.props;
            if (toastList.toast.length) {
                removeToast(toastList.toast.length - 1);
            }
        }, appConstants.toastHideTime);
    }

    componentWillMount() {

        clearInterval(this.intervalRef);
    }

    getToastMessages = () => {
        const { toastList } = this.props;
        let toasts = null;
        if (toastList.toast.length) {
            toasts = toastList.toast.map((obj, index) => <Toast key={index} index={index} message={obj.message} remove={this.removeToast} />)
        }
        return toasts;
    }

    addToastMessage = () => {
        this.props.addToast();
    }

    removeToast = (index) => {
        this.props.removeToast(index);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.addToastMessage()}>Add new Toast</button>
                <div className="toast-box">
                    {this.getToastMessages()}</div>

            </div>);
    }


}

export default connect(state => {

    return {
        toastList: state.toast
    };
}, dispatch => bindActionCreators({
    addToast,
    removeToast
}, dispatch))(ToastContainer); 
