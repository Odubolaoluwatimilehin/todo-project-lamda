const apiId = 'o94waqiy56'  // AWS API Gateway endpoint ID
const region = 'eu-west-2'
export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev--on20g8p.us.auth0.com',            // Auth0 domain
  clientId: 'St8kQEDjWZGx5gpSQO3kRX0JAYuSbAyl',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
