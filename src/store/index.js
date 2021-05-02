import { createStore } from "vuex";

export default createStore({
  state: {
    msg: "Practicing with Vue 3",
    name: "Rody",
    lastname: "Castillo",
    friends: [],
  },
  mutations: {
    addFriend(state, friend) {
      state.friends = [friend, ...state.friends];
    },
    deleteFriend(state, index) {
      state.friends.splice(index, 1);
    },
  },
  actions: {
    addFriendAction(context, friend) {
      context.commit("addFriend", friend);
    },
    deleteFriendAction(context, index) {
      context.commit("deleteFriend", index);
    },
  },
  getters: {
    message(state) {
      return state.msg;
    },
    completedName(state) {
      return `${state.name} ${state.lastname}`;
    },
  },
});
