import {
  wt
} from "./chunk-4FJDI662.js";
import {
  Je
} from "./chunk-DECDELRC.js";
import {
  a
} from "./chunk-3LWM2WY3.js";
import {
  A,
  Xt
} from "./chunk-DQKTJ2K2.js";
import {
  Ir,
  No,
  Qt,
  _s,
  jo,
  ze
} from "./chunk-SOC5YOGS.js";
import {
  Ol,
  _h,
  et,
  po,
  yh
} from "./chunk-MBTD2RCT.js";

// node_modules/.pnpm/mermaid@10.1.0/node_modules/mermaid/dist/styles-3ce90e7a.js
function se(e, l) {
  return !!e.children(l).length;
}
function ie(e) {
  return L(e.v) + ":" + L(e.w) + ":" + L(e.name);
}
var J = /:/g;
function L(e) {
  return e ? String(e).replace(J, "\\:") : "";
}
function K(e, l) {
  l && e.attr("style", l);
}
function ce(e, l, c) {
  l && e.attr("class", l).attr("class", c + " " + e.attr("class"));
}
function de(e, l) {
  var c = l.graph();
  if (Xt(c)) {
    var a2 = c.transition;
    if (Ir(a2))
      return a2(e);
  }
  return e;
}
function Q(e, l) {
  var c = e.append("foreignObject").attr("width", "100000"), a2 = c.append("xhtml:div");
  a2.attr("xmlns", "http://www.w3.org/1999/xhtml");
  var i = l.label;
  switch (typeof i) {
    case "function":
      a2.insert(i);
      break;
    case "object":
      a2.insert(function() {
        return i;
      });
      break;
    default:
      a2.html(i);
  }
  K(a2, l.labelStyle), a2.style("display", "inline-block"), a2.style("white-space", "nowrap");
  var d = a2.node().getBoundingClientRect();
  return c.attr("width", d.width).attr("height", d.height), c;
}
var G = {};
var Y = function(e) {
  const l = Object.keys(e);
  for (const c of l)
    G[c] = e[c];
};
var z = function(e, l, c, a2, i, d) {
  const w = a2.select(`[id="${c}"]`);
  Object.keys(e).forEach(function(f) {
    const r = e[f];
    let k = "default";
    r.classes.length > 0 && (k = r.classes.join(" ")), k = k + " flowchart-label";
    const h = jo(r.styles);
    let t = r.text !== void 0 ? r.text : r.id, s;
    if (et.info("vertex", r, r.labelType), r.labelType === "markdown")
      et.info("vertex", r, r.labelType);
    else if (Ol(po().flowchart.htmlLabels)) {
      const m = {
        label: t.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (g) => `<i class='${g.replace(":", " ")}'></i>`
        )
      };
      s = Q(w, m).node(), s.parentNode.removeChild(s);
    } else {
      const m = i.createElementNS("http://www.w3.org/2000/svg", "text");
      m.setAttribute("style", h.labelStyle.replace("color:", "fill:"));
      const g = t.split(_h.lineBreakRegex);
      for (const T of g) {
        const v = i.createElementNS("http://www.w3.org/2000/svg", "tspan");
        v.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), v.setAttribute("dy", "1em"), v.setAttribute("x", "1"), v.textContent = T, m.appendChild(v);
      }
      s = m;
    }
    let p = 0, n = "";
    switch (r.type) {
      case "round":
        p = 5, n = "rect";
        break;
      case "square":
        n = "rect";
        break;
      case "diamond":
        n = "question";
        break;
      case "hexagon":
        n = "hexagon";
        break;
      case "odd":
        n = "rect_left_inv_arrow";
        break;
      case "lean_right":
        n = "lean_right";
        break;
      case "lean_left":
        n = "lean_left";
        break;
      case "trapezoid":
        n = "trapezoid";
        break;
      case "inv_trapezoid":
        n = "inv_trapezoid";
        break;
      case "odd_right":
        n = "rect_left_inv_arrow";
        break;
      case "circle":
        n = "circle";
        break;
      case "ellipse":
        n = "ellipse";
        break;
      case "stadium":
        n = "stadium";
        break;
      case "subroutine":
        n = "subroutine";
        break;
      case "cylinder":
        n = "cylinder";
        break;
      case "group":
        n = "rect";
        break;
      case "doublecircle":
        n = "doublecircle";
        break;
      default:
        n = "rect";
    }
    l.setNode(r.id, {
      labelStyle: h.labelStyle,
      shape: n,
      labelText: t,
      labelType: r.labelType,
      rx: p,
      ry: p,
      class: k,
      style: h.style,
      id: r.id,
      link: r.link,
      linkTarget: r.linkTarget,
      tooltip: d.db.getTooltip(r.id) || "",
      domId: d.db.lookUpDomId(r.id),
      haveCallback: r.haveCallback,
      width: r.type === "group" ? 500 : void 0,
      dir: r.dir,
      type: r.type,
      props: r.props,
      padding: po().flowchart.padding
    }), et.info("setNode", {
      labelStyle: h.labelStyle,
      labelType: r.labelType,
      shape: n,
      labelText: t,
      rx: p,
      ry: p,
      class: k,
      style: h.style,
      id: r.id,
      domId: d.db.lookUpDomId(r.id),
      width: r.type === "group" ? 500 : void 0,
      type: r.type,
      dir: r.dir,
      props: r.props,
      padding: po().flowchart.padding
    });
  });
};
var P = function(e, l, c) {
  et.info("abc78 edges = ", e);
  let a2 = 0, i = {}, d, w;
  if (e.defaultStyle !== void 0) {
    const o = jo(e.defaultStyle);
    d = o.style, w = o.labelStyle;
  }
  e.forEach(function(o) {
    a2++;
    var f = "L-" + o.start + "-" + o.end;
    i[f] === void 0 ? (i[f] = 0, et.info("abc78 new entry", f, i[f])) : (i[f]++, et.info("abc78 new entry", f, i[f]));
    let r = f + "-" + i[f];
    et.info("abc78 new link id to be used is", f, r, i[f]);
    var k = "LS-" + o.start, h = "LE-" + o.end;
    const t = { style: "", labelStyle: "" };
    switch (t.minlen = o.length || 1, o.type === "arrow_open" ? t.arrowhead = "none" : t.arrowhead = "normal", t.arrowTypeStart = "arrow_open", t.arrowTypeEnd = "arrow_open", o.type) {
      case "double_arrow_cross":
        t.arrowTypeStart = "arrow_cross";
      case "arrow_cross":
        t.arrowTypeEnd = "arrow_cross";
        break;
      case "double_arrow_point":
        t.arrowTypeStart = "arrow_point";
      case "arrow_point":
        t.arrowTypeEnd = "arrow_point";
        break;
      case "double_arrow_circle":
        t.arrowTypeStart = "arrow_circle";
      case "arrow_circle":
        t.arrowTypeEnd = "arrow_circle";
        break;
    }
    let s = "", p = "";
    switch (o.stroke) {
      case "normal":
        s = "fill:none;", d !== void 0 && (s = d), w !== void 0 && (p = w), t.thickness = "normal", t.pattern = "solid";
        break;
      case "dotted":
        t.thickness = "normal", t.pattern = "dotted", t.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
        break;
      case "thick":
        t.thickness = "thick", t.pattern = "solid", t.style = "stroke-width: 3.5px;fill:none;";
        break;
      case "invisible":
        t.thickness = "invisible", t.pattern = "solid", t.style = "stroke-width: 0;fill:none;";
        break;
    }
    if (o.style !== void 0) {
      const n = jo(o.style);
      s = n.style, p = n.labelStyle;
    }
    t.style = t.style += s, t.labelStyle = t.labelStyle += p, o.interpolate !== void 0 ? t.curve = No(o.interpolate, ze) : e.defaultInterpolate !== void 0 ? t.curve = No(e.defaultInterpolate, ze) : t.curve = No(G.curve, ze), o.text === void 0 ? o.style !== void 0 && (t.arrowheadStyle = "fill: #333") : (t.arrowheadStyle = "fill: #333", t.labelpos = "c"), t.labelType = o.labelType, t.label = o.text.replace(_h.lineBreakRegex, `
`), o.style === void 0 && (t.style = t.style || "stroke: #333; stroke-width: 1.5px;fill:none;"), t.labelStyle = t.labelStyle.replace("color:", "fill:"), t.id = r, t.classes = "flowchart-link " + k + " " + h, l.setEdge(o.start, o.end, t, a2);
  });
};
var Z = function(e, l) {
  et.info("Extracting classes"), l.db.clear();
  try {
    return l.parse(e), l.db.getClasses();
  } catch {
    return;
  }
};
var j = function(e, l, c, a2) {
  et.info("Drawing flowchart"), a2.db.clear(), Je.setGen("gen-2"), a2.parser.parse(e);
  let i = a2.db.getDirection();
  i === void 0 && (i = "TD");
  const { securityLevel: d, flowchart: w } = po(), o = w.nodeSpacing || 50, f = w.rankSpacing || 50;
  let r;
  d === "sandbox" && (r = yh("#i" + l));
  const k = d === "sandbox" ? yh(r.nodes()[0].contentDocument.body) : yh("body"), h = d === "sandbox" ? r.nodes()[0].contentDocument : document, t = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: i,
    nodesep: o,
    ranksep: f,
    marginx: 0,
    marginy: 0
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let s;
  const p = a2.db.getSubGraphs();
  et.info("Subgraphs - ", p);
  for (let b = p.length - 1; b >= 0; b--)
    s = p[b], et.info("Subgraph - ", s), a2.db.addVertex(
      s.id,
      { text: s.title, type: s.labelType },
      "group",
      void 0,
      s.classes,
      s.dir
    );
  const n = a2.db.getVertices(), m = a2.db.getEdges();
  et.info("Edges", m);
  let g = 0;
  for (g = p.length - 1; g >= 0; g--) {
    s = p[g], a("cluster").append("text");
    for (let b = 0; b < s.nodes.length; b++)
      et.info("Setting up subgraphs", s.nodes[b], s.id), t.setParent(s.nodes[b], s.id);
  }
  z(n, t, l, k, h, a2), P(m, t);
  const T = k.select(`[id="${l}"]`), v = k.select("#" + l + " g");
  if (wt(v, t, ["point", "circle", "cross"], "flowchart", l), _s.insertTitle(T, "flowchartTitleText", w.titleTopMargin, a2.db.getDiagramTitle()), Qt(t, T, w.diagramPadding, w.useMaxWidth), a2.db.indexNodes("subGraph" + g), !w.htmlLabels) {
    const b = h.querySelectorAll('[id="' + l + '"] .edgeLabel .label');
    for (const x of b) {
      const S = x.getBBox(), y = h.createElementNS("http://www.w3.org/2000/svg", "rect");
      y.setAttribute("rx", 0), y.setAttribute("ry", 0), y.setAttribute("width", S.width), y.setAttribute("height", S.height), x.insertBefore(y, x.firstChild);
    }
  }
  Object.keys(n).forEach(function(b) {
    const x = n[b];
    if (x.link) {
      const S = yh("#" + l + ' [id="' + b + '"]');
      if (S) {
        const y = h.createElementNS("http://www.w3.org/2000/svg", "a");
        y.setAttributeNS("http://www.w3.org/2000/svg", "class", x.classes.join(" ")), y.setAttributeNS("http://www.w3.org/2000/svg", "href", x.link), y.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), d === "sandbox" ? y.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : x.linkTarget && y.setAttributeNS("http://www.w3.org/2000/svg", "target", x.linkTarget);
        const A2 = S.insert(function() {
          return y;
        }, ":first-child"), B = S.select(".label-container");
        B && A2.append(function() {
          return B.node();
        });
        const D = S.select(".label");
        D && A2.append(function() {
          return D.node();
        });
      }
    }
  });
};
var fe = {
  setConf: Y,
  addVertices: z,
  addEdges: P,
  getClasses: Z,
  draw: j
};
var O = (e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;
var pe = O;

export {
  se,
  ie,
  K,
  ce,
  de,
  Q,
  fe,
  pe
};
//# sourceMappingURL=chunk-D3L4QN4V.js.map
