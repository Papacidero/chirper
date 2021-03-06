import Ember from 'ember';

export default Ember.Controller.extend({
  
  valuesChanged: Ember.observer('username', 'password', function() {
    this.set('errorMessage', false);
  }),
  
  actions: {
    login: function() {
      var username = this.get('username');
      var password = this.get('password');

      if (username === 'admin' && password === 'admin') {
        this.transitionToRoute('home');
      } else {
        // We replace our SweetAlert-function with a simple variable containing the error message
        this.set('errorMessage', 'Wrong username or password!');
      }
    }
  }
});
