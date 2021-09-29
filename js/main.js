(function() {
  'use strict';

  var likeComponent = Vue.extend({
    props: {
      message: {
        type: String,
        default: 'Like'
      }
    },
    data: function() {
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
        this.$emit('increment');
      }
    }
  })

  var maritozzoComponent = Vue.extend({
    template: '<img src="maritozzo.png" id="maritozzo">',
  })

  var app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent,
      'maritozzo-component': maritozzoComponent
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal() {
        this.total++;
      }
    }

  });

})();