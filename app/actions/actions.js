export const saveUser = (email) => {
  return {
    type: 'SAVE_USER',
    email: email
  };
};
