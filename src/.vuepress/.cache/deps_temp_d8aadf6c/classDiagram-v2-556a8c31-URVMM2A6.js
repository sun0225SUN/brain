import {
  Bt,
  Tt,
  yt
} from "./chunk-W6RPHPGS.js";
import {
  wt
} from "./chunk-4FJDI662.js";
import "./chunk-HGLEOHWR.js";
import "./chunk-LKKYYXLD.js";
import "./chunk-5LGF6MMJ.js";
import {
  A
} from "./chunk-DQKTJ2K2.js";
import "./chunk-SM3LZOGE.js";
import "./chunk-YYFCVU34.js";
import "./chunk-6UPQCSNV.js";
import "./chunk-2ICLCNDE.js";
import {
  No,
  Qt,
  _s,
  jo,
  ze
} from "./chunk-SOC5YOGS.js";
import {
  _h,
  et,
  po,
  yh
} from "./chunk-MBTD2RCT.js";

// node_modules/.pnpm/mermaid@10.1.0/node_modules/mermaid/dist/classDiagram-v2-556a8c31.js
var E = (o) => _h.sanitizeText(o, po());
var S = {
  dividerMargin: 10,
  padding: 5,
  textHeight: 10,
  curve: void 0
};
var $ = function(o, l, b, a) {
  const e = Object.keys(o);
  et.info("keys:", e), et.info(o), e.forEach(function(s) {
    var y, f;
    const t = o[s];
    let i = "";
    t.cssClasses.length > 0 && (i = i + " " + t.cssClasses.join(" "));
    const n = { labelStyle: "", style: "" }, m = t.label ?? t.id, c = 0, u = "class_box", d = {
      labelStyle: n.labelStyle,
      shape: u,
      labelText: E(m),
      classData: t,
      rx: c,
      ry: c,
      class: i,
      style: n.style,
      id: t.id,
      domId: t.domId,
      tooltip: a.db.getTooltip(t.id) || "",
      haveCallback: t.haveCallback,
      link: t.link,
      width: t.type === "group" ? 500 : void 0,
      type: t.type,
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((y = po().flowchart) == null ? void 0 : y.padding) ?? ((f = po().class) == null ? void 0 : f.padding)
    };
    l.setNode(t.id, d), et.info("setNode", d);
  });
};
var q = function(o, l, b, a) {
  et.info(o), o.forEach(function(e, s) {
    var x, h;
    const t = e, i = "", n = { labelStyle: "", style: "" }, m = t.text, c = 0, u = "note", d = {
      labelStyle: n.labelStyle,
      shape: u,
      labelText: E(m),
      noteData: t,
      rx: c,
      ry: c,
      class: i,
      style: n.style,
      id: t.id,
      domId: t.id,
      tooltip: "",
      type: "note",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((x = po().flowchart) == null ? void 0 : x.padding) ?? ((h = po().class) == null ? void 0 : h.padding)
    };
    if (l.setNode(t.id, d), et.info("setNode", d), !t.class || !(t.class in a))
      return;
    const y = b + s, f = {
      id: `edgeNote${y}`,
      //Set relationship style and line type
      classes: "relation",
      pattern: "dotted",
      // Set link type for rendering
      arrowhead: "none",
      //Set edge extra labels
      startLabelRight: "",
      endLabelLeft: "",
      //Set relation arrow types
      arrowTypeStart: "none",
      arrowTypeEnd: "none",
      style: "fill:none",
      labelStyle: "",
      curve: No(S.curve, ze)
    };
    l.setEdge(t.id, t.class, f, y);
  });
};
var F = function(o, l) {
  const b = po().flowchart;
  let a = 0;
  o.forEach(function(e) {
    var t;
    a++;
    const s = {
      //Set relationship style and line type
      classes: "relation",
      pattern: e.relation.lineType == 1 ? "dashed" : "solid",
      id: "id" + a,
      // Set link type for rendering
      arrowhead: e.type === "arrow_open" ? "none" : "normal",
      //Set edge extra labels
      startLabelRight: e.relationTitle1 === "none" ? "" : e.relationTitle1,
      endLabelLeft: e.relationTitle2 === "none" ? "" : e.relationTitle2,
      //Set relation arrow types
      arrowTypeStart: L(e.relation.type1),
      arrowTypeEnd: L(e.relation.type2),
      style: "fill:none",
      labelStyle: "",
      curve: No(b == null ? void 0 : b.curve, ze)
    };
    if (et.info(s, e), e.style !== void 0) {
      const i = jo(e.style);
      s.style = i.style, s.labelStyle = i.labelStyle;
    }
    e.text = e.title, e.text === void 0 ? e.style !== void 0 && (s.arrowheadStyle = "fill: #333") : (s.arrowheadStyle = "fill: #333", s.labelpos = "c", ((t = po().flowchart) == null ? void 0 : t.htmlLabels) ?? po().htmlLabels ? (s.labelType = "html", s.label = '<span class="edgeLabel">' + e.text + "</span>") : (s.labelType = "text", s.label = e.text.replace(_h.lineBreakRegex, `
`), e.style === void 0 && (s.style = s.style || "stroke: #333; stroke-width: 1.5px;fill:none"), s.labelStyle = s.labelStyle.replace("color:", "fill:"))), l.setEdge(e.id1, e.id2, s, a);
  });
};
var H = function(o) {
  S = {
    ...S,
    ...o
  };
};
var P = function(o, l, b, a) {
  et.info("Drawing class - ", l);
  const e = po().flowchart ?? po().class, s = po().securityLevel;
  et.info("config:", e);
  const t = (e == null ? void 0 : e.nodeSpacing) ?? 50, i = (e == null ? void 0 : e.rankSpacing) ?? 50, n = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: a.db.getDirection(),
    nodesep: t,
    ranksep: i,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), m = a.db.getClasses(), c = a.db.getRelations(), u = a.db.getNotes();
  et.info(c), $(m, n, l, a), F(c, n), q(u, n, c.length + 1, m);
  let d;
  s === "sandbox" && (d = yh("#i" + l));
  const y = s === "sandbox" ? (
    // @ts-ignore Ignore type error for now
    yh(d.nodes()[0].contentDocument.body)
  ) : yh("body"), f = y.select(`[id="${l}"]`), x = y.select("#" + l + " g");
  if (wt(
    x,
    n,
    ["aggregation", "extension", "composition", "dependency", "lollipop"],
    "classDiagram",
    l
  ), _s.insertTitle(f, "classTitleText", (e == null ? void 0 : e.titleTopMargin) ?? 5, a.db.getDiagramTitle()), Qt(n, f, e == null ? void 0 : e.diagramPadding, e == null ? void 0 : e.useMaxWidth), !(e != null && e.htmlLabels)) {
    const h = s === "sandbox" ? d.nodes()[0].contentDocument : document, N = h.querySelectorAll('[id="' + l + '"] .edgeLabel .label');
    for (const w of N) {
      const T = w.getBBox(), g = h.createElementNS("http://www.w3.org/2000/svg", "rect");
      g.setAttribute("rx", 0), g.setAttribute("ry", 0), g.setAttribute("width", T.width), g.setAttribute("height", T.height), w.insertBefore(g, w.firstChild);
    }
  }
};
function L(o) {
  let l;
  switch (o) {
    case 0:
      l = "aggregation";
      break;
    case 1:
      l = "extension";
      break;
    case 2:
      l = "composition";
      break;
    case 3:
      l = "dependency";
      break;
    case 4:
      l = "lollipop";
      break;
    default:
      l = "none";
  }
  return l;
}
var V = {
  setConf: H,
  draw: P
};
var se = {
  parser: Bt,
  db: yt,
  renderer: V,
  styles: Tt,
  init: (o) => {
    o.class || (o.class = {}), o.class.arrowMarkerAbsolute = o.arrowMarkerAbsolute, yt.clear();
  }
};
export {
  se as diagram
};
//# sourceMappingURL=classDiagram-v2-556a8c31-URVMM2A6.js.map
