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
  setActiveFeed,
} from 'services/feeder-services.js';

@connect(state => {
    return {
        URL: state.app.URL,
        feedList: state.app.feedList,
        isLoading: state.app.isLoading,
        activeFeed: state.app.activeFeed,
    };
})
export default class App extends React.Component {
    static propTypes = {
        URL: React.PropTypes.string,
        feedList: React.PropTypes.array,
        isLoading: React.PropTypes.bool,
        activeFeed: React.PropTypes.number,
        dispatch: React.PropTypes.func,
    }

    render() {
        const {
            URL,
            feedList,
            isLoading,
            activeFeed,
        } = this.props;

        const {
            onEnter,
            onChange,
            onChangeActiveFeed,
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
                  <h1 style={STYLES.headerTitle}>Feeds for</h1>
                </div>
              </div>
                <FeedList
                    style={STYLES.feedList}
                    list={feedList}
                    activeFeed={activeFeed}
                    onChangeActiveFeed={onChangeActiveFeed} />
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

    onChangeActiveFeed = (value) => {
        const {
              dispatch,
          } = this.props;

        dispatch(setActiveFeed(value));
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
        justifyContent: 'flex-end',
        padding: '0 15px',
        display: 'flex',
        flex: '0.5',
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
        flex: '1',
    },
    feedList: {
        flex: '10',
        transition: 'flex 1s linear',
        padding: '15px',
        // Footer is in fixed position (change it to flex)
        paddingBottom: '30px',
        background: '#FFF9C4',
    },
};
