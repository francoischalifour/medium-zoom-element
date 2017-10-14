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
  static get observedOptions() {
    return [
      'margin',
      'background',
      'scroll-offset',
      'disable-metaclick',
      'zoom-target'
    ]
  }

  static get observedAttributes() {
    return [
      ...MediumZoom.observedOptions,
      'src',
      'alt',
      'width',
      'height',
      'style'
    ]
  }

  static getOptionName(value) {
    return value === 'disable-metaclick' ? 'metaClick' : camelCased(value)
  }

  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.image = this.shadowRoot.querySelector('img')
    this.zoom = mediumZoom(this.image)

    // Attach all zoom methods to the component
    Object.keys(this.zoom).forEach(method => (this[method] = this.zoom[method]))

    // Add accessibility attributes to the component
    this.setAttribute('role', 'img')
    this.setAttribute('aria-label', this.alt)
  }

  disconnectedCallback() {
    this.zoom.detach()
  }

  adoptedCallback() {
    this.zoom.hide()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (MediumZoom.observedOptions.includes(name)) {
      if (name === 'zoom-target') {
        this.image.setAttribute('data-zoom-target', newValue)
        return
      }

      this.zoom.update({
        [MediumZoom.getOptionName(name)]: this[MediumZoom.getOptionName(name)]
      })
    } else {
      // Attach all DOM attributes to the image
      this.image.setAttribute(name, newValue)
    }
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
}

window.customElements.define('medium-zoom', MediumZoom)
