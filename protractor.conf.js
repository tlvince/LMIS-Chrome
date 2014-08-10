exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  capabilities: {
    browerName: 'chrome',
    chromeOptions: {
      args: [
        '--load-and-launch-app=app'
      ]
    }
  },
  specs: [
    'test/e2e/*.js'
  ]
};
