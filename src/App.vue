<template>
  <div class="bdy">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    <div class="svg-img" style="width: 100%; overflow: hidden;">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%;"
      >
        <path
          d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #41b883;"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
* {
  background-color: bisque;
  margin: 0;
  padding: 0;
}
.bdy {
  bottom: 0;
}
.svg-img {
  position: absolute;
  bottom: 0;
  margin-bottom: -20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
