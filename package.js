Package.describe({
  summary: 'Relations for Meteor Astronomy',
  version: '1.0.0',
  name: 'zvictor:astronomy-relations',
  git: 'https://github.com/zvictor/meteor-astronomy-relations.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('zvictor:astronomy@1.2.6');
  api.use('underscore');

  api.imply('zvictor:astronomy');

  // Module.
  api.addFiles([
    'lib/module/init_definition.js'
  ], ['client', 'server']);
});
