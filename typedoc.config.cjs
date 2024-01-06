/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ['./src/'],
  entryPointStrategy: 'expand',
  out: 'docs',
  name: 'Beemo',
  pretty: true,
  theme: 'default',
  hideGenerator: true,
  titleLink: 'beemo-docs',
  plugin: ['typedoc-material-theme']
}
