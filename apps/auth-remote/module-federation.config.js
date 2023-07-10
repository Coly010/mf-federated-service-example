module.exports = {
  name: 'auth-remote',
  exposes: {
    './Module': 'apps/auth-remote/src/app/remote-entry/entry.module.ts',
    './auth': 'libs/data-access/auth/src/lib/user.service.ts'
  },
};
