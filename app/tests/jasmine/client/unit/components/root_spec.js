'use strict';
var ReactTestUtils;

describe('Root View Component', function () {

    beforeEach(function () {
        ReactTestUtils = React.addons.ReactTestUtils;
    });

    it('should be mounted in DOM', function () {
        var root = <Root />;
        ReactTestUtils.renderIntoDocument(root);
    });

    it('should get Meteor Data from Openweather collection', function () {

    });

    it('should render options to choose different cities', function () {

    });
});