import {
    setURL as setURLAction,
    setFeedList as setFeedListAction,
    setIsLoading,
} from 'actions/app-actions';
import 'whatwg-fetch';

export function getFeedListFromURL() {
    return (dispatch, getState) => {
        const {
            URL,
        } = getState().app;

        // Resolve CORS problem
        const newUrl = 'https://crossorigin.me/' + URL;

        dispatch(setIsLoading(true));

        fetch(newUrl)
            .then((response) => {
                return response.text();
            }).then((response) => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(response, 'text/xml');
                let x = xmlDoc.getElementsByTagName('item');

                if (x.length === 0) {
                  x = xmlDoc.getElementsByTagName('entry');
                }

                let newList = [];

                for (let i = 0; i < x.length; i=i+1) {
                    const titleElement = x[i].getElementsByTagName('title')[0];
                    let title = "";

                    if (titleElement) {
                      title = titleElement.innerHTML.replace('<![CDATA[', '').replace(']]>', '');
                    }

                    const descElement = x[i].getElementsByTagName('description')[0];
                    let description = "";

                    if (descElement) {
                      description = descElement.innerHTML.replace('<![CDATA[', '').replace(']]>', '');
                    }

                    const linkElement = x[i].getElementsByTagName('link')[0];
                    let link = "#";

                    if (linkElement) {
                      link = linkElement.innerHTML;
                    }

                    const newItem = {
                        title,
                        description,
                        link,
                    };
                    newList.push(newItem);
                }

                dispatch(setFeedListAction(newList));
                dispatch(setIsLoading(false));
            }).catch((err) => {
                // TODO: set error
                console.log(err);
                dispatch(setFeedListAction([]));
                dispatch(setIsLoading(false));
            });
    };
}

export function setURL(URL) {
    return (dispatch) => {
        dispatch(setURLAction(URL));
    };
}
