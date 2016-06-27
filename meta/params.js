

function computed_parameters(m) {

  function camelize(str) {  // http://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  // also need to mush out dashes, make a nice camel case
  var elmModuleName = camelize(m["name"])

  var aMap = new Map();
  aMap.set("module_name", elmModuleName);
  return aMap;
}
