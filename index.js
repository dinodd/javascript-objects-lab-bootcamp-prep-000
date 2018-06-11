function Objects() {
    recipes = {};
    return recipes
  }

function updateObjectWithKeyAndValue(obj,key,value) {
  var obj = Object.assign({}, key, value);
  return obj
}
