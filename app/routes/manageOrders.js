export default App.ManageOrdersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("order");
  },
  actions: {
    markAsPaid: function(order){
        order.set('status', 'paid');
        order.save()
    },

    markAsCanceled: function(order){
        order.set('status', 'Canceled');
        order.save()
    }
  }
});
