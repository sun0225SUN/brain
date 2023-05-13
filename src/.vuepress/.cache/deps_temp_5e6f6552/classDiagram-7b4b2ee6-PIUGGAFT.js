import {
  Bt,
  Tt,
  yt
} from "./chunk-W6RPHPGS.js";
import {
  F
} from "./chunk-5LGF6MMJ.js";
import {
  A,
  zs
} from "./chunk-DQKTJ2K2.js";
import "./chunk-SM3LZOGE.js";
import "./chunk-YYFCVU34.js";
import "./chunk-6UPQCSNV.js";
import "./chunk-2ICLCNDE.js";
import {
  Zt
} from "./chunk-SOC5YOGS.js";
import {
  et,
  po,
  yh
} from "./chunk-MBTD2RCT.js";

// node_modules/.pnpm/mermaid@10.1.0/node_modules/mermaid/dist/classDiagram-7b4b2ee6.js
var h = {};
var g = 20;
var p = function(e) {
  const s = Object.entries(h).find((k) => k[1].label === e);
  if (s)
    return s[0];
};
var D = function(e) {
  e.append("defs").append("marker").attr("id", "extensionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", "extensionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z"), e.append("defs").append("marker").attr("id", "compositionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", "compositionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", "aggregationStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", "aggregationEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", "dependencyStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
var $ = function(e, s, k, a) {
  const f = po().class;
  h = {}, et.info("Rendering diagram " + e);
  const L = po().securityLevel;
  let y;
  L === "sandbox" && (y = yh("#i" + s));
  const x = L === "sandbox" ? yh(y.nodes()[0].contentDocument.body) : yh("body"), n = x.select(`[id='${s}']`);
  D(n);
  const r = new A({
    multigraph: true
  });
  r.setGraph({
    isMultiGraph: true
  }), r.setDefaultEdgeLabel(function() {
    return {};
  });
  const m = a.db.getClasses(), N = Object.keys(m);
  for (const t of N) {
    const o = m[t], i = F.drawClass(n, o, f, a);
    h[i.id] = i, r.setNode(i.id, i), et.info("Org height: " + i.height);
  }
  a.db.getRelations().forEach(function(t) {
    et.info(
      "tjoho" + p(t.id1) + p(t.id2) + JSON.stringify(t)
    ), r.setEdge(
      p(t.id1),
      p(t.id2),
      {
        relation: t
      },
      t.title || "DEFAULT"
    );
  }), a.db.getNotes().forEach(function(t) {
    et.debug(`Adding note: ${JSON.stringify(t)}`);
    const o = F.drawNote(n, t, f, a);
    h[o.id] = o, r.setNode(o.id, o), t.class && t.class in m && r.setEdge(
      t.id,
      p(t.class),
      {
        relation: {
          id1: t.id,
          id2: t.class,
          relation: {
            type1: "none",
            type2: "none",
            lineType: 10
          }
        }
      },
      "DEFAULT"
    );
  }), zs(r), r.nodes().forEach(function(t) {
    t !== void 0 && r.node(t) !== void 0 && (et.debug("Node " + t + ": " + JSON.stringify(r.node(t))), x.select("#" + (a.db.lookUpDomId(t) || t)).attr(
      "transform",
      "translate(" + (r.node(t).x - r.node(t).width / 2) + "," + (r.node(t).y - r.node(t).height / 2) + " )"
    ));
  }), r.edges().forEach(function(t) {
    t !== void 0 && r.edge(t) !== void 0 && (et.debug("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(r.edge(t))), F.drawEdge(n, r.edge(t), r.edge(t).relation, f, a));
  });
  const c = n.node().getBBox(), E = c.width + g * 2, b = c.height + g * 2;
  Zt(n, b, E, f.useMaxWidth);
  const w = `${c.x - g} ${c.y - g} ${E} ${b}`;
  et.debug(`viewBox ${w}`), n.attr("viewBox", w);
};
var B = {
  draw: $
};
var z = {
  parser: Bt,
  db: yt,
  renderer: B,
  styles: Tt,
  init: (e) => {
    e.class || (e.class = {}), e.class.arrowMarkerAbsolute = e.arrowMarkerAbsolute, yt.clear();
  }
};
export {
  z as diagram
};
//# sourceMappingURL=classDiagram-7b4b2ee6-PIUGGAFT.js.map
