import React from 'react';

// ReactBoostrap components:
import Button from 'react-bootstrap/lib/Button';

export default class Input extends React.Component {
    static propTypes = {
        value: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func,
        onEnter: React.PropTypes.func,
        style: React.PropTypes.object,
        isLoading: React.PropTypes.bool,
    }

    static defaultProps = {
        onChange: () => {},
        onEnter: () => {},
    }

    render() {
        const {
            value,
            onChange,
            style,
            isLoading,
        } = this.props;

        const {
            onClick,
            onKeyDown,
        } = this;

        const containerStyle = {
            ...STYLES.container,
            ...style,
        };

        let ButtonTitle = 'Show';

        if (isLoading) {
            ButtonTitle = (
                <div className="loader">Loading...</div>
            );
        }

        return (
            <div style={containerStyle}>
                <input
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                    onKeyDown={onKeyDown}
                    style={STYLES.input}
                    value={value}
                    placeholder="URL to RSS"
                />
                <Button style={STYLES.button} onClick={onClick}>{ButtonTitle}</Button>
            </div>
        );
    }

    onClick= () => {
        const {
            onEnter,
            value,
        } = this.props;

        onEnter(value);
    }

    onKeyDown = (e) => {
        const {
            onEnter,
            value,
        } = this.props;

        if (e.keyCode === 13) {
            onEnter(value);
        }
    }
}

const STYLES = {
    container: {
        maxWidth: '450px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        flex: '0.8',
        background: '#FBC02D',
        border: 'none',
        padding: '5px',
        outline: 'none',
        height: '35px',
    },
    button: {
        flex: '0.2',
        height: '35px',
        background: '#FFF176',
        border: 'none',
    },
};

