import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import {name as appName} from './app.json';
import App from './src/App';

ScriptManager.shared.addResolver(async (scriptId, caller) => {

  console.log();
  const containersResponse = await fetch("http://127.0.0.1:8000/api/v1/mini_app/list_mini_app", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
    body: JSON.stringify({
      list_mini_app: ['ls_chat_mini_app', 'ls_auth_mini_app'],
      platform: Platform.OS,
      version: '0.0.1',
    }),
  });

  const containers = await containersResponse.json();
  console.log(containers);

  const resolveURL = Federated.createURLResolver({
    containers: containers,
  });

  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
