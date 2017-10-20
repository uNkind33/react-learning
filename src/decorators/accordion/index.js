import React, { PureComponent } from 'react';

export default Component => class WrapperComponent extends PureComponent {
    state = {
        openItemId: null,
    }

    toggleOpenItem = openItemId => (ev) => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId,
        });
    }

    render() {
        return (
            <div>
                <Component {...this.props} openItemId={this.state.openItemId} toggleOpenItem={this.toggleOpenItem} />;
            </div>
        );
    }
};
