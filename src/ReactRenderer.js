/**
 * @providesModule ReactRenderer
 */

var React = require('React');

/**
 * @constructor
 * @param {Object} options
 * options = {
 *   wrapperClass: 'string'
 * }
 */
function ReactRenderer(options) {
  var options = options || {};
  this.wrapperClass = options.wrapperClass || 'react-box';

  this.createBox = function() {
    var reactBox = document.createElement('div');
    reactBox.className = this.wrapperClass;
    return reactBox;
  };

  this.clearContainer = function(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };
}

/**
 * Implements React.render() interface
 * Act just like React.render(), but hooked by wrapper div.
 * @param {domElement} element
 * @param {domElement} container
 * @param {function} callback
 */
ReactRenderer.prototype.render = function(element, container, callback) {
  var box = this.createBox();
  this.clearContainer(container);
  container.appendChild(box);
  React.render(element, box, callback);
};

/**
 * Prepend box before first react-box child of container.
 * like jQuery.prepend()
 * @param {domElement} element
 * @param {domElement} container
 * @param {function} callback
 */
ReactRenderer.prototype.prepend = function(element, container, callback) {
  var box = this.createBox();
  if (container.firstChild) {
    container.insertBefore(box, container.firstChild);
  } else {
    container.appendChild(box);
  }
  React.render(element, box, callback);
};

/**
 * Append box after last react-box child of container.
 * like jQuery.append()
 * @param {domElement} element
 * @param {domElement} container
 * @param {function} callback
 */
ReactRenderer.prototype.append = function(element, container, callback) {
  var box = this.createBox();
  container.appendChild(box);
  React.render(element, box, callback);
};


// Export the singleton instance.
module.exports = ReactRenderer;
