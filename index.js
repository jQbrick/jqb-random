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
 * RANDOM ITEM FROM SCALAR ARRAY
 */
exports.item = function(arr) {
    if (typeof arr === 'string' || isArray(arr)){
        return arr[this.random(0, arr.length - 1)];
    } else {
        return -1;
    }
};
