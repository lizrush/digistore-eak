export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('product', params.product_id);
  },

  actions: {
    saveProduct: function (product) {
      product.save();
      this.transitionTo('admin');
    }
  }
});
