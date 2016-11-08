import React from 'react';

export default class Feed extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
        description: React.PropTypes.string,
        isActive: React.PropTypes.bool,

        onClick: React.PropTypes.func,
    }

    static defaultProps = {
        onClick: () => {},
    }

    render() {
        const {
            title,
            description,
            isActive,

            onClick,
        } = this.props;

        let elementStyle = {
            ...STYLES.element,
        };

        if (isActive) {
            elementStyle = {
                ...elementStyle,
                ...STYLES.activeFeed,
            };
        }
        const descriptionElement = description.replace(/<[^>]*>/g, '');
        return (
            <button style={elementStyle} onClick={onClick}>
                <h2 style={STYLES.header}>{title}</h2>
                <p style={STYLES.description}>{descriptionElement}</p>
            </button>
        );
    }
}

const STYLES = {
    element: {
        textAlign: 'left',
        background: 'none',
        outline: 'none',
        border: 'none',
        wordWrap: 'break-word',
        padding: '15px',
        width: '100%',
    },
    header: {
        fontSize: '20px',
    },
    description: {
        fontSize: '15px',
    },
    activeFeed: {
        background: 'gainsboro',
    },
};
