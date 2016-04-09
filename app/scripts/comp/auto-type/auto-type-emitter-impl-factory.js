'use strict';

var Launcher = require('../../comp/launcher');

var AutoTypeEmitterImplFactory = {
    create: function() {
        var AutoTypeEmitterImpl = require('./emitter-impl/auto-type-emitter-impl-' + Launcher.platform());
        return new AutoTypeEmitterImpl();
    }
};

module.exports = AutoTypeEmitterImplFactory;