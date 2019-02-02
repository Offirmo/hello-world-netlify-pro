// see https://www.netlify.com/docs/functions/

import {
	APIGatewayEvent,
	Context,
	Response,
	NetlifyHandler,
} from './sub_code/types'

import { capitalize } from './sub_code'

const handler: NetlifyHandler = async (): Promise<Response> => {

	return {
		statusCode: 200,
		body: capitalize('LODASH SUB'),
	}
}

export { handler }
