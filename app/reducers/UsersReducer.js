let user = {
  email: ''
};

export default function (state=user, action) {
  switch(action.type) {
  case 'SAVE_USER':
    return action.email;
  default:
    return state;
  }
}
