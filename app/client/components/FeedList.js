import React from 'react';
import Feed from 'components/Feed';

export default class FeedList extends React.Component {
    static propTypes = {
        list: React.PropTypes.array,
        style: React.PropTypes.object,
    }

    static defaultProps = {
        list: [],
    }

    render() {
        const {
            list,
            style,
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
                  link={object.link}
                  title={object.title}
                  description={object.description}
                  key={index}
              />
            );
        });

        return (
            <div style={containerElement}>
                {element}
            </div>
        );
    }
}

const STYLES = {
    list: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    loading: {
        textAlign: 'center',
        color: 'gray',
    },
};
