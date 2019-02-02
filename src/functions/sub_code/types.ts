import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda'

interface Response {
	statusCode: number;
	body: string;
}

type NetlifyHandler = Handler<APIGatewayEvent, Response>

export {
	APIGatewayEvent,
	Context,

	Response,
	NetlifyHandler,
}
