import Vue from 'vue';
import VueResource from 'vue-resource'
Vue.use(VueResource);

var data = {
  message: null,
  list: null
};

new Vue({
  el: "#app",
  data: data,
  methods: {
      addListItem() {
          this.list.push(this.message);
      }
  },
  created: function(){
    this.$http.get('data.json').then(responce => {
      this.message = responce.body.message;
      this.list = responce.body.list;
    }, responce => {
      // error
      alert(responce.statusText);
    });
  }
});
