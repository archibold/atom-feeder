import React from 'react';
import Feed from 'components/Feed';

export default class FeedList extends React.Component {
    static propTypes = {
        list: React.PropTypes.array,
        activeFeed: React.PropTypes.number,
        style: React.PropTypes.object,

        onChangeActiveFeed: React.PropTypes.func,
    }

    static defaultProps = {
        list: [],
        onChangeActiveFeed: () => {},
    }

    render() {
        const {
            list,
            activeFeed,
            style,

            onChangeActiveFeed,
        } = this.props;

        if (list.length === 0) {
            return (
                <div style={{ flex: '0' }}></div>
            );
        }

        const containerElement = {
            ...STYLES.list,
            ...style,
        };

        const element = list.map((object, index) => {
            return (
              <Feed
                  isActive={activeFeed === index}
                  title={object.title}
                  description={object.description}
                  key={index}
                  onClick={() => {
                      onChangeActiveFeed(index);
                  }}
              />
            );
        });

        return (
            <div style={containerElement}>
              <div style={STYLES.feedList}>
                {element}
              </div>
              <div style={STYLES.iframeContainer}>
                <iframe
                  style={STYLES.iframe}
                  src={'http://crossorigin.me/' + list[activeFeed].link} />
              </div>
            </div>
        );
    }
}

const STYLES = {
    list: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flex: '1',
    },
    loading: {
        textAlign: 'center',
        color: 'gray',
    },
    feedList: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flex: '0.5',
        overflow: 'auto',
    },
    iframeContainer: {
        flex: '1',
        background: 'gray',
        display: 'flex',
    },
    iframe: {
        flex: '1',
    },
};
