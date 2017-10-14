(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.MediumZoomElement = factory());
}(this, (function () { 'use strict';

/*
 * medium-zoom v0.2.0
 * Medium zoom on your images in vanilla JavaScript
 * Copyright 2017 Francois Chalifour
 * https://github.com/francoischalifour/medium-zoom
 * MIT License
 */function __$styleInject(a, b) {
  if ('undefined' == typeof document) return b;a = a || '';var c = document.head || document.getElementsByTagName('head')[0],
      d = document.createElement('style');return d.type = 'text/css', c.appendChild(d), d.styleSheet ? d.styleSheet.cssText = a : d.appendChild(document.createTextNode(a)), b;
}function createCommonjsModule(a, b) {
  return b = { exports: {} }, a(b, b.exports), b.exports;
}var _extends = Object.assign || function (a) {
  for (var b, c = 1; c < arguments.length; c++) {
    for (var d in b = arguments[c], b) {
      Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
    }
  }return a;
};
var toConsumableArray = function toConsumableArray(a) {
  if (Array.isArray(a)) {
    for (var b = 0, c = Array(a.length); b < a.length; b++) {
      c[b] = a[b];
    }return c;
  }return Array.from(a);
};
var mediumZoom_1 = createCommonjsModule(function (a) {
  var b = ['IMG'],
      c = [27, 81],
      d = function d(a) {
    return b.includes(a.tagName);
  },
      e = function e(a) {
    return a.naturalWidth !== a.width;
  },
      f = function f(a) {
    return NodeList.prototype.isPrototypeOf(a) || HTMLCollection.prototype.isPrototypeOf(a);
  },
      g = function g(a) {
    return a && 1 === a.nodeType;
  };a.exports = function (a) {
    var h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        i = h.margin,
        j = void 0 === i ? 0 : i,
        k = h.background,
        l = void 0 === k ? '#fff' : k,
        m = h.scrollOffset,
        n = void 0 === m ? 48 : m,
        o = h.metaClick,
        p = function p(a) {
      var b = a.getBoundingClientRect(),
          c = b.top,
          d = b.left,
          e = b.width,
          f = b.height,
          g = a.cloneNode(),
          h = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
          i = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;return g.removeAttribute('id'), g.style.position = 'absolute', g.style.top = c + h + 'px', g.style.left = d + i + 'px', g.style.width = e + 'px', g.style.height = f + 'px', g.style.transform = '', g;
    },
        q = function q() {
      if (C.template) if (C.template.dispatchEvent(new Event('show')), D = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, E = !0, C.zoomed = p(C.template), document.body.appendChild(B), document.body.appendChild(C.zoomed), requestAnimationFrame(function () {
        document.body.classList.add('medium-zoom--open');
      }), C.template.style.visibility = 'hidden', C.zoomed.classList.add('medium-zoom-image--open'), C.zoomed.addEventListener('click', r), C.zoomed.addEventListener('transitionend', u), C.template.getAttribute('data-zoom-target')) {
        C.zoomedHd = C.zoomed.cloneNode(), C.zoomedHd.src = C.zoomed.getAttribute('data-zoom-target'), C.zoomedHd.onerror = function () {
          clearInterval(a), console.error('Unable to reach the zoom image target ' + C.zoomedHd.src), C.zoomedHd = null, y();
        };var a = setInterval(function () {
          C.zoomedHd.naturalWidth && (clearInterval(a), C.zoomedHd.classList.add('medium-zoom-image--open'), C.zoomedHd.addEventListener('click', r), document.body.appendChild(C.zoomedHd), y());
        }, 10);
      } else y();
    },
        r = function a() {
      var b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
          c = function c() {
        E || !C.template || (C.template.dispatchEvent(new Event('hide')), E = !0, document.body.classList.remove('medium-zoom--open'), C.zoomed.style.transform = '', C.zoomedHd && (C.zoomedHd.style.transform = '', C.zoomedHd.removeEventListener('click', a)), C.zoomed.removeEventListener('click', a), C.zoomed.addEventListener('transitionend', v));
      };0 < b ? setTimeout(c, b) : c();
    },
        s = function s(a) {
      C.template ? r() : (C.template = a ? a.target : A[0], q());
    },
        t = function t(a) {
      return (a.metaKey || a.ctrlKey) && z.metaClick ? window.open(a.target.getAttribute('data-original') || a.target.parentNode.href || a.target.src, '_blank') : void (a.preventDefault(), s(a));
    },
        u = function a() {
      E = !1, C.zoomed.removeEventListener('transitionend', a), C.template.dispatchEvent(new Event('shown'));
    },
        v = function a() {
      C.template && (C.template.style.visibility = '', document.body.removeChild(C.zoomed), C.zoomedHd && document.body.removeChild(C.zoomedHd), document.body.removeChild(B), C.zoomed.classList.remove('medium-zoom-image--open'), E = !1, C.zoomed.removeEventListener('transitionend', a), C.template.dispatchEvent(new Event('hidden')), C.template = null, C.zoomed = null, C.zoomedHd = null);
    },
        w = function w() {
      if (!E && C.template) {
        var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;Math.abs(D - a) > z.scrollOffset && r(150);
      }
    },
        x = function x(a) {
      c.includes(a.keyCode || a.which) && r();
    },
        y = function y() {
      var a = Math.min;if (C.template) {
        var b = window.innerWidth,
            c = window.innerHeight,
            d = b - 2 * z.margin,
            e = c - 2 * z.margin,
            f = C.zoomedHd || C.template,
            g = f.naturalWidth,
            h = void 0 === g ? d : g,
            i = f.naturalHeight,
            j = void 0 === i ? e : i,
            k = f.getBoundingClientRect(),
            l = k.top,
            m = k.left,
            n = k.width,
            o = k.height,
            p = a(h, d) / n,
            q = a(j, e) / o,
            r = a(p, q) || 1,
            s = (-m + (d - n) / 2 + z.margin) / r,
            t = (-l + (e - o) / 2 + z.margin) / r,
            u = 'scale(' + r + ') translate3d(' + s + 'px, ' + t + 'px, 0)';C.zoomed.style.transform = u, C.zoomedHd && (C.zoomedHd.style.transform = u);
      }
    },
        z = { margin: j, background: l, scrollOffset: n, metaClick: void 0 === o || o };a instanceof Object && _extends(z, a);var A = function (a) {
      try {
        return Array.isArray(a) ? a.filter(d) : f(a) ? [].concat(toConsumableArray(a)).filter(d) : g(a) ? [a].filter(d) : 'string' == typeof a ? [].concat(toConsumableArray(document.querySelectorAll(a))).filter(d) : [].concat(toConsumableArray(document.querySelectorAll(b.map(function (a) {
          return a.toLowerCase();
        }).join(',')))).filter(e);
      } catch (a) {
        throw new TypeError('The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList, an HTMLCollection or an array.\nSee: https://github.com/francoischalifour/medium-zoom');
      }
    }(a),
        B = function (a) {
      var b = document.createElement('div');return b.classList.add('medium-zoom-overlay'), b.style.backgroundColor = a, b;
    }(z.background),
        C = { template: null, zoomed: null, zoomedHd: null },
        D = 0,
        E = !1;return A.forEach(function (a) {
      a.classList.add('medium-zoom-image'), a.addEventListener('click', t);
    }), B.addEventListener('click', r), document.addEventListener('scroll', w), document.addEventListener('keyup', x), window.addEventListener('resize', r), { show: s, hide: r, toggle: s, update: function update() {
        var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};return a.background && (B.style.backgroundColor = a.background), _extends(z, a);
      }, addEventListeners: function addEventListeners(a, b) {
        A.forEach(function (c) {
          c.addEventListener(a, b);
        });
      }, detach: function detach() {
        var a = function a() {
          var b = new Event('detach');A.forEach(function (a) {
            a.classList.remove('medium-zoom-image'), a.removeEventListener('click', t), a.dispatchEvent(b);
          }), A.splice(0, A.length), B.removeEventListener('click', r), document.removeEventListener('scroll', w), document.removeEventListener('keyup', x), window.removeEventListener('resize', r), C.zoomed && C.zoomed.removeEventListener('transitionend', a);
        };C.zoomed ? (r(), C.zoomed.addEventListener('transitionend', requestAnimationFrame(a))) : a();
      }, images: A, options: z };
  };
});__$styleInject('.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--open .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s}.medium-zoom-image--open{position:relative;z-index:1;cursor:pointer;cursor:zoom-out;will-change:transform}', void 0);var src = mediumZoom_1;

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray$1 = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}


Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);
var camelCased = function camelCased(string) {
  return string.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};

