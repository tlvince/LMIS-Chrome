'use strict';

var recursionDepth = 0;
var maxDepth = 52;

module.exports.appSelector = {
  getAppWindowHandle: function(ptorInst, onHandle, onError) {
    function lookForAppWindow() {
      recursionDepth = 0;
      ptorInst.driver.getAllWindowHandles().then(function(handles) {
        if (handles.length === 1) {
          recursionDepth += 1;
          if (recursionDepth === maxDepth) {
            return onError('no handle found');
          }
          lookForAppWindow();
        }
        if (handles.length === 2) {
          ptorInst.driver.switchTo().window(handles[1]);
          onHandle(handles[1]);
        }
      });
    }
    lookForAppWindow();
  }
};
