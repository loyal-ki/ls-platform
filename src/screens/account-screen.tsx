import {Federated} from '@callstack/repack/client';
import React from 'react';
import Placeholder from '../components/placeholder';

const Account = React.lazy(() =>
  Federated.importModule('ls_auth_mini_app', './AccountScreen'),
);

const AccountScreen = () => {
  return (
    <React.Suspense fallback={<Placeholder label="Account" icon="account" />}>
      <Account />
    </React.Suspense>
  );
};

export default AccountScreen;
