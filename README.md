# Medium Zoom Element

> HTML Element for [`medium-zoom`](https://github.com/francoischalifour/medium-zoom).

This is a web component that bundles the [`medium-zoom`](https://github.com/francoischalifour/medium-zoom) API.

⚠️ *In development*

## Usage

Include [`dist/medium-zoom.element.js`](dist/medium-zoom.element.js) in your HTML page and use the `medium-zoom` web component.

```html
<medium-zoom
  src="image.jpg"
  alt="Zoomable image"
></medium-zoom>
```

## Options

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
| `zoom-target`       | Source of zoomed image                                            |

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

## Methods

Refer to [`medium-zoom`'s methods](https://github.com/francoischalifour/medium-zoom#methods).

## Dev

* Run `yarn` to install Node dependencies
* Run `yarn dev` to watch changes and rebuild the library
* Open [`examples/index.html`](examples/index.html) to check your changes (it includes [`dist/medium-zoom.element.js`](dist/medium-zoom.element.js) which is watched with `npm run dev`)

## License

MIT © [François Chalifour](https://francoischalifour.com)
