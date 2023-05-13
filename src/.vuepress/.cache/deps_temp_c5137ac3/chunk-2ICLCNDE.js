import {
  Ce,
  Ir,
  Nr,
  Rr,
  Ti,
  W,
  _s,
  cs,
  dr,
  fr,
  fs,
  go,
  gr,
  hr,
  ls,
  nr,
  os,
  ss,
  ur
} from "./chunk-SOC5YOGS.js";
import {
  Ah,
  Ch,
  Eh,
  Fh,
  Jt,
  Lh,
  Mh,
  Mi,
  Ol,
  Pi,
  et,
  po,
  vh,
  wh,
  yh
} from "./chunk-MBTD2RCT.js";

// node_modules/.pnpm/mermaid@10.1.0/node_modules/mermaid/dist/mermaidAPI-67f627de.js
var Nt = "comm";
var Xt = "rule";
var Ht = "decl";
var Ue = "@import";
var Ge = "@keyframes";
var Ne = Math.abs;
var ft = String.fromCharCode;
function Yt(t) {
  return t.trim();
}
function nt(t, e, r) {
  return t.replace(e, r);
}
function Xe(t, e) {
  return t.indexOf(e);
}
function W2(t, e) {
  return t.charCodeAt(e) | 0;
}
function z(t, e, r) {
  return t.slice(e, r);
}
function x(t) {
  return t.length;
}
function qt(t) {
  return t.length;
}
function U(t, e) {
  return e.push(t), t;
}
var K = 1;
var _ = 1;
var Wt = 0;
var $ = 0;
var m = 0;
var V = "";
function pt(t, e, r, a, n, o, d) {
  return { value: t, root: e, parent: r, type: a, props: n, children: o, line: K, column: _, length: d, return: "" };
}
function He() {
  return m;
}
function Ye() {
  return m = $ > 0 ? W2(V, --$) : 0, _--, m === 10 && (_ = 1, K--), m;
}
function v() {
  return m = $ < Wt ? W2(V, $++) : 0, _++, m === 10 && (_ = 1, K++), m;
}
function k() {
  return W2(V, $);
}
function G() {
  return $;
}
function J(t, e) {
  return z(V, t, e);
}
function st(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function qe(t) {
  return K = _ = 1, Wt = x(V = t), $ = 0, [];
}
function We(t) {
  return V = "", t;
}
function tt(t) {
  return Yt(J($ - 1, ot(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Ke(t) {
  for (; (m = k()) && m < 33; )
    v();
  return st(t) > 2 || st(m) > 3 ? "" : " ";
}
function Je(t, e) {
  for (; --e && v() && !(m < 48 || m > 102 || m > 57 && m < 65 || m > 70 && m < 97); )
    ;
  return J(t, G() + (e < 6 && k() == 32 && v() == 32));
}
function ot(t) {
  for (; v(); )
    switch (m) {
      case t:
        return $;
      case 34:
      case 39:
        t !== 34 && t !== 39 && ot(m);
        break;
      case 40:
        t === 41 && ot(t);
        break;
      case 92:
        v();
        break;
    }
  return $;
}
function Qe(t, e) {
  for (; v() && t + m !== 47 + 10; )
    if (t + m === 42 + 42 && k() === 47)
      break;
  return "/*" + J(e, $ - 1) + "*" + ft(t === 47 ? t : v());
}
function Ze(t) {
  for (; !st(k()); )
    v();
  return J(t, $);
}
function tr(t) {
  return We(N("", null, null, null, [""], t = qe(t), 0, [0], t));
}
function N(t, e, r, a, n, o, d, p, w) {
  for (var y = 0, s = 0, l = d, E = 0, j = 0, u = 0, h = 1, L = 1, g = 1, f = 0, T = "", F = n, S = o, b = a, i = T; L; )
    switch (u = f, f = v()) {
      case 40:
        if (u != 108 && W2(i, l - 1) == 58) {
          Xe(i += nt(tt(f), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        i += tt(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        i += Ke(u);
        break;
      case 92:
        i += Je(G() - 1, 7);
        continue;
      case 47:
        switch (k()) {
          case 42:
          case 47:
            U(er(Qe(v(), G()), e, r), w);
            break;
          default:
            i += "/";
        }
        break;
      case 123 * h:
        p[y++] = x(i) * g;
      case 125 * h:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            L = 0;
          case 59 + s:
            j > 0 && x(i) - l && U(j > 32 ? Dt(i + ";", a, r, l - 1) : Dt(nt(i, " ", "") + ";", a, r, l - 2), w);
            break;
          case 59:
            i += ";";
          default:
            if (U(b = St(i, e, r, y, s, n, p, T, F = [], S = [], l), o), f === 123)
              if (s === 0)
                N(i, e, b, b, F, o, l, p, S);
              else
                switch (E) {
                  case 100:
                  case 109:
                  case 115:
                    N(t, b, b, a && U(St(t, b, b, 0, 0, n, p, T, n, F = [], l), S), n, S, l, p, a ? F : S);
                    break;
                  default:
                    N(i, b, b, b, [""], S, 0, p, S);
                }
        }
        y = s = j = 0, h = g = 1, T = i = "", l = d;
        break;
      case 58:
        l = 1 + x(i), j = u;
      default:
        if (h < 1) {
          if (f == 123)
            --h;
          else if (f == 125 && h++ == 0 && Ye() == 125)
            continue;
        }
        switch (i += ft(f), f * h) {
          case 38:
            g = s > 0 ? 1 : (i += "\f", -1);
            break;
          case 44:
            p[y++] = (x(i) - 1) * g, g = 1;
            break;
          case 64:
            k() === 45 && (i += tt(v())), E = k(), s = l = x(T = i += Ze(G())), f++;
            break;
          case 45:
            u === 45 && x(i) == 2 && (h = 0);
        }
    }
  return o;
}
function St(t, e, r, a, n, o, d, p, w, y, s) {
  for (var l = n - 1, E = n === 0 ? o : [""], j = qt(E), u = 0, h = 0, L = 0; u < a; ++u)
    for (var g = 0, f = z(t, l + 1, l = Ne(h = d[u])), T = t; g < j; ++g)
      (T = Yt(h > 0 ? E[g] + " " + f : nt(f, /&\f/g, E[g]))) && (w[L++] = T);
  return pt(t, e, r, n === 0 ? Xt : p, w, y, s);
}
function er(t, e, r) {
  return pt(t, e, r, Nt, ft(He()), z(t, 2, -2), 0);
}
function Dt(t, e, r, a) {
  return pt(t, e, r, Ht, z(t, 0, a), z(t, a + 1, -1), a);
}
function ct(t, e) {
  for (var r = "", a = qt(t), n = 0; n < a; n++)
    r += e(t[n], n, t, e) || "";
  return r;
}
function rr(t, e, r, a) {
  switch (t.type) {
    case Ue:
    case Ht:
      return t.return = t.return || t.value;
    case Nt:
      return "";
    case Ge:
      return t.return = t.value + "{" + ct(t.children, a) + "}";
    case Xt:
      t.value = t.props.join(",");
  }
  return x(r = ct(t.children, a)) ? t.return = t.value + "{" + r + "}" : "";
}
var At = "10.1.0";
var Kt = "c4";
var ar = (t) => t.match(/^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/) !== null;
var nr2 = async () => {
  const { diagram: t } = await import("./c4Diagram-d4b415eb-UHEKKFVF.js");
  return { id: Kt, diagram: t };
};
var sr = {
  id: Kt,
  detector: ar,
  loader: nr2
};
var or = sr;
var Jt2 = "flowchart";
var cr = (t, e) => {
  var r, a;
  return ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" || ((a = e == null ? void 0 : e.flowchart) == null ? void 0 : a.defaultRenderer) === "elk" ? false : t.match(/^\s*graph/) !== null;
};
var ir = async () => {
  const { diagram: t } = await import("./flowDiagram-7d05970f-C4ISLWCG.js");
  return { id: Jt2, diagram: t };
};
var lr = {
  id: Jt2,
  detector: cr,
  loader: ir
};
var dr2 = lr;
var Qt = "flowchart-v2";
var ur2 = (t, e) => {
  var r, a, n;
  return ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-d3" || ((a = e == null ? void 0 : e.flowchart) == null ? void 0 : a.defaultRenderer) === "elk" ? false : t.match(/^\s*graph/) !== null && ((n = e == null ? void 0 : e.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? true : t.match(/^\s*flowchart/) !== null;
};
var mr = async () => {
  const { diagram: t } = await import("./flowDiagram-v2-6bfe9e0e-GRSJEE3J.js");
  return { id: Qt, diagram: t };
};
var fr2 = {
  id: Qt,
  detector: ur2,
  loader: mr
};
var pr = fr2;
var Zt = "er";
var hr2 = (t) => t.match(/^\s*erDiagram/) !== null;
var gr2 = async () => {
  const { diagram: t } = await import("./erDiagram-215b0341-4DTEJRYR.js");
  return { id: Zt, diagram: t };
};
var yr = {
  id: Zt,
  detector: hr2,
  loader: gr2
};
var br = yr;
var te = "gitGraph";
var wr = (t) => t.match(/^\s*gitGraph/) !== null;
var $r = async () => {
  const { diagram: t } = await import("./gitGraphDiagram-603d2a33-6TNJ6RRL.js");
  return { id: te, diagram: t };
};
var vr = {
  id: te,
  detector: wr,
  loader: $r
};
var Tr = vr;
var ee = "gantt";
var Sr = (t) => t.match(/^\s*gantt/) !== null;
var Dr = async () => {
  const { diagram: t } = await import("./ganttDiagram-6b6599ba-657RSCJP.js");
  return { id: ee, diagram: t };
};
var Ar = {
  id: ee,
  detector: Sr,
  loader: Dr
};
var Er = Ar;
var re = "info";
var jr = (t) => t.match(/^\s*info/) !== null;
var xr = async () => {
  const { diagram: t } = await import("./infoDiagram-388842fb-EGFEMLBP.js");
  return { id: re, diagram: t };
};
var Cr = {
  id: re,
  detector: jr,
  loader: xr
};
var Ir2 = Cr;
var ae = "pie";
var Mr = (t) => t.match(/^\s*pie/) !== null;
var kr = async () => {
  const { diagram: t } = await import("./pieDiagram-ffb7c1e5-QMRHX35I.js");
  return { id: ae, diagram: t };
};
var Lr = {
  id: ae,
  detector: Mr,
  loader: kr
};
var Fr = Lr;
var ne = "requirement";
var _r = (t) => t.match(/^\s*requirement(Diagram)?/) !== null;
var Rr2 = async () => {
  const { diagram: t } = await import("./requirementDiagram-51a5ec78-SFXZQYGV.js");
  return { id: ne, diagram: t };
};
var Or = {
  id: ne,
  detector: _r,
  loader: Rr2
};
var Vr = Or;
var se = "sequence";
var Pr = (t) => t.match(/^\s*sequenceDiagram/) !== null;
var zr = async () => {
  const { diagram: t } = await import("./sequenceDiagram-3b765acc-IHWWRV76.js");
  return { id: se, diagram: t };
};
var Br = {
  id: se,
  detector: Pr,
  loader: zr
};
var Ur = Br;
var oe = "class";
var Gr = (t, e) => {
  var r;
  return ((r = e == null ? void 0 : e.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? false : t.match(/^\s*classDiagram/) !== null;
};
var Nr2 = async () => {
  const { diagram: t } = await import("./classDiagram-7b4b2ee6-PIUGGAFT.js");
  return { id: oe, diagram: t };
};
var Xr = {
  id: oe,
  detector: Gr,
  loader: Nr2
};
var Hr = Xr;
var ce = "classDiagram";
var Yr = (t, e) => {
  var r;
  return t.match(/^\s*classDiagram/) !== null && ((r = e == null ? void 0 : e.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? true : t.match(/^\s*classDiagram-v2/) !== null;
};
var qr = async () => {
  const { diagram: t } = await import("./classDiagram-v2-556a8c31-URVMM2A6.js");
  return { id: ce, diagram: t };
};
var Wr = {
  id: ce,
  detector: Yr,
  loader: qr
};
var Kr = Wr;
var ie = "state";
var Jr = (t, e) => {
  var r;
  return ((r = e == null ? void 0 : e.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? false : t.match(/^\s*stateDiagram/) !== null;
};
var Qr = async () => {
  const { diagram: t } = await import("./stateDiagram-d14e810e-MJ2DFHRF.js");
  return { id: ie, diagram: t };
};
var Zr = {
  id: ie,
  detector: Jr,
  loader: Qr
};
var ta = Zr;
var le = "stateDiagram";
var ea = (t, e) => {
  var r, a;
  return !!(t.match(/^\s*stateDiagram-v2/) !== null || t.match(/^\s*stateDiagram/) && ((r = e == null ? void 0 : e.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" || t.match(/^\s*stateDiagram/) && ((a = e == null ? void 0 : e.state) == null ? void 0 : a.defaultRenderer) === "dagre-wrapper");
};
var ra = async () => {
  const { diagram: t } = await import("./stateDiagram-v2-c3d22c51-GSJDWFMY.js");
  return { id: le, diagram: t };
};
var aa = {
  id: le,
  detector: ea,
  loader: ra
};
var na = aa;
var de = "journey";
var sa = (t) => t.match(/^\s*journey/) !== null;
var oa = async () => {
  const { diagram: t } = await import("./journeyDiagram-420adb66-GOHXMXZI.js");
  return { id: de, diagram: t };
};
var ca = {
  id: de,
  detector: sa,
  loader: oa
};
var ia = ca;
var la = () => "";
var da = la;
var ua = function() {
};
var ma = (t, e, r) => {
  try {
    et.debug(`Renering svg for syntax error
`);
    const a = yh("#" + e), n = a.append("g");
    n.append("path").attr("class", "error-icon").attr(
      "d",
      "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
    ), n.append("path").attr("class", "error-icon").attr(
      "d",
      "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
    ), n.append("path").attr("class", "error-icon").attr(
      "d",
      "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
    ), n.append("path").attr("class", "error-icon").attr(
      "d",
      "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
    ), n.append("path").attr("class", "error-icon").attr(
      "d",
      "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
    ), n.append("path").attr("class", "error-icon").attr(
      "d",
      "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
    ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text("mermaid version " + r), a.attr("height", 100), a.attr("width", 500), a.attr("viewBox", "768 0 912 512");
  } catch (a) {
    et.error("Error while rendering info diagram"), et.error(fs(a));
  }
};
var ue = {
  setConf: ua,
  draw: ma
};
var fa = {
  db: {
    clear: () => {
    }
  },
  styles: da,
  renderer: ue,
  parser: {
    parser: { yy: {} },
    parse: () => {
    }
  },
  init: () => {
  }
};
var pa = fa;
var me = "flowchart-elk";
var ha = (t, e) => {
  var r;
  return (
    // If diagram explicitly states flowchart-elk
    !!(t.match(/^\s*flowchart-elk/) || // If a flowchart/graph diagram has their default renderer set to elk
    t.match(/^\s*flowchart|graph/) && ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk")
  );
};
var ga = async () => {
  const { diagram: t } = await import("./flowchart-elk-definition-55d9b0bb-DI3VFO26.js");
  return { id: me, diagram: t };
};
var ya = {
  id: me,
  detector: ha,
  loader: ga
};
var ba = ya;
var fe = "timeline";
var wa = (t) => t.match(/^\s*timeline/) !== null;
var $a = async () => {
  const { diagram: t } = await import("./timeline-definition-f3a4334c-W5UL4TJY.js");
  return { id: fe, diagram: t };
};
var va = {
  id: fe,
  detector: wa,
  loader: $a
};
var Ta = va;
var pe = "mindmap";
var Sa = (t) => t.match(/^\s*mindmap/) !== null;
var Da = async () => {
  const { diagram: t } = await import("./mindmap-definition-b90592f0-NSQZZBPP.js");
  return { id: pe, diagram: t };
};
var Aa = {
  id: pe,
  detector: Sa,
  loader: Da
};
var Ea = Aa;
var Et = false;
var ht = () => {
  Et || (Et = true, hr("error", pa, (t) => t.toLowerCase().trim() === "error"), hr(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {},
      // should never be used
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (t) => t.toLowerCase().trimStart().startsWith("---")
  ), ls(
    or,
    Kr,
    Hr,
    br,
    Er,
    Ir2,
    Fr,
    Vr,
    Ur,
    ba,
    pr,
    dr2,
    Ea,
    Ta,
    Tr,
    na,
    ta,
    ia
  ));
};
var ja = (t) => t.trimStart().replace(/^\s*%%(?!{)[^\n]+\n?/gm, "");
var he = class {
  constructor(e) {
    var o, d;
    this.text = e, this.type = "graph", this.text += `
`;
    const r = po();
    try {
      this.type = dr(e, r);
    } catch (p) {
      this.type = "error", this.detectError = p;
    }
    const a = ur(this.type);
    et.debug("Type " + this.type), this.db = a.db, (d = (o = this.db).clear) == null || d.call(o), this.renderer = a.renderer, this.parser = a.parser;
    const n = this.parser.parse.bind(this.parser);
    this.parser.parse = (p) => n(ja(os(p, this.db))), this.parser.parser.yy = this.db, a.init && (a.init(r), et.info("Initialized diagram " + this.type, r)), this.parse();
  }
  parse() {
    var e, r;
    if (this.detectError)
      throw this.detectError;
    (r = (e = this.db).clear) == null || r.call(e), this.parser.parse(this.text);
  }
  async render(e, r) {
    await this.renderer.draw(this.text, e, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
};
var gt = async (t) => {
  const e = dr(t, po());
  try {
    ur(e);
  } catch {
    const a = cs(e);
    if (!a)
      throw new fr(`Diagram ${e} not found.`);
    const { id: n, diagram: o } = await a();
    hr(n, o);
  }
  return new he(t);
};
var it = [];
var $s = (t) => {
  it.push(t);
};
var xa = () => {
  it.forEach((t) => {
    t();
  }), it = [];
};
var Ca = Object.prototype;
function ge(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || Ca;
  return t === r;
}
function Ia(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var Ma = Ia(Object.keys, Object);
var ka = Ma;
var La = Object.prototype;
var Fa = La.hasOwnProperty;
function _a(t) {
  if (!ge(t))
    return ka(t);
  var e = [];
  for (var r in Object(t))
    Fa.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var Ra = Ce(Ti, "DataView");
var lt = Ra;
var Oa = Ce(Ti, "Promise");
var dt = Oa;
var Va = Ce(Ti, "Set");
var ut = Va;
var Pa = Ce(Ti, "WeakMap");
var mt = Pa;
var jt = "[object Map]";
var za = "[object Object]";
var xt = "[object Promise]";
var Ct = "[object Set]";
var It = "[object WeakMap]";
var Mt = "[object DataView]";
var Ba = Rr(lt);
var Ua = Rr(go);
var Ga = Rr(dt);
var Na = Rr(ut);
var Xa = Rr(mt);
var I = Nr;
(lt && I(new lt(new ArrayBuffer(1))) != Mt || go && I(new go()) != jt || dt && I(dt.resolve()) != xt || ut && I(new ut()) != Ct || mt && I(new mt()) != It) && (I = function(t) {
  var e = Nr(t), r = e == za ? t.constructor : void 0, a = r ? Rr(r) : "";
  if (a)
    switch (a) {
      case Ba:
        return Mt;
      case Ua:
        return jt;
      case Ga:
        return xt;
      case Na:
        return Ct;
      case Xa:
        return It;
    }
  return e;
});
var Ha = I;
function yt(t) {
  return t != null && typeof t == "object";
}
var Ya = "[object Arguments]";
function kt(t) {
  return yt(t) && Nr(t) == Ya;
}
var ye = Object.prototype;
var qa = ye.hasOwnProperty;
var Wa = ye.propertyIsEnumerable;
var Ka = kt(function() {
  return arguments;
}()) ? kt : function(t) {
  return yt(t) && qa.call(t, "callee") && !Wa.call(t, "callee");
};
var Ja = Ka;
var Qa = Array.isArray;
var Za = Qa;
var tn = 9007199254740991;
function be(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= tn;
}
function en(t) {
  return t != null && be(t.length) && !Ir(t);
}
function rn() {
  return false;
}
var we = typeof exports == "object" && exports && !exports.nodeType && exports;
var Lt = we && typeof module == "object" && module && !module.nodeType && module;
var an = Lt && Lt.exports === we;
var Ft = an ? Ti.Buffer : void 0;
var nn = Ft ? Ft.isBuffer : void 0;
var sn = nn || rn;
var on = sn;
var cn = "[object Arguments]";
var ln = "[object Array]";
var dn = "[object Boolean]";
var un = "[object Date]";
var mn = "[object Error]";
var fn = "[object Function]";
var pn = "[object Map]";
var hn = "[object Number]";
var gn = "[object Object]";
var yn = "[object RegExp]";
var bn = "[object Set]";
var wn = "[object String]";
var $n = "[object WeakMap]";
var vn = "[object ArrayBuffer]";
var Tn = "[object DataView]";
var Sn = "[object Float32Array]";
var Dn = "[object Float64Array]";
var An = "[object Int8Array]";
var En = "[object Int16Array]";
var jn = "[object Int32Array]";
var xn = "[object Uint8Array]";
var Cn = "[object Uint8ClampedArray]";
var In = "[object Uint16Array]";
var Mn = "[object Uint32Array]";
var c = {};
c[Sn] = c[Dn] = c[An] = c[En] = c[jn] = c[xn] = c[Cn] = c[In] = c[Mn] = true;
c[cn] = c[ln] = c[vn] = c[dn] = c[Tn] = c[un] = c[mn] = c[fn] = c[pn] = c[hn] = c[gn] = c[yn] = c[bn] = c[wn] = c[$n] = false;
function kn(t) {
  return yt(t) && be(t.length) && !!c[Nr(t)];
}
function Ln(t) {
  return function(e) {
    return t(e);
  };
}
var $e = typeof exports == "object" && exports && !exports.nodeType && exports;
var P = $e && typeof module == "object" && module && !module.nodeType && module;
var Fn = P && P.exports === $e;
var et2 = Fn && gr.process;
var _n = function() {
  try {
    var t = P && P.require && P.require("util").types;
    return t || et2 && et2.binding && et2.binding("util");
  } catch {
  }
}();
var _t = _n;
var Rt = _t && _t.isTypedArray;
var Rn = Rt ? Ln(Rt) : kn;
var On = Rn;
var Vn = "[object Map]";
var Pn = "[object Set]";
var zn = Object.prototype;
var Bn = zn.hasOwnProperty;
function X(t) {
  if (t == null)
    return true;
  if (en(t) && (Za(t) || typeof t == "string" || typeof t.splice == "function" || on(t) || On(t) || Ja(t)))
    return !t.length;
  var e = Ha(t);
  if (e == Vn || e == Pn)
    return !t.size;
  if (ge(t))
    return !_a(t).length;
  for (var r in t)
    if (Bn.call(t, r))
      return false;
  return true;
}
var Un = "graphics-document document";
function Gn(t, e) {
  t.attr("role", Un), X(e) || t.attr("aria-roledescription", e);
}
function Nn(t, e, r, a) {
  if (t.insert !== void 0)
    if (e || r) {
      if (r) {
        const n = "chart-desc-" + a;
        t.attr("aria-describedby", n), t.insert("desc", ":first-child").attr("id", n).text(r);
      }
      if (e) {
        const n = "chart-title-" + a;
        t.attr("aria-labelledby", n), t.insert("title", ":first-child").attr("id", n).text(e);
      }
    } else
      return;
}
var ve = [
  "graph",
  "flowchart",
  "flowchart-v2",
  "flowchart-elk",
  "stateDiagram",
  "stateDiagram-v2"
];
var Xn = 5e4;
var Hn = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
var Yn = "sandbox";
var qn = "loose";
var Wn = "http://www.w3.org/2000/svg";
var Kn = "http://www.w3.org/1999/xlink";
var Jn = "http://www.w3.org/1999/xhtml";
var Qn = "100%";
var Zn = "100%";
var ts = "border:0;margin:0;";
var es = "margin:0";
var rs = "allow-top-navigation-by-user-activation allow-popups";
var as = 'The "iframe" tag is not supported by your browser.';
var ns = ["foreignobject"];
var ss2 = ["dominant-baseline"];
async function os2(t, e) {
  ht();
  try {
    (await gt(t)).parse();
  } catch (r) {
    if (e != null && e.suppressErrors)
      return false;
    throw r;
  }
  return true;
}
var cs2 = function(t) {
  let e = t;
  return e = e.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), e = e.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), e = e.replace(/#\w+;/g, function(r) {
    const a = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(a) ? "ﬂ°°" + a + "¶ß" : "ﬂ°" + a + "¶ß";
  }), e;
};
var is = function(t) {
  let e = t;
  return e = e.replace(/ﬂ°°/g, "&#"), e = e.replace(/ﬂ°/g, "&"), e = e.replace(/¶ß/g, ";"), e;
};
var Ot = (t, e, r = []) => `
.${t} ${e} { ${r.join(" !important; ")} !important; }`;
var ls2 = (t, e, r = {}) => {
  var n;
  let a = "";
  if (t.themeCSS !== void 0 && (a += `
${t.themeCSS}`), t.fontFamily !== void 0 && (a += `
:root { --mermaid-font-family: ${t.fontFamily}}`), t.altFontFamily !== void 0 && (a += `
:root { --mermaid-alt-font-family: ${t.altFontFamily}}`), !X(r) && ve.includes(e)) {
    const w = t.htmlLabels || ((n = t.flowchart) == null ? void 0 : n.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const y in r) {
      const s = r[y];
      X(s.styles) || w.forEach((l) => {
        a += Ot(s.id, l, s.styles);
      }), X(s.textStyles) || (a += Ot(s.id, "tspan", s.textStyles));
    }
  }
  return a;
};
var ds = (t, e, r, a) => {
  const n = ls2(t, e, r), o = ss(e, n, t.themeVariables);
  return ct(tr(`${a}{${o}}`), rr);
};
var us = (t = "", e, r) => {
  let a = t;
  return !r && !e && (a = a.replace(/marker-end="url\(.*?#/g, 'marker-end="url(#')), a = is(a), a = a.replace(/<br>/g, "<br/>"), a;
};
var ms = (t = "", e) => {
  const r = e ? e.viewBox.baseVal.height + "px" : Zn, a = btoa('<body style="' + es + '">' + t + "</body>");
  return `<iframe style="width:${Qn};height:${r};${ts}" src="data:text/html;base64,${a}" sandbox="${rs}">
  ${as}
</iframe>`;
};
var Vt = (t, e, r, a, n) => {
  const o = t.append("div");
  o.attr("id", r), a && o.attr("style", a);
  const d = o.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", Wn);
  return n && d.attr("xmlns:xlink", n), d.append("g"), t;
};
function Pt(t, e) {
  return t.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
var fs2 = (t, e, r, a) => {
  var n, o, d;
  (n = t.getElementById(e)) == null || n.remove(), (o = t.getElementById(r)) == null || o.remove(), (d = t.getElementById(a)) == null || d.remove();
};
var ps = async function(t, e, r) {
  var bt, wt, $t, vt;
  ht(), Mh();
  const a = _s.detectInit(e);
  a && (W(a), Eh(a));
  const n = po();
  et.debug(n), e.length > ((n == null ? void 0 : n.maxTextSize) ?? Xn) && (e = Hn), e = e.replace(/\r\n?/g, `
`);
  const o = "#" + t, d = "i" + t, p = "#" + d, w = "d" + t, y = "#" + w;
  let s = yh("body");
  const l = n.securityLevel === Yn, E = n.securityLevel === qn, j = n.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), l) {
      const D = Pt(yh(r), d);
      s = yh(D.nodes()[0].contentDocument.body), s.node().style.margin = 0;
    } else
      s = yh(r);
    Vt(s, t, w, `font-family: ${j}`, Kn);
  } else {
    if (fs2(document, t, w, d), l) {
      const D = Pt(yh("body"), d);
      s = yh(D.nodes()[0].contentDocument.body), s.node().style.margin = 0;
    } else
      s = yh("body");
    Vt(s, t, w);
  }
  e = cs2(e);
  let u, h;
  try {
    u = await gt(e);
  } catch (D) {
    u = new he("error"), h = D;
  }
  const L = s.select(y).node(), g = u.type, f = L.firstChild, T = f.firstChild, F = ve.includes(g) ? u.renderer.getClasses(e, u) : {}, S = ds(
    n,
    g,
    // @ts-ignore convert renderer to TS.
    F,
    o
  ), b = document.createElement("style");
  b.innerHTML = S, f.insertBefore(b, T);
  try {
    await u.renderer.draw(e, t, At, u);
  } catch (D) {
    throw ue.draw(e, t, At), D;
  }
  const i = s.select(`${y} svg`), Te = (wt = (bt = u.db).getAccTitle) == null ? void 0 : wt.call(bt), Se = (vt = ($t = u.db).getAccDescription) == null ? void 0 : vt.call($t);
  gs(g, i, Te, Se), s.select(`[id="${t}"]`).selectAll("foreignobject > *").attr("xmlns", Jn);
  let C = s.select(y).node().innerHTML;
  if (et.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), C = us(C, l, Ol(n.arrowMarkerAbsolute)), l) {
    const D = s.select(y + " svg").node();
    C = ms(C, D);
  } else
    E || (C = Mi.sanitize(C, {
      ADD_TAGS: ns,
      ADD_ATTR: ss2
    }));
  if (xa(), h)
    throw h;
  const Q = yh(l ? p : y).node();
  return Q && "remove" in Q && Q.remove(), {
    svg: C,
    bindFunctions: u.db.bindFunctions
  };
};
function hs(t = {}) {
  var r;
  t != null && t.fontFamily && !((r = t.themeVariables) != null && r.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), wh(t), t != null && t.theme && t.theme in Jt ? t.themeVariables = Jt[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = Jt.default.getThemeVariables(t.themeVariables));
  const e = typeof t == "object" ? vh(t) : Fh();
  Ch(e.logLevel), ht();
}
function gs(t, e, r, a) {
  Gn(e, t), Nn(e, r, a, e.attr("id"));
}
var vs = Object.freeze({
  render: ps,
  parse: os2,
  parseDirective: nr,
  getDiagramFromText: gt,
  initialize: hs,
  getConfig: po,
  setConfig: Ah,
  getSiteConfig: Fh,
  updateSiteConfig: Lh,
  reset: () => {
    Mh();
  },
  globalReset: () => {
    Mh(Pi);
  },
  defaultConfig: Pi
});
Ch(po().logLevel);
Mh(po());

export {
  $s,
  ge,
  Ia,
  _a,
  ut,
  Ha,
  yt,
  Ja,
  Za,
  be,
  en,
  on,
  Ln,
  _t,
  On,
  X,
  is,
  vs
};
//# sourceMappingURL=chunk-2ICLCNDE.js.map
