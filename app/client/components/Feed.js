import React from 'react';

export default class Feed extends React.Component {
    static propTypes = {
        link: React.PropTypes.string,
        title: React.PropTypes.string,
        description: React.PropTypes.string,
    }

    render() {
        const {
            link,
            title,
            description,
        } = this.props;

        return (
            <a href={link}>
                <div style={STYLES.element}>
                    <h2 style={STYLES.header}>{title}</h2>
                    <p>{description}</p>
                </div>
            </a>
        );
    }
}

const STYLES = {
    element: {
        maxWidth: '350px',
        wordWrap: 'break-word',
        flex: '1',
        padding: '15px',
    },
}
