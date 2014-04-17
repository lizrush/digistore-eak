export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('product', params.product_id)
  },

  actions: {
    addToCart: function (product) {
      var store = this.store;
      this.store.find('item').then(function(items){
        return items.find(function(item){
          return item.get('product_id') === product.get('id')
        })
      }).then(function(item){
        if (item){
          item.incrementProperty('quantity');
          item.save();
        } else {
           var item = store.createRecord('item', {
                quantity: 1,
                currentprice: product.get('price'),
                product_name: product.get('name'),
                product_avatar: product.get('avatar'),
                product_id: product.get('id')
                });
            item.save();
        }
      })
    this.transitionTo('items');
    }
  }

});
