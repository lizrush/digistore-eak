export default App.Product = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("number"),
  description: DS.attr("string"),
  image: DS.attr("string"),
  avatar: DS.attr("string")
})

