// see https://www.netlify.com/docs/functions/

import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda'
import * as _ from 'lodash'

interface Response {
	statusCode: number;
	body: string;
}

const handler: Handler<APIGatewayEvent, Response> = async (
	event: APIGatewayEvent,
	context: Context,
	callback: Callback
) => {
	return {
		statusCode: 200,
		body: _.capitalize('LODASH'),
	}
}

export { handler }
