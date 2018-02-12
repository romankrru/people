/* eslint-disable no-extend-native */
if (!(function f() { }).name) {
  Object.defineProperty(Function.prototype, 'name', {
    get: function () {
      var name = (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
      // For better performance only parse once, and then cache the
      // result through a new accessor for repeated access.
      Object.defineProperty(this, 'name', { value: name });
      return name;
    }
  });
}
/* eslint-enable no-extend-native */
