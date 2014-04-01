var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function(){
  this.route('home', { path: '/' });

  this.resource('items', { path: '/cart' });

  this.resource('products', function () {
    this.resource('product', { path: ':product_id' });
  });

  this.resource('orders', function(){
    this.resource('order', { path: ':order_id' });
  });

  this.resource("admin", function () {
    this.resource("productEdit", { path: ":product_id"} );
    this.resource("productNew", { path: "products/new"} );
    this.resource('manageOrders', { path: 'manageOrders'} );
  });
});

export default Router;
