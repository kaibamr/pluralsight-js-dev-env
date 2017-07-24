// Register babel to transpile before test run // instead of import .. from ..
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {}; // import './index.css'; in index.js