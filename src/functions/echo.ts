// see https://www.netlify.com/docs/functions/

exports.handler = async function(event, context, callback) {
	const all_the_things = JSON.stringify({
		context,
		event,
		env: process.env,
	}, null, 2)

	console.log(all_the_things)

	return {
		statusCode: 200,
		body: all_the_things,
	}
}
