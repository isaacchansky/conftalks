'use strict';

var controllers = require('../app/js/controllers');

describe('MyCtrl1', function() {
	var scope;
  var ctrl;

	beforeEach(function() {
		scope = {};
		ctrl = new controllers.MyCtrl1(scope);
	});

	it('has a message scope variable', function() {
		expect(scope.message).toBe('controller 1');
	});
});