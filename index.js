/**
 * Adapted from yields/serialize
 */

/**
 * Module dependencies
 */

var submittable = require('submittable');
var value = require('value');

/**
 * Serialize given `form`
 *
 * @param {Element} el
 * @return {String}
 */

exports = module.exports = function (el) {
  var ret = [].reduce.call(el.elements, function (arr, el) {
    if (!submittable(el)) return arr;
    var key = encodeURIComponent(el.name);
    var val = encodeURIComponent(value(el));
    arr.push(key + '=' + val);
    return arr;
  }, []);

  return ret.join('&').replace(/%20/g, '+');
};

