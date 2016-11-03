import React from 'react';

export default class Header extends React.Component {
    static propTypes = {
        children: React.PropTypes.string,
    }

    render() {
        const {
          children
        } = this.props;

        return (
            <div style={STYLES.container}>
                <h1>{children}</h1>
            </div>
        );
    }
}

const STYLES = {
    container: {
        textAlign: 'center',
    },
}