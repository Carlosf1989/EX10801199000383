var express = require ('espress');
var router = express.router();

var resetaRoutes = require('./reseta');

router.use('/reseta',resetaRoutes);

module.exports = router;