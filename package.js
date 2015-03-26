Package.describe({
  name: 'lablancas:twitter',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Twitter API client library for server-side meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lablancas/twitter',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({twitter: "1.2.5"});

Package.onUse(function(api) {
    api.versionsFrom('1.0.4.2');
    api.addFiles('twitter.js', 'server');
    api.export("Twitter", 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lablancas:twitter');
  api.addFiles('twitter-tests.js', 'server');
});
