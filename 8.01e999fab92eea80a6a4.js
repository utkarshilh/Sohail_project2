(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "3RXh": function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "WelcomeBrowserModule", function () {
          return oe;
        });
      var a,
        o,
        i,
        c,
        r = n("tyNb"),
        l = n("ofXK"),
        g = n("iWY5"),
        s = n("mrSG"),
        b = n("fXoL"),
        d = n("/OFL"),
        p = n("1fU5"),
        m = n("J2hM"),
        f = (function () {
          function t(t) {
            (this.translateService = t),
              (this.languageData = this.translateService.currentLang);
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(b.Lb(g.b));
            }),
            (t.ɵcmp = b.Fb({
              type: t,
              selectors: [["app-above-the-fold"]],
              decls: 22,
              vars: 5,
              consts: function () {
                return [
                  [1, "above-the-fold", "img-loading-placeholder"],
                  [
                    "media",
                    "(max-height: 600px) and (max-width: 1200px)",
                    "srcset",
                    "assets/custom/above-the-fold-bg-sm-landscape.jpg",
                  ],
                  [
                    "media",
                    "(min-width: 992px)",
                    "srcset",
                    "assets/custom/above-the-fold-bg-xl.jpg",
                  ],
                  [
                    "media",
                    "(min-width: 768px)",
                    "srcset",
                    "assets/custom/above-the-fold-bg-md.jpg",
                  ],
                  [
                    "media",
                    "(min-width: 576px)",
                    "srcset",
                    "assets/custom/above-the-fold-bg-sm.jpg",
                  ],
                  [
                    "src",
                    "assets/custom/above-the-fold-bg-xs.jpg",
                    1,
                    "bg-img",
                  ],
                  [1, "bottom-bg"],
                  [1, "above-the-fold-content"],
                  [1, "above-the-fold-text"],
                  "Reap higher yields with the help of the Plantix App",
                  "Your Crop Doctor",
                  [
                    "target",
                    "_blank",
                    "appAnalyticsClick",
                    "",
                    "gaEventName",
                    "griz_home_click_atf_dl_btn",
                    "gaEventCategory",
                    "click",
                    "gaEventLabel",
                    "web",
                    "gaEventValue",
                    "0",
                    1,
                    "button-download",
                    "colorpulse",
                    3,
                    "href",
                    "languageCode",
                  ],
                  "GET THE APP!",
                  [1, "above-the-fold-fg"],
                  ["media", "(min-width: 1px)", 3, "srcset"],
                  [
                    "appAnalyticsClick",
                    "",
                    "gaEventName",
                    "griz_home_click_atf_phone_img",
                    "gaEventCategory",
                    "click",
                    "gaEventLabel",
                    "web",
                    "gaEventValue",
                    "0",
                    1,
                    "above-the-fold-fg-img",
                    3,
                    "languageCode",
                    "src",
                    6,
                    "alt",
                  ],
                  ["alt", "Plantix"],
                ];
              },
              template: function (t, e) {
                1 & t &&
                  (b.Rb(0, "div", 0),
                  b.Rb(1, "picture"),
                  b.Mb(2, "source", 1),
                  b.Mb(3, "source", 2),
                  b.Mb(4, "source", 3),
                  b.Mb(5, "source", 4),
                  b.Mb(6, "img", 5),
                  b.Qb(),
                  b.Mb(7, "div", 6),
                  b.Rb(8, "div", 7),
                  b.Rb(9, "div", 8),
                  b.Rb(10, "p"),
                  b.Vb(11, 9),
                  b.Qb(),
                  b.Rb(12, "h1"),
                  b.Vb(13, 10),
                  b.Qb(),
                  b.Mb(14, "br"),
                  b.Rb(15, "a", 11),
                  b.Vb(16, 12),
                  b.Qb(),
                  b.Qb(),
                  b.Rb(17, "div", 13),
                  b.Rb(18, "picture"),
                  b.Mb(19, "source", 14),
                  b.Rb(20, "img", 15),
                  b.Wb(21, 16),
                  b.Qb(),
                  b.Qb(),
                  b.Qb(),
                  b.Qb(),
                  b.Qb()),
                  2 & t &&
                    (b.yb(15),
                    b.lc("href", e.languageData.playStoreUrl, b.wc),
                    b.lc("languageCode", e.languageData.code),
                    b.yb(4),
                    b.mc(
                      "srcset",
                      "assets/custom/homescreen/homescreen-",
                      e.languageData.code,
                      ".png",
                      b.wc
                    ),
                    b.yb(1),
                    b.lc("languageCode", e.languageData.code),
                    b.mc(
                      "src",
                      "assets/custom/homescreen/homescreen-",
                      e.languageData.code,
                      ".png",
                      b.wc
                    ));
              },
              directives: [m.a],
              styles: [
                '.appear[_ngcontent-%COMP%]{animation-name:appear;animation-duration:.3s;animation-iteration-count:1;animation-timing-function:linear}@keyframes appear{0%{opacity:0}to{opacity:1}}body[_ngcontent-%COMP%]{padding:0;outline:none;margin:0;background-color:#030101;font-family:PlantixText,PlantixTextFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif}body[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#676767}p[_ngcontent-%COMP%]{font-size:16px;line-height:175%}.element-header[_ngcontent-%COMP%]{padding-top:30px;width:70%;margin:0 auto}.center[_ngcontent-%COMP%], .element-header[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{color:#009788;margin-top:50px}.wrapper[_ngcontent-%COMP%]{width:100%;text-align:center;position:relative;left:0;top:0;overflow:hidden}.container[_ngcontent-%COMP%]{justify-content:space-between;text-align:left;margin:0 auto;align-items:center}.inset-shadow[_ngcontent-%COMP%]:after, .inset-shadow[_ngcontent-%COMP%]:before{content:" ";background-image:url(https://plantix.net/en/assets/img/gradient-velvet.png);height:6px;width:100%;display:block;position:absolute;top:0;left:0}.inset-shadow[_ngcontent-%COMP%]:after{transform:rotate(180deg);top:auto;bottom:0}.button-download[_ngcontent-%COMP%]{display:inline-block;width:auto;max-width:100%;bottom:0;color:#fff;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:1.3rem;border:2px solid #fff;border-radius:15px;padding:20px 40px;margin:0;position:relative;overflow:hidden;cursor:pointer}@media screen and (max-width:575px){.button-download[_ngcontent-%COMP%]{margin:0 auto}}.button-download[_ngcontent-%COMP%]:hover{background-color:#fff;animation:none!important;color:#009788;border:2px solid #009688}hr[_ngcontent-%COMP%]{display:block;margin:0 auto;height:0;border-top:1px solid #f0f0f0;border-bottom:none;color:#f0f0f0;background-color:#f0f0f0}.bigNumbers[_ngcontent-%COMP%]{display:block;min-height:200px}',
                ".bg-img[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;min-height:100vh;top:0;left:0;object-fit:cover;object-position:center 150px;z-index:100}.above-the-fold-fg[_ngcontent-%COMP%]{height:100%;position:relative;text-align:center;z-index:150}.above-the-fold-fg[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{margin:0 auto}.header-background[_ngcontent-%COMP%]{z-index:100;position:absolute;width:100%;height:80px;background:#009688}.above-the-fold[_ngcontent-%COMP%]{position:relative;z-index:90;width:100%;height:auto;margin:0;background-color:#fff}@media (min-width:1200px){.above-the-fold[_ngcontent-%COMP%]{overflow:hidden}}.above-the-fold[_ngcontent-%COMP%]   .bottom-bg[_ngcontent-%COMP%]{width:100%;height:calc(100% - 150px);z-index:80;position:absolute;background-color:#fff;bottom:0}.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]{position:relative;padding-top:50px;width:100%;height:auto;min-height:calc(100vh - 50px)}.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]   .button-download[_ngcontent-%COMP%]:hover{background-color:#fff;animation:none!important;color:#009788;border:2px solid #009688}.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]   .button-download[_ngcontent-%COMP%]{display:inline-block;width:auto;max-width:100%;bottom:0;color:#fff;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:1.3rem;border:2px solid #fff;border-radius:15px;padding:20px 40px;margin:0;position:relative;overflow:hidden;cursor:pointer}.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]   .above-the-fold-fg-img[_ngcontent-%COMP%]{position:relative;height:40vh;object-fit:cover;object-position:top center;width:80%;top:0;bottom:auto;min-height:200px;height:auto;max-width:300px;margin-top:45px;margin-right:0;margin-bottom:30px}@media (min-width:768px){.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]   .above-the-fold-fg-img[_ngcontent-%COMP%]{width:80%;margin-top:5vh}}@media (min-width:1400px){.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]   .above-the-fold-fg-img[_ngcontent-%COMP%]{right:0;left:auto;height:auto;position:absolute;width:auto;height:70vh;margin-top:-240px;margin-right:5vw;max-width:1000px}}@media (min-width:1600px){.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]   .above-the-fold-fg-img[_ngcontent-%COMP%]{margin-right:15vw}}@media only screen and (min-width:1400px) and (max-width:2000px) and (min-height:1000px){.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]   .above-the-fold-fg-img[_ngcontent-%COMP%]{max-width:300px;height:auto;margin-right:3vw}}.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]   .above-the-fold-text[_ngcontent-%COMP%]{position:relative;width:100%;padding:0 20px;text-align:center;z-index:200}.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]   .above-the-fold-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:220%;margin:0;padding:0;line-height:220%;color:#009688}@media only screen and (min-width:768px){.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]   .above-the-fold-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:280%}}.above-the-fold[_ngcontent-%COMP%]   .above-the-fold-content[_ngcontent-%COMP%]   .above-the-fold-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:1.8rem;line-height:2.9rem;max-width:375px;color:#555;margin:0 auto}",
              ],
            })),
            t
          );
        })(),
        h = n("RsZ6"),
        u = n("9yu0");
      function x(t, e) {
        if (
          (1 & t &&
            (b.Rb(0, "div", 7),
            b.Rb(1, "picture"),
            b.Mb(2, "source", 8),
            b.Mb(3, "source", 9),
            b.Mb(4, "img", 10),
            b.Qb(),
            b.Qb()),
          2 & t)
        ) {
          var n = b.gc().$implicit,
            a = b.gc();
          b.yb(2),
            b.mc(
              "srcset",
              "assets/custom/photo-feature-",
              n.id,
              "-xl.jpg",
              b.wc
            ),
            b.yb(1),
            b.mc(
              "srcset",
              "assets/custom/photo-feature-",
              n.id,
              "-md.jpg",
              b.wc
            ),
            b.yb(1),
            b.Bb("cover ", n.imageDirection, ""),
            b.lc("alt", a.getString(n.name, "feat-img-alt")),
            b.mc("src", "assets/custom/photo-feature-", n.id, "-xs.jpg", b.wc);
        }
      }
      var w = function (t) {
        return { feature_screenshot: t };
      };
      function M(t, e) {
        if (
          (1 & t &&
            (b.Rb(0, "div", 11),
            b.Rb(1, "picture"),
            b.Mb(2, "source", 9),
            b.Mb(3, "img", 12),
            b.Qb(),
            b.Qb()),
          2 & t)
        ) {
          var n = b.gc().$implicit,
            a = b.gc();
          b.yb(2),
            b.mc("srcset", "assets/custom/en-", n.name, ".png", b.wc),
            b.yb(1),
            b.Bb("cover fade-in ", n.imageDirection, ""),
            b.lc("languageCode", a.languageData.code),
            b.lc("alt", a.getString("phone", n.name)),
            b.mc(
              "src",
              "assets/custom/icons/icon-",
              n.name,
              "-mobile.svg",
              b.wc
            ),
            b.kc("gaParameters", b.pc(8, w, n.name));
        }
      }
      var C = function (t) {
        return { feature: t };
      };
      function v(t, e) {
        if (1 & t) {
          var n = b.Sb();
          b.Pb(0),
            b.Rb(1, "div", 2),
            b.cc("appDeferLoad", function () {
              b.uc(n);
              var t = e.$implicit;
              return b.gc().revealFeature(t.name);
            }),
            b.Rb(2, "div"),
            b.yc(3, x, 5, 7, "div", 3),
            b.Qb(),
            b.yc(4, M, 4, 10, "div", 4),
            b.Rb(5, "div"),
            b.Rb(6, "h3", 5),
            b.Ac(7),
            b.Qb(),
            b.Rb(8, "p"),
            b.Ac(9),
            b.Qb(),
            b.Mb(10, "br"),
            b.Rb(11, "a", 6),
            b.Ac(12),
            b.Qb(),
            b.Qb(),
            b.Qb(),
            b.Ob();
        }
        if (2 & t) {
          var a = e.$implicit,
            o = b.gc();
          b.yb(1),
            b.Cb("feature-block ", a.name, " direction-", a.imageDirection, ""),
            b.lc("gaOnScreenElementName", a.name + "feature text"),
            b.yb(1),
            b.Bb(
              "feature-image-bg img-loading-placeholder  appear ",
              a.imageDirection,
              ""
            ),
            b.yb(1),
            b.kc("ngIf", o.isFeatureInViewport(a.name)),
            b.yb(1),
            b.kc("ngIf", o.isFeatureInViewport(a.name)),
            b.yb(1),
            b.Bb("feature-text ", a.imageDirection, ""),
            b.yb(2),
            b.Bc(o.getString(a.id, "title")),
            b.yb(2),
            b.Bc(o.getString(a.id, "text")),
            b.yb(2),
            b.lc("languageCode", o.languageData.code),
            b.lc("href", o.languageData.playStoreUrl, b.wc),
            b.kc("gaParameters", b.pc(19, C, a.name)),
            b.yb(1),
            b.Cc(" ", o.getString(a.id, "cta-button"), " ");
        }
      }
      var P,
        O,
        _,
        y,
        k,
        D,
        j,
        z,
        I,
        A = (function () {
          function t(t, e) {
            (this.translateService = t),
              (this.dynamicTranslate = e),
              (this.showFeature = {
                healthcheck: !1,
                community: !1,
                advisory: !1,
              }),
              (this.translations = {
                "welcome-feature-1-title": "Diagnose & Treat",
                "welcome-feature-1-text":
                  "Turn your Android phone into a mobile crop doctor: With just one photo, Plantix diagnoses infected crops and offers treatments for any pest, disease or nutrient deficiency problems.",
                "welcome-feature-1-cta-button": "GET IT NOW!",
                "welcome-feature-2-title": "Join The Community!",
                "welcome-feature-2-text":
                  "Benefit from agricultural experts' know-how or help fellow farmers with your knowledge and experience:\nJoin the Plantix Community, the largest social network for farmers worldwide.",
                "welcome-feature-2-cta-button": "JOIN NOW!",
                "welcome-feature-3-title": "Boost Your Yields!",
                "welcome-feature-3-text":
                  "Best farming practices, preventive measures, and fertilizer calculator: Benefit from Plantix Crop Advisory and get a weekly action plan aligned on your crops and conditions.",
                "welcome-feature-3-cta-button": "USE PLANTIX NOW!",
              }),
              (this.features = [
                { name: "healthcheck", id: "1", imageDirection: "right" },
                { name: "community", id: "2", imageDirection: "left" },
                { name: "advisory", id: "3", imageDirection: "right" },
              ]),
              (this.isActive = {
                healthcheck: !1,
                community: !1,
                advisory: !1,
                diseases: !1,
              }),
              (this.activeFeature = null),
              (this.isFeatureActive = !1),
              (this.preventSliding = !1),
              (this.languageData = this.translateService.currentLang);
          }
          return (
            (t.prototype.getString = function (t, e) {
              return "phone" !== e && "feat-img-alt" !== e
                ? this.translations["welcome-feature-" + t + "-" + e]
                : "phone" === e
                ? this.translations["feature-phone-" + t + "-img-alt"]
                : "feat-img-alt" === e
                ? this.translations["feature-image-" + t + "-img-alt"]
                : "";
            }),
            (t.prototype.openFeature = function (t) {
              var e = this;
              (this.activeFeature = t),
                (this.isActive[t] = !0),
                (this.isFeatureActive = !0),
                setTimeout(function () {
                  e.preventSliding = !0;
                }, 500);
            }),
            (t.prototype.closeFeature = function (t) {
              var e = this;
              (this.preventSliding = !1),
                (this.isActive[t] = !1),
                (this.activeFeature = null),
                setTimeout(function () {
                  e.isFeatureActive = !1;
                }, 300);
            }),
            (t.prototype.switchFeature = function (t) {
              (this.isActive[this.activeFeature] = !1), this.openFeature(t);
            }),
            (t.prototype.revealFeature = function (t) {
              var e = this;
              setTimeout(function () {
                e.showFeature[t] = !0;
              }, 300);
            }),
            (t.prototype.isFeatureInViewport = function (t) {
              return this.showFeature[t];
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(b.Lb(g.b), b.Lb(h.a));
            }),
            (t.ɵcmp = b.Fb({
              type: t,
              selectors: [["app-feature-overview"]],
              decls: 2,
              vars: 1,
              consts: [
                [1, "feature-overview"],
                [4, "ngFor", "ngForOf"],
                [
                  "appAnalyticsOnScreen",
                  "",
                  "gaPageName",
                  "HomePage",
                  3,
                  "gaOnScreenElementName",
                  "appDeferLoad",
                ],
                ["class", "img-wrapper", 4, "ngIf"],
                ["class", "feature-image", 4, "ngIf"],
                [1, "app-feature-heading"],
                [
                  "appAnalyticsClick",
                  "",
                  "gaEventName",
                  "griz_home_click_feature_dl_btn",
                  "gaEventCategory",
                  "click",
                  "gaEventLabel",
                  "web",
                  "gaEventValue",
                  "0",
                  "target",
                  "_blank",
                  1,
                  "button-download",
                  "colorpulse",
                  3,
                  "languageCode",
                  "gaParameters",
                  "href",
                ],
                [1, "img-wrapper"],
                ["media", "(min-width: 991px)", 3, "srcset"],
                ["media", "(min-width: 768px)", 3, "srcset"],
                [3, "alt", "src"],
                [1, "feature-image"],
                [
                  "appAnalyticsClick",
                  "",
                  "gaEventName",
                  "griz_home_click_feature_phone",
                  "gaEventCategory",
                  "click",
                  "gaEventLabel",
                  "web",
                  "gaEventValue",
                  "0",
                  3,
                  "languageCode",
                  "gaParameters",
                  "alt",
                  "src",
                ],
              ],
              template: function (t, e) {
                1 & t &&
                  (b.Rb(0, "div", 0),
                  b.yc(1, v, 13, 21, "ng-container", 1),
                  b.Qb()),
                  2 & t && (b.yb(1), b.kc("ngForOf", e.features));
              },
              directives: [l.i, u.a, l.j, m.a],
              styles: [
                '.appear[_ngcontent-%COMP%]{animation-name:appear;animation-duration:.3s;animation-iteration-count:1;animation-timing-function:linear}@keyframes appear{0%{opacity:0}to{opacity:1}}body[_ngcontent-%COMP%]{padding:0;outline:none;margin:0;background-color:#030101;font-family:PlantixText,PlantixTextFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif}body[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#676767}p[_ngcontent-%COMP%]{font-size:16px;line-height:175%}.element-header[_ngcontent-%COMP%]{padding-top:30px;width:70%;margin:0 auto}.center[_ngcontent-%COMP%], .element-header[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{color:#009788;margin-top:50px}.wrapper[_ngcontent-%COMP%]{width:100%;text-align:center;position:relative;left:0;top:0;overflow:hidden}.container[_ngcontent-%COMP%]{justify-content:space-between;text-align:left;margin:0 auto;align-items:center}.inset-shadow[_ngcontent-%COMP%]:after, .inset-shadow[_ngcontent-%COMP%]:before{content:" ";background-image:url(https://plantix.net/en/assets/img/gradient-velvet.png);height:6px;width:100%;display:block;position:absolute;top:0;left:0}.inset-shadow[_ngcontent-%COMP%]:after{transform:rotate(180deg);top:auto;bottom:0}.button-download[_ngcontent-%COMP%]{display:inline-block;width:auto;max-width:100%;bottom:0;color:#fff;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:1.3rem;border:2px solid #fff;border-radius:15px;padding:20px 40px;margin:0;position:relative;overflow:hidden;cursor:pointer}@media screen and (max-width:575px){.button-download[_ngcontent-%COMP%]{margin:0 auto}}.button-download[_ngcontent-%COMP%]:hover{background-color:#fff;animation:none!important;color:#009788;border:2px solid #009688}hr[_ngcontent-%COMP%]{display:block;margin:0 auto;height:0;border-top:1px solid #f0f0f0;border-bottom:none;color:#f0f0f0;background-color:#f0f0f0}.bigNumbers[_ngcontent-%COMP%]{display:block;min-height:200px}',
                ".img-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.feature-overview[_ngcontent-%COMP%]{padding:50px 0}.feature-block[_ngcontent-%COMP%]{position:relative;left:0;top:0;display:block}@media screen and (min-width:768px){.feature-block[_ngcontent-%COMP%]{min-height:40vh;width:100%;background-color:#fff;margin-bottom:50px}}.feature-image[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);width:138px;height:138px;top:calc(40vh);margin-top:-69px;z-index:0}@media screen and (min-width:768px){.feature-image[_ngcontent-%COMP%]{height:30vh;width:20.5vh;left:50%;top:20vh;position:absolute;transform:translate(-50%,-50%);margin-top:0;z-index:1}}.feature-text[_ngcontent-%COMP%]{text-align:center;padding:20px}@media screen and (min-width:768px){.feature-text[_ngcontent-%COMP%]{position:relative;width:50%;height:auto;top:0;display:block}}@media screen and (min-width:1500px) and (min-height:900px){.feature-text[_ngcontent-%COMP%]{position:absolute;width:50%;top:50%;min-height:1px;transform:translateY(-50%);height:auto;display:block}}.feature-image-bg[_ngcontent-%COMP%]{height:40vh;overflow:hidden}@media screen and (min-width:768px){.feature-image-bg[_ngcontent-%COMP%]{display:block;position:absolute;top:0;height:100%;width:50%}}h2[_ngcontent-%COMP%]{font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;color:#009688;font-weight:500;text-align:inherit;margin-bottom:10px;margin-top:0;padding-top:20px;z-index:1;transform:translateZ(500px)}.cover[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:top left}@media screen and (min-width:768px){p[_ngcontent-%COMP%]{padding:0;text-align:inherit;max-width:500px;display:inline-block}.feature-block.direction-right[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%]{padding-right:calc(12vh + 30px);padding-left:20px;text-align:inherit}.feature-block.direction-left[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%]{padding-left:calc(12vh + 30px);padding-right:20px;text-align:inherit;margin-left:50%}.feature-block.direction-left[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{object-position:top right}.feature-block.direction-left[_ngcontent-%COMP%]{text-align:left}.feature-block.direction-right[_ngcontent-%COMP%]{text-align:right}.feature-block.direction-left[_ngcontent-%COMP%]   .feature-image-bg[_ngcontent-%COMP%], .feature-block.direction-right[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%]{left:0;right:auto}.feature-block.direction-left[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%], .feature-block.direction-right[_ngcontent-%COMP%]   .feature-image-bg[_ngcontent-%COMP%]{right:0;left:auto}}@media screen and (min-width:768px) and (max-width:1199px){.feature-block[_ngcontent-%COMP%], .feature-image-bg[_ngcontent-%COMP%]{height:100%}.feature-text[_ngcontent-%COMP%]{top:0}}h3.app-feature-heading[_ngcontent-%COMP%]{font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;color:#009688;font-weight:500;text-align:inherit;margin-bottom:10px;margin-block-start:0;margin-block-end:0;display:block;font-size:1.5em;margin-top:0;padding-top:20px;z-index:1;transform:translateZ(500px)}",
              ],
            })),
            t
          );
        })();
      function S(t, e) {
        1 & t &&
          (b.Rb(0, "div", 12),
          b.Rb(1, "picture", 13),
          b.Mb(2, "source", 14),
          b.Mb(3, "source", 15),
          b.Mb(4, "source", 16),
          b.Rb(5, "img", 17),
          b.Wb(6, 18),
          b.Qb(),
          b.Qb(),
          b.Rb(7, "div", 3),
          b.Rb(8, "p", 19),
          b.Vb(9, 20),
          b.Qb(),
          b.Rb(10, "p"),
          b.Ac(11, "Sam Farr"),
          b.Qb(),
          b.Qb(),
          b.Qb());
      }
      var Q = function (t) {
        return { testimonial_name: t };
      };
      function R(t, e) {
        if ((1 & t && b.Mb(0, "img", 29), 2 & t)) {
          var n = b.gc().$implicit,
            a = b.gc();
          b.lc("languageCode", a.languageData.code),
            b.mc("src", "assets/custom/", n.imageId, ".jpg", b.wc),
            b.kc("gaParameters", b.pc(3, Q, n.name));
        }
      }
      function L(t, e) {
        if (
          (1 & t && (b.Pb(0), b.Rb(1, "p", 30), b.Ac(2), b.Qb(), b.Ob()), 2 & t)
        ) {
          var n = b.gc().$implicit;
          b.yb(2), b.Cc(" ", n.text, " ");
        }
      }
      function N(t, e) {
        if (
          (1 & t &&
            (b.Rb(0, "div", 21),
            b.cc("appDeferLoad", function () {
              return (e.$implicit.show = !0);
            }),
            b.Rb(1, "div", 22),
            b.Rb(2, "picture"),
            b.yc(3, R, 1, 5, "img", 23),
            b.Qb(),
            b.Qb(),
            b.Rb(4, "div", 24),
            b.Rb(5, "p", 25),
            b.Ac(6),
            b.Qb(),
            b.Rb(7, "p", 26),
            b.Ac(8),
            b.Qb(),
            b.Rb(9, "p", 27),
            b.Ac(10),
            b.Qb(),
            b.yc(11, L, 3, 1, "ng-container", 28),
            b.Qb(),
            b.Qb()),
          2 & t)
        ) {
          var n = e.$implicit,
            a = b.gc();
          b.yb(3),
            b.kc("ngIf", n.show),
            b.yb(1),
            b.lc("languageCode", a.languageData.code),
            b.kc("gaParameters", b.pc(8, Q, n.name)),
            b.yb(2),
            b.Bc(n.name),
            b.yb(2),
            b.Dc("", n.district, " \xb7 ", n.country, ""),
            b.yb(2),
            b.Cc("", n.crops, " "),
            b.yb(1),
            b.kc("ngIf", a.showImages);
        }
      }
      function E(t, e) {
        if ((1 & t && b.Mb(0, "img", 37), 2 & t)) {
          var n = b.gc().$implicit;
          b.mc(
            "src",
            "assets/img/testimonials/",
            n.testimonialId,
            "-hd.jpg",
            b.wc
          );
        }
      }
      var T = function (t) {
        return { active: t };
      };
      function F(t, e) {
        if (1 & t) {
          var n = b.Sb();
          b.Rb(0, "div", 31),
            b.Rb(1, "div", 32),
            b.cc("click", function () {
              b.uc(n);
              var t = e.$implicit;
              return b.gc().closeTestimonial(t.testimonialId);
            }),
            b.Qb(),
            b.Rb(2, "picture", 30),
            b.yc(3, E, 1, 1, "img", 33),
            b.Qb(),
            b.Rb(4, "div", 34),
            b.Rb(5, "h3", 25),
            b.Ac(6),
            b.Qb(),
            b.Rb(7, "p", 26),
            b.Ac(8),
            b.Qb(),
            b.Rb(9, "p", 35),
            b.Ac(10),
            b.Qb(),
            b.Qb(),
            b.Rb(11, "div", 36),
            b.cc("click", function () {
              b.uc(n);
              var t = e.$implicit;
              return b.gc().closeTestimonial(t.testimonialId);
            }),
            b.Qb(),
            b.Qb();
        }
        if (2 & t) {
          var a = e.$implicit,
            o = b.gc();
          b.kc("ngClass", b.pc(6, T, o.isActive[a.testimonialId])),
            b.yb(3),
            b.kc("ngIf", o.isActive[a.testimonialId]),
            b.yb(3),
            b.Bc(a.name),
            b.yb(2),
            b.Dc("", a.district, " \xb7 ", a.country, ""),
            b.yb(2),
            b.Bc(a.text);
        }
      }
      var H,
        $,
        U,
        V,
        B,
        q,
        Z,
        K,
        G,
        W,
        Y,
        J,
        X,
        tt,
        et,
        nt,
        at,
        ot,
        it,
        ct,
        rt = (function () {
          function t() {
            (this.showImages = !1),
              (this.testimonials = [
                {
                  testimonialId: "user1",
                  imageId: "user2",
                  name: "Gursewak Singh",
                  district: "Punjab",
                  country: "India",
                  crops: "Cotton, Rice & Wheat",
                  text: "Plantix is my go-to app for quick diagnosis, confirmation, causes and treatment suggestions. Good app in many Indian regional languages.",
                  show: !1,
                },
                {
                  testimonialId: "user2",
                  imageId: "user1",
                  name: "Nilesh Dighe",
                  district: "Maharashtra",
                  country: "India",
                  crops: "Capsicum & Sugarcane",
                  text: "When you talk about new trends in agriculture, I can only think of Plantix. This app is great, especially for plant diagnosis. This is the way to a greener earth.",
                  show: !1,
                },
                {
                  testimonialId: "user3",
                  imageId: "user3",
                  name: "Devidas Shivaji Doudkarwadi",
                  district: "Maharashtra",
                  country: "India",
                  crops: "Cabbage & Groundnut",
                  text: "Plantix is modern magic of agriculture. The Crop Advisory feature is fantastic. Through its step-by-step guide to best practices, the app has helped me improve my outcomes a lot.",
                  show: !1,
                },
              ]),
              (this.isActive = { user1: !1, user2: !1, user3: !1 }),
              (this.activeTestimonial = null),
              (this.isTestimonialActive = !1);
          }
          return (
            (t.prototype.setActive = function (t) {
              (this.activeTestimonial = t),
                (this.isActive[t] = !this.isActive[t]),
                (this.isTestimonialActive = !0);
            }),
            (t.prototype.closeTestimonial = function (t) {
              var e = this;
              (this.isActive[t] = !1),
                setTimeout(function () {
                  e.isTestimonialActive = !1;
                }, 300);
            }),
            (t.prototype.ngOnInit = function () {}),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = b.Fb({
              type: t,
              selectors: [["app-testimonials"]],
              inputs: { languageData: "languageData" },
              decls: 14,
              vars: 6,
              consts: function () {
                return [
                  [3, "appDeferLoad"],
                  [
                    "class",
                    "partner-header appear img-loading-placeholder",
                    4,
                    "ngIf",
                  ],
                  [
                    "appAnalyticsOnScreen",
                    "",
                    "gaOnScreenElementName",
                    "testimonials",
                    "gaPageName",
                    "HomePage",
                    1,
                    "testimonials",
                  ],
                  [1, "container"],
                  [1, "element-header"],
                  "Our Users Speak",
                  "The Plantix app is specialized for all major crops, available in many languages and easy-to-use. This makes Plantix the #1 agricultural app for disease detection, pest control and yield increase. This is what our users say:",
                  [1, "container", "testimonial-previews"],
                  [
                    "class",
                    "testimonial-preview",
                    3,
                    "appDeferLoad",
                    4,
                    "ngFor",
                    "ngForOf",
                  ],
                  [1, "testimonial-wrapper", "overlay", 3, "ngClass"],
                  [1, "close", 3, "click"],
                  [
                    "class",
                    "testimonialcontent",
                    3,
                    "ngClass",
                    4,
                    "ngFor",
                    "ngForOf",
                  ],
                  [1, "partner-header", "appear", "img-loading-placeholder"],
                  [1, "picture-el"],
                  [
                    "media",
                    "(min-width: 991px)",
                    "srcset",
                    "assets/custom/parallax-testimonials-xl.jpg",
                  ],
                  [
                    "media",
                    "(min-width: 768px)",
                    "srcset",
                    "assets/custom/parallax-testimonials-md.jpg",
                  ],
                  [
                    "media",
                    "(min-width: 576px)",
                    "srcset",
                    "assets/custom/parallax-testimonials-sm.jpg",
                  ],
                  [
                    "src",
                    "assets/custom/parallax-testimonials-xs.jpg",
                    1,
                    "testimonial-parallax",
                    6,
                    "alt",
                  ],
                  ["alt", "@@testimonials-parallax-img-alt"],
                  [1, "quote-heading"],
                  "To make agriculture sustainable, the grower has got to be able to make a profit.",
                  [1, "testimonial-preview", 3, "appDeferLoad"],
                  [1, "user-img-wrp", "img-loading-placeholder"],
                  [
                    "appAnalyticsClick",
                    "",
                    "gaEventName",
                    "griz_home_click_testimonial_img",
                    "gaEventCategory",
                    "click",
                    "gaEventLabel",
                    "web",
                    "gaEventValue",
                    "0",
                    "class",
                    "user-img  appear",
                    3,
                    "gaParameters",
                    "languageCode",
                    "src",
                    4,
                    "ngIf",
                  ],
                  [
                    "appAnalyticsClick",
                    "",
                    "gaEventName",
                    "griz_home_click_testimonial_text",
                    "gaEventCategory",
                    "click",
                    "gaEventLabel",
                    "web",
                    "gaEventValue",
                    "0",
                    1,
                    "text",
                    3,
                    "gaParameters",
                    "languageCode",
                  ],
                  [1, "name"],
                  [1, "location"],
                  [1, "crops"],
                  [4, "ngIf"],
                  [
                    "appAnalyticsClick",
                    "",
                    "gaEventName",
                    "griz_home_click_testimonial_img",
                    "gaEventCategory",
                    "click",
                    "gaEventLabel",
                    "web",
                    "gaEventValue",
                    "0",
                    1,
                    "user-img",
                    "appear",
                    3,
                    "gaParameters",
                    "languageCode",
                    "src",
                  ],
                  [1, "quote"],
                  [1, "testimonialcontent", 3, "ngClass"],
                  [1, "closebutton", 3, "click"],
                  ["class", "appear", 3, "src", 4, "ngIf"],
                  [1, "testimonial"],
                  [1, "userquote"],
                  [1, "closebtn", 3, "click"],
                  [1, "appear", 3, "src"],
                ];
              },
              template: function (t, e) {
                1 & t &&
                  (b.Rb(0, "div", 0),
                  b.cc("appDeferLoad", function () {
                    return (e.showImages = !0);
                  }),
                  b.yc(1, S, 12, 0, "div", 1),
                  b.Qb(),
                  b.Rb(2, "div", 2),
                  b.Rb(3, "div", 3),
                  b.Rb(4, "div", 4),
                  b.Rb(5, "h2"),
                  b.Vb(6, 5),
                  b.Qb(),
                  b.Rb(7, "p"),
                  b.Vb(8, 6),
                  b.Qb(),
                  b.Qb(),
                  b.Qb(),
                  b.Rb(9, "div", 7),
                  b.yc(10, N, 12, 10, "div", 8),
                  b.Qb(),
                  b.Rb(11, "div", 9),
                  b.Rb(12, "div", 10),
                  b.cc("click", function () {
                    return e.closeTestimonial(e.activeTestimonial);
                  }),
                  b.Qb(),
                  b.yc(13, F, 12, 8, "div", 11),
                  b.Qb(),
                  b.Qb()),
                  2 & t &&
                    (b.yb(1),
                    b.kc("ngIf", e.showImages),
                    b.yb(9),
                    b.kc("ngForOf", e.testimonials),
                    b.yb(1),
                    b.kc("ngClass", b.pc(4, T, e.isTestimonialActive)),
                    b.yb(2),
                    b.kc("ngForOf", e.testimonials));
              },
              directives: [u.a, l.j, l.i, l.h, m.a],
              styles: [
                '.appear[_ngcontent-%COMP%]{animation-name:appear;animation-duration:.3s;animation-iteration-count:1;animation-timing-function:linear}@keyframes appear{0%{opacity:0}to{opacity:1}}body[_ngcontent-%COMP%]{padding:0;outline:none;margin:0;background-color:#030101;font-family:PlantixText,PlantixTextFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif}body[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#676767}p[_ngcontent-%COMP%]{font-size:16px;line-height:175%}.element-header[_ngcontent-%COMP%]{padding-top:30px;width:70%;margin:0 auto}.center[_ngcontent-%COMP%], .element-header[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{color:#009788;margin-top:50px}.wrapper[_ngcontent-%COMP%]{width:100%;text-align:center;position:relative;left:0;top:0;overflow:hidden}.container[_ngcontent-%COMP%]{justify-content:space-between;text-align:left;margin:0 auto;align-items:center}.inset-shadow[_ngcontent-%COMP%]:after, .inset-shadow[_ngcontent-%COMP%]:before{content:" ";background-image:url(https://plantix.net/en/assets/img/gradient-velvet.png);height:6px;width:100%;display:block;position:absolute;top:0;left:0}.inset-shadow[_ngcontent-%COMP%]:after{transform:rotate(180deg);top:auto;bottom:0}.button-download[_ngcontent-%COMP%]{display:inline-block;width:auto;max-width:100%;bottom:0;color:#fff;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:1.3rem;border:2px solid #fff;border-radius:15px;padding:20px 40px;margin:0;position:relative;overflow:hidden;cursor:pointer}@media screen and (max-width:575px){.button-download[_ngcontent-%COMP%]{margin:0 auto}}.button-download[_ngcontent-%COMP%]:hover{background-color:#fff;animation:none!important;color:#009788;border:2px solid #009688}hr[_ngcontent-%COMP%]{display:block;margin:0 auto;height:0;border-top:1px solid #f0f0f0;border-bottom:none;color:#f0f0f0;background-color:#f0f0f0}.bigNumbers[_ngcontent-%COMP%]{display:block;min-height:200px}',
                '.partner-header[_ngcontent-%COMP%]{height:50vh;right:0;width:100%;color:#fff;overflow:hidden;position:relative;left:0;top:0;display:block}@media screen and (min-width:576px) and (max-width:1200px){.partner-header[_ngcontent-%COMP%]{max-height:500px}}.partner-header[_ngcontent-%COMP%]   picture.picture-el[_ngcontent-%COMP%]{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;display:block}.partner-header[_ngcontent-%COMP%]   img.testimonial-parallax[_ngcontent-%COMP%]{position:absolute;display:block;left:0;top:0;right:0;bottom:0;width:100vw;height:100%;object-fit:cover;object-position:left top}.partner-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{visibility:hidden;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;margin:0;color:#009688;width:100%;font-size:14px;text-align:right;text-shadow:1px 1px 2px rgba(0,0,0,.3);opacity:.7;white-space:nowrap;overflow:hidden}@media (min-width:576px){.partner-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{visibility:visible}}.partner-header[_ngcontent-%COMP%]   p.quote-heading[_ngcontent-%COMP%]{visibility:hidden;color:#009688;width:35%;float:right;text-align:right;margin-left:65%;text-shadow:1px 1px 2px rgba(0,0,0,.3);overflow:hidden;padding-top:20px;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:1.5em;white-space:normal;z-index:1;transform:translateZ(200px)}@media (min-width:576px){.partner-header[_ngcontent-%COMP%]   p.quote-heading[_ngcontent-%COMP%]{visibility:visible}}.testimonials[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:40px 0 60px}.text[_ngcontent-%COMP%]{height:calc(100% - 100px);background-color:#fafafa;padding:60px 20px 20px;margin-top:-60px;border-radius:5px;border:1px solid #bbb}.testimonial-previews[_ngcontent-%COMP%]{display:block;margin:0 auto;left:0;top:0;position:relative}.testimonial-preview[_ngcontent-%COMP%]{width:100%;display:block;text-align:center;box-sizing:border-box;padding:10px}@media only screen and (min-width:768px){.testimonial-previews[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 auto;align-items:stretch}.testimonial-preview[_ngcontent-%COMP%]{width:33.33%;height:auto;display:flex;flex-direction:column;flex:1 0 auto;top:0;bottom:0}}.testimonial-preview[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]{width:160px;height:160px;display:block;left:0;top:0}.user-img-wrp[_ngcontent-%COMP%]{border-radius:50%;margin:0 auto;width:160px;height:160px;background-color:#fbfbfb;overflow:hidden;box-shadow:0 3px 3px rgba(0,0,0,.4);transition:filter .1s ease-in-out;z-index:99;border:4px solid #fff}p.quote[_ngcontent-%COMP%]{text-align:center;font-size:1rem;overflow:hidden;line-height:1.4rem;height:auto;position:relative;left:0;top:0;padding-bottom:40px}.element-header[_ngcontent-%COMP%]{padding-top:0;padding-left:20px;padding-right:20px;display:block;width:100%}.element-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:0;margin:0}.quote[_ngcontent-%COMP%]:after, .quote[_ngcontent-%COMP%]:before{display:block;width:30px;height:23px;content:"";background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAzMSAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjg1MzcgMTUuMzUxOUMxMy41MTk3IDEzLjU3OTIgMTIuNjg0NyAxMi4yOSAxMS4xODE4IDExLjMyM0MxMC4xNzk5IDEwLjgzOTYgOS42Nzg5MiAxMC42Nzg0IDkuMzQ0OTMgMTAuNjc4NEMzLjMzMzI4IDkuMjI4MDQgNS42NzExNSA0LjM5MzQyIDExLjM0ODggMS44MTQ5NkMxMi41MTc4IDEuMzMxNSAxMi41MTc4IC0wLjI4MDA0NSAxMS4wMTQ4IDAuMDQyMjYzMkMtMS4xNzU0NiAxLjk3NjExIC0wLjM0MDUwOCAxMi40NTExIDAuMzI3NDU0IDE3LjEyNDZDMC40OTQ0NDQgMTcuNjA4MSAwLjQ5NDQ0MyAxOC4wOTE1IDAuODI4NDIzIDE4LjQxMzhDMS44MzAzNyAyMS40NzU3IDUuMDAzMTggMjMuNDA5NiA4LjM0Mjk5IDIyLjkyNjFDMTIuMDE2OCAyMi4xMjA0IDE0LjM1NDYgMTguODk3MyAxMy44NTM3IDE1LjM1MTlaIiBmaWxsPSIjRDdEN0Q3Ii8+CjxwYXRoIGQ9Ik0zMC4xOTg3IDE1LjM1MTlDMjkuODc5MyAxMy41NzkyIDI5LjA4MDYgMTIuMjkgMjcuNjQzMSAxMS4zMjNDMjYuNjg0NyAxMC44Mzk2IDI2LjIwNTUgMTAuNjc4NCAyNS44ODYgMTAuNjc4NEMyMC4xMzU3IDkuMjI4MDQgMjIuMzcyIDQuMzkzNDIgMjcuODAyOCAxLjgxNDk2QzI4LjkyMDkgMS4zMzE1IDI4LjkyMDkgLTAuMjgwMDQ1IDI3LjQ4MzMgMC4wNDIyNjMyQzE1LjgyMyAxLjk3NjExIDE2LjYyMTcgMTIuNDUxMSAxNy4yNjA2IDE3LjEyNDZDMTcuNDIwMyAxNy42MDgxIDE3LjQyMDMgMTguMDkxNSAxNy43Mzk4IDE4LjQxMzhDMTguNjk4MiAyMS40NzU3IDIxLjczMyAyMy40MDk2IDI0LjkyNzYgMjIuOTI2MUMyOC40NDE3IDIyLjEyMDQgMzAuNjc3OSAxOC44OTczIDMwLjE5ODcgMTUuMzUxOVoiIGZpbGw9IiNEN0Q3RDciLz4KPC9zdmc+Cg==)}.quote[_ngcontent-%COMP%]:before{margin-bottom:10px}.quote[_ngcontent-%COMP%]:after{position:absolute;bottom:0;right:0;transform:rotate(180deg)}.name[_ngcontent-%COMP%]{display:inline-block;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;color:#009688;font-size:1.2rem;line-height:1.4rem;margin-bottom:0;border-bottom:1px solid #ccc;padding-bottom:10px;padding-left:10px;padding-right:10px}.testimonial-preview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;color:#009788;box-shadow:1px 2px 3px rgba(0,0,0,.3);border-radius:3px;border:none;padding:8px 20px;cursor:pointer;font-weight:600;text-transform:uppercase}.testimonial-preview[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{background-color:#009788;color:#fff;box-shadow:none}.testimonial-wrapper[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6);position:fixed;left:0;top:0;height:100vh;width:100vw;opacity:0;pointer-events:none;transition:opacity .3s ease-in-out}.testimonial-wrapper.active[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}.testimonialcontent[_ngcontent-%COMP%]{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);height:90vh;width:90vw;margin-left:-120vw;transition:margin-left .3s ease-in-out;overflow:hidden}.testimonialcontent.active[_ngcontent-%COMP%]{opacity:1;margin-left:0}.close[_ngcontent-%COMP%]{display:block;left:0;top:0;width:100%;height:100%;cursor:pointer}picture.quote[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:auto;min-height:100%;filter:brightness(.6)}.testimonial[_ngcontent-%COMP%]{position:absolute;width:70%;height:auto;bottom:0;left:0;padding:30px;box-sizing:border-box}.testimonial[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .testimonial[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;text-shadow:1px 1px 2px rgba(0,0,0,.3)}.testimonial[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.3rem;line-height:1.8rem;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700}.crops[_ngcontent-%COMP%], .location[_ngcontent-%COMP%]{margin:0;padding:0;font-size:14px;line-height:18px}.location[_ngcontent-%COMP%]{margin-top:5px;color:#555}.crops[_ngcontent-%COMP%]{margin-bottom:10px;color:#888}hr[_ngcontent-%COMP%]{border-bottom:.5px solid hsla(0,0%,76.9%,.733)}.testimonial[_ngcontent-%COMP%]   h3.name[_ngcontent-%COMP%]{font-size:1.6rem;line-height:2rem;margin-bottom:0;border-bottom:.5px solid hsla(0,0%,100%,.733);padding-bottom:5px;display:inline-block}.testimonial[_ngcontent-%COMP%]   p.userquote[_ngcontent-%COMP%]{font-size:1.3rem;line-height:1.8rem;font-family:Georgia,serif;font-weight:300}.closebtn[_ngcontent-%COMP%]{width:60px;height:60px;position:absolute;right:0;top:0;background-size:60px;background-position:50%;background-repeat:no-repeat;cursor:pointer}.closebtn[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}@media only screen and (max-width:768px){.testimonial[_ngcontent-%COMP%]   p.userquote[_ngcontent-%COMP%]{font-size:1rem;line-height:1.3rem}.testimonial[_ngcontent-%COMP%]{width:100%}}',
              ],
            })),
            t
          );
        })(),
        lt = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {}),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = b.Fb({
              type: t,
              selectors: [["app-download-button"]],
              inputs: { languageData: "languageData" },
              decls: 6,
              vars: 1,
              consts: function () {
                return [
                  ["id", "download-button"],
                  [1, "container"],
                  [1, "row"],
                  [
                    1,
                    "grid-col",
                    "center",
                    "col-12",
                    "col-xs-12",
                    "col-sm-12",
                    "col-md-12",
                    "col-lg-12",
                    "col-xl-12",
                  ],
                  ["target", "_blank", 1, "button-download", 3, "href"],
                  "FREE DOWNLOAD",
                ];
              },
              template: function (t, e) {
                1 & t &&
                  (b.Rb(0, "div", 0),
                  b.Rb(1, "div", 1),
                  b.Rb(2, "div", 2),
                  b.Rb(3, "div", 3),
                  b.Rb(4, "a", 4),
                  b.Vb(5, 5),
                  b.Qb(),
                  b.Qb(),
                  b.Qb(),
                  b.Qb(),
                  b.Qb()),
                  2 & t &&
                    (b.yb(4),
                    b.lc(
                      "href",
                      null == e.languageData
                        ? null
                        : e.languageData.playStoreUrl,
                      b.wc
                    ));
              },
              styles: [
                "#download-button[_ngcontent-%COMP%]{padding:30px 0;background-color:#009688}#download-button[_ngcontent-%COMP%]   .button-download[_ngcontent-%COMP%]:hover{background-color:#009688;animation:none!important;color:#fff;border:2px solid #fff}#download-button[_ngcontent-%COMP%]   .button-download[_ngcontent-%COMP%]{display:inline-block;width:auto;height:auto;bottom:0;color:#00796b;font-weight:800;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:1.3rem;border:2px solid #009688;border-radius:15px;padding:20px 40px;background-color:#fff;margin:20px auto;overflow:hidden;cursor:pointer}",
              ],
            })),
            t
          );
        })();
      function gt(t, e) {
        if ((1 & t && b.Mb(0, "img", 24), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.lc("alt", n.thumbImage.alt), b.lc("src", n.thumbImage.src, b.wc);
        }
      }
      function st(t, e) {
        1 & t && (b.Rb(0, "span", 25), b.Ac(1, "Jan "), b.Qb());
      }
      function bt(t, e) {
        if ((1 & t && (b.Rb(0, "span", 25), b.Ac(1), b.Qb()), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.yb(1), b.Cc("Feb ", n.datePosted.slice(2, 4), "");
        }
      }
      function dt(t, e) {
        if ((1 & t && (b.Rb(0, "span", 25), b.Ac(1), b.Qb()), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.yb(1), b.Cc("Mar ", n.datePosted.slice(2, 4), "");
        }
      }
      function pt(t, e) {
        if ((1 & t && (b.Rb(0, "span", 25), b.Ac(1), b.Qb()), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.yb(1), b.Cc("Apr ", n.datePosted.slice(2, 4), "");
        }
      }
      function mt(t, e) {
        if ((1 & t && (b.Rb(0, "span", 25), b.Ac(1), b.Qb()), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.yb(1), b.Cc("May ", n.datePosted.slice(2, 4), "");
        }
      }
      function ft(t, e) {
        if ((1 & t && (b.Rb(0, "span", 25), b.Ac(1), b.Qb()), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.yb(1), b.Cc("Jun ", n.datePosted.slice(2, 4), "");
        }
      }
      function ht(t, e) {
        if ((1 & t && (b.Rb(0, "span", 25), b.Ac(1), b.Qb()), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.yb(1), b.Cc("Jul ", n.datePosted.slice(2, 4), "");
        }
      }
      function ut(t, e) {
        if ((1 & t && (b.Rb(0, "span", 25), b.Ac(1), b.Qb()), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.yb(1), b.Cc("Aug ", n.datePosted.slice(2, 4), "");
        }
      }
      function xt(t, e) {
        if ((1 & t && (b.Rb(0, "span", 25), b.Ac(1), b.Qb()), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.yb(1), b.Cc("Sep ", n.datePosted.slice(2, 4), "");
        }
      }
      function wt(t, e) {
        if ((1 & t && (b.Rb(0, "span", 25), b.Ac(1), b.Qb()), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.yb(1), b.Cc("Oct ", n.datePosted.slice(2, 4), "");
        }
      }
      function Mt(t, e) {
        if ((1 & t && (b.Rb(0, "span", 25), b.Ac(1), b.Qb()), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.yb(1), b.Cc("Nov ", n.datePosted.slice(2, 4), "");
        }
      }
      function Ct(t, e) {
        if ((1 & t && (b.Rb(0, "span", 25), b.Ac(1), b.Qb()), 2 & t)) {
          var n = b.gc(2).$implicit;
          b.yb(1), b.Cc("Dec ", n.datePosted.slice(2, 4), "");
        }
      }
      var vt = function (t) {
        return { blog_title: t };
      };
      function Pt(t, e) {
        if (1 & t) {
          var n = b.Sb();
          b.Rb(0, "article", 11),
            b.Rb(1, "div", 12),
            b.cc("appDeferLoad", function () {
              return b.uc(n), (b.gc().$implicit.show = !0);
            }),
            b.yc(2, gt, 1, 2, "img", 13),
            b.Qb(),
            b.Rb(3, "div", 14),
            b.Rb(4, "div", 15),
            b.Rb(5, "span", 16),
            b.Ac(6),
            b.Qb(),
            b.Rb(7, "div", 17),
            b.yc(8, st, 2, 0, "span", 18),
            b.yc(9, bt, 2, 1, "span", 18),
            b.yc(10, dt, 2, 1, "span", 18),
            b.yc(11, pt, 2, 1, "span", 18),
            b.yc(12, mt, 2, 1, "span", 18),
            b.yc(13, ft, 2, 1, "span", 18),
            b.yc(14, ht, 2, 1, "span", 18),
            b.yc(15, ut, 2, 1, "span", 18),
            b.yc(16, xt, 2, 1, "span", 18),
            b.yc(17, wt, 2, 1, "span", 18),
            b.yc(18, Mt, 2, 1, "span", 18),
            b.yc(19, Ct, 2, 1, "span", 18),
            b.Qb(),
            b.Qb(),
            b.Rb(20, "h4"),
            b.Ac(21),
            b.Qb(),
            b.Qb(),
            b.Rb(22, "div", 19),
            b.Rb(23, "div", 20),
            b.Rb(24, "p", 21),
            b.Ac(25),
            b.Qb(),
            b.Rb(26, "a", 22),
            b.Rb(27, "button"),
            b.Vb(28, 23),
            b.Qb(),
            b.Qb(),
            b.Qb(),
            b.Qb(),
            b.Qb();
        }
        if (2 & t) {
          var a = b.gc().$implicit,
            o = b.gc();
          b.yb(2),
            b.kc("ngIf", a.show),
            b.yb(4),
            b.Bc(a.datePosted.slice(8, 10)),
            b.yb(1),
            b.kc("ngSwitch", a.datePosted.slice(5, 7)),
            b.yb(1),
            b.kc("ngSwitchCase", 1),
            b.yb(1),
            b.kc("ngSwitchCase", 2),
            b.yb(1),
            b.kc("ngSwitchCase", 3),
            b.yb(1),
            b.kc("ngSwitchCase", 4),
            b.yb(1),
            b.kc("ngSwitchCase", 5),
            b.yb(1),
            b.kc("ngSwitchCase", 6),
            b.yb(1),
            b.kc("ngSwitchCase", 7),
            b.yb(1),
            b.kc("ngSwitchCase", 8),
            b.yb(1),
            b.kc("ngSwitchCase", 9),
            b.yb(1),
            b.kc("ngSwitchCase", 10),
            b.yb(1),
            b.kc("ngSwitchCase", 11),
            b.yb(1),
            b.kc("ngSwitchCase", 12),
            b.yb(2),
            b.Bc(
              a.titleTranslation && a.titleTranslation[o.languageData.code]
                ? a.titleTranslation[o.languageData.code]
                : a.title
            ),
            b.yb(4),
            b.Bc(
              a.shortDescriptionTranslation &&
                a.shortDescriptionTranslation[o.languageData.code]
                ? a.shortDescriptionTranslation[o.languageData.code]
                : a.shortDescription
            ),
            b.yb(1),
            b.lc("languageCode", o.languageData.code),
            b.nc(
              "href",
              "/",
              o.languageData.code,
              "/blog/",
              a.urlTitle,
              "/",
              b.wc
            ),
            b.kc("gaParameters", b.pc(21, vt, a.title));
        }
      }
      function Ot(t, e) {
        if (
          (1 & t && (b.Pb(0), b.yc(1, Pt, 29, 23, "article", 10), b.Ob()),
          2 & t)
        ) {
          var n = e.$implicit;
          b.yb(1), b.kc("ngIf", null != n.title);
        }
      }
      var _t,
        yt,
        kt,
        Dt,
        jt = (function () {
          function t() {
            (this.isActive = { year: !1 }),
              (this.blogs = [
                {
                  id: 167,
                  title:
                    "PM-KUSUM scheme for clean, secure and sustainable energy generation for farmers In India",
                  metaTitle:
                    "PM-KUSUM scheme for clean, secure and sustainable energy generation for farmers In India.",
                  subtitle: null,
                  urlTitle:
                    "pm-kusum-sustainable-energy-scheme-for-farmers-in-india",
                  image: null,
                  thumbImage: {
                    src: "assets/blog/blog-content/2021-12-09/pm-kusum-thumb.jpg",
                    alt: "PM-KUSUM scheme for clean, secure and sustainable energy generation for farmers In India. ",
                  },
                  sharePreviewImage:
                    "assets/blog/blog-content/2021-12-09/pm-kusum.jpg",
                  transparentMenu: !0,
                  language: "en",
                  datePosted: "2021-12-11",
                  category: "Plantix",
                  tags: [
                    "Farmers",
                    "Management",
                    "Kharif",
                    "Rabi",
                    "Profitable",
                    "Solutions",
                    "Fair",
                    "Technology",
                    "Affordable",
                  ],
                  shortDescription:
                    "The Kusum Solar Panel Scheme is a jointly run scheme by both the Central Government and State Governments in which the Kusum Solar pumps are given to the farmers on subsidy. This scheme is aimed at energy security for farmers along with increasing the share of installed capacity of electric power from non-fossil-fuel sources to 40% by 2030 as part of Intended Nationally Determined Contributions (INDCs).",
                  shorterDescription:
                    "PM-KUSUM scheme - sustainable energy generation subsidy for Indian farmers.",
                  relatedArticles: [],
                },
                {
                  id: 166,
                  title:
                    "Successful wheat cultivation with these best practices!",
                  metaTitle: "Wheat, the staple food",
                  subtitle: null,
                  urlTitle: "wheat-cultivation-tips",
                  image: null,
                  thumbImage: {
                    src: "assets/blog/blog-content/2021-11-15/wheat.jpg",
                    alt: "Learning methods to make wheat cultivation profitable",
                  },
                  sharePreviewImage:
                    "assets/blog/blog-content/2021-11-10/wheat.jpg",
                  transparentMenu: !0,
                  language: "en",
                  datePosted: "2021-11-15",
                  category: "Plantix",
                  tags: [
                    "Farmers",
                    "Crops",
                    "Management",
                    "Prevention",
                    "Kharif",
                    "Rabi",
                    "Profitable",
                    "Wheat",
                  ],
                  shortDescription:
                    "How to grow wheat with success? - These methods help you to optimize your wheat cultivation.",
                  shorterDescription:
                    "Cultivate wheat successfully with these best practices!",
                  relatedArticles: [],
                },
                {
                  id: 165,
                  title:
                    "Learning methods to make chickpea cultivation profitable",
                  metaTitle: "How to grow Chickpea?",
                  subtitle: null,
                  urlTitle: "how-to-grow-chickpea",
                  image: null,
                  thumbImage: {
                    src: "assets/blog/blog-content/2021-11-10/chickpea.jpg",
                    alt: "Learning methods to make chickpea cultivation profitable",
                  },
                  sharePreviewImage:
                    "assets/blog/blog-content/2021-11-10/chickpea.jpg",
                  transparentMenu: !0,
                  language: "en",
                  datePosted: "2021-11-10",
                  category: "Plantix",
                  tags: [
                    "Farmers",
                    "Crops",
                    "Management",
                    "Prevention",
                    "Kharif",
                    "Rabi",
                    "Profitable",
                    "Chickpea",
                  ],
                  shortDescription:
                    "How to grow Chickpea? - Learning methods to make chickpea cultivation profitable",
                  shorterDescription:
                    "Learn how to make your chickpea cultivation a success!",
                  relatedArticles: [],
                },
              ]);
          }
          return (
            (t.prototype.onClickUnfold = function (t) {
              this.isActive[t] = !this.isActive[t];
            }),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = b.Fb({
              type: t,
              selectors: [["app-blog-teaser"]],
              inputs: { languageData: "languageData" },
              decls: 15,
              vars: 3,
              consts: function () {
                return [
                  ["id", "blog-teaser", 1, "wrapper", "blog-wrapper"],
                  [1, "container"],
                  [1, "element-header"],
                  "Recent Blog Posts",
                  "Stay up-to-date with Plantix! Check out our tips for the best agricultural practices!",
                  [
                    "appAnalyticsOnScreen",
                    "",
                    "gaOnScreenElementName",
                    "blog teaser",
                    "gaPageName",
                    "HomePage",
                    1,
                    "blog-wrapper",
                  ],
                  [4, "ngFor", "ngForOf"],
                  [1, "element-footer"],
                  [
                    "appAnalyticsClick",
                    "",
                    "gaEventName",
                    "griz_home_click_blogs_link",
                    "gaEventCategory",
                    "click",
                    "gaEventLabel",
                    "web",
                    "gaEventValue",
                    "0",
                    3,
                    "languageCode",
                    "href",
                  ],
                  "READ ALL ARTICLES",
                  ["class", "blog-preview blog-1 active", 4, "ngIf"],
                  [1, "blog-preview", "blog-1", "active"],
                  [
                    1,
                    "blog-image",
                    "img-loading-placeholder",
                    3,
                    "appDeferLoad",
                  ],
                  ["class", "appear", 3, "alt", "src", 4, "ngIf"],
                  [1, "blog-heading"],
                  [1, "date"],
                  [1, "day"],
                  [3, "ngSwitch"],
                  ["class", "month", 4, "ngSwitchCase"],
                  [1, "blog-content"],
                  [1, "blogteaser"],
                  [1, "textfade"],
                  [
                    "appAnalyticsClick",
                    "",
                    "gaEventName",
                    "griz_home_click_blog_teaser_read_more",
                    "gaEventCategory",
                    "click",
                    "gaEventLabel",
                    "web",
                    "gaEventValue",
                    "0",
                    3,
                    "gaParameters",
                    "languageCode",
                    "href",
                  ],
                  "READ MORE",
                  [1, "appear", 3, "alt", "src"],
                  [1, "month"],
                ];
              },
              template: function (t, e) {
                1 & t &&
                  (b.Rb(0, "div", 0),
                  b.Rb(1, "div", 1),
                  b.Rb(2, "div", 2),
                  b.Rb(3, "h2"),
                  b.Vb(4, 3),
                  b.Qb(),
                  b.Rb(5, "p"),
                  b.Vb(6, 4),
                  b.Qb(),
                  b.Qb(),
                  b.Rb(7, "div", 5),
                  b.yc(8, Ot, 2, 1, "ng-container", 6),
                  b.Qb(),
                  b.Rb(9, "div", 7),
                  b.Mb(10, "br"),
                  b.Rb(11, "a", 8),
                  b.Rb(12, "button"),
                  b.Vb(13, 9),
                  b.Qb(),
                  b.Qb(),
                  b.Mb(14, "br"),
                  b.Qb(),
                  b.Qb(),
                  b.Qb()),
                  2 & t &&
                    (b.yb(8),
                    b.kc("ngForOf", e.blogs),
                    b.yb(3),
                    b.lc("languageCode", e.languageData.code),
                    b.mc("href", "/", e.languageData.code, "/blog/", b.wc));
              },
              directives: [l.i, m.a, l.j, u.a, l.l, l.m],
              styles: [
                '.appear[_ngcontent-%COMP%]{animation-name:appear;animation-duration:.3s;animation-iteration-count:1;animation-timing-function:linear}@keyframes appear{0%{opacity:0}to{opacity:1}}body[_ngcontent-%COMP%]{padding:0;outline:none;margin:0;background-color:#030101;font-family:PlantixText,PlantixTextFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif}body[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#676767}p[_ngcontent-%COMP%]{font-size:16px;line-height:175%}.element-header[_ngcontent-%COMP%]{padding-top:30px;width:70%;margin:0 auto}.center[_ngcontent-%COMP%], .element-header[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{color:#009788;margin-top:50px}.wrapper[_ngcontent-%COMP%]{width:100%;text-align:center;position:relative;left:0;top:0;overflow:hidden}.container[_ngcontent-%COMP%]{justify-content:space-between;text-align:left;margin:0 auto;align-items:center}.inset-shadow[_ngcontent-%COMP%]:after, .inset-shadow[_ngcontent-%COMP%]:before{content:" ";background-image:url(https://plantix.net/en/assets/img/gradient-velvet.png);height:6px;width:100%;display:block;position:absolute;top:0;left:0}.inset-shadow[_ngcontent-%COMP%]:after{transform:rotate(180deg);top:auto;bottom:0}.button-download[_ngcontent-%COMP%]{display:inline-block;width:auto;max-width:100%;bottom:0;color:#fff;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:1.3rem;border:2px solid #fff;border-radius:15px;padding:20px 40px;margin:0;position:relative;overflow:hidden;cursor:pointer}@media screen and (max-width:575px){.button-download[_ngcontent-%COMP%]{margin:0 auto}}.button-download[_ngcontent-%COMP%]:hover{background-color:#fff;animation:none!important;color:#009788;border:2px solid #009688}hr[_ngcontent-%COMP%]{display:block;margin:0 auto;height:0;border-top:1px solid #f0f0f0;border-bottom:none;color:#f0f0f0;background-color:#f0f0f0}.bigNumbers[_ngcontent-%COMP%]{display:block;min-height:200px}',
                ".element-header[_ngcontent-%COMP%]{display:block;width:100%;padding:0;margin:0}.element-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:30px 0 0;margin:0}.blog-image[_ngcontent-%COMP%]{display:block;height:260px;width:100%;position:relative;left:0;top:0;z-index:9;object-fit:cover}@media only screen and (min-width:769px){.blog-wrapper[_ngcontent-%COMP%]{margin-top:10px;display:flex}}.blog-preview[_ngcontent-%COMP%]{background-color:#fff;border-radius:5px;overflow:hidden;margin-right:20px;position:relative;left:0;top:0;border-bottom:1px solid #eee;width:calc(33.33% - 20px);height:auto;display:inline-block;margin-bottom:1px;vertical-align:top;box-shadow:1px 1px 2px rgba(0,0,0,.6)}.blog-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:260px}.blog-preview[_ngcontent-%COMP%]:first-of-type{margin-right:20px;margin-left:0}.blog-preview[_ngcontent-%COMP%]:last-of-type{margin-right:0}p[_ngcontent-%COMP%]{position:relative;left:0;top:0}@media only screen and (max-width:992px){.blog-preview[_ngcontent-%COMP%]{width:calc(50% - 20px);border-bottom:1px solid #eee!important;margin-bottom:10px}}@media only screen and (max-width:768px){.blog-preview[_ngcontent-%COMP%]:first-of-type{margin-right:10px;margin-left:10px}.blog-preview[_ngcontent-%COMP%]{width:calc(100% - 20px);border-bottom:1px solid #eee!important;margin:10px 10px 20px}}section[_ngcontent-%COMP%]   h3.year[_ngcontent-%COMP%]{color:#aeaeae;padding:0 0 0 20px;border-bottom:1px solid #eee;margin:0 0 10px}article[_ngcontent-%COMP%]   h3.blogheading[_ngcontent-%COMP%]{width:calc(100% - 60px);padding-left:60px;position:relative;top:10px;color:#009788;display:block}.blog-imgwrp[_ngcontent-%COMP%]{width:100%;padding-top:60%;border-radius:5px 5px 0 0;margin-bottom:10px}.date[_ngcontent-%COMP%]{position:relative;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;text-align:center;display:inline-block;left:20px;top:0;width:50px;height:40px;font-size:14px}span.day[_ngcontent-%COMP%]{color:#009788;font-weight:800;top:10px;background-color:#eaedf2;border-radius:3px 3px 0 0;border:1px solid #eaedf2}span.day[_ngcontent-%COMP%], span.month[_ngcontent-%COMP%]{position:absolute;width:50px;height:20px;line-height:20px;left:0;display:block}span.month[_ngcontent-%COMP%]{color:#fff;top:30px;background-color:#009688;border-radius:0 0 3px 3px;border:1px solid #009688}.blogteaser[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - 40px);margin-left:20px;overflow:hidden;vertical-align:top}.blogteaser[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:20px;margin-top:0}.blogteaser[_ngcontent-%COMP%]   p.textfade[_ngcontent-%COMP%]{height:60px}p.textfade[_ngcontent-%COMP%]:after{height:20px}.blog-heading[_ngcontent-%COMP%]{min-height:70px;padding-top:10px;height:auto;width:100%}.blog-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;color:#009688;padding-left:30px;margin-bottom:10px;margin-top:0;font-weight:800;position:relative;display:inline-block;vertical-align:middle;width:calc(100% - 130px)}.element-footer[_ngcontent-%COMP%]{width:100%}.element-footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:30px 20px 30px 0;border-top:1px solid #ccc}.element-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;color:#009688}.element-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#009788;color:#fff}.blogteaser[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:30px 10px;border-top:1px solid #ccc}.blogteaser[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#009788;color:#fff}.blogteaser[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#5fb3aa;color:#fff}.blogteaser[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .element-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;display:block;text-align:center}.blogteaser[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .element-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:1px 2px 3px rgba(0,0,0,.3);border-radius:3px;border:none;padding:15px;cursor:pointer;font-weight:600;text-transform:uppercase;margin-bottom:20px}.blogteaser[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .element-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{box-shadow:none}.blog-wrapper[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px;background-color:#fafafa}",
              ],
            })),
            t
          );
        })();
      function zt(t, e) {
        1 & t &&
          (b.Rb(0, "div", 17),
          b.Rb(1, "div", 18),
          b.Rb(2, "p", 19),
          b.Vb(3, 20),
          b.Qb(),
          b.Rb(4, "p"),
          b.Ac(5, "Simone Strey - Plantix CEO"),
          b.Qb(),
          b.Qb(),
          b.Qb());
      }
      function It(t, e) {
        if ((1 & t && b.Mb(0, "img", 23), 2 & t)) {
          var n = b.gc().$implicit;
          b.lc("title", n.name),
            b.mc("src", "assets/img/our-partners/", n.imgUrl, "", b.wc);
        }
      }
      function At(t, e) {
        if (
          (1 & t && (b.Rb(0, "div", 21), b.yc(1, It, 1, 2, "img", 22), b.Qb()),
          2 & t)
        ) {
          var n = b.gc();
          b.yb(1), b.kc("ngIf", n.showImages);
        }
      }
      function St(t, e) {
        if ((1 & t && b.Mb(0, "img", 26), 2 & t)) {
          var n = b.gc().$implicit;
          b.lc("title", n.name),
            b.mc("src", "assets/img/our-partners/", n.imgUrl, "", b.wc);
        }
      }
      var Qt = function (t) {
        return { award_logo: t };
      };
      function Rt(t, e) {
        if (
          (1 & t && (b.Rb(0, "div", 24), b.yc(1, St, 1, 2, "img", 25), b.Qb()),
          2 & t)
        ) {
          var n = e.$implicit,
            a = b.gc();
          b.lc("languageCode", a.languageData.code),
            b.kc("gaParameters", b.pc(3, Qt, n.name)),
            b.yb(1),
            b.kc("ngIf", a.showImages);
        }
      }
      var Lt = function (t) {
        return { partner_logo: t };
      };
      function Nt(t, e) {
        if ((1 & t && b.Mb(0, "img", 29), 2 & t)) {
          var n = b.gc().$implicit,
            a = b.gc();
          b.lc("languageCode", a.languageData.code),
            b.lc("alt", n.name),
            b.lc("title", n.name),
            b.mc("src", "assets/img/our-partners/", n.imgUrl, "", b.wc),
            b.kc("gaParameters", b.pc(5, Lt, n.name));
        }
      }
      function Et(t, e) {
        if (
          (1 & t && (b.Rb(0, "div", 27), b.yc(1, Nt, 1, 7, "img", 28), b.Qb()),
          2 & t)
        ) {
          var n = b.gc();
          b.yb(1), b.kc("ngIf", n.showImages);
        }
      }
      var Tt,
        Ft,
        Ht,
        $t,
        Ut,
        Vt = (function () {
          function t() {
            (this.showImages = !1),
              (this.press = [
                { name: "The Better India", imgUrl: "the-better-india.jpg" },
                { name: "The Hindu", imgUrl: "the-hindu.jpg" },
                { name: "Forbes", imgUrl: "forbes.jpg" },
                { name: "BBC News", imgUrl: "bbc.jpg" },
                { name: "MIT Technology Review", imgUrl: "mit.jpg" },
              ]),
              (this.awards = [
                { name: "World Summit Awards", imgUrl: "wsa.jpg" },
                { name: "Agri Award", imgUrl: "agri-award.jpg" },
                {
                  name: "Data Driven Farming Price",
                  imgUrl: "data-driven-farming-price.jpg",
                },
                { name: "CeBIT Innovation Award 2017", imgUrl: "cebit.jpg" },
              ]),
              (this.partners = [
                { name: "Icrisat", imgUrl: "icrisat.jpg" },
                { name: "Cabi", imgUrl: "cabi.png" },
                { name: "zalf", imgUrl: "zalf.jpg" },
                { name: "Cimmyt", imgUrl: "cimmyt.jpg" },
                {
                  name: "Government of Andhra Pradesh",
                  imgUrl: "government_of_andhra_predesh.jpg",
                },
              ]);
          }
          return (
            (t.prototype.ngOnInit = function () {}),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = b.Fb({
              type: t,
              selectors: [["app-our-partners"]],
              inputs: { languageData: "languageData" },
              decls: 20,
              vars: 4,
              consts: function () {
                return [
                  [3, "appDeferLoad"],
                  [1, "parallax-wrapper", "img-loading-placeholder"],
                  ["class", "parallax appear", 4, "ngIf"],
                  [
                    "appAnalyticsOnScreen",
                    "",
                    "gaOnScreenElementName",
                    "awards",
                    "gaPageName",
                    "HomePage",
                    1,
                    "wrapper",
                    "partner-wrp",
                  ],
                  [1, "element-header"],
                  "Press & Prizes",
                  "Don\u2019t just take our word for it. Plantix \u2014 as a unique solution in digital agriculture \u2014 has received honorary mentions in worldwide media and won various awards.",
                  [1, "container", "center", 3, "appDeferLoad"],
                  ["class", "press", 4, "ngFor", "ngForOf"],
                  [1, "vertical-line"],
                  [
                    "appAnalyticsClick",
                    "",
                    "gaEventName",
                    "griz_home_click_award_logo",
                    "gaEventCategory",
                    "click",
                    "gaEventLabel",
                    "web",
                    "gaEventValue",
                    "0",
                    "class",
                    "awards",
                    3,
                    "languageCode",
                    "gaParameters",
                    4,
                    "ngFor",
                    "ngForOf",
                  ],
                  [
                    "appAnalyticsOnScreen",
                    "",
                    "gaOnScreenElementName",
                    "our partners",
                    "gaPageName",
                    "HomePage",
                    1,
                    "element-header",
                    "partners",
                  ],
                  ["id", "largest-agricultural-community"],
                  "Together We Built The World's Largest Agricultural Community",
                  [1, "partners-text"],
                  "We enable farmers around the world to increase their profitability. Without all of our international partnerships, this wouldn\u2019t be possible.\nThank You!",
                  ["class", "partner", 4, "ngFor", "ngForOf"],
                  [1, "parallax", "appear"],
                  [1, "container"],
                  ["id", "our-aim"],
                  "Our aim is to enable farmers to work more productively and profitably, to secure their livelihood and to keep their risk as low as possible.",
                  [1, "press"],
                  [
                    "alt",
                    "pre.name",
                    "class",
                    "appear",
                    3,
                    "title",
                    "src",
                    4,
                    "ngIf",
                  ],
                  ["alt", "pre.name", 1, "appear", 3, "title", "src"],
                  [
                    "appAnalyticsClick",
                    "",
                    "gaEventName",
                    "griz_home_click_award_logo",
                    "gaEventCategory",
                    "click",
                    "gaEventLabel",
                    "web",
                    "gaEventValue",
                    "0",
                    1,
                    "awards",
                    3,
                    "languageCode",
                    "gaParameters",
                  ],
                  [
                    "alt",
                    "a.name",
                    "class",
                    "appear",
                    3,
                    "title",
                    "src",
                    4,
                    "ngIf",
                  ],
                  ["alt", "a.name", 1, "appear", 3, "title", "src"],
                  [1, "partner"],
                  [
                    "appAnalyticsClick",
                    "",
                    "gaEventName",
                    "griz_home_click_partner_logo",
                    "gaEventCategory",
                    "click",
                    "gaEventLabel",
                    "web",
                    "gaEventValue",
                    "0",
                    "class",
                    "appear",
                    3,
                    "languageCode",
                    "gaParameters",
                    "alt",
                    "title",
                    "src",
                    4,
                    "ngIf",
                  ],
                  [
                    "appAnalyticsClick",
                    "",
                    "gaEventName",
                    "griz_home_click_partner_logo",
                    "gaEventCategory",
                    "click",
                    "gaEventLabel",
                    "web",
                    "gaEventValue",
                    "0",
                    1,
                    "appear",
                    3,
                    "languageCode",
                    "gaParameters",
                    "alt",
                    "title",
                    "src",
                  ],
                ];
              },
              template: function (t, e) {
                1 & t &&
                  (b.Rb(0, "div", 0),
                  b.cc("appDeferLoad", function () {
                    return (e.showImages = !0);
                  }),
                  b.Rb(1, "div", 1),
                  b.yc(2, zt, 6, 0, "div", 2),
                  b.Qb(),
                  b.Qb(),
                  b.Rb(3, "div", 3),
                  b.Rb(4, "div", 4),
                  b.Rb(5, "h2"),
                  b.Vb(6, 5),
                  b.Qb(),
                  b.Rb(7, "p"),
                  b.Vb(8, 6),
                  b.Qb(),
                  b.Qb(),
                  b.Rb(9, "div", 7),
                  b.cc("appDeferLoad", function () {
                    return (e.showImages = !0);
                  }),
                  b.yc(10, At, 2, 1, "div", 8),
                  b.Mb(11, "div", 9),
                  b.yc(12, Rt, 2, 5, "div", 10),
                  b.Qb(),
                  b.Rb(13, "div", 11),
                  b.Rb(14, "p", 12),
                  b.Vb(15, 13),
                  b.Qb(),
                  b.Rb(16, "p", 14),
                  b.Vb(17, 15),
                  b.Qb(),
                  b.Qb(),
                  b.Rb(18, "div", 7),
                  b.cc("appDeferLoad", function () {
                    return (e.showImages = !0);
                  }),
                  b.yc(19, Et, 2, 1, "div", 16),
                  b.Qb(),
                  b.Qb()),
                  2 & t &&
                    (b.yb(2),
                    b.kc("ngIf", e.showImages),
                    b.yb(8),
                    b.kc("ngForOf", e.press),
                    b.yb(2),
                    b.kc("ngForOf", e.awards),
                    b.yb(7),
                    b.kc("ngForOf", e.partners));
              },
              directives: [u.a, l.j, l.i, m.a],
              styles: [
                '.appear[_ngcontent-%COMP%]{animation-name:appear;animation-duration:.3s;animation-iteration-count:1;animation-timing-function:linear}@keyframes appear{0%{opacity:0}to{opacity:1}}body[_ngcontent-%COMP%]{padding:0;outline:none;margin:0;background-color:#030101;font-family:PlantixText,PlantixTextFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif}body[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#676767}p[_ngcontent-%COMP%]{font-size:16px;line-height:175%}.element-header[_ngcontent-%COMP%]{padding-top:30px;width:70%;margin:0 auto}.center[_ngcontent-%COMP%], .element-header[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{color:#009788;margin-top:50px}.wrapper[_ngcontent-%COMP%]{width:100%;text-align:center;position:relative;left:0;top:0;overflow:hidden}.container[_ngcontent-%COMP%]{justify-content:space-between;text-align:left;margin:0 auto;align-items:center}.inset-shadow[_ngcontent-%COMP%]:after, .inset-shadow[_ngcontent-%COMP%]:before{content:" ";background-image:url(https://plantix.net/en/assets/img/gradient-velvet.png);height:6px;width:100%;display:block;position:absolute;top:0;left:0}.inset-shadow[_ngcontent-%COMP%]:after{transform:rotate(180deg);top:auto;bottom:0}.button-download[_ngcontent-%COMP%]{display:inline-block;width:auto;max-width:100%;bottom:0;color:#fff;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:1.3rem;border:2px solid #fff;border-radius:15px;padding:20px 40px;margin:0;position:relative;overflow:hidden;cursor:pointer}@media screen and (max-width:575px){.button-download[_ngcontent-%COMP%]{margin:0 auto}}.button-download[_ngcontent-%COMP%]:hover{background-color:#fff;animation:none!important;color:#009788;border:2px solid #009688}hr[_ngcontent-%COMP%]{display:block;margin:0 auto;height:0;border-top:1px solid #f0f0f0;border-bottom:none;color:#f0f0f0;background-color:#f0f0f0}.bigNumbers[_ngcontent-%COMP%]{display:block;min-height:200px}',
                ".parallax[_ngcontent-%COMP%]{background-image:url(https://plantix.net/en/assets/custom/parallax-partners-xs.jpg);background-attachment:fixed;background-position:bottom;background-repeat:no-repeat;background-size:cover;color:#fff;width:100%;padding-top:150px;padding-bottom:150px;overflow:hidden}@media screen and (min-width:1200px){.parallax[_ngcontent-%COMP%]{background-image:url(https://plantix.net/en/assets/custom/parallax-partners-xl.jpg)}}@media screen and (max-width:575px){.parallax[_ngcontent-%COMP%]{padding-top:50px;padding-bottom:50px}}@media screen and (min-width:768px){.parallax[_ngcontent-%COMP%]{min-height:1px}}.parallax[_ngcontent-%COMP%]   .parallax-wrapper[_ngcontent-%COMP%]{padding-top:100px;padding-bottom:100px;background-color:#fbfbfb;min-height:50vh}.parallax[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:180%;text-shadow:2px 2px 2px rgba(0,0,0,.7);max-width:calc(100% - 40px);opacity:.9;padding-left:20px;padding-right:20px}.parallax[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .parallax[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;text-align:center;width:100%}.parallax[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;margin:0;max-width:100%;font-size:14px;text-shadow:1px 1px 1px rgba(0,0,0,.7);opacity:.7}.partners-text[_ngcontent-%COMP%]{margin-bottom:0;padding-bottom:0}.element-header.partners[_ngcontent-%COMP%]{margin-top:20px}.spacer[_ngcontent-%COMP%]{height:100px}.vertical-line[_ngcontent-%COMP%]{display:inline-block;border-left:1px solid #ccc;height:64px;margin:0 3%;vertical-align:middle}@media screen and (max-width:575px){.vertical-line[_ngcontent-%COMP%]{height:1px;width:100%;border-left:none;border-bottom:1px solid #ccc;margin:20px 0}}.awards[_ngcontent-%COMP%], .press[_ngcontent-%COMP%]{width:7%;margin-left:2%}.partner[_ngcontent-%COMP%]{width:19%}.awards[_ngcontent-%COMP%], .partner[_ngcontent-%COMP%], .press[_ngcontent-%COMP%]{height:auto;display:inline-block;vertical-align:middle}.awards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .partner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .press[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;object-fit:contain}@media screen and (max-width:575px){.awards[_ngcontent-%COMP%], .partner[_ngcontent-%COMP%], .press[_ngcontent-%COMP%]{margin-bottom:20px;width:17%}}.partner-wrp[_ngcontent-%COMP%]{background-color:#fff;margin-top:20px;margin-bottom:20px}.container.center[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{margin:20px auto}h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{max-width:500px}p[_ngcontent-%COMP%]{margin:0 auto 40px}p#our-aim[_ngcontent-%COMP%]{color:#fff;font-size:180%;text-align:center;text-shadow:2px 2px 2px rgba(0,0,0,.7);width:100%;max-width:calc(100% - 40px);opacity:.9;padding-left:20px;padding-right:20px;margin:20px auto}p#largest-agricultural-community[_ngcontent-%COMP%], p#our-aim[_ngcontent-%COMP%]{font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700}p#largest-agricultural-community[_ngcontent-%COMP%]{display:block;font-size:1.5em;line-height:1.5em;color:#009788;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;margin:20px auto}",
              ],
            })),
            t
          );
        })();
      function Bt(t, e) {
        if (
          (1 & t &&
            (b.Rb(0, "div", 10),
            b.Rb(1, "a", 11),
            b.Rb(2, "picture"),
            b.Mb(3, "source", 12),
            b.Rb(4, "img", 13),
            b.Wb(5, 14),
            b.Qb(),
            b.Qb(),
            b.Qb(),
            b.Qb()),
          2 & t)
        ) {
          var n = b.gc();
          b.yb(1),
            b.mc(
              "href",
              "https://plantix.farm/bot-grizzly",
              n.getChatbotSuffix(),
              "",
              b.wc
            );
        }
      }
      var qt,
        Zt,
        Kt,
        Gt,
        Wt,
        Yt = (function () {
          function t() {
            (this.pageName = "HomePage"),
              (this.chatbotSuffix = ""),
              (this.imageActive = !1),
              (this.chatbotLinkIds = {
                en: "kp6we1",
                ar: "82lx5k",
                bn: "o7b5bc",
                fr: "9tqj3t",
                gu: "5u062b",
                hi: "5pr0qs",
                id: "nf7yq9",
                kn: "k02cwy",
                ml: "bpco1l",
                mr: "i1rai8",
                or: "s45x1g",
                pa: "x61oca",
                es: "1lyfyz",
                ta: "rjd9zd",
                te: "13owzc",
                ur: "8zjpd5",
                vi: "fqgh3x",
              });
          }
          return (
            (t.prototype.revealImage = function () {
              this.imageActive = !0;
            }),
            (t.prototype.getChatbotSuffix = function () {
              return "en" === this.languageData.code
                ? ""
                : "-" + this.languageData.code;
            }),
            (t.prototype.ngOnInit = function () {}),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = b.Fb({
              type: t,
              selectors: [["app-chatbot-cta"]],
              inputs: { languageData: "languageData", pageName: "pageName" },
              decls: 13,
              vars: 2,
              consts: function () {
                return [
                  [1, "container"],
                  [1, "row"],
                  [
                    1,
                    "col-grid",
                    "col-6",
                    "col-sm-12",
                    "col-xs-12",
                    "col-md-12",
                    "col-lg-6",
                    "image",
                    3,
                    "appDeferLoad",
                  ],
                  ["class", "img-wrapper img-loading-placeholder", 4, "ngIf"],
                  [
                    "appAnalyticsOnScreen",
                    "",
                    "gaOnScreenElementName",
                    "Chatbot CTA",
                    "gaPageName",
                    "HomePage",
                    1,
                    "chatbot-cta-content",
                    "col-grid",
                    "col-6",
                    "col-sm-12",
                    "col-xs-12",
                    "col-md-12",
                    "col-lg-6",
                  ],
                  "Try the Plantix Magic now!",
                  "Free Crop Diagnosis on WhatsApp",
                  "Just send us a picture of your crop on WhatsApp and our Crop Doctor will help you to solve your problem. Convince yourself, it's free!",
                  [
                    "appAnalyticsOnScreen",
                    "",
                    "gaOnScreenElementName",
                    "Chatbot CTA",
                    "gaPageName",
                    "HomePage",
                    1,
                    "button-download",
                    "colorpulse",
                    3,
                    "href",
                  ],
                  "Check your crop now!",
                  [1, "img-wrapper", "img-loading-placeholder"],
                  [3, "href"],
                  [
                    "media",
                    "(min-width: 992px)",
                    "srcset",
                    "assets/custom/chatbot-cta/chatbot-cta-img-lg.jpg",
                  ],
                  [
                    "src",
                    "assets/custom/chatbot-cta/chatbot-cta-img-xs.jpg",
                    6,
                    "alt",
                  ],
                  ["alt", "Check your crop now!"],
                ];
              },
              template: function (t, e) {
                1 & t &&
                  (b.Rb(0, "div", 0),
                  b.Rb(1, "div", 1),
                  b.Rb(2, "div", 2),
                  b.cc("appDeferLoad", function () {
                    return e.revealImage();
                  }),
                  b.yc(3, Bt, 6, 1, "div", 3),
                  b.Qb(),
                  b.Rb(4, "div", 4),
                  b.Rb(5, "h2"),
                  b.Vb(6, 5),
                  b.Qb(),
                  b.Rb(7, "h3"),
                  b.Vb(8, 6),
                  b.Qb(),
                  b.Rb(9, "p"),
                  b.Vb(10, 7),
                  b.Qb(),
                  b.Rb(11, "a", 8),
                  b.Vb(12, 9),
                  b.Qb(),
                  b.Qb(),
                  b.Qb(),
                  b.Qb()),
                  2 & t &&
                    (b.yb(3),
                    b.kc("ngIf", e.imageActive),
                    b.yb(8),
                    b.mc(
                      "href",
                      "https://wa.link/",
                      e.chatbotLinkIds[e.languageData.code],
                      "",
                      b.wc
                    ));
              },
              directives: [u.a, l.j],
              styles: [
                '.appear[_ngcontent-%COMP%]{animation-name:appear;animation-duration:.3s;animation-iteration-count:1;animation-timing-function:linear}@keyframes appear{0%{opacity:0}to{opacity:1}}body[_ngcontent-%COMP%]{padding:0;outline:none;margin:0;background-color:#030101;font-family:PlantixText,PlantixTextFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif}body[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#676767}p[_ngcontent-%COMP%]{font-size:16px;line-height:175%}.element-header[_ngcontent-%COMP%]{padding-top:30px;width:70%;margin:0 auto}.center[_ngcontent-%COMP%], .element-header[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{color:#009788;margin-top:50px}.wrapper[_ngcontent-%COMP%]{width:100%;text-align:center;position:relative;left:0;top:0;overflow:hidden}.container[_ngcontent-%COMP%]{justify-content:space-between;text-align:left;margin:0 auto;align-items:center}.inset-shadow[_ngcontent-%COMP%]:after, .inset-shadow[_ngcontent-%COMP%]:before{content:" ";background-image:url(https://plantix.net/en/assets/img/gradient-velvet.png);height:6px;width:100%;display:block;position:absolute;top:0;left:0}.inset-shadow[_ngcontent-%COMP%]:after{transform:rotate(180deg);top:auto;bottom:0}.button-download[_ngcontent-%COMP%]{display:inline-block;width:auto;max-width:100%;bottom:0;color:#fff;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:1.3rem;border:2px solid #fff;border-radius:15px;padding:20px 40px;margin:0;position:relative;overflow:hidden;cursor:pointer}@media screen and (max-width:575px){.button-download[_ngcontent-%COMP%]{margin:0 auto}}.button-download[_ngcontent-%COMP%]:hover{background-color:#fff;animation:none!important;color:#009788;border:2px solid #009688}hr[_ngcontent-%COMP%]{display:block;margin:0 auto;height:0;border-top:1px solid #f0f0f0;border-bottom:none;color:#f0f0f0;background-color:#f0f0f0}.bigNumbers[_ngcontent-%COMP%]{display:block;min-height:200px}',
                ".container[_ngcontent-%COMP%]{padding-top:60px}.chatbot-cta-content[_ngcontent-%COMP%]{box-sizing:border-box;padding-left:20px;padding-right:20px;text-align:center;vertical-align:bottom}.chatbot-cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:20px;display:inline-block;padding-bottom:10px;margin-bottom:10px;text-align:center;font-weight:800;border-bottom:1px solid #d8d8d8}@media screen and (min-width:992px){.chatbot-cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;margin-top:0}}.chatbot-cta-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#444;font-weight:800}@media screen and (min-width:992px){.chatbot-cta-content[_ngcontent-%COMP%]{text-align:left}}.img-wrapper[_ngcontent-%COMP%]{left:0;top:0;text-align:center;max-height:273px}.img-wrapper[_ngcontent-%COMP%], .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}",
              ],
            })),
            t
          );
        })(),
        Jt = ["bigNumbers"];
      function Xt(t, e) {
        if ((1 & t && b.Mb(0, "app-chatbot-cta", 1), 2 & t)) {
          var n = b.gc();
          b.kc("languageData", n.language);
        }
      }
      var te = (function () {
          function t(t, e, n, a) {
            (this.translateService = t),
              (this.menuService = e),
              (this.compiler = n),
              (this.injector = a),
              (this.loadedNumbersCounter = !1),
              (this.chatbotCTALanguages = [
                "id",
                "gu",
                "hi",
                "mr",
                "te",
                "vi",
                "ur",
                "fr",
                "es",
                "ta",
                "kn",
                "ar",
                "pt",
                "en",
              ]),
              this.menuService.setActiveMenuItem(p.a.HOME),
              (this.language = this.translateService.currentLang);
          }
          return (
            (t.prototype.lazyLoadBigNumbersCounter = function () {
              return Object(s.a)(this, void 0, void 0, function () {
                var t, e, a, o, i;
                return Object(s.c)(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return [
                        4,
                        Promise.all([n.e(0), n.e(24)]).then(
                          n.bind(null, "NBZJ")
                        ),
                      ];
                    case 1:
                      return (
                        (t = c.sent().BigNumbersCounterComponent),
                        [
                          4,
                          Promise.all([n.e(0), n.e(23)]).then(
                            n.bind(null, "ONy9")
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (e = c.sent().BigNumbersCounterModule),
                        [4, this.loadModuleFactory(e)]
                      );
                    case 3:
                      return (
                        (a = c.sent()),
                        (o = a.create(this.injector)),
                        (i =
                          o.componentFactoryResolver.resolveComponentFactory(
                            t
                          )),
                        this.bigNumbersViewRef.createComponent(i),
                        (this.loadedNumbersCounter = !0),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.loadModuleFactory = function (t) {
              return Object(s.a)(this, void 0, void 0, function () {
                return Object(s.c)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return t instanceof b.v ? [2, t] : [3, 1];
                    case 1:
                      return [4, this.compiler.compileModuleAsync(t)];
                    case 2:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(b.Lb(g.b), b.Lb(d.a), b.Lb(b.i), b.Lb(b.r));
            }),
            (t.ɵcmp = b.Fb({
              type: t,
              selectors: [["app-welcome"]],
              viewQuery: function (t, e) {
                var n;
                1 & t && b.Ec(Jt, !0, b.P),
                  2 & t &&
                    b.sc((n = b.dc())) &&
                    (e.bigNumbersViewRef = n.first);
              },
              decls: 10,
              vars: 5,
              consts: [
                [3, "languageData", 4, "ngIf"],
                [3, "languageData"],
                ["id", "bigNumbers"],
                [3, "appDeferLoad"],
                ["bigNumbers", ""],
              ],
              template: function (t, e) {
                1 & t &&
                  (b.Mb(0, "app-above-the-fold"),
                  b.yc(1, Xt, 1, 1, "app-chatbot-cta", 0),
                  b.Mb(2, "app-feature-overview"),
                  b.Mb(3, "app-testimonials", 1),
                  b.Rb(4, "div", 2),
                  b.Rb(5, "div", 3, 4),
                  b.cc("appDeferLoad", function () {
                    return e.lazyLoadBigNumbersCounter();
                  }),
                  b.Qb(),
                  b.Qb(),
                  b.Mb(7, "app-download-button", 1),
                  b.Mb(8, "app-blog-teaser", 1),
                  b.Mb(9, "app-our-partners", 1)),
                  2 & t &&
                    (b.yb(1),
                    b.kc(
                      "ngIf",
                      e.chatbotCTALanguages.includes(e.language.code)
                    ),
                    b.yb(2),
                    b.kc("languageData", e.language),
                    b.yb(4),
                    b.kc("languageData", e.language),
                    b.yb(1),
                    b.kc("languageData", e.language),
                    b.yb(1),
                    b.kc("languageData", e.language));
              },
              directives: [f, l.j, A, rt, u.a, lt, jt, Vt, Yt],
              styles: [
                '.appear[_ngcontent-%COMP%]{animation-name:appear;animation-duration:.3s;animation-iteration-count:1;animation-timing-function:linear}@keyframes appear{0%{opacity:0}to{opacity:1}}body[_ngcontent-%COMP%]{padding:0;outline:none;margin:0;background-color:#030101;font-family:PlantixText,PlantixTextFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif}body[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#676767}p[_ngcontent-%COMP%]{font-size:16px;line-height:175%}.element-header[_ngcontent-%COMP%]{padding-top:30px;width:70%;margin:0 auto}.center[_ngcontent-%COMP%], .element-header[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{color:#009788;margin-top:50px}.wrapper[_ngcontent-%COMP%]{width:100%;text-align:center;position:relative;left:0;top:0;overflow:hidden}.container[_ngcontent-%COMP%]{justify-content:space-between;text-align:left;margin:0 auto;align-items:center}.inset-shadow[_ngcontent-%COMP%]:after, .inset-shadow[_ngcontent-%COMP%]:before{content:" ";background-image:url(https://plantix.net/en/assets/img/gradient-velvet.png);height:6px;width:100%;display:block;position:absolute;top:0;left:0}.inset-shadow[_ngcontent-%COMP%]:after{transform:rotate(180deg);top:auto;bottom:0}.button-download[_ngcontent-%COMP%]{display:inline-block;width:auto;max-width:100%;bottom:0;color:#fff;font-family:PlantixHeading,PlantixHeadingFallback,Droid Sans,Arial,Helvetica,Liberation Sans,sans-serif;font-weight:700;font-size:1.3rem;border:2px solid #fff;border-radius:15px;padding:20px 40px;margin:0;position:relative;overflow:hidden;cursor:pointer}@media screen and (max-width:575px){.button-download[_ngcontent-%COMP%]{margin:0 auto}}.button-download[_ngcontent-%COMP%]:hover{background-color:#fff;animation:none!important;color:#009788;border:2px solid #009688}hr[_ngcontent-%COMP%]{display:block;margin:0 auto;height:0;border-top:1px solid #f0f0f0;border-bottom:none;color:#f0f0f0;background-color:#f0f0f0}.bigNumbers[_ngcontent-%COMP%]{display:block;min-height:200px}',
              ],
            })),
            t
          );
        })(),
        ee = n("yl25"),
        ne = n("ccqe"),
        ae = n("5Cg4"),
        oe = (function () {
          function t() {}
          return (
            (t.ɵmod = b.Jb({ type: t })),
            (t.ɵinj = b.Ib({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [
                [
                  l.b,
                  r.c.forChild([
                    { path: "", component: te, pathMatch: "full" },
                  ]),
                  g.a,
                  ae.a,
                  ee.a,
                  ne.a,
                ],
              ],
            })),
            t
          );
        })();
    },
    ccqe: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var a = n("ofXK"),
        o = n("fXoL"),
        i = (function () {
          function t() {}
          return (
            (t.ɵmod = o.Jb({ type: t })),
            (t.ɵinj = o.Ib({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[a.b]],
            })),
            t
          );
        })();
    },
  },
]);
