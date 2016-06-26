function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function computed_parameters(existing_parameters) {

  // also need to mush out dashes
  var elmModuleName = capitalizeFirstLetter(existing_parameters["name"])
}