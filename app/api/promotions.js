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
    url: 'promotions/:id',
    options:(url, params, getState) => {
      return {
        method: "GET",
        headers: {},
        data: {}
      };
    }
  },
  list: {
    url: `promotions?filter[limit]=${limit}`,
    options:(url, params, getState) => {
      return {
        method: "GET",
        headers: {},
        data: {}
      };
    }
  },
  filterByCat: {
    url: `promotions?filter[where][category_id][regexp]=^(:catID)&filter[where][title][regexp]=(:title)&filter[limit]=${limit}`,
    options:(url, params, getState) => {
      return {
        method: "GET",
        headers: {},
        data: {}
      };
    }
  },
  add: {
    url: 'promotions',
    options: {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  update: {
    url: 'promotions/:id',
    options: {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  uploadBanner: {
    url: 'promotions/uploadBanner',
    options: {
      method: "POST"
    }
  },
  delete: {
    url: 'promotions/:id',
    options: {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
}).use('fetch', adapterFetch(fetch));

rest.use("rootUrl", `${CONFIG.API_URL}/`);

export default rest;
