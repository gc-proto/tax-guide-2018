/**
 * @title WET-BOEW Field Flow
 * @overview Transform a basic list into a selectable list.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
! function(a, b, c) {
    "use strict";
    var d = "wb-fieldflow",
        e = "." + d,
        f = d + "-form",
        g = d + "-sub",
        h = d + "-init",
        i = "." + h,
        j = d + c.getId(),
        k = "[name^=" + j + "]",
        l = d + "-label",
        m = d + "-header",
        n = "." + f,
        o = "wb-init" + e,
        p = "draw" + e,
        q = "action" + e,
        r = "submit" + e,
        s = "submited" + e,
        t = "ready" + e,
        u = "clean" + e,
        v = "reset" + e,
        w = "createctrl" + e,
        x = d + "-register",
        y = d + "-hdnfld",
        z = d + "-config",
        A = d + "-push",
        B = d + "-submit",
        C = d + "-action",
        D = d + "-origin",
        E = "data-" + d + "-source",
        F = d + "-flagoptvalue",
        G = c.doc,
        H = {
            toggle: {
                stateOn: "visible",
                stateOff: "hidden"
            },
            i18n: {
                en: {
                    btn: "Continue",
                    defaultsel: "Make your selection...",
                    required: "required"
                },
                fr: {
                    btn: "Allez",
                    defaultsel: "Sélectionnez dans la liste...",
                    required: "obligatoire"
                }
            },
            action: "ajax",
            prop: "url"
        },
        I = [
            ["redir", "query", "ajax", "addClass", "removeClass", "removeClass", "append", "tblfilter", "toggle"].join("." + q + " ") + "." + q, ["ajax", "toggle", "redir", "addClass", "removeClass"].join("." + r + " ") + "." + r, ["tblfilter", d].join("." + p + " ") + "." + p, ["select", "checkbox", "radio"].join("." + w + " ") + "." + w
        ].join(" "),
        J = function(b) {
            var h, i, j, k, l, g = c.init(b, d, e);
            if (g) {
                h = a(g), i = g.id, H.i18n[c.lang] && (H.i18n = H.i18n[c.lang]), j = c.getData(h, d), j && j.i18n && (j.i18n = a.extend({}, H.i18n, j.i18n)), k = a.extend({}, H, j), h.data(z, k), l = k.i18n, String.prototype.startsWith || (String.prototype.startsWith = function(a, b) {
                    return b = b || 0, this.substr(b, a.length) === a
                });
                var n, o, q, m = c.getId();
                if (k.noForm) {
                    for (n = "<div class='mrgn-tp-md'><div id='" + m + "'></div></div>", o = g.parentElement;
                        "FORM" !== o.nodeName;) o = o.parentElement;
                    a(o.parentElement).addClass(f)
                } else n = "<div class='wb-frmvld " + f + "'><form><div id='" + m + "'>", n = n + '</div><input type="submit" value="' + l.btn + '" class="btn btn-primary mrgn-bttm-md" /> </form></div>';
                h.addClass("hidden"), n = a(n), h.after(n), k.noForm || (o = n.find("form"), n.trigger("wb-init.wb-frmvld")), q = a(o), K(q, x, i), k.outputctnrid || (k.outputctnrid = m), k.source || (k.source = g), k.srctype || (k.srctype = d), k.inline = !!k.inline, h.trigger(k.srctype + "." + p, k), k.unhideelm && a(k.unhideelm).removeClass("hidden"), k.hideelm && a(k.hideelm).addClass("hidden"), c.ready(h, d), k.ext && (k.form = q.get(0), h.trigger(k.ext + "." + t, k))
            }
        },
        K = function(a, b, c, d) {
            var e = a.data(b);
            return e && !d || (e = []), e.push(c), a.data(b, e)
        },
        L = function(a, b) {
            var c = b.form,
                d = b.url;
            d && c.setAttribute("action", d)
        },
        M = function(a, b) {
            var c = b.$selElm,
                d = b.name,
                e = b.value;
            d && b.provEvt.setAttribute("name", d), e && c.val(e), c.attr("data-" + F, F)
        },
        N = function(b, c) {
            var e, d = c.provEvt;
            c.live ? (c.container || (e = a("<div></div>"), a(d.parentNode).append(e), c.container = e.get(0)), a(b.target).trigger("ajax." + r, c)) : (c.preventSubmit = !0, K(a(d), B, c))
        },
        O = function(b, d) {
            var e, f, g, h = d.clean;
            d.container ? e = a(d.container) : (f = c.getId(), e = a("<div id='" + f + "'></div>"), a(d.form).append(e), h = "#" + f), h && a(d.origin).one(u, function() {
                a(h).empty()
            }), d.trigger && e.attr("data-trigger-wet", "true"), g = d.type ? d.type : "replace", e.attr("data-ajax-" + g, d.url), e.one("wb-contentupdated", function(b, d) {
                var e = b.currentTarget,
                    f = e.getAttribute("data-trigger-wet");
                e.removeAttribute("data-ajax-" + d["ajax-type"]), f && (a(e).find(c.allSelectors).addClass("wb-init").filter(":not(#" + e.id + " .wb-init .wb-init)").trigger("timerpoke.wb"), e.removeAttribute("data-trigger-wet"))
            }), e.trigger("wb-update.wb-data-ajax")
        },
        P = function(b, c) {
            var d = a(c.origin),
                e = a(b.target).data(z),
                f = c.toggle;
            f && "string" == typeof f && (f = {
                selector: f
            }), f = a.extend({}, f, e.toggle), d.addClass("wb-toggle"), d.trigger("toggle.wb-toggle", f), f.type = "off", d.one(u, function() {
                d.addClass("wb-toggle"), d.trigger("toggle.wb-toggle", f), d.removeClass("wb-toggle")
            })
        },
        Q = function(b, c) {
            if (b.namespace === q) {
                var e = c.srctype ? c.srctype : d;
                if (c.container = c.provEvt.parentNode.id, !c.source) throw "A source is required to append a field flow control.";
                a(b.currentTarget).trigger(e + "." + p, c)
            }
        },
        R = function(b, c) {
            if (b.namespace === q) {
                var f, d = c.source,
                    e = a(d).dataTable({
                        retrieve: !0
                    }).api(),
                    g = c.column,
                    h = parseInt(g, 10),
                    i = !!c.regex,
                    j = !c.smart || !!c.smart,
                    k = !c.caseinsen || !!c.caseinsen;
                g = !0 === h ? h : g, f = e.column(g), f.search(c.value, i, j, k).draw(), a(c.provEvt).one(u, function() {
                    f.search("").draw()
                })
            }
        },
        S = function(b, c) {
            if (b.namespace === p) {
                var f, i, j, k, l, m, n, o, r, y, z, A, B, d = c.column,
                    e = c.csvextract,
                    g = c.source,
                    h = a(g),
                    q = [],
                    s = c.label,
                    t = c.defaultselectedlabel,
                    u = c.lblselector,
                    v = c.fltrseq ? c.fltrseq : [],
                    x = c.limit ? c.limit : 10;
                if (!h.hasClass("wb-tables-inited")) return h.one("wb-ready.wb-tables", function() {
                    a(b.target).trigger("tblfilter." + p, c)
                }), !1;
                if (i = h.dataTable({
                        retrieve: !0
                    }).api(), i.rows({
                        search: "applied"
                    }).data().length <= x) return !0;
                if (B = c.renderas ? c.renderas : "select", !d && v.length) {
                    if (r = v.shift(), !r.column) throw "Column is undefined in the filter sequence";
                    d = r.column, e = r.csvextract, t = r.defaultselectedlabel, s = r.label, u = r.lblselector
                }
                if (f = i.column(d, {
                        search: "applied"
                    }), e)
                    for (j = f.data(), l = 0, m = j.length; l !== m; l += 1) q = q.concat(j[l].split(","));
                else
                    for (j = f.nodes(), l = 0, m = j.length; l !== m; l += 1)
                        for (k = a(j[l]).find("li"), n = 0, o = k.length; n !== o; n += 1) q.push(a(k[n]).text());
                q = q.sort().filter(function(a, b, c) {
                    return !b || a !== c[b - 1]
                });
                var C = b.target,
                    D = a(C),
                    E = [],
                    F = c.actions ? c.actions : [];
                for (v.length && (y = v[0], A = {
                        action: "append",
                        srctype: "tblfilter",
                        source: g,
                        renderas: y.renderas ? y.renderas : B,
                        fltrseq: v,
                        limit: x
                    }), l = 0, m = q.length; l !== m; l += 1) r = q[l], z = {
                    label: r,
                    actions: [{
                        action: "tblfilter",
                        source: g,
                        column: d,
                        value: r
                    }]
                }, A && z.actions.push(A), E.push(z);
                s || (s = f.header().textContent), c.outputctnrid || (c.outputctnrid = c.provEvt.parentElement.id), D.trigger(B + "." + w, {
                    actions: F,
                    source: h.get(0),
                    outputctnrid: c.outputctnrid,
                    label: s,
                    defaultselectedlabel: t,
                    lblselector: u,
                    items: E,
                    inline: c.inline
                })
            }
        },
        T = function(b, e) {
            if (b.namespace === p) {
                var i, n, o, r, t, u, v, f = b.target,
                    h = a(f),
                    j = a(e.source),
                    k = j.get(0),
                    q = e.lblselector || "." + l,
                    s = e.itmselector || "ul:first() > li";
                j.hasClass(g) && (i = c.getData(j, d), j.data(z, i), e = a.extend({}, e, i)), u = e.actions || [], v = e.renderas ? e.renderas : "select", k.id || (k.id = c.getId()), o = j.children().first(), o.hasClass(m) ? (r = o.html(), s = "." + m + " + " + s) : (n = o.find(q), r = n.length ? n.html() : j.find("> p").html(), q = null), t = W(j.find(s)), e.outputctnrid || (e.outputctnrid = e.provEvt.parentElement.id), h.trigger(v + "." + w, {
                    actions: u,
                    source: k,
                    attributes: e.attributes,
                    outputctnrid: e.outputctnrid,
                    label: r,
                    lblselector: q,
                    defaultselectedlabel: e.defaultselectedlabel,
                    required: !e.isoptional,
                    noreqlabel: e.noreqlabel,
                    items: t,
                    inline: e.inline
                })
            }
        },
        U = function(b, d) {
            var v, w, y, B, F, G, H, I, J, e = d.outputctnrid,
                f = a("#" + e),
                g = d.actions,
                i = d.lblselector,
                k = !!d.required,
                l = !d.noreqlabel,
                m = d.items,
                n = b.target,
                o = a(n),
                p = d.source,
                q = d.attributes,
                r = o.data(z).i18n,
                s = c.getId(),
                t = "<label for='" + s + "'",
                u = "</span>",
                C = d.defaultselectedlabel ? d.defaultselectedlabel : r.defaultsel;
            if (k && l && (t += " class='required'", u += " <strong class='required'>(" + r.required + ")</strong>"), t += "><span class='field-name'>", u += "</label>", i ? (v = a("<div>" + d.label + "</div>"), w = v.find(i), w.html(t + w.html() + u)) : v = a(t + d.label + u), y = "<select id='" + s + "' name='" + j + s + "' class='full-width form-control mrgn-bttm-md " + h + "' data-" + D + "='" + n.id + "' " + E + "='" + p.id + "'", k && (y += " required"), q && "object" == typeof q)
                for (F in q) q.hasOwnProperty(F) && (y += " " + F + "='" + q[F] + "'");
            for (y += "><option value=''>" + C + "</option>", F = 0, G = m.length; F !== G; F += 1)
                if (J = m[F], J.group) {
                    for (y += "<optgroup label='" + J.label + "'>", I = J.group.length, H = 0; H !== I; H += 1) y += X(J.group[H]);
                    y += "</optgroup>"
                } else y += X(J);
            y += "</select>", B = a(y), f.append(v).append(B), g && g.length > 0 && B.data(A, g), K(o, x, s)
        },
        V = function(b, d) {
            var v, w, y, B, I, J, L, M, N, e = d.outputctnrid,
                f = d.actions,
                g = d.lblselector,
                i = !!d.required,
                k = !d.noreqlabel,
                l = d.items,
                m = b.target,
                n = a(m),
                o = d.source,
                p = n.data(z).i18n,
                q = d.attributes,
                r = c.getId(),
                s = "<legend class='h5 ",
                t = "</span>",
                u = "<fieldset id='" + r + "' data-" + D + "='" + m.id + "' " + E + "='" + o.id + "' class='" + h + " mrgn-bttm-md'",
                C = "",
                F = d.typeRadCheck,
                G = d.inline,
                H = j + r;
            if (q && "object" == typeof q)
                for (I in q) q.hasOwnProperty(I) && (u += " " + I + "='" + q[I] + "'");
            for (v = a(u + "></fieldset>"), i && k && (s += " required", t += " <strong class='required'>(" + p.required + ")</strong>"), s += "'>", t += "</legend>", g ? (y = a("<div>" + d.label + "</div>"), w = y.find(g), v.append(s + w.html() + t).append(w.nextAll()), B = w.prevAll()) : v.append(a(s + d.label + t)), I = 0, J = l.length; I !== J; I += 1)
                if (N = l[I], N.group)
                    for (C += "<p>" + N.label + "</p>", M = N.group.length, L = 0; L !== M; L += 1) C += Z(N.group[L], H, F, G, i);
                else C += Z(N, H, F, G, i);
            v.append(C), a("#" + e).append(v), B && v.before(B), f && f.length > 0 && v.data(A, f), K(n, x, r)
        },
        W = function(b, e) {
            var h, j, k, m, n, o, p, q, r, s, t, u, w, f = b.get(),
                i = f.length,
                v = [];
            for (h = 0; h !== i; h += 1) {
                if (j = f[h], m = "", n = null, k = "", r = j.firstChild, q = j.childNodes, p = q.length, !r) throw "You have a markup error, There may be an empyt <li> elements in your list.";
                for (w = [], "A" === r.nodeName && (m = r.getAttribute("href"), k = a(r).html(), p = 1, w.push({
                        action: "redir",
                        url: m
                    })), o = 1; o !== p; o += 1) {
                    if (s = q[o], t = a(s), t.hasClass(g)) {
                        u = s.id || c.getId(), s.id = u, m = d + "-" + u, w.push({
                            action: "append",
                            srctype: d,
                            source: "#" + u
                        });
                        break
                    }
                    if ("UL" === s.nodeName) {
                        if (e) throw "Recursive error, please check your code";
                        n = W(t.children(), !0)
                    }
                    t.hasClass(l) && (k = t.html())
                }
                k || (k = r.nodeValue), j.id || (j.id = c.getId()), v.push({
                    bind: j.id,
                    label: k,
                    actions: w,
                    group: n
                })
            }
            return v
        },
        X = function(a) {
            var b = a.label,
                c = "<option value='" + b + "'";
            return c += Y(a), c += ">" + b + "</option>"
        },
        Y = function(a) {
            var b = "",
                c = {};
            return c.bind = a.bind || "", c.actions = a.actions || [], b += " data-" + d + "='" + JSON.stringify(c) + "'"
        },
        Z = function(a, b, d, e, f) {
            var g = a.label,
                h = c.getId(),
                i = e ? "-inline" : "",
                j = " for='" + h + "'><input id='" + h + "' type='" + d + "' name='" + b + "' value='" + g + "'";
            return j = e ? "<label class='" + d + i + "'" + j : "<div class='" + d + "'><label" + j, j += Y(a), f && (j += " required='required'"), j += " /> " + g + "</label>", e || (j += "</div>"), j
        };
    G.on(v, e + ", ." + g, function(b) {
        var d, e, f, h, i, j, k, l, c = b.target,
            g = [];
        if (c === b.currentTarget && (d = a(c), (e = d.data(z)) && e.reset))
            for (f = e.reset, a.isArray(f) ? g = f : g.push(f), i = g.length, h = 0; h !== i; h += 1) j = g[h], (k = j.action) && (l = j.live, !1 !== l && (j.live = !0), d.trigger(k + "." + q, j))
    }), G.on("change", n + " " + i, function(e) {
        var h, i, j, k, l, m, o, p, f = e.currentTarget,
            g = a(f),
            n = g.nextAll(),
            r = a("#" + f.getAttribute("data-" + D)),
            s = a("#" + f.getAttribute(E)),
            t = r.data(x),
            w = g.find(":checked", g),
            y = g.get(0).form;
        if (k = n.length) {
            for (j = k; 0 !== j; j -= 1)(o = n[j]) && (p = t.indexOf(o.id), p > -1 && t.splice(p, 1), a("#" + o.getAttribute(E)).trigger(v).trigger(u), a(o).trigger(u));
            r.data(x, t), n.remove()
        }
        s.trigger(v).trigger(u), g.trigger(u), g.data(B, []);
        var G, H, I, J, K, L, M, P, Q, R, F = [],
            N = [],
            O = [];
        for (G = r.data(z), H = s.data(z), H && G && (G = a.extend({}, G, H)), w.length && w.val() && G && G.default && (i = G.default, a.isArray(i) ? F = i : F.push(i)), K = G.action, L = G.prop, C = G.actionData || {}, i = g.data(A), i && (F = F.concat(i)), j = 0, k = w.length; j !== k; j += 1)
            if (h = w.get(j), (I = c.getData(h, d)) && (Q = I.bind, F = F.concat(I.actions), Q && (R = b.getElementById(Q), J = R.getAttribute("data-" + d)))) {
                if (J.startsWith("{") || J.startsWith("[")) {
                    try {
                        i = JSON.parse(J)
                    } catch (b) {
                        a.error("Bad JSON object " + J)
                    }
                    a.isArray(i) || (i = [i])
                } else i = {}, i.action = K, i[L] = J, i = a.extend(!0, {}, C, i), i = [i];
                F = F.concat(i)
            }
        if (!F.length) return !0;
        for (j = 0, k = F.length; j !== k; j += 1) l = F[j], m = l.target, m && m !== Q ? O.push(l) : N.push(l);
        for (M = G.base || {}, P = O.length, j = 0, k = N.length; j !== k; j += 1) l = a.extend({}, M, N[j]), l.origin = s.get(0), l.provEvt = f, l.$selElm = w, l.form = y, P && (l.actions = O), r.trigger(l.action + "." + q, l);
        return !0
    }), G.on("submit", n + " form", function(b) {
        var g, h, j, l, n, o, p, t, v, w, A, C, E, F, H, c = b.currentTarget,
            d = a(c),
            e = d.data(x),
            f = d.data(y) || [],
            i = e ? e.length : 0,
            m = [],
            q = [],
            G = !1;
        for (i && (j = a("#" + e[i - 1]), l = j.data(x), a("#" + l[l.length - 1]).trigger(u), j.trigger(u)), h = 0; h !== i; h += 1)
            for (j = a("#" + e[h]), n = j.data(x), w = n.length, v = 0; v !== w; v += 1)
                if (o = a("#" + n[v]), p = a("#" + o.data(D)), q.push(p), F = o.data(B))
                    for (A = 0, C = F.length; A !== C; A += 1) E = F[A], E.form = c, j.trigger(E.action + "." + r, E), m.push({
                        $elm: j,
                        data: E
                    }), G = G || E.preventSubmit, H = E.provEvt;
        if (!G) {
            for (d.find(k).removeAttr("name"), i = f.length, h = 0; h !== i; h += 1) a(f[h]).remove();
            f = [];
            var I, J, K, L, M, N, O;
            if ((I = d.attr("action")) && (J = I.indexOf("?")) > 0) {
                for (K = I.substring(J + 1), O = K.split("&"), i = O.length, h = 0; h !== i; h += 1) L = O[h], M = L, L.indexOf("=") > 0 && (N = L.split("=", 2), M = N[0], L = N[1]), g = a("<input type='hidden' name='" + M + "' value='" + L + "' />"), d.append(g), f.push(g.get(0));
                d.data(y, f)
            }
        }
        for (i = q.length, h = 0; h !== i; h += 1) p = q[h], t = p.data(z), t.action && m.push({
            $elm: p,
            data: t
        });
        for (i = m.length, h = 0; h !== i; h += 1) E = m[h], E.data.lastProvEvt = H, E.$elm.trigger(E.data.action + "." + s, E.data);
        if (G) return b.preventDefault(), b.stopPropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0, !1
    }), G.on("keyup", n + " select", function(b) {
        if (-1 !== navigator.userAgent.indexOf("Gecko")) return !(!b.keyCode || 1 !== b.keyCode && 9 !== b.keyCode && 16 !== b.keyCode && !b.altKey && !b.ctrlKey) || (a(b.target).trigger("change"), !0)
    }), G.on(I, e, function(b, c) {
        var e = b.type;
        switch (b.namespace) {
            case p:
                switch (e) {
                    case d:
                        T(b, c);
                        break;
                    case "tblfilter":
                        S(b, c)
                }
                break;
            case w:
                switch (e) {
                    case "select":
                        U(b, c);
                        break;
                    case "checkbox":
                        c.typeRadCheck = "checkbox", V(b, c);
                        break;
                    case "radio":
                        c.typeRadCheck = "radio", V(b, c)
                }
                break;
            case q:
                switch (e) {
                    case "append":
                        Q(b, c);
                        break;
                    case "redir":
                        K(a(c.provEvt), B, c, !0);
                        break;
                    case "ajax":
                        N(b, c);
                        break;
                    case "tblfilter":
                        R(b, c);
                        break;
                    case "toggle":
                        c.live ? P(b, c) : (c.preventSubmit = !0, K(a(c.provEvt), B, c));
                        break;
                    case "addClass":
                        if (!c.source || !c.class) return;
                        c.live ? a(c.source).addClass(c.class) : (c.preventSubmit = !0, K(a(c.provEvt), B, c));
                        break;
                    case "removeClass":
                        if (!c.source || !c.class) return;
                        c.live ? a(c.source).removeClass(c.class) : (c.preventSubmit = !0, K(a(c.provEvt), B, c));
                        break;
                    case "query":
                        M(b, c)
                }
                break;
            case r:
                switch (e) {
                    case "redir":
                        L(b, c);
                        break;
                    case "ajax":
                        O(b, c);
                        break;
                    case "toggle":
                        P(b, c);
                        break;
                    case "addClass":
                        a(c.source).addClass(c.class);
                        break;
                    case "removeClass":
                        a(c.source).removeClass(c.class)
                }
        }
    }), G.on("timerpoke.wb " + o, e, function(a) {
        switch (a.type) {
            case "timerpoke":
            case "wb-init":
                J(a)
        }
        return !0
    }), c.add(e)
}(jQuery, document, wb);
