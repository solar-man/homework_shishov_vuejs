<template>
  <div id="app">
    <header class="header">
      My personal costs
    </header>
    <router-view />
  </div>
</template>

<script>
import { API } from "@/const";
import { mapActions } from "vuex";
export default {
  name: "App",
  mounted() {
    this.loadPaymentList(`${API}paymentList.json`);
    this.loadCategories(`${API}categories.json`);
  },
  methods: {
    ...mapActions(["loadPaymentList", "loadCategories"])
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
  width: 1280px;
  margin: 0 auto;
}
a {
  color: rgb(185, 72, 57);
  text-decoration: none;
}

.header {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 30px;
  font-weight: bold;
  text-align: start;
  margin-left: 20px;
  margin-top: 20px;
  text-align: center;
}
</style>
