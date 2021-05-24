import * as path from 'path'

import { Stack, Construct, StackProps } from '@aws-cdk/core'
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs'
import { HttpApi } from '@aws-cdk/aws-apigatewayv2'
import { HttpMethod } from '@aws-cdk/aws-apigatewayv2'
import { LambdaProxyIntegration } from '@aws-cdk/aws-apigatewayv2-integrations'

export class Oauth2Stack extends Stack {
  constructor (scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // The code that defines your stack goes here
    const handler = new NodejsFunction(this, 'OAuth2 Lambda', {
      entry: path.join(__dirname, '..', 'src', 'oauth2.ts'),
      handler: 'main',
      functionName: 'yee'
    })

    const gateway = new HttpApi(this, 'OAuth2 API Gateway')

    const integration = new LambdaProxyIntegration({ handler })

    gateway.addRoutes({
      methods: [HttpMethod.GET],
      path: '/oauth2',
      integration
    })
  }
}
