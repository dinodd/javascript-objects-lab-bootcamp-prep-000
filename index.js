function Objects() {
    recipes = {};
    return recipes
  }

function updateObjectWithKeyAndValue(obj,key,value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return obj[key] = value
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  Object.assign({}, obj)
  return delete obj[key]
}
