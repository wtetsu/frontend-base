import Vue from "vue";

var data = {
    message: "hello!",
      list: ["aaa", "bbb"]
};

new Vue({
  el: "#app",
  data: data,
  methods: {
      addListItem() {
          this.list.push(this.message);
      }
  }
});
