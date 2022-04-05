const Scene = require("Scene");
const Patches = require("Patches");
export const Diagnostics = require("Diagnostics");

Promise.all([Scene.root.findFirst("number"), Patches.outputs.getScalar("score")]).then(function (result) {
  var counterNumber = result[0];
  var scoreNumber = result[1];

  counterNumber.text = scoreNumber.toString();
});
