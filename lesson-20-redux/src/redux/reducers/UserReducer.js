const initialState = {
  isAuthenticated: true,
  user: {
    username: "HungTrinhDev",
    role: "admin",
    id: "123",
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default reducer;
