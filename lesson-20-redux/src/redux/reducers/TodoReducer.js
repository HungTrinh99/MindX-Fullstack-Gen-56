const initialState = {
  todos: [
    {
      id: 1,
      title: "Learning ReactJS",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Learning Devops",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Learning Business Analysis",
      isCompleted: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default reducer;
