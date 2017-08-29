const initialState = [];

function categories(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORIES_RECEIVED':
      return action.categories;
    default:
      return state
  }
}

export {categories};
