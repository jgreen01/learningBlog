jest.dontMock('../main.js');
describe('main', function() {
   it('Does \'main\' exist?', function() {
       var React = require('react/addons');
        var main = require('../main.js');
        var TestUtils = React.addons.TestUtils;

        expect(main).toBeDefined();
    });
});