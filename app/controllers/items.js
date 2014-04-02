export default App.ItemsController = Ember.ArrayController.extend({
  cartTotal: function() {
    return this.get('content').reduce(function(subtotal, item) {
      return subtotal + item.get('subtotal');
    }, 0);
  }.property("content.@each.subtotal"),

  proxy: {},

  actions: {
    checkout: function(){
      this.set('checkout', true)
    },

    applyChanges: function(quantity) {
      this.get('model').save(function(item){
        item.set('quantity', quantity)
        item.save().then(
          function(order){
            self.transitionTo('items')
          },
          function(error){
            console.log('it didnt work');
            alert(error.responseText)
          }
        );
      });
    }
  }
})
