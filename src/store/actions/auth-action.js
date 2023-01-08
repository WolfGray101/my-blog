import ServiceFile from "../../service/service-file";

const serviceFile = new ServiceFile();

const login = (payload) => ({ type: "SIGN_IN", payload });
const update = (payload) => ( { type: "UPD", payload})

export const logOut = () => ( { type: 'LOG_OUT'})
export const signUp = (payload) => ({ type: "SIGN_UP", payload });

export const signIn = (payload) => (dispatch) => {
  serviceFile
    .getUser(payload.token)
    .then((res) => {
      dispatch(login(res.user));
    })
    .catch((err) => console.log(err));
};


export const updateUser = (user, token) => (dispatch) => {
  console.log(user);
  serviceFile.setUpdateUser(user, token)
  .then(
    (res) => dispatch(update(res.user))
  )
  .catch((err) => console.log(err));
}

