const initState = {
  isLoginned: false,
  token: null,
  email: null,
  username: null,
  image: 'https://static.productionready.io/images/smiley-cyrus.jpg'
};
export const createAcc = (state = initState, action = {}) => {

  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        email: action.payload.email,
      };
    case "SIGN_IN":

      return {
        ...state,
        isLoginned: !state.isLoginned,
        token: action.payload.token,
        username: action.payload.username,
        email: action.payload.email,
        image: action.payload.image,

      };
      case "LOG_OUT":
        return {
          ...state,
          isLoginned: false,
          token: null,
          email: null,
          username: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',

        };
        case "UPD":
          console.log("update user");
          return {
            ...state,
            isLoginned: true,
            token: action.payload.token,
            username: action.payload.username,
            email: action.payload.email,
            image: action.payload.image,
          };

    default:
      return state;
  }
};
