export default App.AdminRoute = Ember.Route.extend({
  model: function(){
    return { products: this.store.find('product'), orders: this.store.find('order') }
  },

  actions: {
    productDelete: function(product){
      product.deleteRecord();
      product.save();
    }
  }
});
