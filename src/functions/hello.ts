// copied from https://www.netlify.com/docs/functions/

exports.handler = async function(event, context, callback) {

	console.log('hello')
	console.info('hello')
	console.warn('hello')
	console.error('hello')

	return {
		statusCode: 200,
		body: "Hello, TypeScript World!"
	}
}
