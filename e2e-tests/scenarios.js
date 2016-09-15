'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('ProjectApp Application', function() {

  it('should redirect `index.html` to `index.html#!/projects', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/projects');
  });

  describe('View: Project list', function() {

    beforeEach(function() {
      browser.get('index.html#!/projects');
    });

  describe('View: Project detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/project/gts-services');
    });

    it('should display placeholder page with projectId`', function() {
      expect(element(by.binding('$ctrl.projectId')).getText()).toBe('gts-services');
    });

  });

});