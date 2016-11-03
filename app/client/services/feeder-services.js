import {
    setURL as setURLAction,
    setFeedList as setFeedListAction,
    setIsLoading,
} from 'actions/app-actions';

export function getFeedListFromURL() {
    return (dispatch, getState) => {
        const {
            URL,
        } = getState().app;
      
        //Resolve CORS problem
        const newUrl = 'https://crossorigin.me/' + URL;

        dispatch(setIsLoading(true));

        fetch(newUrl)
            .then((response) => {
                return response.text();
            }).then((response) => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(response,"text/xml");
                const x = xmlDoc.getElementsByTagName("item");
    
                let newList = [];
    
                for (let i = 0; i < x.length; i++) {
                    const title = x[i].getElementsByTagName("title")[0].innerHTML.replace('<![CDATA[', '').replace(']]>','');
                    const description = x[i].getElementsByTagName("description")[0].innerHTML.replace('<![CDATA[', '').replace(']]>','');
                    const link = x[i].getElementsByTagName("link")[0].innerHTML;
                    const newItem = {
                        title,
                        description,
                        link,
                    }
                    newList.push(newItem);
                }

                dispatch(setFeedListAction(newList));
                dispatch(setIsLoading(false));
            }).catch((err) => {
                //TODO: set error
                console.log(err);
                dispatch(setFeedListAction([]));
                dispatch(setIsLoading(false));
            })
    };
    
}

export function setURL(URL) {
    return (dispatch, getState) => {
        dispatch(setURLAction(URL));
    };
}