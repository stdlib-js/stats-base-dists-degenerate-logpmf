/** @license Apache-2.0 */

'use strict';

/**
* Natural logarithm of the probability mass function (PDF) for a degenerate distribution.
*
* @module @stdlib/stats-base-dists-degenerate-logpmf
*
* @example
* var logpmf = require( '@stdlib/stats-base-dists-degenerate-logpmf' );
*
* var y = logpmf( 2.0, 0.0 );
* // returns -Infinity
*
* @example
* var factory = require( '@stdlib/stats-base-dists-degenerate-logpmf' ).factory;
*
* var logpmf = factory( 10.0 );
*
* var y = logpmf( 10.0 );
* // returns 0.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
