export default Ember.Route.extend({
  model: function (params) {
    return {};
  },

  actions: {
    createProduct: function (proxy) {
      var newProduct = this.store.createRecord('product', proxy);

      var self = this;
      newProduct.save().then(function () {
          self.transitionTo('admin');
        },
        function (error) {
          window.alert(error.responseText);
          newProduct.deleteRecord();
        }
      );
    }
  }
});
