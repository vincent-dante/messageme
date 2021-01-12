/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('user-list', require('./components/UserList.vue').default);
Vue.component('chat-messages', require('./components/ChatMessages.vue').default);
Vue.component('chat-form', require('./components/ChatForm.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data: {
      userList: [],
      messages: []
    },
    created() {
      this.getUserList();
   },
   methods: {
    getUserList(){
      axios.get('/getusers').then(response => {
        this.userList = response.data;
      });
    },
    getMessages(id) {
      axios.get('/getmessages/'+id).then(response => {
          console.log(response.data);
      });
/*       console.log(response.data); */
    },
    addMessage(message) {
      this.messages.push({ 
        message: message
      });

/*       axios.post('/sendmessages', message).then(response => {
        console.log(response.data);
      }); */

    }



  }

});