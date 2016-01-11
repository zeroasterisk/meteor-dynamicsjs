Package.describe({
  name: 'zeroasterisk:dynamicsjs',
  version: '0.0.1',
  summary: 'Meteor wrapper for dynamicsjs animation library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/zeroasterisk/meteor-dynamicsjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('ecmascript');
  // $ ./update
  api.addFiles('dynamics.js', 'client');
  api.export('dynamics', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('zeroasterisk:dynamicsjs');
  api.addFiles('dynamicsjs-tests.js', 'client');
});
