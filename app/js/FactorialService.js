"use strict";

var FactorialService = (function () {

    function _isValidNumber(number) {
        return (number !== undefined)
            && (typeof(number) !== 'string')
            && (number > -1);
    }

    function calculate(number) {
        if (_isValidNumber(number)) {
            var result = 1;
            for (var i = 1; i <= number; i++) {
                result = result * i;
            }
            return result;
        }
        return null;
    }

    //public api
    return {
        "calculate": calculate
    };

})();