import { Meteor } from 'meteor/meteor'
import App from './App.vue';
import Vue from 'vue';
import router from './routes';

import '../methods/';
import '../publications/';


Meteor.startup(() => {
  const app = new Vue({
    el: '#app',
    router,
    ...App,
  });

});


