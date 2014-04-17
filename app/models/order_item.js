export default  DS.Model.extend({
  product_id: DS.attr('string'),
  product_name: DS.attr('string'),
  product_avatar: DS.attr('string'),
  currentprice: DS.attr('number'),
  quantity: DS.attr('number'),
  subtotal: function(){
    return this.get('quantity') * this.get('currentprice')
  }.property('quantity', 'currentprice')
})
