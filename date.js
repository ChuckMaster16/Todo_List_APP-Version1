
exports.getDate= /* if you change getDate; to getDate(); if will call the function scense this file*/

  function () {
  const today = new Date();

  const optiions = {
    weekday: "long",
    day: "numeric",
    month: "long",

  };

  return today.toLocaleDateString("en-US", optiions);
}

exports.getDay=

function() {
  const today = new Date();

  const optiions = {
    weekday: "long"
  };

return today.toLocaleDateString("en-US", optiions);
}

console.log(module.exports);
