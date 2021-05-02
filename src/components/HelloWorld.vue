<template>
  <div class="hello">
    <h1>{{ $store.getters.message }}</h1>
    <h1>{{ "Developer: " + $store.getters.completedName }}</h1>
    <div>
      <h2>Guests:</h2>
      <input type="text" v-model="friend" placeholder="Tu nombre..." />
      <button
        class="btn btn-info"
        style="margin-left:5px;"
        @click="addFriend()"
      >
        Add Friend
      </button>
      <ol v-for="(boy, index) in $store.state.friends" :key="index">
        <li>
          {{ `${index + 1}. ${boy}` }}
          <button @click="$store.dispatch('deleteFriendAction', index)">
            Eliminar
          </button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      friend: " ",
    };
  },
  methods: {
    addFriend() {
      this.$store.dispatch("addFriendAction", this.friend);
      this.friend = " ";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
