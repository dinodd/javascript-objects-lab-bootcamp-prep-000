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

function deleteFromObjectByKey(obj,key) {
  var obj = {key}
  var newObj = Object.assign({}, obj);
  delete newObj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  Object.assign({}, obj)
  return delete obj[key]
}
