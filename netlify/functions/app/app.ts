import serverless from 'serverless-http';
import '../../../server/common/env';
import Server from '../../../server/common/server';
import routes from '../../../server/routes';

const app = new Server().router(routes).getApp();
module.exports.handler = serverless(app);
