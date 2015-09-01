'use strict';

/**
 * @function fileExtension
 * @description gets the file extension from the given filename
 * @param {String} name - The name of the file
 * @return {String|Boolean} The extension (without the period) or false if no
 * extension
 */
module.exports = function fileExtension(name) {
	var period = name.lastIndexOf('.');
	if (period === -1) {return false};
	return name.substr(period + 1); 
};
