import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'index.js',
  output: {
    file: 'dist/medium-zoom.element.js',
    format: 'iife',
    name: 'MediumZoomElement'
  },
  plugins: [
    nodeResolve()
  ]
}
