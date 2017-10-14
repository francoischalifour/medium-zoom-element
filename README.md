<p align="center">
  <a href="https://medium-zoom.francoischalifour.com"><img src="https://raw.githubusercontent.com/francoischalifour/medium-zoom/master/logo.svg?sanitize=true" width="64"></a>
  <h3 align="center">Medium Zoom Element</h3>
  <p align="center">HTML Element for <a href="https://github.com/francoischalifour/medium-zoom"><code>medium-zoom</code></a></p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/medium-zoom-element">
    <img src="https://img.shields.io/npm/v/medium-zoom-element.svg?style=flat-square" alt="version">
  </a>
  <a href="https://unpkg.com/medium-zoom-element/dist/">
    <img src="http://img.badgesize.io/https://unpkg.com/medium-zoom-element/dist/medium-zoom-element.min.js?label=size&style=flat-square" alt="size">
  </a>
  <a href="https://unpkg.com/medium-zoom-element/dist/">
    <img src="http://img.badgesize.io/https://unpkg.com/medium-zoom-element/dist/medium-zoom-element.min.js?compression=gzip&label=gzip%20size&style=flat-square" alt="gzip size">
  </a>
  <a href="https://github.com/francoischalifour/medium-zoom-element/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/medium-zoom-element.svg?style=flat-square" alt="MIT license">
  </a>
</p>

> Web component bundling the [`medium-zoom`](https://github.com/francoischalifour/medium-zoom) API.

## Usage

From [npm](https://www.npmjs.com) or [Yarn](https://yarnpkg.com):

```sh
npm install --save medium-zoom
# or
yarn add medium-zoom
```

From a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network):

```html
<script src="https://unpkg.com/medium-zoom-element@0/dist/medium-zoom-element.min.js"></script>
```

Use the `medium-zoom` web component in your HTML page:

```html
<medium-zoom
  src="image.jpg"
  alt="Zoomable image"
></medium-zoom>
```

## API

### Options

| Attribute           | Description                                                       |
|---------------------|-------------------------------------------------------------------|
| `src`               | Source of the image                                               |
| `alt`               | Alternative text for the image                                    |
| `width`             | Width of the image                                                |
| `height`            | Height of the image                                               |
| `margin`            | Space outside the zoomed image                                    |
| `background`        | Color of the overlay                                              |
| `scroll-offset`     | Number of pixels to scroll to dismiss the zoom                    |
| `disable-metaclick` | Disables the action on meta click (opens the link / image source) |
| `zoom-target`       | Source of the zoomed image                                            |

Refer to [`medium-zoom`'s options](https://github.com/francoischalifour/medium-zoom#options) for default values.

```html
<medium-zoom
  src="image.jpg"
  zoom-target="image-hd.jpg"
  margin="48"
  background="rgba(0,0,0,.16)"
  scroll-offset="0"
  disable-metaclick
  alt="Zoomable image"
></medium-zoom>
```

### Methods

Refer to [`medium-zoom`'s methods](https://github.com/francoischalifour/medium-zoom#methods).

### JavaScript getters/setters

* `margin`
* `background`
* `scrollOffset`
* `metaClick`
* `zoomTarget`

```js
const image = document.querySelector('medium-zoom')

image.margin = 48
console.log(image.margin) // 48
```

## Dev

* Run `yarn` to install Node dependencies
* Run `yarn dev` to watch changes and rebuild the library
* Open [`examples/index.html`](examples/index.html) to check your changes (it includes [`dist/medium-zoom-element.min.js`](dist/medium-zoom-element.min.js) which is watched with `yarn dev`)

## License

MIT © [François Chalifour](https://francoischalifour.com)
