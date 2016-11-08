/**
 * timer Actions
 */

export const SET_URL = 'setURL@app';
export const SET_FEED_LIST = 'setFeedList@app';
export const SET_IS_LOADING = 'setIsLoading@app';
export const SET_ACTIVE_FEED = 'setActiveFeed@app';

export function setURL(value) {

    return {
        type: SET_URL,
        payload: value,
    };
}

export function setFeedList(value) {

    return {
        type: SET_FEED_LIST,
        payload: value,
    };
}

export function setIsLoading(value) {

    return {
        type: SET_IS_LOADING,
        payload: value,
    };
}

export function setActiveFeed(value) {

    return {
        type: SET_ACTIVE_FEED,
        payload: value,
    };
}
