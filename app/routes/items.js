export default App.ItemsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('item')
  },

  actions: {
    deleteItem: function(item){
        item.destroyRecord();
      },

    submitorder: function(proxy){
       var self = this;
       // create all items in api
       var items = self.store.find('item').then(function(items){
          items.forEach(function(item){
           self.store.createRecord('orderItem', item.toJSON()).save();
         })
       });

       var order = this.store.createRecord('order', proxy);

      self.store.find('item').then(function(items){
        order.set('status', 'pending');
        order.set('total', '10000');
        order.save().then(
          function(order){
            self.transitionTo('order', order)
          },
          function(error){
            alert("There was a problem processing your order.")
          }
        );
      });
    }
  }
});

