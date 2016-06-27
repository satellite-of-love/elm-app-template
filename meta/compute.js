function camelize(str) {  // http://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

function computed_parameters(existing_parameters) {

  // also need to mush out dashes, make a nice camel case
  var elmModuleName = camelize(existing_parameters["name"])

  return { "module_name" : elmModuleName }
}
