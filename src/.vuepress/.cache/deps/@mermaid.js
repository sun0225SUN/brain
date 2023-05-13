import {
  vs
} from "./chunk-2ICLCNDE.js";
import {
  _s,
  as,
  dr,
  ls,
  us
} from "./chunk-SOC5YOGS.js";
import {
  et
} from "./chunk-MBTD2RCT.js";

// node_modules/.pnpm/mermaid@10.1.0/node_modules/mermaid/dist/mermaid.esm.min.mjs
function A(e) {
  for (var n = [], a = 1; a < arguments.length; a++)
    n[a - 1] = arguments[a];
  var t = Array.from(typeof e == "string" ? [e] : e);
  t[t.length - 1] = t[t.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var c = t.reduce(function(r, i) {
    var d = i.match(/\n([\t ]+|(?!\s).)/g);
    return d ? r.concat(d.map(function(h) {
      var f, l;
      return (l = (f = h.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && l !== void 0 ? l : 0;
    })) : r;
  }, []);
  if (c.length) {
    var g = new RegExp(`
[	 ]{` + Math.min.apply(Math, c) + "}", "g");
    t = t.map(function(r) {
      return r.replace(g, `
`);
    });
  }
  t[0] = t[0].replace(/^\r?\n/, "");
  var s = t[0];
  return n.forEach(function(r, i) {
    var d = s.match(/(?:^|\n)( *)$/), h = d ? d[1] : "", f = r;
    typeof r == "string" && r.includes(`
`) && (f = String(r).split(`
`).map(function(l, S) {
      return S === 0 ? l : "" + h + l;
    }).join(`
`)), s += f + t[i + 1];
  }), s;
}
var M = (e, n, a) => {
  et.warn(e), us(e) ? (a && a(e.str, e.hash), n.push({ ...e, message: e.str, error: e })) : (a && a(e), e instanceof Error && n.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
};
var v = async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await T(e);
  } catch (n) {
    if (us(n) && et.error(n.str), u.parseError && u.parseError(n), !e.suppressErrors)
      throw et.error("Use the suppressErrors option to suppress these errors"), n;
  }
};
var T = async function({ postRenderCallback: e, querySelector: n, nodes: a } = {
  querySelector: ".mermaid"
}) {
  const t = vs.getConfig();
  et.debug(`${e ? "" : "No "}Callback function found`);
  let c;
  if (a)
    c = a;
  else if (n)
    c = document.querySelectorAll(n);
  else
    throw new Error("Nodes and querySelector are both undefined");
  et.debug(`Found ${c.length} diagrams`), (t == null ? void 0 : t.startOnLoad) !== void 0 && (et.debug("Start On Load: " + (t == null ? void 0 : t.startOnLoad)), vs.updateSiteConfig({ startOnLoad: t == null ? void 0 : t.startOnLoad }));
  const g = new _s.initIdGenerator(t.deterministicIds, t.deterministicIDSeed);
  let s;
  const r = [];
  for (const i of Array.from(c)) {
    et.info("Rendering diagram: " + i.id);
    if (i.getAttribute("data-processed"))
      continue;
    i.setAttribute("data-processed", "true");
    const d = `mermaid-${g.next()}`;
    s = i.innerHTML, s = A(_s.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = _s.detectInit(s);
    h && et.debug("Detected early reinit: ", h);
    try {
      const { svg: f, bindFunctions: l } = await O(d, s, i);
      i.innerHTML = f, e && await e(d), l && l(i);
    } catch (f) {
      M(f, r, u.parseError);
    }
  }
  if (r.length > 0)
    throw r[0];
};
var L = function(e) {
  vs.initialize(e);
};
var C = async function(e, n, a) {
  et.warn("mermaid.init is deprecated. Please use run instead."), e && L(e);
  const t = { postRenderCallback: a, querySelector: ".mermaid" };
  typeof n == "string" ? t.querySelector = n : n && (n instanceof HTMLElement ? t.nodes = [n] : t.nodes = n), await v(t);
};
var I = async (e, {
  lazyLoad: n = true
} = {}) => {
  ls(...e), n === false && await as();
};
var b = function() {
  if (u.startOnLoad) {
    const { startOnLoad: e } = vs.getConfig();
    e && u.run().catch((n) => et.error("Mermaid failed to initialize", n));
  }
};
if (typeof document < "u") {
  window.addEventListener("load", b, false);
}
var $ = function(e) {
  u.parseError = e;
};
var p = [];
var w = false;
var x = async () => {
  if (!w) {
    for (w = true; p.length > 0; ) {
      const e = p.shift();
      if (e)
        try {
          await e();
        } catch (n) {
          et.error("Error executing queue", n);
        }
    }
    w = false;
  }
};
var z = async (e, n) => new Promise((a, t) => {
  const c = () => new Promise((g, s) => {
    vs.parse(e, n).then(
      (r) => {
        g(r), a(r);
      },
      (r) => {
        var i;
        et.error("Error parsing", r), (i = u.parseError) == null || i.call(u, r), s(r), t(r);
      }
    );
  });
  p.push(c), x().catch(t);
});
var O = (e, n, a) => new Promise((t, c) => {
  const g = () => new Promise((s, r) => {
    vs.render(e, n, a).then(
      (i) => {
        s(i), t(i);
      },
      (i) => {
        var d;
        et.error("Error parsing", i), (d = u.parseError) == null || d.call(u, i), r(i), c(i);
      }
    );
  });
  p.push(g), x().catch(c);
});
var u = {
  startOnLoad: true,
  mermaidAPI: vs,
  parse: z,
  render: O,
  init: C,
  run: v,
  registerExternalDiagrams: I,
  initialize: L,
  parseError: void 0,
  contentLoaded: b,
  setParseErrorHandler: $,
  detectType: dr
};
export {
  u as default
};
/*! Bundled license information:

mermaid/dist/mermaid.esm.min.mjs:
  (*! Check if previously processed *)
  (*!
   * Wait for document loaded before starting the execution
   *)
*/
//# sourceMappingURL=@mermaid.js.map
