// see https://www.netlify.com/docs/functions/

exports.handler = async function(event, context, callback) {

	throw new Error('TEST ERROR 1!')

	//return new Error('TEST ERROR 2!')
}
