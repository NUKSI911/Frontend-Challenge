(this.webpackJsonpenyi = this.webpackJsonpenyi || []).push([
  [0],
  {
    19: function (e, t, n) {},
    20: function (e, t, n) {},
    21: function (e, t, n) {},
    36: function (e, t, n) {},
    46: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(0),
        r = n(1),
        s = n.n(r),
        a = n(9),
        i = n.n(a),
        j = (n(19), n(13)),
        l = n(2);
      n(20);
      function d(e) {
        e.term;
        var t = e.handleSearch;
        return Object(c.jsx)(s.a.Fragment, {
          children: Object(c.jsx)("input", {
            type: "text",
            class: "form-control",
            placeholder: "Search",
            onChange: t,
          }),
        });
      }
      n(21);
      function o(e) {
        var t = e.record,
          n = e.index;
        return Object(c.jsxs)("tr", {
          children: [
            Object(c.jsx)("td", { children: n + 1 }),
            Object(c.jsx)("td", { children: t.FirstName }),
            Object(c.jsxs)("td", { children: [" ", t.LastName] }),
            Object(c.jsxs)("td", { children: [" ", t.Gender] }),
            Object(c.jsxs)("td", { children: [" ", t.PhoneNumber] }),
            Object(c.jsx)("td", { children: t.UserName }),
            Object(c.jsxs)("td", { children: [" ", t.Email] }),
            Object(c.jsx)("td", { children: t.PaymentMethod }),
            Object(c.jsx)("td", { children: t.CreditCardNumber }),
            Object(c.jsx)("td", { children: t.CreditCardType }),
            Object(c.jsx)("td", { children: t.URL }),
            Object(c.jsxs)("td", { children: [" ", t.MacAddress] }),
            Object(c.jsx)("td", { children: t.LastLogin }),
            Object(c.jsxs)("td", {
              children: [t.Longitude, " ", t.Latitude, " "],
            }),
            Object(c.jsxs)("td", { children: [" ", t.DomainName] }),
          ],
        });
      }
      var h = n(49),
        u = n(10),
        b = n.n(u);
      n(36);
      function O(e) {
        var t = e.result,
          n = e._filterUpdated;
        return 0 === t.length
          ? Object(c.jsx)("div", {
              className: "spinner",
              children: Object(c.jsx)(h.a, { color: "#ffdf00", size: 150 }),
            })
          : Object(c.jsxs)("table", {
              class: "styled-table",
              children: [
                Object(c.jsx)("caption", { children: "Profile Information" }),
                Object(c.jsx)("thead", {
                  children: Object(c.jsxs)(b.a, {
                    rows: t,
                    onFilterUpdate: n,
                    children: [
                      Object(c.jsx)("th", { children: "No" }),
                      Object(c.jsx)(
                        "th",
                        {
                          filterkey: "FirstName",
                          className: "cell",
                          casesensitive: "true",
                          showsearch: "true",
                          children: "FirstName",
                        },
                        "FirstName"
                      ),
                      Object(c.jsx)(
                        "th",
                        {
                          filterkey: "LastName",
                          className: "cell",
                          casesensitive: "true",
                          showsearch: "true",
                          children: "LastName",
                        },
                        "LastName"
                      ),
                      Object(c.jsx)(
                        "th",
                        {
                          filterkey: "Gender",
                          className: "cell",
                          casesensitive: "true",
                          showsearch: "true",
                          children: "Gender",
                        },
                        "Gender"
                      ),
                      Object(c.jsx)("th", { children: "PhoneNumber" }),
                      Object(c.jsx)("th", { children: "UserName" }),
                      Object(c.jsx)("th", { children: "Email" }),
                      Object(c.jsx)("th", { children: "PaymentMethod" }),
                      Object(c.jsx)("th", { children: "CC-No" }),
                      Object(c.jsx)("th", { children: "CC  Type" }),
                      Object(c.jsx)("th", { children: "Url" }),
                      Object(c.jsx)("th", { children: "MacAddress" }),
                      Object(c.jsx)("th", { children: "LastLogin" }),
                      Object(c.jsx)("th", { children: "Location" }),
                      Object(c.jsx)("th", { children: "DomainName" }),
                    ],
                  }),
                }),
                Object(c.jsx)("tbody", {
                  children: t.map(function (e, t) {
                    return Object(c.jsx)(o, { index: t, record: e }, t);
                  }),
                }),
              ],
            });
      }
      var x = n(6),
        f = n.n(x),
        m = n(11);
      function p() {
        return (p = Object(m.a)(
          f.a.mark(function e(t) {
            return f.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      fetch(t)
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          return e.records.profiles;
                        })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var g = n(12),
        N = n.n(g);
      n(43);
      function v() {
        var e = Object(r.useState)([]),
          t = Object(l.a)(e, 2),
          n = t[0],
          a = t[1],
          i = Object(r.useState)(""),
          o = Object(l.a)(i, 1)[0],
          h = Object(r.useState)(0),
          u = Object(l.a)(h, 2),
          b = u[0],
          x = u[1],
          f = Object(r.useState)(20),
          m = Object(l.a)(f, 2),
          g = m[0],
          v = m[1],
          C = Object(r.useState)([]),
          L = Object(l.a)(C, 2),
          y = L[0],
          w = L[1];
        Object(r.useEffect)(function () {
          (function (e) {
            return p.apply(this, arguments);
          })("http://api.enye.tech/v1/challenge/records")
            .then(function (e) {
              return a(Object(j.a)(e));
            })
            .catch(function (e) {
              throw new Error(e);
            });
        }, []);
        var F = 0 !== y.length ? y : n;
        return Object(c.jsxs)(s.a.Fragment, {
          children: [
            Object(c.jsx)(d, {
              term: o,
              handleSearch: function (e) {
                var t = e.target.value;
                if (t) {
                  console.log(t);
                  var c = n.filter(function (e) {
                    return Object.keys(e).some(function (n) {
                      return String(e[n])
                        .toLowerCase()
                        .includes(t.toLowerCase());
                    });
                  });
                  console.log(c),
                    w(function () {
                      return c;
                    });
                }
              },
            }),
            Object(c.jsx)(N.a, {
              previousLabel: "previous",
              nextLabel: "next",
              breakLabel: "...",
              breakClassName: "break-me",
              pageCount: F.length / 20,
              onPageChange: function (e) {
                0 !== e.selected &&
                  (x(function () {
                    return 20 * e.selected;
                  }),
                  v(function (e) {
                    return e + 20;
                  }));
              },
              containerClassName: "pagination",
              subContainerClassName: "pages pagination",
              activeClassName: "active",
            }),
            Object(c.jsx)(O, {
              result: F.slice(b, g),
              _filterUpdated: function (e, t) {
                w(function () {
                  return e;
                });
              },
            }),
          ],
        });
      }
      var C = function (e) {
        e &&
          e instanceof Function &&
          n
            .e(3)
            .then(n.bind(null, 50))
            .then(function (t) {
              var n = t.getCLS,
                c = t.getFID,
                r = t.getFCP,
                s = t.getLCP,
                a = t.getTTFB;
              n(e), c(e), r(e), s(e), a(e);
            });
      };
      n(44), n(45);
      i.a.render(Object(c.jsx)(v, {}), document.getElementById("root")), C();
    },
  },
  [[46, 1, 2]],
]);
//# sourceMappingURL=main.155fb788.chunk.js.map
