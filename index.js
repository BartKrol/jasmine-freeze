'use strict';

var withTimeFrozenAt = function (time, fn) {
    describe('with time frozen at ' + time, function () {
        var baseTime = new Date(time);

        beforeEach(function () {
            jasmine.clock().install();
            jasmine.clock().mockDate(baseTime);
        });

        afterEach(function () {
            jasmine.clock().uninstall();
        });

        fn();
    });
};
