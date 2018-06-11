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

function deleteFromObjectByKey(obj, key) {
  Object.assign({}, obj)
  delete obj[key]
  return obj
}
