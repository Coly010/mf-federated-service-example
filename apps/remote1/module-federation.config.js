module.exports = {
  name: 'remote1',
  remotes: ['auth-remote'],
  exposes: {
    './Module': 'apps/remote1/src/app/remote-entry/entry.module.ts',
  },
};
