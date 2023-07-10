module.exports = {
  name: 'remote2',
  remotes: ['auth-remote'],
  exposes: {
    './Module': 'apps/remote2/src/app/remote-entry/entry.module.ts',
  },
};
