import Vue from "vue"

var data = {
    message: "hello!",
    list: ["aaa", "bbb"]
};

var a = [1,2,3].map((a) => a*a);

var app = new Vue({
  el: "#app",
  data: data,
  methods: {
      addListItem() {
          this.list.push(this.message);
      }
  }
});