var template = document.createElement('template');
template.innerHTML = '\n<style>\n  :host {\n    display: block;\n  }\n  img {\n    max-width: 100%;\n  }\n  .medium-zoom-image {\n    cursor: zoom-in;\n  }\n</style>\n<img />\n';

var MediumZoom = function (_CustomElement2) {
  inherits(MediumZoom, _CustomElement2);
  createClass(MediumZoom, null, [{
    key: 'getOptionName',
    value: function getOptionName(value) {
      return value === 'disable-metaclick' ? 'metaClick' : camelCased(value);
    }
  }, {
    key: 'observedOptions',
    get: function get$$1() {
      return ['margin', 'background', 'scroll-offset', 'disable-metaclick', 'zoom-target'];
    }
  }, {
    key: 'observedAttributes',
    get: function get$$1() {
      return [].concat(toConsumableArray$1(MediumZoom.observedOptions), ['src', 'alt', 'width', 'height', 'style']);
    }
  }]);

  function MediumZoom() {
    classCallCheck(this, MediumZoom);

    var _this = possibleConstructorReturn(this, (MediumZoom.__proto__ || Object.getPrototypeOf(MediumZoom)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    _this.image = _this.shadowRoot.querySelector('img');
    _this.zoom = src(_this.image);

    // Attach all zoom methods to the component
    Object.keys(_this.zoom).forEach(function (method) {
      return _this[method] = _this.zoom[method];
    });

    // Add accessibility attributes to the component
    _this.setAttribute('role', 'img');
    _this.setAttribute('aria-label', _this.alt);
    return _this;
  }

  createClass(MediumZoom, [{
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.zoom.detach();
    }
  }, {
    key: 'adoptedCallback',
    value: function adoptedCallback() {
      this.zoom.hide();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (MediumZoom.observedOptions.includes(name)) {
        if (name === 'zoom-target') {
          this.image.setAttribute('data-zoom-target', newValue);
          return;
        }

        this.zoom.update(defineProperty({}, MediumZoom.getOptionName(name), this[MediumZoom.getOptionName(name)]));
      } else {
        // Attach all DOM attributes to the image
        this.image.setAttribute(name, newValue);
      }
    }
  }, {
    key: 'src',
    get: function get$$1() {
      return this.getAttribute('src') || '';
    },
    set: function set$$1(value) {
      this.setAttribute('src', value);
    }
  }, {
    key: 'alt',
    get: function get$$1() {
      return this.getAttribute('alt') || '';
    },
    set: function set$$1(value) {
      this.setAttribute('alt', value);
    }
  }, {
    key: 'zoomTarget',
    get: function get$$1() {
      return this.getAttribute('zoom-target') || '';
    },
    set: function set$$1(value) {
      value ? this.setAttribute('zoom-target', value) : this.removeAttribute('zoom-target');
    }
  }, {
    key: 'width',
    get: function get$$1() {
      return this.getAttribute('width') || '';
    },
    set: function set$$1(value) {
      value ? this.setAttribute('width', value) : this.removeAttribute('width');
    }
  }, {
    key: 'height',
    get: function get$$1() {
      return this.getAttribute('height') || '';
    },
    set: function set$$1(value) {
      value ? this.setAttribute('height', value) : this.removeAttribute('height');
    }
  }, {
    key: 'margin',
    get: function get$$1() {
      return Number(this.getAttribute('margin')) || '';
    },
    set: function set$$1(value) {
      value ? this.setAttribute('margin', value) : this.removeAttribute('margin');
    }
  }, {
    key: 'background',
    get: function get$$1() {
      return this.getAttribute('background') || '';
    },
    set: function set$$1(value) {
      value ? this.setAttribute('background', value) : this.removeAttribute('background');
    }
  }, {
    key: 'scrollOffset',
    get: function get$$1() {
      return this.hasAttribute('scroll-offset') ? Number(this.getAttribute('scroll-offset')) : '';
    },
    set: function set$$1(value) {
      value !== null ? this.setAttribute('scroll-offset', Number(value)) : this.removeAttribute('scroll-offset');
    }
  }, {
    key: 'metaClick',
    get: function get$$1() {
      return !this.hasAttribute('disable-metaclick');
    },
    set: function set$$1(value) {
      value ? this.setAttribute('disable-metaclick', value) : this.removeAttribute('disable-metaclick');
    }
  }]);
  return MediumZoom;
}(_CustomElement);

window.customElements.define('medium-zoom', MediumZoom);

return MediumZoom;

})));
