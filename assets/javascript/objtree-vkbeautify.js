! function() {
 function u(e) {
  var r = "    ";
  if (isNaN(parseInt(e))) r = e;
  else switch (e = parseInt(e)) {
   case 1:
    r = " ";
    break;
   case 2:
    r = "  ";
    break;
   case 3:
    r = "   ";
    break;
   case 4:
    r = "    ";
    break;
   case 5:
    r = "     ";
    break;
   case 6:
    r = "      ";
    break;
   case 7:
    r = "       ";
    break;
   case 8:
    r = "        ";
    break;
   case 9:
    r = "         ";
    break;
   case 10:
    r = "          ";
    break;
   case 11:
    r = "           ";
    break;
   case 12:
    r = "            "
  }
  var t = ["\n"];
  for (ix = 0; ix < 100; ix++) t.push(t[ix] + r);
  return t
 }

 function e() {
  this.step = "\t", this.shift = u(this.step)
 }
 e.prototype.xml = function(e, r) {
  var t = e.replace(/>\s{0,}</g, "><").replace(/</g, "~::~<").replace(/\s*xmlns\:/g, "~::~xmlns:").replace(/\s*xmlns\=/g, "~::~xmlns=").split("~::~"),
   a = t.length,
   n = !1,
   s = 0,
   o = "",
   c = 0,
   i = r ? u(r) : this.shift;
  for (c = 0; c < a; c++) - 1 < t[c].search(/<!/) ? (o += i[s] + t[c], n = !0, (-1 < t[c].search(/-->/) || -1 < t[c].search(/\]>/) || -1 < t[c].search(/!DOCTYPE/)) && (n = !1)) : -1 < t[c].search(/-->/) || -1 < t[c].search(/\]>/) ? (o += t[c], n = !1) : /^<\w/.exec(t[c - 1]) && /^<\/\w/.exec(t[c]) && /^<[\w:\-\.\,]+/.exec(t[c - 1]) == /^<\/[\w:\-\.\,]+/.exec(t[c])[0].replace("/", "") ? (o += t[c], n || s--) : -1 < t[c].search(/<\w/) && -1 == t[c].search(/<\//) && -1 == t[c].search(/\/>/) ? o = o += n ? t[c] : i[s++] + t[c] : -1 < t[c].search(/<\w/) && -1 < t[c].search(/<\//) ? o = o += n ? t[c] : i[s] + t[c] : -1 < t[c].search(/<\//) ? o = o += n ? t[c] : i[--s] + t[c] : -1 < t[c].search(/\/>/) ? o = o += n ? t[c] : i[s] + t[c] : -1 < t[c].search(/<\?/) ? o += i[s] + t[c] : -1 < t[c].search(/xmlns\:/) || -1 < t[c].search(/xmlns\=/) ? o += i[s] + t[c] : o += t[c];
  return "\n" == o[0] ? o.slice(1) : o
 }, e.prototype.json = function(e, r) {
  r = r || this.step;
  return "undefined" == typeof JSON ? e : "string" == typeof e ? JSON.stringify(JSON.parse(e), null, r) : "object" == typeof e ? JSON.stringify(e, null, r) : e
 }, e.prototype.css = function(e, r) {
  var t = e.replace(/\s{1,}/g, " ").replace(/\{/g, "{~::~").replace(/\}/g, "~::~}~::~").replace(/\;/g, ";~::~").replace(/\/\*/g, "~::~/*").replace(/\*\//g, "*/~::~").replace(/~::~\s{0,}~::~/g, "~::~").split("~::~"),
   a = t.length,
   n = 0,
   s = "",
   o = 0,
   c = r ? u(r) : this.shift;
  for (o = 0; o < a; o++) /\{/.exec(t[o]) ? s += c[n++] + t[o] : /\}/.exec(t[o]) ? s += c[--n] + t[o] : (/\*\\/.exec(t[o]), s += c[n] + t[o]);
  return s.replace(/^\n{1,}/, "")
 }, e.prototype.sql = function(e, r) {
  var t, a, n, s = e.replace(/\s{1,}/g, " ").replace(/\'/gi, "~::~'").split("~::~"),
   o = s.length,
   c = [],
   i = 0,
   l = this.step,
   p = 0,
   g = "",
   h = 0,
   f = r ? u(r) : this.shift;
  for (h = 0; h < o; h++) c = h % 2 ? c.concat(s[h]) : c.concat((t = s[h], a = l, t.replace(/\s{1,}/g, " ").replace(/ AND /gi, "~::~" + a + a + "AND ").replace(/ BETWEEN /gi, "~::~" + a + "BETWEEN ").replace(/ CASE /gi, "~::~" + a + "CASE ").replace(/ ELSE /gi, "~::~" + a + "ELSE ").replace(/ END /gi, "~::~" + a + "END ").replace(/ FROM /gi, "~::~FROM ").replace(/ GROUP\s{1,}BY/gi, "~::~GROUP BY ").replace(/ HAVING /gi, "~::~HAVING ").replace(/ IN /gi, " IN ").replace(/ JOIN /gi, "~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi, "~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi, "~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi, "~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi, "~::~RIGHT JOIN ").replace(/ ON /gi, "~::~" + a + "ON ").replace(/ OR /gi, "~::~" + a + a + "OR ").replace(/ ORDER\s{1,}BY/gi, "~::~ORDER BY ").replace(/ OVER /gi, "~::~" + a + "OVER ").replace(/\(\s{0,}SELECT /gi, "~::~(SELECT ").replace(/\)\s{0,}SELECT /gi, ")~::~SELECT ").replace(/ THEN /gi, " THEN~::~" + a).replace(/ UNION /gi, "~::~UNION~::~").replace(/ USING /gi, "~::~USING ").replace(/ WHEN /gi, "~::~" + a + "WHEN ").replace(/ WHERE /gi, "~::~WHERE ").replace(/ WITH /gi, "~::~WITH ").replace(/ ALL /gi, " ALL ").replace(/ AS /gi, " AS ").replace(/ ASC /gi, " ASC ").replace(/ DESC /gi, " DESC ").replace(/ DISTINCT /gi, " DISTINCT ").replace(/ EXISTS /gi, " EXISTS ").replace(/ NOT /gi, " NOT ").replace(/ NULL /gi, " NULL ").replace(/ LIKE /gi, " LIKE ").replace(/\s{0,}SELECT /gi, "SELECT ").replace(/\s{0,}UPDATE /gi, "UPDATE ").replace(/ SET /gi, " SET ").replace(/~::~{1,}/g, "~::~").split("~::~")));
  for (o = c.length, h = 0; h < o; h++) {
   n = c[h], p = p - (n.replace(/\(/g, "").length - n.replace(/\)/g, "").length), /\s{0,}\s{0,}SELECT\s{0,}/.exec(c[h]) && (c[h] = c[h].replace(/\,/g, ",\n" + l + l)), /\s{0,}\s{0,}SET\s{0,}/.exec(c[h]) && (c[h] = c[h].replace(/\,/g, ",\n" + l + l)), /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(c[h]) ? g += f[++i] + c[h] : /\'/.exec(c[h]) ? (p < 1 && i && i--, g += c[h]) : (g += f[i] + c[h], p < 1 && i && i--)
  }
  return g = g.replace(/^\n{1,}/, "").replace(/\n{1,}/g, "\n")
 }, e.prototype.xmlmin = function(e, r) {
  return (r ? e : e.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g, "").replace(/[ \r\n\t]{1,}xmlns/g, " xmlns")).replace(/>\s{0,}</g, "><")
 }, e.prototype.jsonmin = function(e) {
  return "undefined" == typeof JSON ? e : JSON.stringify(JSON.parse(e), null, 0)
 }, e.prototype.cssmin = function(e, r) {
  return (r ? e : e.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g, "")).replace(/\s{1,}/g, " ").replace(/\{\s{1,}/g, "{").replace(/\}\s{1,}/g, "}").replace(/\;\s{1,}/g, ";").replace(/\/\*\s{1,}/g, "/*").replace(/\*\/\s{1,}/g, "*/")
 }, e.prototype.sqlmin = function(e) {
  return e.replace(/\s{1,}/g, " ").replace(/\s{1,}\(/, "(").replace(/\s{1,}\)/, ")")
 }, window.vkbeautify = new e
}(), "undefined" == typeof XML && (XML = function() {}), XML.ObjTree = function() {
 return this
}, XML.ObjTree.VERSION = "0.24", XML.ObjTree.prototype.xmlDecl = '<?xml version="1.0" encoding="UTF-8" ?>\n', XML.ObjTree.prototype.attr_prefix = "-", XML.ObjTree.prototype.overrideMimeType = "text/xml", XML.ObjTree.prototype.parseXML = function(e) {
 var r;
 if (window.DOMParser) {
  var t = new DOMParser,
   a = t.parseFromString(e, "application/xml");
  if (!a) return;
  r = a.documentElement
 } else window.ActiveXObject && ((t = new ActiveXObject("Microsoft.XMLDOM")).async = !1, t.loadXML(e), r = t.documentElement);
 if (r) return this.parseDOM(r)
}, XML.ObjTree.prototype.parseHTTP = function(e, r, t) {
 var a, n = {};
 for (var s in r) n[s] = r[s];
 if (n.method || (void 0 === n.postBody && void 0 === n.postbody && void 0 === n.parameters ? n.method = "get" : n.method = "post"), t) {
  n.asynchronous = !0;
  var o = this,
   c = t,
   i = n.onComplete;
  n.onComplete = function(e) {
   var r;
   e && e.responseXML && e.responseXML.documentElement ? r = o.parseDOM(e.responseXML.documentElement) : e && e.responseText && (r = o.parseXML(e.responseText)), c(r, e), i && i(e)
  }
 } else n.asynchronous = !1;
 if ("undefined" != typeof HTTP && HTTP.Request) n.uri = e, (l = new HTTP.Request(n)) && (a = l.transport);
 else if ("undefined" != typeof Ajax && Ajax.Request) {
  var l;
  (l = new Ajax.Request(e, n)) && (a = l.transport)
 }
 return t ? a : a && a.responseXML && a.responseXML.documentElement ? this.parseDOM(a.responseXML.documentElement) : a && a.responseText ? this.parseXML(a.responseText) : void 0
}, XML.ObjTree.prototype.parseDOM = function(e) {
 if (e) {
  if (this.__force_array = {}, this.force_array)
   for (var r = 0; r < this.force_array.length; r++) this.__force_array[this.force_array[r]] = 1;
  var t = this.parseElement(e);
  if (this.__force_array[e.nodeName] && (t = [t]), 11 != e.nodeType) {
   var a = {};
   a[e.nodeName] = t, t = a
  }
  return t
 }
}, XML.ObjTree.prototype.parseElement = function(e) {
 if (7 != e.nodeType) {
  if (3 == e.nodeType || 4 == e.nodeType) {
   if (null == e.nodeValue.match(/[^\x00-\x20]/)) return;
   return e.nodeValue
  }
  var r, t = {};
  if (e.attributes && e.attributes.length) {
   r = {};
   for (var a = 0; a < e.attributes.length; a++) {
    if ("string" == typeof(o = e.attributes[a].nodeName))(c = e.attributes[a].nodeValue) && (void 0 === t[o = this.attr_prefix + o] && (t[o] = "element"), t[o] = "element", this.addNode(r, o, t[o], c))
   }
  }
  if (e.childNodes && e.childNodes.length) {
   var n = !0;
   r && (n = !1);
   for (a = 0; a < e.childNodes.length && n; a++) {
    var s = e.childNodes[a].nodeType;
    3 != s && 4 != s && (n = !1)
   }
   if (n) {
    r || (r = "");
    for (a = 0; a < e.childNodes.length; a++) r += e.childNodes[a].nodeValue
   } else {
    r || (r = {});
    for (a = 0; a < e.childNodes.length; a++) {
     var o, c;
     if ("string" == typeof(o = e.childNodes[a].nodeName))(c = this.parseElement(e.childNodes[a])) && (void 0 === t[o] && (t[o] = "element"), t[o] = "element", this.addNode(r, o, t[o], c))
    }
   }
  }
  return r
 }
}, XML.ObjTree.prototype.addNode = function(e, r, t, a) {
 this.__force_array[r] ? (1 == t && (e[r] = []), e[r][e[r].length] = a) : 1 == t ? e[r] = a : 2 == t ? e[r] = [e[r], a] : e[r][e[r].length] = a
}, XML.ObjTree.prototype.writeXML = function(e) {
 var r = this.hash_to_xml(null, e);
 return this.xmlDecl + r
}, XML.ObjTree.prototype.hash_to_xml = function(e, r) {
 var t = [],
  a = [];
 for (var n in r)
  if (r.hasOwnProperty(n)) {
   var s = r[n];
   n.charAt(0) != this.attr_prefix ? void 0 === s || null == s ? t[t.length] = "<" + n + " />" : "object" == typeof s && s.constructor == Array ? t[t.length] = this.array_to_xml(n, s) : t[t.length] = "object" == typeof s ? this.hash_to_xml(n, s) : this.scalar_to_xml(n, s) : a[a.length] = " " + n.substring(1) + '="' + this.xml_escape(s) + '"'
  } var o = a.join(""),
  c = t.join("");
 return void 0 === e || null == e || (c = 0 < t.length ? c.match(/\n/) ? "<" + e + o + ">\n" + c + "</" + e + ">\n" : "<" + e + o + ">" + c + "</" + e + ">\n" : "<" + e + o + " />\n"), c
}, XML.ObjTree.prototype.array_to_xml = function(e, r) {
 for (var t = [], a = 0; a < r.length; a++) {
  var n = r[a];
  void 0 === n || null == n ? t[t.length] = "<" + e + " />" : "object" == typeof n && n.constructor == Array ? t[t.length] = this.array_to_xml(e, n) : t[t.length] = "object" == typeof n ? this.hash_to_xml(e, n) : this.scalar_to_xml(e, n)
 }
 return t.join("")
}, XML.ObjTree.prototype.scalar_to_xml = function(e, r) {
 return "#text" == e ? this.xml_escape(r) : (isNaN(e) || (e = "element"), "<" + e + ">" + this.xml_escape(r) + "</" + e + ">\n")
}, XML.ObjTree.prototype.xml_escape = function(e) {
 return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
};