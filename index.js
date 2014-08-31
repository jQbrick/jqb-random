/**
 * jQbrick - ramdom library
 * 
 */

'use strict';

var isArray = require('jqb-isarray');

exports.random = function(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

/**
 * RANDOM INTEGER BETWEEN INTERVAL
 * integer()    = 0
 * integer(10)  = [0-10]
 */
exports.integer = function (min, max) {
    if (isArray(min)) {
        max = min.length -1;
        min = 0;
    }
    if (typeof min === 'undefined' && typeof max === 'undefined') {
        min = 0;   
    }
    if (typeof max === 'undefined') {
        max = min;
        min = 0;
    }
    return this.random(min,max);
};


/**
 * RANDOM INDEX FROM SCALAR ARRAY
 */
exports.index = function(arr) {
    if (typeof arr === 'string' || isArray(arr)){
        return this.integer(arr.length - 1);
    } else {
        return -1;
    }
}


/**
 * RANDOM ITEM FROM SCALAR ARRAY
 */
exports.item = function(arr) {
    if (typeof arr === 'string' || isArray(arr)){
        return arr[this.index(arr)];
    } else {
        return -1;
    }
};


/**
 * RETURN A RANDOM SELECTION FROM THE GIVEN ARRAY
 * it return a new array with the random selection
 * it does not modify the original array
 */
exports.selection = function(arr, num) {
    var _arr = Array.prototype.slice.call(arr);
    var selection = [];
    for (var i=0; i<num; i++) {
        var idx = this.index(_arr);
        selection.push(_arr.splice(idx, 1).shift());
    }
    return selection;
};

