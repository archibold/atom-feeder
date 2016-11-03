import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from 'components/Header';
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
            <div>
              <div style={STYLES.header}>
                <Header>Atom Feeder</Header>
              </div>
              <div style={STYLES.container}>
                <Input value={URL} onEnter={onEnter} onChange={onChange} />
                <FeedList list={feedList} isLoading={isLoading} />
              </div>
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
    header: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        height: '70px',
        textAlign: 'center',
        background: '#F57F17',
        overflow: 'hidden',
    },
    container: {
        marginTop: '80px',
    },
};
