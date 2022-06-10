const initialState = {
  quest: [],
  error: null,
};

// eslint-disable-next-line default-param-last
export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_QUESTION': {
      const stateCopy = { ...state };
      stateCopy.part = action.payload;
      return stateCopy;
    }

    default: {
      return state;
    }
  }
};

export default questionReducer;
