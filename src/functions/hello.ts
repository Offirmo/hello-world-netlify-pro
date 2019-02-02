// copied from https://www.netlify.com/docs/functions/

import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda'

interface Response {
	statusCode: number;
	body: string;
}

const handler: Handler<APIGatewayEvent, Response> = async (
	event: APIGatewayEvent,
	context: Context,
	callback: Callback
) => {
	console.log('hello')
	console.info('hello')
	console.warn('hello')
	console.error('hello')

	return {
		statusCode: 200,
		body: "Hello, TypeScript World!"
	}
}

export { handler }
