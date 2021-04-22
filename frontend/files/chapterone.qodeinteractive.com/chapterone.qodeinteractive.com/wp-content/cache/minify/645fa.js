! function(e) {
    "use strict";

    function a() {
        mkdf.scroll = e(window).scrollTop(),
            function() {
                var e = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
                    a = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
                    t = -1 < navigator.userAgent.toLowerCase().indexOf("firefox"),
                    o = window.navigator.userAgent.indexOf("MSIE ");
                e && mkdf.body.addClass("mkdf-chrome");
                a && mkdf.body.addClass("mkdf-safari");
                t && mkdf.body.addClass("mkdf-firefox");
                (0 < o || navigator.userAgent.match(/Trident.*rv\:11\./)) && mkdf.body.addClass("mkdf-ms-explorer");
                /Edge\/\d./i.test(navigator.userAgent) && mkdf.body.addClass("mkdf-edge")
            }(), mkdf.body.addClass("mkdf-fully-loaded"), mkdf.body.hasClass("mkdf-dark-header") && (mkdf.defaultHeaderStyle = "mkdf-dark-header"), mkdf.body.hasClass("mkdf-light-header") && (mkdf.defaultHeaderStyle = "mkdf-light-header")
    }

    function t() {}

    function o() {
        mkdf.windowWidth = e(window).width(), mkdf.windowHeight = e(window).height()
    }

    function n() {
        mkdf.scroll = e(window).scrollTop()
    }
    switch (window.mkdf = {}, mkdf.modules = {}, mkdf.scroll = 0, mkdf.window = e(window), mkdf.document = e(document), mkdf.windowWidth = e(window).width(), mkdf.windowHeight = e(window).height(), mkdf.body = e("body"), mkdf.html = e("html, body"), mkdf.htmlEl = e("html"), mkdf.menuDropdownHeightSet = !1, mkdf.defaultHeaderStyle = "", mkdf.minVideoWidth = 1500, mkdf.videoWidthOriginal = 1280, mkdf.videoHeightOriginal = 720, mkdf.videoRatio = 1.61, mkdf.mkdfOnDocumentReady = a, mkdf.mkdfOnWindowLoad = t, mkdf.mkdfOnWindowResize = o, mkdf.mkdfOnWindowScroll = n, e(document).ready(a), e(window).load(t), e(window).resize(o), e(window).scroll(n), !0) {
        case mkdf.body.hasClass("mkdf-grid-1300"):
            mkdf.boxedLayoutWidth = 1350;
            break;
        case mkdf.body.hasClass("mkdf-grid-1200"):
            mkdf.boxedLayoutWidth = 1250;
            break;
        case mkdf.body.hasClass("mkdf-grid-1000"):
            mkdf.boxedLayoutWidth = 1050;
            break;
        case mkdf.body.hasClass("mkdf-grid-800"):
            mkdf.boxedLayoutWidth = 850;
            break;
        default:
            mkdf.boxedLayoutWidth = 1150
    }
    mkdf.gridWidth = function() {
        var e = 1100;
        switch (!0) {
            case mkdf.body.hasClass("mkdf-grid-1300") && 1400 < mkdf.windowWidth:
                e = 1300;
                break;
            case mkdf.body.hasClass("mkdf-grid-1200") && 1300 < mkdf.windowWidth:
            case mkdf.body.hasClass("mkdf-grid-1000") && 1200 < mkdf.windowWidth:
                e = 1200;
                break;
            case mkdf.body.hasClass("mkdf-grid-800") && 1024 < mkdf.windowWidth:
                e = 800
        }
        return e
    }, mkdf.transitionEnd = function() {
        var e = document.createElement("transitionDetector"),
            a = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                transition: "transitionend"
            };
        for (var t in a)
            if (void 0 !== e.style[t]) return a[t]
    }(), mkdf.animationEnd = function() {
        var e = document.createElement("animationDetector"),
            a = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
        for (var t in a)
            if (void 0 !== e.style[t]) return a[t]
    }()
}(jQuery),
function(D) {
    "use strict";
    var e = {};

    function a() {
        u().init(), -1 < navigator.appVersion.toLowerCase().indexOf("mac") && mkdf.body.hasClass("mkdf-smooth-scroll") && mkdf.body.removeClass("mkdf-smooth-scroll"), s().init(), D("#mkdf-back-to-top").on("click", function(e) {
                e.preventDefault(), mkdf.html.animate({
                    scrollTop: 0
                }, mkdf.window.scrollTop() / 4, "easeInOutCubic")
            }), mkdf.window.scroll(function() {
                var e = D(this).scrollTop(),
                    a = D(this).height();
                r((0 < e ? e + a / 2 : 1) < 1e3 ? "off" : "on")
            }), l(), z(), W(), p(),
            function() {
                var e = D(".mkdf-preload-background");
                e.length && e.each(function() {
                    var e = D(this);
                    if ("" !== e.css("background-image") && "none" !== e.css("background-image")) {
                        var a = e.attr("style");
                        if (a = (a = a.match(/url\(["']?([^'")]+)['"]?\)/)) ? a[1] : "") {
                            var t = new Image;
                            t.src = a, D(t).load(function() {
                                e.removeClass("mkdf-preload-background")
                            })
                        }
                    } else D(window).load(function() {
                        e.removeClass("mkdf-preload-background")
                    })
                })
            }(), m(),
            function() {
                var e = D(".mkdf-search-post-type");
                e.length && e.each(function() {
                    var e = D(this),
                        a = e.find(".mkdf-post-type-search-field"),
                        o = e.siblings(".mkdf-post-type-search-results"),
                        n = e.find(".mkdf-search-loading"),
                        d = e.find(".mkdf-search-icon");
                    n.addClass("mkdf-hidden");
                    var i, s = e.data("post-type");
                    a.on("keyup paste", function() {
                        var t = D(this);
                        t.attr("autocomplete", "off"), n.removeClass("mkdf-hidden"), d.addClass("mkdf-hidden"), clearTimeout(i), i = setTimeout(function() {
                            var e = t.val();
                            if (e.length < 3) o.html(""), o.fadeOut(), n.addClass("mkdf-hidden"), d.removeClass("mkdf-hidden");
                            else {
                                var a = {
                                    action: "chapterone_mikado_search_post_types",
                                    term: e,
                                    postType: s,
                                    search_post_types_nonce: D('input[name="mkdf_search_post_types_nonce"]').val()
                                };
                                D.ajax({
                                    type: "POST",
                                    data: a,
                                    url: mkdfGlobalVars.vars.mkdf_ajax_url,
                                    success: function(e) {
                                        var a = JSON.parse(e);
                                        "success" === a.status && (n.addClass("mkdf-hidden"), d.removeClass("mkdf-hidden"), o.html(a.data.html), o.fadeIn())
                                    },
                                    error: function(e, a, t) {
                                        console.log("Status: " + a), console.log("Error: " + t), n.addClass("mkdf-hidden"), d.removeClass("mkdf-hidden"), o.fadeOut()
                                    }
                                })
                            }
                        }, 500)
                    }), a.on("focusout", function() {
                        n.addClass("mkdf-hidden"), d.removeClass("mkdf-hidden"), o.fadeOut()
                    })
                })
            }(),
            function() {
                var e = D(".mkdf-dashboard-form");
                e.length && e.each(function() {
                    var e = D(this),
                        n = e.find("button.mkdf-dashboard-form-button"),
                        d = n.data("updating-text"),
                        i = n.data("updated-text"),
                        s = e.data("action");
                    e.on("submit", function(e) {
                        e.preventDefault();
                        var t = n.html(),
                            a = D(this).find(".mkdf-dashboard-gallery-upload-hidden"),
                            l = [];
                        n.html(d);
                        var m = new FormData;
                        a.each(function() {
                            var e, a = D(this),
                                t = a.attr("name"),
                                o = a.attr("id"),
                                n = a[0].files;
                            if (-1 < t.indexOf("[")) {
                                e = t.substring(0, t.indexOf("[")) + "_mkdf_regarray_";
                                var d = o.indexOf("["),
                                    i = o.indexOf("]"),
                                    s = o.substring(d + 1, i);
                                l.push(e), e = e + s + "_"
                            } else e = t + "_mkdf_reg_";
                            0 === n.length && m.append(e, new File([""], "mkdf-dummy-file.txt", {
                                type: "text/plain"
                            }));
                            for (var r = 0; r < n.length; r++) {
                                1 === n[r].name.match(/\./g).length && -1 !== D.inArray(n[r].type, ["image/png", "image/jpg", "image/jpeg", "application/pdf"]) && m.append(e + r, n[r])
                            }
                        }), m.append("action", s);
                        var o = D(this).serialize();
                        return m.append("data", o), D.ajax({
                            type: "POST",
                            data: m,
                            contentType: !1,
                            processData: !1,
                            url: mkdfGlobalVars.vars.mkdf_ajax_url,
                            success: function(e) {
                                var a;
                                a = JSON.parse(e), mkdf.modules.socialLogin.mkdfRenderAjaxResponseMessage(a), "success" === a.status ? (n.html(i), window.location = a.redirect) : n.html(t)
                            }
                        }), !1
                    })
                })
            }(), f(),
            function() {
                if (mkdf.body.hasClass("mkdf-smooth-page-transitions")) {
                    if (mkdf.body.hasClass("mkdf-smooth-page-transitions-preloader")) {
                        var o = D("body > .mkdf-smooth-transition-loader.mkdf-mimic-ajax"),
                            e = D("#mkdf-main-rev-holder"),
                            a = D(".mkdf-chapterone-spinner");
                        a.length && setTimeout(function() {
                            a.addClass("mkdf-chapterone-spinner-ready")
                        }, 1e3);
                        var t = function(a, e, t) {
                            a = a || 600, e = e || 0, t = t || "easeOutSine", o.delay(e).fadeOut(a, t), D(window).on("bind", "pageshow", function(e) {
                                e.originalEvent.persisted && o.fadeOut(a, t)
                            })
                        };
                        D(window).on("load", function() {
                            a.length ? (t(600, 4e3, "easeOutSine"), e.length && setTimeout(function() {
                                e.find("rs-module").revstart()
                            }, 4e3)) : t()
                        })
                    }
                    if (window.addEventListener("pageshow", function(e) {
                            (e.persisted || void 0 !== window.performance && 2 === window.performance.navigation.type) && D(".mkdf-wrapper-inner").show()
                        }), mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout")) D("a").on("click", function(e) {
                        var a = D(this);
                        (a.parents(".mkdf-shopping-cart-dropdown").length || a.parent(".product-remove").length) && a.hasClass("remove") || 1 === e.which && 0 <= a.attr("href").indexOf(window.location.host) && void 0 === a.data("rel") && void 0 === a.attr("rel") && !a.hasClass("lightbox-active") && (void 0 === a.attr("target") || "_self" === a.attr("target")) && a.attr("href").split("#")[0] !== window.location.href.split("#")[0] && (e.preventDefault(), D(".mkdf-wrapper-inner").fadeOut(600, "easeOutSine", function() {
                            window.location = a.attr("href")
                        }))
                    })
                }
            }(), D(".widget_categories li > a, .widget_archive li > a").each(function() {
                D(this).on("mouseenter mouseleave", function() {
                    D(this).parent().toggleClass("categories-hovered")
                })
            }),
            function() {
                var e = D(".mkdf-pricing-tables .mkdf-price-table.mkdf-pt-active-item");
                e.length && e.each(function() {
                    var e = D(this);
                    e.appear(function() {
                        e.addClass("mkdf-appear")
                    }, {
                        accX: 0,
                        accY: -350
                    })
                })
            }()
    }

    function t() {
        H(), h().init()
    }

    function o() {
        f(), z()
    }

    function n(e) {
        i(e)
    }

    function d(e) {
        for (var a = [37, 38, 39, 40], t = a.length; t--;)
            if (e.keyCode === a[t]) return void i(e)
    }

    function i(e) {
        (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
    }(mkdf.modules.common = e).mkdfFluidVideo = W, e.mkdfEnableScroll = function() {
        window.removeEventListener && window.removeEventListener("wheel", n, {
            passive: !1
        });
        window.onmousewheel = document.onmousewheel = document.onkeydown = null
    }, e.mkdfDisableScroll = function() {
        window.addEventListener && window.addEventListener("wheel", n, {
            passive: !1
        });
        document.onkeydown = d
    }, e.mkdfOwlSlider = p, e.mkdfInitParallax = H, e.mkdfInitSelfHostedVideoPlayer = l, e.mkdfSelfHostedVideoSize = z, e.mkdfPrettyPhoto = m, e.mkdfStickySidebarWidget = h, e.getLoadMoreData = function(e) {
        var a = e.data(),
            t = {};
        for (var o in a) a.hasOwnProperty(o) && void 0 !== a[o] && !1 !== a[o] && (t[o] = a[o]);
        return t
    }, e.setLoadMoreAjaxData = function(e, a) {
        var t = {
            action: a
        };
        for (var o in e) e.hasOwnProperty(o) && void 0 !== e[o] && !1 !== e[o] && (t[o] = e[o]);
        return t
    }, e.setFixedImageProportionSize = c, e.mkdfInitPerfectScrollbar = function() {
        var t = {
            wheelSpeed: .6,
            suppressScrollX: !0
        };
        return {
            init: function(e) {
                e.length && function(e) {
                    var a = new PerfectScrollbar(e.selector, t);
                    D(window).resize(function() {
                        a.update()
                    })
                }(e)
            }
        }
    }, e.mkdfOnDocumentReady = a, e.mkdfOnWindowLoad = t, e.mkdfOnWindowResize = o, D(document).ready(a), D(window).load(t), D(window).resize(o);
    var s = function() {
        function i(a) {
            D(".mkdf-main-menu, .mkdf-mobile-nav, .mkdf-fullscreen-menu, .mkdf-vertical-menu").each(function() {
                var e = D(this);
                a.parents(e).length && (e.find(".mkdf-active-item").removeClass("mkdf-active-item"), a.parent().addClass("mkdf-active-item"), e.find("a").removeClass("current"), a.addClass("current"))
            })
        }
        var a = function(e) {
                var a, t = D(".mkdf-main-menu a, .mkdf-mobile-nav a, .mkdf-fullscreen-menu a, .mkdf-vertical-menu a"),
                    o = e,
                    n = "" !== o ? D('[data-mkdf-anchor="' + o + '"]') : "";
                if ("" !== o && 0 < n.length) {
                    var d = n.offset().top;
                    return a = d - s(d) - mkdfGlobalVars.vars.mkdf_add_for_admin_bar, t.length && t.each(function() {
                        var e = D(this); - 1 < e.attr("href").indexOf(o) && i(e)
                    }), mkdf.html.stop().animate({
                        scrollTop: Math.round(a)
                    }, 1e3, function() {
                        history.pushState && history.pushState(null, "", "#" + o)
                    }), !1
                }
            },
            s = function(e) {
                "mkdf-sticky-header-on-scroll-down-up" === mkdf.modules.stickyHeader.behaviour && (mkdf.modules.stickyHeader.isStickyVisible = e > mkdf.modules.header.stickyAppearAmount), "mkdf-sticky-header-on-scroll-up" === mkdf.modules.stickyHeader.behaviour && e > mkdf.scroll && (mkdf.modules.stickyHeader.isStickyVisible = !1);
                var a = mkdf.modules.stickyHeader.isStickyVisible ? mkdfGlobalVars.vars.mkdfStickyHeaderTransparencyHeight : mkdfPerPageVars.vars.mkdfHeaderTransparencyHeight;
                return mkdf.windowWidth < 1025 && (a = 0), a
            };
        return {
            init: function() {
                D("[data-mkdf-anchor]").length && (mkdf.document.on("click", ".mkdf-main-menu a, .mkdf-fullscreen-menu a, a.mkdf-btn, .mkdf-anchor, .mkdf-mobile-nav a, .mkdf-vertical-menu a", function() {
                    var e, a = D(this),
                        t = a.prop("hash").split("#")[1],
                        o = "" !== t ? D('[data-mkdf-anchor="' + t + '"]') : "";
                    if ("" !== t && 0 < o.length) {
                        var n = o.offset().top;
                        return e = n - s(n) - mkdfGlobalVars.vars.mkdf_add_for_admin_bar, i(a), mkdf.html.stop().animate({
                            scrollTop: Math.round(e)
                        }, 1e3, function() {
                            history.pushState && history.pushState(null, "", "#" + t)
                        }), !1
                    }
                }), function() {
                    var a, e = D("[data-mkdf-anchor]"),
                        t = window.location.href.split("#")[0];
                    "/" !== t.substr(-1) && (t += "/"), e.waypoint(function(e) {
                        "down" === e && (a = 0 < D(this.element).length ? D(this.element).data("mkdf-anchor") : D(this).data("mkdf-anchor"), i(D("a[href='" + t + "#" + a + "']")))
                    }, {
                        offset: "50%"
                    }), e.waypoint(function(e) {
                        "up" === e && (a = 0 < D(this.element).length ? D(this.element).data("mkdf-anchor") : D(this).data("mkdf-anchor"), i(D("a[href='" + t + "#" + a + "']")))
                    }, {
                        offset: function() {
                            return -(D(this.element).outerHeight() - 150)
                        }
                    })
                }(), D(window).load(function() {
                    ! function() {
                        var e = window.location.hash.split("#")[1];
                        "" !== e && 0 < D('[data-mkdf-anchor="' + e + '"]').length && a(e)
                    }()
                }))
            }
        }
    };

    function r(e) {
        var a = D("#mkdf-back-to-top");
        a.removeClass("off on"), "on" === e ? a.addClass("on") : a.addClass("off")
    }

    function l() {
        var e = D(".mkdf-self-hosted-video");
        e.length && e.mediaelementplayer({
            audioWidth: "100%"
        })
    }

    function z() {
        var e = D(".mkdf-self-hosted-video-holder .mkdf-video-wrap");
        e.length && e.each(function() {
            var e = D(this),
                a = e.closest(".mkdf-self-hosted-video-holder").outerWidth(),
                t = a / mkdf.videoRatio;
            navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (e.parent().width(a), e.parent().height(t)), e.width(a), e.height(t), e.find("video, .mejs-overlay, .mejs-poster").width(a), e.find("video, .mejs-overlay, .mejs-poster").height(t)
        })
    }

    function W() {
        fluidvids.init({
            selector: ["iframe"],
            players: ["www.youtube.com", "player.vimeo.com"]
        })
    }

    function m() {
        var e = '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="' + mkdfGlobalVars.vars.pp_expand + '">' + mkdfGlobalVars.vars.pp_expand + '</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="fa fa-angle-right"></span></a>                                             <a class="pp_previous" href="#"><span class="fa fa-angle-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">' + mkdfGlobalVars.vars.pp_prev + '</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">' + mkdfGlobalVars.vars.pp_next + '</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">' + mkdfGlobalVars.vars.pp_close + '</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>';
        D("a[data-rel^='prettyPhoto']").prettyPhoto({
            hook: "data-rel",
            animation_speed: "normal",
            slideshow: !1,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            horizontal_padding: 0,
            default_width: 960,
            default_height: 540,
            counter_separator_label: "/",
            theme: "pp_default",
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            overlay_gallery: !1,
            keyboard_shortcuts: !0,
            deeplinking: !1,
            custom_markup: "",
            social_tools: !1,
            markup: e
        })
    }

    function f() {
        var e = D(".mkdf-grid-masonry-list");
        e.length && e.each(function() {
            var e = D(this),
                a = e.find(".mkdf-masonry-list-wrapper"),
                t = e.find(".mkdf-masonry-grid-sizer").width();
            a.waitForImages(function() {
                a.isotope({
                    layoutMode: "packery",
                    itemSelector: ".mkdf-item-space",
                    percentPosition: !0,
                    masonry: {
                        columnWidth: ".mkdf-masonry-grid-sizer",
                        gutter: ".mkdf-masonry-grid-gutter"
                    }
                }), (e.find(".mkdf-fixed-masonry-item").length || e.hasClass("mkdf-fixed-masonry-items")) && c(a, a.find(".mkdf-item-space"), t, !0), setTimeout(function() {
                    H()
                }, 600), a.isotope("layout").css("opacity", 1)
            })
        })
    }

    function c(e, a, t, o) {
        if (e.hasClass("mkdf-masonry-images-fixed") || !0 === o) {
            var n = parseInt(a.css("paddingLeft"), 10),
                d = t - 2 * n,
                i = e.find(".mkdf-masonry-size-small"),
                s = e.find(".mkdf-masonry-size-large-width"),
                r = e.find(".mkdf-masonry-size-large-height"),
                l = e.find(".mkdf-masonry-size-large-width-height");
            i.css("height", d), r.css("height", Math.round(2 * (d + n))), 680 < mkdf.windowWidth ? (s.css("height", d), l.css("height", Math.round(2 * (d + n)))) : (s.css("height", Math.round(d / 2)), l.css("height", d))
        }
    }
    var u = function() {
        var e = D(".mkdf-icon-has-hover");
        return {
            init: function() {
                e.length && e.each(function() {
                    ! function(e) {
                        if (void 0 !== e.data("hover-color")) {
                            var a = function(e) {
                                    e.data.icon.css("color", e.data.color)
                                },
                                t = e.data("hover-color"),
                                o = e.css("color");
                            "" !== t && (e.on("mouseenter", {
                                icon: e,
                                color: t
                            }, a), e.on("mouseleave", {
                                icon: e,
                                color: o
                            }, a))
                        }
                    }(D(this))
                })
            }
        }
    };

    function H() {
        var e = D(".mkdf-parallax-row-holder");
        e.length && e.each(function() {
            var e = D(this),
                a = e.data("parallax-bg-image"),
                t = .4 * e.data("parallax-bg-speed"),
                o = 0;
            void 0 !== e.data("parallax-bg-height") && !1 !== e.data("parallax-bg-height") && (o = parseInt(e.data("parallax-bg-height"))), e.css({
                "background-image": "url(" + a + ")"
            }), 0 < o && e.css({
                "min-height": o + "px",
                height: o + "px"
            }), e.parallax("50%", t)
        })
    }

    function h() {
        var e = D(".mkdf-widget-sticky-sidebar"),
            a = D(".mkdf-page-header"),
            c = a.length ? a.outerHeight() : 0,
            i = 0,
            s = 0,
            r = 0,
            l = 0,
            u = [];

        function t() {
            u.length && D.each(u, function(e) {
                u[e].object;
                var a = u[e].offset,
                    t = u[e].position,
                    o = u[e].height,
                    n = u[e].width,
                    d = u[e].sidebarHolder,
                    i = u[e].sidebarHolderHeight;
                if (mkdf.body.hasClass("mkdf-fixed-on-scroll")) {
                    var s = D(".mkdf-fixed-wrapper.fixed");
                    s.length && (c = s.outerHeight() + mkdfGlobalVars.vars.mkdf_add_for_admin_bar)
                } else mkdf.body.hasClass("mkdf-no-behavior") && (c = mkdfGlobalVars.vars.mkdf_add_for_admin_bar);
                if (1024 < mkdf.windowWidth && d.length) {
                    var r = -(t - c),
                        l = o - t - 40,
                        m = i + a - c - t - mkdfGlobalVars.vars.mkdfTopBarHeight;
                    if (mkdf.scroll >= a - c && o < i)
                        if (d.hasClass("mkdf-sticky-sidebar-appeared") ? d.css({
                                top: r + "px"
                            }) : d.addClass("mkdf-sticky-sidebar-appeared").css({
                                position: "fixed",
                                top: r + "px",
                                width: n,
                                "margin-top": "-10px"
                            }).animate({
                                "margin-top": "0"
                            }, 200), mkdf.scroll + l >= m) {
                            var f = i - l + r - c;
                            d.css({
                                position: "absolute",
                                top: f + "px"
                            })
                        } else d.hasClass("mkdf-sticky-sidebar-appeared") && d.css({
                            position: "fixed",
                            top: r + "px"
                        });
                    else d.removeClass("mkdf-sticky-sidebar-appeared").css({
                        position: "relative",
                        top: "0",
                        width: "auto"
                    })
                } else d.removeClass("mkdf-sticky-sidebar-appeared").css({
                    position: "relative",
                    top: "0",
                    width: "auto"
                })
            })
        }
        return {
            init: function() {
                e.length && e.each(function() {
                    var e = D(this),
                        a = e.parents("aside.mkdf-sidebar"),
                        t = e.parents(".wpb_widgetised_column"),
                        o = "",
                        n = 0;
                    if (i = e.offset().top, s = e.position().top, l = r = 0, a.length) {
                        r = a.outerHeight(), l = a.outerWidth(), n = (o = a).parent().parent().outerHeight();
                        var d = a.parent().parent().find(".mkdf-blog-holder");
                        d.length && (n -= parseInt(d.css("marginBottom")))
                    } else t.length && (r = t.outerHeight(), l = t.outerWidth(), n = (o = t).parents(".vc_row").outerHeight());
                    u.push({
                        object: e,
                        offset: i,
                        position: s,
                        height: r,
                        width: l,
                        sidebarHolder: o,
                        sidebarHolderHeight: n
                    })
                }), t(), D(window).scroll(function() {
                    t()
                })
            },
            reInit: t
        }
    }

    function p() {
        var e = D(".mkdf-owl-slider");
        e.length && e.each(function() {
            var t, a = D(this),
                e = D(this),
                o = a.children().length,
                n = 1,
                d = !0,
                i = !0,
                s = !0,
                r = 5e3,
                l = 600,
                m = 0,
                f = 0,
                c = 0,
                u = 0,
                h = !1,
                p = !1,
                k = !1,
                g = !1,
                v = !1,
                y = !0,
                b = !1,
                w = !1,
                C = !!a.hasClass("mkdf-list-is-slider"),
                _ = C ? a.parent() : a;
            if (void 0 === a.data("number-of-items") || !1 === a.data("number-of-items") || C || (n = a.data("number-of-items")), void 0 !== _.data("number-of-columns") && !1 !== _.data("number-of-columns") && C) switch (_.data("number-of-columns")) {
                case "one":
                    n = 1;
                    break;
                case "two":
                    n = 2;
                    break;
                case "three":
                    n = 3;
                    break;
                case "four":
                    n = 4;
                    break;
                case "five":
                    n = 5;
                    break;
                case "six":
                    n = 6;
                    break;
                default:
                    n = 4
            }
            "no" === _.data("enable-loop") && (d = !1), "no" === _.data("enable-autoplay") && (i = !1), "no" === _.data("enable-autoplay-hover-pause") && (s = !1), void 0 !== _.data("slider-speed") && !1 !== _.data("slider-speed") && (r = _.data("slider-speed")), void 0 !== _.data("slider-speed-animation") && !1 !== _.data("slider-speed-animation") && (l = _.data("slider-speed-animation")), void 0 !== _.data("slider-margin") && !1 !== _.data("slider-margin") ? m = "no" === _.data("slider-margin") ? 0 : _.data("slider-margin") : a.parent().hasClass("mkdf-huge-space") ? m = 60 : a.parent().hasClass("mkdf-large-space") ? m = 50 : a.parent().hasClass("mkdf-medium-space") ? m = 40 : a.parent().hasClass("mkdf-normal-space") ? m = 30 : a.parent().hasClass("mkdf-small-space") ? m = 20 : a.parent().hasClass("mkdf-tiny-space") && (m = 10), "yes" === _.data("slider-padding") && (h = !0, u = parseInt(.28 * a.outerWidth()), m = 50), "yes" === _.data("enable-center") && (p = !0), "yes" === _.data("enable-auto-width") && (k = !0), void 0 !== _.data("slider-animate-in") && !1 !== _.data("slider-animate-in") && (g = _.data("slider-animate-in")), void 0 !== _.data("slider-animate-out") && !1 !== _.data("slider-animate-out") && (v = _.data("slider-animate-out")), "no" === _.data("enable-navigation") && (y = !1), "yes" === _.data("enable-pagination") && (b = !0), "yes" === _.data("enable-thumbnail") && (w = !0), w && !b && (b = !0, e.addClass("mkdf-slider-hide-pagination")), y && b && a.addClass("mkdf-slider-has-both-nav"), o <= 1 && (b = y = i = d = !1);
            var x = 2,
                S = 3,
                O = n,
                I = n;
            if (n < 3 && (S = x = n), 4 < n && (O = 4), 5 < n && (I = 5), (h || 30 < m) && (f = 20, c = 30), 0 < m && m <= 30 && (c = f = m), a.waitForImages(function() {
                    e = a.owlCarousel({
                        items: n,
                        loop: d,
                        autoplay: i,
                        autoplayHoverPause: s,
                        autoplayTimeout: r,
                        smartSpeed: l,
                        margin: m,
                        stagePadding: u,
                        center: p,
                        autoWidth: k,
                        animateIn: g,
                        animateOut: v,
                        dots: b,
                        nav: y,
                        navText: ['<span class="mkdf-prev-icon ' + mkdfGlobalVars.vars.slider_nav_prev_arrow + '"></span>', '<span class="mkdf-next-icon ' + mkdfGlobalVars.vars.slider_nav_next_arrow + '"></span>'],
                        responsive: {
                            0: {
                                items: 1,
                                margin: f,
                                stagePadding: 0,
                                center: !1,
                                autoWidth: !1
                            },
                            681: {
                                items: x,
                                margin: c
                            },
                            769: {
                                items: S,
                                margin: c
                            },
                            1025: {
                                items: O
                            },
                            1281: {
                                items: I
                            },
                            1367: {
                                items: n
                            }
                        },
                        onInitialize: function() {
                            a.css("visibility", "visible"), H(), (a.find("iframe").length || a.find("video").length) && setTimeout(function() {
                                z(), W()
                            }, 500), w && t.find(".mkdf-slider-thumbnail-item:first-child").addClass("active")
                        },
                        onRefreshed: function() {
                            if (!0 === k) {
                                var e = parseInt(a.find(".owl-stage").css("width"));
                                a.find(".owl-stage").css("width", e + 1 + "px")
                            }
                        },
                        onTranslate: function(e) {
                            if (w) {
                                var a = e.page.index + 1;
                                t.find(".mkdf-slider-thumbnail-item.active").removeClass("active"), t.find(".mkdf-slider-thumbnail-item:nth-child(" + a + ")").addClass("active")
                            }
                        },
                        onDrag: function(e) {
                            mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") && 0 < e.isTrigger && a.addClass("mkdf-slider-is-moving")
                        },
                        onDragged: function() {
                            mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") && a.hasClass("mkdf-slider-is-moving") && setTimeout(function() {
                                a.removeClass("mkdf-slider-is-moving")
                            }, 500)
                        }
                    })
                }), w) {
                t = a.parent().find(".mkdf-slider-thumbnail");
                var T = "";
                switch (parseInt(t.data("thumbnail-count")) % 6) {
                    case 2:
                        T = "two";
                        break;
                    case 3:
                        T = "three";
                        break;
                    case 4:
                        T = "four";
                        break;
                    case 5:
                        T = "five";
                        break;
                    case 0:
                    default:
                        T = "six"
                }
                "" !== T && t.addClass("mkdf-slider-columns-" + T), t.find(".mkdf-slider-thumbnail-item").on("click", function() {
                    D(this).siblings(".active").removeClass("active"), D(this).addClass("active"), e.trigger("to.owl.carousel", [D(this).index(), l])
                })
            }
        })
    }
}(jQuery),
function(m) {
    "use strict";
    var e = {};

    function a() {
        f()
    }

    function t() {
        n().init()
    }

    function o() {
        n().scroll()
    }

    function f() {
        var e = m("audio.mkdf-blog-audio");
        e.length && e.mediaelementplayer({
            audioWidth: "100%"
        })
    }

    function n() {
        function a(e) {
            var a = e.outerHeight() + e.offset().top - mkdfGlobalVars.vars.mkdf_add_for_admin_bar;
            !e.hasClass("mkdf-blog-pagination-infinite-scroll-started") && mkdf.scroll + mkdf.windowHeight > a && t(e)
        }
        var e = m(".mkdf-blog-holder"),
            t = function(t) {
                var o, e, n = t.children(".mkdf-blog-holder-inner");
                void 0 !== t.data("max-num-pages") && !1 !== t.data("max-num-pages") && (e = t.data("max-num-pages")), t.hasClass("mkdf-blog-pagination-infinite-scroll") && t.addClass("mkdf-blog-pagination-infinite-scroll-started");
                var a = mkdf.modules.common.getLoadMoreData(t),
                    d = t.find(".mkdf-blog-pag-loading");
                o = a.nextPage;
                var i = t.find('input[name*="mkdf_blog_load_more_nonce_"]');
                if (a.blog_load_more_id = i.attr("name").substring(i.attr("name").length - 4, i.attr("name").length), a.blog_load_more_nonce = i.val(), o <= e) {
                    d.addClass("mkdf-showing");
                    var s = mkdf.modules.common.setLoadMoreAjaxData(a, "chapterone_mikado_blog_load_more");
                    m.ajax({
                        type: "POST",
                        data: s,
                        url: mkdfGlobalVars.vars.mkdf_ajax_url,
                        success: function(e) {
                            o++, t.data("next-page", o);
                            var a = m.parseJSON(e).html;
                            t.waitForImages(function() {
                                t.hasClass("mkdf-grid-masonry-list") ? (r(n, d, a), mkdf.modules.common.setFixedImageProportionSize(t, t.find("article"), n.find(".mkdf-masonry-grid-sizer").width())) : l(n, d, a), setTimeout(function() {
                                    f(), mkdf.modules.common.mkdfOwlSlider(), mkdf.modules.common.mkdfFluidVideo(), mkdf.modules.common.mkdfInitSelfHostedVideoPlayer(), mkdf.modules.common.mkdfSelfHostedVideoSize(), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit(), m(document.body).trigger("blog_list_load_more_trigger")
                                }, 400)
                            }), t.hasClass("mkdf-blog-pagination-infinite-scroll-started") && t.removeClass("mkdf-blog-pagination-infinite-scroll-started")
                        }
                    })
                }
                o === e && t.find(".mkdf-blog-pag-load-more").hide()
            },
            r = function(e, a, t) {
                e.append(t).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), a.removeClass("mkdf-showing"), setTimeout(function() {
                    e.isotope("layout")
                }, 600)
            },
            l = function(e, a, t) {
                a.removeClass("mkdf-showing"), e.append(t)
            };
        return {
            init: function() {
                e.length && e.each(function() {
                    var e = m(this);
                    e.hasClass("mkdf-blog-pagination-load-more") && function(a) {
                        a.find(".mkdf-blog-pag-load-more a").on("click", function(e) {
                            e.preventDefault(), e.stopPropagation(), t(a)
                        })
                    }(e), e.hasClass("mkdf-blog-pagination-infinite-scroll") && a(e)
                })
            },
            scroll: function() {
                e.length && e.each(function() {
                    var e = m(this);
                    e.hasClass("mkdf-blog-pagination-infinite-scroll") && a(e)
                })
            }
        }
    }(mkdf.modules.blog = e).mkdfOnDocumentReady = a, e.mkdfOnWindowLoad = t, e.mkdfOnWindowScroll = o, m(document).ready(a), m(window).load(t), m(window).scroll(o)
}(jQuery),
function(n) {
    "use strict";
    var e = {};

    function a() {
        ! function() {
            if (n("body:not(.error404) .mkdf-footer-uncover").length && !mkdf.htmlEl.hasClass("touch")) {
                var e = n("footer"),
                    a = e.outerHeight(),
                    t = n(".mkdf-content"),
                    o = function() {
                        t.css("margin-bottom", a), e.css("height", a)
                    };
                o(), n(window).resize(function() {
                    a = e.find(".mkdf-footer-inner").outerHeight(), o()
                })
            }
        }()
    }(mkdf.modules.footer = e).mkdfOnWindowLoad = a, n(window).load(a)
}(jQuery),
function(r) {
    "use strict";
    var e = {};

    function a() {
        o(), setTimeout(function() {
            r(".mkdf-drop-down > ul > li").each(function() {
                var i = r(this);
                i.find(".second").length && i.waitForImages(function() {
                    var e = i.find(".second"),
                        a = mkdf.menuDropdownHeightSet ? 0 : e.outerHeight();
                    if (i.hasClass("wide")) {
                        var t = 0,
                            o = e.find("> .inner > ul > li");
                        o.each(function() {
                            var e = r(this).outerHeight();
                            t < e && (t = e)
                        }), o.css("height", "").height(t), mkdf.menuDropdownHeightSet || (a = e.outerHeight())
                    }
                    if (mkdf.menuDropdownHeightSet || e.height(0), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) i.on("touchstart mouseenter", function() {
                        e.css({
                            height: a,
                            overflow: "visible",
                            visibility: "visible",
                            opacity: "1"
                        })
                    }).on("mouseleave", function() {
                        e.css({
                            height: "0px",
                            overflow: "hidden",
                            visibility: "hidden",
                            opacity: "0"
                        })
                    });
                    else if (mkdf.body.hasClass("mkdf-dropdown-animate-height")) {
                        var n = {
                            interval: 0,
                            over: function() {
                                setTimeout(function() {
                                    e.addClass("mkdf-drop-down-start").css({
                                        visibility: "visible",
                                        height: "0",
                                        opacity: "1"
                                    }), e.stop().animate({
                                        height: a
                                    }, 400, "easeInOutQuint", function() {
                                        e.css("overflow", "visible")
                                    })
                                }, 100)
                            },
                            timeout: 100,
                            out: function() {
                                e.stop().animate({
                                    height: "0",
                                    opacity: 0
                                }, 100, function() {
                                    e.css({
                                        overflow: "hidden",
                                        visibility: "hidden"
                                    })
                                }), e.removeClass("mkdf-drop-down-start")
                            }
                        };
                        i.hoverIntent(n)
                    } else {
                        var d = {
                            interval: 0,
                            over: function() {
                                setTimeout(function() {
                                    e.addClass("mkdf-drop-down-start").stop().css({
                                        height: a
                                    })
                                }, 150)
                            },
                            timeout: 150,
                            out: function() {
                                e.stop().css({
                                    height: "0"
                                }).removeClass("mkdf-drop-down-start")
                            }
                        };
                        i.hoverIntent(d)
                    }
                })
            }), r(".mkdf-drop-down ul li.wide ul li a").on("click", function(e) {
                if (1 === e.which) {
                    var a = r(this);
                    setTimeout(function() {
                        a.mouseleave()
                    }, 500)
                }
            }), mkdf.menuDropdownHeightSet = !0
        }, 100)
    }

    function t() {
        n()
    }

    function o() {
        var e = r(".mkdf-drop-down > ul > li.narrow.menu-item-has-children");
        e.length && e.each(function(e) {
            var a, t = r(this),
                o = t.offset().left,
                n = t.find(".second"),
                d = n.find(".inner ul"),
                i = d.outerWidth(),
                s = mkdf.windowWidth - o;
            mkdf.body.hasClass("mkdf-boxed") && (s = mkdf.boxedLayoutWidth - (o - (mkdf.windowWidth - mkdf.boxedLayoutWidth) / 2)), 0 < t.find("li.sub").length && (a = s - i), n.removeClass("right"), d.removeClass("right"), (s < i || a < i) && (n.addClass("right"), d.addClass("right"))
        })
    }

    function n() {
        var e = r(".mkdf-drop-down > ul > li.wide");
        e.length && e.each(function(e) {
            var a = r(this).find(".second");
            if (a.length && !a.hasClass("left_position") && !a.hasClass("right_position")) {
                a.css("left", 0);
                var t = a.offset().left;
                if (mkdf.body.hasClass("mkdf-boxed")) {
                    var o = r(".mkdf-boxed .mkdf-wrapper .mkdf-wrapper-inner").outerWidth();
                    t -= (mkdf.windowWidth - o) / 2, a.css({
                        left: -t,
                        width: o
                    })
                } else mkdf.body.hasClass("mkdf-wide-dropdown-menu-in-grid") ? a.css({
                    left: -t + (mkdf.windowWidth - mkdf.gridWidth()) / 2,
                    width: mkdf.gridWidth()
                }) : a.css({
                    left: -t,
                    width: mkdf.windowWidth
                })
            }
        })
    }(mkdf.modules.header = e).mkdfSetDropDownMenuPosition = o, e.mkdfSetDropDownWideMenuPosition = n, e.mkdfOnDocumentReady = a, e.mkdfOnWindowLoad = t, r(document).ready(a), r(window).load(t)
}(jQuery),
function(m) {
    "use strict";
    var e = {};

    function a() {
        ! function() {
            var o, n = m(".mkdf-wrapper"),
                d = m(".mkdf-side-menu"),
                i = m("a.mkdf-side-menu-button-opener"),
                s = !1,
                r = !1,
                l = !1;
            mkdf.body.hasClass("mkdf-side-menu-slide-from-right") ? (m(".mkdf-cover").remove(), o = "mkdf-right-side-menu-opened", n.prepend('<div class="mkdf-cover"/>'), s = !0) : mkdf.body.hasClass("mkdf-side-menu-slide-with-content") ? (o = "mkdf-side-menu-open", r = !0) : mkdf.body.hasClass("mkdf-side-area-uncovered-from-content") && (o = "mkdf-right-side-menu-opened", l = !0);
            m("a.mkdf-side-menu-button-opener, a.mkdf-close-side-menu").on("click", function(e) {
                if (e.preventDefault(), i.hasClass("opened")) {
                    if (i.removeClass("opened"), mkdf.body.removeClass(o), l) var a = setTimeout(function() {
                        d.css({
                            visibility: "hidden"
                        }), clearTimeout(a)
                    }, 400)
                } else {
                    i.addClass("opened"), mkdf.body.addClass(o), s && m(".mkdf-wrapper .mkdf-cover").on("click", function() {
                        mkdf.body.removeClass("mkdf-right-side-menu-opened"), i.removeClass("opened")
                    }), l && d.css({
                        visibility: "visible"
                    });
                    var t = m(window).scrollTop();
                    m(window).scroll(function() {
                        if (400 < Math.abs(mkdf.scroll - t) && (mkdf.body.removeClass(o), i.removeClass("opened"), l)) var e = setTimeout(function() {
                            d.css({
                                visibility: "hidden"
                            }), clearTimeout(e)
                        }, 400)
                    })
                }
                r && (e.stopPropagation(), n.on("click", function() {
                    e.preventDefault(), i.removeClass("opened"), mkdf.body.removeClass("mkdf-side-menu-open")
                }))
            }), d.length && mkdf.modules.common.mkdfInitPerfectScrollbar().init(d)
        }()
    }(mkdf.modules.sidearea = e).mkdfOnDocumentReady = a, m(document).ready(a)
}(jQuery),
function(s) {
    "use strict";
    var e = {};

    function a() {
        ! function() {
            var e = s(".mkdf-subscribe-popup-holder"),
                a = s(".mkdf-sp-close");
            if (e.length) {
                var t = e.find(".mkdf-sp-prevent"),
                    o = "no";
                if (t.length) {
                    var n = e.hasClass("mkdf-sp-prevent-cookies"),
                        d = t.find(".mkdf-sp-prevent-input"),
                        i = d.data("value");
                    n ? (o = localStorage.getItem("disabledPopup"), sessionStorage.removeItem("disabledPopup")) : (o = sessionStorage.getItem("disabledPopup"), localStorage.removeItem("disabledPopup")), t.children().on("click", function(e) {
                        "yes" !== i ? (i = "yes", d.addClass("mkdf-sp-prevent-clicked").data("value", "yes")) : (i = "no", d.removeClass("mkdf-sp-prevent-clicked").data("value", "no")), "yes" === i ? n ? localStorage.setItem("disabledPopup", "yes") : sessionStorage.setItem("disabledPopup", "yes") : n ? localStorage.setItem("disabledPopup", "no") : sessionStorage.setItem("disabledPopup", "no")
                    })
                }
                "yes" !== o && (mkdf.body.hasClass("mkdf-sp-opened") ? (mkdf.body.removeClass("mkdf-sp-opened"), mkdf.modules.common.mkdfEnableScroll()) : (mkdf.body.addClass("mkdf-sp-opened"), mkdf.modules.common.mkdfDisableScroll()), a.on("click", function(e) {
                    e.preventDefault(), mkdf.body.removeClass("mkdf-sp-opened"), mkdf.modules.common.mkdfEnableScroll()
                }), s(document).keyup(function(e) {
                    27 === e.keyCode && (mkdf.body.removeClass("mkdf-sp-opened"), mkdf.modules.common.mkdfEnableScroll())
                }))
            }
        }()
    }(mkdf.modules.subscribePopup = e).mkdfOnWindowLoad = a, s(window).load(a)
}(jQuery),
function(r) {
    "use strict";
    var e = {};

    function a() {
        r(document).on("click", ".mkdf-quantity-minus, .mkdf-quantity-plus", function(e) {
                e.stopPropagation();
                var a, t = r(this),
                    o = t.siblings(".mkdf-quantity-input"),
                    n = parseFloat(o.data("step")),
                    d = parseFloat(o.data("max")),
                    i = !1,
                    s = parseFloat(o.val());
                t.hasClass("mkdf-quantity-minus") && (i = !0), i ? 1 <= (a = s - n) ? o.val(a) : o.val(0) : (a = s + n, void 0 === d ? o.val(a) : d <= a ? o.val(d) : o.val(a)), o.trigger("change")
            }), r(".mkdf-woocommerce-page .mkdf-content .variations tr").each(function() {
                var e = r(this).find("label").text();
                r(this).find("td.value select > option:first-child").text("Choose " + e), r(this).find("td.value select > option:not(:first-child)").prepend(e + ": ")
            }), r(".mkdf-woo-single-page").on("found_variation", function() {
                var e = r(".mkdf-woocommerce-page .mkdf-content .single_variation_wrap .single_variation .woocommerce-variation-price .price").html();
                r(".mkdf-woo-single-page .mkdf-single-product-summary .price").html(e)
            }),
            function() {
                var e = r(".woocommerce-ordering .orderby");
                e.length && e.select2({
                    minimumResultsForSearch: 1 / 0
                });
                var a = r(".mkdf-woocommerce-page .mkdf-content .variations td.value select");
                a.length && a.select2();
                var t = r("#calc_shipping_country");
                t.length && t.select2();
                var o = r(".cart-collaterals .shipping select#calc_shipping_state");
                o.length && o.select2();
                var n = r(".widget.widget_archive select, .widget.widget_categories select, .widget.widget_text select");
                n.length && "function" == typeof n.select2 && n.select2()
            }(),
            function() {
                var e = r(".mkdf-woo-single-page.mkdf-woo-single-has-pretty-photo .images .woocommerce-product-gallery__image");
                e.length && (e.children("a").attr("data-rel", "prettyPhoto[woo_single_pretty_photo]"), "function" == typeof mkdf.modules.common.mkdfPrettyPhoto && mkdf.modules.common.mkdfPrettyPhoto())
            }(),
            function() {
                var e = r(".mkdf-woo-single-page .woocommerce-tabs #reviews .comment-respond #comment"),
                    a = r(".mkdf-woo-single-page .woocommerce-tabs #reviews .comment-respond #author"),
                    t = r(".mkdf-woo-single-page .woocommerce-tabs #reviews .comment-respond #email");
                e.attr("placeholder", "Your Review"), a.attr("placeholder", "Name Surname"), t.attr("placeholder", "Email")
            }()
    }

    function t() {
        1024 < mkdf.windowWidth && o().init()
    }(mkdf.modules.woocommerce = e).mkdfOnDocumentReady = a, e.mkdfOnWindowLoad = t, r(document).ready(a), r(window).load(t);
    var o = function() {
        function e() {
            if (mkdf.scroll < o.start - o.top && mkdf.scroll + o.h && "top" !== o.data("state")) TweenLite.to(o.wrapper, .1, {
                y: 0
            }), TweenLite.to(o.wrapper, .3, {
                y: 0,
                delay: .1
            }), o.data("state", "top"), o.wrapper.css({
                position: "static"
            });
            else if (mkdf.scroll >= o.start - o.top && mkdf.scroll + o.h + o.adj <= o.start + o.end && "fixed" !== o.data("state")) {
                o.data("state");
                o.data("state", "fixed"), o.wrapper.css({
                    position: "fixed",
                    top: o.top,
                    left: o.left,
                    width: o.w
                }), TweenLite.fromTo(o.wrapper, .2, {
                    y: 0
                }, {
                    y: 0,
                    ease: Power4.easeInOut
                }), TweenLite.to(o.wrapper, .2, {
                    y: 0,
                    delay: .2
                })
            } else mkdf.scroll + o.h + o.adj > o.start + o.end && "bottom" !== o.data("state") && (o.data("state", "bottom"), o.wrapper.css({
                position: "absolute",
                top: o.end - o.h,
                left: 0
            }), TweenLite.fromTo(o.wrapper, .1, {
                y: 0
            }, {
                y: 0
            }), TweenLite.to(o.wrapper, .3, {
                y: 0,
                delay: .1
            }))
        }

        function a() {
            ! function() {
                var e = r(".mkdf-woo-single-page .mkdf-single-product-content"),
                    a = r(".header-appear, .mkdf-fixed-wrapper"),
                    t = a.length ? a.height() : 0;
                o.start = e.offset().top, o.end = e.outerHeight(), o.h = o.wrapper.height(), o.w = o.outerWidth(), o.left = o.offset().left, o.top = t + mkdfGlobalVars.vars.mkdf_add_for_admin_bar + o.c, o.data("state", "top")
            }(), e()
        }
        var o = r(".mkdf-woo-single-page .mkdf-single-product-content .images");
        return {
            init: function() {
                o.length && 1024 < mkdf.windowWidth && (o.wrapper = r(".mkdf-woo-single-page .mkdf-single-product-content .images > figure"), o.c = 24, o.adj = 0, a(), r(window).on("resize", 1024 < mkdf.windowWidth && a), r(window).on("scroll", 1024 < mkdf.windowWidth && e))
            }
        }
    }
}(jQuery),
function(s) {
    "use strict";
    var e = {};

    function a() {
        ! function() {
            var e = s(".mkdf-title-holder.mkdf-bg-parallax");
            if (0 < e.length && 1024 < mkdf.windowWidth) {
                var a = e.hasClass("mkdf-bg-parallax-zoom-out"),
                    t = parseInt(e.data("height")),
                    o = parseInt(e.data("background-width")),
                    n = t / 1e4 * 7,
                    d = -mkdf.scroll * n,
                    i = mkdfGlobalVars.vars.mkdf_add_for_admin_bar;
                e.css({
                    "background-position": "center " + (d + i) + "px"
                }), a && a.css({
                    "background-size": o - mkdf.scroll + "px auto"
                }), s(window).scroll(function() {
                    d = -mkdf.scroll * n, e.css({
                        "background-position": "center " + (d + i) + "px"
                    }), a && a.css({
                        "background-size": o - mkdf.scroll + "px auto"
                    })
                })
            }
        }()
    }(mkdf.modules.title = e).mkdfOnDocumentReady = a, s(document).ready(a)
}(jQuery),
function(h) {
    "use strict";
    var e = {};

    function a() {
        o().init()
    }

    function t() {
        o().scroll()
    }

    function o() {
        function a(e) {
            var a = e.outerHeight() + e.offset().top - mkdfGlobalVars.vars.mkdf_add_for_admin_bar;
            !e.hasClass("mkdf-bl-pag-infinite-scroll-started") && mkdf.scroll + mkdf.windowHeight > a && n(e)
        }
        var e = h(".mkdf-blog-list-holder"),
            n = function(t, e) {
                var o, n, d = t.find(".mkdf-blog-list");
                void 0 !== t.data("max-num-pages") && !1 !== t.data("max-num-pages") && (n = t.data("max-num-pages")), t.hasClass("mkdf-bl-pag-standard-shortcodes") && t.data("next-page", e), t.hasClass("mkdf-bl-pag-infinite-scroll") && t.addClass("mkdf-bl-pag-infinite-scroll-started");
                var a = mkdf.modules.common.getLoadMoreData(t),
                    i = t.find(".mkdf-blog-pag-loading");
                o = a.nextPage;
                var s = t.find('input[name*="mkdf_blog_load_more_nonce_"]');
                if (a.blog_load_more_id = s.attr("name").substring(s.attr("name").length - 4, s.attr("name").length), a.blog_load_more_nonce = s.val(), o <= n) {
                    t.hasClass("mkdf-bl-pag-standard-shortcodes") ? (i.addClass("mkdf-showing mkdf-standard-pag-trigger"), t.addClass("mkdf-bl-pag-standard-shortcodes-animate")) : i.addClass("mkdf-showing");
                    var r = mkdf.modules.common.setLoadMoreAjaxData(a, "chapterone_mikado_blog_shortcode_load_more");
                    h.ajax({
                        type: "POST",
                        data: r,
                        url: mkdfGlobalVars.vars.mkdf_ajax_url,
                        success: function(e) {
                            t.hasClass("mkdf-bl-pag-standard-shortcodes") || o++, t.data("next-page", o);
                            var a = h.parseJSON(e).html;
                            t.hasClass("mkdf-bl-pag-standard-shortcodes") ? (l(t, n, o), t.waitForImages(function() {
                                t.hasClass("mkdf-bl-masonry") ? m(t, d, i, a) : (f(t, d, i, a), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit())
                            })) : t.waitForImages(function() {
                                t.hasClass("mkdf-bl-masonry") ? c(d, i, a) : (u(d, i, a), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit())
                            }), t.hasClass("mkdf-bl-pag-infinite-scroll-started") && t.removeClass("mkdf-bl-pag-infinite-scroll-started")
                        }
                    })
                }
                o === n && t.find(".mkdf-blog-pag-load-more").hide()
            },
            l = function(e, a, t) {
                var o = e.find(".mkdf-bl-standard-pagination"),
                    n = o.find("li.mkdf-pag-number"),
                    d = o.find("li.mkdf-pag-prev a"),
                    i = o.find("li.mkdf-pag-next a");
                n.removeClass("mkdf-pag-active"), n.eq(t - 1).addClass("mkdf-pag-active"), d.data("paged", t - 1), i.data("paged", t + 1), 1 < t ? d.css({
                    opacity: "1"
                }) : d.css({
                    opacity: "0"
                }), t === a ? i.css({
                    opacity: "0"
                }) : i.css({
                    opacity: "1"
                })
            },
            m = function(e, a, t, o) {
                var n = "";
                a.children('[class*="-grid-sizer"]').length && (n += a.children('[class*="-grid-sizer"]')[0].outerHTML), a.children('[class*="-grid-gutter"]').length && (n += a.children('[class*="-grid-gutter"]')[0].outerHTML), a.html(n + o).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), t.removeClass("mkdf-showing mkdf-standard-pag-trigger"), e.removeClass("mkdf-bl-pag-standard-shortcodes-animate"), setTimeout(function() {
                    a.isotope("layout"), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit()
                }, 600)
            },
            f = function(e, a, t, o) {
                t.removeClass("mkdf-showing mkdf-standard-pag-trigger"), e.removeClass("mkdf-bl-pag-standard-shortcodes-animate"), a.html(o)
            },
            c = function(e, a, t) {
                e.append(t).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), a.removeClass("mkdf-showing"), setTimeout(function() {
                    e.isotope("layout"), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit()
                }, 600)
            },
            u = function(e, a, t) {
                a.removeClass("mkdf-showing"), e.append(t)
            };
        return {
            init: function() {
                e.length && e.each(function() {
                    var e = h(this);
                    e.hasClass("mkdf-bl-pag-standard-shortcodes") && function(o) {
                        var e = o.find(".mkdf-bl-standard-pagination li");
                        e.length && e.each(function() {
                            var a = h(this).children("a"),
                                t = 1;
                            a.on("click", function(e) {
                                e.preventDefault(), e.stopPropagation(), void 0 !== a.data("paged") && !1 !== a.data("paged") && (t = a.data("paged")), n(o, t)
                            })
                        })
                    }(e), e.hasClass("mkdf-bl-pag-load-more") && function(a) {
                        a.find(".mkdf-blog-pag-load-more a").on("click", function(e) {
                            e.preventDefault(), e.stopPropagation(), n(a)
                        })
                    }(e), e.hasClass("mkdf-bl-pag-infinite-scroll") && a(e)
                })
            },
            scroll: function() {
                e.length && e.each(function() {
                    var e = h(this);
                    e.hasClass("mkdf-bl-pag-infinite-scroll") && a(e)
                })
            }
        }
    }(mkdf.modules.blogListSC = e).mkdfOnWindowLoad = a, e.mkdfOnWindowScroll = t, h(window).load(a), h(window).scroll(t)
}(jQuery),
function(e) {
    "use strict";
    var a = {};

    function t() {
        n()
    }

    function o() {
        n()
    }

    function n() {
        if (mkdf.body.hasClass("mkdf-header-divided")) {
            var a = e(".mkdf-menu-area, .mkdf-sticky-header"),
                t = a.width(),
                o = parseInt(a.find(".mkdf-vertical-align-containers").css("paddingLeft"), 10),
                n = e(".mkdf-main-menu > ul > li > a"),
                d = 0,
                i = a.find(".mkdf-logo-wrapper .mkdf-normal-logo"),
                s = 0;
            a.waitForImages(function() {
                a.find(".mkdf-grid").length && (t = a.find(".mkdf-grid").outerWidth()), n.length && (d = parseInt(n.css("paddingLeft"), 10)), i.length && (s = i.width() / 2);
                var e = Math.round(t / 2 - d - s - o);
                a.find(".mkdf-position-left").width(e), a.find(".mkdf-position-right").width(e), a.css("opacity", 1), "function" == typeof mkdf.modules.header.mkdfSetDropDownMenuPosition && mkdf.modules.header.mkdfSetDropDownMenuPosition(), "function" == typeof mkdf.modules.header.mkdfSetDropDownWideMenuPosition && mkdf.modules.header.mkdfSetDropDownWideMenuPosition()
            })
        }
    }(mkdf.modules.headerDivided = a).mkdfOnDocumentReady = t, a.mkdfOnWindowResize = o, e(document).ready(t), e(window).resize(o)
}(jQuery),
function(m) {
    "use strict";
    var e = {};

    function a() {
        ! function() {
            var a = m("a.mkdf-fullscreen-menu-opener");
            if (a.length) {
                var t, e = m(".mkdf-fullscreen-menu-holder-outer"),
                    o = !1,
                    n = !1,
                    d = m(".mkdf-fullscreen-above-menu-widget-holder"),
                    i = m(".mkdf-fullscreen-below-menu-widget-holder"),
                    s = m(".mkdf-fullscreen-menu-holder-outer nav > ul > li > a"),
                    r = m(".mkdf-fullscreen-menu > ul li.has_sub > a"),
                    l = m(".mkdf-fullscreen-menu ul li:not(.has_sub) a");
                mkdf.modules.common.mkdfInitPerfectScrollbar().init(e), m(window).resize(function() {
                    e.height(mkdf.windowHeight)
                }), mkdf.body.hasClass("mkdf-fade-push-text-right") ? (t = "mkdf-push-nav-right", o = !0) : mkdf.body.hasClass("mkdf-fade-push-text-top") && (t = "mkdf-push-text-top", n = !0), (o || n) && (d.length && d.children().css({
                    "-webkit-animation-delay": "0ms",
                    "-moz-animation-delay": "0ms",
                    "animation-delay": "0ms"
                }), s.each(function(e) {
                    m(this).css({
                        "-webkit-animation-delay": 70 * (e + 1) + "ms",
                        "-moz-animation-delay": 70 * (e + 1) + "ms",
                        "animation-delay": 70 * (e + 1) + "ms"
                    })
                }), i.length && i.children().css({
                    "-webkit-animation-delay": 70 * (s.length + 1) + "ms",
                    "-moz-animation-delay": 70 * (s.length + 1) + "ms",
                    "animation-delay": 70 * (s.length + 1) + "ms"
                })), a.on("click", function(e) {
                    e.preventDefault(), a.hasClass("mkdf-fm-opened") ? (a.removeClass("mkdf-fm-opened"), mkdf.body.removeClass("mkdf-fullscreen-menu-opened mkdf-fullscreen-fade-in").addClass("mkdf-fullscreen-fade-out"), mkdf.body.addClass(t), mkdf.modules.common.mkdfEnableScroll(), m("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200)) : (a.addClass("mkdf-fm-opened"), mkdf.body.removeClass("mkdf-fullscreen-fade-out").addClass("mkdf-fullscreen-menu-opened mkdf-fullscreen-fade-in"), mkdf.body.removeClass(t), mkdf.modules.common.mkdfDisableScroll(), m(document).keyup(function(e) {
                        27 === e.keyCode && (a.removeClass("mkdf-fm-opened"), mkdf.body.removeClass("mkdf-fullscreen-menu-opened mkdf-fullscreen-fade-in").addClass("mkdf-fullscreen-fade-out"), mkdf.body.addClass(t), mkdf.modules.common.mkdfEnableScroll(), m("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200))
                    }))
                }), r.on("tap click", function(e) {
                    e.preventDefault();
                    var a = m(this).parent(),
                        t = a.siblings(".menu-item-has-children");
                    if (a.hasClass("has_sub")) {
                        var o = a.find("> ul.sub_menu");
                        o.is(":visible") ? (o.slideUp(450, "easeInOutQuint"), a.removeClass("open_sub")) : (a.addClass("open_sub"), 0 === t.length ? o.slideDown(400, "easeInOutQuint") : (a.closest("li.menu-item").siblings().find(".menu-item").removeClass("open_sub"), a.siblings().removeClass("open_sub").find(".sub_menu").slideUp(400, "easeInOutQuint", function() {
                            o.slideDown(400, "easeInOutQuint")
                        })))
                    }
                    return !1
                }), l.on("click", function(e) {
                    if ("http://#" === m(this).attr("href") || "#" === m(this).attr("href")) return !1;
                    1 === e.which && (a.removeClass("mkdf-fm-opened"), mkdf.body.removeClass("mkdf-fullscreen-menu-opened"), mkdf.body.removeClass("mkdf-fullscreen-fade-in").addClass("mkdf-fullscreen-fade-out"), mkdf.body.addClass(t), m("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200), mkdf.modules.common.mkdfEnableScroll())
                })
            }
        }()
    }(mkdf.modules.headerMinimal = e).mkdfOnDocumentReady = a, m(document).ready(a)
}(jQuery),
function(i) {
    "use strict";
    var e = {};

    function a() {
        t().init()
    }(mkdf.modules.headerVertical = e).mkdfOnDocumentReady = a, i(document).ready(a);
    var t = function() {
        function e() {
            a.hasClass("mkdf-with-scroll") && mkdf.modules.common.mkdfInitPerfectScrollbar().init(a)
        }
        var a = i(".mkdf-vertical-menu-area");
        return {
            init: function() {
                a.length && (function() {
                    var o, n, d, e = a.find(".mkdf-vertical-menu");
                    e.hasClass("mkdf-vertical-dropdown-below") ? (d = e.find("ul li.menu-item-has-children")).each(function() {
                        var a = i(this).find(" > .second, > ul"),
                            t = this,
                            o = i(this).find("> a"),
                            n = "fast";
                        o.on("click tap", function(e) {
                            e.preventDefault(), e.stopPropagation(), a.is(":visible") ? (i(t).removeClass("open"), a.slideUp(n)) : (o.parent().parent().children().hasClass("open") && o.parent().parent().parent().hasClass("mkdf-vertical-menu") ? (i(this).parent().parent().children().removeClass("open"), i(this).parent().parent().children().find(" > .second").slideUp(n)) : (i(this).parents("li").hasClass("open") || (d.removeClass("open"), d.find(" > .second, > ul").slideUp(n)), i(this).parent().parent().children().hasClass("open") && (i(this).parent().parent().children().removeClass("open"), i(this).parent().parent().children().find(" > .second, > ul").slideUp(n))), i(t).addClass("open"), a.slideDown("slow"))
                        })
                    }) : e.hasClass("mkdf-vertical-dropdown-side") && (o = e.find("ul li.menu-item-has-children"), n = o.find(" > .second > .inner > ul, > ul"), o.each(function() {
                        var a = i(this).find(" > .second > .inner > ul, > ul"),
                            t = this;
                        Modernizr.touch ? i(this).find("> a").on("click tap", function(e) {
                            e.preventDefault(), e.stopPropagation(), a.hasClass("mkdf-float-open") ? (a.removeClass("mkdf-float-open"), i(t).removeClass("open")) : (i(this).parents("li").hasClass("open") || (o.removeClass("open"), n.removeClass("mkdf-float-open")), a.addClass("mkdf-float-open"), i(t).addClass("open"))
                        }) : i(this).hoverIntent({
                            over: function() {
                                a.addClass("mkdf-float-open"), i(t).addClass("open")
                            },
                            out: function() {
                                a.removeClass("mkdf-float-open"), i(t).removeClass("open")
                            },
                            timeout: 300
                        })
                    }))
                }(), e())
            }
        }
    }
}(jQuery),
function(s) {
    "use strict";
    var e = {};

    function a() {
        ! function() {
            var a = s(".mkdf-mobile-header .mkdf-mobile-menu-opener"),
                i = s(".mkdf-mobile-header .mkdf-mobile-nav"),
                e = s(".mkdf-mobile-nav .mobile_arrow, .mkdf-mobile-nav h6, .mkdf-mobile-nav a.mkdf-mobile-no-link");
            a.length && i.length && a.on("tap click", function(e) {
                e.stopPropagation(), e.preventDefault(), i.is(":visible") ? (i.slideUp(450, "easeInOutQuint"), a.removeClass("mkdf-mobile-menu-opened")) : (i.slideDown(450, "easeInOutQuint"), a.addClass("mkdf-mobile-menu-opened"))
            });
            e.length && e.each(function() {
                var n = s(this),
                    d = i.outerHeight();
                n.on("tap click", function(e) {
                    var a = n.parent("li"),
                        t = a.siblings(".menu-item-has-children");
                    if (a.hasClass("has_sub")) {
                        var o = a.find("> ul.sub_menu");
                        o.is(":visible") ? (o.slideUp(450, "easeInOutQuint"), a.removeClass("mkdf-opened"), i.stop().animate({
                            height: d
                        }, 300)) : (a.addClass("mkdf-opened"), 0 === t.length ? a.find(".sub_menu").slideUp(400, "easeInOutQuint", function() {
                            o.slideDown(400, "easeInOutQuint"), i.stop().animate({
                                height: d + 50
                            }, 300)
                        }) : a.siblings().removeClass("mkdf-opened").find(".sub_menu").slideUp(400, "easeInOutQuint", function() {
                            o.slideDown(400, "easeInOutQuint"), i.stop().animate({
                                height: d + 50
                            }, 300)
                        }))
                    }
                })
            });
            s(".mkdf-mobile-nav a, .mkdf-mobile-logo-wrapper a").on("click tap", function(e) {
                "http://#" !== s(this).attr("href") && "#" !== s(this).attr("href") && (i.slideUp(450, "easeInOutQuint"), a.removeClass("mkdf-mobile-menu-opened"))
            })
        }(), o(),
            function() {
                var a = s(".mkdf-mobile-header"),
                    t = a.find(".mkdf-mobile-menu-opener"),
                    e = a.length ? a.outerHeight() : 0;
                mkdf.body.hasClass("mkdf-content-is-behind-header") && 0 < e && mkdf.windowWidth <= 1024 && s(".mkdf-content").css("marginTop", -e);
                if (mkdf.body.hasClass("mkdf-sticky-up-mobile-header")) {
                    var o, n = s("#wpadminbar"),
                        d = s(document).scrollTop();
                    o = e + mkdfGlobalVars.vars.mkdf_add_for_admin_bar, s(window).scroll(function() {
                        var e = s(document).scrollTop();
                        o < e ? a.addClass("mkdf-animate-mobile-header") : a.removeClass("mkdf-animate-mobile-header"), d < e && o < e && !t.hasClass("mkdf-mobile-menu-opened") || e < o ? (a.removeClass("mobile-header-appear"), a.css("margin-bottom", 0), n.length && a.find(".mkdf-mobile-header-inner").css("top", 0)) : (a.addClass("mobile-header-appear"), a.css("margin-bottom", o)), d = s(document).scrollTop()
                    })
                }
            }()
    }

    function t() {
        o()
    }

    function o() {
        if (mkdf.windowWidth <= 1024) {
            var e = s(".mkdf-mobile-header"),
                a = e.length ? e.height() : 0,
                t = e.find(".mkdf-mobile-nav"),
                o = t.outerHeight(),
                n = mkdf.windowHeight - 100,
                d = n < a + o ? n - a : o;
            t.length && (t.height(d), mkdf.modules.common.mkdfInitPerfectScrollbar().init(t))
        }
    }(mkdf.modules.mobileHeader = e).mkdfOnDocumentReady = a, e.mkdfOnWindowResize = t, s(document).ready(a), s(window).resize(t)
}(jQuery),
function(f) {
    "use strict";
    var e = {};

    function a() {
        1024 < mkdf.windowWidth && function() {
            var a, e, t = f(".mkdf-page-header"),
                o = f(".mkdf-sticky-header"),
                n = f(".mkdf-fixed-wrapper"),
                d = n.children(".mkdf-menu-area").outerHeight(),
                i = f(".mkdf-slider"),
                s = i.length ? i.outerHeight() : 0,
                r = n.length ? n.offset().top - mkdfGlobalVars.vars.mkdf_add_for_admin_bar : 0;
            switch (!0) {
                case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-up"):
                    mkdf.modules.stickyHeader.behaviour = "mkdf-sticky-header-on-scroll-up";
                    var l = f(document).scrollTop();
                    a = parseInt(mkdfGlobalVars.vars.mkdfTopBarHeight) + parseInt(mkdfGlobalVars.vars.mkdfLogoAreaHeight) + parseInt(mkdfGlobalVars.vars.mkdfMenuAreaHeight) + parseInt(mkdfGlobalVars.vars.mkdfStickyHeaderHeight), (e = function() {
                        var e = f(document).scrollTop();
                        l < e && a < e || e < a ? (mkdf.modules.stickyHeader.isStickyVisible = !1, o.removeClass("header-appear").find(".mkdf-main-menu .second").removeClass("mkdf-drop-down-start"), mkdf.body.removeClass("mkdf-sticky-header-appear")) : (mkdf.modules.stickyHeader.isStickyVisible = !0, o.addClass("header-appear"), mkdf.body.addClass("mkdf-sticky-header-appear")), l = f(document).scrollTop()
                    })(), f(window).scroll(function() {
                        e()
                    });
                    break;
                case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-down-up"):
                    mkdf.modules.stickyHeader.behaviour = "mkdf-sticky-header-on-scroll-down-up", 0 !== mkdfPerPageVars.vars.mkdfStickyScrollAmount ? mkdf.modules.stickyHeader.stickyAppearAmount = parseInt(mkdfPerPageVars.vars.mkdfStickyScrollAmount) : mkdf.modules.stickyHeader.stickyAppearAmount = parseInt(mkdfGlobalVars.vars.mkdfTopBarHeight) + parseInt(mkdfGlobalVars.vars.mkdfLogoAreaHeight) + parseInt(mkdfGlobalVars.vars.mkdfMenuAreaHeight) + parseInt(s), (e = function() {
                        mkdf.scroll < mkdf.modules.stickyHeader.stickyAppearAmount ? (mkdf.modules.stickyHeader.isStickyVisible = !1, o.removeClass("header-appear").find(".mkdf-main-menu .second").removeClass("mkdf-drop-down-start"), mkdf.body.removeClass("mkdf-sticky-header-appear")) : (mkdf.modules.stickyHeader.isStickyVisible = !0, o.addClass("header-appear"), mkdf.body.addClass("mkdf-sticky-header-appear"))
                    })(), f(window).scroll(function() {
                        e()
                    });
                    break;
                case mkdf.body.hasClass("mkdf-fixed-on-scroll"):
                    mkdf.modules.stickyHeader.behaviour = "mkdf-fixed-on-scroll";
                    var m = function() {
                        mkdf.scroll <= r ? (n.removeClass("fixed"), mkdf.body.removeClass("mkdf-fixed-header-appear"), t.css("margin-bottom", "0")) : (n.addClass("fixed"), mkdf.body.addClass("mkdf-fixed-header-appear"), t.css("margin-bottom", d + "px"))
                    };
                    m(), f(window).scroll(function() {
                        m()
                    })
            }
        }()
    }(mkdf.modules.stickyHeader = e).isStickyVisible = !1, e.stickyAppearAmount = 0, e.behaviour = "", e.mkdfOnDocumentReady = a, f(document).ready(a)
}(jQuery),
function(h) {
    "use strict";
    var e = {};

    function a() {
        ! function() {
            if (mkdf.body.hasClass("mkdf-slide-from-header-bottom")) {
                var u = h("a.mkdf-search-opener");
                u.length && u.each(function() {
                    h(this).on("click", function(e) {
                        e.preventDefault();
                        var a = h(this),
                            t = parseInt(mkdf.windowWidth - a.offset().left - a.outerWidth());
                        mkdf.body.hasClass("mkdf-boxed") && 1024 < mkdf.windowWidth && (t -= parseInt((mkdf.windowWidth - h(".mkdf-boxed .mkdf-wrapper .mkdf-wrapper-inner").outerWidth()) / 2));
                        var o = h(".mkdf-page-header"),
                            n = "100%",
                            d = h(".mkdf-top-bar"),
                            i = o.find(".mkdf-fixed-wrapper.fixed"),
                            s = h(".mkdf-mobile-header"),
                            r = o.children(".mkdf-slide-from-header-bottom-holder"),
                            l = !!a.parents(".mkdf-top-bar").length,
                            m = !!a.parents(".mkdf-fixed-wrapper.fixed").length,
                            f = !!a.parents(".mkdf-sticky-header").length,
                            c = !!a.parents(".mkdf-mobile-header").length;
                        if (r.removeClass("mkdf-is-active"), u.toggleClass("mkdf-search-opened"), l)(r = d.find(".mkdf-slide-from-header-bottom-holder")).addClass("mkdf-is-active");
                        else if (m) n = i.outerHeight() + mkdfGlobalVars.vars.mkdf_add_for_admin_bar, r.addClass("mkdf-is-active");
                        else if (f) {
                            h(".mkdf-sticky-header.header-appear").height();
                            n = mkdfGlobalVars.vars.mkdfStickyHeaderHeight + mkdfGlobalVars.vars.mkdf_add_for_admin_bar, r.addClass("mkdf-is-active")
                        } else c ? (s.hasClass("mobile-header-appear") && (n = s.children(".mkdf-mobile-header-inner").outerHeight() + mkdfGlobalVars.vars.mkdf_add_for_admin_bar), (r = s.find(".mkdf-slide-from-header-bottom-holder")).addClass("mkdf-is-active")) : r.addClass("mkdf-is-active");
                        r.hasClass("mkdf-is-active") && r.css({
                            right: t,
                            top: n
                        }).stop(!0).slideToggle(300), h(document).one("keyup", function(e) {
                            27 === e.keyCode && (r.stop(!0).slideUp(200), setTimeout(function() {
                                u.removeClass("mkdf-search-opened")
                            }, 200))
                        }), h(window).one("scroll", function() {
                            r.stop(!0).slideUp(200), setTimeout(function() {
                                u.removeClass("mkdf-search-opened")
                            }, 200)
                        })
                    })
                })
            }
        }()
    }(mkdf.modules.searchSlideFromHB = e).mkdfOnDocumentReady = a, h(document).ready(a)
}(jQuery),
function(s) {
    "use strict";
    var e = {};

    function a() {
        (function() {
            function a(e, a) {
                e.on("click", function() {
                    mkdf.windowWidth <= 768 && (e.hasClass("opened") ? (e.removeClass("opened"), a.slideUp()) : (e.addClass("opened"), a.slideDown()))
                })
            }
            var e = s(".mkdf-pl-holder"),
                i = {},
                o = function(t, o) {
                    var n = t.find(".mkdf-pl-outer"),
                        e = mkdf.modules.common.getLoadMoreData(t),
                        d = t.find(".mkdf-prl-loading");
                    ! function(e, a) {
                        for (var t in a) e[t] = a[t];
                        switch (e.ordering) {
                            case "menu_order":
                                e.metaKey = "", e.order = "asc", e.orderby = "menu_order title";
                                break;
                            case "popularity":
                                e.metaKey = "total_sales", e.order = "desc", e.orderby = "meta_value_num";
                                break;
                            case "rating":
                                e.metaKey = "_wc_average_rating", e.order = "desc", e.orderby = "meta_value_num";
                                break;
                            case "newness":
                                e.metaKey = "", e.order = "desc", e.orderby = "date";
                                break;
                            case "price":
                                e.metaKey = "_price", e.order = "asc", e.orderby = "meta_value_num";
                                break;
                            case "price-desc":
                                e.metaKey = "_price", e.order = "desc", e.orderby = "meta_value_num"
                        }
                    }(i, o.data()), e.category = void 0 !== i.category ? i.category : "", e.metaKey = void 0 !== i.metaKey ? i.metaKey : "", e.order = void 0 !== i.order ? i.order : "", e.orderby = void 0 !== i.orderby ? i.orderby : "", e.minPrice = void 0 !== i.minprice ? i.minprice : "", e.maxPrice = void 0 !== i.maxprice ? i.maxprice : "", d.fadeIn(100);
                    var a = mkdf.modules.common.setLoadMoreAjaxData(e, "mkdf_product_ajax_load_category");
                    s.ajax({
                        type: "POST",
                        data: a,
                        url: mkdfGlobalVars.vars.mkdf_ajax_url,
                        success: function(e) {
                            var a = s.parseJSON(e).html;
                            t.waitForImages(function() {
                                o.parent().siblings().find("a").removeClass("active"), o.addClass("active"), t.hasClass("mkdf-masonry-layout") ? function(e, a, t) {
                                    e.find(".mkdf-pli").remove(), e.append(t).isotope("reloadItems").isotope({
                                        sortBy: "original-order"
                                    }), setTimeout(function() {
                                        e.isotope("layout"), a.fadeOut(100)
                                    }, 100)
                                }(n, d, a) : function(e, a, t) {
                                    e.html(t), a.fadeOut()
                                }(n, d, a)
                            })
                        }
                    })
                };
            return {
                init: function() {
                    e.length && e.each(function() {
                        var e = s(this);
                        ! function(t) {
                            t.find(".mkdf-pl-categories a, .mkdf-pl-ordering a").on("click", function(e) {
                                e.preventDefault(), e.stopPropagation();
                                var a = s(this);
                                a.hasClass("active") || o(t, a)
                            })
                        }(e), a(e.find(".mkdf-pl-ordering-outer h6"), e.find(".mkdf-pl-ordering")), a(e.find(".mkdf-pl-categories-label"), e.find(".mkdf-pl-categories-label").next("ul"))
                    })
                }
            }
        })().init()
    }(mkdf.modules.productList = e).mkdfOnDocumentReady = a, s(document).ready(a)
}(jQuery),
function(d) {
    "use strict";

    function e() {
        d(document).on("click", ".mkdf-like", function() {
            var a = d(this),
                e = a.attr("id"),
                t = a.data("post-id"),
                o = "";
            if (a.hasClass("liked")) return !1;
            void 0 !== a.data("type") && (o = a.data("type"));
            var n = {
                action: "chapterone_core_action_like",
                likes_id: e,
                type: o,
                like_nonce: d("#mkdf_like_nonce_" + t).val()
            };
            return d.post(mkdfGlobalVars.vars.mkdf_ajax_url, n, function(e) {
                a.html(e).addClass("liked").attr("title", "You already like this!")
            }), !1
        })
    }
    d(document).ready(e)
}(jQuery),
function(d) {
    "use strict";
    var e = {};

    function a() {
        ! function() {
            function n(e, a) {
                for (var t = 0; t < e.length; t++) {
                    var o = e[t];
                    t < a ? d(o).addClass("active") : d(o).removeClass("active")
                }
            }
            var e = d(".mkdf-comment-form-rating");
            e.each(function() {
                var e = d(this),
                    a = e.find(".mkdf-rating"),
                    t = a.val(),
                    o = e.find(".mkdf-star-rating");
                n(o, t), o.on("click", function() {
                    a.val(d(this).data("value")).trigger("change")
                }), a.change(function() {
                    t = a.val(), n(o, t)
                })
            })
        }()
    }(mkdf.modules.rating = e).mkdfOnDocumentReady = a, d(document).ready(a)
}(jQuery),
function(r) {
    "use strict";
    var e = {};

    function a() {}

    function t() {
        ! function() {
            var e = r(".mkdf-events-list-holder-outer.mkdf-events-load-more");
            e.length && e.each(function() {
                var o, n, d = r(this),
                    i = d.find(".mkdf-events-list-holder"),
                    e = d.find(".mkdf-events-list-load-more a"),
                    s = d.find(".mkdf-events-list-paging");
                void 0 !== d.data("max-num-pages") && !1 !== d.data("max-num-pages") && (n = d.data("max-num-pages")), e.on("click", function(e) {
                    var a = function(e) {
                        var a = {
                            orderBy: "",
                            order: "",
                            number: "",
                            showLoadMore: "",
                            nextPage: "",
                            maxNumPages: "",
                            titleTag: "",
                            buttonShape: "",
                            textColor: "",
                            borderColor: ""
                        };
                        void 0 !== e.data("order-by") && !1 !== e.data("order-by") && (a.orderBy = e.data("order-by"));
                        void 0 !== e.data("order") && !1 !== e.data("order") && (a.order = e.data("order"));
                        void 0 !== e.data("number") && !1 !== e.data("number") && (a.number = e.data("number"));
                        void 0 !== e.data("show-load-more") && !1 !== e.data("show-load-more") && (a.showLoadMore = e.data("show-load-more"));
                        void 0 !== e.data("next-page") && !1 !== e.data("next-page") && (a.nextPage = e.data("next-page"));
                        void 0 !== e.data("max-num-pages") && !1 !== e.data("max-num-pages") && (a.maxNumPages = e.data("max-num-pages"));
                        void 0 !== e.data("title-tag") && !1 !== e.data("title-tag") && (a.titleTag = e.data("title-tag"));
                        void 0 !== e.data("button-shape") && !1 !== e.data("button-shape") && (a.buttonShape = e.data("button-shape"));
                        return a
                    }(d);
                    if (o = a.nextPage, e.preventDefault(), e.stopPropagation(), o <= n) {
                        s.find(".mkdf-events-list-load-more").stop().animate({
                            opacity: 0
                        }, 200, "easeInOutQuint", function() {
                            s.find(".mkdf-stripes").stop().animate({
                                opacity: 1
                            }, 200, "easeInOutQuint")
                        });
                        var t = function(e) {
                            return {
                                action: "chapterone_core_events_ajax_load_more",
                                orderBy: e.orderBy,
                                order: e.order,
                                number: e.number,
                                showLoadMore: e.showLoadMore,
                                nextPage: e.nextPage,
                                titleTag: e.titleTag,
                                buttonShape: e.buttonShape,
                                textColor: e.textColor,
                                borderColor: e.borderColor
                            }
                        }(a);
                        r.ajax({
                            type: "POST",
                            data: t,
                            url: mkdfGlobalVars.vars.mkdf_ajax_url,
                            success: function(e) {
                                o++, d.data("next-page", o);
                                var a = r.parseJSON(e).html;
                                d.waitForImages(function() {
                                    i.append(a), s.find(".mkdf-stripes").stop().animate({
                                        opacity: 0
                                    }, 200, "easeInOutQuint", function() {
                                        s.find(".mkdf-events-list-load-more").stop().animate({
                                            opacity: 1
                                        }, 200, "easeInOutQuint"), n < o && (s.find(".mkdf-stripes").remove(), s.fadeOut(200, "easeInOutQuint").remove())
                                    })
                                })
                            }
                        })
                    } else s.hide()
                })
            })
        }()
    }

    function o() {}

    function n() {}(mkdf.modules.eventsList = e).mkdfOnDocumentReady = a, e.mkdfOnWindowLoad = t, e.mkdfOnWindowResize = o, e.mkdfOnWindowScroll = n, r(document).ready(a), r(window).load(t), r(window).load(function() {
        var e = r(".mkdf-event-image-holder img"),
            a = r(".mkdf-event-map-holder .mkdf-google-map-holder"),
            t = e.outerHeight();
        a.css("height", t)
    }), r(window).resize(o), r(window).scroll(n)
}(jQuery),
function(n) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var e = n(".mkdf-accordion-holder");
        e.length && e.each(function() {
            var e = n(this);
            if (e.hasClass("mkdf-accordion") && e.accordion({
                    animate: "swing",
                    collapsible: !0,
                    active: 0,
                    icons: "",
                    heightStyle: "content"
                }), e.hasClass("mkdf-toggle")) {
                var a = n(this),
                    t = a.find(".mkdf-accordion-title"),
                    o = t.next();
                a.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"), t.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"), o.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), t.each(function() {
                    var e = n(this);
                    e.on("hover", function() {
                        e.toggleClass("ui-state-hover")
                    }), e.on("click", function() {
                        e.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), e.next().toggleClass("ui-accordion-content-active").slideToggle(400)
                    })
                })
            }
        })
    }(mkdf.modules.accordions = e).mkdfInitAccordions = t, e.mkdfOnDocumentReady = a, n(document).ready(a)
}(jQuery),
function(n) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var t, o, e = n(".mkdf-grow-in, .mkdf-fade-in-down, .mkdf-element-from-fade, .mkdf-element-from-left, .mkdf-element-from-right, .mkdf-element-from-top, .mkdf-element-from-bottom, .mkdf-flip-in, .mkdf-x-rotate, .mkdf-z-rotate, .mkdf-y-translate, .mkdf-fade-in, .mkdf-fade-in-left-x-rotate");
        e.length && e.each(function() {
            var a = n(this);
            a.appear(function() {
                if (t = a.data("animation"), o = parseInt(a.data("animation-delay")), void 0 !== t && "" !== t) {
                    var e = t + "-on";
                    setTimeout(function() {
                        a.addClass(e)
                    }, o)
                }
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdf_element_eppear_amount
            })
        })
    }(mkdf.modules.animationHolder = e).mkdfInitAnimationHolder = t, e.mkdfOnDocumentReady = a, n(document).ready(a)
}(jQuery),
function(a) {
    "use strict";
    var e = {};

    function t() {
        o().init()
    }(mkdf.modules.button = e).mkdfButton = o, e.mkdfOnDocumentReady = t, a(document).ready(t);
    var o = function() {
        var e = a(".mkdf-btn");
        return {
            init: function() {
                e.length && e.each(function() {
                    ! function(e) {
                        if (void 0 !== e.data("hover-color")) {
                            var a = function(e) {
                                    e.data.button.css("color", e.data.color)
                                },
                                t = e.css("color"),
                                o = e.data("hover-color");
                            e.on("mouseenter", {
                                button: e,
                                color: o
                            }, a), e.on("mouseleave", {
                                button: e,
                                color: t
                            }, a)
                        }
                    }(a(this)),
                    function(e) {
                        if (void 0 !== e.data("hover-bg-color")) {
                            var a = function(e) {
                                    e.data.button.css("background-color", e.data.color)
                                },
                                t = e.css("background-color"),
                                o = e.data("hover-bg-color");
                            e.on("mouseenter", {
                                button: e,
                                color: o
                            }, a), e.on("mouseleave", {
                                button: e,
                                color: t
                            }, a)
                        }
                    }(a(this)),
                    function(e) {
                        if (void 0 !== e.data("hover-border-color")) {
                            var a = function(e) {
                                    e.data.button.css("border-color", e.data.color)
                                },
                                t = e.css("borderTopColor"),
                                o = e.data("hover-border-color");
                            e.on("mouseenter", {
                                button: e,
                                color: o
                            }, a), e.on("mouseleave", {
                                button: e,
                                color: t
                            }, a)
                        }
                    }(a(this))
                })
            }
        }
    }
}(jQuery),
function(k) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var n, d, i, s, r, l, m, f, c, u, h, e = k(".mkdf-countdown"),
            p = (new Date).getMonth();
        e.length && e.each(function() {
            var e, a, t = k(this).attr("id"),
                o = k("#" + t);
            n = o.data("year"), d = o.data("month"), i = o.data("day"), s = o.data("hour"), r = o.data("minute"), l = o.data("timezone"), m = o.data("month-label"), f = o.data("day-label"), c = o.data("hour-label"), u = o.data("minute-label"), h = o.data("second-label"), e = o.data("digit-size"), a = o.data("label-size"), p !== d && (d -= 1), o.countdown({
                until: new Date(n, d, i, s, r, 44),
                labels: ["", m, "", f, c, u, h],
                format: "ODHMS",
                timezone: l,
                padZeroes: !0,
                onTick: function() {
                    o.find(".countdown-amount").css({
                        "font-size": e + "px",
                        "line-height": e + "px"
                    }), o.find(".countdown-period").css({
                        "font-size": a + "px"
                    })
                }
            })
        })
    }(mkdf.modules.countdown = e).mkdfInitCountdown = t, e.mkdfOnDocumentReady = a, k(document).ready(a)
}(jQuery),
function(o) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var e = o(".mkdf-counter-holder");
        e.length && e.each(function() {
            var a = o(this),
                t = a.find(".mkdf-counter");
            a.appear(function() {
                if (a.css("opacity", "1"), t.hasClass("mkdf-zero-counter")) {
                    var e = parseFloat(t.text());
                    t.countTo({
                        from: 0,
                        to: e,
                        speed: 1500,
                        refreshInterval: 100
                    })
                } else t.absoluteCounter({
                    speed: 2e3,
                    fadeInDelay: 1e3
                })
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdf_element_eppear_amount
            })
        })
    }(mkdf.modules.counter = e).mkdfInitCounter = t, e.mkdfOnDocumentReady = a, o(document).ready(a)
}(jQuery),
function(r) {
    "use strict";
    var e = {};

    function a() {
        o()
    }

    function t() {
        n()
    }

    function o() {
        var e = r(".mkdf-custom-font-holder");
        e.length && e.each(function() {
            var e = r(this),
                a = "",
                t = "",
                o = "",
                n = "",
                d = "",
                i = "",
                s = "";
            void 0 !== e.data("item-class") && !1 !== e.data("item-class") && (a = e.data("item-class")), void 0 !== e.data("font-size-1366") && !1 !== e.data("font-size-1366") && (t += "font-size: " + e.data("font-size-1366") + " !important;"), void 0 !== e.data("font-size-1024") && !1 !== e.data("font-size-1024") && (o += "font-size: " + e.data("font-size-1024") + " !important;"), void 0 !== e.data("font-size-768") && !1 !== e.data("font-size-768") && (n += "font-size: " + e.data("font-size-768") + " !important;"), void 0 !== e.data("font-size-680") && !1 !== e.data("font-size-680") && (d += "font-size: " + e.data("font-size-680") + " !important;"), void 0 !== e.data("line-height-1366") && !1 !== e.data("line-height-1366") && (t += "line-height: " + e.data("line-height-1366") + " !important;"), void 0 !== e.data("line-height-1024") && !1 !== e.data("line-height-1024") && (o += "line-height: " + e.data("line-height-1024") + " !important;"), void 0 !== e.data("line-height-768") && !1 !== e.data("line-height-768") && (n += "line-height: " + e.data("line-height-768") + " !important;"), void 0 !== e.data("line-height-680") && !1 !== e.data("line-height-680") && (d += "line-height: " + e.data("line-height-680") + " !important;"), (t.length || o.length || n.length || d.length) && (t.length && (s += "@media only screen and (max-width: 1366px) {.mkdf-custom-font-holder." + a + " { " + t + " } }"), o.length && (s += "@media only screen and (max-width: 1024px) {.mkdf-custom-font-holder." + a + " { " + o + " } }"), n.length && (s += "@media only screen and (max-width: 768px) {.mkdf-custom-font-holder." + a + " { " + n + " } }"), d.length && (s += "@media only screen and (max-width: 680px) {.mkdf-custom-font-holder." + a + " { " + d + " } }")), s.length && (i = '<style type="text/css">' + s + "</style>"), i.length && r("head").append(i)
        })
    }

    function n() {
        var e = r(".mkdf-cf-typed");
        e.length && e.each(function() {
            var e = r(this),
                a = e.parent(".mkdf-cf-typed-wrap").parent(".mkdf-custom-font-holder"),
                t = [],
                o = e.find(".mkdf-cf-typed-1").text(),
                n = e.find(".mkdf-cf-typed-2").text(),
                d = e.find(".mkdf-cf-typed-3").text(),
                i = e.find(".mkdf-cf-typed-4").text();
            o.length && t.push(o), n.length && t.push(n), d.length && t.push(d), i.length && t.push(i), a.appear(function() {
                e.typed({
                    strings: t,
                    typeSpeed: 90,
                    backDelay: 700,
                    loop: !0,
                    contentType: "text",
                    loopCount: !1,
                    cursorChar: "_"
                })
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdf_element_eppear_amount
            })
        })
    }(mkdf.modules.customFont = e).mkdfCustomFontResize = o, e.mkdfCustomFontTypeOut = n, e.mkdfOnDocumentReady = a, e.mkdfOnWindowLoad = t, r(document).ready(a), r(window).load(t)
}(jQuery),
function(l) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var e = l(".mkdf-elements-holder");
        e.length && e.each(function() {
            var e = l(this).children(".mkdf-eh-item"),
                a = "",
                r = "";
            e.each(function() {
                var e = l(this),
                    a = "",
                    t = "",
                    o = "",
                    n = "",
                    d = "",
                    i = "";
                if (void 0 !== e.data("item-class") && !1 !== e.data("item-class") && (a = e.data("item-class")), void 0 !== e.data("1400-1600") && !1 !== e.data("1400-1600") && (t = e.data("1400-1600")), void 0 !== e.data("1025-1399") && !1 !== e.data("1025-1399") && (o = e.data("1025-1399")), void 0 !== e.data("769-1024") && !1 !== e.data("769-1024") && (n = e.data("769-1024")), void 0 !== e.data("681-768") && !1 !== e.data("681-768") && (d = e.data("681-768")), void 0 !== e.data("680") && !1 !== e.data("680") && (i = e.data("680")), (t.length || o.length || n.length || d.length || i.length || "".length) && (t.length && (r += "@media only screen and (min-width: 1400px) and (max-width: 1600px) {.mkdf-eh-item-content." + a + " { padding: " + t + " !important; } }"), o.length && (r += "@media only screen and (min-width: 1025px) and (max-width: 1399px) {.mkdf-eh-item-content." + a + " { padding: " + o + " !important; } }"), n.length && (r += "@media only screen and (min-width: 769px) and (max-width: 1024px) {.mkdf-eh-item-content." + a + " { padding: " + n + " !important; } }"), d.length && (r += "@media only screen and (min-width: 681px) and (max-width: 768px) {.mkdf-eh-item-content." + a + " { padding: " + d + " !important; } }"), i.length && (r += "@media only screen and (max-width: 680px) {.mkdf-eh-item-content." + a + " { padding: " + i + " !important; } }")), "function" == typeof mkdf.modules.common.mkdfOwlSlider) {
                    var s = e.find(".mkdf-owl-slider");
                    s.length && setTimeout(function() {
                        s.trigger("refresh.owl.carousel")
                    }, 100)
                }
            }), r.length && (a = '<style type="text/css">' + r + "</style>"), a.length && l("head").append(a)
        })
    }(mkdf.modules.elementsHolder = e).mkdfInitElementsHolderResponsiveStyle = t, e.mkdfOnDocumentReady = a, l(document).ready(a)
}(jQuery),
function(p) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var e = p(".mkdf-google-map");
        e.length && e.each(function() {
            var e, a, t, o, n, d, i, s, r, l, m = p(this),
                f = !1,
                c = "";
            if (void 0 !== m.data("snazzy-map-style") && "yes" === m.data("snazzy-map-style")) {
                f = !0;
                var u = m.parent().find(".mkdf-snazzy-map"),
                    h = u.val();
                u.length && h.length && (c = JSON.parse(h.replace(/`{`/g, "[").replace(/`}`/g, "]").replace(/``/g, '"').replace(/`/g, "")))
            }
            void 0 !== m.data("custom-map-style") && (e = m.data("custom-map-style")), void 0 !== m.data("color-overlay") && !1 !== m.data("color-overlay") && (a = m.data("color-overlay")), void 0 !== m.data("saturation") && !1 !== m.data("saturation") && (t = m.data("saturation")), void 0 !== m.data("lightness") && !1 !== m.data("lightness") && (o = m.data("lightness")), void 0 !== m.data("zoom") && !1 !== m.data("zoom") && (n = m.data("zoom")), void 0 !== m.data("pin") && !1 !== m.data("pin") && (d = m.data("pin")), void 0 !== m.data("height") && !1 !== m.data("height") && (i = m.data("height")), void 0 !== m.data("unique-id") && !1 !== m.data("unique-id") && (s = m.data("unique-id")), void 0 !== m.data("scroll-wheel") && (r = m.data("scroll-wheel")), void 0 !== m.data("addresses") && !1 !== m.data("addresses") && (l = m.data("addresses")),
                function(e, a, t, o, n, d, i, s, r, l, m, f, c, u) {
                    if ("object" != typeof google) return;
                    var h, p = [];
                    p = e && a.length ? a : [{
                        stylers: [{
                            hue: o
                        }, {
                            saturation: n
                        }, {
                            lightness: d
                        }, {
                            gamma: 1
                        }]
                    }];
                    h = e || "yes" === t ? "mkdf-style" : google.maps.MapTypeId.ROADMAP;
                    i = "yes" === i;
                    var k = new google.maps.StyledMapType(p, {
                        name: "Google Map"
                    });
                    c = new google.maps.Geocoder;
                    var g = new google.maps.LatLng(-34.397, 150.644);
                    isNaN(l) || (l += "px");
                    var v, y = {
                        zoom: s,
                        scrollwheel: i,
                        center: g,
                        zoomControl: !0,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.SMALL,
                            position: google.maps.ControlPosition.RIGHT_CENTER
                        },
                        scaleControl: !1,
                        scaleControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        streetViewControl: !1,
                        streetViewControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        panControl: !1,
                        panControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeControl: !1,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mkdf-style"],
                            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeId: h
                    };
                    for ((f = new google.maps.Map(document.getElementById(r), y)).mapTypes.set("mkdf-style", k), v = 0; v < u.length; ++v) b(u[v], m, f, c);
                    document.getElementById(r).style.height = l
                }(f, c, e, a, t, o, r, n, "mkdf-map-" + s, i, d, "map_" + s, "geocoder_" + s, l)
        })
    }

    function b(o, n, d, e) {
        if ("" !== o) {
            var a = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + o + "</p></div></div>",
                i = new google.maps.InfoWindow({
                    content: a
                });
            e.geocode({
                address: o
            }, function(e, a) {
                if (a === google.maps.GeocoderStatus.OK) {
                    d.setCenter(e[0].geometry.location);
                    var t = new google.maps.Marker({
                        map: d,
                        position: e[0].geometry.location,
                        icon: n,
                        title: o.store_title
                    });
                    google.maps.event.addListener(t, "click", function() {
                        i.open(d, t)
                    }), google.maps.event.addDomListener(window, "resize", function() {
                        d.setCenter(e[0].geometry.location)
                    })
                }
            })
        }
    }(mkdf.modules.googleMap = e).mkdfShowGoogleMap = t, e.mkdfOnDocumentReady = a, p(document).ready(a)
}(jQuery),
function(a) {
    "use strict";
    var e = {};

    function t() {
        o().init()
    }(mkdf.modules.icon = e).mkdfIcon = o, e.mkdfOnDocumentReady = t, a(document).ready(t);
    var o = function() {
        var e = a(".mkdf-icon-shortcode");
        return {
            init: function() {
                e.length && e.each(function() {
                    ! function(e) {
                        e.hasClass("mkdf-icon-animation") && e.appear(function() {
                            e.parent(".mkdf-icon-animation-holder").addClass("mkdf-icon-animation-show")
                        }, {
                            accX: 0,
                            accY: mkdfGlobalVars.vars.mkdf_element_eppear_amount
                        })
                    }(a(this)),
                    function(e) {
                        if (void 0 !== e.data("hover-color")) {
                            var a = function(e) {
                                    e.data.icon.css("color", e.data.color)
                                },
                                t = e.find(".mkdf-icon-element"),
                                o = e.data("hover-color"),
                                n = t.css("color");
                            "" !== o && (e.on("mouseenter", {
                                icon: t,
                                color: o
                            }, a), e.on("mouseleave", {
                                icon: t,
                                color: n
                            }, a))
                        }
                    }(a(this)),
                    function(e) {
                        if (void 0 !== e.data("hover-background-color")) {
                            var a = function(e) {
                                    e.data.icon.css("background-color", e.data.color)
                                },
                                t = e.data("hover-background-color"),
                                o = e.css("background-color");
                            "" !== t && (e.on("mouseenter", {
                                icon: e,
                                color: t
                            }, a), e.on("mouseleave", {
                                icon: e,
                                color: o
                            }, a))
                        }
                    }(a(this)),
                    function(e) {
                        if (void 0 !== e.data("hover-border-color")) {
                            var a = function(e) {
                                    e.data.icon.css("border-color", e.data.color)
                                },
                                t = e.data("hover-border-color"),
                                o = e.css("borderTopColor");
                            "" !== t && (e.on("mouseenter", {
                                icon: e,
                                color: t
                            }, a), e.on("mouseleave", {
                                icon: e,
                                color: o
                            }, a))
                        }
                    }(a(this))
                })
            }
        }
    }
}(jQuery),
function(a) {
    "use strict";
    var e = {};

    function t() {
        o().init()
    }(mkdf.modules.iconListItem = e).mkdfInitIconList = o, e.mkdfOnDocumentReady = t, a(document).ready(t);
    var o = function() {
        var e = a(".mkdf-animate-list");
        return {
            init: function() {
                e.length && e.each(function() {
                    ! function(e) {
                        setTimeout(function() {
                            e.appear(function() {
                                e.addClass("mkdf-appeared")
                            }, {
                                accX: 0,
                                accY: mkdfGlobalVars.vars.mkdf_element_eppear_amount
                            })
                        }, 30)
                    }(a(this))
                })
            }
        }
    }
}(jQuery),
function(l) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var e = l(".mkdf-image-marquee");
        e.length && e.each(function() {
            var i = l(this),
                e = i.find(".mkdf-image"),
                s = e.filter(".mkdf-original"),
                r = e.filter(".mkdf-aux");
            i.waitForImages(function() {
                ! function() {
                    var d = s.width();
                    r.css("width", d), r.css("left", d), e.each(function(e) {
                        var a, t = l(this),
                            o = 0,
                            n = function() {
                                o -= 1, t.position().left <= -d && (t.css("left", parseInt(d - 1)), o = 0), t.css("transform", "translate3d(" + .8 * o + "px,0,0)"), a = requestAnimationFrame(n)
                            };
                        a = requestAnimationFrame(n), window.addEventListener("orientationchange", function() {
                            d = s.width(), o = 0, s.css("left", 0), r.css("width", d), r.css("left", d)
                        }), mkdf.body.on("touchstart", function(e) {
                            l.contains(i.get(0), e.target) || a && (cancelAnimationFrame(a), a = null, setTimeout(function() {
                                a = requestAnimationFrame(n)
                            }, 300))
                        })
                    })
                }()
            })
        })
    }(mkdf.modules.imageMarquee = e).mkdfInitImageMarquee = t, e.mkdfOnDocumentReady = a, l(document).ready(a)
}(jQuery),
function(r) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var e = r(".mkdf-outline-text-holder");
        e.length && e.each(function() {
            var e = r(this),
                a = "",
                t = "",
                o = "",
                n = "",
                d = "",
                i = "",
                s = "";
            void 0 !== e.data("item-class") && !1 !== e.data("item-class") && (a = e.data("item-class")), void 0 !== e.data("font-size-1366") && !1 !== e.data("font-size-1366") && (t += "font-size: " + e.data("font-size-1366") + " !important;"), void 0 !== e.data("font-size-1024") && !1 !== e.data("font-size-1024") && (o += "font-size: " + e.data("font-size-1024") + " !important;"), void 0 !== e.data("font-size-768") && !1 !== e.data("font-size-768") && (n += "font-size: " + e.data("font-size-768") + " !important;"), void 0 !== e.data("font-size-680") && !1 !== e.data("font-size-680") && (d += "font-size: " + e.data("font-size-680") + " !important;"), void 0 !== e.data("line-height-1366") && !1 !== e.data("line-height-1366") && (t += "line-height: " + e.data("line-height-1366") + " !important;"), void 0 !== e.data("line-height-1024") && !1 !== e.data("line-height-1024") && (o += "line-height: " + e.data("line-height-1024") + " !important;"), void 0 !== e.data("line-height-768") && !1 !== e.data("line-height-768") && (n += "line-height: " + e.data("line-height-768") + " !important;"), void 0 !== e.data("line-height-680") && !1 !== e.data("line-height-680") && (d += "line-height: " + e.data("line-height-680") + " !important;"), (t.length || o.length || n.length || d.length) && (t.length && (s += "@media only screen and (max-width: 1366px) {.mkdf-outline-text-holder." + a + " { " + t + " } }"), o.length && (s += "@media only screen and (max-width: 1024px) {.mkdf-outline-text-holder." + a + " { " + o + " } }"), n.length && (s += "@media only screen and (max-width: 768px) {.mkdf-outline-text-holder." + a + " { " + n + " } }"), d.length && (s += "@media only screen and (max-width: 680px) {.mkdf-outline-text-holder." + a + " { " + d + " } }")), s.length && (i = '<style type="text/css">' + s + "</style>"), i.length && r("head").append(i)
        })
    }(mkdf.modules.outlineText = e).mkdfOutlineTextResize = t, e.mkdfOnDocumentReady = a, r(document).ready(a)
}(jQuery),
function(o) {
    "use strict";
    var e = {};

    function a() {
        t(), n(), d()
    }

    function t() {
        var e = o(".mkdf-process-holder"),
            a = 0;
        o(".mkdf-process-mark").each(function() {
            o(this).find(".mkdf-process-circle").css("background-color", e.find(".mkdf-pi-content").eq(a).attr("data-circle-color")), a++
        }), e.length && e.each(function() {
            var e = o(this);
            e.appear(function() {
                e.addClass("mkdf-process-appeared")
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdf_element_eppear_amount
            })
        })
    }

    function n() {
        var e = o(".mkdf-process-wave-line");
        e.length && (e.find(".mkdf-process-wave").each(function(e) {
            var a = o(this),
                t = Math.round(this.getTotalLength());
            a.css({
                "stroke-dasharray": t,
                "stroke-dashoffset": t,
                "transition-delay": 900 * e + "ms"
            })
        }), e.appear(function() {
            var e = o(this);
            e.addClass("mkdf-appeared"), e.find(".mkdf-process-wave").css({
                "stroke-dashoffset": 0
            })
        }, {
            accX: 0,
            accY: mkdfGlobalVars.vars.mkdf_element_eppear_amount
        }))
    }

    function d() {
        var e = o(".mkdf-process-holder");
        e.length && e.each(function() {
            var e = o(this),
                a = e.find(".mkdf-process-item");
            e.appear(function() {
                e.addClass("mkdf-appeared"), setTimeout(function() {
                    a.each(function(e) {
                        var a = o(this);
                        setTimeout(function() {
                            a.addClass("mkdf-appeared")
                        }, 320 * e)
                    })
                }, 320)
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdf_element_eppear_amount
            })
        })
    }(mkdf.modules.process = e).mkdfInitProcess = t, e.mkdfInitLine = n, e.mkdfAnimateProcessItem = d, e.mkdfOnDocumentReady = a, o(document).ready(a)
}(jQuery),
function(n) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var e = n(".mkdf-progress-bar");
        e.length && e.each(function() {
            var e = n(this),
                a = e.find(".mkdf-pb-content"),
                t = e.find(".mkdf-pb-percent"),
                o = a.data("percentage");
            e.appear(function() {
                ! function(e, a) {
                    var t = parseFloat(a);
                    e.length && e.each(function() {
                        var e = n(this);
                        e.css("opacity", "1"), e.countTo({
                            from: 0,
                            to: t,
                            speed: 2e3,
                            refreshInterval: 50
                        })
                    })
                }(t, o), a.css("width", "0%").animate({
                    width: o + "%"
                }, 2e3), e.hasClass("mkdf-pb-percent-floating") && t.css("left", "0%").animate({
                    left: o + "%"
                }, 2e3)
            })
        })
    }(mkdf.modules.progressBar = e).mkdfInitProgressBars = t, e.mkdfOnDocumentReady = a, n(document).ready(a)
}(jQuery),
function(d) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var e = d(".mkdf-tabs");
        e.length && e.each(function() {
            var e = d(this);
            e.children(".mkdf-tab-container").each(function(e) {
                e += 1;
                var a = d(this),
                    t = a.attr("id"),
                    o = a.parent().find(".mkdf-tabs-nav li:nth-child(" + e + ") a"),
                    n = o.attr("href"); - 1 < (t = "#" + t).indexOf(n) && o.attr("href", t)
            }), e.tabs(), d(".mkdf-tabs a.mkdf-external-link").unbind("click")
        })
    }(mkdf.modules.tabs = e).mkdfInitTabs = t, e.mkdfOnDocumentReady = a, d(document).ready(a)
}(jQuery),
function(d) {
    "use strict";
    var e = {};

    function a() {
        t().init(),
            function() {
                var e = d(".mkdf-text-marquee");
                e.length && e.each(function() {
                    var e, a, t = d(this),
                        o = 1,
                        n = 1;
                    mkdf.windowWidth < 1480 && (o = .8), mkdf.windowWidth < 1200 && (o = .7), mkdf.windowWidth < 768 && (o = .55, n = .65), mkdf.windowWidth < 600 && (o = .45, n = .55), mkdf.windowWidth < 480 && (o = .4, n = .5), 200 < (e = parseInt(t.css("font-size"))) ? e = Math.round(e * o) : 60 < e && (e = Math.round(e * n)), t.css("font-size", e + "px"), 70 < (a = parseInt(t.css("line-height"))) && mkdf.windowWidth < 1440 ? a = "1.2em" : 35 < a && mkdf.windowWidth < 768 ? a = "1.2em" : a += "px", t.css("line-height", a)
                })
            }()
    }

    function t() {
        function e(e) {
            this.holder = e, this.els = this.holder.find(".mkdf-marquee-element"), this.delta = .05
        }
        var a = d(".mkdf-text-marquee"),
            o = function(t) {
                if (! function(e) {
                        return mkdf.scroll + mkdf.windowHeight >= e.offset().top && mkdf.scroll < e.offset().top + e.height()
                    }(t.holder)) return requestAnimationFrame(function() {
                    o(t)
                }), !1;
                t.els.each(function(e) {
                    var a = d(this);
                    a.css("transform", "translate3d(" + a.data("x") + "%, 0, 0)"), a.data("x", (a.data("x") - t.delta).toFixed(2)), a.offset().left < -a.width() - 25 && a.data("x", 100 * Math.abs(e - 1))
                }), requestAnimationFrame(function() {
                    o(t)
                })
            };
        return {
            init: function() {
                a.length && a.each(function() {
                    ! function(e) {
                        e.els.each(function(e) {
                            d(this).data("x", 0)
                        }), requestAnimationFrame(function() {
                            o(e)
                        })
                    }(new e(d(this)))
                })
            }
        }
    }(mkdf.modules.textMarquee = e).mkdfTextMarquee = t, e.mkdfOnDocumentReady = a, d(document).ready(a)
}(jQuery),
function(m) {
    "use strict";
    var e = {};

    function a() {
        t()
    }

    function t() {
        var e = m(".mkdf-testimonials-holder.mkdf-testimonials-carousel");
        e.length && e.each(function() {
            var e = m(this),
                a = e.find(".mkdf-testimonials-main"),
                n = e.children(".mkdf-testimonial-image-nav"),
                t = !0,
                o = !0,
                d = 5e3,
                i = 600,
                s = !1;
            if ("no" === a.data("enable-loop") && (t = !1), "no" === a.data("enable-autoplay") && (o = !1), void 0 !== a.data("slider-speed") && !1 !== a.data("slider-speed") && (d = a.data("slider-speed")), void 0 !== a.data("slider-speed-animation") && !1 !== a.data("slider-speed-animation") && (i = a.data("slider-speed-animation")), mkdf.windowWidth < 680 && (s = !0), a.length && n.length) {
                var r = a.owlCarousel({
                        items: 1,
                        loop: t,
                        autoplay: o,
                        autoplayTimeout: d,
                        smartSpeed: i,
                        autoplayHoverPause: !1,
                        dots: !1,
                        nav: !1,
                        mouseDrag: !1,
                        touchDrag: s,
                        onInitialize: function() {
                            a.css("visibility", "visible")
                        }
                    }),
                    l = n.owlCarousel({
                        loop: t,
                        autoplay: o,
                        autoplayTimeout: d,
                        smartSpeed: i,
                        autoplayHoverPause: !1,
                        center: !0,
                        dots: !1,
                        nav: !1,
                        mouseDrag: !1,
                        touchDrag: !1,
                        responsive: {
                            1025: {
                                items: 5
                            },
                            0: {
                                items: 3
                            }
                        },
                        onInitialize: function() {
                            n.css("visibility", "visible"), e.css("opacity", "1")
                        }
                    });
                n.find(".owl-item").on("click touchpress", function(e) {
                    e.preventDefault();
                    var a = m(this).index(),
                        t = n.find(".owl-item.cloned").length,
                        o = 0 <= a - t / 2 ? a - t / 2 : a;
                    l.trigger("to.owl.carousel", o), r.trigger("to.owl.carousel", o)
                })
            }
        })
    }(mkdf.modules.testimonialsCarousel = e).mkdfInitTestimonials = t, e.mkdfOnWindowLoad = a, m(window).load(a)
}(jQuery),
function(u) {
    "use strict";
    var e = {};

    function a() {
        ! function() {
            var e = u(".mkdf-testimonials-image-pagination-inner");
            e.length && e.each(function() {
                var a = u(this),
                    e = a.children().length,
                    t = !0,
                    o = !0,
                    n = 3500,
                    d = 500,
                    i = !1,
                    s = !1,
                    r = !1,
                    l = !0,
                    m = !1,
                    f = a;
                if ("no" === f.data("enable-loop") && (t = !1), void 0 !== f.data("slider-speed") && !1 !== f.data("slider-speed") && (n = f.data("slider-speed")), void 0 !== f.data("slider-speed-animation") && !1 !== f.data("slider-speed-animation") && (d = f.data("slider-speed-animation")), "yes" === f.data("enable-auto-width") && (i = !0), void 0 !== f.data("slider-animate-in") && !1 !== f.data("slider-animate-in") && (s = f.data("slider-animate-in")), void 0 !== f.data("slider-animate-out") && !1 !== f.data("slider-animate-out") && (r = f.data("slider-animate-out")), "no" === f.data("enable-navigation") && (l = !1), "yes" === f.data("enable-pagination") && (m = !0), l && m && a.addClass("mkdf-slider-has-both-nav"), m) {
                    var c = "#mkdf-testimonial-pagination";
                    u(".mkdf-tsp-item").on("click", function() {
                        a.trigger("to.owl.carousel", [u(this).index(), 300])
                    })
                }
                e <= 1 && (m = l = o = t = !1), a.waitForImages(function() {
                    u(this).owlCarousel({
                        items: 1,
                        loop: t,
                        autoplay: o,
                        autoplayHoverPause: !1,
                        autoplayTimeout: n,
                        smartSpeed: d,
                        margin: 0,
                        stagePadding: 0,
                        center: !1,
                        autoWidth: i,
                        animateIn: s,
                        animateOut: r,
                        dots: m,
                        dotsContainer: c,
                        nav: l,
                        drag: !0,
                        callbacks: !0,
                        navText: ['<span class="mkdf-prev-icon ion-chevron-left"></span>', '<span class="mkdf-next-icon ion-chevron-right"></span>'],
                        onInitialize: function() {
                            a.css("visibility", "visible")
                        },
                        onDrag: function(e) {
                            mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") && 0 < e.isTrigger && a.addClass("mkdf-slider-is-moving")
                        },
                        onDragged: function() {
                            mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") && a.hasClass("mkdf-slider-is-moving") && setTimeout(function() {
                                a.removeClass("mkdf-slider-is-moving")
                            }, 500)
                        }
                    })
                })
            })
        }()
    }(mkdf.modules.testimonialsImagePagination = e).mkdfOnDocumentReady = a, u(document).ready(a)
}(jQuery);; /*! This file is auto-generated */
! function(c, d) {
    "use strict";
    var e = !1,
        n = !1;
    if (d.querySelector)
        if (c.addEventListener) e = !0;
    if (c.wp = c.wp || {}, !c.wp.receiveEmbedMessage)
        if (c.wp.receiveEmbedMessage = function(e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
                            for (o = 0; o < s.length; o++)
                                if (r = s[o], e.source === r.contentWindow) {
                                    if (r.removeAttribute("style"), "height" === t.message) {
                                        if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                        else if (~~i < 200) i = 200;
                                        r.height = i
                                    }
                                    if ("link" === t.message)
                                        if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host)
                                            if (d.activeElement === r) c.top.location.href = t.value
                                }
                        }
            }, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);

    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
                if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
                if (r || a)(t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e)
            }
        }
    }
}(window, document);;
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function($) {
        "function" != typeof window.vc_js && (window.vc_js = function() {
            "use strict";
            vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = !0;
                0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
                    animation: sliderFx,
                    slideshow: slideshow,
                    slideshowSpeed: sliderTimeout,
                    sliderSpeed: 800,
                    smoothHeight: !0
                })
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
            0 < jQuery(".wpb_googleplus").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
            0 < jQuery(".wpb_pinterest").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.find(".vc_single_bar").each(function(index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function() {
                            bar.css({
                                width: val + "%"
                            })
                        }, 200 * index)
                    })
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.addClass("wpb_start_animation animated")
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
            function event(e) {
                e && e.preventDefault && e.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({
                    duration: 300,
                    complete: function() {
                        element.removeClass("vc_toggle_active")
                    }
                }) : content.slideDown({
                    duration: 300,
                    complete: function() {
                        element.addClass("vc_toggle_active")
                    }
                })
            }
            $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").off("click").on("click", event) : jQuery(".vc_toggle_title").off("click").on("click", event)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
            if (jQuery.ui) {
                var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                    ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                    old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9;
                $call.each(function(index) {
                    var $tabs, interval = jQuery(this).attr("data-interval"),
                        tabs_array = [];
                    if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                            show: function(event, ui) {
                                wpb_prepare_tab_content(event, ui)
                            },
                            activate: function(event, ui) {
                                wpb_prepare_tab_content(event, ui)
                            }
                        }), interval && 0 < interval) try {
                        $tabs.tabs("rotate", 1e3 * interval)
                    } catch (err) {
                        window.console && window.console.warn && console.warn("tabs behaviours error", err)
                    }
                    jQuery(this).find(".wpb_tab").each(function() {
                        tabs_array.push(this.id)
                    }), jQuery(this).find(".wpb_tabs_nav li").on("click", function(e) {
                        return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                    }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function(e) {
                        var index, length;
                        e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                    })
                })
            }
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
            jQuery(".wpb_accordion").each(function(index) {
                var $tabs, active_tab, collapsible, $this = jQuery(this);
                $this.attr("data-interval"), collapsible = !1 === (active_tab = !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1) || "yes" === $this.data("collapsible"), $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                    header: "> div > h3",
                    autoHeight: !1,
                    heightStyle: "content",
                    active: active_tab,
                    collapsible: collapsible,
                    navigation: !0,
                    activate: vc_accordionActivate,
                    change: function(event, ui) {
                        void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                    }
                }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
            var layout_modes = {
                fitrows: "fitRows",
                masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
                }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function(e) {
                    e && e.preventDefault && e.preventDefault();
                    var $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                        filter: jQuery(this).attr("data-filter")
                    })
                }), jQuery(window).bind("load resize", function() {
                    $thumbs.isotope("layout")
                })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
                var $this = jQuery(this);
                if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
                    $this.data("carousel_enabled", !0);
                    getColumnsCount(jQuery(this));
                    jQuery(this).hasClass("columns_count_1") && 900;
                    var carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                    carousel_li.css({
                        "margin-right": carousel_li.css("margin-left"),
                        "margin-left": 0
                    });
                    var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                    fluid_ul.width(fluid_ul.width() + 300), jQuery(window).on("resize", function() {
                        screen_size != (screen_size = getSizeName()) && window.setTimeout(function() {
                            location.reload()
                        }, 20)
                    })
                }
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
            jQuery(".wpb_gallery_slides").each(function(index) {
                var $imagesGrid, this_element = jQuery(this);
                if (this_element.hasClass("wpb_slider_nivo")) {
                    var sliderTimeout = 1e3 * this_element.attr("data-interval");
                    0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                        effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                        slices: 15,
                        boxCols: 8,
                        boxRows: 4,
                        animSpeed: 800,
                        pauseTime: sliderTimeout,
                        startSlide: 0,
                        directionNav: !0,
                        directionNavHide: !0,
                        controlNav: !0,
                        keyboardNav: !1,
                        pauseOnHover: !0,
                        manualAdvance: !1,
                        prevText: "Prev",
                        nextText: "Next"
                    })
                } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                    $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows"
                    })
                }) : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
            try {
                jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: "normal",
                    hook: "data-rel",
                    padding: 15,
                    opacity: .7,
                    showTitle: !0,
                    allowresize: !0,
                    counter_separator_label: "/",
                    hideflash: !1,
                    deeplinking: !1,
                    modal: !1,
                    callback: function() {
                        -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                    },
                    social_tools: ""
                })
            } catch (err) {
                window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
        }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
        }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
            var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function(key, item) {
                    var $el = $(this);
                    $el.addClass("vc_hidden");
                    var $el_full = $el.next(".vc_row-full-width");
                    if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                        var padding, paddingRight, el_margin_left = parseInt($el.css("margin-left"), 10),
                            el_margin_right = parseInt($el.css("margin-right"), 10),
                            offset = 0 - $el_full.offset().left - el_margin_left,
                            width = $(window).width();
                        if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                                position: "relative",
                                left: offset,
                                "box-sizing": "border-box",
                                width: width
                            }), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({
                            "padding-left": padding + "px",
                            "padding-right": paddingRight + "px"
                        });
                        $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                            el: $el,
                            offset: offset,
                            marginLeft: el_margin_left,
                            marginRight: el_margin_right,
                            elFull: $el_full,
                            width: width
                        })
                    }
                }), $(document).trigger("vc-full-width-row", $elements)
            }

            function fullHeightRow() {
                var windowHeight, offsetTop, fullHeight, $element = $(".vc_row-o-full-height:first");
                $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh")));
                $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
            }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function() {
                    return !1
                }
            }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        });
        var screen_size = getSizeName();

        function getSizeName() {
            var screen_w = jQuery(window).width();
            return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
        }
        "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
            var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $line_charts = panel.find(".vc_line-chart"),
                $carousel = panel.find('[data-ride="vc_carousel"]');
            if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                    reload: !1
                }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                    reload: !1
                }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
                var $frame = $google_maps.find("iframe");
                $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
            }
            panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            })
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function() {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(event, ui) {
            if (ui.newPanel.length && ui.newHeader.length) {
                var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
                    $round_charts = ui.newPanel.find(".vc_round-chart"),
                    $line_charts = ui.newPanel.find(".vc_line-chart"),
                    $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
                void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                    reload: !1
                }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                    reload: !1
                }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
                    jQuery(this).isotope("layout")
                })
            }
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function() {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
        }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function() {
            jQuery("[data-vc-video-bg]").each(function() {
                var youtubeUrl, youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function(event) {
                        event.target.mute().setLoop(!0)
                    }
                }
            }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() {
                vcResizeVideoBackground($element)
            })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(url) {
            if (void 0 === url) return !1;
            var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id && id[1]
        }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function() {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function() {
                $("iframe", this).css("pointer-events", "auto")
            }), $wpbGmapsWidget.on("mouseleave", function() {
                $("iframe", this).css("pointer-events", "none")
            }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    perspective = 4 * $this.width() + "px";
                $this.css("perspective", perspective)
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    hoverBoxInner = $this.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0);
                var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
                    backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
                hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function() {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).resize(window.vc_prepareHoverBox), jQuery(document).ready(function($) {
            window.vc_js()
        })
    }(window.jQuery);