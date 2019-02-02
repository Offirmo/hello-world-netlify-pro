// https://www.netlify.com/docs/functions/
// https://github.com/sw-yx/create-react-app-lambda-typescript/blob/master/src/lambda/hello.ts
import {
	APIGatewayEvent,
	Context,
	Response,
	NetlifyHandler,
} from './sub_code/types'


const handler: NetlifyHandler = async (
	event: APIGatewayEvent,
	context: Context,
): Promise<Response> => {
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
