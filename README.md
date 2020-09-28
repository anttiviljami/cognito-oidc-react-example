# Cognito OIDC React Example

[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/anttiviljami/cognito-oidc-react-example/blob/master/LICENSE)

Sample React app using [`oidc-client`](https://github.com/IdentityModel/oidc-client-js) to authenticate with AWS Cognito deployed with CloudFormation.

## Deploy Cognito

```
aws cloudformation deploy --template-file cloudformation.yml --stack-name oidc-example
```

## Run App

```
npm install
npm start
```
