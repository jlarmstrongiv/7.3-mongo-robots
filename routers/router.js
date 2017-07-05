const express = require('express')
  , routerHelpers = require('./router-helpers')
  , controller = require('../controllers/controller');

module.exports = function (app) {
  const controllerRouter = express.Router();

  // myControllerRouter.get('pageOne', myController.pageOne);
  // myControllerRouter.get('pageTwo', myController.pageTwo);
  // myControllerRouter.get('pageThree', myController.pageThree);

  // controllerRouter.get('/:page', routerHelpers.debugMiddleware, controller.list);

  controllerRouter.get('/', routerHelpers.debugMiddleware, controller.redirect);
  controllerRouter.get('/users', routerHelpers.debugMiddleware, controller.list);
  controllerRouter.get('/employed', routerHelpers.debugMiddleware, controller.employed);
  controllerRouter.get('/unemployed', routerHelpers.debugMiddleware, controller.unemployed);
  controllerRouter.get('/user/:selectedUser', routerHelpers.debugMiddleware, controller.detail);

  app.use('/', controllerRouter);
};

// app.get('/', function (req, res) {
//   return res.redirect('users');
// });
//
// app.get('/users', function (req, res) {
// });
//
// app.get('/user/:selectedUser', function (req, res) {
// });
