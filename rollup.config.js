import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

import {
  name,
  description,
  version,
  author,
  repository,
  license,
  main as mainPath
} from './package.json'

const banner = `/*
 * ${name} v${version}
 * ${description}
 * Copyright ${new Date().getFullYear()} ${author.name}
 * https://github.com/${repository}
 * ${license} License
 */`

const plugins = [
  resolve(),
  babel({
    plugins: ['transform-custom-element-classes']
  })
]

export default [
  {
    file: mainPath.replace('.min', ''),
    plugins
  },
  {
    file: mainPath,
    plugins: [
      ...plugins,
      uglify({
        output: {
          preamble: banner
        }
      })
    ]
  }
].map(({ file, plugins }) => ({
  input: 'index.js',
  output: {
    file,
    format: 'umd',
    name: 'MediumZoomElement'
  },
  plugins
}))
