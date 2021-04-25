/*	This work is licensed under Creative Commons GNU LGPL License.

	License: http://creativecommons.org/licenses/LGPL/2.1/
   Version: 0.9
	Author:  Stefan Goessner/2006
	Web:     http://goessner.net/ 
*/
function json2xml(o) {
    var normalizeContent = function(content) {
        if (typeof Html5Entities !== "undefined") return Html5Entities.encode(content);
        else return content;
    }
    var normalizeTag = function(tag) {
        // If the tag is a number (array index)
        if (!isNaN(+(tag))) {
            return "row-" + tag;
        }
        return tag;
    }
    var toXml = function(v, name, ind) {
        var xml = "";
        
        name = normalizeTag(name);
        if (v instanceof Array) {
            for (var i=0, n=v.length; i<n; i++)
                xml += ind + toXml(v[i], name, ind+"\t") + "\n";
        }
        else if (typeof(v) == "object") {
            var hasChild = false;
            xml += ind + "<" + name;
            for (var m in v) {
                if (m.charAt(0) == "@")
                    xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";
                else
                    hasChild = true;
            }
            xml += hasChild ? ">" : "/>";
            if (hasChild) {
                for (var m in v) {
                    if (m == "#text")
                        xml += v[m];
                    else if (m == "#cdata")
                        xml += "<![CDATA[" + v[m] + "]]>";
                    else if (m.charAt(0) != "@")
                        xml += toXml(v[m], m, ind+"\t");
                }
                xml += (xml.charAt(xml.length-1)=="\n"?ind:"") + "</" + name + ">";
            }
        }
        else {
            xml += ind + "<" + name + ">" + normalizeContent(v.toString()) +  "</" + name + ">";
        }
        return xml;
    }, xml = "";
    for (var m in o) xml += toXml(o[m], m, "");
    return xml.replace(/\t|\n/g, "");
}