import * as cdk from 'aws-cdk-lib';
import { CognitoProtectedApi } from './lib/cognitoProtectedApiStack';

const app = new cdk.App();
new CognitoProtectedApi(app, 'CognitoProtectedApi');
app.synth();
