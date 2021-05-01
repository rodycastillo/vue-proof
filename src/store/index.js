import { createStore } from "vuex";

export default createStore({
  state: {
    msg: "Estudia Oe",
    nombre: "Rody",
    apellido: "Castillo",
  },
  mutations: {},
  actions: {},
  getters: {
    mesaje(state) {
      return state.msg;
    },
    completedName(state) {
      return `${state.nombre} ${state.apellido}`;
    },
  },
});
