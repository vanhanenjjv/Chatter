import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

export const main: APIGatewayProxyHandlerV2 = async (event, context) => {
  return {
    statusCode: 200,
    headers: {},
    body: 'Hello, world!'
  }
}
