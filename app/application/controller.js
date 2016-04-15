import Ember from 'ember';

export default Ember.Controller.extend({
  showAppName: true,
  appName: 'Chirper',
  showingComposeModal: false,
  store: Ember.inject.service(),
  actions: {
    toggleComposeModal: function(){
      this.set('showingComposeModal', !this.get('showingComposeModal'));
    },
    updateName: function(){
      this.store.findRecord('user', 1).then((user) => {
        user.set('username','Meu Nome');
        user.save();
      });
    }
  }
});
