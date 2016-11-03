import React from 'react';

// ReactBoostrap components:
import Button from 'react-bootstrap/lib/Button';

export default class Input extends React.Component {
    static propTypes = {
        value: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func,
        onEnter: React.PropTypes.func,
    }

    static defaultProps = {
        onChange: () => {},
        onEnter: () => {},
    }

    render() {
        const {
            value,
            onChange,
        } = this.props;

        const {
            onClick,
            onKeyDown,
        } = this;

        return (
            <div style={STYLES.container}>
                <input
                    onChange={(e) => {onChange(e.target.value)}}
                    onKeyDown={onKeyDown}
                    style={STYLES.input}
                    value={value}
                    placeholder="URL to RSS"
                />
                <Button style={STYLES.button} onClick={onClick}>SHOW</Button>
            </div>
        );
    }

    onClick= () => {
      const {
          onEnter,
          value
      } = this.props;

      onEnter(value);
    }
    
    onKeyDown = (e) => {
      const {
          onEnter,
          value
      } = this.props;

      if (e.keyCode === 13) {
          onEnter(value);
      }
    }
}

const STYLES = {
    container: {
        margin: '0 auto',
        maxWidth: '350px',
        display: 'flex',
    },
    input: {
        flex: '0.8',
    },
    button: {
        flex: '0.2',
    },
}
