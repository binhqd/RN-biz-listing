import reduxApi, {transformers} from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';

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
  },
  add: {
    url: 'categories/customCreate',
    options: {
      method: "POST"
    }
  },
  update: {
    url: 'categories/:id',
    options: {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  delete: {
    url: 'categories/:id',
    options: {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
}).use('fetch', adapterFetch(fetch));

rest.use("rootUrl", "http://192.168.100.104:3000/api/");

export default rest;
