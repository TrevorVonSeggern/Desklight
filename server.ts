import {App} from 'web-server-database/server/App';
import {LightRouter} from "./server/api/light/controller";
import * as userServer from 'web-user-management/server';

import {SyncDatabase} from 'web-server-database/server/database/sqlize';

SyncDatabase();

App.APIModules.push({name: 'light', router: LightRouter});
App.APIModules.concat(userServer.default.APIModules); // load the user management modules

App.listen();