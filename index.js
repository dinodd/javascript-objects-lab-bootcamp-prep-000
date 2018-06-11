function Objects() {
    recipes = {};
    return recipes
  }

function updateObjectWithKeyAndValue(obj,key,value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return obj[key] = value
}