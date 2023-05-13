import {
  t
} from "./chunk-TJDTGNKQ.js";
import {
  vs
} from "./chunk-2ICLCNDE.js";
import {
  Gi,
  Zt,
  _s
} from "./chunk-SOC5YOGS.js";
import {
  At,
  Bo,
  Cr,
  Do,
  Fs,
  Gr,
  Ni,
  No,
  Ri,
  Rs,
  So,
  To,
  Xr,
  _h,
  _o,
  bh,
  bo,
  et,
  ko,
  ot,
  pe,
  po,
  xo,
  ye,
  yh
} from "./chunk-MBTD2RCT.js";

// node_modules/.pnpm/mermaid@10.1.0/node_modules/mermaid/dist/ganttDiagram-6b6599ba.js
function Ht(t2, e) {
  return t2 == null || e == null ? NaN : t2 < e ? -1 : t2 > e ? 1 : t2 >= e ? 0 : NaN;
}
function vr(t2, e) {
  return t2 == null || e == null ? NaN : e < t2 ? -1 : e > t2 ? 1 : e >= t2 ? 0 : NaN;
}
function Ae(t2) {
  let e, r, n;
  t2.length !== 2 ? (e = Ht, r = (c, y) => Ht(t2(c), y), n = (c, y) => t2(c) - y) : (e = t2 === Ht || t2 === vr ? t2 : Tr, r = t2, n = t2);
  function i(c, y, f = 0, x = c.length) {
    if (f < x) {
      if (e(y, y) !== 0)
        return x;
      do {
        const p = f + x >>> 1;
        r(c[p], y) < 0 ? f = p + 1 : x = p;
      } while (f < x);
    }
    return f;
  }
  function a(c, y, f = 0, x = c.length) {
    if (f < x) {
      if (e(y, y) !== 0)
        return x;
      do {
        const p = f + x >>> 1;
        r(c[p], y) <= 0 ? f = p + 1 : x = p;
      } while (f < x);
    }
    return f;
  }
  function s(c, y, f = 0, x = c.length) {
    const p = i(c, y, f, x - 1);
    return p > f && n(c[p - 1], y) > -n(c[p], y) ? p - 1 : p;
  }
  return { left: i, center: s, right: a };
}
function Tr() {
  return 0;
}
function xr(t2) {
  return t2 === null ? NaN : +t2;
}
var br = Ae(Ht);
var Mr = br.right;
Ae(xr).center;
var wr = Mr;
var de = Math.sqrt(50);
var ge = Math.sqrt(10);
var ye2 = Math.sqrt(2);
function Dr(t2, e, r) {
  var n, i = -1, a, s, c;
  if (e = +e, t2 = +t2, r = +r, t2 === e && r > 0)
    return [t2];
  if ((n = e < t2) && (a = t2, t2 = e, e = a), (c = kn(t2, e, r)) === 0 || !isFinite(c))
    return [];
  if (c > 0) {
    let y = Math.round(t2 / c), f = Math.round(e / c);
    for (y * c < t2 && ++y, f * c > e && --f, s = new Array(a = f - y + 1); ++i < a; )
      s[i] = (y + i) * c;
  } else {
    c = -c;
    let y = Math.round(t2 * c), f = Math.round(e * c);
    for (y / c < t2 && ++y, f / c > e && --f, s = new Array(a = f - y + 1); ++i < a; )
      s[i] = (y + i) / c;
  }
  return n && s.reverse(), s;
}
function kn(t2, e, r) {
  var n = (e - t2) / Math.max(0, r), i = Math.floor(Math.log(n) / Math.LN10), a = n / Math.pow(10, i);
  return i >= 0 ? (a >= de ? 10 : a >= ge ? 5 : a >= ye2 ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= de ? 10 : a >= ge ? 5 : a >= ye2 ? 2 : 1);
}
function pe2(t2, e, r) {
  var n = Math.abs(e - t2) / Math.max(0, r), i = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)), a = n / i;
  return a >= de ? i *= 10 : a >= ge ? i *= 5 : a >= ye2 && (i *= 2), e < t2 ? -i : i;
}
function Cr2(t2, e) {
  let r;
  if (e === void 0)
    for (const n of t2)
      n != null && (r < n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let i of t2)
      (i = e(i, ++n, t2)) != null && (r < i || r === void 0 && i >= i) && (r = i);
  }
  return r;
}
function Sr(t2, e) {
  let r;
  if (e === void 0)
    for (const n of t2)
      n != null && (r > n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let i of t2)
      (i = e(i, ++n, t2)) != null && (r > i || r === void 0 && i >= i) && (r = i);
  }
  return r;
}
function _r(t2) {
  return t2;
}
var Pt = 1;
var ne = 2;
var ke = 3;
var zt = 4;
var qe = 1e-6;
function Ar(t2) {
  return "translate(" + t2 + ",0)";
}
function Fr(t2) {
  return "translate(0," + t2 + ")";
}
function Yr(t2) {
  return (e) => +t2(e);
}
function Ur(t2, e) {
  return e = Math.max(0, t2.bandwidth() - e * 2) / 2, t2.round() && (e = Math.round(e)), (r) => +t2(r) + e;
}
function Lr() {
  return !this.__axis;
}
function vn(t2, e) {
  var r = [], n = null, i = null, a = 6, s = 6, c = 3, y = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, f = t2 === Pt || t2 === zt ? -1 : 1, x = t2 === zt || t2 === ne ? "x" : "y", p = t2 === Pt || t2 === ke ? Ar : Fr;
  function v(D) {
    var z = n ?? (e.ticks ? e.ticks.apply(e, r) : e.domain()), T = i ?? (e.tickFormat ? e.tickFormat.apply(e, r) : _r), _ = Math.max(a, 0) + c, I = e.range(), W = +I[0] + y, O = +I[I.length - 1] + y, V = (e.bandwidth ? Ur : Yr)(e.copy(), y), P = D.selection ? D.selection() : D, C = P.selectAll(".domain").data([null]), U = P.selectAll(".tick").data(z, e).order(), w = U.exit(), h = U.enter().append("g").attr("class", "tick"), g = U.select("line"), u = U.select("text");
    C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), U = U.merge(h), g = g.merge(h.append("line").attr("stroke", "currentColor").attr(x + "2", f * a)), u = u.merge(h.append("text").attr("fill", "currentColor").attr(x, f * _).attr("dy", t2 === Pt ? "0em" : t2 === ke ? "0.71em" : "0.32em")), D !== P && (C = C.transition(D), U = U.transition(D), g = g.transition(D), u = u.transition(D), w = w.transition(D).attr("opacity", qe).attr("transform", function(l) {
      return isFinite(l = V(l)) ? p(l + y) : this.getAttribute("transform");
    }), h.attr("opacity", qe).attr("transform", function(l) {
      var b = this.parentNode.__axis;
      return p((b && isFinite(b = b(l)) ? b : V(l)) + y);
    })), w.remove(), C.attr("d", t2 === zt || t2 === ne ? s ? "M" + f * s + "," + W + "H" + y + "V" + O + "H" + f * s : "M" + y + "," + W + "V" + O : s ? "M" + W + "," + f * s + "V" + y + "H" + O + "V" + f * s : "M" + W + "," + y + "H" + O), U.attr("opacity", 1).attr("transform", function(l) {
      return p(V(l) + y);
    }), g.attr(x + "2", f * a), u.attr(x, f * _).text(T), P.filter(Lr).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t2 === ne ? "start" : t2 === zt ? "end" : "middle"), P.each(function() {
      this.__axis = V;
    });
  }
  return v.scale = function(D) {
    return arguments.length ? (e = D, v) : e;
  }, v.ticks = function() {
    return r = Array.from(arguments), v;
  }, v.tickArguments = function(D) {
    return arguments.length ? (r = D == null ? [] : Array.from(D), v) : r.slice();
  }, v.tickValues = function(D) {
    return arguments.length ? (n = D == null ? null : Array.from(D), v) : n && n.slice();
  }, v.tickFormat = function(D) {
    return arguments.length ? (i = D, v) : i;
  }, v.tickSize = function(D) {
    return arguments.length ? (a = s = +D, v) : a;
  }, v.tickSizeInner = function(D) {
    return arguments.length ? (a = +D, v) : a;
  }, v.tickSizeOuter = function(D) {
    return arguments.length ? (s = +D, v) : s;
  }, v.tickPadding = function(D) {
    return arguments.length ? (c = +D, v) : c;
  }, v.offset = function(D) {
    return arguments.length ? (y = +D, v) : y;
  }, v;
}
function Er(t2) {
  return vn(Pt, t2);
}
function Ir(t2) {
  return vn(ke, t2);
}
var Nr = Math.PI / 180;
var Wr = 180 / Math.PI;
var Bt = 18;
var Tn = 0.96422;
var xn = 1;
var bn = 0.82521;
var Mn = 4 / 29;
var Tt = 6 / 29;
var wn = 3 * Tt * Tt;
var zr = Tt * Tt * Tt;
function Dn(t2) {
  if (t2 instanceof ot2)
    return new ot2(t2.l, t2.a, t2.b, t2.opacity);
  if (t2 instanceof ut)
    return Cn(t2);
  t2 instanceof ot || (t2 = Fs(t2));
  var e = se(t2.r), r = se(t2.g), n = se(t2.b), i = re((0.2225045 * e + 0.7168786 * r + 0.0606169 * n) / xn), a, s;
  return e === r && r === n ? a = s = i : (a = re((0.4360747 * e + 0.3850649 * r + 0.1430804 * n) / Tn), s = re((0.0139322 * e + 0.0971045 * r + 0.7141733 * n) / bn)), new ot2(116 * i - 16, 500 * (a - i), 200 * (i - s), t2.opacity);
}
function Or(t2, e, r, n) {
  return arguments.length === 1 ? Dn(t2) : new ot2(t2, e, r, n ?? 1);
}
function ot2(t2, e, r, n) {
  this.l = +t2, this.a = +e, this.b = +r, this.opacity = +n;
}
Ri(ot2, Or, Gr(ye, {
  brighter(t2) {
    return new ot2(this.l + Bt * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  darker(t2) {
    return new ot2(this.l - Bt * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t2 = (this.l + 16) / 116, e = isNaN(this.a) ? t2 : t2 + this.a / 500, r = isNaN(this.b) ? t2 : t2 - this.b / 200;
    return e = Tn * ie(e), t2 = xn * ie(t2), r = bn * ie(r), new ot(
      ae(3.1338561 * e - 1.6168667 * t2 - 0.4906146 * r),
      ae(-0.9787684 * e + 1.9161415 * t2 + 0.033454 * r),
      ae(0.0719453 * e - 0.2289914 * t2 + 1.4052427 * r),
      this.opacity
    );
  }
}));
function re(t2) {
  return t2 > zr ? Math.pow(t2, 1 / 3) : t2 / wn + Mn;
}
function ie(t2) {
  return t2 > Tt ? t2 * t2 * t2 : wn * (t2 - Mn);
}
function ae(t2) {
  return 255 * (t2 <= 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 1 / 2.4) - 0.055);
}
function se(t2) {
  return (t2 /= 255) <= 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
}
function Hr(t2) {
  if (t2 instanceof ut)
    return new ut(t2.h, t2.c, t2.l, t2.opacity);
  if (t2 instanceof ot2 || (t2 = Dn(t2)), t2.a === 0 && t2.b === 0)
    return new ut(NaN, 0 < t2.l && t2.l < 100 ? 0 : NaN, t2.l, t2.opacity);
  var e = Math.atan2(t2.b, t2.a) * Wr;
  return new ut(e < 0 ? e + 360 : e, Math.sqrt(t2.a * t2.a + t2.b * t2.b), t2.l, t2.opacity);
}
function ve(t2, e, r, n) {
  return arguments.length === 1 ? Hr(t2) : new ut(t2, e, r, n ?? 1);
}
function ut(t2, e, r, n) {
  this.h = +t2, this.c = +e, this.l = +r, this.opacity = +n;
}
function Cn(t2) {
  if (isNaN(t2.h))
    return new ot2(t2.l, 0, 0, t2.opacity);
  var e = t2.h * Nr;
  return new ot2(t2.l, Math.cos(e) * t2.c, Math.sin(e) * t2.c, t2.opacity);
}
Ri(ut, ve, Gr(ye, {
  brighter(t2) {
    return new ut(this.h, this.c, this.l + Bt * (t2 ?? 1), this.opacity);
  },
  darker(t2) {
    return new ut(this.h, this.c, this.l - Bt * (t2 ?? 1), this.opacity);
  },
  rgb() {
    return Cn(this).rgb();
  }
}));
function Pr(t2, e) {
  e || (e = []);
  var r = t2 ? Math.min(e.length, t2.length) : 0, n = e.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i)
      n[i] = t2[i] * (1 - a) + e[i] * a;
    return n;
  };
}
function Vr(t2) {
  return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
}
function Rr(t2, e) {
  var r = e ? e.length : 0, n = t2 ? Math.min(r, t2.length) : 0, i = new Array(n), a = new Array(r), s;
  for (s = 0; s < n; ++s)
    i[s] = Fe(t2[s], e[s]);
  for (; s < r; ++s)
    a[s] = e[s];
  return function(c) {
    for (s = 0; s < n; ++s)
      a[s] = i[s](c);
    return a;
  };
}
function Br(t2, e) {
  var r = /* @__PURE__ */ new Date();
  return t2 = +t2, e = +e, function(n) {
    return r.setTime(t2 * (1 - n) + e * n), r;
  };
}
function Zr(t2, e) {
  var r = {}, n = {}, i;
  (t2 === null || typeof t2 != "object") && (t2 = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t2 ? r[i] = Fe(t2[i], e[i]) : n[i] = e[i];
  return function(a) {
    for (i in r)
      n[i] = r[i](a);
    return n;
  };
}
function Fe(t2, e) {
  var r = typeof e, n;
  return e == null || r === "boolean" ? Ni(e) : (r === "number" ? At : r === "string" ? (n = pe(e)) ? (e = n, Cr) : Rs : e instanceof pe ? Cr : e instanceof Date ? Br : Vr(e) ? Pr : Array.isArray(e) ? Rr : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Zr : At)(t2, e);
}
function jr(t2, e) {
  return t2 = +t2, e = +e, function(r) {
    return Math.round(t2 * (1 - r) + e * r);
  };
}
function qr(t2) {
  return function(e, r) {
    var n = t2((e = ve(e)).h, (r = ve(r)).h), i = Xr(e.c, r.c), a = Xr(e.l, r.l), s = Xr(e.opacity, r.opacity);
    return function(c) {
      return e.h = n(c), e.c = i(c), e.l = a(c), e.opacity = s(c), e + "";
    };
  };
}
var Xr2 = qr(bh);
function Gr2(t2) {
  return Math.abs(t2 = Math.round(t2)) >= 1e21 ? t2.toLocaleString("en").replace(/,/g, "") : t2.toString(10);
}
function Zt2(t2, e) {
  if ((r = (t2 = e ? t2.toExponential(e - 1) : t2.toExponential()).indexOf("e")) < 0)
    return null;
  var r, n = t2.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +t2.slice(r + 1)
  ];
}
function bt(t2) {
  return t2 = Zt2(Math.abs(t2)), t2 ? t2[1] : NaN;
}
function $r(t2, e) {
  return function(r, n) {
    for (var i = r.length, a = [], s = 0, c = t2[0], y = 0; i > 0 && c > 0 && (y + c + 1 > n && (c = Math.max(1, n - y)), a.push(r.substring(i -= c, i + c)), !((y += c + 1) > n)); )
      c = t2[s = (s + 1) % t2.length];
    return a.reverse().join(e);
  };
}
function Qr(t2) {
  return function(e) {
    return e.replace(/[0-9]/g, function(r) {
      return t2[+r];
    });
  };
}
var Jr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function jt(t2) {
  if (!(e = Jr.exec(t2)))
    throw new Error("invalid format: " + t2);
  var e;
  return new Ye({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
jt.prototype = Ye.prototype;
function Ye(t2) {
  this.fill = t2.fill === void 0 ? " " : t2.fill + "", this.align = t2.align === void 0 ? ">" : t2.align + "", this.sign = t2.sign === void 0 ? "-" : t2.sign + "", this.symbol = t2.symbol === void 0 ? "" : t2.symbol + "", this.zero = !!t2.zero, this.width = t2.width === void 0 ? void 0 : +t2.width, this.comma = !!t2.comma, this.precision = t2.precision === void 0 ? void 0 : +t2.precision, this.trim = !!t2.trim, this.type = t2.type === void 0 ? "" : t2.type + "";
}
Ye.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Kr(t2) {
  t:
    for (var e = t2.length, r = 1, n = -1, i; r < e; ++r)
      switch (t2[r]) {
        case ".":
          n = i = r;
          break;
        case "0":
          n === 0 && (n = r), i = r;
          break;
        default:
          if (!+t2[r])
            break t;
          n > 0 && (n = 0);
          break;
      }
  return n > 0 ? t2.slice(0, n) + t2.slice(i + 1) : t2;
}
var Sn;
function ti(t2, e) {
  var r = Zt2(t2, e);
  if (!r)
    return t2 + "";
  var n = r[0], i = r[1], a = i - (Sn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, s = n.length;
  return a === s ? n : a > s ? n + new Array(a - s + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Zt2(t2, Math.max(0, e + a - 1))[0];
}
function Xe(t2, e) {
  var r = Zt2(t2, e);
  if (!r)
    return t2 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
var Ge = {
  "%": (t2, e) => (t2 * 100).toFixed(e),
  b: (t2) => Math.round(t2).toString(2),
  c: (t2) => t2 + "",
  d: Gr2,
  e: (t2, e) => t2.toExponential(e),
  f: (t2, e) => t2.toFixed(e),
  g: (t2, e) => t2.toPrecision(e),
  o: (t2) => Math.round(t2).toString(8),
  p: (t2, e) => Xe(t2 * 100, e),
  r: Xe,
  s: ti,
  X: (t2) => Math.round(t2).toString(16).toUpperCase(),
  x: (t2) => Math.round(t2).toString(16)
};
function $e(t2) {
  return t2;
}
var Qe = Array.prototype.map;
var Je = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ei(t2) {
  var e = t2.grouping === void 0 || t2.thousands === void 0 ? $e : $r(Qe.call(t2.grouping, Number), t2.thousands + ""), r = t2.currency === void 0 ? "" : t2.currency[0] + "", n = t2.currency === void 0 ? "" : t2.currency[1] + "", i = t2.decimal === void 0 ? "." : t2.decimal + "", a = t2.numerals === void 0 ? $e : Qr(Qe.call(t2.numerals, String)), s = t2.percent === void 0 ? "%" : t2.percent + "", c = t2.minus === void 0 ? "−" : t2.minus + "", y = t2.nan === void 0 ? "NaN" : t2.nan + "";
  function f(p) {
    p = jt(p);
    var v = p.fill, D = p.align, z = p.sign, T = p.symbol, _ = p.zero, I = p.width, W = p.comma, O = p.precision, V = p.trim, P = p.type;
    P === "n" ? (W = true, P = "g") : Ge[P] || (O === void 0 && (O = 12), V = true, P = "g"), (_ || v === "0" && D === "=") && (_ = true, v = "0", D = "=");
    var C = T === "$" ? r : T === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : "", U = T === "$" ? n : /[%p]/.test(P) ? s : "", w = Ge[P], h = /[defgprs%]/.test(P);
    O = O === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, Math.min(21, O)) : Math.max(0, Math.min(20, O));
    function g(u) {
      var l = C, b = U, o, Y, m;
      if (P === "c")
        b = w(u) + b, u = "";
      else {
        u = +u;
        var Z = u < 0 || 1 / u < 0;
        if (u = isNaN(u) ? y : w(Math.abs(u), O), V && (u = Kr(u)), Z && +u == 0 && z !== "+" && (Z = false), l = (Z ? z === "(" ? z : c : z === "-" || z === "(" ? "" : z) + l, b = (P === "s" ? Je[8 + Sn / 3] : "") + b + (Z && z === "(" ? ")" : ""), h) {
          for (o = -1, Y = u.length; ++o < Y; )
            if (m = u.charCodeAt(o), 48 > m || m > 57) {
              b = (m === 46 ? i + u.slice(o + 1) : u.slice(o)) + b, u = u.slice(0, o);
              break;
            }
        }
      }
      W && !_ && (u = e(u, 1 / 0));
      var j = l.length + u.length + b.length, B = j < I ? new Array(I - j + 1).join(v) : "";
      switch (W && _ && (u = e(B + u, B.length ? I - b.length : 1 / 0), B = ""), D) {
        case "<":
          u = l + u + b + B;
          break;
        case "=":
          u = l + B + u + b;
          break;
        case "^":
          u = B.slice(0, j = B.length >> 1) + l + u + b + B.slice(j);
          break;
        default:
          u = B + l + u + b;
          break;
      }
      return a(u);
    }
    return g.toString = function() {
      return p + "";
    }, g;
  }
  function x(p, v) {
    var D = f((p = jt(p), p.type = "f", p)), z = Math.max(-8, Math.min(8, Math.floor(bt(v) / 3))) * 3, T = Math.pow(10, -z), _ = Je[8 + z / 3];
    return function(I) {
      return D(T * I) + _;
    };
  }
  return {
    format: f,
    formatPrefix: x
  };
}
var Ot;
var _n;
var An;
ni({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ni(t2) {
  return Ot = ei(t2), _n = Ot.format, An = Ot.formatPrefix, Ot;
}
function ri(t2) {
  return Math.max(0, -bt(Math.abs(t2)));
}
function ii(t2, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(bt(e) / 3))) * 3 - bt(Math.abs(t2)));
}
function ai(t2, e) {
  return t2 = Math.abs(t2), e = Math.abs(e) - t2, Math.max(0, bt(e) - bt(t2)) + 1;
}
function si(t2) {
  return function() {
    return t2;
  };
}
function oi(t2) {
  return +t2;
}
var Ke = [0, 1];
function kt(t2) {
  return t2;
}
function Te(t2, e) {
  return (e -= t2 = +t2) ? function(r) {
    return (r - t2) / e;
  } : si(isNaN(e) ? NaN : 0.5);
}
function ci(t2, e) {
  var r;
  return t2 > e && (r = t2, t2 = e, e = r), function(n) {
    return Math.max(t2, Math.min(e, n));
  };
}
function ui(t2, e, r) {
  var n = t2[0], i = t2[1], a = e[0], s = e[1];
  return i < n ? (n = Te(i, n), a = r(s, a)) : (n = Te(n, i), a = r(a, s)), function(c) {
    return a(n(c));
  };
}
function li(t2, e, r) {
  var n = Math.min(t2.length, e.length) - 1, i = new Array(n), a = new Array(n), s = -1;
  for (t2[n] < t2[0] && (t2 = t2.slice().reverse(), e = e.slice().reverse()); ++s < n; )
    i[s] = Te(t2[s], t2[s + 1]), a[s] = r(e[s], e[s + 1]);
  return function(c) {
    var y = wr(t2, c, 1, n) - 1;
    return a[y](i[y](c));
  };
}
function Fn(t2, e) {
  return e.domain(t2.domain()).range(t2.range()).interpolate(t2.interpolate()).clamp(t2.clamp()).unknown(t2.unknown());
}
function fi() {
  var t2 = Ke, e = Ke, r = Fe, n, i, a, s = kt, c, y, f;
  function x() {
    var v = Math.min(t2.length, e.length);
    return s !== kt && (s = ci(t2[0], t2[v - 1])), c = v > 2 ? li : ui, y = f = null, p;
  }
  function p(v) {
    return v == null || isNaN(v = +v) ? a : (y || (y = c(t2.map(n), e, r)))(n(s(v)));
  }
  return p.invert = function(v) {
    return s(i((f || (f = c(e, t2.map(n), At)))(v)));
  }, p.domain = function(v) {
    return arguments.length ? (t2 = Array.from(v, oi), x()) : t2.slice();
  }, p.range = function(v) {
    return arguments.length ? (e = Array.from(v), x()) : e.slice();
  }, p.rangeRound = function(v) {
    return e = Array.from(v), r = jr, x();
  }, p.clamp = function(v) {
    return arguments.length ? (s = v ? true : kt, x()) : s !== kt;
  }, p.interpolate = function(v) {
    return arguments.length ? (r = v, x()) : r;
  }, p.unknown = function(v) {
    return arguments.length ? (a = v, p) : a;
  }, function(v, D) {
    return n = v, i = D, x();
  };
}
function Yn() {
  return fi()(kt, kt);
}
function hi(t2, e, r, n) {
  var i = pe2(t2, e, r), a;
  switch (n = jt(n ?? ",f"), n.type) {
    case "s": {
      var s = Math.max(Math.abs(t2), Math.abs(e));
      return n.precision == null && !isNaN(a = ii(i, s)) && (n.precision = a), An(n, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = ai(i, Math.max(Math.abs(t2), Math.abs(e)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = ri(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return _n(n);
}
function mi(t2) {
  var e = t2.domain;
  return t2.ticks = function(r) {
    var n = e();
    return Dr(n[0], n[n.length - 1], r ?? 10);
  }, t2.tickFormat = function(r, n) {
    var i = e();
    return hi(i[0], i[i.length - 1], r ?? 10, n);
  }, t2.nice = function(r) {
    r == null && (r = 10);
    var n = e(), i = 0, a = n.length - 1, s = n[i], c = n[a], y, f, x = 10;
    for (c < s && (f = s, s = c, c = f, f = i, i = a, a = f); x-- > 0; ) {
      if (f = kn(s, c, r), f === y)
        return n[i] = s, n[a] = c, e(n);
      if (f > 0)
        s = Math.floor(s / f) * f, c = Math.ceil(c / f) * f;
      else if (f < 0)
        s = Math.ceil(s * f) / f, c = Math.floor(c * f) / f;
      else
        break;
      y = f;
    }
    return t2;
  }, t2;
}
function Un() {
  var t2 = Yn();
  return t2.copy = function() {
    return Fn(t2, Un());
  }, t.apply(t2, arguments), mi(t2);
}
function di(t2, e) {
  t2 = t2.slice();
  var r = 0, n = t2.length - 1, i = t2[r], a = t2[n], s;
  return a < i && (s = r, r = n, n = s, s = i, i = a, a = s), t2[r] = e.floor(i), t2[n] = e.ceil(a), t2;
}
var oe = /* @__PURE__ */ new Date();
var ce = /* @__PURE__ */ new Date();
function tt(t2, e, r, n) {
  function i(a) {
    return t2(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = function(a) {
    return t2(a = /* @__PURE__ */ new Date(+a)), a;
  }, i.ceil = function(a) {
    return t2(a = new Date(a - 1)), e(a, 1), t2(a), a;
  }, i.round = function(a) {
    var s = i(a), c = i.ceil(a);
    return a - s < c - a ? s : c;
  }, i.offset = function(a, s) {
    return e(a = /* @__PURE__ */ new Date(+a), s == null ? 1 : Math.floor(s)), a;
  }, i.range = function(a, s, c) {
    var y = [], f;
    if (a = i.ceil(a), c = c == null ? 1 : Math.floor(c), !(a < s) || !(c > 0))
      return y;
    do
      y.push(f = /* @__PURE__ */ new Date(+a)), e(a, c), t2(a);
    while (f < a && a < s);
    return y;
  }, i.filter = function(a) {
    return tt(function(s) {
      if (s >= s)
        for (; t2(s), !a(s); )
          s.setTime(s - 1);
    }, function(s, c) {
      if (s >= s)
        if (c < 0)
          for (; ++c <= 0; )
            for (; e(s, -1), !a(s); )
              ;
        else
          for (; --c >= 0; )
            for (; e(s, 1), !a(s); )
              ;
    });
  }, r && (i.count = function(a, s) {
    return oe.setTime(+a), ce.setTime(+s), t2(oe), t2(ce), Math.floor(r(oe, ce));
  }, i.every = function(a) {
    return a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? function(s) {
      return n(s) % a === 0;
    } : function(s) {
      return i.count(0, s) % a === 0;
    }) : i;
  }), i;
}
var qt = tt(function() {
}, function(t2, e) {
  t2.setTime(+t2 + e);
}, function(t2, e) {
  return e - t2;
});
qt.every = function(t2) {
  return t2 = Math.floor(t2), !isFinite(t2) || !(t2 > 0) ? null : t2 > 1 ? tt(function(e) {
    e.setTime(Math.floor(e / t2) * t2);
  }, function(e, r) {
    e.setTime(+e + r * t2);
  }, function(e, r) {
    return (r - e) / t2;
  }) : qt;
};
var gi = qt;
qt.range;
var lt = 1e3;
var it = lt * 60;
var ft = it * 60;
var mt = ft * 24;
var Ue = mt * 7;
var tn = mt * 30;
var ue = mt * 365;
var Ln = tt(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds());
}, function(t2, e) {
  t2.setTime(+t2 + e * lt);
}, function(t2, e) {
  return (e - t2) / lt;
}, function(t2) {
  return t2.getUTCSeconds();
});
var Lt = Ln;
Ln.range;
var En = tt(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * lt);
}, function(t2, e) {
  t2.setTime(+t2 + e * it);
}, function(t2, e) {
  return (e - t2) / it;
}, function(t2) {
  return t2.getMinutes();
});
var Xt = En;
En.range;
var In = tt(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * lt - t2.getMinutes() * it);
}, function(t2, e) {
  t2.setTime(+t2 + e * ft);
}, function(t2, e) {
  return (e - t2) / ft;
}, function(t2) {
  return t2.getHours();
});
var Gt = In;
In.range;
var Nn = tt(
  (t2) => t2.setHours(0, 0, 0, 0),
  (t2, e) => t2.setDate(t2.getDate() + e),
  (t2, e) => (e - t2 - (e.getTimezoneOffset() - t2.getTimezoneOffset()) * it) / mt,
  (t2) => t2.getDate() - 1
);
var Mt = Nn;
Nn.range;
function gt(t2) {
  return tt(function(e) {
    e.setDate(e.getDate() - (e.getDay() + 7 - t2) % 7), e.setHours(0, 0, 0, 0);
  }, function(e, r) {
    e.setDate(e.getDate() + r * 7);
  }, function(e, r) {
    return (r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * it) / Ue;
  });
}
var wt = gt(0);
var $t = gt(1);
var yi = gt(2);
var pi = gt(3);
var Dt = gt(4);
var ki = gt(5);
var vi = gt(6);
wt.range;
$t.range;
yi.range;
pi.range;
Dt.range;
ki.range;
vi.range;
var Wn = tt(function(t2) {
  t2.setDate(1), t2.setHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setMonth(t2.getMonth() + e);
}, function(t2, e) {
  return e.getMonth() - t2.getMonth() + (e.getFullYear() - t2.getFullYear()) * 12;
}, function(t2) {
  return t2.getMonth();
});
var Qt = Wn;
Wn.range;
var Le = tt(function(t2) {
  t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setFullYear(t2.getFullYear() + e);
}, function(t2, e) {
  return e.getFullYear() - t2.getFullYear();
}, function(t2) {
  return t2.getFullYear();
});
Le.every = function(t2) {
  return !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : tt(function(e) {
    e.setFullYear(Math.floor(e.getFullYear() / t2) * t2), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  }, function(e, r) {
    e.setFullYear(e.getFullYear() + r * t2);
  });
};
var dt = Le;
Le.range;
var zn = tt(function(t2) {
  t2.setUTCSeconds(0, 0);
}, function(t2, e) {
  t2.setTime(+t2 + e * it);
}, function(t2, e) {
  return (e - t2) / it;
}, function(t2) {
  return t2.getUTCMinutes();
});
var Ti = zn;
zn.range;
var On = tt(function(t2) {
  t2.setUTCMinutes(0, 0, 0);
}, function(t2, e) {
  t2.setTime(+t2 + e * ft);
}, function(t2, e) {
  return (e - t2) / ft;
}, function(t2) {
  return t2.getUTCHours();
});
var xi = On;
On.range;
var Hn = tt(function(t2) {
  t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCDate(t2.getUTCDate() + e);
}, function(t2, e) {
  return (e - t2) / mt;
}, function(t2) {
  return t2.getUTCDate() - 1;
});
var Ee = Hn;
Hn.range;
function yt(t2) {
  return tt(function(e) {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t2) % 7), e.setUTCHours(0, 0, 0, 0);
  }, function(e, r) {
    e.setUTCDate(e.getUTCDate() + r * 7);
  }, function(e, r) {
    return (r - e) / Ue;
  });
}
var Ie = yt(0);
var Jt = yt(1);
var bi = yt(2);
var Mi = yt(3);
var Ct = yt(4);
var wi = yt(5);
var Di = yt(6);
Ie.range;
Jt.range;
bi.range;
Mi.range;
Ct.range;
wi.range;
Di.range;
var Pn = tt(function(t2) {
  t2.setUTCDate(1), t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCMonth(t2.getUTCMonth() + e);
}, function(t2, e) {
  return e.getUTCMonth() - t2.getUTCMonth() + (e.getUTCFullYear() - t2.getUTCFullYear()) * 12;
}, function(t2) {
  return t2.getUTCMonth();
});
var Ci = Pn;
Pn.range;
var Ne = tt(function(t2) {
  t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCFullYear(t2.getUTCFullYear() + e);
}, function(t2, e) {
  return e.getUTCFullYear() - t2.getUTCFullYear();
}, function(t2) {
  return t2.getUTCFullYear();
});
Ne.every = function(t2) {
  return !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : tt(function(e) {
    e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t2) * t2), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  }, function(e, r) {
    e.setUTCFullYear(e.getUTCFullYear() + r * t2);
  });
};
var St = Ne;
Ne.range;
function Vn(t2, e, r, n, i, a) {
  const s = [
    [Lt, 1, lt],
    [Lt, 5, 5 * lt],
    [Lt, 15, 15 * lt],
    [Lt, 30, 30 * lt],
    [a, 1, it],
    [a, 5, 5 * it],
    [a, 15, 15 * it],
    [a, 30, 30 * it],
    [i, 1, ft],
    [i, 3, 3 * ft],
    [i, 6, 6 * ft],
    [i, 12, 12 * ft],
    [n, 1, mt],
    [n, 2, 2 * mt],
    [r, 1, Ue],
    [e, 1, tn],
    [e, 3, 3 * tn],
    [t2, 1, ue]
  ];
  function c(f, x, p) {
    const v = x < f;
    v && ([f, x] = [x, f]);
    const D = p && typeof p.range == "function" ? p : y(f, x, p), z = D ? D.range(f, +x + 1) : [];
    return v ? z.reverse() : z;
  }
  function y(f, x, p) {
    const v = Math.abs(x - f) / p, D = Ae(([, , _]) => _).right(s, v);
    if (D === s.length)
      return t2.every(pe2(f / ue, x / ue, p));
    if (D === 0)
      return gi.every(Math.max(pe2(f, x, p), 1));
    const [z, T] = s[v / s[D - 1][2] < s[D][2] / v ? D - 1 : D];
    return z.every(T);
  }
  return [c, y];
}
Vn(St, Ci, Ie, Ee, xi, Ti);
var [Si, _i] = Vn(dt, Qt, wt, Mt, Gt, Xt);
function le(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
    return e.setFullYear(t2.y), e;
  }
  return new Date(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
}
function fe(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(Date.UTC(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
    return e.setUTCFullYear(t2.y), e;
  }
  return new Date(Date.UTC(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
}
function Ft(t2, e, r) {
  return { y: t2, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Ai(t2) {
  var e = t2.dateTime, r = t2.date, n = t2.time, i = t2.periods, a = t2.days, s = t2.shortDays, c = t2.months, y = t2.shortMonths, f = Yt(i), x = Ut(i), p = Yt(a), v = Ut(a), D = Yt(s), z = Ut(s), T = Yt(c), _ = Ut(c), I = Yt(y), W = Ut(y), O = {
    a: Z,
    A: j,
    b: B,
    B: k,
    c: null,
    d: on,
    e: on,
    f: Ji,
    g: ca,
    G: la,
    H: Gi2,
    I: $i,
    j: Qi,
    L: Rn,
    m: Ki,
    M: ta,
    p: A,
    q: F,
    Q: ln,
    s: fn,
    S: ea,
    u: na,
    U: ra,
    V: ia,
    w: aa,
    W: sa,
    x: null,
    X: null,
    y: oa,
    Y: ua,
    Z: fa,
    "%": un
  }, V = {
    a: L,
    A: H,
    b: $,
    B: q,
    c: null,
    d: cn,
    e: cn,
    f: ga,
    g: Da,
    G: Sa,
    H: ha,
    I: ma,
    j: da,
    L: Zn,
    m: ya,
    M: pa,
    p: ht,
    q: G,
    Q: ln,
    s: fn,
    S: ka,
    u: va,
    U: Ta,
    V: xa,
    w: ba,
    W: Ma,
    x: null,
    X: null,
    y: wa,
    Y: Ca,
    Z: _a,
    "%": un
  }, P = {
    a: g,
    A: u,
    b: l,
    B: b,
    c: o,
    d: an,
    e: an,
    f: Zi,
    g: rn,
    G: nn,
    H: sn,
    I: sn,
    j: Pi,
    L: Bi,
    m: Hi,
    M: Vi,
    p: h,
    q: Oi,
    Q: qi,
    s: Xi,
    S: Ri2,
    u: Ei,
    U: Ii,
    V: Ni2,
    w: Li,
    W: Wi,
    x: Y,
    X: m,
    y: rn,
    Y: nn,
    Z: zi,
    "%": ji
  };
  O.x = C(r, O), O.X = C(n, O), O.c = C(e, O), V.x = C(r, V), V.X = C(n, V), V.c = C(e, V);
  function C(M, S) {
    return function(E) {
      var d = [], X = -1, N = 0, Q = M.length, J, at, rt;
      for (E instanceof Date || (E = /* @__PURE__ */ new Date(+E)); ++X < Q; )
        M.charCodeAt(X) === 37 && (d.push(M.slice(N, X)), (at = en[J = M.charAt(++X)]) != null ? J = M.charAt(++X) : at = J === "e" ? " " : "0", (rt = S[J]) && (J = rt(E, at)), d.push(J), N = X + 1);
      return d.push(M.slice(N, X)), d.join("");
    };
  }
  function U(M, S) {
    return function(E) {
      var d = Ft(1900, void 0, 1), X = w(d, M, E += "", 0), N, Q;
      if (X != E.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (S && !("Z" in d) && (d.Z = 0), "p" in d && (d.H = d.H % 12 + d.p * 12), d.m === void 0 && (d.m = "q" in d ? d.q : 0), "V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        "w" in d || (d.w = 1), "Z" in d ? (N = fe(Ft(d.y, 0, 1)), Q = N.getUTCDay(), N = Q > 4 || Q === 0 ? Jt.ceil(N) : Jt(N), N = Ee.offset(N, (d.V - 1) * 7), d.y = N.getUTCFullYear(), d.m = N.getUTCMonth(), d.d = N.getUTCDate() + (d.w + 6) % 7) : (N = le(Ft(d.y, 0, 1)), Q = N.getDay(), N = Q > 4 || Q === 0 ? $t.ceil(N) : $t(N), N = Mt.offset(N, (d.V - 1) * 7), d.y = N.getFullYear(), d.m = N.getMonth(), d.d = N.getDate() + (d.w + 6) % 7);
      } else
        ("W" in d || "U" in d) && ("w" in d || (d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0), Q = "Z" in d ? fe(Ft(d.y, 0, 1)).getUTCDay() : le(Ft(d.y, 0, 1)).getDay(), d.m = 0, d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (Q + 5) % 7 : d.w + d.U * 7 - (Q + 6) % 7);
      return "Z" in d ? (d.H += d.Z / 100 | 0, d.M += d.Z % 100, fe(d)) : le(d);
    };
  }
  function w(M, S, E, d) {
    for (var X = 0, N = S.length, Q = E.length, J, at; X < N; ) {
      if (d >= Q)
        return -1;
      if (J = S.charCodeAt(X++), J === 37) {
        if (J = S.charAt(X++), at = P[J in en ? S.charAt(X++) : J], !at || (d = at(M, E, d)) < 0)
          return -1;
      } else if (J != E.charCodeAt(d++))
        return -1;
    }
    return d;
  }
  function h(M, S, E) {
    var d = f.exec(S.slice(E));
    return d ? (M.p = x.get(d[0].toLowerCase()), E + d[0].length) : -1;
  }
  function g(M, S, E) {
    var d = D.exec(S.slice(E));
    return d ? (M.w = z.get(d[0].toLowerCase()), E + d[0].length) : -1;
  }
  function u(M, S, E) {
    var d = p.exec(S.slice(E));
    return d ? (M.w = v.get(d[0].toLowerCase()), E + d[0].length) : -1;
  }
  function l(M, S, E) {
    var d = I.exec(S.slice(E));
    return d ? (M.m = W.get(d[0].toLowerCase()), E + d[0].length) : -1;
  }
  function b(M, S, E) {
    var d = T.exec(S.slice(E));
    return d ? (M.m = _.get(d[0].toLowerCase()), E + d[0].length) : -1;
  }
  function o(M, S, E) {
    return w(M, e, S, E);
  }
  function Y(M, S, E) {
    return w(M, r, S, E);
  }
  function m(M, S, E) {
    return w(M, n, S, E);
  }
  function Z(M) {
    return s[M.getDay()];
  }
  function j(M) {
    return a[M.getDay()];
  }
  function B(M) {
    return y[M.getMonth()];
  }
  function k(M) {
    return c[M.getMonth()];
  }
  function A(M) {
    return i[+(M.getHours() >= 12)];
  }
  function F(M) {
    return 1 + ~~(M.getMonth() / 3);
  }
  function L(M) {
    return s[M.getUTCDay()];
  }
  function H(M) {
    return a[M.getUTCDay()];
  }
  function $(M) {
    return y[M.getUTCMonth()];
  }
  function q(M) {
    return c[M.getUTCMonth()];
  }
  function ht(M) {
    return i[+(M.getUTCHours() >= 12)];
  }
  function G(M) {
    return 1 + ~~(M.getUTCMonth() / 3);
  }
  return {
    format: function(M) {
      var S = C(M += "", O);
      return S.toString = function() {
        return M;
      }, S;
    },
    parse: function(M) {
      var S = U(M += "", false);
      return S.toString = function() {
        return M;
      }, S;
    },
    utcFormat: function(M) {
      var S = C(M += "", V);
      return S.toString = function() {
        return M;
      }, S;
    },
    utcParse: function(M) {
      var S = U(M += "", true);
      return S.toString = function() {
        return M;
      }, S;
    }
  };
}
var en = { "-": "", _: " ", 0: "0" };
var et2 = /^\s*\d+/;
var Fi = /^%/;
var Yi = /[\\^$*+?|[\]().{}]/g;
function R(t2, e, r) {
  var n = t2 < 0 ? "-" : "", i = (n ? -t2 : t2) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(e) + i : i);
}
function Ui(t2) {
  return t2.replace(Yi, "\\$&");
}
function Yt(t2) {
  return new RegExp("^(?:" + t2.map(Ui).join("|") + ")", "i");
}
function Ut(t2) {
  return new Map(t2.map((e, r) => [e.toLowerCase(), r]));
}
function Li(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 1));
  return n ? (t2.w = +n[0], r + n[0].length) : -1;
}
function Ei(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 1));
  return n ? (t2.u = +n[0], r + n[0].length) : -1;
}
function Ii(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 2));
  return n ? (t2.U = +n[0], r + n[0].length) : -1;
}
function Ni2(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 2));
  return n ? (t2.V = +n[0], r + n[0].length) : -1;
}
function Wi(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 2));
  return n ? (t2.W = +n[0], r + n[0].length) : -1;
}
function nn(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 4));
  return n ? (t2.y = +n[0], r + n[0].length) : -1;
}
function rn(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 2));
  return n ? (t2.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function zi(t2, e, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
  return n ? (t2.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function Oi(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 1));
  return n ? (t2.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function Hi(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 2));
  return n ? (t2.m = n[0] - 1, r + n[0].length) : -1;
}
function an(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 2));
  return n ? (t2.d = +n[0], r + n[0].length) : -1;
}
function Pi(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 3));
  return n ? (t2.m = 0, t2.d = +n[0], r + n[0].length) : -1;
}
function sn(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 2));
  return n ? (t2.H = +n[0], r + n[0].length) : -1;
}
function Vi(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 2));
  return n ? (t2.M = +n[0], r + n[0].length) : -1;
}
function Ri2(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 2));
  return n ? (t2.S = +n[0], r + n[0].length) : -1;
}
function Bi(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 3));
  return n ? (t2.L = +n[0], r + n[0].length) : -1;
}
function Zi(t2, e, r) {
  var n = et2.exec(e.slice(r, r + 6));
  return n ? (t2.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function ji(t2, e, r) {
  var n = Fi.exec(e.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function qi(t2, e, r) {
  var n = et2.exec(e.slice(r));
  return n ? (t2.Q = +n[0], r + n[0].length) : -1;
}
function Xi(t2, e, r) {
  var n = et2.exec(e.slice(r));
  return n ? (t2.s = +n[0], r + n[0].length) : -1;
}
function on(t2, e) {
  return R(t2.getDate(), e, 2);
}
function Gi2(t2, e) {
  return R(t2.getHours(), e, 2);
}
function $i(t2, e) {
  return R(t2.getHours() % 12 || 12, e, 2);
}
function Qi(t2, e) {
  return R(1 + Mt.count(dt(t2), t2), e, 3);
}
function Rn(t2, e) {
  return R(t2.getMilliseconds(), e, 3);
}
function Ji(t2, e) {
  return Rn(t2, e) + "000";
}
function Ki(t2, e) {
  return R(t2.getMonth() + 1, e, 2);
}
function ta(t2, e) {
  return R(t2.getMinutes(), e, 2);
}
function ea(t2, e) {
  return R(t2.getSeconds(), e, 2);
}
function na(t2) {
  var e = t2.getDay();
  return e === 0 ? 7 : e;
}
function ra(t2, e) {
  return R(wt.count(dt(t2) - 1, t2), e, 2);
}
function Bn(t2) {
  var e = t2.getDay();
  return e >= 4 || e === 0 ? Dt(t2) : Dt.ceil(t2);
}
function ia(t2, e) {
  return t2 = Bn(t2), R(Dt.count(dt(t2), t2) + (dt(t2).getDay() === 4), e, 2);
}
function aa(t2) {
  return t2.getDay();
}
function sa(t2, e) {
  return R($t.count(dt(t2) - 1, t2), e, 2);
}
function oa(t2, e) {
  return R(t2.getFullYear() % 100, e, 2);
}
function ca(t2, e) {
  return t2 = Bn(t2), R(t2.getFullYear() % 100, e, 2);
}
function ua(t2, e) {
  return R(t2.getFullYear() % 1e4, e, 4);
}
function la(t2, e) {
  var r = t2.getDay();
  return t2 = r >= 4 || r === 0 ? Dt(t2) : Dt.ceil(t2), R(t2.getFullYear() % 1e4, e, 4);
}
function fa(t2) {
  var e = t2.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + R(e / 60 | 0, "0", 2) + R(e % 60, "0", 2);
}
function cn(t2, e) {
  return R(t2.getUTCDate(), e, 2);
}
function ha(t2, e) {
  return R(t2.getUTCHours(), e, 2);
}
function ma(t2, e) {
  return R(t2.getUTCHours() % 12 || 12, e, 2);
}
function da(t2, e) {
  return R(1 + Ee.count(St(t2), t2), e, 3);
}
function Zn(t2, e) {
  return R(t2.getUTCMilliseconds(), e, 3);
}
function ga(t2, e) {
  return Zn(t2, e) + "000";
}
function ya(t2, e) {
  return R(t2.getUTCMonth() + 1, e, 2);
}
function pa(t2, e) {
  return R(t2.getUTCMinutes(), e, 2);
}
function ka(t2, e) {
  return R(t2.getUTCSeconds(), e, 2);
}
function va(t2) {
  var e = t2.getUTCDay();
  return e === 0 ? 7 : e;
}
function Ta(t2, e) {
  return R(Ie.count(St(t2) - 1, t2), e, 2);
}
function jn(t2) {
  var e = t2.getUTCDay();
  return e >= 4 || e === 0 ? Ct(t2) : Ct.ceil(t2);
}
function xa(t2, e) {
  return t2 = jn(t2), R(Ct.count(St(t2), t2) + (St(t2).getUTCDay() === 4), e, 2);
}
function ba(t2) {
  return t2.getUTCDay();
}
function Ma(t2, e) {
  return R(Jt.count(St(t2) - 1, t2), e, 2);
}
function wa(t2, e) {
  return R(t2.getUTCFullYear() % 100, e, 2);
}
function Da(t2, e) {
  return t2 = jn(t2), R(t2.getUTCFullYear() % 100, e, 2);
}
function Ca(t2, e) {
  return R(t2.getUTCFullYear() % 1e4, e, 4);
}
function Sa(t2, e) {
  var r = t2.getUTCDay();
  return t2 = r >= 4 || r === 0 ? Ct(t2) : Ct.ceil(t2), R(t2.getUTCFullYear() % 1e4, e, 4);
}
function _a() {
  return "+0000";
}
function un() {
  return "%";
}
function ln(t2) {
  return +t2;
}
function fn(t2) {
  return Math.floor(+t2 / 1e3);
}
var pt;
var Kt;
Aa({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Aa(t2) {
  return pt = Ai(t2), Kt = pt.format, pt.parse, pt.utcFormat, pt.utcParse, pt;
}
function Fa(t2) {
  return new Date(t2);
}
function Ya(t2) {
  return t2 instanceof Date ? +t2 : +/* @__PURE__ */ new Date(+t2);
}
function qn(t2, e, r, n, i, a, s, c, y, f) {
  var x = Yn(), p = x.invert, v = x.domain, D = f(".%L"), z = f(":%S"), T = f("%I:%M"), _ = f("%I %p"), I = f("%a %d"), W = f("%b %d"), O = f("%B"), V = f("%Y");
  function P(C) {
    return (y(C) < C ? D : c(C) < C ? z : s(C) < C ? T : a(C) < C ? _ : n(C) < C ? i(C) < C ? I : W : r(C) < C ? O : V)(C);
  }
  return x.invert = function(C) {
    return new Date(p(C));
  }, x.domain = function(C) {
    return arguments.length ? v(Array.from(C, Ya)) : v().map(Fa);
  }, x.ticks = function(C) {
    var U = v();
    return t2(U[0], U[U.length - 1], C ?? 10);
  }, x.tickFormat = function(C, U) {
    return U == null ? P : f(U);
  }, x.nice = function(C) {
    var U = v();
    return (!C || typeof C.range != "function") && (C = e(U[0], U[U.length - 1], C ?? 10)), C ? v(di(U, C)) : x;
  }, x.copy = function() {
    return Fn(x, qn(t2, e, r, n, i, a, s, c, y, f));
  }, x;
}
function Ua() {
  return t.apply(qn(Si, _i, dt, Qt, wt, Mt, Gt, Xt, Lt, Kt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var xe = function() {
  var t2 = function(w, h, g, u) {
    for (g = g || {}, u = w.length; u--; g[w[u]] = h)
      ;
    return g;
  }, e = [1, 3], r = [1, 5], n = [7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 28, 35, 40], i = [1, 15], a = [1, 16], s = [1, 17], c = [1, 18], y = [1, 19], f = [1, 20], x = [1, 21], p = [1, 22], v = [1, 23], D = [1, 24], z = [1, 25], T = [1, 26], _ = [1, 27], I = [1, 29], W = [1, 31], O = [1, 34], V = [5, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 28, 35, 40], P = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, directive: 4, gantt: 5, document: 6, EOF: 7, line: 8, SPACE: 9, statement: 10, NL: 11, dateFormat: 12, inclusiveEndDates: 13, topAxis: 14, axisFormat: 15, tickInterval: 16, excludes: 17, includes: 18, todayMarker: 19, title: 20, acc_title: 21, acc_title_value: 22, acc_descr: 23, acc_descr_value: 24, acc_descr_multiline_value: 25, section: 26, clickStatement: 27, taskTxt: 28, taskData: 29, openDirective: 30, typeDirective: 31, closeDirective: 32, ":": 33, argDirective: 34, click: 35, callbackname: 36, callbackargs: 37, href: 38, clickStatementDebug: 39, open_directive: 40, type_directive: 41, arg_directive: 42, close_directive: 43, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "gantt", 7: "EOF", 9: "SPACE", 11: "NL", 12: "dateFormat", 13: "inclusiveEndDates", 14: "topAxis", 15: "axisFormat", 16: "tickInterval", 17: "excludes", 18: "includes", 19: "todayMarker", 20: "title", 21: "acc_title", 22: "acc_title_value", 23: "acc_descr", 24: "acc_descr_value", 25: "acc_descr_multiline_value", 26: "section", 28: "taskTxt", 29: "taskData", 33: ":", 35: "click", 36: "callbackname", 37: "callbackargs", 38: "href", 40: "open_directive", 41: "type_directive", 42: "arg_directive", 43: "close_directive" },
    productions_: [0, [3, 2], [3, 3], [6, 0], [6, 2], [8, 2], [8, 1], [8, 1], [8, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [10, 1], [10, 1], [10, 2], [10, 1], [4, 4], [4, 6], [27, 2], [27, 3], [27, 3], [27, 4], [27, 3], [27, 4], [27, 2], [39, 2], [39, 3], [39, 3], [39, 4], [39, 3], [39, 4], [39, 2], [30, 1], [31, 1], [34, 1], [32, 1]],
    performAction: function(h, g, u, l, b, o, Y) {
      var m = o.length - 1;
      switch (b) {
        case 2:
          return o[m - 1];
        case 3:
          this.$ = [];
          break;
        case 4:
          o[m - 1].push(o[m]), this.$ = o[m - 1];
          break;
        case 5:
        case 6:
          this.$ = o[m];
          break;
        case 7:
        case 8:
          this.$ = [];
          break;
        case 9:
          l.setDateFormat(o[m].substr(11)), this.$ = o[m].substr(11);
          break;
        case 10:
          l.enableInclusiveEndDates(), this.$ = o[m].substr(18);
          break;
        case 11:
          l.TopAxis(), this.$ = o[m].substr(8);
          break;
        case 12:
          l.setAxisFormat(o[m].substr(11)), this.$ = o[m].substr(11);
          break;
        case 13:
          l.setTickInterval(o[m].substr(13)), this.$ = o[m].substr(13);
          break;
        case 14:
          l.setExcludes(o[m].substr(9)), this.$ = o[m].substr(9);
          break;
        case 15:
          l.setIncludes(o[m].substr(9)), this.$ = o[m].substr(9);
          break;
        case 16:
          l.setTodayMarker(o[m].substr(12)), this.$ = o[m].substr(12);
          break;
        case 17:
          l.setDiagramTitle(o[m].substr(6)), this.$ = o[m].substr(6);
          break;
        case 18:
          this.$ = o[m].trim(), l.setAccTitle(this.$);
          break;
        case 19:
        case 20:
          this.$ = o[m].trim(), l.setAccDescription(this.$);
          break;
        case 21:
          l.addSection(o[m].substr(8)), this.$ = o[m].substr(8);
          break;
        case 23:
          l.addTask(o[m - 1], o[m]), this.$ = "task";
          break;
        case 27:
          this.$ = o[m - 1], l.setClickEvent(o[m - 1], o[m], null);
          break;
        case 28:
          this.$ = o[m - 2], l.setClickEvent(o[m - 2], o[m - 1], o[m]);
          break;
        case 29:
          this.$ = o[m - 2], l.setClickEvent(o[m - 2], o[m - 1], null), l.setLink(o[m - 2], o[m]);
          break;
        case 30:
          this.$ = o[m - 3], l.setClickEvent(o[m - 3], o[m - 2], o[m - 1]), l.setLink(o[m - 3], o[m]);
          break;
        case 31:
          this.$ = o[m - 2], l.setClickEvent(o[m - 2], o[m], null), l.setLink(o[m - 2], o[m - 1]);
          break;
        case 32:
          this.$ = o[m - 3], l.setClickEvent(o[m - 3], o[m - 1], o[m]), l.setLink(o[m - 3], o[m - 2]);
          break;
        case 33:
          this.$ = o[m - 1], l.setLink(o[m - 1], o[m]);
          break;
        case 34:
        case 40:
          this.$ = o[m - 1] + " " + o[m];
          break;
        case 35:
        case 36:
        case 38:
          this.$ = o[m - 2] + " " + o[m - 1] + " " + o[m];
          break;
        case 37:
        case 39:
          this.$ = o[m - 3] + " " + o[m - 2] + " " + o[m - 1] + " " + o[m];
          break;
        case 41:
          l.parseDirective("%%{", "open_directive");
          break;
        case 42:
          l.parseDirective(o[m], "type_directive");
          break;
        case 43:
          o[m] = o[m].trim().replace(/'/g, '"'), l.parseDirective(o[m], "arg_directive");
          break;
        case 44:
          l.parseDirective("}%%", "close_directive", "gantt");
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: e, 30: 4, 40: r }, { 1: [3] }, { 3: 6, 4: 2, 5: e, 30: 4, 40: r }, t2(n, [2, 3], { 6: 7 }), { 31: 8, 41: [1, 9] }, { 41: [2, 41] }, { 1: [2, 1] }, { 4: 30, 7: [1, 10], 8: 11, 9: [1, 12], 10: 13, 11: [1, 14], 12: i, 13: a, 14: s, 15: c, 16: y, 17: f, 18: x, 19: p, 20: v, 21: D, 23: z, 25: T, 26: _, 27: 28, 28: I, 30: 4, 35: W, 40: r }, { 32: 32, 33: [1, 33], 43: O }, t2([33, 43], [2, 42]), t2(n, [2, 8], { 1: [2, 2] }), t2(n, [2, 4]), { 4: 30, 10: 35, 12: i, 13: a, 14: s, 15: c, 16: y, 17: f, 18: x, 19: p, 20: v, 21: D, 23: z, 25: T, 26: _, 27: 28, 28: I, 30: 4, 35: W, 40: r }, t2(n, [2, 6]), t2(n, [2, 7]), t2(n, [2, 9]), t2(n, [2, 10]), t2(n, [2, 11]), t2(n, [2, 12]), t2(n, [2, 13]), t2(n, [2, 14]), t2(n, [2, 15]), t2(n, [2, 16]), t2(n, [2, 17]), { 22: [1, 36] }, { 24: [1, 37] }, t2(n, [2, 20]), t2(n, [2, 21]), t2(n, [2, 22]), { 29: [1, 38] }, t2(n, [2, 24]), { 36: [1, 39], 38: [1, 40] }, { 11: [1, 41] }, { 34: 42, 42: [1, 43] }, { 11: [2, 44] }, t2(n, [2, 5]), t2(n, [2, 18]), t2(n, [2, 19]), t2(n, [2, 23]), t2(n, [2, 27], { 37: [1, 44], 38: [1, 45] }), t2(n, [2, 33], { 36: [1, 46] }), t2(V, [2, 25]), { 32: 47, 43: O }, { 43: [2, 43] }, t2(n, [2, 28], { 38: [1, 48] }), t2(n, [2, 29]), t2(n, [2, 31], { 37: [1, 49] }), { 11: [1, 50] }, t2(n, [2, 30]), t2(n, [2, 32]), t2(V, [2, 26])],
    defaultActions: { 5: [2, 41], 6: [2, 1], 34: [2, 44], 43: [2, 43] },
    parseError: function(h, g) {
      if (g.recoverable)
        this.trace(h);
      else {
        var u = new Error(h);
        throw u.hash = g, u;
      }
    },
    parse: function(h) {
      var g = this, u = [0], l = [], b = [null], o = [], Y = this.table, m = "", Z = 0, j = 0, B = 2, k = 1, A = o.slice.call(arguments, 1), F = Object.create(this.lexer), L = { yy: {} };
      for (var H in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, H) && (L.yy[H] = this.yy[H]);
      F.setInput(h, L.yy), L.yy.lexer = F, L.yy.parser = this, typeof F.yylloc > "u" && (F.yylloc = {});
      var $ = F.yylloc;
      o.push($);
      var q = F.options && F.options.ranges;
      typeof L.yy.parseError == "function" ? this.parseError = L.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ht() {
        var rt;
        return rt = l.pop() || F.lex() || k, typeof rt != "number" && (rt instanceof Array && (l = rt, rt = l.pop()), rt = g.symbols_[rt] || rt), rt;
      }
      for (var G, M, S, E, d = {}, X, N, Q, J; ; ) {
        if (M = u[u.length - 1], this.defaultActions[M] ? S = this.defaultActions[M] : ((G === null || typeof G > "u") && (G = ht()), S = Y[M] && Y[M][G]), typeof S > "u" || !S.length || !S[0]) {
          var at = "";
          J = [];
          for (X in Y[M])
            this.terminals_[X] && X > B && J.push("'" + this.terminals_[X] + "'");
          F.showPosition ? at = "Parse error on line " + (Z + 1) + `:
` + F.showPosition() + `
Expecting ` + J.join(", ") + ", got '" + (this.terminals_[G] || G) + "'" : at = "Parse error on line " + (Z + 1) + ": Unexpected " + (G == k ? "end of input" : "'" + (this.terminals_[G] || G) + "'"), this.parseError(at, {
            text: F.match,
            token: this.terminals_[G] || G,
            line: F.yylineno,
            loc: $,
            expected: J
          });
        }
        if (S[0] instanceof Array && S.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + M + ", token: " + G);
        switch (S[0]) {
          case 1:
            u.push(G), b.push(F.yytext), o.push(F.yylloc), u.push(S[1]), G = null, j = F.yyleng, m = F.yytext, Z = F.yylineno, $ = F.yylloc;
            break;
          case 2:
            if (N = this.productions_[S[1]][1], d.$ = b[b.length - N], d._$ = {
              first_line: o[o.length - (N || 1)].first_line,
              last_line: o[o.length - 1].last_line,
              first_column: o[o.length - (N || 1)].first_column,
              last_column: o[o.length - 1].last_column
            }, q && (d._$.range = [
              o[o.length - (N || 1)].range[0],
              o[o.length - 1].range[1]
            ]), E = this.performAction.apply(d, [
              m,
              j,
              Z,
              L.yy,
              S[1],
              b,
              o
            ].concat(A)), typeof E < "u")
              return E;
            N && (u = u.slice(0, -1 * N * 2), b = b.slice(0, -1 * N), o = o.slice(0, -1 * N)), u.push(this.productions_[S[1]][0]), b.push(d.$), o.push(d._$), Q = Y[u[u.length - 2]][u[u.length - 1]], u.push(Q);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, C = function() {
    var w = {
      EOF: 1,
      parseError: function(g, u) {
        if (this.yy.parser)
          this.yy.parser.parseError(g, u);
        else
          throw new Error(g);
      },
      // resets the lexer, sets new input
      setInput: function(h, g) {
        return this.yy = g || this.yy || {}, this._input = h, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var h = this._input[0];
        this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
        var g = h.match(/(?:\r\n?|\n).*/g);
        return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
      },
      // unshifts one char (or a string) into the input
      unput: function(h) {
        var g = h.length, u = h.split(/(?:\r\n?|\n)/g);
        this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g), this.offset -= g;
        var l = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), u.length - 1 && (this.yylineno -= u.length - 1);
        var b = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: u ? (u.length === l.length ? this.yylloc.first_column : 0) + l[l.length - u.length].length - u[0].length : this.yylloc.first_column - g
        }, this.options.ranges && (this.yylloc.range = [b[0], b[0] + this.yyleng - g]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = true, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(h) {
        this.unput(this.match.slice(h));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var h = this.matched.substr(0, this.matched.length - this.match.length);
        return (h.length > 20 ? "..." : "") + h.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var h = this.match;
        return h.length < 20 && (h += this._input.substr(0, 20 - h.length)), (h.substr(0, 20) + (h.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var h = this.pastInput(), g = new Array(h.length + 1).join("-");
        return h + this.upcomingInput() + `
` + g + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(h, g) {
        var u, l, b;
        if (this.options.backtrack_lexer && (b = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (b.yylloc.range = this.yylloc.range.slice(0))), l = h[0].match(/(?:\r\n?|\n).*/g), l && (this.yylineno += l.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: l ? l[l.length - 1].length - l[l.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + h[0].length
        }, this.yytext += h[0], this.match += h[0], this.matches = h, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(h[0].length), this.matched += h[0], u = this.performAction.call(this, this.yy, this, g, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), u)
          return u;
        if (this._backtrack) {
          for (var o in b)
            this[o] = b[o];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var h, g, u, l;
        this._more || (this.yytext = "", this.match = "");
        for (var b = this._currentRules(), o = 0; o < b.length; o++)
          if (u = this._input.match(this.rules[b[o]]), u && (!g || u[0].length > g[0].length)) {
            if (g = u, l = o, this.options.backtrack_lexer) {
              if (h = this.test_match(u, b[o]), h !== false)
                return h;
              if (this._backtrack) {
                g = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return g ? (h = this.test_match(g, b[l]), h !== false ? h : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var g = this.next();
        return g || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(g) {
        this.conditionStack.push(g);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var g = this.conditionStack.length - 1;
        return g > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(g) {
        return g = this.conditionStack.length - 1 - Math.abs(g || 0), g >= 0 ? this.conditionStack[g] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(g) {
        this.begin(g);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(g, u, l, b) {
        switch (l) {
          case 0:
            return this.begin("open_directive"), 40;
          case 1:
            return this.begin("type_directive"), 41;
          case 2:
            return this.popState(), this.begin("arg_directive"), 33;
          case 3:
            return this.popState(), this.popState(), 43;
          case 4:
            return 42;
          case 5:
            return this.begin("acc_title"), 21;
          case 6:
            return this.popState(), "acc_title_value";
          case 7:
            return this.begin("acc_descr"), 23;
          case 8:
            return this.popState(), "acc_descr_value";
          case 9:
            this.begin("acc_descr_multiline");
            break;
          case 10:
            this.popState();
            break;
          case 11:
            return "acc_descr_multiline_value";
          case 12:
            break;
          case 13:
            break;
          case 14:
            break;
          case 15:
            return 11;
          case 16:
            break;
          case 17:
            break;
          case 18:
            break;
          case 19:
            this.begin("href");
            break;
          case 20:
            this.popState();
            break;
          case 21:
            return 38;
          case 22:
            this.begin("callbackname");
            break;
          case 23:
            this.popState();
            break;
          case 24:
            this.popState(), this.begin("callbackargs");
            break;
          case 25:
            return 36;
          case 26:
            this.popState();
            break;
          case 27:
            return 37;
          case 28:
            this.begin("click");
            break;
          case 29:
            this.popState();
            break;
          case 30:
            return 35;
          case 31:
            return 5;
          case 32:
            return 12;
          case 33:
            return 13;
          case 34:
            return 14;
          case 35:
            return 15;
          case 36:
            return 16;
          case 37:
            return 18;
          case 38:
            return 17;
          case 39:
            return 19;
          case 40:
            return "date";
          case 41:
            return 20;
          case 42:
            return "accDescription";
          case 43:
            return 26;
          case 44:
            return 28;
          case 45:
            return 29;
          case 46:
            return 33;
          case 47:
            return 7;
          case 48:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [10, 11], inclusive: false }, acc_descr: { rules: [8], inclusive: false }, acc_title: { rules: [6], inclusive: false }, close_directive: { rules: [], inclusive: false }, arg_directive: { rules: [3, 4], inclusive: false }, type_directive: { rules: [2, 3], inclusive: false }, open_directive: { rules: [1], inclusive: false }, callbackargs: { rules: [26, 27], inclusive: false }, callbackname: { rules: [23, 24, 25], inclusive: false }, href: { rules: [20, 21], inclusive: false }, click: { rules: [29, 30], inclusive: false }, INITIAL: { rules: [0, 5, 7, 9, 12, 13, 14, 15, 16, 17, 18, 19, 22, 28, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], inclusive: true } }
    };
    return w;
  }();
  P.lexer = C;
  function U() {
    this.yy = {};
  }
  return U.prototype = P, P.Parser = U, new U();
}();
xe.parser = xe;
var La = xe;
var be = {};
var Ea = {
  get exports() {
    return be;
  },
  set exports(t2) {
    be = t2;
  }
};
(function(t2, e) {
  (function(r, n) {
    t2.exports = n();
  })(Do, function() {
    var r = "day";
    return function(n, i, a) {
      var s = function(f) {
        return f.add(4 - f.isoWeekday(), r);
      }, c = i.prototype;
      c.isoWeekYear = function() {
        return s(this).year();
      }, c.isoWeek = function(f) {
        if (!this.$utils().u(f))
          return this.add(7 * (f - this.isoWeek()), r);
        var x, p, v, D, z = s(this), T = (x = this.isoWeekYear(), p = this.$u, v = (p ? a.utc : a)().year(x).startOf("year"), D = 4 - v.isoWeekday(), v.isoWeekday() > 4 && (D += 7), v.add(D, r));
        return z.diff(T, "week") + 1;
      }, c.isoWeekday = function(f) {
        return this.$utils().u(f) ? this.day() || 7 : this.day(this.day() % 7 ? f : f - 7);
      };
      var y = c.startOf;
      c.startOf = function(f, x) {
        var p = this.$utils(), v = !!p.u(x) || x;
        return p.p(f) === "isoweek" ? v ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : y.bind(this)(f, x);
      };
    };
  });
})(Ea);
var Ia = be;
var Me = {};
var Na = {
  get exports() {
    return Me;
  },
  set exports(t2) {
    Me = t2;
  }
};
(function(t2, e) {
  (function(r, n) {
    t2.exports = n();
  })(Do, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/, a = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, c = {}, y = function(T) {
      return (T = +T) + (T > 68 ? 1900 : 2e3);
    }, f = function(T) {
      return function(_) {
        this[T] = +_;
      };
    }, x = [/[+-]\d\d:?(\d\d)?|Z/, function(T) {
      (this.zone || (this.zone = {})).offset = function(_) {
        if (!_ || _ === "Z")
          return 0;
        var I = _.match(/([+-]|\d\d)/g), W = 60 * I[1] + (+I[2] || 0);
        return W === 0 ? 0 : I[0] === "+" ? -W : W;
      }(T);
    }], p = function(T) {
      var _ = c[T];
      return _ && (_.indexOf ? _ : _.s.concat(_.f));
    }, v = function(T, _) {
      var I, W = c.meridiem;
      if (W) {
        for (var O = 1; O <= 24; O += 1)
          if (T.indexOf(W(O, 0, _)) > -1) {
            I = O > 12;
            break;
          }
      } else
        I = T === (_ ? "pm" : "PM");
      return I;
    }, D = { A: [s, function(T) {
      this.afternoon = v(T, false);
    }], a: [s, function(T) {
      this.afternoon = v(T, true);
    }], S: [/\d/, function(T) {
      this.milliseconds = 100 * +T;
    }], SS: [i, function(T) {
      this.milliseconds = 10 * +T;
    }], SSS: [/\d{3}/, function(T) {
      this.milliseconds = +T;
    }], s: [a, f("seconds")], ss: [a, f("seconds")], m: [a, f("minutes")], mm: [a, f("minutes")], H: [a, f("hours")], h: [a, f("hours")], HH: [a, f("hours")], hh: [a, f("hours")], D: [a, f("day")], DD: [i, f("day")], Do: [s, function(T) {
      var _ = c.ordinal, I = T.match(/\d+/);
      if (this.day = I[0], _)
        for (var W = 1; W <= 31; W += 1)
          _(W).replace(/\[|\]/g, "") === T && (this.day = W);
    }], M: [a, f("month")], MM: [i, f("month")], MMM: [s, function(T) {
      var _ = p("months"), I = (p("monthsShort") || _.map(function(W) {
        return W.slice(0, 3);
      })).indexOf(T) + 1;
      if (I < 1)
        throw new Error();
      this.month = I % 12 || I;
    }], MMMM: [s, function(T) {
      var _ = p("months").indexOf(T) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], Y: [/[+-]?\d+/, f("year")], YY: [i, function(T) {
      this.year = y(T);
    }], YYYY: [/\d{4}/, f("year")], Z: x, ZZ: x };
    function z(T) {
      var _, I;
      _ = T, I = c && c.formats;
      for (var W = (T = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(h, g, u) {
        var l = u && u.toUpperCase();
        return g || I[u] || r[u] || I[l].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(b, o, Y) {
          return o || Y.slice(1);
        });
      })).match(n), O = W.length, V = 0; V < O; V += 1) {
        var P = W[V], C = D[P], U = C && C[0], w = C && C[1];
        W[V] = w ? { regex: U, parser: w } : P.replace(/^\[|\]$/g, "");
      }
      return function(h) {
        for (var g = {}, u = 0, l = 0; u < O; u += 1) {
          var b = W[u];
          if (typeof b == "string")
            l += b.length;
          else {
            var o = b.regex, Y = b.parser, m = h.slice(l), Z = o.exec(m)[0];
            Y.call(g, Z), h = h.replace(Z, "");
          }
        }
        return function(j) {
          var B = j.afternoon;
          if (B !== void 0) {
            var k = j.hours;
            B ? k < 12 && (j.hours += 12) : k === 12 && (j.hours = 0), delete j.afternoon;
          }
        }(g), g;
      };
    }
    return function(T, _, I) {
      I.p.customParseFormat = true, T && T.parseTwoDigitYear && (y = T.parseTwoDigitYear);
      var W = _.prototype, O = W.parse;
      W.parse = function(V) {
        var P = V.date, C = V.utc, U = V.args;
        this.$u = C;
        var w = U[1];
        if (typeof w == "string") {
          var h = U[2] === true, g = U[3] === true, u = h || g, l = U[2];
          g && (l = U[2]), c = this.$locale(), !h && l && (c = I.Ls[l]), this.$d = function(m, Z, j) {
            try {
              if (["x", "X"].indexOf(Z) > -1)
                return new Date((Z === "X" ? 1e3 : 1) * m);
              var B = z(Z)(m), k = B.year, A = B.month, F = B.day, L = B.hours, H = B.minutes, $ = B.seconds, q = B.milliseconds, ht = B.zone, G = /* @__PURE__ */ new Date(), M = F || (k || A ? 1 : G.getDate()), S = k || G.getFullYear(), E = 0;
              k && !A || (E = A > 0 ? A - 1 : G.getMonth());
              var d = L || 0, X = H || 0, N = $ || 0, Q = q || 0;
              return ht ? new Date(Date.UTC(S, E, M, d, X, N, Q + 60 * ht.offset * 1e3)) : j ? new Date(Date.UTC(S, E, M, d, X, N, Q)) : new Date(S, E, M, d, X, N, Q);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(P, w, C), this.init(), l && l !== true && (this.$L = this.locale(l).$L), u && P != this.format(w) && (this.$d = /* @__PURE__ */ new Date("")), c = {};
        } else if (w instanceof Array)
          for (var b = w.length, o = 1; o <= b; o += 1) {
            U[1] = w[o - 1];
            var Y = I.apply(this, U);
            if (Y.isValid()) {
              this.$d = Y.$d, this.$L = Y.$L, this.init();
              break;
            }
            o === b && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, V);
      };
    };
  });
})(Na);
var Wa = Me;
var we = {};
var za = {
  get exports() {
    return we;
  },
  set exports(t2) {
    we = t2;
  }
};
(function(t2, e) {
  (function(r, n) {
    t2.exports = n();
  })(Do, function() {
    return function(r, n) {
      var i = n.prototype, a = i.format;
      i.format = function(s) {
        var c = this, y = this.$locale();
        if (!this.isValid())
          return a.bind(this)(s);
        var f = this.$utils(), x = (s || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(p) {
          switch (p) {
            case "Q":
              return Math.ceil((c.$M + 1) / 3);
            case "Do":
              return y.ordinal(c.$D);
            case "gggg":
              return c.weekYear();
            case "GGGG":
              return c.isoWeekYear();
            case "wo":
              return y.ordinal(c.week(), "W");
            case "w":
            case "ww":
              return f.s(c.week(), p === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return f.s(c.isoWeek(), p === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return f.s(String(c.$H === 0 ? 24 : c.$H), p === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(c.$d.getTime() / 1e3);
            case "x":
              return c.$d.getTime();
            case "z":
              return "[" + c.offsetName() + "]";
            case "zzz":
              return "[" + c.offsetName("long") + "]";
            default:
              return p;
          }
        });
        return a.bind(this)(x);
      };
    };
  });
})(za);
var Oa = we;
No.extend(Ia);
No.extend(Wa);
No.extend(Oa);
var st = "";
var We = "";
var ze;
var Oe = "";
var Et = [];
var It = [];
var He = {};
var Pe = [];
var te = [];
var _t = "";
var Ve = "";
var Xn = ["active", "done", "crit", "milestone"];
var Re = [];
var Nt = false;
var Be = false;
var De = 0;
var Ha = function(t2, e, r) {
  vs.parseDirective(this, t2, e, r);
};
var Pa = function() {
  Pe = [], te = [], _t = "", Re = [], Vt = 0, Se = void 0, Rt = void 0, K = [], st = "", We = "", Ve = "", ze = void 0, Oe = "", Et = [], It = [], Nt = false, Be = false, De = 0, He = {}, bo();
};
var Va = function(t2) {
  We = t2;
};
var Ra = function() {
  return We;
};
var Ba = function(t2) {
  ze = t2;
};
var Za = function() {
  return ze;
};
var ja = function(t2) {
  Oe = t2;
};
var qa = function() {
  return Oe;
};
var Xa = function(t2) {
  st = t2;
};
var Ga = function() {
  Nt = true;
};
var $a = function() {
  return Nt;
};
var Qa = function() {
  Be = true;
};
var Ja = function() {
  return Be;
};
var Ka = function(t2) {
  Ve = t2;
};
var ts = function() {
  return Ve;
};
var es = function() {
  return st;
};
var ns = function(t2) {
  Et = t2.toLowerCase().split(/[\s,]+/);
};
var rs = function() {
  return Et;
};
var is = function(t2) {
  It = t2.toLowerCase().split(/[\s,]+/);
};
var as = function() {
  return It;
};
var ss = function() {
  return He;
};
var os = function(t2) {
  _t = t2, Pe.push(t2);
};
var cs = function() {
  return Pe;
};
var us = function() {
  let t2 = hn();
  const e = 10;
  let r = 0;
  for (; !t2 && r < e; )
    t2 = hn(), r++;
  return te = K, te;
};
var Gn = function(t2, e, r, n) {
  return n.includes(t2.format(e.trim())) ? false : t2.isoWeekday() >= 6 && r.includes("weekends") || r.includes(t2.format("dddd").toLowerCase()) ? true : r.includes(t2.format(e.trim()));
};
var $n = function(t2, e, r, n) {
  if (!r.length || t2.manualEndTime)
    return;
  let i;
  t2.startTime instanceof Date ? i = No(t2.startTime) : i = No(t2.startTime, e, true), i = i.add(1, "d");
  let a;
  t2.endTime instanceof Date ? a = No(t2.endTime) : a = No(t2.endTime, e, true);
  const [s, c] = ls(
    i,
    a,
    e,
    r,
    n
  );
  t2.endTime = s.toDate(), t2.renderEndTime = c;
};
var ls = function(t2, e, r, n, i) {
  let a = false, s = null;
  for (; t2 <= e; )
    a || (s = e.toDate()), a = Gn(t2, r, n, i), a && (e = e.add(1, "d")), t2 = t2.add(1, "d");
  return [e, s];
};
var Ce = function(t2, e, r) {
  r = r.trim();
  const i = /^after\s+([\d\w- ]+)/.exec(r.trim());
  if (i !== null) {
    let s = null;
    if (i[1].split(" ").forEach(function(c) {
      let y = At2(c);
      y !== void 0 && (s ? y.endTime > s.endTime && (s = y) : s = y);
    }), s)
      return s.endTime;
    {
      const c = /* @__PURE__ */ new Date();
      return c.setHours(0, 0, 0, 0), c;
    }
  }
  let a = No(r, e.trim(), true);
  if (a.isValid())
    return a.toDate();
  {
    et.debug("Invalid date:" + r), et.debug("With date format:" + e.trim());
    const s = new Date(r);
    if (s === void 0 || isNaN(s.getTime()))
      throw new Error("Invalid date:" + r);
    return s;
  }
};
var Qn = function(t2) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t2.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
};
var Jn = function(t2, e, r, n = false) {
  r = r.trim();
  let i = No(r, e.trim(), true);
  if (i.isValid())
    return n && (i = i.add(1, "d")), i.toDate();
  let a = No(t2);
  const [s, c] = Qn(r);
  if (!Number.isNaN(s)) {
    const y = a.add(s, c);
    y.isValid() && (a = y);
  }
  return a.toDate();
};
var Vt = 0;
var xt = function(t2) {
  return t2 === void 0 ? (Vt = Vt + 1, "task" + Vt) : t2;
};
var fs = function(t2, e) {
  let r;
  e.substr(0, 1) === ":" ? r = e.substr(1, e.length) : r = e;
  const n = r.split(","), i = {};
  nr(n, i, Xn);
  for (let s = 0; s < n.length; s++)
    n[s] = n[s].trim();
  let a = "";
  switch (n.length) {
    case 1:
      i.id = xt(), i.startTime = t2.endTime, a = n[0];
      break;
    case 2:
      i.id = xt(), i.startTime = Ce(void 0, st, n[0]), a = n[1];
      break;
    case 3:
      i.id = xt(n[0]), i.startTime = Ce(void 0, st, n[1]), a = n[2];
      break;
  }
  return a && (i.endTime = Jn(i.startTime, st, a, Nt), i.manualEndTime = No(a, "YYYY-MM-DD", true).isValid(), $n(i, st, It, Et)), i;
};
var hs = function(t2, e) {
  let r;
  e.substr(0, 1) === ":" ? r = e.substr(1, e.length) : r = e;
  const n = r.split(","), i = {};
  nr(n, i, Xn);
  for (let a = 0; a < n.length; a++)
    n[a] = n[a].trim();
  switch (n.length) {
    case 1:
      i.id = xt(), i.startTime = {
        type: "prevTaskEnd",
        id: t2
      }, i.endTime = {
        data: n[0]
      };
      break;
    case 2:
      i.id = xt(), i.startTime = {
        type: "getStartDate",
        startData: n[0]
      }, i.endTime = {
        data: n[1]
      };
      break;
    case 3:
      i.id = xt(n[0]), i.startTime = {
        type: "getStartDate",
        startData: n[1]
      }, i.endTime = {
        data: n[2]
      };
      break;
  }
  return i;
};
var Se;
var Rt;
var K = [];
var Kn = {};
var ms = function(t2, e) {
  const r = {
    section: _t,
    type: _t,
    processed: false,
    manualEndTime: false,
    renderEndTime: null,
    raw: { data: e },
    task: t2,
    classes: []
  }, n = hs(Rt, e);
  r.raw.startTime = n.startTime, r.raw.endTime = n.endTime, r.id = n.id, r.prevTaskId = Rt, r.active = n.active, r.done = n.done, r.crit = n.crit, r.milestone = n.milestone, r.order = De, De++;
  const i = K.push(r);
  Rt = r.id, Kn[r.id] = i - 1;
};
var At2 = function(t2) {
  const e = Kn[t2];
  return K[e];
};
var ds = function(t2, e) {
  const r = {
    section: _t,
    type: _t,
    description: t2,
    task: t2,
    classes: []
  }, n = fs(Se, e);
  r.startTime = n.startTime, r.endTime = n.endTime, r.id = n.id, r.active = n.active, r.done = n.done, r.crit = n.crit, r.milestone = n.milestone, Se = r, te.push(r);
};
var hn = function() {
  const t2 = function(r) {
    const n = K[r];
    let i = "";
    switch (K[r].raw.startTime.type) {
      case "prevTaskEnd": {
        const a = At2(n.prevTaskId);
        n.startTime = a.endTime;
        break;
      }
      case "getStartDate":
        i = Ce(void 0, st, K[r].raw.startTime.startData), i && (K[r].startTime = i);
        break;
    }
    return K[r].startTime && (K[r].endTime = Jn(
      K[r].startTime,
      st,
      K[r].raw.endTime.data,
      Nt
    ), K[r].endTime && (K[r].processed = true, K[r].manualEndTime = No(
      K[r].raw.endTime.data,
      "YYYY-MM-DD",
      true
    ).isValid(), $n(K[r], st, It, Et))), K[r].processed;
  };
  let e = true;
  for (const [r, n] of K.entries())
    t2(r), e = e && n.processed;
  return e;
};
var gs = function(t2, e) {
  let r = e;
  po().securityLevel !== "loose" && (r = Gi(e)), t2.split(",").forEach(function(n) {
    At2(n) !== void 0 && (er(n, () => {
      window.open(r, "_self");
    }), He[n] = r);
  }), tr(t2, "clickable");
};
var tr = function(t2, e) {
  t2.split(",").forEach(function(r) {
    let n = At2(r);
    n !== void 0 && n.classes.push(e);
  });
};
var ys = function(t2, e, r) {
  if (po().securityLevel !== "loose" || e === void 0)
    return;
  let n = [];
  if (typeof r == "string") {
    n = r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let a = 0; a < n.length; a++) {
      let s = n[a].trim();
      s.charAt(0) === '"' && s.charAt(s.length - 1) === '"' && (s = s.substr(1, s.length - 2)), n[a] = s;
    }
  }
  n.length === 0 && n.push(t2), At2(t2) !== void 0 && er(t2, () => {
    _s.runFunc(e, ...n);
  });
};
var er = function(t2, e) {
  Re.push(
    function() {
      const r = document.querySelector(`[id="${t2}"]`);
      r !== null && r.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const r = document.querySelector(`[id="${t2}-text"]`);
      r !== null && r.addEventListener("click", function() {
        e();
      });
    }
  );
};
var ps = function(t2, e, r) {
  t2.split(",").forEach(function(n) {
    ys(n, e, r);
  }), tr(t2, "clickable");
};
var ks = function(t2) {
  Re.forEach(function(e) {
    e(t2);
  });
};
var vs2 = {
  parseDirective: Ha,
  getConfig: () => po().gantt,
  clear: Pa,
  setDateFormat: Xa,
  getDateFormat: es,
  enableInclusiveEndDates: Ga,
  endDatesAreInclusive: $a,
  enableTopAxis: Qa,
  topAxisEnabled: Ja,
  setAxisFormat: Va,
  getAxisFormat: Ra,
  setTickInterval: Ba,
  getTickInterval: Za,
  setTodayMarker: ja,
  getTodayMarker: qa,
  setAccTitle: _o,
  getAccTitle: xo,
  setDiagramTitle: So,
  getDiagramTitle: Bo,
  setDisplayMode: Ka,
  getDisplayMode: ts,
  setAccDescription: To,
  getAccDescription: ko,
  addSection: os,
  getSections: cs,
  getTasks: us,
  addTask: ms,
  findTaskById: At2,
  addTaskOrg: ds,
  setIncludes: ns,
  getIncludes: rs,
  setExcludes: is,
  getExcludes: as,
  setClickEvent: ps,
  setLink: gs,
  getLinks: ss,
  bindFunctions: ks,
  parseDuration: Qn,
  isInvalidDate: Gn
};
function nr(t2, e, r) {
  let n = true;
  for (; n; )
    n = false, r.forEach(function(i) {
      const a = "^\\s*" + i + "\\s*$", s = new RegExp(a);
      t2[0].match(s) && (e[i] = true, t2.shift(1), n = true);
    });
}
var Ts = function() {
  et.debug("Something is calling, setConf, remove the call");
};
var xs = (t2, e) => {
  let r = [...t2].map(() => -1 / 0), n = [...t2].sort((a, s) => a.startTime - s.startTime || a.order - s.order), i = 0;
  for (const a of n)
    for (let s = 0; s < r.length; s++)
      if (a.startTime >= r[s]) {
        r[s] = a.endTime, a.order = s + e, s > i && (i = s);
        break;
      }
  return i;
};
var ct;
var bs = function(t2, e, r, n) {
  const i = po().gantt, a = po().securityLevel;
  let s;
  a === "sandbox" && (s = yh("#i" + e));
  const c = a === "sandbox" ? yh(s.nodes()[0].contentDocument.body) : yh("body"), y = a === "sandbox" ? s.nodes()[0].contentDocument : document, f = y.getElementById(e);
  ct = f.parentElement.offsetWidth, ct === void 0 && (ct = 1200), i.useWidth !== void 0 && (ct = i.useWidth);
  const x = n.db.getTasks();
  let p = [];
  for (const w of x)
    p.push(w.type);
  p = U(p);
  const v = {};
  let D = 2 * i.topPadding;
  if (n.db.getDisplayMode() === "compact" || i.displayMode === "compact") {
    const w = {};
    for (const g of x)
      w[g.section] === void 0 ? w[g.section] = [g] : w[g.section].push(g);
    let h = 0;
    for (const g of Object.keys(w)) {
      const u = xs(w[g], h) + 1;
      h += u, D += u * (i.barHeight + i.barGap), v[g] = u;
    }
  } else {
    D += x.length * (i.barHeight + i.barGap);
    for (const w of p)
      v[w] = x.filter((h) => h.type === w).length;
  }
  f.setAttribute("viewBox", "0 0 " + ct + " " + D);
  const z = c.select(`[id="${e}"]`), T = Ua().domain([
    Sr(x, function(w) {
      return w.startTime;
    }),
    Cr2(x, function(w) {
      return w.endTime;
    })
  ]).rangeRound([0, ct - i.leftPadding - i.rightPadding]);
  function _(w, h) {
    const g = w.startTime, u = h.startTime;
    let l = 0;
    return g > u ? l = 1 : g < u && (l = -1), l;
  }
  x.sort(_), I(x, ct, D), Zt(z, D, ct, i.useMaxWidth), z.append("text").text(n.db.getDiagramTitle()).attr("x", ct / 2).attr("y", i.titleTopMargin).attr("class", "titleText");
  function I(w, h, g) {
    const u = i.barHeight, l = u + i.barGap, b = i.topPadding, o = i.leftPadding, Y = Un().domain([0, p.length]).range(["#00B9FA", "#F95002"]).interpolate(Xr2);
    O(
      l,
      b,
      o,
      h,
      g,
      w,
      n.db.getExcludes(),
      n.db.getIncludes()
    ), V(o, b, h, g), W(w, l, b, o, u, Y, h), P(l, b), C(o, b, h, g);
  }
  function W(w, h, g, u, l, b, o) {
    const m = [...new Set(w.map((k) => k.order))].map((k) => w.find((A) => A.order === k));
    z.append("g").selectAll("rect").data(m).enter().append("rect").attr("x", 0).attr("y", function(k, A) {
      return A = k.order, A * h + g - 2;
    }).attr("width", function() {
      return o - i.rightPadding / 2;
    }).attr("height", h).attr("class", function(k) {
      for (const [A, F] of p.entries())
        if (k.type === F)
          return "section section" + A % i.numberSectionStyles;
      return "section section0";
    });
    const Z = z.append("g").selectAll("rect").data(w).enter(), j = n.db.getLinks();
    if (Z.append("rect").attr("id", function(k) {
      return k.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(k) {
      return k.milestone ? T(k.startTime) + u + 0.5 * (T(k.endTime) - T(k.startTime)) - 0.5 * l : T(k.startTime) + u;
    }).attr("y", function(k, A) {
      return A = k.order, A * h + g;
    }).attr("width", function(k) {
      return k.milestone ? l : T(k.renderEndTime || k.endTime) - T(k.startTime);
    }).attr("height", l).attr("transform-origin", function(k, A) {
      return A = k.order, (T(k.startTime) + u + 0.5 * (T(k.endTime) - T(k.startTime))).toString() + "px " + (A * h + g + 0.5 * l).toString() + "px";
    }).attr("class", function(k) {
      const A = "task";
      let F = "";
      k.classes.length > 0 && (F = k.classes.join(" "));
      let L = 0;
      for (const [$, q] of p.entries())
        k.type === q && (L = $ % i.numberSectionStyles);
      let H = "";
      return k.active ? k.crit ? H += " activeCrit" : H = " active" : k.done ? k.crit ? H = " doneCrit" : H = " done" : k.crit && (H += " crit"), H.length === 0 && (H = " task"), k.milestone && (H = " milestone " + H), H += L, H += " " + F, A + H;
    }), Z.append("text").attr("id", function(k) {
      return k.id + "-text";
    }).text(function(k) {
      return k.task;
    }).attr("font-size", i.fontSize).attr("x", function(k) {
      let A = T(k.startTime), F = T(k.renderEndTime || k.endTime);
      k.milestone && (A += 0.5 * (T(k.endTime) - T(k.startTime)) - 0.5 * l), k.milestone && (F = A + l);
      const L = this.getBBox().width;
      return L > F - A ? F + L + 1.5 * i.leftPadding > o ? A + u - 5 : F + u + 5 : (F - A) / 2 + A + u;
    }).attr("y", function(k, A) {
      return A = k.order, A * h + i.barHeight / 2 + (i.fontSize / 2 - 2) + g;
    }).attr("text-height", l).attr("class", function(k) {
      const A = T(k.startTime);
      let F = T(k.endTime);
      k.milestone && (F = A + l);
      const L = this.getBBox().width;
      let H = "";
      k.classes.length > 0 && (H = k.classes.join(" "));
      let $ = 0;
      for (const [ht, G] of p.entries())
        k.type === G && ($ = ht % i.numberSectionStyles);
      let q = "";
      return k.active && (k.crit ? q = "activeCritText" + $ : q = "activeText" + $), k.done ? k.crit ? q = q + " doneCritText" + $ : q = q + " doneText" + $ : k.crit && (q = q + " critText" + $), k.milestone && (q += " milestoneText"), L > F - A ? F + L + 1.5 * i.leftPadding > o ? H + " taskTextOutsideLeft taskTextOutside" + $ + " " + q : H + " taskTextOutsideRight taskTextOutside" + $ + " " + q + " width-" + L : H + " taskText taskText" + $ + " " + q + " width-" + L;
    }), po().securityLevel === "sandbox") {
      let k;
      k = yh("#i" + e);
      const A = k.nodes()[0].contentDocument;
      Z.filter(function(F) {
        return j[F.id] !== void 0;
      }).each(function(F) {
        var L = A.querySelector("#" + F.id), H = A.querySelector("#" + F.id + "-text");
        const $ = L.parentNode;
        var q = A.createElement("a");
        q.setAttribute("xlink:href", j[F.id]), q.setAttribute("target", "_top"), $.appendChild(q), q.appendChild(L), q.appendChild(H);
      });
    }
  }
  function O(w, h, g, u, l, b, o, Y) {
    const m = b.reduce(
      (L, { startTime: H }) => L ? Math.min(L, H) : H,
      0
    ), Z = b.reduce((L, { endTime: H }) => L ? Math.max(L, H) : H, 0), j = n.db.getDateFormat();
    if (!m || !Z)
      return;
    const B = [];
    let k = null, A = No(m);
    for (; A.valueOf() <= Z; )
      n.db.isInvalidDate(A, j, o, Y) ? k ? k.end = A : k = {
        start: A,
        end: A
      } : k && (B.push(k), k = null), A = A.add(1, "d");
    z.append("g").selectAll("rect").data(B).enter().append("rect").attr("id", function(L) {
      return "exclude-" + L.start.format("YYYY-MM-DD");
    }).attr("x", function(L) {
      return T(L.start) + g;
    }).attr("y", i.gridLineStartPadding).attr("width", function(L) {
      const H = L.end.add(1, "day");
      return T(H) - T(L.start);
    }).attr("height", l - h - i.gridLineStartPadding).attr("transform-origin", function(L, H) {
      return (T(L.start) + g + 0.5 * (T(L.end) - T(L.start))).toString() + "px " + (H * w + 0.5 * l).toString() + "px";
    }).attr("class", "exclude-range");
  }
  function V(w, h, g, u) {
    let l = Ir(T).tickSize(-u + h + i.gridLineStartPadding).tickFormat(Kt(n.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
    const o = /^([1-9]\d*)(minute|hour|day|week|month)$/.exec(
      n.db.getTickInterval() || i.tickInterval
    );
    if (o !== null) {
      const Y = o[1];
      switch (o[2]) {
        case "minute":
          l.ticks(Xt.every(Y));
          break;
        case "hour":
          l.ticks(Gt.every(Y));
          break;
        case "day":
          l.ticks(Mt.every(Y));
          break;
        case "week":
          l.ticks(wt.every(Y));
          break;
        case "month":
          l.ticks(Qt.every(Y));
          break;
      }
    }
    if (z.append("g").attr("class", "grid").attr("transform", "translate(" + w + ", " + (u - 50) + ")").call(l).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), n.db.topAxisEnabled() || i.topAxis) {
      let Y = Er(T).tickSize(-u + h + i.gridLineStartPadding).tickFormat(Kt(n.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
      if (o !== null) {
        const m = o[1];
        switch (o[2]) {
          case "minute":
            Y.ticks(Xt.every(m));
            break;
          case "hour":
            Y.ticks(Gt.every(m));
            break;
          case "day":
            Y.ticks(Mt.every(m));
            break;
          case "week":
            Y.ticks(wt.every(m));
            break;
          case "month":
            Y.ticks(Qt.every(m));
            break;
        }
      }
      z.append("g").attr("class", "grid").attr("transform", "translate(" + w + ", " + h + ")").call(Y).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  function P(w, h) {
    let g = 0;
    const u = Object.keys(v).map((l) => [l, v[l]]);
    z.append("g").selectAll("text").data(u).enter().append(function(l) {
      const b = l[0].split(_h.lineBreakRegex), o = -(b.length - 1) / 2, Y = y.createElementNS("http://www.w3.org/2000/svg", "text");
      Y.setAttribute("dy", o + "em");
      for (const [m, Z] of b.entries()) {
        const j = y.createElementNS("http://www.w3.org/2000/svg", "tspan");
        j.setAttribute("alignment-baseline", "central"), j.setAttribute("x", "10"), m > 0 && j.setAttribute("dy", "1em"), j.textContent = Z, Y.appendChild(j);
      }
      return Y;
    }).attr("x", 10).attr("y", function(l, b) {
      if (b > 0)
        for (let o = 0; o < b; o++)
          return g += u[b - 1][1], l[1] * w / 2 + g * w + h;
      else
        return l[1] * w / 2 + h;
    }).attr("font-size", i.sectionFontSize).attr("class", function(l) {
      for (const [b, o] of p.entries())
        if (l[0] === o)
          return "sectionTitle sectionTitle" + b % i.numberSectionStyles;
      return "sectionTitle";
    });
  }
  function C(w, h, g, u) {
    const l = n.db.getTodayMarker();
    if (l === "off")
      return;
    const b = z.append("g").attr("class", "today"), o = /* @__PURE__ */ new Date(), Y = b.append("line");
    Y.attr("x1", T(o) + w).attr("x2", T(o) + w).attr("y1", i.titleTopMargin).attr("y2", u - i.titleTopMargin).attr("class", "today"), l !== "" && Y.attr("style", l.replace(/,/g, ";"));
  }
  function U(w) {
    const h = {}, g = [];
    for (let u = 0, l = w.length; u < l; ++u)
      Object.prototype.hasOwnProperty.call(h, w[u]) || (h[w[u]] = true, g.push(w[u]));
    return g;
  }
};
var Ms = {
  setConf: Ts,
  draw: bs
};
var ws = (t2) => `
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t2.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t2.sectionBkgColor};
  }

  .section2 {
    fill: ${t2.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t2.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t2.titleColor};
  }

  .sectionTitle1 {
    fill: ${t2.titleColor};
  }

  .sectionTitle2 {
    fill: ${t2.titleColor};
  }

  .sectionTitle3 {
    fill: ${t2.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t2.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t2.fontFamily};
      fill: ${t2.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t2.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t2.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t2.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t2.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t2.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t2.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t2.taskBkgColor};
    stroke: ${t2.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t2.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t2.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t2.activeTaskBkgColor};
    stroke: ${t2.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t2.doneTaskBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t2.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`;
var Ds = ws;
var Fs2 = {
  parser: La,
  db: vs2,
  renderer: Ms,
  styles: Ds
};
export {
  Fs2 as diagram
};
//# sourceMappingURL=ganttDiagram-6b6599ba-657RSCJP.js.map
