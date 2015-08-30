"use strict";

Package.describe({
  name: 'brettle:accounts-anonymous-ui',
  version: '0.4.1',
  // Brief, one-line summary of the package.
  summary: 'Deprecated. Use brettle:accounts-patch-ui instead.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/brettle/meteor-accounts-anonymous-ui.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4');

  // The new and improved package that does all the work
  api.use('brettle:accounts-patch-ui@0.0.1');

  api.export('AccountsAnonymousUi');
  api.addFiles('accounts-anonymous-ui.js', 'client');
});

Package.onTest(function(api) {
  api.versionsFrom('1.0.4');
  api.use('tinytest');
  api.use('accounts-ui-unstyled');
  api.use('templating', 'client');
  api.use('accounts-password');
  api.use('twbs:bootstrap');
  api.use('useraccounts:bootstrap@1.12.0');

  // Uncomment one of the following two lines to depending on which useraccounts
  // routing package you want to test:
  api.use('useraccounts:iron-routing@1.12.0');
  //api.use('useraccounts:flow-routing@1.12.0');

  api.use('brettle:accounts-anonymous');
  api.use('brettle:accounts-anonymous-ui');
  api.addFiles('accounts-anonymous-ui-tests.html', 'client');
  api.addFiles('accounts-anonymous-ui-tests.js', 'client');
});
