import React from 'react';
import Feed from 'components/Feed';

export default class FeedList extends React.Component {
    static propTypes = {
        list: React.PropTypes.array,
        isLoading: React.PropTypes.bool,
    }

    static defaultProps = {
        list: [],
    }

    render() {
        const {
            list,
            isLoading,
        } = this.props;

        if (isLoading) {
            return (
                <div style={STYLES.loading}>Loading...</div>
            );
        }

        if (list.length === 0) {
            return (
                <div style={STYLES.loading}>Nothing here...</div>
            );
        }

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
            <div style={STYLES.list}>
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
