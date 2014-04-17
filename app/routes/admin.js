export default Ember.Route.extend({
  model: function(){
    var products = this.store.find('product');
    var orders = this.store.find('order');
    return products, orders;
  },

  actions: {
    productDelete: function(product){
      product.deleteRecord();
      product.save();
    }
  }
});
