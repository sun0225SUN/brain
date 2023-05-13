import {
  C,
  E
} from "./chunk-6UPQCSNV.js";
import {
  Jo,
  Ni,
  Oi,
  Qo,
  Vo,
  Xo,
  Zo,
  es,
  is,
  mi,
  ns,
  rs,
  ts
} from "./chunk-SOC5YOGS.js";

// node_modules/.pnpm/mermaid@10.1.0/node_modules/mermaid/dist/arc-f7872e1e.js
function fn(l) {
  return l.innerRadius;
}
function cn(l) {
  return l.outerRadius;
}
function yn(l) {
  return l.startAngle;
}
function gn(l) {
  return l.endAngle;
}
function mn(l) {
  return l && l.padAngle;
}
function pn(l, x, D, q, h, v, W, r) {
  var s = D - l, n = q - x, m = W - h, i = r - v, u = i * s - m * n;
  if (!(u * u < Ni))
    return u = (m * (x - v) - i * (l - h)) / u, [l + u * s, x + u * n];
}
function H(l, x, D, q, h, v, W) {
  var r = l - D, s = x - q, n = (W ? v : -v) / es(r * r + s * s), m = n * s, i = -n * r, u = l + m, f = x + i, c = D + m, E2 = q + i, o = (u + c) / 2, I = (f + E2) / 2, p = c - u, g = E2 - f, R = p * p + g * g, K = h - v, P = u * E2 - c * f, Q = (g < 0 ? -1 : 1) * es(Zo(0, K * K * R - P * P)), S = (P * g - p * Q) / R, d = (-P * p - g * Q) / R, A = (P * g + p * Q) / R, T = (-P * p + g * Q) / R, e = S - o, a = d - I, X = A - o, Y = T - I;
  return e * e + a * a > X * X + Y * Y && (S = A, d = T), {
    cx: S,
    cy: d,
    x01: -m,
    y01: -i,
    x11: S * (h / K - 1),
    y11: d * (h / K - 1)
  };
}
function hn() {
  var l = fn, x = cn, D = E(0), q = null, h = yn, v = gn, W = mn, r = null;
  function s() {
    var n, m, i = +l.apply(this, arguments), u = +x.apply(this, arguments), f = h.apply(this, arguments) - Oi, c = v.apply(this, arguments) - Oi, E2 = Vo(c - f), o = c > f;
    if (r || (r = n = C()), u < i && (m = u, u = i, i = m), !(u > Ni))
      r.moveTo(0, 0);
    else if (E2 > ns - Ni)
      r.moveTo(u * Jo(f), u * is(f)), r.arc(0, 0, u, f, c, !o), i > Ni && (r.moveTo(i * Jo(c), i * is(c)), r.arc(0, 0, i, c, f, o));
    else {
      var I = f, p = c, g = f, R = c, K = E2, P = E2, Q = W.apply(this, arguments) / 2, S = Q > Ni && (q ? +q.apply(this, arguments) : es(i * i + u * u)), d = Qo(Vo(u - i) / 2, +D.apply(this, arguments)), A = d, T = d, e, a;
      if (S > Ni) {
        var X = rs(S / i * is(Q)), Y = rs(S / u * is(Q));
        (K -= X * 2) > Ni ? (X *= o ? 1 : -1, g += X, R -= X) : (K = 0, g = R = (f + c) / 2), (P -= Y * 2) > Ni ? (Y *= o ? 1 : -1, I += Y, p -= Y) : (P = 0, I = p = (f + c) / 2);
      }
      var $ = u * Jo(I), j = u * is(I), B = i * Jo(R), C2 = i * is(R);
      if (d > Ni) {
        var F = u * Jo(p), G = u * is(p), J = i * Jo(g), L = i * is(g), w;
        if (E2 < mi && (w = pn($, j, J, L, F, G, B, C2))) {
          var M = $ - w[0], N = j - w[1], U = F - w[0], k = G - w[1], _ = 1 / is(ts((M * U + N * k) / (es(M * M + N * N) * es(U * U + k * k))) / 2), nn = es(w[0] * w[0] + w[1] * w[1]);
          A = Qo(d, (i - nn) / (_ - 1)), T = Qo(d, (u - nn) / (_ + 1));
        }
      }
      P > Ni ? T > Ni ? (e = H(J, L, $, j, u, T, o), a = H(F, G, B, C2, u, T, o), r.moveTo(e.cx + e.x01, e.cy + e.y01), T < d ? r.arc(e.cx, e.cy, T, Xo(e.y01, e.x01), Xo(a.y01, a.x01), !o) : (r.arc(e.cx, e.cy, T, Xo(e.y01, e.x01), Xo(e.y11, e.x11), !o), r.arc(0, 0, u, Xo(e.cy + e.y11, e.cx + e.x11), Xo(a.cy + a.y11, a.cx + a.x11), !o), r.arc(a.cx, a.cy, T, Xo(a.y11, a.x11), Xo(a.y01, a.x01), !o))) : (r.moveTo($, j), r.arc(0, 0, u, I, p, !o)) : r.moveTo($, j), !(i > Ni) || !(K > Ni) ? r.lineTo(B, C2) : A > Ni ? (e = H(B, C2, F, G, i, -A, o), a = H($, j, J, L, i, -A, o), r.lineTo(e.cx + e.x01, e.cy + e.y01), A < d ? r.arc(e.cx, e.cy, A, Xo(e.y01, e.x01), Xo(a.y01, a.x01), !o) : (r.arc(e.cx, e.cy, A, Xo(e.y01, e.x01), Xo(e.y11, e.x11), !o), r.arc(0, 0, i, Xo(e.cy + e.y11, e.cx + e.x11), Xo(a.cy + a.y11, a.cx + a.x11), o), r.arc(a.cx, a.cy, A, Xo(a.y11, a.x11), Xo(a.y01, a.x01), !o))) : r.arc(0, 0, i, R, g, o);
    }
    if (r.closePath(), n)
      return r = null, n + "" || null;
  }
  return s.centroid = function() {
    var n = (+l.apply(this, arguments) + +x.apply(this, arguments)) / 2, m = (+h.apply(this, arguments) + +v.apply(this, arguments)) / 2 - mi / 2;
    return [Jo(m) * n, is(m) * n];
  }, s.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : E(+n), s) : l;
  }, s.outerRadius = function(n) {
    return arguments.length ? (x = typeof n == "function" ? n : E(+n), s) : x;
  }, s.cornerRadius = function(n) {
    return arguments.length ? (D = typeof n == "function" ? n : E(+n), s) : D;
  }, s.padRadius = function(n) {
    return arguments.length ? (q = n == null ? null : typeof n == "function" ? n : E(+n), s) : q;
  }, s.startAngle = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : E(+n), s) : h;
  }, s.endAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : E(+n), s) : v;
  }, s.padAngle = function(n) {
    return arguments.length ? (W = typeof n == "function" ? n : E(+n), s) : W;
  }, s.context = function(n) {
    return arguments.length ? (r = n ?? null, s) : r;
  }, s;
}

export {
  hn
};
//# sourceMappingURL=chunk-VSAGQD43.js.map
