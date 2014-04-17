export default Ember.Route.extend({
  model: function (item) {
    return this.store.find('item', item);
  }
});
