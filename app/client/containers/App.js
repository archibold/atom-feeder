import React from 'react';
import { connect } from 'react-redux';

// Components
import FeedList from 'components/FeedList';
import Input from 'components/Input';
import Footer from 'components/Footer';

// Services
import {
  setURL,
  getFeedListFromURL,
} from 'services/feeder-services.js';

@connect(state => {
    return {
        URL: state.app.URL,
        feedList: state.app.feedList,
        isLoading: state.app.isLoading,
    };
})
export default class App extends React.Component {
    static propTypes = {
        feedList: React.PropTypes.array,
        isLoading: React.PropTypes.bool,
        dispatch: React.PropTypes.func,
        URL: React.PropTypes.string,
    }

    render() {
        const {
            feedList,
            isLoading,
            URL,
        } = this.props;

        const {
            onEnter,
            onChange,
        } = this;

        return (
            <div style={STYLES.container}>
              <div style={STYLES.header}>
                <h1 style={STYLES.headerTitle}>Atom</h1>
                <Input
                    style={STYLES.input}
                    value={URL}
                    onEnter={onEnter}
                    onChange={onChange}
                    isLoading={isLoading} />
              </div>
                <FeedList style={STYLES.content} list={feedList} />
                <Footer />
            </div>
        );
    }

    onEnter = () => {
        const {
            dispatch,
        } = this.props;

        dispatch(getFeedListFromURL());
    }

    onChange = (value) => {
        const {
            dispatch,
        } = this.props;

        dispatch(setURL(value));
    }
}

const STYLES = {
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        background: '#FFEB3B',
        flex: '1',
        transition: 'flex 1s linear',
        padding: '15px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    headerTitle: {
        minWidth: '250px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    input: {
        flex: '1',
        display: 'flex',
    },
    content: {
        flex: '10',
        transition: 'flex 1s linear',
        padding: '15px',
        background: '#FFF9C4',
        overflow: 'auto',
    },
};
