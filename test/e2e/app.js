'use strict';

describe('LMIS e2e tests', function() {
  var common = require('./common');
  var ptor;
  var appWindowHandle;

  beforeEach(function() {
    ptor = protractor.getInstance();
  });

  it('should get the app id', function() {
    function haveAppHandle(appHandle) {
      appWindowHandle = appHandle;
      expect(appHandle).not.toBe(undefined);
    }
    function onError() {
      expect(true).toBe(false);
    }
    // should only have to do this once
    common.appSelector.getAppWindowHandle(ptor, haveAppHandle, onError);
  }, 100000);

  it('should display the correct title', function() {
    ptor.driver.switchTo().window(appWindowHandle);
    runs(function() {
      return ptor.getTitle().then(function(title) {
        expect(title).toEqual('Nigeria LMIS');
      });
    });
  }, 10000);
});
