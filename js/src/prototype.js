
var prototype = function ( Set , union , find ) {

	Set.prototype.union = function ( other ) {
		return union( this , other ) ;
	} ;

	Set.prototype.find = function ( ) {
		return find( this ) ;
	} ;

} ;

exports.prototype = prototype ;

