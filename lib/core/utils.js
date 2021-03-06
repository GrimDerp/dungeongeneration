/**
 * @class Roguelike.Utils
 * @classdesc In this class are the functions stored that are being
 * used in other functions
 */
Roguelike.Utils = {

	/**
	 * Function to generate a random number between two values
	 * @param {int} from - The minimum number
	 * @param {int} to - The maximum number
	 */
	randomNumber: function(from, to) {

		return Math.floor(Math.random() * (to - from + 1) + from);

	},

	/**
	 * Function to extend the default options with the users options
	 * @param {object} a - The original object to extend
	 * @param {object} b - The new settings that override the original object
	 */
	extend: function(a, b) {

		//Check each property
		for(var key in b) {
			if(b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}

		//Return the extended object
		return a;

	},

	/**
	 * Function to check if an object is in a list
	 * @param {object} object - The object to search for
	 * @param {Array} list - The list, aka the array
	 */
	contains: function(object, list) {

		//Loop through the list
		for(var i = 0; i < list.length; i++) {

			//If the current list item equals the object, return the position!
			if(list[i] === object) {
				return i;
			}
		}

		//No results found, the list doesn't contain the object
		return false;

	}

};
