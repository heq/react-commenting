It is used to speed up setup when developping a project using React with npm.
It prepares a container with latest versions of:
* node
* npm
* WebPack
* React
* EsLint
* a good deal of node modules pre-installed.

## Environments

It bootstraps an application with three environments:
* **dev**, an environment to develop on a local machine, hot reload components, etc.

### Dev

The default environment is `dev` and this image provides a server (started by
the default command `npm start`) that serves from port 80. As with all Docker
containers we suggest you do some port forwarding when creating an image
(`docker run -p 3000:80`).

## Setup and configuration

Use it as a base and mount or copy your actual application to `/usr/app`.

The webpack configurations are in `/usr/app/cfg/` (`base.js`, `dev.js`, …). To
modify those configs you need to overwrite them by copying a new file on top of
it.

The actual source of the app should be mounted in `/usr/app/src`, more
specifically the webpack entrypoint for the app is taken by default from
`/usr/app/src/entry.js` or `/usr/app/src/entry.jsx`.
