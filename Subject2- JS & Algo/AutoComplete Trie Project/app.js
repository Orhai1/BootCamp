const view = require('./views/trieView');
const controller = require('./controllers/trieController');

view.createInterface(controller.handleCommand);
