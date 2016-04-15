import Ember from 'ember';

export default Ember.Component.extend({
  focusOnTextarea: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', () => {
      this.$().find('textarea').focus();
    });
  }),
  chirpText: '',
  remainingChars: Ember.computed('chirpText', function() {
    return 60 - this.get('chirpText').length;
  }),
  warnCharsLeft: Ember.computed('remainingChars', function() {
    return (this.get('remainingChars') < 10);
  }),
  store: Ember.inject.service(),

  actions: {
    
  postChirp: function() {
    
    if (this.get('chirpText').length === 0) {
      swal("Woops!", "Seems like you have nothing to say!", "info");
      return false;
    }

    // Retrieve the value of {{textarea}}
    var text = this.get('chirpText');

    // Fetch the user before adding it to the record
    // (Remember that our chirp model uses DS.belongsTo('user'))
    this.get('store').findRecord('user', 1).then((user) => {

      // Set the data that you want
      var chirpData = {
        text: text,
        user: user,
        createdAt: new Date()
      };

      // Create the record
      var newChirp = this.get('store').createRecord('chirp', chirpData);

      // Save the record so that it shows up in the DOM
      return newChirp.save();

    }).then(() => {
      this.attrs.dismiss(); // Bubble up the action
    });
  }
}
});
