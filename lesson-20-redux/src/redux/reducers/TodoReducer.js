import { ADD_NEW_TODO, TOGGLE_TODO_ITEM } from "../type";

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
  activeTodo: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_TODO_ITEM:
      // Logic update todo status
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === payload) {
          todo["isCompleted"] = !todo["isCompleted"];
        }
        return todo;
      });

      state.todos = updatedTodos;

      // REMEMBER: always return the copy of state
      return { ...state };

    case ADD_NEW_TODO:
      console.log("here-", payload);
      const newTodo = {
        title: payload,
        id: state.todos.length + 1,
        isCompleted: false,
      };

      //Spread operator
      state.todos = [...state.todos, newTodo];
      return { ...state };
    default:
      return state;
  }
};

export default reducer;

// --------- Software development-------------- //
// Internship => Fresher => Junior => Middle => Senior => Teamleader => Technical Lead => CTO
// Internship => Frehser => Junior => Middle => Senior => PM Product/Project Manager => General Manager
// Design,Tech, Economic, ... => Product owner => Assistant Product Manager => PM => General Manager
// Tester => Manual test => Automation Test , Perfromance, API test, interation test
// Security

// ------Computer Sciene (Khoa học máy tính----//
// - AI: Computer Vision CV =>  Engineer (model AI) / Reseach (paper)
// - AI: Natural language processing => Engineer (model AI) / Reseach (paper)
// - Blockchain: web3, crypto, NFT, metaverse,...
// - Data Science: data analysis (numpy, pandas), data scientist, data warehourse
 

// Agile , Scrum , VModel, User Diagram, CLass digram, ...
// Network: corse, ssl, tcp , dcp
