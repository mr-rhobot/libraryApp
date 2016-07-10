import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  responseMessage: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');
      const emailInvitation = this.store.createRecord('invitation', {email: email});
      emailInvitation.save().then((response) => {
      this.set('responseMessage', `Thank you! We've saved your email address with following id:: ${response.get('id')}`);
      this.set('emailAddress', '');
    });
    }
  }

});
