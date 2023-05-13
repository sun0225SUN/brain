import {
  Pt,
  T,
  ar,
  er,
  ir,
  lr,
  m,
  nr,
  rr,
  sr,
  tr,
  vt
} from "./chunk-HGLEOHWR.js";
import {
  Nt
} from "./chunk-LKKYYXLD.js";
import {
  A,
  dn,
  x,
  y,
  zs
} from "./chunk-DQKTJ2K2.js";
import {
  Ol,
  et,
  po,
  yh
} from "./chunk-MBTD2RCT.js";

// node_modules/.pnpm/mermaid@10.1.0/node_modules/mermaid/dist/index-6271e032.js
var K = 4;
function Q(e) {
  return dn(e, K);
}
function y2(e) {
  var t = {
    options: {
      directed: e.isDirected(),
      multigraph: e.isMultigraph(),
      compound: e.isCompound()
    },
    nodes: Z(e),
    edges: I(e)
  };
  return x(e.graph()) || (t.value = Q(e.graph())), t;
}
function Z(e) {
  return y(e.nodes(), function(t) {
    var n = e.node(t), r = e.parent(t), s = { v: t };
    return x(n) || (s.value = n), x(r) || (s.parent = r), s;
  });
}
function I(e) {
  return y(e.edges(), function(t) {
    var n = e.edge(t), r = { v: t.v, w: t.w };
    return x(t.name) || (r.name = t.name), x(n) || (r.value = n), r;
  });
}
var f = {};
var x2 = {};
var T2 = {};
var tt = () => {
  x2 = {}, T2 = {}, f = {};
};
var S = (e, t) => (et.trace("In isDecendant", t, " ", e, " = ", x2[t].includes(e)), !!x2[t].includes(e));
var et2 = (e, t) => (et.info("Decendants of ", t, " is ", x2[t]), et.info("Edge is ", e), e.v === t || e.w === t ? false : x2[t] ? x2[t].includes(e.v) || S(e.v, t) || S(e.w, t) || x2[t].includes(e.w) : (et.debug("Tilt, ", t, ",not in decendants"), false));
var J = (e, t, n, r) => {
  et.warn(
    "Copying children of ",
    e,
    "root",
    r,
    "data",
    t.node(e),
    r
  );
  const s = t.children(e) || [];
  e !== r && s.push(e), et.warn("Copying (nodes) clusterId", e, "nodes", s), s.forEach((a) => {
    if (t.children(a).length > 0)
      J(a, t, n, r);
    else {
      const u = t.node(a);
      et.info("cp ", a, " to ", r, " with parent ", e), n.setNode(a, u), r !== t.parent(a) && (et.warn("Setting parent", a, t.parent(a)), n.setParent(a, t.parent(a))), e !== r && a !== e ? (et.debug("Setting parent", a, e), n.setParent(a, e)) : (et.info("In copy ", e, "root", r, "data", t.node(e), r), et.debug(
        "Not Setting parent for node=",
        a,
        "cluster!==rootId",
        e !== r,
        "node!==clusterId",
        a !== e
      ));
      const l = t.edges(a);
      et.debug("Copying Edges", l), l.forEach((d) => {
        et.info("Edge", d);
        const g = t.edge(d.v, d.w, d.name);
        et.info("Edge data", g, r);
        try {
          et2(d, r) ? (et.info("Copying as ", d.v, d.w, g, d.name), n.setEdge(d.v, d.w, g, d.name), et.info("newGraph edges ", n.edges(), n.edge(n.edges()[0]))) : et.info(
            "Skipping copy of edge ",
            d.v,
            "-->",
            d.w,
            " rootId: ",
            r,
            " clusterId:",
            e
          );
        } catch (w) {
          et.error(w);
        }
      });
    }
    et.debug("Removing node", a), t.removeNode(a);
  });
};
var R = (e, t) => {
  const n = t.children(e);
  let r = [...n];
  for (const s of n)
    T2[s] = e, r = [...r, ...R(s, t)];
  return r;
};
var m2 = (e, t) => {
  et.trace("Searching", e);
  const n = t.children(e);
  if (et.trace("Searching children of id ", e, n), n.length < 1)
    return et.trace("This is a valid node", e), e;
  for (const r of n) {
    const s = m2(r, t);
    if (s)
      return et.trace("Found replacement for", e, " => ", s), s;
  }
};
var v = (e) => !f[e] || !f[e].externalConnections ? e : f[e] ? f[e].id : e;
var nt = (e, t) => {
  if (!e || t > 10) {
    et.debug("Opting out, no graph ");
    return;
  } else
    et.debug("Opting in, graph ");
  e.nodes().forEach(function(n) {
    e.children(n).length > 0 && (et.warn(
      "Cluster identified",
      n,
      " Replacement id in edges: ",
      m2(n, e)
    ), x2[n] = R(n, e), f[n] = { id: m2(n, e), clusterData: e.node(n) });
  }), e.nodes().forEach(function(n) {
    const r = e.children(n), s = e.edges();
    r.length > 0 ? (et.debug("Cluster identified", n, x2), s.forEach((a) => {
      if (a.v !== n && a.w !== n) {
        const u = S(a.v, n), l = S(a.w, n);
        u ^ l && (et.warn("Edge: ", a, " leaves cluster ", n), et.warn("Decendants of XXX ", n, ": ", x2[n]), f[n].externalConnections = true);
      }
    })) : et.debug("Not a cluster ", n, x2);
  }), e.edges().forEach(function(n) {
    const r = e.edge(n);
    et.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), et.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(e.edge(n)));
    let s = n.v, a = n.w;
    if (et.warn(
      "Fix XXX",
      f,
      "ids:",
      n.v,
      n.w,
      "Translating: ",
      f[n.v],
      " --- ",
      f[n.w]
    ), f[n.v] && f[n.w] && f[n.v] === f[n.w]) {
      et.warn("Fixing and trixing link to self - removing XXX", n.v, n.w, n.name), et.warn("Fixing and trixing - removing XXX", n.v, n.w, n.name), s = v(n.v), a = v(n.w), e.removeEdge(n.v, n.w, n.name);
      const u = n.w + "---" + n.v;
      e.setNode(u, {
        domId: u,
        id: u,
        labelStyle: "",
        labelText: r.label,
        padding: 0,
        shape: "labelRect",
        style: ""
      });
      const l = JSON.parse(JSON.stringify(r)), d = JSON.parse(JSON.stringify(r));
      l.label = "", l.arrowTypeEnd = "none", d.label = "", l.fromCluster = n.v, d.toCluster = n.v, e.setEdge(s, u, l, n.name + "-cyclic-special"), e.setEdge(u, a, d, n.name + "-cyclic-special");
    } else
      (f[n.v] || f[n.w]) && (et.warn("Fixing and trixing - removing XXX", n.v, n.w, n.name), s = v(n.v), a = v(n.w), e.removeEdge(n.v, n.w, n.name), s !== n.v && (r.fromCluster = n.v), a !== n.w && (r.toCluster = n.w), et.warn("Fix Replacing with XXX", s, a, n.name), e.setEdge(s, a, r, n.name));
  }), et.warn("Adjusted Graph", y2(e)), p(e, 0), et.trace(f);
};
var p = (e, t) => {
  if (et.warn("extractor - ", t, y2(e), e.children("D")), t > 10) {
    et.error("Bailing out");
    return;
  }
  let n = e.nodes(), r = false;
  for (const s of n) {
    const a = e.children(s);
    r = r || a.length > 0;
  }
  if (!r) {
    et.debug("Done, no node has children", e.nodes());
    return;
  }
  et.debug("Nodes = ", n, t);
  for (const s of n)
    if (et.debug(
      "Extracting node",
      s,
      f,
      f[s] && !f[s].externalConnections,
      !e.parent(s),
      e.node(s),
      e.children("D"),
      " Depth ",
      t
    ), !f[s])
      et.debug("Not a cluster", s, t);
    else if (!f[s].externalConnections && // !graph.parent(node) &&
    e.children(s) && e.children(s).length > 0) {
      et.warn(
        "Cluster without external connections, without a parent and with children",
        s,
        t
      );
      let u = e.graph().rankdir === "TB" ? "LR" : "TB";
      f[s] && f[s].clusterData && f[s].clusterData.dir && (u = f[s].clusterData.dir, et.warn("Fixing dir", f[s].clusterData.dir, u));
      const l = new A({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: u,
        // Todo: set proper spacing
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      et.warn("Old graph before copy", y2(e)), J(s, e, l, s), e.setNode(s, {
        clusterNode: true,
        id: s,
        clusterData: f[s].clusterData,
        labelText: f[s].labelText,
        graph: l
      }), et.warn("New graph after copy node: (", s, ")", y2(l)), et.debug("Old graph after copy", y2(e));
    } else
      et.warn(
        "Cluster ** ",
        s,
        " **not meeting the criteria !externalConnections:",
        !f[s].externalConnections,
        " no parent: ",
        !e.parent(s),
        " children ",
        e.children(s) && e.children(s).length > 0,
        e.children("D"),
        t
      ), et.debug(f);
  n = e.nodes(), et.warn("New list of nodes", n);
  for (const s of n) {
    const a = e.node(s);
    et.warn(" Now next level", s, a), a.clusterNode && p(a.graph, t + 1);
  }
};
var P = (e, t) => {
  if (t.length === 0)
    return [];
  let n = Object.assign(t);
  return t.forEach((r) => {
    const s = e.children(r), a = P(e, s);
    n = [...n, ...a];
  }), n;
};
var it = (e) => P(e, e.children());
var st = (e, t) => {
  et.info("Creating subgraph rect for ", t.id, t);
  const n = e.insert("g").attr("class", "cluster" + (t.class ? " " + t.class : "")).attr("id", t.id), r = n.insert("rect", ":first-child"), s = Ol(po().flowchart.htmlLabels), a = n.insert("g").attr("class", "cluster-label"), u = t.labelType === "markdown" ? Nt(a, t.labelText, { style: t.labelStyle, useHtmlLabels: s }) : a.node().appendChild(T(t.labelText, t.labelStyle, void 0, true));
  let l = u.getBBox();
  if (Ol(po().flowchart.htmlLabels)) {
    const o = u.children[0], h = yh(u);
    l = o.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
  }
  const d = 0 * t.padding, g = d / 2, w = t.width <= l.width + d ? l.width + d : t.width;
  t.width <= l.width + d ? t.diff = (l.width - t.width) / 2 - t.padding / 2 : t.diff = -t.padding / 2, et.trace("Data ", t, JSON.stringify(t)), r.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - w / 2).attr("y", t.y - t.height / 2 - g).attr("width", w).attr("height", t.height + d), s ? a.attr(
    "transform",
    // This puts the labal on top of the box instead of inside it
    "translate(" + (t.x - l.width / 2) + ", " + (t.y - t.height / 2) + ")"
  ) : a.attr(
    "transform",
    // This puts the labal on top of the box instead of inside it
    "translate(" + t.x + ", " + (t.y - t.height / 2) + ")"
  );
  const c = r.node().getBBox();
  return t.width = c.width, t.height = c.height, t.intersect = function(o) {
    return vt(t, o);
  }, n;
};
var rt = (e, t) => {
  const n = e.insert("g").attr("class", "note-cluster").attr("id", t.id), r = n.insert("rect", ":first-child"), s = 0 * t.padding, a = s / 2;
  r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + s).attr("height", t.height + s).attr("fill", "none");
  const u = r.node().getBBox();
  return t.width = u.width, t.height = u.height, t.intersect = function(l) {
    return vt(t, l);
  }, n;
};
var at = (e, t) => {
  const n = e.insert("g").attr("class", t.classes).attr("id", t.id), r = n.insert("rect", ":first-child"), s = n.insert("g").attr("class", "cluster-label"), a = n.append("rect"), u = s.node().appendChild(T(t.labelText, t.labelStyle, void 0, true));
  let l = u.getBBox();
  if (Ol(po().flowchart.htmlLabels)) {
    const o = u.children[0], h = yh(u);
    l = o.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
  }
  l = u.getBBox();
  const d = 0 * t.padding, g = d / 2, w = t.width <= l.width + t.padding ? l.width + t.padding : t.width;
  t.width <= l.width + t.padding ? t.diff = (l.width + t.padding * 0 - t.width) / 2 : t.diff = -t.padding / 2, r.attr("class", "outer").attr("x", t.x - w / 2 - g).attr("y", t.y - t.height / 2 - g).attr("width", w + d).attr("height", t.height + d), a.attr("class", "inner").attr("x", t.x - w / 2 - g).attr("y", t.y - t.height / 2 - g + l.height - 1).attr("width", w + d).attr("height", t.height + d - l.height - 3), s.attr(
    "transform",
    "translate(" + (t.x - l.width / 2) + ", " + (t.y - t.height / 2 - t.padding / 3 + (Ol(po().flowchart.htmlLabels) ? 5 : 3)) + ")"
  );
  const c = r.node().getBBox();
  return t.height = c.height, t.intersect = function(o) {
    return vt(t, o);
  }, n;
};
var ct = (e, t) => {
  const n = e.insert("g").attr("class", t.classes).attr("id", t.id), r = n.insert("rect", ":first-child"), s = 0 * t.padding, a = s / 2;
  r.attr("class", "divider").attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2).attr("width", t.width + s).attr("height", t.height + s);
  const u = r.node().getBBox();
  return t.width = u.width, t.height = u.height, t.diff = -t.padding / 2, t.intersect = function(l) {
    return vt(t, l);
  }, n;
};
var ot = { rect: st, roundedWithTitle: at, noteGroup: rt, divider: ct };
var F = {};
var lt = (e, t) => {
  et.trace("Inserting cluster");
  const n = t.shape || "rect";
  F[t.id] = ot[n](e, t);
};
var ft = () => {
  F = {};
};
var k = (e, t, n, r) => {
  et.info("Graph in recursive render: XXX", y2(t), r);
  const s = t.graph().rankdir;
  et.trace("Dir in recursive render - dir:", s);
  const a = e.insert("g").attr("class", "root");
  t.nodes() ? et.info("Recursive render XXX", t.nodes()) : et.info("No nodes found for", t), t.edges().length > 0 && et.trace("Recursive edges", t.edge(t.edges()[0]));
  const u = a.insert("g").attr("class", "clusters"), l = a.insert("g").attr("class", "edgePaths"), d = a.insert("g").attr("class", "edgeLabels"), g = a.insert("g").attr("class", "nodes");
  t.nodes().forEach(function(c) {
    const o = t.node(c);
    if (r !== void 0) {
      const h = JSON.parse(JSON.stringify(r.clusterData));
      et.info("Setting data for cluster XXX (", c, ") ", h, r), t.setNode(r.id, h), t.parent(c) || (et.trace("Setting parent", c, r.id), t.setParent(c, r.id, h));
    }
    if (et.info("(Insert) Node XXX" + c + ": " + JSON.stringify(t.node(c))), o && o.clusterNode) {
      et.info("Cluster identified", c, o.width, t.node(c));
      const h = k(g, o.graph, n, t.node(c)), C = h.elem;
      m(o, C), o.diff = h.diff || 0, et.info("Node bounds (abc123)", c, o, o.width, o.x, o.y), rr(C, o), et.warn("Recursive render complete ", C, o);
    } else
      t.children(c).length > 0 ? (et.info("Cluster - the non recursive path XXX", c, o.id, o, t), et.info(m2(o.id, t)), f[o.id] = { id: m2(o.id, t), node: o }) : (et.info("Node - the non recursive path", c, o.id, o), tr(g, t.node(c), s));
  }), t.edges().forEach(function(c) {
    const o = t.edge(c.v, c.w, c.name);
    et.info("Edge " + c.v + " -> " + c.w + ": " + JSON.stringify(c)), et.info("Edge " + c.v + " -> " + c.w + ": ", c, " ", JSON.stringify(t.edge(c))), et.info("Fix", f, "ids:", c.v, c.w, "Translateing: ", f[c.v], f[c.w]), ir(d, o);
  }), t.edges().forEach(function(c) {
    et.info("Edge " + c.v + " -> " + c.w + ": " + JSON.stringify(c));
  }), et.info("#############################################"), et.info("###                Layout                 ###"), et.info("#############################################"), et.info(t), zs(t), et.info("Graph after layout:", y2(t));
  let w = 0;
  return it(t).forEach(function(c) {
    const o = t.node(c);
    et.info("Position " + c + ": " + JSON.stringify(t.node(c))), et.info(
      "Position " + c + ": (" + o.x,
      "," + o.y,
      ") width: ",
      o.width,
      " height: ",
      o.height
    ), o && o.clusterNode ? er(o) : t.children(c).length > 0 ? (lt(u, o), f[o.id].node = o) : er(o);
  }), t.edges().forEach(function(c) {
    const o = t.edge(c);
    et.info("Edge " + c.v + " -> " + c.w + ": " + JSON.stringify(o), o);
    const h = lr(l, c, o, f, n, t);
    nr(o, h);
  }), t.nodes().forEach(function(c) {
    const o = t.node(c);
    et.info(c, o.type, o.diff), o.type === "group" && (w = o.diff);
  }), { elem: a, diff: w };
};
var wt = (e, t, n, r, s) => {
  Pt(e, n, r, s), ar(), sr(), ft(), tt(), et.warn("Graph at first:", y2(t)), nt(t), et.warn("Graph after:", y2(t)), k(e, t, r);
};

export {
  wt
};
//# sourceMappingURL=chunk-4FJDI662.js.map
