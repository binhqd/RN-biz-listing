import reduxApi, {transformers} from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';
import CONFIG from '../constants';

const limit = 20;

// Example
const rest = reduxApi({
  // categories: {
  //   url: "categories/:id",
  //   crud: true
  // },
  get: {
    url: 'businesses/:id',
    options:(url, params, getState) => {
      return {
        method: "GET",
        headers: {},
        data: {}
      };
    }
  },
  list: {
    url: `businesses?filter[limit]=${limit}`,
    options:(url, params, getState) => {
      return {
        method: "GET",
        headers: {},
        data: {}
      };
    }
  },
  filterByCat: {
    url: `businesses?filter[where][category_id][regexp]=^(:catID)$&filter[where][name][regexp]=(:name)&filter[limit]=${limit}`,
    options:(url, params, getState) => {
      return {
        method: "GET",
        headers: {},
        data: {}
      };
    }
  }
})
.use('fetch', adapterFetch(fetch));
rest.use("rootUrl", `${CONFIG.API_URL}/`);

export default rest;
