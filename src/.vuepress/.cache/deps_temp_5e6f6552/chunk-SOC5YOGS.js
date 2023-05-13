import {
  Bh,
  Ch,
  Eh,
  Oh,
  Ye,
  _h,
  et,
  po,
  rt,
  yh
} from "./chunk-MBTD2RCT.js";

// node_modules/.pnpm/mermaid@10.1.0/node_modules/mermaid/dist/utils-8ea37061.js
var gi = {};
Object.defineProperty(gi, "__esModule", { value: true });
var Gi = gi.sanitizeUrl = void 0;
var $e = /^([^\w]*)(javascript|data|vbscript)/im;
var Me = /&#(\w+)(^\w|;)?/g;
var Ie = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
var Pe = /^([^:]+):/gm;
var je = [".", "/"];
function Le(i8) {
  return je.indexOf(i8[0]) > -1;
}
function De(i8) {
  return i8.replace(Me, function(e, n) {
    return String.fromCharCode(n);
  });
}
function Re(i8) {
  var e = De(i8 || "").replace(Ie, "").trim();
  if (!e)
    return "about:blank";
  if (Le(e))
    return e;
  var n = e.match(Pe);
  if (!n)
    return e;
  var t = n[0];
  return $e.test(t) ? "about:blank" : e;
}
Gi = gi.sanitizeUrl = Re;
var Vo = Math.abs;
var Xo = Math.atan2;
var Jo = Math.cos;
var Zo = Math.max;
var Qo = Math.min;
var is = Math.sin;
var es = Math.sqrt;
var Ni = 1e-12;
var mi = Math.PI;
var Oi = mi / 2;
var ns = 2 * mi;
function ts(i8) {
  return i8 > 1 ? 0 : i8 < -1 ? mi : Math.acos(i8);
}
function rs(i8) {
  return i8 >= 1 ? Oi : i8 <= -1 ? -Oi : Math.asin(i8);
}
function qi(i8) {
  this._context = i8;
}
qi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i8, e) {
    switch (i8 = +i8, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(i8, e) : this._context.moveTo(i8, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(i8, e);
        break;
    }
  }
};
function ze(i8) {
  return new qi(i8);
}
var Ki = class {
  constructor(e, n) {
    this._context = e, this._x = n;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, n) {
    switch (e = +e, n = +n, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, n) : this._context.moveTo(e, n);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, n, e, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, e, this._y0, e, n);
        break;
      }
    }
    this._x0 = e, this._y0 = n;
  }
};
function Be(i8) {
  return new Ki(i8, true);
}
function Ye2(i8) {
  return new Ki(i8, false);
}
function E() {
}
function K(i8, e, n) {
  i8._context.bezierCurveTo(
    (2 * i8._x0 + i8._x1) / 3,
    (2 * i8._y0 + i8._y1) / 3,
    (i8._x0 + 2 * i8._x1) / 3,
    (i8._y0 + 2 * i8._y1) / 3,
    (i8._x0 + 4 * i8._x1 + e) / 6,
    (i8._y0 + 4 * i8._y1 + n) / 6
  );
}
function ri(i8) {
  this._context = i8;
}
ri.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        K(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i8, e) {
    switch (i8 = +i8, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(i8, e) : this._context.moveTo(i8, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        K(this, i8, e);
        break;
    }
    this._x0 = this._x1, this._x1 = i8, this._y0 = this._y1, this._y1 = e;
  }
};
function We(i8) {
  return new ri(i8);
}
function Vi(i8) {
  this._context = i8;
}
Vi.prototype = {
  areaStart: E,
  areaEnd: E,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(i8, e) {
    switch (i8 = +i8, e = +e, this._point) {
      case 0:
        this._point = 1, this._x2 = i8, this._y2 = e;
        break;
      case 1:
        this._point = 2, this._x3 = i8, this._y3 = e;
        break;
      case 2:
        this._point = 3, this._x4 = i8, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + i8) / 6, (this._y0 + 4 * this._y1 + e) / 6);
        break;
      default:
        K(this, i8, e);
        break;
    }
    this._x0 = this._x1, this._x1 = i8, this._y0 = this._y1, this._y1 = e;
  }
};
function Ue(i8) {
  return new Vi(i8);
}
function Xi(i8) {
  this._context = i8;
}
Xi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i8, e) {
    switch (i8 = +i8, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + i8) / 6, t = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
        break;
      case 3:
        this._point = 4;
      default:
        K(this, i8, e);
        break;
    }
    this._x0 = this._x1, this._x1 = i8, this._y0 = this._y1, this._y1 = e;
  }
};
function He(i8) {
  return new Xi(i8);
}
function Ji(i8, e) {
  this._basis = new ri(i8), this._beta = e;
}
Ji.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var i8 = this._x, e = this._y, n = i8.length - 1;
    if (n > 0)
      for (var t = i8[0], r = e[0], s = i8[n] - t, o = e[n] - r, l = -1, a; ++l <= n; )
        a = l / n, this._basis.point(
          this._beta * i8[l] + (1 - this._beta) * (t + a * s),
          this._beta * e[l] + (1 - this._beta) * (r + a * o)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(i8, e) {
    this._x.push(+i8), this._y.push(+e);
  }
};
var Ge = function i(e) {
  function n(t) {
    return e === 1 ? new ri(t) : new Ji(t, e);
  }
  return n.beta = function(t) {
    return i(+t);
  }, n;
}(0.85);
function V(i8, e, n) {
  i8._context.bezierCurveTo(
    i8._x1 + i8._k * (i8._x2 - i8._x0),
    i8._y1 + i8._k * (i8._y2 - i8._y0),
    i8._x2 + i8._k * (i8._x1 - e),
    i8._y2 + i8._k * (i8._y1 - n),
    i8._x2,
    i8._y2
  );
}
function yi(i8, e) {
  this._context = i8, this._k = (1 - e) / 6;
}
yi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        V(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i8, e) {
    switch (i8 = +i8, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(i8, e) : this._context.moveTo(i8, e);
        break;
      case 1:
        this._point = 2, this._x1 = i8, this._y1 = e;
        break;
      case 2:
        this._point = 3;
      default:
        V(this, i8, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = i8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var qe = function i2(e) {
  function n(t) {
    return new yi(t, e);
  }
  return n.tension = function(t) {
    return i2(+t);
  }, n;
}(0);
function vi(i8, e) {
  this._context = i8, this._k = (1 - e) / 6;
}
vi.prototype = {
  areaStart: E,
  areaEnd: E,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(i8, e) {
    switch (i8 = +i8, e = +e, this._point) {
      case 0:
        this._point = 1, this._x3 = i8, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = i8, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = i8, this._y5 = e;
        break;
      default:
        V(this, i8, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = i8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Ke = function i3(e) {
  function n(t) {
    return new vi(t, e);
  }
  return n.tension = function(t) {
    return i3(+t);
  }, n;
}(0);
function bi(i8, e) {
  this._context = i8, this._k = (1 - e) / 6;
}
bi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i8, e) {
    switch (i8 = +i8, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        V(this, i8, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = i8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Ve = function i4(e) {
  function n(t) {
    return new bi(t, e);
  }
  return n.tension = function(t) {
    return i4(+t);
  }, n;
}(0);
function wi(i8, e, n) {
  var t = i8._x1, r = i8._y1, s = i8._x2, o = i8._y2;
  if (i8._l01_a > Ni) {
    var l = 2 * i8._l01_2a + 3 * i8._l01_a * i8._l12_a + i8._l12_2a, a = 3 * i8._l01_a * (i8._l01_a + i8._l12_a);
    t = (t * l - i8._x0 * i8._l12_2a + i8._x2 * i8._l01_2a) / a, r = (r * l - i8._y0 * i8._l12_2a + i8._y2 * i8._l01_2a) / a;
  }
  if (i8._l23_a > Ni) {
    var h = 2 * i8._l23_2a + 3 * i8._l23_a * i8._l12_a + i8._l12_2a, f = 3 * i8._l23_a * (i8._l23_a + i8._l12_a);
    s = (s * h + i8._x1 * i8._l23_2a - e * i8._l12_2a) / f, o = (o * h + i8._y1 * i8._l23_2a - n * i8._l12_2a) / f;
  }
  i8._context.bezierCurveTo(t, r, s, o, i8._x2, i8._y2);
}
function Zi(i8, e) {
  this._context = i8, this._alpha = e;
}
Zi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i8, e) {
    if (i8 = +i8, e = +e, this._point) {
      var n = this._x2 - i8, t = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + t * t, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(i8, e) : this._context.moveTo(i8, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        wi(this, i8, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = i8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Xe = function i5(e) {
  function n(t) {
    return e ? new Zi(t, e) : new yi(t, 0);
  }
  return n.alpha = function(t) {
    return i5(+t);
  }, n;
}(0.5);
function Qi(i8, e) {
  this._context = i8, this._alpha = e;
}
Qi.prototype = {
  areaStart: E,
  areaEnd: E,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(i8, e) {
    if (i8 = +i8, e = +e, this._point) {
      var n = this._x2 - i8, t = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + t * t, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = i8, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = i8, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = i8, this._y5 = e;
        break;
      default:
        wi(this, i8, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = i8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Je = function i6(e) {
  function n(t) {
    return e ? new Qi(t, e) : new vi(t, 0);
  }
  return n.alpha = function(t) {
    return i6(+t);
  }, n;
}(0.5);
function ie(i8, e) {
  this._context = i8, this._alpha = e;
}
ie.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i8, e) {
    if (i8 = +i8, e = +e, this._point) {
      var n = this._x2 - i8, t = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + t * t, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        wi(this, i8, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = i8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Ze = function i7(e) {
  function n(t) {
    return e ? new ie(t, e) : new bi(t, 0);
  }
  return n.alpha = function(t) {
    return i7(+t);
  }, n;
}(0.5);
function ee(i8) {
  this._context = i8;
}
ee.prototype = {
  areaStart: E,
  areaEnd: E,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(i8, e) {
    i8 = +i8, e = +e, this._point ? this._context.lineTo(i8, e) : (this._point = 1, this._context.moveTo(i8, e));
  }
};
function Qe(i8) {
  return new ee(i8);
}
function Fi(i8) {
  return i8 < 0 ? -1 : 1;
}
function $i(i8, e, n) {
  var t = i8._x1 - i8._x0, r = e - i8._x1, s = (i8._y1 - i8._y0) / (t || r < 0 && -0), o = (n - i8._y1) / (r || t < 0 && -0), l = (s * r + o * t) / (t + r);
  return (Fi(s) + Fi(o)) * Math.min(Math.abs(s), Math.abs(o), 0.5 * Math.abs(l)) || 0;
}
function Mi(i8, e) {
  var n = i8._x1 - i8._x0;
  return n ? (3 * (i8._y1 - i8._y0) / n - e) / 2 : e;
}
function ci(i8, e, n) {
  var t = i8._x0, r = i8._y0, s = i8._x1, o = i8._y1, l = (s - t) / 3;
  i8._context.bezierCurveTo(t + l, r + l * e, s - l, o - l * n, s, o);
}
function X(i8) {
  this._context = i8;
}
X.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        ci(this, this._t0, Mi(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i8, e) {
    var n = NaN;
    if (i8 = +i8, e = +e, !(i8 === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(i8, e) : this._context.moveTo(i8, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, ci(this, Mi(this, n = $i(this, i8, e)), n);
          break;
        default:
          ci(this, this._t0, n = $i(this, i8, e));
          break;
      }
      this._x0 = this._x1, this._x1 = i8, this._y0 = this._y1, this._y1 = e, this._t0 = n;
    }
  }
};
function ne(i8) {
  this._context = new te(i8);
}
(ne.prototype = Object.create(X.prototype)).point = function(i8, e) {
  X.prototype.point.call(this, e, i8);
};
function te(i8) {
  this._context = i8;
}
te.prototype = {
  moveTo: function(i8, e) {
    this._context.moveTo(e, i8);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(i8, e) {
    this._context.lineTo(e, i8);
  },
  bezierCurveTo: function(i8, e, n, t, r, s) {
    this._context.bezierCurveTo(e, i8, t, n, s, r);
  }
};
function en(i8) {
  return new X(i8);
}
function nn(i8) {
  return new ne(i8);
}
function re(i8) {
  this._context = i8;
}
re.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var i8 = this._x, e = this._y, n = i8.length;
    if (n)
      if (this._line ? this._context.lineTo(i8[0], e[0]) : this._context.moveTo(i8[0], e[0]), n === 2)
        this._context.lineTo(i8[1], e[1]);
      else
        for (var t = Ii(i8), r = Ii(e), s = 0, o = 1; o < n; ++s, ++o)
          this._context.bezierCurveTo(t[0][s], r[0][s], t[1][s], r[1][s], i8[o], e[o]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(i8, e) {
    this._x.push(+i8), this._y.push(+e);
  }
};
function Ii(i8) {
  var e, n = i8.length - 1, t, r = new Array(n), s = new Array(n), o = new Array(n);
  for (r[0] = 0, s[0] = 2, o[0] = i8[0] + 2 * i8[1], e = 1; e < n - 1; ++e)
    r[e] = 1, s[e] = 4, o[e] = 4 * i8[e] + 2 * i8[e + 1];
  for (r[n - 1] = 2, s[n - 1] = 7, o[n - 1] = 8 * i8[n - 1] + i8[n], e = 1; e < n; ++e)
    t = r[e] / s[e - 1], s[e] -= t, o[e] -= t * o[e - 1];
  for (r[n - 1] = o[n - 1] / s[n - 1], e = n - 2; e >= 0; --e)
    r[e] = (o[e] - r[e + 1]) / s[e];
  for (s[n - 1] = (i8[n] + r[n - 1]) / 2, e = 0; e < n - 1; ++e)
    s[e] = 2 * i8[e + 1] - r[e + 1];
  return [r, s];
}
function tn(i8) {
  return new re(i8);
}
function oi(i8, e) {
  this._context = i8, this._t = e;
}
oi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(i8, e) {
    switch (i8 = +i8, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(i8, e) : this._context.moveTo(i8, e);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(i8, e);
        else {
          var n = this._x * (1 - this._t) + i8 * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, e);
        }
        break;
      }
    }
    this._x = i8, this._y = e;
  }
};
function rn(i8) {
  return new oi(i8, 0.5);
}
function on(i8) {
  return new oi(i8, 0);
}
function sn(i8) {
  return new oi(i8, 1);
}
function oe(i8) {
  return typeof i8 > "u" || i8 === null;
}
function ln(i8) {
  return typeof i8 == "object" && i8 !== null;
}
function an(i8) {
  return Array.isArray(i8) ? i8 : oe(i8) ? [] : [i8];
}
function cn(i8, e) {
  var n, t, r, s;
  if (e)
    for (s = Object.keys(e), n = 0, t = s.length; n < t; n += 1)
      r = s[n], i8[r] = e[r];
  return i8;
}
function hn(i8, e) {
  var n = "", t;
  for (t = 0; t < e; t += 1)
    n += i8;
  return n;
}
function un(i8) {
  return i8 === 0 && Number.NEGATIVE_INFINITY === 1 / i8;
}
var fn = oe;
var _n = ln;
var pn = an;
var dn = hn;
var xn = un;
var gn = cn;
var w = {
  isNothing: fn,
  isObject: _n,
  toArray: pn,
  repeat: dn,
  isNegativeZero: xn,
  extend: gn
};
function se(i8, e) {
  var n = "", t = i8.reason || "(unknown reason)";
  return i8.mark ? (i8.mark.name && (n += 'in "' + i8.mark.name + '" '), n += "(" + (i8.mark.line + 1) + ":" + (i8.mark.column + 1) + ")", !e && i8.mark.snippet && (n += `

` + i8.mark.snippet), t + " " + n) : t;
}
function B(i8, e) {
  Error.call(this), this.name = "YAMLException", this.reason = i8, this.mark = e, this.message = se(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
B.prototype = Object.create(Error.prototype);
B.prototype.constructor = B;
B.prototype.toString = function(e) {
  return this.name + ": " + se(this, e);
};
var T = B;
function hi(i8, e, n, t, r) {
  var s = "", o = "", l = Math.floor(r / 2) - 1;
  return t - e > l && (s = " ... ", e = t - l + s.length), n - t > l && (o = " ...", n = t + l - o.length), {
    str: s + i8.slice(e, n).replace(/\t/g, "→") + o,
    pos: t - e + s.length
    // relative position
  };
}
function ui(i8, e) {
  return w.repeat(" ", e - i8.length) + i8;
}
function mn(i8, e) {
  if (e = Object.create(e || null), !i8.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var n = /\r?\n|\r|\0/g, t = [0], r = [], s, o = -1; s = n.exec(i8.buffer); )
    r.push(s.index), t.push(s.index + s[0].length), i8.position <= s.index && o < 0 && (o = t.length - 2);
  o < 0 && (o = t.length - 1);
  var l = "", a, h, f = Math.min(i8.line + e.linesAfter, r.length).toString().length, c = e.maxLength - (e.indent + f + 3);
  for (a = 1; a <= e.linesBefore && !(o - a < 0); a++)
    h = hi(
      i8.buffer,
      t[o - a],
      r[o - a],
      i8.position - (t[o] - t[o - a]),
      c
    ), l = w.repeat(" ", e.indent) + ui((i8.line - a + 1).toString(), f) + " | " + h.str + `
` + l;
  for (h = hi(i8.buffer, t[o], r[o], i8.position, c), l += w.repeat(" ", e.indent) + ui((i8.line + 1).toString(), f) + " | " + h.str + `
`, l += w.repeat("-", e.indent + f + 3 + h.pos) + `^
`, a = 1; a <= e.linesAfter && !(o + a >= r.length); a++)
    h = hi(
      i8.buffer,
      t[o + a],
      r[o + a],
      i8.position - (t[o] - t[o + a]),
      c
    ), l += w.repeat(" ", e.indent) + ui((i8.line + a + 1).toString(), f) + " | " + h.str + `
`;
  return l.replace(/\n$/, "");
}
var yn = mn;
var vn = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var bn = [
  "scalar",
  "sequence",
  "mapping"
];
function wn(i8) {
  var e = {};
  return i8 !== null && Object.keys(i8).forEach(function(n) {
    i8[n].forEach(function(t) {
      e[String(t)] = n;
    });
  }), e;
}
function Cn(i8, e) {
  if (e = e || {}, Object.keys(e).forEach(function(n) {
    if (vn.indexOf(n) === -1)
      throw new T('Unknown option "' + n + '" is met in definition of "' + i8 + '" YAML type.');
  }), this.options = e, this.tag = i8, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return true;
  }, this.construct = e.construct || function(n) {
    return n;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || false, this.styleAliases = wn(e.styleAliases || null), bn.indexOf(this.kind) === -1)
    throw new T('Unknown kind "' + this.kind + '" is specified for "' + i8 + '" YAML type.');
}
var b = Cn;
function Pi(i8, e) {
  var n = [];
  return i8[e].forEach(function(t) {
    var r = n.length;
    n.forEach(function(s, o) {
      s.tag === t.tag && s.kind === t.kind && s.multi === t.multi && (r = o);
    }), n[r] = t;
  }), n;
}
function An() {
  var i8 = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, n;
  function t(r) {
    r.multi ? (i8.multi[r.kind].push(r), i8.multi.fallback.push(r)) : i8[r.kind][r.tag] = i8.fallback[r.tag] = r;
  }
  for (e = 0, n = arguments.length; e < n; e += 1)
    arguments[e].forEach(t);
  return i8;
}
function di(i8) {
  return this.extend(i8);
}
di.prototype.extend = function(e) {
  var n = [], t = [];
  if (e instanceof b)
    t.push(e);
  else if (Array.isArray(e))
    t = t.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (n = n.concat(e.implicit)), e.explicit && (t = t.concat(e.explicit));
  else
    throw new T("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  n.forEach(function(s) {
    if (!(s instanceof b))
      throw new T("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (s.loadKind && s.loadKind !== "scalar")
      throw new T("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (s.multi)
      throw new T("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), t.forEach(function(s) {
    if (!(s instanceof b))
      throw new T("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var r = Object.create(di.prototype);
  return r.implicit = (this.implicit || []).concat(n), r.explicit = (this.explicit || []).concat(t), r.compiledImplicit = Pi(r, "implicit"), r.compiledExplicit = Pi(r, "explicit"), r.compiledTypeMap = An(r.compiledImplicit, r.compiledExplicit), r;
};
var Sn = di;
var Tn = new b("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(i8) {
    return i8 !== null ? i8 : "";
  }
});
var kn = new b("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(i8) {
    return i8 !== null ? i8 : [];
  }
});
var En = new b("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(i8) {
    return i8 !== null ? i8 : {};
  }
});
var le = new Sn({
  explicit: [
    Tn,
    kn,
    En
  ]
});
function Nn(i8) {
  if (i8 === null)
    return true;
  var e = i8.length;
  return e === 1 && i8 === "~" || e === 4 && (i8 === "null" || i8 === "Null" || i8 === "NULL");
}
function On() {
  return null;
}
function Fn(i8) {
  return i8 === null;
}
var $n = new b("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Nn,
  construct: On,
  predicate: Fn,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function Mn(i8) {
  if (i8 === null)
    return false;
  var e = i8.length;
  return e === 4 && (i8 === "true" || i8 === "True" || i8 === "TRUE") || e === 5 && (i8 === "false" || i8 === "False" || i8 === "FALSE");
}
function In(i8) {
  return i8 === "true" || i8 === "True" || i8 === "TRUE";
}
function Pn(i8) {
  return Object.prototype.toString.call(i8) === "[object Boolean]";
}
var jn = new b("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Mn,
  construct: In,
  predicate: Pn,
  represent: {
    lowercase: function(i8) {
      return i8 ? "true" : "false";
    },
    uppercase: function(i8) {
      return i8 ? "TRUE" : "FALSE";
    },
    camelcase: function(i8) {
      return i8 ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function Ln(i8) {
  return 48 <= i8 && i8 <= 57 || 65 <= i8 && i8 <= 70 || 97 <= i8 && i8 <= 102;
}
function Dn(i8) {
  return 48 <= i8 && i8 <= 55;
}
function Rn(i8) {
  return 48 <= i8 && i8 <= 57;
}
function zn(i8) {
  if (i8 === null)
    return false;
  var e = i8.length, n = 0, t = false, r;
  if (!e)
    return false;
  if (r = i8[n], (r === "-" || r === "+") && (r = i8[++n]), r === "0") {
    if (n + 1 === e)
      return true;
    if (r = i8[++n], r === "b") {
      for (n++; n < e; n++)
        if (r = i8[n], r !== "_") {
          if (r !== "0" && r !== "1")
            return false;
          t = true;
        }
      return t && r !== "_";
    }
    if (r === "x") {
      for (n++; n < e; n++)
        if (r = i8[n], r !== "_") {
          if (!Ln(i8.charCodeAt(n)))
            return false;
          t = true;
        }
      return t && r !== "_";
    }
    if (r === "o") {
      for (n++; n < e; n++)
        if (r = i8[n], r !== "_") {
          if (!Dn(i8.charCodeAt(n)))
            return false;
          t = true;
        }
      return t && r !== "_";
    }
  }
  if (r === "_")
    return false;
  for (; n < e; n++)
    if (r = i8[n], r !== "_") {
      if (!Rn(i8.charCodeAt(n)))
        return false;
      t = true;
    }
  return !(!t || r === "_");
}
function Bn(i8) {
  var e = i8, n = 1, t;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), t = e[0], (t === "-" || t === "+") && (t === "-" && (n = -1), e = e.slice(1), t = e[0]), e === "0")
    return 0;
  if (t === "0") {
    if (e[1] === "b")
      return n * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return n * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return n * parseInt(e.slice(2), 8);
  }
  return n * parseInt(e, 10);
}
function Yn(i8) {
  return Object.prototype.toString.call(i8) === "[object Number]" && i8 % 1 === 0 && !w.isNegativeZero(i8);
}
var Wn = new b("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: zn,
  construct: Bn,
  predicate: Yn,
  represent: {
    binary: function(i8) {
      return i8 >= 0 ? "0b" + i8.toString(2) : "-0b" + i8.toString(2).slice(1);
    },
    octal: function(i8) {
      return i8 >= 0 ? "0o" + i8.toString(8) : "-0o" + i8.toString(8).slice(1);
    },
    decimal: function(i8) {
      return i8.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(i8) {
      return i8 >= 0 ? "0x" + i8.toString(16).toUpperCase() : "-0x" + i8.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var Un = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Hn(i8) {
  return !(i8 === null || !Un.test(i8) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  i8[i8.length - 1] === "_");
}
function Gn(i8) {
  var e, n;
  return e = i8.replace(/_/g, "").toLowerCase(), n = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? n === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : n * parseFloat(e, 10);
}
var qn = /^[-+]?[0-9]+e/;
function Kn(i8, e) {
  var n;
  if (isNaN(i8))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === i8)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === i8)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (w.isNegativeZero(i8))
    return "-0.0";
  return n = i8.toString(10), qn.test(n) ? n.replace("e", ".e") : n;
}
function Vn(i8) {
  return Object.prototype.toString.call(i8) === "[object Number]" && (i8 % 1 !== 0 || w.isNegativeZero(i8));
}
var Xn = new b("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Hn,
  construct: Gn,
  predicate: Vn,
  represent: Kn,
  defaultStyle: "lowercase"
});
var Jn = le.extend({
  implicit: [
    $n,
    jn,
    Wn,
    Xn
  ]
});
var Zn = Jn;
var ae = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var ce = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function Qn(i8) {
  return i8 === null ? false : ae.exec(i8) !== null || ce.exec(i8) !== null;
}
function it(i8) {
  var e, n, t, r, s, o, l, a = 0, h = null, f, c, p;
  if (e = ae.exec(i8), e === null && (e = ce.exec(i8)), e === null)
    throw new Error("Date resolve error");
  if (n = +e[1], t = +e[2] - 1, r = +e[3], !e[4])
    return new Date(Date.UTC(n, t, r));
  if (s = +e[4], o = +e[5], l = +e[6], e[7]) {
    for (a = e[7].slice(0, 3); a.length < 3; )
      a += "0";
    a = +a;
  }
  return e[9] && (f = +e[10], c = +(e[11] || 0), h = (f * 60 + c) * 6e4, e[9] === "-" && (h = -h)), p = new Date(Date.UTC(n, t, r, s, o, l, a)), h && p.setTime(p.getTime() - h), p;
}
function et2(i8) {
  return i8.toISOString();
}
var nt = new b("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Qn,
  construct: it,
  instanceOf: Date,
  represent: et2
});
function tt(i8) {
  return i8 === "<<" || i8 === null;
}
var rt2 = new b("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: tt
});
var Ci = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function ot(i8) {
  if (i8 === null)
    return false;
  var e, n, t = 0, r = i8.length, s = Ci;
  for (n = 0; n < r; n++)
    if (e = s.indexOf(i8.charAt(n)), !(e > 64)) {
      if (e < 0)
        return false;
      t += 6;
    }
  return t % 8 === 0;
}
function st(i8) {
  var e, n, t = i8.replace(/[\r\n=]/g, ""), r = t.length, s = Ci, o = 0, l = [];
  for (e = 0; e < r; e++)
    e % 4 === 0 && e && (l.push(o >> 16 & 255), l.push(o >> 8 & 255), l.push(o & 255)), o = o << 6 | s.indexOf(t.charAt(e));
  return n = r % 4 * 6, n === 0 ? (l.push(o >> 16 & 255), l.push(o >> 8 & 255), l.push(o & 255)) : n === 18 ? (l.push(o >> 10 & 255), l.push(o >> 2 & 255)) : n === 12 && l.push(o >> 4 & 255), new Uint8Array(l);
}
function lt(i8) {
  var e = "", n = 0, t, r, s = i8.length, o = Ci;
  for (t = 0; t < s; t++)
    t % 3 === 0 && t && (e += o[n >> 18 & 63], e += o[n >> 12 & 63], e += o[n >> 6 & 63], e += o[n & 63]), n = (n << 8) + i8[t];
  return r = s % 3, r === 0 ? (e += o[n >> 18 & 63], e += o[n >> 12 & 63], e += o[n >> 6 & 63], e += o[n & 63]) : r === 2 ? (e += o[n >> 10 & 63], e += o[n >> 4 & 63], e += o[n << 2 & 63], e += o[64]) : r === 1 && (e += o[n >> 2 & 63], e += o[n << 4 & 63], e += o[64], e += o[64]), e;
}
function at(i8) {
  return Object.prototype.toString.call(i8) === "[object Uint8Array]";
}
var ct = new b("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: ot,
  construct: st,
  predicate: at,
  represent: lt
});
var ht = Object.prototype.hasOwnProperty;
var ut = Object.prototype.toString;
function ft(i8) {
  if (i8 === null)
    return true;
  var e = [], n, t, r, s, o, l = i8;
  for (n = 0, t = l.length; n < t; n += 1) {
    if (r = l[n], o = false, ut.call(r) !== "[object Object]")
      return false;
    for (s in r)
      if (ht.call(r, s))
        if (!o)
          o = true;
        else
          return false;
    if (!o)
      return false;
    if (e.indexOf(s) === -1)
      e.push(s);
    else
      return false;
  }
  return true;
}
function _t(i8) {
  return i8 !== null ? i8 : [];
}
var pt = new b("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: ft,
  construct: _t
});
var dt = Object.prototype.toString;
function xt(i8) {
  if (i8 === null)
    return true;
  var e, n, t, r, s, o = i8;
  for (s = new Array(o.length), e = 0, n = o.length; e < n; e += 1) {
    if (t = o[e], dt.call(t) !== "[object Object]" || (r = Object.keys(t), r.length !== 1))
      return false;
    s[e] = [r[0], t[r[0]]];
  }
  return true;
}
function gt(i8) {
  if (i8 === null)
    return [];
  var e, n, t, r, s, o = i8;
  for (s = new Array(o.length), e = 0, n = o.length; e < n; e += 1)
    t = o[e], r = Object.keys(t), s[e] = [r[0], t[r[0]]];
  return s;
}
var mt = new b("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: xt,
  construct: gt
});
var yt = Object.prototype.hasOwnProperty;
function vt(i8) {
  if (i8 === null)
    return true;
  var e, n = i8;
  for (e in n)
    if (yt.call(n, e) && n[e] !== null)
      return false;
  return true;
}
function bt(i8) {
  return i8 !== null ? i8 : {};
}
var wt = new b("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: vt,
  construct: bt
});
var Ct = Zn.extend({
  implicit: [
    nt,
    rt2
  ],
  explicit: [
    ct,
    pt,
    mt,
    wt
  ]
});
var N = Object.prototype.hasOwnProperty;
var J = 1;
var he = 2;
var ue = 3;
var Z = 4;
var fi = 1;
var At = 2;
var ji = 3;
var St = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var Tt = /[\x85\u2028\u2029]/;
var kt = /[,\[\]\{\}]/;
var fe = /^(?:!|!!|![a-z\-]+!)$/i;
var _e = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Li(i8) {
  return Object.prototype.toString.call(i8);
}
function S(i8) {
  return i8 === 10 || i8 === 13;
}
function F(i8) {
  return i8 === 9 || i8 === 32;
}
function A(i8) {
  return i8 === 9 || i8 === 32 || i8 === 10 || i8 === 13;
}
function P(i8) {
  return i8 === 44 || i8 === 91 || i8 === 93 || i8 === 123 || i8 === 125;
}
function Et(i8) {
  var e;
  return 48 <= i8 && i8 <= 57 ? i8 - 48 : (e = i8 | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function Nt(i8) {
  return i8 === 120 ? 2 : i8 === 117 ? 4 : i8 === 85 ? 8 : 0;
}
function Ot(i8) {
  return 48 <= i8 && i8 <= 57 ? i8 - 48 : -1;
}
function Di(i8) {
  return i8 === 48 ? "\0" : i8 === 97 ? "\x07" : i8 === 98 ? "\b" : i8 === 116 || i8 === 9 ? "	" : i8 === 110 ? `
` : i8 === 118 ? "\v" : i8 === 102 ? "\f" : i8 === 114 ? "\r" : i8 === 101 ? "\x1B" : i8 === 32 ? " " : i8 === 34 ? '"' : i8 === 47 ? "/" : i8 === 92 ? "\\" : i8 === 78 ? "" : i8 === 95 ? " " : i8 === 76 ? "\u2028" : i8 === 80 ? "\u2029" : "";
}
function Ft(i8) {
  return i8 <= 65535 ? String.fromCharCode(i8) : String.fromCharCode(
    (i8 - 65536 >> 10) + 55296,
    (i8 - 65536 & 1023) + 56320
  );
}
var pe = new Array(256);
var de = new Array(256);
for (I = 0; I < 256; I++)
  pe[I] = Di(I) ? 1 : 0, de[I] = Di(I);
var I;
function $t(i8, e) {
  this.input = i8, this.filename = e.filename || null, this.schema = e.schema || Ct, this.onWarning = e.onWarning || null, this.legacy = e.legacy || false, this.json = e.json || false, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = i8.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function xe(i8, e) {
  var n = {
    name: i8.filename,
    buffer: i8.input.slice(0, -1),
    // omit trailing \0
    position: i8.position,
    line: i8.line,
    column: i8.position - i8.lineStart
  };
  return n.snippet = yn(n), new T(e, n);
}
function _(i8, e) {
  throw xe(i8, e);
}
function Q(i8, e) {
  i8.onWarning && i8.onWarning.call(null, xe(i8, e));
}
var Ri = {
  YAML: function(e, n, t) {
    var r, s, o;
    e.version !== null && _(e, "duplication of %YAML directive"), t.length !== 1 && _(e, "YAML directive accepts exactly one argument"), r = /^([0-9]+)\.([0-9]+)$/.exec(t[0]), r === null && _(e, "ill-formed argument of the YAML directive"), s = parseInt(r[1], 10), o = parseInt(r[2], 10), s !== 1 && _(e, "unacceptable YAML version of the document"), e.version = t[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Q(e, "unsupported YAML version of the document");
  },
  TAG: function(e, n, t) {
    var r, s;
    t.length !== 2 && _(e, "TAG directive accepts exactly two arguments"), r = t[0], s = t[1], fe.test(r) || _(e, "ill-formed tag handle (first argument) of the TAG directive"), N.call(e.tagMap, r) && _(e, 'there is a previously declared suffix for "' + r + '" tag handle'), _e.test(s) || _(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      _(e, "tag prefix is malformed: " + s);
    }
    e.tagMap[r] = s;
  }
};
function k(i8, e, n, t) {
  var r, s, o, l;
  if (e < n) {
    if (l = i8.input.slice(e, n), t)
      for (r = 0, s = l.length; r < s; r += 1)
        o = l.charCodeAt(r), o === 9 || 32 <= o && o <= 1114111 || _(i8, "expected valid JSON character");
    else
      St.test(l) && _(i8, "the stream contains non-printable characters");
    i8.result += l;
  }
}
function zi(i8, e, n, t) {
  var r, s, o, l;
  for (w.isObject(n) || _(i8, "cannot merge mappings; the provided source object is unacceptable"), r = Object.keys(n), o = 0, l = r.length; o < l; o += 1)
    s = r[o], N.call(e, s) || (e[s] = n[s], t[s] = true);
}
function j(i8, e, n, t, r, s, o, l, a) {
  var h, f;
  if (Array.isArray(r))
    for (r = Array.prototype.slice.call(r), h = 0, f = r.length; h < f; h += 1)
      Array.isArray(r[h]) && _(i8, "nested arrays are not supported inside keys"), typeof r == "object" && Li(r[h]) === "[object Object]" && (r[h] = "[object Object]");
  if (typeof r == "object" && Li(r) === "[object Object]" && (r = "[object Object]"), r = String(r), e === null && (e = {}), t === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (h = 0, f = s.length; h < f; h += 1)
        zi(i8, e, s[h], n);
    else
      zi(i8, e, s, n);
  else
    !i8.json && !N.call(n, r) && N.call(e, r) && (i8.line = o || i8.line, i8.lineStart = l || i8.lineStart, i8.position = a || i8.position, _(i8, "duplicated mapping key")), r === "__proto__" ? Object.defineProperty(e, r, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: s
    }) : e[r] = s, delete n[r];
  return e;
}
function Ai(i8) {
  var e;
  e = i8.input.charCodeAt(i8.position), e === 10 ? i8.position++ : e === 13 ? (i8.position++, i8.input.charCodeAt(i8.position) === 10 && i8.position++) : _(i8, "a line break is expected"), i8.line += 1, i8.lineStart = i8.position, i8.firstTabInLine = -1;
}
function v(i8, e, n) {
  for (var t = 0, r = i8.input.charCodeAt(i8.position); r !== 0; ) {
    for (; F(r); )
      r === 9 && i8.firstTabInLine === -1 && (i8.firstTabInLine = i8.position), r = i8.input.charCodeAt(++i8.position);
    if (e && r === 35)
      do
        r = i8.input.charCodeAt(++i8.position);
      while (r !== 10 && r !== 13 && r !== 0);
    if (S(r))
      for (Ai(i8), r = i8.input.charCodeAt(i8.position), t++, i8.lineIndent = 0; r === 32; )
        i8.lineIndent++, r = i8.input.charCodeAt(++i8.position);
    else
      break;
  }
  return n !== -1 && t !== 0 && i8.lineIndent < n && Q(i8, "deficient indentation"), t;
}
function si(i8) {
  var e = i8.position, n;
  return n = i8.input.charCodeAt(e), !!((n === 45 || n === 46) && n === i8.input.charCodeAt(e + 1) && n === i8.input.charCodeAt(e + 2) && (e += 3, n = i8.input.charCodeAt(e), n === 0 || A(n)));
}
function Si(i8, e) {
  e === 1 ? i8.result += " " : e > 1 && (i8.result += w.repeat(`
`, e - 1));
}
function Mt(i8, e, n) {
  var t, r, s, o, l, a, h, f, c = i8.kind, p = i8.result, u;
  if (u = i8.input.charCodeAt(i8.position), A(u) || P(u) || u === 35 || u === 38 || u === 42 || u === 33 || u === 124 || u === 62 || u === 39 || u === 34 || u === 37 || u === 64 || u === 96 || (u === 63 || u === 45) && (r = i8.input.charCodeAt(i8.position + 1), A(r) || n && P(r)))
    return false;
  for (i8.kind = "scalar", i8.result = "", s = o = i8.position, l = false; u !== 0; ) {
    if (u === 58) {
      if (r = i8.input.charCodeAt(i8.position + 1), A(r) || n && P(r))
        break;
    } else if (u === 35) {
      if (t = i8.input.charCodeAt(i8.position - 1), A(t))
        break;
    } else {
      if (i8.position === i8.lineStart && si(i8) || n && P(u))
        break;
      if (S(u))
        if (a = i8.line, h = i8.lineStart, f = i8.lineIndent, v(i8, false, -1), i8.lineIndent >= e) {
          l = true, u = i8.input.charCodeAt(i8.position);
          continue;
        } else {
          i8.position = o, i8.line = a, i8.lineStart = h, i8.lineIndent = f;
          break;
        }
    }
    l && (k(i8, s, o, false), Si(i8, i8.line - a), s = o = i8.position, l = false), F(u) || (o = i8.position + 1), u = i8.input.charCodeAt(++i8.position);
  }
  return k(i8, s, o, false), i8.result ? true : (i8.kind = c, i8.result = p, false);
}
function It(i8, e) {
  var n, t, r;
  if (n = i8.input.charCodeAt(i8.position), n !== 39)
    return false;
  for (i8.kind = "scalar", i8.result = "", i8.position++, t = r = i8.position; (n = i8.input.charCodeAt(i8.position)) !== 0; )
    if (n === 39)
      if (k(i8, t, i8.position, true), n = i8.input.charCodeAt(++i8.position), n === 39)
        t = i8.position, i8.position++, r = i8.position;
      else
        return true;
    else
      S(n) ? (k(i8, t, r, true), Si(i8, v(i8, false, e)), t = r = i8.position) : i8.position === i8.lineStart && si(i8) ? _(i8, "unexpected end of the document within a single quoted scalar") : (i8.position++, r = i8.position);
  _(i8, "unexpected end of the stream within a single quoted scalar");
}
function Pt(i8, e) {
  var n, t, r, s, o, l;
  if (l = i8.input.charCodeAt(i8.position), l !== 34)
    return false;
  for (i8.kind = "scalar", i8.result = "", i8.position++, n = t = i8.position; (l = i8.input.charCodeAt(i8.position)) !== 0; ) {
    if (l === 34)
      return k(i8, n, i8.position, true), i8.position++, true;
    if (l === 92) {
      if (k(i8, n, i8.position, true), l = i8.input.charCodeAt(++i8.position), S(l))
        v(i8, false, e);
      else if (l < 256 && pe[l])
        i8.result += de[l], i8.position++;
      else if ((o = Nt(l)) > 0) {
        for (r = o, s = 0; r > 0; r--)
          l = i8.input.charCodeAt(++i8.position), (o = Et(l)) >= 0 ? s = (s << 4) + o : _(i8, "expected hexadecimal character");
        i8.result += Ft(s), i8.position++;
      } else
        _(i8, "unknown escape sequence");
      n = t = i8.position;
    } else
      S(l) ? (k(i8, n, t, true), Si(i8, v(i8, false, e)), n = t = i8.position) : i8.position === i8.lineStart && si(i8) ? _(i8, "unexpected end of the document within a double quoted scalar") : (i8.position++, t = i8.position);
  }
  _(i8, "unexpected end of the stream within a double quoted scalar");
}
function jt(i8, e) {
  var n = true, t, r, s, o = i8.tag, l, a = i8.anchor, h, f, c, p, u, g = /* @__PURE__ */ Object.create(null), y, m, C, d;
  if (d = i8.input.charCodeAt(i8.position), d === 91)
    f = 93, u = false, l = [];
  else if (d === 123)
    f = 125, u = true, l = {};
  else
    return false;
  for (i8.anchor !== null && (i8.anchorMap[i8.anchor] = l), d = i8.input.charCodeAt(++i8.position); d !== 0; ) {
    if (v(i8, true, e), d = i8.input.charCodeAt(i8.position), d === f)
      return i8.position++, i8.tag = o, i8.anchor = a, i8.kind = u ? "mapping" : "sequence", i8.result = l, true;
    n ? d === 44 && _(i8, "expected the node content, but found ','") : _(i8, "missed comma between flow collection entries"), m = y = C = null, c = p = false, d === 63 && (h = i8.input.charCodeAt(i8.position + 1), A(h) && (c = p = true, i8.position++, v(i8, true, e))), t = i8.line, r = i8.lineStart, s = i8.position, L(i8, e, J, false, true), m = i8.tag, y = i8.result, v(i8, true, e), d = i8.input.charCodeAt(i8.position), (p || i8.line === t) && d === 58 && (c = true, d = i8.input.charCodeAt(++i8.position), v(i8, true, e), L(i8, e, J, false, true), C = i8.result), u ? j(i8, l, g, m, y, C, t, r, s) : c ? l.push(j(i8, null, g, m, y, C, t, r, s)) : l.push(y), v(i8, true, e), d = i8.input.charCodeAt(i8.position), d === 44 ? (n = true, d = i8.input.charCodeAt(++i8.position)) : n = false;
  }
  _(i8, "unexpected end of the stream within a flow collection");
}
function Lt(i8, e) {
  var n, t, r = fi, s = false, o = false, l = e, a = 0, h = false, f, c;
  if (c = i8.input.charCodeAt(i8.position), c === 124)
    t = false;
  else if (c === 62)
    t = true;
  else
    return false;
  for (i8.kind = "scalar", i8.result = ""; c !== 0; )
    if (c = i8.input.charCodeAt(++i8.position), c === 43 || c === 45)
      fi === r ? r = c === 43 ? ji : At : _(i8, "repeat of a chomping mode identifier");
    else if ((f = Ot(c)) >= 0)
      f === 0 ? _(i8, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? _(i8, "repeat of an indentation width identifier") : (l = e + f - 1, o = true);
    else
      break;
  if (F(c)) {
    do
      c = i8.input.charCodeAt(++i8.position);
    while (F(c));
    if (c === 35)
      do
        c = i8.input.charCodeAt(++i8.position);
      while (!S(c) && c !== 0);
  }
  for (; c !== 0; ) {
    for (Ai(i8), i8.lineIndent = 0, c = i8.input.charCodeAt(i8.position); (!o || i8.lineIndent < l) && c === 32; )
      i8.lineIndent++, c = i8.input.charCodeAt(++i8.position);
    if (!o && i8.lineIndent > l && (l = i8.lineIndent), S(c)) {
      a++;
      continue;
    }
    if (i8.lineIndent < l) {
      r === ji ? i8.result += w.repeat(`
`, s ? 1 + a : a) : r === fi && s && (i8.result += `
`);
      break;
    }
    for (t ? F(c) ? (h = true, i8.result += w.repeat(`
`, s ? 1 + a : a)) : h ? (h = false, i8.result += w.repeat(`
`, a + 1)) : a === 0 ? s && (i8.result += " ") : i8.result += w.repeat(`
`, a) : i8.result += w.repeat(`
`, s ? 1 + a : a), s = true, o = true, a = 0, n = i8.position; !S(c) && c !== 0; )
      c = i8.input.charCodeAt(++i8.position);
    k(i8, n, i8.position, false);
  }
  return true;
}
function Bi(i8, e) {
  var n, t = i8.tag, r = i8.anchor, s = [], o, l = false, a;
  if (i8.firstTabInLine !== -1)
    return false;
  for (i8.anchor !== null && (i8.anchorMap[i8.anchor] = s), a = i8.input.charCodeAt(i8.position); a !== 0 && (i8.firstTabInLine !== -1 && (i8.position = i8.firstTabInLine, _(i8, "tab characters must not be used in indentation")), !(a !== 45 || (o = i8.input.charCodeAt(i8.position + 1), !A(o)))); ) {
    if (l = true, i8.position++, v(i8, true, -1) && i8.lineIndent <= e) {
      s.push(null), a = i8.input.charCodeAt(i8.position);
      continue;
    }
    if (n = i8.line, L(i8, e, ue, false, true), s.push(i8.result), v(i8, true, -1), a = i8.input.charCodeAt(i8.position), (i8.line === n || i8.lineIndent > e) && a !== 0)
      _(i8, "bad indentation of a sequence entry");
    else if (i8.lineIndent < e)
      break;
  }
  return l ? (i8.tag = t, i8.anchor = r, i8.kind = "sequence", i8.result = s, true) : false;
}
function Dt(i8, e, n) {
  var t, r, s, o, l, a, h = i8.tag, f = i8.anchor, c = {}, p = /* @__PURE__ */ Object.create(null), u = null, g = null, y = null, m = false, C = false, d;
  if (i8.firstTabInLine !== -1)
    return false;
  for (i8.anchor !== null && (i8.anchorMap[i8.anchor] = c), d = i8.input.charCodeAt(i8.position); d !== 0; ) {
    if (!m && i8.firstTabInLine !== -1 && (i8.position = i8.firstTabInLine, _(i8, "tab characters must not be used in indentation")), t = i8.input.charCodeAt(i8.position + 1), s = i8.line, (d === 63 || d === 58) && A(t))
      d === 63 ? (m && (j(i8, c, p, u, g, null, o, l, a), u = g = y = null), C = true, m = true, r = true) : m ? (m = false, r = true) : _(i8, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), i8.position += 1, d = t;
    else {
      if (o = i8.line, l = i8.lineStart, a = i8.position, !L(i8, n, he, false, true))
        break;
      if (i8.line === s) {
        for (d = i8.input.charCodeAt(i8.position); F(d); )
          d = i8.input.charCodeAt(++i8.position);
        if (d === 58)
          d = i8.input.charCodeAt(++i8.position), A(d) || _(i8, "a whitespace character is expected after the key-value separator within a block mapping"), m && (j(i8, c, p, u, g, null, o, l, a), u = g = y = null), C = true, m = false, r = false, u = i8.tag, g = i8.result;
        else if (C)
          _(i8, "can not read an implicit mapping pair; a colon is missed");
        else
          return i8.tag = h, i8.anchor = f, true;
      } else if (C)
        _(i8, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return i8.tag = h, i8.anchor = f, true;
    }
    if ((i8.line === s || i8.lineIndent > e) && (m && (o = i8.line, l = i8.lineStart, a = i8.position), L(i8, e, Z, true, r) && (m ? g = i8.result : y = i8.result), m || (j(i8, c, p, u, g, y, o, l, a), u = g = y = null), v(i8, true, -1), d = i8.input.charCodeAt(i8.position)), (i8.line === s || i8.lineIndent > e) && d !== 0)
      _(i8, "bad indentation of a mapping entry");
    else if (i8.lineIndent < e)
      break;
  }
  return m && j(i8, c, p, u, g, null, o, l, a), C && (i8.tag = h, i8.anchor = f, i8.kind = "mapping", i8.result = c), C;
}
function Rt(i8) {
  var e, n = false, t = false, r, s, o;
  if (o = i8.input.charCodeAt(i8.position), o !== 33)
    return false;
  if (i8.tag !== null && _(i8, "duplication of a tag property"), o = i8.input.charCodeAt(++i8.position), o === 60 ? (n = true, o = i8.input.charCodeAt(++i8.position)) : o === 33 ? (t = true, r = "!!", o = i8.input.charCodeAt(++i8.position)) : r = "!", e = i8.position, n) {
    do
      o = i8.input.charCodeAt(++i8.position);
    while (o !== 0 && o !== 62);
    i8.position < i8.length ? (s = i8.input.slice(e, i8.position), o = i8.input.charCodeAt(++i8.position)) : _(i8, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !A(o); )
      o === 33 && (t ? _(i8, "tag suffix cannot contain exclamation marks") : (r = i8.input.slice(e - 1, i8.position + 1), fe.test(r) || _(i8, "named tag handle cannot contain such characters"), t = true, e = i8.position + 1)), o = i8.input.charCodeAt(++i8.position);
    s = i8.input.slice(e, i8.position), kt.test(s) && _(i8, "tag suffix cannot contain flow indicator characters");
  }
  s && !_e.test(s) && _(i8, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    _(i8, "tag name is malformed: " + s);
  }
  return n ? i8.tag = s : N.call(i8.tagMap, r) ? i8.tag = i8.tagMap[r] + s : r === "!" ? i8.tag = "!" + s : r === "!!" ? i8.tag = "tag:yaml.org,2002:" + s : _(i8, 'undeclared tag handle "' + r + '"'), true;
}
function zt(i8) {
  var e, n;
  if (n = i8.input.charCodeAt(i8.position), n !== 38)
    return false;
  for (i8.anchor !== null && _(i8, "duplication of an anchor property"), n = i8.input.charCodeAt(++i8.position), e = i8.position; n !== 0 && !A(n) && !P(n); )
    n = i8.input.charCodeAt(++i8.position);
  return i8.position === e && _(i8, "name of an anchor node must contain at least one character"), i8.anchor = i8.input.slice(e, i8.position), true;
}
function Bt(i8) {
  var e, n, t;
  if (t = i8.input.charCodeAt(i8.position), t !== 42)
    return false;
  for (t = i8.input.charCodeAt(++i8.position), e = i8.position; t !== 0 && !A(t) && !P(t); )
    t = i8.input.charCodeAt(++i8.position);
  return i8.position === e && _(i8, "name of an alias node must contain at least one character"), n = i8.input.slice(e, i8.position), N.call(i8.anchorMap, n) || _(i8, 'unidentified alias "' + n + '"'), i8.result = i8.anchorMap[n], v(i8, true, -1), true;
}
function L(i8, e, n, t, r) {
  var s, o, l, a = 1, h = false, f = false, c, p, u, g, y, m;
  if (i8.listener !== null && i8.listener("open", i8), i8.tag = null, i8.anchor = null, i8.kind = null, i8.result = null, s = o = l = Z === n || ue === n, t && v(i8, true, -1) && (h = true, i8.lineIndent > e ? a = 1 : i8.lineIndent === e ? a = 0 : i8.lineIndent < e && (a = -1)), a === 1)
    for (; Rt(i8) || zt(i8); )
      v(i8, true, -1) ? (h = true, l = s, i8.lineIndent > e ? a = 1 : i8.lineIndent === e ? a = 0 : i8.lineIndent < e && (a = -1)) : l = false;
  if (l && (l = h || r), (a === 1 || Z === n) && (J === n || he === n ? y = e : y = e + 1, m = i8.position - i8.lineStart, a === 1 ? l && (Bi(i8, m) || Dt(i8, m, y)) || jt(i8, y) ? f = true : (o && Lt(i8, y) || It(i8, y) || Pt(i8, y) ? f = true : Bt(i8) ? (f = true, (i8.tag !== null || i8.anchor !== null) && _(i8, "alias node should not have any properties")) : Mt(i8, y, J === n) && (f = true, i8.tag === null && (i8.tag = "?")), i8.anchor !== null && (i8.anchorMap[i8.anchor] = i8.result)) : a === 0 && (f = l && Bi(i8, m))), i8.tag === null)
    i8.anchor !== null && (i8.anchorMap[i8.anchor] = i8.result);
  else if (i8.tag === "?") {
    for (i8.result !== null && i8.kind !== "scalar" && _(i8, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + i8.kind + '"'), c = 0, p = i8.implicitTypes.length; c < p; c += 1)
      if (g = i8.implicitTypes[c], g.resolve(i8.result)) {
        i8.result = g.construct(i8.result), i8.tag = g.tag, i8.anchor !== null && (i8.anchorMap[i8.anchor] = i8.result);
        break;
      }
  } else if (i8.tag !== "!") {
    if (N.call(i8.typeMap[i8.kind || "fallback"], i8.tag))
      g = i8.typeMap[i8.kind || "fallback"][i8.tag];
    else
      for (g = null, u = i8.typeMap.multi[i8.kind || "fallback"], c = 0, p = u.length; c < p; c += 1)
        if (i8.tag.slice(0, u[c].tag.length) === u[c].tag) {
          g = u[c];
          break;
        }
    g || _(i8, "unknown tag !<" + i8.tag + ">"), i8.result !== null && g.kind !== i8.kind && _(i8, "unacceptable node kind for !<" + i8.tag + '> tag; it should be "' + g.kind + '", not "' + i8.kind + '"'), g.resolve(i8.result, i8.tag) ? (i8.result = g.construct(i8.result, i8.tag), i8.anchor !== null && (i8.anchorMap[i8.anchor] = i8.result)) : _(i8, "cannot resolve a node with !<" + i8.tag + "> explicit tag");
  }
  return i8.listener !== null && i8.listener("close", i8), i8.tag !== null || i8.anchor !== null || f;
}
function Yt(i8) {
  var e = i8.position, n, t, r, s = false, o;
  for (i8.version = null, i8.checkLineBreaks = i8.legacy, i8.tagMap = /* @__PURE__ */ Object.create(null), i8.anchorMap = /* @__PURE__ */ Object.create(null); (o = i8.input.charCodeAt(i8.position)) !== 0 && (v(i8, true, -1), o = i8.input.charCodeAt(i8.position), !(i8.lineIndent > 0 || o !== 37)); ) {
    for (s = true, o = i8.input.charCodeAt(++i8.position), n = i8.position; o !== 0 && !A(o); )
      o = i8.input.charCodeAt(++i8.position);
    for (t = i8.input.slice(n, i8.position), r = [], t.length < 1 && _(i8, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; F(o); )
        o = i8.input.charCodeAt(++i8.position);
      if (o === 35) {
        do
          o = i8.input.charCodeAt(++i8.position);
        while (o !== 0 && !S(o));
        break;
      }
      if (S(o))
        break;
      for (n = i8.position; o !== 0 && !A(o); )
        o = i8.input.charCodeAt(++i8.position);
      r.push(i8.input.slice(n, i8.position));
    }
    o !== 0 && Ai(i8), N.call(Ri, t) ? Ri[t](i8, t, r) : Q(i8, 'unknown document directive "' + t + '"');
  }
  if (v(i8, true, -1), i8.lineIndent === 0 && i8.input.charCodeAt(i8.position) === 45 && i8.input.charCodeAt(i8.position + 1) === 45 && i8.input.charCodeAt(i8.position + 2) === 45 ? (i8.position += 3, v(i8, true, -1)) : s && _(i8, "directives end mark is expected"), L(i8, i8.lineIndent - 1, Z, false, true), v(i8, true, -1), i8.checkLineBreaks && Tt.test(i8.input.slice(e, i8.position)) && Q(i8, "non-ASCII line breaks are interpreted as content"), i8.documents.push(i8.result), i8.position === i8.lineStart && si(i8)) {
    i8.input.charCodeAt(i8.position) === 46 && (i8.position += 3, v(i8, true, -1));
    return;
  }
  if (i8.position < i8.length - 1)
    _(i8, "end of the stream or a document separator is expected");
  else
    return;
}
function ge(i8, e) {
  i8 = String(i8), e = e || {}, i8.length !== 0 && (i8.charCodeAt(i8.length - 1) !== 10 && i8.charCodeAt(i8.length - 1) !== 13 && (i8 += `
`), i8.charCodeAt(0) === 65279 && (i8 = i8.slice(1)));
  var n = new $t(i8, e), t = i8.indexOf("\0");
  for (t !== -1 && (n.position = t, _(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32; )
    n.lineIndent += 1, n.position += 1;
  for (; n.position < n.length - 1; )
    Yt(n);
  return n.documents;
}
function Wt(i8, e, n) {
  e !== null && typeof e == "object" && typeof n > "u" && (n = e, e = null);
  var t = ge(i8, n);
  if (typeof e != "function")
    return t;
  for (var r = 0, s = t.length; r < s; r += 1)
    e(t[r]);
}
function Ut(i8, e) {
  var n = ge(i8, e);
  if (n.length !== 0) {
    if (n.length === 1)
      return n[0];
    throw new T("expected a single document in the stream, but found more");
  }
}
var Ht = Wt;
var Gt = Ut;
var qt = {
  loadAll: Ht,
  load: Gt
};
var Kt = le;
var Vt = qt.load;
var me = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
function os(i8, e) {
  var t, r;
  const n = i8.match(me);
  if (n) {
    const s = Vt(n[1], {
      // To keep things simple, only allow strings, arrays, and plain objects.
      // https://www.yaml.org/spec/1.2/spec.html#id2802346
      schema: Kt
    });
    return s != null && s.title && ((t = e.setDiagramTitle) == null || t.call(e, s.title)), s != null && s.displayMode && ((r = e.setDisplayMode) == null || r.call(e, s.displayMode)), i8.slice(n[0].length);
  } else
    return i8;
}
var Xt = function(i8, e) {
  for (let n of e)
    i8.attr(n[0], n[1]);
};
var Jt = function(i8, e, n) {
  let t = /* @__PURE__ */ new Map();
  return n ? (t.set("width", "100%"), t.set("style", `max-width: ${e}px;`)) : (t.set("height", i8), t.set("width", e)), t;
};
var Zt = function(i8, e, n, t) {
  const r = Jt(e, n, t);
  Xt(i8, r);
};
var Qt = function(i8, e, n, t) {
  const r = e.node().getBBox(), s = r.width, o = r.height;
  et.info(`SVG bounds: ${s}x${o}`, r);
  let l = 0, a = 0;
  et.info(`Graph bounds: ${l}x${a}`, i8), l = s + n * 2, a = o + n * 2, et.info(`Calculated bounds: ${l}x${a}`), Zt(e, a, l, t);
  const h = `${r.x - n} ${r.y - n} ${r.width + 2 * n} ${r.height + 2 * n}`;
  e.attr("viewBox", h);
};
var G = {};
var ir = (i8, e, n) => {
  let t = "";
  return i8 in G && G[i8] ? t = G[i8](n) : et.warn(`No theme found for ${i8}`), ` & {
    font-family: ${n.fontFamily};
    font-size: ${n.fontSize};
    fill: ${n.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${n.errorBkgColor};
  }
  & .error-text {
    fill: ${n.errorTextColor};
    stroke: ${n.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${n.lineColor};
    stroke: ${n.lineColor};
  }
  & .marker.cross {
    stroke: ${n.lineColor};
  }

  & svg {
    font-family: ${n.fontFamily};
    font-size: ${n.fontSize};
  }

  ${t}

  ${e}
`;
};
var er = (i8, e) => {
  G[i8] = e;
};
var ss = ir;
var O = {};
var nr = function(i8, e, n, t) {
  et.debug("parseDirective is being called", e, n, t);
  try {
    if (e !== void 0)
      switch (e = e.trim(), n) {
        case "open_directive":
          O = {};
          break;
        case "type_directive":
          if (!O)
            throw new Error("currentDirective is undefined");
          O.type = e.toLowerCase();
          break;
        case "arg_directive":
          if (!O)
            throw new Error("currentDirective is undefined");
          O.args = JSON.parse(e);
          break;
        case "close_directive":
          tr(i8, O, t), O = void 0;
          break;
      }
  } catch (r) {
    et.error(
      `Error while rendering sequenceDiagram directive: ${e} jison context: ${n}`
    ), et.error(r.message);
  }
};
var tr = function(i8, e, n) {
  switch (et.info(`Directive type=${e.type} with args:`, e.args), e.type) {
    case "init":
    case "initialize": {
      ["config"].forEach((t) => {
        e.args[t] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), e.args[n] = e.args[t], delete e.args[t]);
      }), et.info("sanitize in handleDirective", e.args), W(e.args), et.info("sanitize in handleDirective (done)", e.args), Eh(e.args);
      break;
    }
    case "wrap":
    case "nowrap":
      i8 && i8.setWrap && i8.setWrap(e.type === "wrap");
      break;
    case "themeCss":
      et.warn("themeCss encountered");
      break;
    default:
      et.warn(
        `Unhandled directive: source: '%%{${e.type}: ${JSON.stringify(
          e.args ? e.args : {}
        )}}%%`,
        e
      );
      break;
  }
};
var rr = et;
var or = Ch;
var ye = po;
var sr = (i8) => Ye(i8, ye());
var lr = Qt;
var ar = () => Oh;
var cr = (i8, e, n, t) => nr(i8, e, n, t);
var ii = {};
var hr = (i8, e, n) => {
  if (ii[i8])
    throw new Error(`Diagram ${i8} already registered.`);
  ii[i8] = e, n && ve(i8, n), er(i8, e.styles), e.injectUtils && e.injectUtils(
    rr,
    or,
    ye,
    sr,
    lr,
    ar(),
    cr
  );
};
var ur = (i8) => {
  if (i8 in ii)
    return ii[i8];
  throw new Error(`Diagram ${i8} not found.`);
};
var fr = class extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
};
var _r = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var pr = /\s*%%.*\n/gm;
var D = {};
var dr = function(i8, e) {
  i8 = i8.replace(me, "").replace(_r, "").replace(pr, `
`);
  for (const [n, { detector: t }] of Object.entries(D))
    if (t(i8, e))
      return n;
  throw new fr(
    `No diagram type detected matching given configuration for text: ${i8}`
  );
};
var ls = (...i8) => {
  for (const { id: e, detector: n, loader: t } of i8)
    ve(e, n, t);
};
var as = async () => {
  et.debug("Loading registered diagrams");
  const e = (await Promise.allSettled(
    Object.entries(D).map(async ([n, { detector: t, loader: r }]) => {
      if (r)
        try {
          ur(n);
        } catch {
          try {
            const { diagram: o, id: l } = await r();
            hr(l, o, t);
          } catch (o) {
            throw et.error(`Failed to load external diagram with key ${n}. Removing from detectors.`), delete D[n], o;
          }
        }
    })
  )).filter((n) => n.status === "rejected");
  if (e.length > 0) {
    et.error(`Failed to load ${e.length} external diagrams`);
    for (const n of e)
      et.error(n);
    throw new Error(`Failed to load ${e.length} external diagrams`);
  }
};
var ve = (i8, e, n) => {
  D[i8] ? et.error(`Detector with key ${i8} already exists`) : D[i8] = { detector: e, loader: n }, et.debug(`Detector with key ${i8} added${n ? " with loader" : ""}`);
};
var cs = (i8) => D[i8].loader;
var xr = typeof global == "object" && global && global.Object === Object && global;
var gr = xr;
var mr = typeof self == "object" && self && self.Object === Object && self;
var yr = gr || mr || Function("return this")();
var Ti = yr;
var vr = Ti.Symbol;
var ei = vr;
var be = Object.prototype;
var br = be.hasOwnProperty;
var wr = be.toString;
var z = ei ? ei.toStringTag : void 0;
function Cr(i8) {
  var e = br.call(i8, z), n = i8[z];
  try {
    i8[z] = void 0;
    var t = true;
  } catch {
  }
  var r = wr.call(i8);
  return t && (e ? i8[z] = n : delete i8[z]), r;
}
var Ar = Object.prototype;
var Sr = Ar.toString;
function Tr(i8) {
  return Sr.call(i8);
}
var kr = "[object Null]";
var Er = "[object Undefined]";
var Yi = ei ? ei.toStringTag : void 0;
function Nr(i8) {
  return i8 == null ? i8 === void 0 ? Er : kr : Yi && Yi in Object(i8) ? Cr(i8) : Tr(i8);
}
function we(i8) {
  var e = typeof i8;
  return i8 != null && (e == "object" || e == "function");
}
var Or = "[object AsyncFunction]";
var Fr = "[object Function]";
var $r = "[object GeneratorFunction]";
var Mr = "[object Proxy]";
function Ir(i8) {
  if (!we(i8))
    return false;
  var e = Nr(i8);
  return e == Fr || e == $r || e == Or || e == Mr;
}
var Pr = Ti["__core-js_shared__"];
var _i = Pr;
var Wi = function() {
  var i8 = /[^.]+$/.exec(_i && _i.keys && _i.keys.IE_PROTO || "");
  return i8 ? "Symbol(src)_1." + i8 : "";
}();
function jr(i8) {
  return !!Wi && Wi in i8;
}
var Lr = Function.prototype;
var Dr = Lr.toString;
function Rr(i8) {
  if (i8 != null) {
    try {
      return Dr.call(i8);
    } catch {
    }
    try {
      return i8 + "";
    } catch {
    }
  }
  return "";
}
var zr = /[\\^$.*+?()[\]{}|]/g;
var Br = /^\[object .+?Constructor\]$/;
var Yr = Function.prototype;
var Wr = Object.prototype;
var Ur = Yr.toString;
var Hr = Wr.hasOwnProperty;
var Gr = RegExp(
  "^" + Ur.call(Hr).replace(zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qr(i8) {
  if (!we(i8) || jr(i8))
    return false;
  var e = Ir(i8) ? Gr : Br;
  return e.test(Rr(i8));
}
function Kr(i8, e) {
  return i8 == null ? void 0 : i8[e];
}
function Ce(i8, e) {
  var n = Kr(i8, e);
  return qr(n) ? n : void 0;
}
var Vr = Ce(Object, "create");
var Y = Vr;
function Xr() {
  this.__data__ = Y ? Y(null) : {}, this.size = 0;
}
function Jr(i8) {
  var e = this.has(i8) && delete this.__data__[i8];
  return this.size -= e ? 1 : 0, e;
}
var Zr = "__lodash_hash_undefined__";
var Qr = Object.prototype;
var io = Qr.hasOwnProperty;
function eo(i8) {
  var e = this.__data__;
  if (Y) {
    var n = e[i8];
    return n === Zr ? void 0 : n;
  }
  return io.call(e, i8) ? e[i8] : void 0;
}
var no = Object.prototype;
var to = no.hasOwnProperty;
function ro(i8) {
  var e = this.__data__;
  return Y ? e[i8] !== void 0 : to.call(e, i8);
}
var oo = "__lodash_hash_undefined__";
function so(i8, e) {
  var n = this.__data__;
  return this.size += this.has(i8) ? 0 : 1, n[i8] = Y && e === void 0 ? oo : e, this;
}
function $(i8) {
  var e = -1, n = i8 == null ? 0 : i8.length;
  for (this.clear(); ++e < n; ) {
    var t = i8[e];
    this.set(t[0], t[1]);
  }
}
$.prototype.clear = Xr;
$.prototype.delete = Jr;
$.prototype.get = eo;
$.prototype.has = ro;
$.prototype.set = so;
function lo() {
  this.__data__ = [], this.size = 0;
}
function ao(i8, e) {
  return i8 === e || i8 !== i8 && e !== e;
}
function li(i8, e) {
  for (var n = i8.length; n--; )
    if (ao(i8[n][0], e))
      return n;
  return -1;
}
var co = Array.prototype;
var ho = co.splice;
function uo(i8) {
  var e = this.__data__, n = li(e, i8);
  if (n < 0)
    return false;
  var t = e.length - 1;
  return n == t ? e.pop() : ho.call(e, n, 1), --this.size, true;
}
function fo(i8) {
  var e = this.__data__, n = li(e, i8);
  return n < 0 ? void 0 : e[n][1];
}
function _o(i8) {
  return li(this.__data__, i8) > -1;
}
function po2(i8, e) {
  var n = this.__data__, t = li(n, i8);
  return t < 0 ? (++this.size, n.push([i8, e])) : n[t][1] = e, this;
}
function R(i8) {
  var e = -1, n = i8 == null ? 0 : i8.length;
  for (this.clear(); ++e < n; ) {
    var t = i8[e];
    this.set(t[0], t[1]);
  }
}
R.prototype.clear = lo;
R.prototype.delete = uo;
R.prototype.get = fo;
R.prototype.has = _o;
R.prototype.set = po2;
var xo = Ce(Ti, "Map");
var go = xo;
function mo() {
  this.size = 0, this.__data__ = {
    hash: new $(),
    map: new (go || R)(),
    string: new $()
  };
}
function yo(i8) {
  var e = typeof i8;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? i8 !== "__proto__" : i8 === null;
}
function ai(i8, e) {
  var n = i8.__data__;
  return yo(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function vo(i8) {
  var e = ai(this, i8).delete(i8);
  return this.size -= e ? 1 : 0, e;
}
function bo(i8) {
  return ai(this, i8).get(i8);
}
function wo(i8) {
  return ai(this, i8).has(i8);
}
function Co(i8, e) {
  var n = ai(this, i8), t = n.size;
  return n.set(i8, e), this.size += n.size == t ? 0 : 1, this;
}
function M(i8) {
  var e = -1, n = i8 == null ? 0 : i8.length;
  for (this.clear(); ++e < n; ) {
    var t = i8[e];
    this.set(t[0], t[1]);
  }
}
M.prototype.clear = mo;
M.prototype.delete = vo;
M.prototype.get = bo;
M.prototype.has = wo;
M.prototype.set = Co;
var Ao = "Expected a function";
function U(i8, e) {
  if (typeof i8 != "function" || e != null && typeof e != "function")
    throw new TypeError(Ao);
  var n = function() {
    var t = arguments, r = e ? e.apply(this, t) : t[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var o = i8.apply(this, t);
    return n.cache = s.set(r, o) || s, o;
  };
  return n.cache = new (U.Cache || M)(), n;
}
U.Cache = M;
var So = {
  curveBasis: We,
  curveBasisClosed: Ue,
  curveBasisOpen: He,
  curveBumpX: Be,
  curveBumpY: Ye2,
  curveBundle: Ge,
  curveCardinalClosed: Ke,
  curveCardinalOpen: Ve,
  curveCardinal: qe,
  curveCatmullRomClosed: Je,
  curveCatmullRomOpen: Ze,
  curveCatmullRom: Xe,
  curveLinear: ze,
  curveLinearClosed: Qe,
  curveMonotoneX: en,
  curveMonotoneY: nn,
  curveNatural: tn,
  curveStep: rn,
  curveStepAfter: sn,
  curveStepBefore: on
};
var pi = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var To = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var ko = function(i8, e) {
  const n = Ae(i8, /(?:init\b)|(?:initialize\b)/);
  let t = {};
  if (Array.isArray(n)) {
    const r = n.map((s) => s.args);
    W(r), t = rt(t, [...r]);
  } else
    t = n.args;
  if (t) {
    let r = dr(i8, e);
    ["config"].forEach((s) => {
      t[s] !== void 0 && (r === "flowchart-v2" && (r = "flowchart"), t[r] = t[s], delete t[s]);
    });
  }
  return t;
};
var Ae = function(i8, e = null) {
  try {
    const n = new RegExp(
      `[%]{2}(?![{]${To.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    i8 = i8.trim().replace(n, "").replace(/'/gm, '"'), et.debug(
      `Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${i8}`
    );
    let t;
    const r = [];
    for (; (t = pi.exec(i8)) !== null; )
      if (t.index === pi.lastIndex && pi.lastIndex++, t && !e || e && t[1] && t[1].match(e) || e && t[2] && t[2].match(e)) {
        const s = t[1] ? t[1] : t[2], o = t[3] ? t[3].trim() : t[4] ? JSON.parse(t[4].trim()) : null;
        r.push({ type: s, args: o });
      }
    return r.length === 0 && r.push({ type: i8, args: null }), r.length === 1 ? r[0] : r;
  } catch (n) {
    return et.error(
      `ERROR: ${n.message} - Unable to parse directive
      ${e !== null ? " type:" + e : ""} based on the text:${i8}`
    ), { type: null, args: null };
  }
};
var Eo = function(i8, e) {
  for (const [n, t] of e.entries())
    if (t.match(i8))
      return n;
  return -1;
};
function No(i8, e) {
  if (!i8)
    return e;
  const n = `curve${i8.charAt(0).toUpperCase() + i8.slice(1)}`;
  return So[n] || e;
}
function Oo(i8, e) {
  const n = i8.trim();
  if (n)
    return e.securityLevel !== "loose" ? Gi(n) : n;
}
var Fo = (i8, ...e) => {
  const n = i8.split("."), t = n.length - 1, r = n[t];
  let s = window;
  for (let o = 0; o < t; o++)
    if (s = s[n[o]], !s)
      return;
  s[r](...e);
};
function ni(i8, e) {
  return i8 && e ? Math.sqrt(Math.pow(e.x - i8.x, 2) + Math.pow(e.y - i8.y, 2)) : 0;
}
function $o(i8) {
  let e, n = 0;
  i8.forEach((s) => {
    n += ni(s, e), e = s;
  });
  let t = n / 2, r;
  return e = void 0, i8.forEach((s) => {
    if (e && !r) {
      const o = ni(s, e);
      if (o < t)
        t -= o;
      else {
        const l = t / o;
        l <= 0 && (r = e), l >= 1 && (r = { x: s.x, y: s.y }), l > 0 && l < 1 && (r = {
          x: (1 - l) * e.x + l * s.x,
          y: (1 - l) * e.y + l * s.y
        });
      }
    }
    e = s;
  }), r;
}
function Mo(i8) {
  return i8.length === 1 ? i8[0] : $o(i8);
}
var Io = (i8, e, n) => {
  let t;
  et.info(`our points ${JSON.stringify(e)}`), e[0] !== n && (e = e.reverse());
  let s = 25, o;
  t = void 0, e.forEach((f) => {
    if (t && !o) {
      const c = ni(f, t);
      if (c < s)
        s -= c;
      else {
        const p = s / c;
        p <= 0 && (o = t), p >= 1 && (o = { x: f.x, y: f.y }), p > 0 && p < 1 && (o = {
          x: (1 - p) * t.x + p * f.x,
          y: (1 - p) * t.y + p * f.y
        });
      }
    }
    t = f;
  });
  const l = i8 ? 10 : 5, a = Math.atan2(e[0].y - o.y, e[0].x - o.x), h = { x: 0, y: 0 };
  return h.x = Math.sin(a) * l + (e[0].x + o.x) / 2, h.y = -Math.cos(a) * l + (e[0].y + o.y) / 2, h;
};
function Po(i8, e, n) {
  let t = JSON.parse(JSON.stringify(n)), r;
  et.info("our points", t), e !== "start_left" && e !== "start_right" && (t = t.reverse()), t.forEach((c) => {
    r = c;
  });
  let o = 25 + i8, l;
  r = void 0, t.forEach((c) => {
    if (r && !l) {
      const p = ni(c, r);
      if (p < o)
        o -= p;
      else {
        const u = o / p;
        u <= 0 && (l = r), u >= 1 && (l = { x: c.x, y: c.y }), u > 0 && u < 1 && (l = {
          x: (1 - u) * r.x + u * c.x,
          y: (1 - u) * r.y + u * c.y
        });
      }
    }
    r = c;
  });
  const a = 10 + i8 * 0.5, h = Math.atan2(t[0].y - l.y, t[0].x - l.x), f = { x: 0, y: 0 };
  return f.x = Math.sin(h) * a + (t[0].x + l.x) / 2, f.y = -Math.cos(h) * a + (t[0].y + l.y) / 2, e === "start_left" && (f.x = Math.sin(h + Math.PI) * a + (t[0].x + l.x) / 2, f.y = -Math.cos(h + Math.PI) * a + (t[0].y + l.y) / 2), e === "end_right" && (f.x = Math.sin(h - Math.PI) * a + (t[0].x + l.x) / 2 - 5, f.y = -Math.cos(h - Math.PI) * a + (t[0].y + l.y) / 2 - 5), e === "end_left" && (f.x = Math.sin(h) * a + (t[0].x + l.x) / 2 - 5, f.y = -Math.cos(h) * a + (t[0].y + l.y) / 2 - 5), f;
}
function jo(i8) {
  let e = "", n = "";
  for (const t of i8)
    t !== void 0 && (t.startsWith("color:") || t.startsWith("text-align:") ? n = n + t + ";" : e = e + t + ";");
  return { style: e, labelStyle: n };
}
var Ui = 0;
var Lo = () => (Ui++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Ui);
function Do(i8) {
  let e = "";
  const n = "0123456789abcdef", t = n.length;
  for (let r = 0; r < i8; r++)
    e += n.charAt(Math.floor(Math.random() * t));
  return e;
}
var Ro = (i8) => Do(i8.length);
var zo = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0
  };
};
var Bo = function(i8, e) {
  const n = e.text.replace(_h.lineBreakRegex, " "), [, t] = Ei(e.fontSize), r = i8.append("text");
  r.attr("x", e.x), r.attr("y", e.y), r.style("text-anchor", e.anchor), r.style("font-family", e.fontFamily), r.style("font-size", t), r.style("font-weight", e.fontWeight), r.attr("fill", e.fill), e.class !== void 0 && r.attr("class", e.class);
  const s = r.append("tspan");
  return s.attr("x", e.x + e.textMargin * 2), s.attr("fill", e.fill), s.text(n), r;
};
var Yo = U(
  (i8, e, n) => {
    if (!i8 || (n = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      n
    ), _h.lineBreakRegex.test(i8)))
      return i8;
    const t = i8.split(" "), r = [];
    let s = "";
    return t.forEach((o, l) => {
      const a = ti(`${o} `, n), h = ti(s, n);
      if (a > e) {
        const { hyphenatedStrings: p, remainingWord: u } = Wo(o, e, "-", n);
        r.push(s, ...p), s = u;
      } else
        h + a >= e ? (r.push(s), s = o) : s = [s, o].filter(Boolean).join(" ");
      l + 1 === t.length && r.push(s);
    }), r.filter((o) => o !== "").join(n.joinWith);
  },
  (i8, e, n) => `${i8}${e}${n.fontSize}${n.fontWeight}${n.fontFamily}${n.joinWith}`
);
var Wo = U(
  (i8, e, n = "-", t) => {
    t = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      t
    );
    const r = [...i8], s = [];
    let o = "";
    return r.forEach((l, a) => {
      const h = `${o}${l}`;
      if (ti(h, t) >= e) {
        const c = a + 1, p = r.length === c, u = `${h}${n}`;
        s.push(p ? h : u), o = "";
      } else
        o = h;
    }), { hyphenatedStrings: s, remainingWord: o };
  },
  (i8, e, n = "-", t) => `${i8}${e}${n}${t.fontSize}${t.fontWeight}${t.fontFamily}`
);
function Uo(i8, e) {
  return e = Object.assign(
    { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 15 },
    e
  ), ki(i8, e).height;
}
function ti(i8, e) {
  return e = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: "Arial" }, e), ki(i8, e).width;
}
var ki = U(
  (i8, e) => {
    e = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: "Arial" }, e);
    const { fontSize: n, fontFamily: t, fontWeight: r } = e;
    if (!i8)
      return { width: 0, height: 0 };
    const [, s] = Ei(n), o = ["sans-serif", t], l = i8.split(_h.lineBreakRegex), a = [], h = yh("body");
    if (!h.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const f = h.append("svg");
    for (const p of o) {
      let u = 0;
      const g = { width: 0, height: 0, lineHeight: 0 };
      for (const y of l) {
        const m = zo();
        m.text = y;
        const C = Bo(f, m).style("font-size", s).style("font-weight", r).style("font-family", p), d = (C._groups || C)[0][0].getBBox();
        if (d.width === 0 && d.height === 0)
          throw new Error("svg element not in render tree");
        g.width = Math.round(Math.max(g.width, d.width)), u = Math.round(d.height), g.height += u, g.lineHeight = Math.round(Math.max(g.lineHeight, u));
      }
      a.push(g);
    }
    f.remove();
    const c = isNaN(a[1].height) || isNaN(a[1].width) || isNaN(a[1].lineHeight) || a[0].height > a[1].height && a[0].width > a[1].width && a[0].lineHeight > a[1].lineHeight ? 0 : 1;
    return a[c];
  },
  (i8, e) => `${i8}${e.fontSize}${e.fontWeight}${e.fontFamily}`
);
var Ho = class {
  constructor(e, n) {
    this.deterministic = e, this.seed = n, this.count = n ? n.length : 0;
  }
  next() {
    return this.deterministic ? this.count++ : Date.now();
  }
};
var H;
var Go = function(i8) {
  return H = H || document.createElement("div"), i8 = escape(i8).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), H.innerHTML = i8, unescape(H.textContent);
};
var W = (i8) => {
  if (et.debug("directiveSanitizer called with", i8), typeof i8 == "object" && (i8.length ? i8.forEach((e) => W(e)) : Object.keys(i8).forEach((e) => {
    et.debug("Checking key", e), e.startsWith("__") && (et.debug("sanitize deleting __ option", e), delete i8[e]), e.includes("proto") && (et.debug("sanitize deleting proto option", e), delete i8[e]), e.includes("constr") && (et.debug("sanitize deleting constr option", e), delete i8[e]), e.includes("themeCSS") && (et.debug("sanitizing themeCss option"), i8[e] = q(i8[e])), e.includes("fontFamily") && (et.debug("sanitizing fontFamily option"), i8[e] = q(i8[e])), e.includes("altFontFamily") && (et.debug("sanitizing altFontFamily option"), i8[e] = q(i8[e])), Bh.includes(e) ? typeof i8[e] == "object" && (et.debug("sanitize deleting object", e), W(i8[e])) : (et.debug("sanitize deleting option", e), delete i8[e]);
  })), i8.themeVariables) {
    const e = Object.keys(i8.themeVariables);
    for (const n of e) {
      const t = i8.themeVariables[n];
      t && t.match && !t.match(/^[\d "#%(),.;A-Za-z]+$/) && (i8.themeVariables[n] = "");
    }
  }
  et.debug("After sanitization", i8);
};
var q = (i8) => {
  let e = 0, n = 0;
  for (const t of i8) {
    if (e < n)
      return "{ /* ERROR: Unbalanced CSS */ }";
    t === "{" ? e++ : t === "}" && n++;
  }
  return e !== n ? "{ /* ERROR: Unbalanced CSS */ }" : i8;
};
function us(i8) {
  return "str" in i8;
}
function fs(i8) {
  return i8 instanceof Error ? i8.message : String(i8);
}
var qo = (i8, e, n, t) => {
  if (!t)
    return;
  const r = i8.node().getBBox();
  i8.append("text").text(t).attr("x", r.x + r.width / 2).attr("y", -n).attr("class", e);
};
var Ei = (i8) => {
  if (typeof i8 == "number")
    return [i8, i8 + "px"];
  const e = parseInt(i8, 10);
  return Number.isNaN(e) ? [void 0, void 0] : i8 === String(e) ? [e, i8 + "px"] : [e, i8];
};
var _s = {
  assignWithDepth: rt,
  wrapLabel: Yo,
  calculateTextHeight: Uo,
  calculateTextWidth: ti,
  calculateTextDimensions: ki,
  detectInit: ko,
  detectDirective: Ae,
  isSubstringInArray: Eo,
  interpolateToCurve: No,
  calcLabelPosition: Mo,
  calcCardinalityPosition: Io,
  calcTerminalLabelPosition: Po,
  formatUrl: Oo,
  getStylesFromArray: jo,
  generateId: Lo,
  random: Ro,
  runFunc: Fo,
  entityDecode: Go,
  initIdGenerator: Ho,
  directiveSanitizer: W,
  sanitizeCss: q,
  insertTitle: qo,
  parseFontSize: Ei
};

export {
  Gi,
  Vo,
  Xo,
  Jo,
  Zo,
  Qo,
  is,
  es,
  Ni,
  mi,
  Oi,
  ns,
  ts,
  rs,
  ze,
  We,
  os,
  Zt,
  Qt,
  ss,
  nr,
  ye,
  lr,
  hr,
  ur,
  fr,
  dr,
  ls,
  as,
  cs,
  gr,
  Ti,
  ei,
  Nr,
  we,
  Ir,
  Rr,
  Ce,
  ao,
  R,
  go,
  M,
  U,
  No,
  jo,
  Lo,
  Ro,
  Yo,
  Uo,
  ti,
  W,
  us,
  fs,
  Ei,
  _s
};
/*! Bundled license information:

mermaid/dist/utils-8ea37061.js:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/
//# sourceMappingURL=chunk-SOC5YOGS.js.map
