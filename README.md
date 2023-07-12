# Module Federation Example

This repo shows an example of using Module Federation with Angular where:

1. A Host (`shell`) fetches routes for Two Remotes (`remote1`, `remote2`).
2. There is a UserService which is an Angular Service, used by `remote1`, `remote2`.
3. This `UserService` is federated via `auth-remote`.
4. `remote1` and `remote2` fetch the federated version of `UserService` from `auth-remote` at runtime rather than at build time.
5. `UserService` is Type-Safe, thanks to the` remotes.d.ts` file in the `remote1-user-details` project and `remote2-set-user-details` project.

## Known Limitations

1. The `remotes.d.ts` file is not created automatically. It must be created manually currently.
2. The `remotes.d.ts` file must be added to any workspace libraries using a federated module from a remote.
3. The `remotes.d.ts` file must be added to both workspace libraries and the remote application that builds using those libraries for TS to correctly handle compilation.
4. As the `auth-remote` is not a remote of `shell`, it must be served manually to be available to `remote1` and `remote2` at runtime.
5. The `UserService` must be imported from the `@mfexample/data-access/auth` library in `auth-remote` to ensure TS includes it in the compilation.

## Serving the repository

1. `nx serve auth-remote`
2. `nx serve shell`

## Notes

To see how a `remote` can act as both a `remote` and a `host`, look at the following files:

1. `apps/remote1/module-federation.config.js`
2. `apps/remote2/module-federation.config.js`


To see how to federate more than just `Route`, for example, the `UserService` look at the following files:

1. `apps/auth-remote/module-federation.config.js`
2. `libs/remote1/user-details/src/lib/user-details/user-details.component.ts`

