// https://www.netlify.com/docs/functions/
// https://github.com/sw-yx/create-react-app-lambda-typescript/blob/master/src/lambda/hello.ts
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

export { handler }
