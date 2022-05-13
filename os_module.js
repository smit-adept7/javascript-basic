var os_module = require('os');
var totalMemory = os_module.totalmem();
var freeMemory = os_module.freemem();
console.log("totalMemory : ".concat(totalMemory));
console.log("freeMemory : ".concat(freeMemory));
