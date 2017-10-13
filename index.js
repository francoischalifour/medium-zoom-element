import mediumZoom from 'medium-zoom'

const camelCased = string =>
  string.replace(/-([a-z])/g, g => g[1].toUpperCase())

const template = document.createElement('template')
template.innerHTML = `
<style>
  :host {
    display: block;
  }
  img {
    max-width: 100%;
  }
  .medium-zoom-image {
    cursor: zoom-in;
  }
</style>
<img />
`

export default class MediumZoom extends HTMLElement {
  static get observedAttributes() {
    return ['margin', 'background', 'scroll-offset', 'disable-metaclick']
  }

  static getOptionName(value) {
    return value === 'disable-metaclick' ? 'metaClick' : camelCased(value)
  }

  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.setAttribute('role', 'img')
    this.setAttribute('aria-label', this.alt)

    const image = this.shadowRoot.querySelector('img')
    this.src && image.setAttribute('src', this.src)
    this.width
      ? image.setAttribute('width', this.width)
      : (image.style.width = '100%')
    this.height && image.setAttribute('height', this.height)
    this.alt && image.setAttribute('alt', this.alt)
    this.zoomTarget && image.setAttribute('data-zoom-target', this.zoomTarget)

    const options = Array.from(this.attributes).reduce((options, { name }) => {
      return MediumZoom.observedAttributes.includes(name)
        ? Object.assign(options, {
            [MediumZoom.getOptionName(name)]: this[
              MediumZoom.getOptionName(name)
            ]
          })
        : options
    }, {})

    this.zoom = mediumZoom(image, options)

    Object.keys(this.zoom).forEach(method => (this[method] = this.zoom[method]))
  }

  get src() {
    return this.getAttribute('src') || ''
  }

  set src(value) {
    this.setAttribute('src', value)
  }

  get alt() {
    return this.getAttribute('alt') || ''
  }

  set alt(value) {
    this.setAttribute('alt', value)
  }

  get zoomTarget() {
    return this.getAttribute('zoom-target') || ''
  }

  set zoomTarget(value) {
    value
      ? this.setAttribute('zoom-target', value)
      : this.removeAttribute('zoom-target')
  }

  get width() {
    return this.getAttribute('width') || ''
  }

  set width(value) {
    value ? this.setAttribute('width', value) : this.removeAttribute('width')
  }

  get height() {
    return this.getAttribute('height') || ''
  }

  set height(value) {
    value ? this.setAttribute('height', value) : this.removeAttribute('height')
  }

  get margin() {
    return Number(this.getAttribute('margin')) || ''
  }

  set margin(value) {
    value ? this.setAttribute('margin', value) : this.removeAttribute('margin')
  }

  get background() {
    return this.getAttribute('background') || ''
  }

  set background(value) {
    value
      ? this.setAttribute('background', value)
      : this.removeAttribute('background')
  }

  get scrollOffset() {
    return this.hasAttribute('scroll-offset')
      ? Number(this.getAttribute('scroll-offset'))
      : ''
  }

  set scrollOffset(value) {
    value !== null
      ? this.setAttribute('scroll-offset', Number(value))
      : this.removeAttribute('scroll-offset')
  }

  get metaClick() {
    return !this.hasAttribute('disable-metaclick')
  }

  set metaClick(value) {
    value
      ? this.setAttribute('disable-metaclick', value)
      : this.removeAttribute('disable-metaclick')
  }

  disconnectedCallback() {
    this.zoom.detach()
  }

  adoptedCallback() {
    this.zoom.hide()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.zoom.update({
      [MediumZoom.getOptionName(name)]: this[MediumZoom.getOptionName(name)]
    })
  }
}

window.customElements.define('medium-zoom', MediumZoom)
