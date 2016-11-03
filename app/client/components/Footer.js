import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div style={STYLES.container}>
                made by <a href="mailto:piotr.borysowski@gmail.com">Arczi</a>
            </div>
        );
    }
}

const STYLES = {
    container: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        height: '20px',
        textAlign: 'center',
        background: '#F57F17',
    },
};
