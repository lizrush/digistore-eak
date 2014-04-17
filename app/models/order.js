var Order = DS.Model.extend({
  customer_name: DS.attr('string'),
  email: DS.attr('string'),
  status: DS.attr('string'),
  zipcode: DS.attr('string'),
  expdate: DS.attr('string'),
  ccv: DS.attr('string'),
  ccnumber: DS.attr('string'),
  total: DS.attr('string')
});

export default Order;
