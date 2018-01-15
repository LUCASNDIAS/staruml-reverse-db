/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, regexp: true */
/*global define, $, _, window, app, type, document */
define(function (require, exports, module) {
  "use strict";

  var DbManager = require("db/DbManager");
  var PostgreSqlNodeDomain = require("util/node/PostgreSqlNodeDomain");

  /**
   * PostgreSqlManager
   * @constructor
   * @param {object} options
   */
  function PostgreSqlManager(options) {
    DbManager.apply(this, [new PostgreSqlNodeDomain(options)]);
  }

  // inherits from DbPreferences
  PostgreSqlManager.prototype = Object.create(DbManager.prototype);
  PostgreSqlManager.prototype.constructor = PostgreSqlManager;

  module.exports = PostgreSqlManager;
});