import { app } from 'electron';
import { join } from 'node:path';

const appPath = app.getAppPath();

const appDistPath = `${appPath}/dist`;

const appDocuments = app.getPath('documents');

const appProductOromodopPath = `${appDocuments}/orodomop`;

const appResource = process.resourcesPath;

const appContent = join(appResource, '../');

const appDataPath = join(appContent, 'data');
export {
    appPath,
    appDistPath,
    appDocuments,
    appProductOromodopPath,
    appResource,
    appContent,
    appDataPath,
};
