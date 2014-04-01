export default App.HomeRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('product')
  }
})
