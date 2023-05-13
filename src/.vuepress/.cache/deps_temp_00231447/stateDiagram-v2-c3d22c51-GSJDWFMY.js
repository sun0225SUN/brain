import {
  Be,
  Ne,
  Re,
  Rt,
  Tt,
  ee,
  re,
  we,
  xt
} from "./chunk-IYSOIICX.js";
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
  Zt,
  _s
} from "./chunk-SOC5YOGS.js";
import {
  _h,
  et,
  po,
  yh
} from "./chunk-MBTD2RCT.js";

// node_modules/.pnpm/mermaid@10.1.0/node_modules/mermaid/dist/stateDiagram-v2-c3d22c51.js
var h = "rect";
var C = "rectWithTitle";
var it = "start";
var rt = "end";
var lt = "divider";
var at = "roundedWithTitle";
var dt = "note";
var Et = "noteGroup";
var u = "statediagram";
var St = "state";
var Tt2 = `${u}-${St}`;
var V = "transition";
var pt = "note";
var ut = "note-edge";
var _t = `${V} ${ut}`;
var ft = `${u}-${pt}`;
var Dt = "cluster";
var At = `${u}-${Dt}`;
var bt = "cluster-alt";
var ht = `${u}-${bt}`;
var Y = "parent";
var W = "note";
var yt = "state";
var N = "----";
var gt = `${N}${W}`;
var H = `${N}${Y}`;
var m = "fill:none";
var z = "fill: #333";
var q = "c";
var K = "text";
var F = "normal";
var y = {};
var E = 0;
var Rt2 = function(t) {
  const n = Object.keys(t);
  for (const o of n)
    t[o];
};
var xt2 = function(t, n) {
  et.trace("Extracting classes"), n.db.clear();
  try {
    return n.parser.parse(t), n.db.extract(n.db.getRootDocV2()), n.db.getClasses();
  } catch (o) {
    return o;
  }
};
function Ct(t) {
  return t == null ? "" : t.classes ? t.classes.join(" ") : "";
}
function $(t = "", n = 0, o = "", c = N) {
  const i = o !== null && o.length > 0 ? `${c}${o}` : "";
  return `${yt}-${t}${i}-${n}`;
}
var D = (t, n, o, c, i, r) => {
  const e = o.id, _ = Ct(c[e]);
  if (e !== "root") {
    let T = h;
    o.start === true && (T = it), o.start === false && (T = rt), o.type !== xt && (T = o.type), y[e] || (y[e] = {
      id: e,
      shape: T,
      description: _h.sanitizeText(e, po()),
      classes: `${_} ${Tt2}`
    });
    const s = y[e];
    o.description && (Array.isArray(s.description) ? (s.shape = C, s.description.push(o.description)) : s.description.length > 0 ? (s.shape = C, s.description === e ? s.description = [o.description] : s.description = [s.description, o.description]) : (s.shape = h, s.description = o.description), s.description = _h.sanitizeTextOrArray(s.description, po())), s.description.length === 1 && s.shape === C && (s.shape = h), !s.type && o.doc && (et.info("Setting cluster for ", e, w(o)), s.type = "group", s.dir = w(o), s.shape = o.type === re ? lt : at, s.classes = s.classes + " " + At + " " + (r ? ht : ""));
    const p = {
      labelStyle: "",
      shape: s.shape,
      labelText: s.description,
      // typeof newNode.description === 'object'
      //   ? newNode.description[0]
      //   : newNode.description,
      classes: s.classes,
      style: "",
      //styles.style,
      id: e,
      dir: s.dir,
      domId: $(e, E),
      type: s.type,
      padding: 15
      //getConfig().flowchart.padding
    };
    if (p.centerLabel = true, o.note) {
      const d = {
        labelStyle: "",
        shape: dt,
        labelText: o.note.text,
        classes: ft,
        // useHtmlLabels: false,
        style: "",
        // styles.style,
        id: e + gt + "-" + E,
        domId: $(e, E, W),
        type: s.type,
        padding: 15
        //getConfig().flowchart.padding
      }, A2 = {
        labelStyle: "",
        shape: Et,
        labelText: o.note.text,
        classes: s.classes,
        style: "",
        // styles.style,
        id: e + H,
        domId: $(e, E, Y),
        type: "group",
        padding: 0
        //getConfig().flowchart.padding
      };
      E++;
      const l = e + H;
      t.setNode(l, A2), t.setNode(d.id, d), t.setNode(e, p), t.setParent(e, l), t.setParent(d.id, l);
      let b = e, S = d.id;
      o.note.position === "left of" && (b = d.id, S = e), t.setEdge(b, S, {
        arrowhead: "none",
        arrowType: "",
        style: m,
        labelStyle: "",
        classes: _t,
        arrowheadStyle: z,
        labelpos: q,
        labelType: K,
        thickness: F
      });
    } else
      t.setNode(e, p);
  }
  n && n.id !== "root" && (et.trace("Setting node ", e, " to be child of its parent ", n.id), t.setParent(e, n.id)), o.doc && (et.trace("Adding nodes children "), $t(t, o, o.doc, c, i, !r));
};
var $t = (t, n, o, c, i, r) => {
  et.trace("items", o), o.forEach((e) => {
    switch (e.stmt) {
      case Tt:
        D(t, n, e, c, i, r);
        break;
      case xt:
        D(t, n, e, c, i, r);
        break;
      case Rt:
        {
          D(t, n, e.state1, c, i, r), D(t, n, e.state2, c, i, r);
          const _ = {
            id: "edge" + E,
            arrowhead: "normal",
            arrowTypeEnd: "arrow_barb",
            style: m,
            labelStyle: "",
            label: _h.sanitizeText(e.description, po()),
            arrowheadStyle: z,
            labelpos: q,
            labelType: K,
            thickness: F,
            classes: V
          };
          t.setEdge(e.state1.id, e.state2.id, _, E), E++;
        }
        break;
    }
  });
};
var w = (t, n = Re) => {
  let o = n;
  if (t.doc)
    for (let c = 0; c < t.doc.length; c++) {
      const i = t.doc[c];
      i.stmt === "dir" && (o = i.value);
    }
  return o;
};
var Gt = function(t, n, o, c) {
  et.info("Drawing state diagram (v2)", n), y = {};
  let i = c.db.getDirection();
  i === void 0 && (i = ee);
  const { securityLevel: r, state: e } = po(), _ = e.nodeSpacing || 50, T = e.rankSpacing || 50;
  et.info(c.db.getRootDocV2()), c.db.extract(c.db.getRootDocV2()), et.info(c.db.getRootDocV2());
  const s = c.db.getStates(), p = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: w(c.db.getRootDocV2()),
    nodesep: _,
    ranksep: T,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  D(p, void 0, c.db.getRootDocV2(), s, c.db, true);
  let d;
  r === "sandbox" && (d = yh("#i" + n));
  const A2 = r === "sandbox" ? yh(d.nodes()[0].contentDocument.body) : yh("body"), l = A2.select(`[id="${n}"]`), b = A2.select("#" + n + " g");
  wt(b, p, ["barb"], u, n);
  const S = 8;
  _s.insertTitle(l, "statediagramTitleText", e.titleTopMargin, c.db.getDiagramTitle());
  const L = l.node().getBBox(), P = L.width + S * 2, O = L.height + S * 2;
  l.attr("class", u);
  const k = l.node().getBBox();
  Zt(l, O, P, e.useMaxWidth);
  const M = `${k.x - S} ${k.y - S} ${P} ${O}`;
  et.debug(`viewBox ${M}`), l.attr("viewBox", M);
  const J = document.querySelectorAll('[id="' + n + '"] .edgeLabel .label');
  for (const R of J) {
    const v = R.getBBox(), f = document.createElementNS("http://www.w3.org/2000/svg", h);
    f.setAttribute("rx", 0), f.setAttribute("ry", 0), f.setAttribute("width", v.width), f.setAttribute("height", v.height), R.insertBefore(f, R.firstChild);
  }
};
var wt2 = {
  setConf: Rt2,
  getClasses: xt2,
  draw: Gt
};
var Wt = {
  parser: Ne,
  db: we,
  renderer: wt2,
  styles: Be,
  init: (t) => {
    t.state || (t.state = {}), t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute, we.clear();
  }
};
export {
  Wt as diagram
};
//# sourceMappingURL=stateDiagram-v2-c3d22c51-GSJDWFMY.js.map
