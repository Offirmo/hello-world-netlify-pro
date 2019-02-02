// see https://www.netlify.com/docs/functions/

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
	throw new Error('TEST ERROR 2!')

	//return new Error('TEST ERROR 2!')
}

export { handler }
