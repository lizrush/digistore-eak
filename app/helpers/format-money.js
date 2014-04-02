export default Ember.Handlebars.helper('format-money', function(price) {
   var number = parseFloat(price/100).toFixed(2)
    dollars = number.split('.')[0],
    cents = number.split('.')[1];
    dollars = dollars.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return '$' + dollars + '.' + cents;
});
