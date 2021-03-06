import {
    SET_URL,
    SET_FEED_LIST,
    SET_IS_LOADING,
    SET_ACTIVE_FEED,
} from 'actions/app-actions';

export const INITIAL_STATE = {
    URL: 'https://hacks.mozilla.org/feed/',
    feedList: [],
    isLoading: false,
    activeFeed: 0,
};

export function appReducer(state = INITIAL_STATE, action) {
    var { type, payload } = action;
    switch (type) {
        case SET_URL: return setURL(state, payload);
        case SET_FEED_LIST: return setFeedList(state, payload);
        case SET_IS_LOADING: return setIsLoading(state, payload);
        case SET_ACTIVE_FEED: return setActiveFeed(state, payload);
        default: return state;
    }
}

function setURL(state, payload) {
    return {
        ...state,
        URL: payload,
    };
}

function setFeedList(state, payload) {
    return {
        ...state,
        feedList: payload,
    };
}

function setIsLoading(state, payload) {
    return {
        ...state,
        isLoading: payload,
    };
}

function setActiveFeed(state, payload) {
    return {
        ...state,
        activeFeed: payload,
    };
}

