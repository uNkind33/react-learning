import React, { Component as PureComponent } from 'react';

export default OriginalComponent => class WrapperComponent extends PureComponent {
    state = {
        isOpen: false,
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return <OriginalComponent {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} />;
    }
};
