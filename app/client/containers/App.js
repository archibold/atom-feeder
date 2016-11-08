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
                <div style={STYLES.headerWrapper}>
                  <Input
                      style={STYLES.headerInput}
                      value={URL}
                      onEnter={onEnter}
                      onChange={onChange}
                      isLoading={isLoading} />
                  <h1 style={STYLES.headerTitle}>Atom</h1>
                </div>
              </div>
                <FeedList style={STYLES.feedList} list={feedList} />
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
        padding: '10px',
        display: 'flex',

        alignItems: 'center',
    },
    headerTitle: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        flex: '1',
    },
    headerInput: {
        flex: '1',
        display: 'flex',
    },
    headerWrapper: {
        height: '35px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
        overflow: 'hidden',
        flex: '1'
    },
    feedList: {
        flex: '10',
        transition: 'flex 1s linear',
        padding: '15px',
        background: '#FFF9C4',
        overflow: 'auto',
    },
};
