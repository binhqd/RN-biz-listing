import reduxApi, {transformers} from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';
import CONFIG from '../constants';

// Example
const rest = reduxApi({
  // categories: {
  //   url: "categories/:id",
  //   crud: true
  // },
  list: {
    url: 'categories',
    options:(url, params, getState) => {
      return {
        method: "GET",
        headers: {},
        data: {}
      };
    },
    postfetch: [
      function({data, dispatch}) {
        dispatch({
          type: 'CATEGORIES_TO_TREE',
          categories: data.data
        });
      },
      function({data, dispatch}) {
        dispatch({
          type: 'ARRAY_CATEGORIES_TO_HASH',
          categories: data.data
        });
      }
    ]
  }
}).use('fetch', adapterFetch(fetch));

rest.use("rootUrl", `${CONFIG.API_URL}/`);

export default rest;
