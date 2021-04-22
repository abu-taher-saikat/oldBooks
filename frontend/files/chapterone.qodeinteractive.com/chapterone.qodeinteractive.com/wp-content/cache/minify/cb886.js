! function(i) {
    "use strict";
    window.qodefAddonsCore = {}, qodefAddonsCore.shortcodes = {}, qodefAddonsCore.body = i("body"), qodefAddonsCore.html = i("html"), qodefAddonsCore.windowWidth = i(window).width(), qodefAddonsCore.windowHeight = i(window).height(), qodefAddonsCore.scroll = 0, i(document).ready(function() {
        qodefAddonsCore.scroll = i(window).scrollTop(), C.init(), e.init(), t.init()
    }), i(window).resize(function() {
        qodefAddonsCore.windowWidth = i(window).width(), qodefAddonsCore.windowHeight = i(window).height()
    }), i(window).scroll(function() {
        qodefAddonsCore.scroll = i(window).scrollTop()
    }), i(window).load(function() {
        o.init()
    });
    var C = {
        init: function(e) {
            this.holder = i(".qodef-qi-swiper-container"), i.extend(this.holder, e), this.holder.length && this.holder.each(function() {
                C.initSlider(i(this))
            })
        },
        initSlider: function(e) {
            var o = C.getOptions(e),
                t = C.getEvents(e, o);
            new Swiper(e, Object.assign(o, t))
        },
        getOptions: function(e) {
            var o = void 0 !== e.data("options") ? e.data("options") : {},
                t = void 0 !== o.partialValue && "" !== o.partialValue ? parseFloat(o.partialValue) : 0,
                n = void 0 !== o.spaceBetween && "" !== o.spaceBetween ? o.spaceBetween : 0,
                i = void 0 !== o.spaceBetweenTablet && "" !== o.spaceBetweenTablet ? o.spaceBetweenTablet : 0,
                d = void 0 !== o.spaceBetweenMobile && "" !== o.spaceBetweenMobile ? o.spaceBetweenMobile : 0,
                r = void 0 !== o.slidesPerView && "" !== o.slidesPerView ? "auto" === o.slidesPerView ? "auto" : parseInt(o.slidesPerView) + t : 1 + t,
                a = void 0 !== o.centeredSlides && "" !== o.centeredSlides && o.centeredSlides,
                s = void 0 !== o.sliderScroll && "" !== o.sliderScroll && o.sliderScroll,
                l = void 0 !== o.effect && "" !== o.effect ? o.effect : "slide",
                f = void 0 === o.loop || "" === o.loop || o.loop,
                c = void 0 === o.autoplay || "" === o.autoplay || o.autoplay,
                h = void 0 !== o.speed && "" !== o.speed ? parseInt(o.speed, 10) : 5e3,
                u = void 0 !== o.speedAnimation && "" !== o.speedAnimation ? parseInt(o.speedAnimation, 10) : 800,
                q = void 0 !== o.customStages && "" !== o.customStages && o.customStages,
                m = void 0 !== o.outsideNavigation && "yes" === o.outsideNavigation,
                _ = m ? ".swiper-button-next-" + o.unique : e.find(".swiper-button-next"),
                p = m ? ".swiper-button-prev-" + o.unique : e.find(".swiper-button-prev"),
                g = void 0 !== o.outsidePagination && "yes" === o.outsidePagination ? ".swiper-pagination-" + o.unique : e.find(".swiper-pagination");
            !1 !== c && 5e3 !== h ? c = {
                delay: h,
                disableOnInteraction: !1
            } : !1 !== c && (c = {
                disableOnInteraction: !1
            });
            var v = void 0 !== o.slidesPerView1440 && "" !== o.slidesPerView1440 ? parseInt(o.slidesPerView1440, 10) + t : "auto" === o.slidesPerView ? "auto" : 5 + t,
                b = void 0 !== o.slidesPerView1366 && "" !== o.slidesPerView1366 ? parseInt(o.slidesPerView1366, 10) + t : "auto" === o.slidesPerView ? "auto" : 4 + t,
                w = void 0 !== o.slidesPerView1024 && "" !== o.slidesPerView1024 ? parseInt(o.slidesPerView1024, 10) + t : "auto" === o.slidesPerView ? "auto" : 3 + t,
                m = void 0 !== o.slidesPerView768 && "" !== o.slidesPerView768 ? parseInt(o.slidesPerView768, 10) + t : "auto" === o.slidesPerView ? "auto" : 2 + t,
                h = void 0 !== o.slidesPerView680 && "" !== o.slidesPerView680 ? parseInt(o.slidesPerView680, 10) + t : "auto" === o.slidesPerView ? "auto" : 1 + t,
                t = void 0 !== o.slidesPerView480 && "" !== o.slidesPerView480 ? parseInt(o.slidesPerView480, 10) + t : "auto" === o.slidesPerView ? "auto" : 1 + t;
            return q || (r < 2 ? m = w = b = v = r : r < 3 ? w = b = v = r : r < 4 ? b = v = r : r < 5 && (v = r)), Object.assign({
                slidesPerView: r,
                centeredSlides: a,
                sliderScroll: s,
                loopedSlides: "12",
                spaceBetween: n,
                effect: l,
                autoplay: c,
                loop: f,
                speed: u,
                navigation: {
                    nextEl: _,
                    prevEl: p
                },
                pagination: {
                    el: g,
                    type: "bullets",
                    clickable: !0
                },
                grabCursor: !0,
                breakpoints: {
                    0: {
                        slidesPerView: t,
                        spaceBetween: d
                    },
                    481: {
                        slidesPerView: h,
                        spaceBetween: d
                    },
                    681: {
                        slidesPerView: m,
                        spaceBetween: i
                    },
                    769: {
                        slidesPerView: w,
                        spaceBetween: i
                    },
                    1025: {
                        slidesPerView: b
                    },
                    1367: {
                        slidesPerView: v
                    },
                    1441: {
                        slidesPerView: r
                    }
                }
            }, C.getSliderDatas(e))
        },
        getSliderDatas: function(e) {
            var o, t = e.data(),
                n = {};
            for (o in t) t.hasOwnProperty(o) && "options" !== o && void 0 !== t[o] && "" !== t[o] && (n[o] = t[o]);
            return n
        },
        getEvents: function(t, e) {
            return {
                on: {
                    init: function() {
                        var o;
                        t.addClass("qodef-swiper--initialized"), e.sliderScroll && (o = !1, t.on("mousewheel", function(e) {
                            e.preventDefault(), o || (o = !0, e.deltaY < 0 ? t[0].swiper.slideNext() : t[0].swiper.slidePrev(), setTimeout(function() {
                                o = !1
                            }, 1e3))
                        })), qodefAddonsCore.body.trigger("qodefAddons_trigger_after_swiper_init", [t, e])
                    }
                }
            }
        }
    };
    qodefAddonsCore.qodefSwiper = C, "function" != typeof Object.assign && (Object.assign = function(e) {
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        e = Object(e);
        for (var o = 1; o < arguments.length; o++) {
            var t = arguments[o];
            if (null !== t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    });
    var e = {
        init: function() {
            if (this.holder = i(".qodef-qi-fslightbox-popup"), this.holder.length) {
                refreshFsLightbox();
                for (const n in fsLightboxInstances) fsLightboxInstances[n].props.onInit = () => {
                    var e = fsLightboxInstances[n].elements.container,
                        o = e.querySelectorAll(".fslightbox-slide-btn-container-previous > .fslightbox-slide-btn"),
                        t = e.querySelectorAll(".fslightbox-slide-btn-container-next > .fslightbox-slide-btn"),
                        e = e.querySelectorAll('[title="Close"]');
                    o[0].innerHTML = qodefGlobal.vars.iconArrowLeft, t[0].innerHTML = qodefGlobal.vars.iconArrowRight, e[0].innerHTML = qodefGlobal.vars.iconClose
                }
            }
        }
    };
    qodefAddonsCore.qodefLightboxPopup = e;
    var o = {
        init: function() {
            this.holder = i(".qodef-qi--has-appear:not(.qodef-qi--appeared)"), this.holder.length && this.holder.each(function() {
                var e, o, t = i(this),
                    e = (e = 10, o = 400, Math.floor(Math.random() * (o - e) + e)),
                    n = i(this).attr("data-appear-delay");
                n ? (n = "random" === n ? e : n, qodefAddonsCore.qodefIsInViewport.check(t, function() {
                    setTimeout(function() {
                        t.addClass("qodef-qi--appeared")
                    }, n)
                })) : qodefAddonsCore.qodefIsInViewport.check(t, function() {
                    t.addClass("qodef-qi--appeared")
                })
            })
        }
    };
    qodefAddonsCore.qodefAppear = o, qodefAddonsCore.qodefIsInViewport = {
        check: function(o, t, n) {
            var e, i;
            o.length && (e = void 0 !== o.data("viewport-offset") ? o.data("viewport-offset") : .15, (i = new IntersectionObserver(function(e) {
                !0 === e[0].isIntersecting && (t.call(o), !1 !== n && i.disconnect())
            }, {
                threshold: [e]
            })).observe(o[0]))
        }
    };
    var t = {
        init: function() {
            var e;
            this.holder = i("#qi-addons-for-elementor-page-inline-style"), !this.holder.length || (e = this.holder.data("style")).length && i("head").append('<style type="text/css">' + e + "</style>")
        }
    };
    qodefAddonsCore.qodefWaitForImages = {
        check: function(e, o) {
            if (e.length) {
                var t = e.find("img");
                if (t.length)
                    for (var n = 0, i = 0; i < t.length; i++) {
                        var d, r = t[i];
                        r.complete ? ++n === t.length && o.call(e) : ((d = new Image).addEventListener("load", function() {
                            if (++n === t.length) return o.call(e), !1
                        }, !1), d.src = r.src)
                    }
            }
        }
    }
}(jQuery),
function(o) {
    "use strict";
    o(document).ready(function() {
        i.init()
    }), o(window).resize(function() {
        i.reInit()
    }), o(window).on("elementor/frontend/init", function() {
        elementorFrontend.isEditMode() && elementor.channels.editor.on("change", function() {
            i.init()
        })
    });
    var i = {
        init: function(e) {
            this.holder = o(".qodef-layout--qi-masonry"), o.extend(this.holder, e), this.holder.length && this.holder.each(function() {
                i.createMasonry(o(this))
            })
        },
        reInit: function(e) {
            this.holder = o(".qodef-layout--qi-masonry"), o.extend(this.holder, e), this.holder.length && this.holder.each(function() {
                var e = o(this).find(".qodef-grid-inner");
                "function" == typeof e.isotope && e.isotope("layout")
            })
        },
        createMasonry: function(o) {
            var t = o.find(".qodef-grid-inner"),
                n = t.find(".qodef-grid-item");
            qodefAddonsCore.qodefWaitForImages.check(t, function() {
                var e;
                "function" == typeof t.isotope && (t.isotope({
                    layoutMode: "packery",
                    itemSelector: ".qodef-grid-item",
                    percentPosition: !0,
                    masonry: {
                        columnWidth: ".qodef-grid-masonry-sizer",
                        gutter: ".qodef-grid-masonry-gutter"
                    }
                }), o.hasClass("qodef-items--fixed") && (e = i.getFixedImageSize(t, n), i.setFixedImageProportionSize(t, n, e)), t.isotope("layout")), t.addClass("qodef--masonry-init")
            })
        },
        getFixedImageSize: function(e, o) {
            var t = e.find(".qodef-item--square");
            if (t.length) {
                var n = t.find("img"),
                    t = n.width(),
                    n = n.height();
                return t !== n ? Math.round(n) : Math.round(t)
            }
            e = e.find(".qodef-grid-masonry-sizer").width(), o = parseInt(o.css("paddingLeft"), 10);
            return Math.round(e - 2 * o)
        },
        setFixedImageProportionSize: function(e, o, t) {
            var n = parseInt(o.css("paddingLeft")),
                i = (e.find(".qodef-item--square"), e.find(".qodef-item--landscape")),
                d = e.find(".qodef-item--portrait"),
                r = e.find(".qodef-item--huge-square"),
                e = qodefAddonsCore.windowWidth <= 680;
            o.css("height", t), i.length && i.css("height", Math.round(t / 2)), d.length && d.css("height", Math.round(2 * (t + n))), e || (i.length && i.css("height", t), r.length && r.css("height", Math.round(2 * (t + n))))
        }
    };
    qodefAddonsCore.qodefMasonryLayout = i
}(jQuery),
function(n) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_accordion = {}, n(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = n(".qodef-qi-accordion"), this.holder.length && this.holder.each(function() {
                o.initItem(n(this))
            })
        },
        initItem: function(e) {
            e.hasClass("qodef-behavior--accordion") && o.initAccordion(e), e.hasClass("qodef-behavior--toggle") && o.initToggle(e), e.addClass("qodef--init")
        },
        initAccordion: function(e) {
            e.accordion({
                animate: "swing",
                collapsible: !0,
                active: 0,
                icons: "",
                heightStyle: "auto"
            })
        },
        initToggle: function(e) {
            var o = e.find(".qodef-e-title-holder"),
                t = o.next();
            e.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"), o.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"), t.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), o.each(function() {
                var e = n(this);
                e.hover(function() {
                    e.toggleClass("ui-state-hover")
                }), e.on("click", function() {
                    e.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), e.next().toggleClass("ui-accordion-content-active").slideToggle(400)
                })
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_accordion.qodefAccordion = o
}(jQuery),
function(d) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_animated_text = {}, d(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = d(".qodef-qi-animated-text.qodef--animated-by-letter"), this.holder.length && this.holder.each(function() {
                e.initItem(d(this))
            })
        },
        initItem: function(i) {
            i.find(".qodef-e-word-holder").each(function() {
                let e = d(this).text(),
                    o = "";
                for (var t = 0; t < e.length; t++) o += '<span class="qodef-e-character">' + e.charAt(t) + "</span>";
                d(this).html(o)
            });
            let e = i.find(".qodef-e-character");
            e.each(function(e) {
                let o = d(this),
                    t = i.hasClass("qodef--appear-from-left") ? 40 : 60,
                    n = e * t + "ms";
                o.css("transition-delay", n)
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_animated_text.qodefAppear = qodefAddonsCore.qodefAppear, qodefAddonsCore.shortcodes.qi_addons_for_elementor_animated_text.qodefAnimatedText = e
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_before_after = {}, e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-qi-before-after"), this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-before-after-image-holder"),
                t = o.data("offset") / 100,
                n = "horizontal",
                i = o.siblings(".qodef-handle-text");
            o.parents(".qodef-qi-before-after").hasClass("qodef--vertical") && (n = "vertical"), qodefAddonsCore.qodefWaitForImages.check(o, function() {
                o.css("visibility", "visible"), o.twentytwenty({
                    orientation: n,
                    default_offset_pct: t
                }), i.length && o.find(".twentytwenty-handle").prepend(i)
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_before_after.qodefBeforeAfter = o
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_button = {}, e(document).ready(function() {
        o.init()
    }), e(window).on("elementor/frontend/init", function() {
        elementorFrontend.isEditMode() && elementor.channels.editor.on("change", function() {
            o.init()
        })
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-qi-button"), this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o;
            e.hasClass("qodef-type--icon-boxed") && (o = e.find(".qodef-m-icon"), e = e.find(".qodef-m-text").outerHeight(), o.css("width", e))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_button.qodefButton = o
}(jQuery),
function(r) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_cards_gallery = {}, r(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = r(".qodef-qi-cards-gallery"), this.holder.length && this.holder.each(function() {
                e.initItem(r(this))
            })
        },
        initItem: function(t) {
            var n, i = t.find(".qodef-m-card"),
                d = t.data("orientation");
            switch (d) {
                case "left":
                    n = "0 0 0 20%";
                    break;
                case "right":
                    n = "0 20% 0 0"
            }
            r(i.get().reverse()).each(function(e) {
                var o = r(this);
                o.on("click", function() {
                    if (!i.last().is(o)) return "both" === d && (n = o.index() % 2 ? "0 0 0 20%" : "0 0 0 -20%"), o.addClass("qodef-out").animate({
                        margin: n
                    }, 200, "swing", function() {
                        o.detach(), o.insertAfter(i.last()).animate({
                            margin: "0"
                        }, 200, "swing", function() {
                            o.removeClass("qodef-out")
                        }), i = t.find(".qodef-m-card")
                    }), !1
                })
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_cards_gallery.qodefCardsGallery = e
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_charts = {}, e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-qi-charts"), this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            qodefAddonsCore.qodefIsInViewport.check(e, function() {
                o.generateChartData(e)
            })
        },
        generateChartData: function(i) {
            var e = (e = i.data("type")) ? "pie" : "doughnut",
                o = i.data("values"),
                t = i.data("labels"),
                d = i.data("background-colors"),
                r = i.data("hover-background-colors"),
                n = i.data("border-colors"),
                a = i.data("hover-border-colors"),
                s = i.data("border-width"),
                l = i.data("hover-border-width"),
                f = i.data("enable-legend"),
                c = i.data("legend-position"),
                h = i.data("legend-alignment"),
                u = i.data("legend-bar-width"),
                q = i.data("legend-bar-height"),
                m = i.data("legend-bar-margin"),
                _ = i.data("legend-label-color"),
                p = i.data("legend-label-font"),
                g = i.data("legend-label-font-size"),
                v = i.data("legend-label-font-weight"),
                b = i.data("legend-label-line-height"),
                w = i.data("aspect-ratio");
            let C = i.data("pattern-images"),
                y = !1,
                A, x = {
                    type: e,
                    data: {
                        datasets: [{
                            data: o,
                            backgroundColor: d,
                            hoverBackgroundColor: r,
                            borderColor: n,
                            hoverBorderColor: a,
                            borderWidth: s,
                            hoverBorderWidth: l,
                            borderAlign: "center",
                            pattern: C
                        }],
                        labels: t
                    },
                    options: {
                        responsive: !0,
                        aspectRatio: w,
                        animation: {
                            animateScale: !0,
                            animateRotate: !0
                        },
                        plugins: {
                            legend: {
                                display: f,
                                position: c,
                                align: h,
                                labels: {
                                    boxWidth: u,
                                    boxHeight: q,
                                    padding: m,
                                    color: _,
                                    font: {
                                        family: p,
                                        size: g,
                                        weight: v,
                                        lineHeight: b
                                    }
                                }
                            },
                            tooltip: {
                                titleFont: {
                                    size: 13,
                                    style: "regular"
                                },
                                displayColors: !1,
                                cornerRadius: 5,
                                caretSize: 6
                            }
                        }
                    }
                };
            i.addClass("qodef--init"), C.forEach(function(e, t) {
                var n;
                e && (y = !0, (n = new Image).src = C[t], n.onload = function() {
                    var e = i.find("canvas")[0].getContext("2d"),
                        o = e.createPattern(n, "repeat");
                    d[t] = o, r[t] = o, A = new Chart(e, x)
                })
            }), y || (b = i.find("canvas"), A = new Chart(b, x))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_charts.qodefCharts = o
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_clients_slider = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_clients_slider.qodefSwiper = qodefAddonsCore.qodefSwiper
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_countdown = {}, e(document).ready(function() {
        t.init()
    });
    var t = {
        init: function() {
            this.countdowns = e(".qodef-qi-countdown"), this.countdowns.length && this.countdowns.each(function() {
                t.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-m-date"),
                e = t.generateOptions(e);
            t.initCountdown(o, e)
        },
        generateOptions: function(e) {
            var o = {};
            return o.date = void 0 !== e.data("date") ? e.data("date") : null, o.hide = void 0 !== e.data("hide") ? e.data("hide") : null, o.monthLabel = void 0 !== e.data("month-label") ? e.data("month-label") : "Month", o.monthLabelPlural = void 0 !== e.data("month-label-plural") ? e.data("month-label-plural") : "Months", o.dayLabel = void 0 !== e.data("day-label") ? e.data("day-label") : "Day", o.dayLabelPlural = void 0 !== e.data("day-label-plural") ? e.data("day-label-plural") : "Days", o.hourLabel = void 0 !== e.data("hour-label") ? e.data("hour-label") : "Hour", o.hourLabelPlural = void 0 !== e.data("hour-label-plural") ? e.data("hour-label-plural") : "Hours", o.minuteLabel = void 0 !== e.data("minute-label") ? e.data("minute-label") : "Minute", o.minuteLabelPlural = void 0 !== e.data("minute-label-plural") ? e.data("minute-label-plural") : "Minutes", o.secondLabel = void 0 !== e.data("second-label") ? e.data("second-label") : "Second", o.secondLabelPlural = void 0 !== e.data("second-label-plural") ? e.data("second-label-plural") : "Seconds", o
        },
        initCountdown: function(c, h) {
            var u = new Date(h.date).getTime(),
                q = setInterval(function() {
                    var e = (new Date).getTime(),
                        o = u - e,
                        t = Math.floor(o / 2592e6),
                        n = Math.floor(o % 2592e6 / 864e5),
                        i = Math.floor(o % 864e5 / 36e5),
                        d = Math.floor(o % 36e5 / 6e4),
                        r = Math.floor(o % 6e4 / 1e3);
                    "mon" === h.hide && (n = Math.floor(o / 864e5));
                    var a = c.find(".qodef-months"),
                        s = c.find(".qodef-days"),
                        l = c.find(".qodef-hours"),
                        f = c.find(".qodef-minutes"),
                        e = c.find(".qodef-seconds");
                    a.find(".qodef-label").html(1 === t ? h.monthLabel : h.monthLabelPlural), s.find(".qodef-label").html(1 === n ? h.dayLabel : h.dayLabelPlural), l.find(".qodef-label").html(1 === i ? h.hourLabel : h.hourLabelPlural), f.find(".qodef-label").html(1 === d ? h.minuteLabel : h.minuteLabelPlural), e.find(".qodef-label").html(1 === r ? h.secondLabel : h.secondLabelPlural), t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, i = i < 10 ? "0" + i : i, d = d < 10 ? "0" + d : d, r = r < 10 ? "0" + r : r, a.find(".qodef-digit").html(t), s.find(".qodef-digit").html(n), l.find(".qodef-digit").html(i), f.find(".qodef-digit").html(d), e.find(".qodef-digit").html(r), o < 0 && (clearInterval(q), a.find(".qodef-label").html(h.monthLabelPlural), s.find(".qodef-label").html(h.dayLabelPlural), l.find(".qodef-label").html(h.hourLabelPlural), f.find(".qodef-label").html(h.minuteLabelPlural), e.find(".qodef-label").html(h.secondLabelPlural), a.find(".qodef-digit").html("00"), s.find(".qodef-digit").html("00"), l.find(".qodef-digit").html("00"), f.find(".qodef-digit").html("00"), e.find(".qodef-digit").html("00"))
                }, 1e3)
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_countdown.qodefCountdown = t
}(jQuery),
function(r) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_counter = {}, r(document).ready(function() {
        n.init()
    });
    var n = {
        init: function() {
            this.counters = r(".qodef-qi-counter"), this.counters.length && this.counters.each(function() {
                n.initItem(r(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-m-digit"),
                t = n.generateOptions(e);
            qodefAddonsCore.qodefIsInViewport.check(e, function() {
                n.counterScript(o, t)
            })
        },
        generateOptions: function(e) {
            var o = {};
            return o.start = void 0 !== e.data("start-digit") && "" !== e.data("start-digit") ? e.data("start-digit") : 0, o.end = void 0 !== e.data("end-digit") && "" !== e.data("end-digit") ? e.data("end-digit") : null, o.step = void 0 !== e.data("step-digit") && "" !== e.data("step-digit") ? e.data("step-digit") : 1, o.delay = void 0 !== e.data("step-delay") && "" !== e.data("step-delay") ? parseInt(e.data("step-delay"), 10) : 100, o.txt = void 0 !== e.data("digit-label") && "" !== e.data("digit-label") ? String(e.data("digit-label")) : "", o
        },
        counterScript: function(e, o) {
            var t = r.extend({
                    start: 0,
                    end: null,
                    step: 1,
                    delay: 50,
                    txt: ""
                }, o || {}),
                n = t.start,
                i = t.end;
            e.text(n + t.txt);
            var d = setInterval(function() {
                null !== i && i <= n || (n += t.step, i <= n && (n = i, clearInterval(d)), e.text(n + t.txt))
            }, t.delay)
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_counter.qodefCounter = n
}(jQuery),
function(t) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_carousel = {}, t(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.sliders = t(".qodef-qi-device-carousel"), this.sliders.length && this.sliders.each(function() {
                e.initItem(t(this))
            })
        },
        initItem: function(e) {
            const o = e.find(".qodef-device-carousel-device .qodef-qi-swiper-container");
            o.each(function() {
                let e = t(this);
                e.hasClass("qodef-swiper--initialized") || qodefAddonsCore.qodefSwiper.initSlider(e)
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_carousel.qodefSwiper = qodefAddonsCore.qodefSwiper, qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_carousel.qodefDeviceCarousel = e
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_slider = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_slider.qodefSwiper = qodefAddonsCore.qodefSwiper
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_faq = {}, e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-qi-faq.qodef-behavior--accordion"), this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o;
            e.hasClass("qodef-behavior--accordion") && (o = 0, e.hasClass("qodef-closed") && (o = !1), e.accordion({
                animate: "swing",
                collapsible: !0,
                active: o,
                icons: "",
                heightStyle: "content"
            }), e.addClass("qodef--init"))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_faq.qodefFAQ = o
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_graphs = {}, e(document).ready(function() {
        n.init()
    });
    var n = {
        init: function() {
            this.holder = e(".qodef-qi-graphs"), this.holder.length && this.holder.each(function() {
                n.initItem(e(this))
            })
        },
        initItem: function(t) {
            qodefAddonsCore.qodefIsInViewport.check(t, function() {
                t.addClass("qodef--init");
                var e = t.find("canvas"),
                    o = n.generateChartData(t, e);
                new Chart(e, o)
            })
        },
        generateChartData: function(e, o) {
            var t = (t = e.data("type")) ? "line" : "bar",
                n = e.data("ticks"),
                i = e.data("fill"),
                d = e.data("linear"),
                r = e.data("values"),
                a = e.data("item-labels"),
                s = e.data("labels"),
                l = e.data("background-colors"),
                f = e.data("hover-background-colors"),
                c = e.data("border-colors"),
                h = e.data("hover-border-colors"),
                u = e.data("border-width"),
                q = e.data("hover-border-width"),
                m = e.data("bar-size"),
                _ = e.data("cat-size"),
                p = e.data("enable-legend"),
                g = e.data("legend-position"),
                v = e.data("legend-alignment"),
                b = e.data("legend-bar-width"),
                w = e.data("legend-bar-height"),
                C = e.data("legend-bar-margin"),
                y = e.data("legend-label-color"),
                A = e.data("legend-label-font"),
                x = e.data("legend-label-font-size"),
                e = e.data("legend-label-font-weight"),
                I = [];
            return r.forEach(function(e, o) {
                var t = {};
                t.data = r[o].split(","), t.label = a[o], t.backgroundColor = l[o], t.hoverBackgroundColor = f[o], t.borderColor = c[o], t.hoverBorderColor = h[o], t.borderWidth = u, t.hoverBorderWidth = q, t.pointBackgroundColor = "rgba(0,0,0,0)", t.pointBorderColor = "rgba(0,0,0,0)", t.pointHoverBackgroundColor = "rgba(0,0,0,0)", t.pointHoverBorderColor = "rgba(0,0,0,0)", t.cubicInterpolationMode = "default", t.fill = i[o], t.barPercentage = m, t.categoryPercentage = _, t.tension = d[o], I.push(t)
            }), qodefAddonsCore.windowWidth <= 480 && (p = !1), {
                type: t,
                data: {
                    labels: s,
                    datasets: I
                },
                options: {
                    responsive: !0,
                    aspectRatio: 1.7,
                    hover: {
                        mode: "nearest",
                        intersect: !0
                    },
                    plugins: {
                        legend: {
                            display: p,
                            position: g,
                            align: v,
                            labels: {
                                boxWidth: b,
                                boxHeight: w,
                                padding: C,
                                color: y,
                                font: {
                                    family: A,
                                    size: x,
                                    weight: e
                                }
                            }
                        },
                        tooltip: {
                            mode: "nearest",
                            intersect: !1,
                            titleFont: {
                                size: 13,
                                style: "regular"
                            },
                            displayColors: !1,
                            cornerRadius: 5,
                            caretSize: 6
                        }
                    },
                    scales: {
                        x: {
                            display: !0,
                            scaleLabel: {
                                display: !0
                            },
                            ticks: {
                                color: "#c4c4c4",
                                font: {
                                    family: '"DM Sans"',
                                    size: 16
                                },
                                padding: 10
                            },
                            grid: {
                                color: "#dbdbdb",
                                tickLength: 30
                            }
                        },
                        y: {
                            display: !0,
                            scaleLabel: {
                                display: !0
                            },
                            suggestedMax: n.max,
                            suggestedMin: n.min,
                            ticks: {
                                stepSize: n.step,
                                color: "#c4c4c4",
                                font: {
                                    family: '"DM Sans"',
                                    size: 16
                                },
                                padding: 10
                            },
                            gridLines: {
                                color: "#dbdbdb",
                                tickMarkLength: 30
                            }
                        }
                    }
                }
            }
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_graphs.qodefGraphs = n
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_icon_with_text = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_icon_with_text.qodefAppear = qodefAddonsCore.qodefAppear
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery.qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_masonry = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_masonry.qodefMasonryLayout = qodefAddonsCore.qodefMasonryLayout, qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_masonry.qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_pinterest = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_pinterest.qodefMasonryLayout = qodefAddonsCore.qodefMasonryLayout, qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_pinterest.qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_slider = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_slider.qodefSwiper = qodefAddonsCore.qodefSwiper, qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_slider.qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_info_button = {}, e(document).ready(function() {
        o.init()
    }), e(window).on("elementor/frontend/init", function() {
        elementorFrontend.isEditMode() && elementor.channels.editor.on("change", function() {
            o.init()
        })
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-qi-info-button"), this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o;
            e.hasClass("qodef-type--icon-boxed") && (o = e.find(".qodef-m-icon"), e = e.find(".qodef-m-text-holder").outerHeight(), o.css("width", e))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_info_button.qodefInfoButton = o
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_banner = {}
}(jQuery),
function(i) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_link_showcase = {}, i(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = i(".qodef-qi-interactive-link-showcase"), this.holder.length && this.holder.each(function() {
                e.initItem(i(this))
            })
        },
        initItem: function(e) {
            var t = e.find(".qodef-e-image"),
                n = e.find(".qodef-m-item");
            t.eq(0).addClass("qodef--active"), n.eq(0).addClass("qodef--active"), n.on("touchstart mouseenter", function(e) {
                var o = i(this);
                (!qodefAddonsCore.html.hasClass("touchevents") || !o.hasClass("qodef--active") && 680 < qodefAddonsCore.windowWidth) && (e.preventDefault(), t.removeClass("qodef--active").eq(o.index()).addClass("qodef--active"), n.removeClass("qodef--active").eq(o.index()).addClass("qodef--active"))
            }).on("touchend mouseleave", function() {
                var e = i(this);
                (!qodefAddonsCore.html.hasClass("touchevents") || !e.hasClass("qodef--active") && 680 < qodefAddonsCore.windowWidth) && (n.removeClass("qodef--active").eq(e.index()).addClass("qodef--active"), t.removeClass("qodef--active").eq(e.index()).addClass("qodef--active"))
            }), e.addClass("qodef--init")
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_link_showcase.qodefInteractiveLinkShowcase = e
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_item_showcase = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_item_showcase.qodefAppear = qodefAddonsCore.qodefAppear
}(jQuery),
function(t) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_message_box = {}, t(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = t(".qodef-qi-message-box"), this.holder.length && this.holder.each(function() {
                e.initItem(t(this))
            })
        },
        initItem: function(e) {
            let o = e.closest(".elementor-element");
            o.addClass("q-message-box-holder"), e.find(".qodef-m-close-icon").on("click", function(e) {
                t(this).parent().addClass("qodef-hidden"), o.addClass("qodef-hidden"), o.animate({
                    height: 0
                }, {
                    queue: !1
                })
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_message_box.qodefMessageBoxList = e
}(jQuery),
function(a) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_parallax_images = {}, a(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.images = a(".qodef-qi-parallax-images"), this.images.length && (a(window).on("load", function() {
                o.initParallaxElements()
            }), this.images.each(function() {
                o.initItem(a(this))
            }))
        },
        initItem: function(e) {
            o.parallaxElements(e)
        },
        parallaxElements: function(e) {
            var o = e.find(".qodef-m-images"),
                t = o.find(".qodef-e-parallax-image"),
                n = o.find(".qodef-e-main-image img"),
                i = o.find(".qodef-e-main-image").attr("data-parallax-main"),
                e = 40,
                d = -50,
                o = 30,
                r = 15;
            1024 < qodefAddonsCore.windowWidth && (void 0 !== i && !1 !== i && (e = i, o = Math.abs(parseInt(e / .9, 10))), n.attr("data-parallax", '{"y" : ' + e + ' , "smoothness": ' + o + "}"), t.each(function() {
                var e = a(this),
                    o = e.find("img"),
                    e = e.attr("data-parallax");
                void 0 !== e && !1 !== e && (d = e, r = Math.abs(parseInt(d / 2.5, 10))), o.attr("data-parallax", '{"y" : ' + d + ' , "smoothness": ' + r + "}")
            }))
        },
        initParallaxElements: function() {
            a(".qodef-qi-parallax-images [data-parallax]").length && ParallaxScroll.init()
        }
    };
    a(window).on("load", function() {
        this.images = a(".qodef-qi-parallax-images"), this.images.length && (o.initParallaxElements(), setTimeout(function() {
            qodefAddonsCore.body.hasClass("e--ua-firefox") && o.initParallaxElements()
        }, 300))
    }), qodefAddonsCore.shortcodes.qi_addons_for_elementor_parallax_images.qodefParallaxImages = o
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_preview_slider = {}, e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.sliders = e(".qodef-qi-preview-slider"), this.sliders.length && this.sliders.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o = e.find("> .qodef-qi-swiper-container .swiper-slide-active"),
                t = e.find(".qodef-preview-slider-device-holder"),
                n = e.find("> .qodef-qi-swiper-container"),
                i = e.find(".qodef-preview-slider-device-holder .qodef-qi-swiper-container");
            t.width(o.width()), t.css("top", o.height()), t = n.find(".swiper-slide").length, (o = i[0].swiper.params).loopedSlides = t, o.autoplay = "false", n[0].swiper.autoplay.stop(), i[0].swiper.destroy();
            let d = new Swiper(i, Object.assign(o));
            n[0].swiper.controller.control = d, n[0].swiper.controller.by = "slide", n[0].swiper.controller.inverse = !0, d.controller.control = n[0].swiper, n[0].swiper.autoplay.start(), e.addClass("qodef--visible")
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_preview_slider.qodefSwiper = qodefAddonsCore.qodefSwiper, qodefAddonsCore.shortcodes.qi_addons_for_elementor_preview_slider.qodefPreviewSlider = o
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_process = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_process.qodefAppear = qodefAddonsCore.qodefAppear
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_circle = {}, e(document).ready(function() {
        i.init()
    });
    var i = {
        init: function() {
            this.holder = e(".qodef-qi-progress-bar-circle"), this.holder.length && this.holder.each(function() {
                i.initItem(e(this))
            })
        },
        initItem: function(n) {
            qodefAddonsCore.qodefIsInViewport.check(n, function() {
                n.addClass("qodef--init");
                var e = n.find(".qodef-m-canvas"),
                    o = i.generateBarData(n),
                    t = n.data("number") / 100;
                i.initCircleBar(e, o, t)
            })
        },
        generateBarData: function(e) {
            var o = e.data("active-line-width"),
                t = e.data("active-line-color"),
                n = e.data("inactive-line-width"),
                i = e.data("inactive-line-color"),
                d = void 0 !== e.data("duration") && "" !== e.data("duration") ? parseInt(e.data("duration"), 10) : 1200,
                r = e.data("text-color"),
                e = e.width();
            return {
                color: t,
                strokeWidth: 100 * o / e,
                trailColor: i,
                trailWidth: 100 * n / e,
                svgStyle: {
                    display: "block",
                    width: "100%"
                },
                text: {
                    className: "qodef-m-value",
                    style: {
                        color: r
                    },
                    autoStyleContainer: !1
                },
                easing: "linear",
                duration: d,
                from: {
                    color: i
                },
                to: {
                    color: t
                },
                step: function(e, o) {
                    o.setText(Math.round(100 * o.value()) + '<sup class="qodef-m-percentage">%</sup>')
                }
            }
        },
        initCircleBar: function(e, o, t) {
            i.checkBar(e) && new ProgressBar.Circle(e[0], o).animate(t)
        },
        checkBar: function(e) {
            return !e.find("svg").length
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_circle.qodefProgressBar = i
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_horizontal = {}, e(document).ready(function() {
        i.init()
    });
    var i = {
        init: function() {
            this.holder = e(".qodef-qi-progress-bar-horizontal"), this.holder.length && this.holder.each(function() {
                i.initItem(e(this))
            })
        },
        initItem: function(n) {
            qodefAddonsCore.qodefIsInViewport.check(n, function() {
                n.addClass("qodef--init");
                var e = n.find(".qodef-m-canvas"),
                    o = i.generateBarData(n),
                    t = n.data("number") / 100;
                i.initHorizontalBar(e, o, t, n)
            })
        },
        generateBarData: function(t) {
            var e = t.data("active-line-width"),
                o = t.data("active-line-color"),
                n = t.data("inactive-line-width"),
                i = t.data("inactive-line-color"),
                d = void 0 !== t.data("duration") && "" !== t.data("duration") ? parseInt(t.data("duration"), 10) : 1200,
                r = t.data("percentage-type"),
                a = t.width();
            return {
                color: o,
                strokeWidth: 100 * e / a,
                trailColor: i,
                trailWidth: 100 * n / a,
                svgStyle: {
                    display: "block",
                    width: "100%"
                },
                easing: "easeInOut",
                duration: d,
                from: {
                    color: i
                },
                to: {
                    color: o
                },
                step: function(e, o) {
                    o = Math.round(100 * o.value());
                    t.find(".qodef-m-value-inner").html(o + '<span class="qodef-m-percentage">%</span>'), "floating-above" !== r && "floating-on" !== r || (t.find(".qodef-m-value")[0].style.left = o + "%")
                }
            }
        },
        initHorizontalBar: function(e, o, t, n) {
            i.checkBar(e) && (e = new ProgressBar.Line(e[0], o), "yes" === n.data("gradient-fill") && i.generateGradient(n), void 0 !== (o = n.data("pattern")) && n.find("svg").css("background-image", 'url("' + o + '")'), e.animate(t))
        },
        checkBar: function(e) {
            return !e.find("svg").length
        },
        generateGradient: function(e) {
            for (var o = "http://www.w3.org/2000/svg", t = document.createElementNS(o, "defs"), n = document.createElementNS(o, "linearGradient"), i = [{
                    color: e.data("gradient-start"),
                    offset: "0%"
                }, {
                    color: e.data("gradient-end"),
                    offset: "100%"
                }], d = 0, r = i.length; d < r; d++) {
                var a = document.createElementNS(o, "stop");
                a.setAttribute("offset", i[d].offset), a.setAttribute("stop-color", i[d].color), n.appendChild(a)
            }
            n.id = "Gradient-" + e.data("rand-id"), n.setAttribute("gradientUnits", "userSpaceOnUse"), n.setAttribute("x1", "0"), n.setAttribute("x2", e.data("number") + "%"), n.setAttribute("y1", "0"), n.setAttribute("y2", "0"), t.appendChild(n), e[0].querySelector(".qodef-m-canvas svg").appendChild(t), e[0].querySelector(".qodef-m-canvas svg path:nth-child(2)").setAttribute("stroke", "url(#Gradient-" + e.data("rand-id") + ")")
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_horizontal.qodefProgressBar = i
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_vertical = {}, e(document).ready(function() {
        a.init()
    });
    var a = {
        init: function() {
            this.holder = e(".qodef-qi-progress-bar-vertical"), this.holder.length && this.holder.each(function() {
                a.initItem(e(this))
            })
        },
        initItem: function(n) {
            qodefAddonsCore.qodefIsInViewport.check(n, function() {
                n.addClass("qodef--init");
                var e = n.find(".qodef-m-canvas"),
                    o = a.generateBarData(n),
                    t = n.data("number") / 100;
                a.initVerticalBar(e, o, t, n), n.hasClass("qodef-percentage--floating-top") && n.find(".qodef-m-inner").width(n.find(".qodef-m-canvas svg").width())
            })
        },
        generateBarData: function(t) {
            var e = t.data("bar-height"),
                o = t.data("active-line-width"),
                n = t.data("active-line-color"),
                i = t.data("inactive-line-width"),
                d = t.data("inactive-line-color"),
                r = void 0 !== t.data("duration") && "" !== t.data("duration") ? parseInt(t.data("duration"), 10) : 1200,
                a = t.data("percentage-type");
            return {
                color: n,
                strokeWidth: 100 * o / e,
                trailColor: d,
                trailWidth: 100 * i / e,
                svgStyle: {
                    display: "block",
                    height: e + "px",
                    transform: "scaleY(-1)"
                },
                easing: "linear",
                duration: r,
                from: {
                    color: d
                },
                to: {
                    color: n
                },
                step: function(e, o) {
                    o = Math.round(100 * o.value());
                    t.find(".qodef-m-value").html(o + '<span class="qodef-m-percentage">%</span>'), "floating-top" === a && (t.find(".qodef-m-value")[0].style.bottom = o + "%", t.find(".qodef-m-title")[0].style.bottom = o + "%")
                }
            }
        },
        initVerticalBar: function(e, o, t, n) {
            var i, d, r;
            a.checkBar(e) && (i = new ProgressBar.Line(e[0], o), "yes" === n.data("gradient-fill") && a.generateGradient(n), d = n[0].querySelector(".qodef-m-canvas svg"), r = n[0].querySelector(".qodef-m-canvas svg path:first-of-type"), o = (e = n[0].querySelector(".qodef-m-canvas svg path:last-of-type")).getAttribute("stroke-width"), d.setAttribute("viewBox", "0 0 " + o + " 100"), r.setAttribute("d", "M " + o / 2 + ",0 L " + o / 2 + ",100"), e.setAttribute("d", "M " + o / 2 + ",0 L " + o / 2 + ",100"), void 0 !== (o = n.data("pattern")) && n.find("svg").css("background-image", 'url("' + o + '")'), i.animate(t))
        },
        checkBar: function(e) {
            return !e.find("svg").length
        },
        generateGradient: function(e) {
            for (var o = "http://www.w3.org/2000/svg", t = document.createElementNS(o, "defs"), n = document.createElementNS(o, "linearGradient"), i = [{
                    color: e.data("gradient-start"),
                    offset: "0%"
                }, {
                    color: e.data("gradient-end"),
                    offset: "100%"
                }], d = 0, r = i.length; d < r; d++) {
                var a = document.createElementNS(o, "stop");
                a.setAttribute("offset", i[d].offset), a.setAttribute("stop-color", i[d].color), n.appendChild(a)
            }
            n.id = "Gradient-" + e.data("rand-id"), n.setAttribute("gradientUnits", "userSpaceOnUse"), n.setAttribute("x1", "0"), n.setAttribute("x2", "0"), n.setAttribute("y1", "0"), n.setAttribute("y2", e.data("number") + "%"), t.appendChild(n), e[0].querySelector(".qodef-m-canvas svg").appendChild(t), e[0].querySelector(".qodef-m-canvas svg path:nth-child(2)").setAttribute("stroke", "url(#Gradient-" + e.data("rand-id") + ")")
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_vertical.qodefProgressBar = a
}(jQuery),
function(h) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_table_of_contents = {}, h(document).ready(function() {
        u.init()
    });
    var u = {
        init: function() {
            this.holder = h(".qodef-qi-table-of-contents"), this.holder.length && this.holder.each(function() {
                u.initItem(h(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-m-table-content"),
                t = void 0 !== o.data("excluded-tags") ? o.data("excluded-tags") : "",
                n = void 0 !== o.data("excluded-cids") ? o.data("excluded-cids") : "",
                a = void 0 !== o.data("type") ? o.data("type") : "ul",
                s = e.find(".qodef-m-table-content > " + a),
                l = "",
                f = {},
                c = [".qodef-e-number", ".qodef-e-mark"],
                n = u.prepareHeadings(t, n, ["h1", "h2", "h3", "h4", "h5", "h6"]);
            n.length && (n.each(function(e) {
                var o, t, n, i = h(this),
                    d = i.clone(),
                    r = u.prepareId(c, d, l);
                l += r.id + ";", f[e] = {
                    id: r.finalID,
                    tag: i.prop("tagName").replace("H", "")
                }, 0 < e && (o = i.prop("tagName").replace("H", ""), (t = f[e - 1].tag) < o ? ((n = s.find("a[href=#" + f[e - 1].id + "]").parent()).append("<" + a + ">"), s = n.find(a).first()) : o < t && (e = u.findSiblings(o, e, f), s = s.parents(".qodef-m-table-content").find("a[href=#" + e + "]").parent().parents(a).first())), i.attr("id", r.finalID), s.append('<li><a href="#' + r.finalID + '">' + d.text() + "</a></li>")
            }), o.find("li > a").each(function() {
                h(this).on("click", function(e) {
                    e.preventDefault();
                    var o = h(this),
                        e = o.attr("href");
                    u.animateAnchor(o, e)
                })
            }))
        },
        prepareHeadings: function(e, o, t) {
            var n, i = [],
                d = "";
            if (0 < e.length)
                for (var r = e.split(","), a = 0; a < r.length; a++) - 1 !== t.indexOf(r[a]) && t.splice(t.indexOf(r[a]), 1);
            if (0 < o.length)
                for (var s = o.split(","), a = 0; a < s.length; a++) d += ":not(" + s[a] + ")";
            t = t.join(d + ", ") + d, (n = h(t)).length && n.each(function(e) {
                for (var o = h(this), t = 0; t < s.length; t++)
                    if (o.parents(s[t]).length) return void i.push(e)
            });
            for (a = i.length - 1; 0 <= a; a--) n.splice(i[a], 1);
            return n
        },
        prepareId: function(e, o, t) {
            var n, i = {};
            return e.forEach(function(e) {
                o.find(e).remove()
            }), i.id = o.text().trim().replaceAll(" ", "_").replaceAll(/[^a-zA-Z_]+/g, ""), 0 !== t.length ? (n = new RegExp(i.id + ";", "g"), e = 0, null !== (n = t.match(n)) && (e = n.length), i.finalID = 0 !== e ? i.id + "____" + (e += 1) : i.id) : i.finalID = i.id, i
        },
        findSiblings: function(e, o, t) {
            if (0 === o) return t[0].id;
            o -= 1;
            return t[o].tag > e ? u.findSiblings(e, o, t) : t[o].id
        },
        animateAnchor: function(e, o) {
            var t, n = window.scrollY,
                i = h(o).offset().top,
                d = i < n ? -1 : 1,
                r = 50,
                o = h("#wpadminbar");
            o.length && (i -= o.height());
            var a = function() {
                var e;
                n !== i && (Math.abs(n - i) <= 100 && (r = 8), (-1 == d && n < i || 1 == d && i < n) && (n = i), e = u.easingFunction((n - i) / n), h("html, body").scrollTop(n - (n - i) * e), n += d * r, t = requestAnimationFrame(a))
            };
            a(), h(window).one("wheel touchstart", function() {
                cancelAnimationFrame(t)
            })
        },
        easingFunction: function(e) {
            return 0 == e ? 0 : Math.pow(1024, e - 1)
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_table_of_contents.qodefTableOfContents = u
}(jQuery),
function(n) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_horizontal = {}, n(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = n(".qodef-qi-tabs-horizontal"), this.holder.length && this.holder.each(function() {
                e.initItems(n(this))
            })
        },
        initItems: function(e) {
            e.children(".qodef-tabs-horizontal-content").each(function(e) {
                e += 1;
                var o = n(this),
                    t = o.attr("id"),
                    o = o.parent().find(".qodef-tabs-horizontal-navigation li:nth-child(" + e + ") a"),
                    e = o.attr("href"); - 1 < (t = "#" + t).indexOf(e) && o.attr("href", t)
            }), e.addClass("qodef--init").tabs()
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_horizontal.qodefTabsHorizontal = e
}(jQuery),
function(n) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_vertical = {}, n(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = n(".qodef-qi-tabs-vertical"), this.holder.length && this.holder.each(function() {
                e.initItems(n(this))
            })
        },
        initItems: function(e) {
            e.children(".qodef-tabs-vertical-content").each(function(e) {
                e += 1;
                var o = n(this),
                    t = o.attr("id"),
                    o = o.parent().find(".qodef-tabs-vertical-navigation li:nth-child(" + e + ") a"),
                    e = o.attr("href"); - 1 < (t = "#" + t).indexOf(e) && o.attr("href", t)
            }), e.addClass("qodef--init").tabs()
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_vertical.qodefTabsVertical = e
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_testimonials_slider = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_testimonials_slider.qodefSwiper = qodefAddonsCore.qodefSwiper
}(jQuery),
function(n) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_text_marquee = {}, n(document).ready(function() {
        i.init()
    });
    var i = {
        init: function() {
            this.holder = n(".qodef-qi-text-marquee"), this.holder.length && this.holder.each(function() {
                i.initItem(n(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-m-text");
            o.each(function(e) {
                n(this).data("x", 0)
            }), requestAnimationFrame(function() {
                i.loop(e, o, .05)
            })
        },
        inRange: function(e) {
            return qodefAddonsCore.scroll + qodefAddonsCore.windowHeight >= e.offset().top && qodefAddonsCore.scroll < e.offset().top + e.height()
        },
        loop: function(e, o, t) {
            if (!i.inRange(e)) return requestAnimationFrame(function() {
                i.loop(e, o, t)
            }), !1;
            o.each(function(e) {
                var o = n(this);
                o.css("transform", "translate3d(" + o.data("x") + "%, 0, 0)"), o.data("x", (o.data("x") - t).toFixed(2)), o.offset().left < -o.width() - 25 && o.data("x", 100 * Math.abs(e - 1))
            }), requestAnimationFrame(function() {
                i.loop(e, o, t)
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_text_marquee.qodefTextMarquee = i
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_timeline = {}, e(document).ready(function() {
        s.init()
    }), e(window).resize(function() {
        s.init()
    });
    var s = {
        init: function() {
            this.holder = e(".qodef-qi-timeline"), this.holder.length && this.holder.each(function() {
                s.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o, t, n, i, d, r, a;
            e.hasClass("qodef-timeline--horizontal") && (o = e.find(".qodef-e-item"), t = e.find(".qodef-grid-inner"), n = e.width(), i = o.length, r = d = 0, a = e.data("options"), 1 < i && (r = (d = 1440 < qodefAddonsCore.windowWidth ? n / a.colNum : 1366 < qodefAddonsCore.windowWidth ? n / a.colNum1440 : 1024 < qodefAddonsCore.windowWidth ? n / a.colNum1366 : 768 < qodefAddonsCore.windowWidth ? n / a.colNum1024 : 680 < qodefAddonsCore.windowWidth ? n / a.colNum768 : 480 < qodefAddonsCore.windowWidth ? n / a.colNum680 : n / a.colNum480) * i, e.data("movement", d), e.data("moved", 0), t.width(r), t.css("transform", "translateX(0)"), qodefAddonsCore.body.trigger("qi_addons_for_elementor_trigger_timeline_before_init_movement", [e, o]), s.initMovement(e)))
        },
        initMovement: function(o) {
            var t = o.data("movement"),
                n = o.find(".qodef-grid-inner"),
                i = o.width(),
                d = n.width(),
                e = o.find(".qodef-nav-prev"),
                r = o.find(".qodef-nav-next");
            e.off().on("click", function(e) {
                e.preventDefault();
                e = parseFloat(o.data("moved"));
                e < -1 && (n.css("transform", "translateX( " + (e = e + t) + "px)"), o.data("moved", e))
            }), r.off().on("click", function(e) {
                e.preventDefault();
                e = parseFloat(o.data("moved")); - e + t < d - i + 1 && (n.css("transform", "translateX( " + (e = e - t) + "px)"), o.data("moved", e))
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_timeline.qodefTimeline = s, qodefAddonsCore.shortcodes.qi_addons_for_elementor_timeline.qodefAppear = qodefAddonsCore.qodefAppear
}(jQuery),
function(i) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_typeout_text = {}, i(document).ready(function() {
        e.init()
    }), i(window).on("elementor/frontend/init", function() {
        elementorFrontend.isEditMode() && elementor.channels.editor.on("change", function() {
            e.init()
        })
    });
    var e = {
        init: function() {
            this.holder = i(".qodef-qi-typeout-text"), this.holder.length && this.holder.each(function() {
                e.initItem(i(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-typeout"),
                t = e.data("strings"),
                n = void 0 !== e.data("cursor") ? e.data("cursor") : "";
            o.find(".qodef-typeout-item").each(function() {
                t.push(i(this).text())
            }), o.each(function() {
                var e = i(this),
                    o = {
                        strings: t,
                        typeSpeed: 90,
                        backDelay: 700,
                        loop: !0,
                        contentType: "text",
                        loopCount: !1,
                        cursorChar: n
                    };
                e.hasClass("qodef--initialized") || (new Typed(e[0], o), e.addClass("qodef--initialized"))
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_typeout_text.qodefTypeoutText = e
}(jQuery),
function(n) {
    "use strict";
    var e = "qi_addons_for_elementor_blog_list";
    qodefAddonsCore.shortcodes[e] = {}, n(document).ready(function() {
        o.init()
    }), n(window).resize(function() {
        o.init()
    });
    var o = {
        init: function() {
            var e = n(".qodef-blog-shortcode");
            e.length && o.resize(e)
        },
        resize: function(e) {
            e = e.find(".qodef-e-media iframe");
            e.length && e.each(function() {
                var e = n(this),
                    o = e.attr("width"),
                    t = e.attr("height"),
                    t = e.width() / o * t;
                e.css("height", t)
            })
        }
    };
    qodefAddonsCore.shortcodes[e].qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup, qodefAddonsCore.shortcodes[e].qodefMasonryLayout = qodefAddonsCore.qodefMasonryLayout, qodefAddonsCore.shortcodes[e].qodefAddonsCoreResizeIframes = o
}(jQuery),
function() {
    "use strict";
    var e = "qi_addons_for_elementor_blog_slider";
    qodefAddonsCore.shortcodes[e] = {}, qodefAddonsCore.shortcodes[e].qodefSwiper = qodefAddonsCore.qodefSwiper, qodefAddonsCore.shortcodes[e].qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button = {}, e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-qi-woo-shortcode-add-to-cart"), this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(s) {
            qodefAddonsCore.shortcodes.qi_addons_for_elementor_button.qodefButton.init(s), e("body").on("added_to_cart", function(e) {
                var o = s.find(".added_to_cart:not(.qodef-qi-button)");
                if (o.length) {
                    for (var t = o.siblings(".add_to_cart_button"), n = ["button", "product_type_simple", "add_to_cart_button", "ajax_add_to_cart", "added"], i = t.attr("class"), d = t.find(".qodef-m-border"), r = t.find(".qodef-m-inner-border"), t = t.find(".qodef-m-icon"), a = 0; a < n.length; a++) i = i.replace(n[a], "");
                    o.addClass(i), o.wrapInner('<span class="qodef-m-text">'), d.length && (d = d.clone(), o.append(d)), t.length && (t = t.clone(), o.append(t)), r.length && (r = r.clone(), o.append(r))
                }
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button.changeViewCart = o
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_category_list = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_category_list.qodefMasonryLayout = qodefAddonsCore.qodefMasonryLayout
}(jQuery),
function(e) {
    "use strict";
    var o = "qi_addons_for_elementor_product_list";
    qodefAddonsCore.shortcodes[o] = {}, qodefAddonsCore.shortcodes[o].qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup, qodefAddonsCore.shortcodes[o].qodefMasonryLayout = qodefAddonsCore.qodefMasonryLayout, e(document).ready(function() {
        t.init()
    });
    var t = {
        init: function() {
            this.holder = e(".qodef-qi-woo-shortcode-product-list"), this.holder.length && this.holder.each(function() {
                t.initItem(e(this))
            })
        },
        initItem: function(e) {
            qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button.changeViewCart.initItem(e)
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_list.changeViewCart = t
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider = {}, qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider.qodefSwiper = qodefAddonsCore.qodefSwiper, e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-qi-woo-shortcode-product-slider"), this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button.changeViewCart.initItem(e)
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider.changeViewCart = o
}(jQuery),
function(e) {
    "use strict";
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-qi-interactive-banner"), this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o, t;
            e.hasClass("qodef-layout--from-bottom") && (t = e.find(".qodef-m-text-holder"), o = e.find(".qodef-m-movement"), t = t.outerHeight(!0), o.css("transform", "translateY(" + t + "px) translateZ(0)"), setTimeout(function() {
                e.addClass("qodef--visible")
            }, 400))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_banner.qodefInteractiveBannerFromBottom = o
}(jQuery),
function(e) {
    "use strict";
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-qi-interactive-banner"), this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o, t;
            e.hasClass("qodef-layout--revealing") && (t = e.find(".qodef-m-content-inner > .qodef-m-text"), o = e.find(".qodef-m-button"), t = t.outerHeight(!0), o.css("transform", "translateY(-" + t + "px) translateZ(0)"), setTimeout(function() {
                e.addClass("qodef--visible")
            }, 400))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_banner.qodefInteractiveBannerReveal = o
}(jQuery),
function(n) {
    "use strict";
    n(document).on("qi_addons_for_elementor_trigger_timeline_before_init_movement", function(e, o, t) {
        o.hasClass("qodef-timeline-layout--horizontal-alternating") && i.init(t)
    });
    var i = {
        init: function(e) {
            var t = 0;
            e.length && (e.each(function() {
                var e = n(this),
                    o = e.find(".qodef-e-content-holder"),
                    e = e.find(".qodef-e-top-holder"),
                    o = o.height();
                o < e.height() && (o = e.height()), t < o && (t = o)
            }), e.each(function() {
                var e = n(this),
                    o = e.find(".qodef-e-content-holder");
                e.find(".qodef-e-top-holder").height(t), o.height(t)
            }))
        }
    }
}(jQuery),
function(r) {
    "use strict";
    r(document).on("qi_addons_for_elementor_trigger_timeline_before_init_movement", function(e, o, t) {
        o.hasClass("qodef-timeline-layout--horizontal-standard") && n.init(o, t)
    });
    var n = {
        init: function(e, o) {
            var n = 0,
                i = 0,
                d = parseInt(o.find(".qodef-e-top-holder").css("paddingBottom")),
                e = e.find(".qodef-nav-prev, .qodef-nav-next");
            o.length && (o.each(function() {
                var e = r(this),
                    o = e.find(".qodef-e-content-holder").height(),
                    e = e.find(".qodef-e-top-holder").height();
                n < e && (n = e), i < o && (i = o)
            }), o.each(function() {
                var e = r(this),
                    o = e.find(".qodef-e-content-holder"),
                    t = e.find(".qodef-e-top-holder"),
                    e = e.find(".qodef-e-line-holder");
                t.height(n), o.height(i), e.css("top", n + d)
            }), e.css("top", n + d))
        }
    }
}(jQuery),
function(i) {
    "use strict";
    i(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = i(".qodef-qi-woo-shortcode-product-list"), this.holder.length && this.holder.each(function() {
                e.initItem(i(this))
            })
        },
        initItem: function(e) {
            !e.hasClass("qodef-item-layout--info-below-swap") || (e = e.find(".qodef-grid-item")).length && e.each(function() {
                var e = i(this).find(".qodef-e-swap-holder"),
                    o = e.find(".qodef-woo-product-price span"),
                    t = e.find(".qodef-e-to-swap .qodef-qi-button"),
                    n = t.outerWidth(),
                    t = t.outerHeight();
                n < o.width() && (n = o.width()), t < o.height() && (t = o.height()), e.css({
                    width: n += 2,
                    height: t
                }), e.addClass("qodef--initialized")
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_list.qodefProductListSwap = e
}(jQuery),
function(i) {
    "use strict";
    i(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = i(".qodef-qi-woo-shortcode-product-slider"), this.holder.length && this.holder.each(function() {
                e.initItem(i(this))
            })
        },
        initItem: function(e) {
            !e.hasClass("qodef-item-layout--info-below-swap") || (e = e.find(".qodef-e")).length && e.each(function() {
                var e = i(this).find(".qodef-e-swap-holder"),
                    o = e.find(".qodef-woo-product-price span"),
                    t = e.find(".qodef-e-to-swap .qodef-qi-button"),
                    n = t.outerWidth(),
                    t = t.outerHeight();
                n < o.width() && (n = o.width()), t < o.height() && (t = o.height()), e.css({
                    width: n += 2,
                    height: t
                }), e.addClass("qodef--initialized")
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider.qodefProductListSwap = e
}(jQuery);;
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(d) {
    var s, i = 0,
        a = Array.prototype.slice;
    return d.cleanData = (s = d.cleanData, function(t) {
        for (var e, i, n = 0; null != (i = t[n]); n++) try {
            (e = d._data(i, "events")) && e.remove && d(i).triggerHandler("remove")
        } catch (t) {}
        s(t)
    }), d.widget = function(t, i, e) {
        var n, s, o, r, a = {},
            u = t.split(".")[0];
        return t = t.split(".")[1], e || (e = i, i = d.Widget), d.expr[":"][(n = u + "-" + t).toLowerCase()] = function(t) {
            return !!d.data(t, n)
        }, d[u] = d[u] || {}, s = d[u][t], o = d[u][t] = function(t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, d.extend(o, s, {
            version: e.version,
            _proto: d.extend({}, e),
            _childConstructors: []
        }), (r = new i).options = d.widget.extend({}, r.options), d.each(e, function(e, n) {
            function s() {
                return i.prototype[e].apply(this, arguments)
            }

            function o(t) {
                return i.prototype[e].apply(this, t)
            }
            d.isFunction(n) ? a[e] = function() {
                var t, e = this._super,
                    i = this._superApply;
                return this._super = s, this._superApply = o, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
            } : a[e] = n
        }), o.prototype = d.widget.extend(r, {
            widgetEventPrefix: s && r.widgetEventPrefix || t
        }, a, {
            constructor: o,
            namespace: u,
            widgetName: t,
            widgetFullName: n
        }), s ? (d.each(s._childConstructors, function(t, e) {
            var i = e.prototype;
            d.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }), delete s._childConstructors) : i._childConstructors.push(o), d.widget.bridge(t, o), o
    }, d.widget.extend = function(t) {
        for (var e, i, n = a.call(arguments, 1), s = 0, o = n.length; s < o; s++)
            for (e in n[s]) i = n[s][e], n[s].hasOwnProperty(e) && void 0 !== i && (d.isPlainObject(i) ? t[e] = d.isPlainObject(t[e]) ? d.widget.extend({}, t[e], i) : d.widget.extend({}, i) : t[e] = i);
        return t
    }, d.widget.bridge = function(o, e) {
        var r = e.prototype.widgetFullName || o;
        d.fn[o] = function(i) {
            var t = "string" == typeof i,
                n = a.call(arguments, 1),
                s = this;
            return t ? this.each(function() {
                var t, e = d.data(this, r);
                return "instance" === i ? (s = e, !1) : e ? d.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, n)) !== e && void 0 !== t ? (s = t && t.jquery ? s.pushStack(t.get()) : t, !1) : void 0 : d.error("no such method '" + i + "' for " + o + " widget instance") : d.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'")
            }) : (n.length && (i = d.widget.extend.apply(null, [i].concat(n))), this.each(function() {
                var t = d.data(this, r);
                t ? (t.option(i || {}), t._init && t._init()) : d.data(this, r, new e(i, this))
            })), s
        }
    }, d.Widget = function() {}, d.Widget._childConstructors = [], d.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = d(e || this.defaultElement || this)[0], this.element = d(e), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = d(), this.hoverable = d(), this.focusable = d(), e !== this && (d.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }), this.document = d(e.style ? e.ownerDocument : e.document || e), this.window = d(this.document[0].defaultView || this.document[0].parentWindow)), this.options = d.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: d.noop,
        _getCreateEventData: d.noop,
        _create: d.noop,
        _init: d.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(d.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: d.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, n, s, o = t;
            if (0 === arguments.length) return d.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (n = o[t] = d.widget.extend({}, this.options[t]), s = 0; s < i.length - 1; s++) n[i[s]] = n[i[s]] || {}, n = n[i[s]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = e
                }
            return this._setOptions(o), this
        },
        _setOptions: function(t) {
            for (var e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(s, o, t) {
            var r, a = this;
            "boolean" != typeof s && (t = o, o = s, s = !1), t ? (o = r = d(o), this.bindings = this.bindings.add(o)) : (t = o, o = this.element, r = this.widget()), d.each(t, function(t, e) {
                function i() {
                    if (s || !0 !== a.options.disabled && !d(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? a[e] : e).apply(a, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || d.guid++);
                var n = t.match(/^([\w:-]*)\s*(.*)$/),
                    t = n[1] + a.eventNamespace,
                    n = n[2];
                n ? r.delegate(n, t, i) : o.bind(t, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e), this.bindings = d(this.bindings.not(t).get()), this.focusable = d(this.focusable.not(t).get()), this.hoverable = d(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    d(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    d(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    d(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    d(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var n, s, o = this.options[t];
            if (i = i || {}, (e = d.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], s = e.originalEvent)
                for (n in s) n in e || (e[n] = s[n]);
            return this.element.trigger(e, i), !(d.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, d.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(o, r) {
        d.Widget.prototype["_" + o] = function(e, t, i) {
            var n = (t = "string" == typeof t ? {
                    effect: t
                } : t) ? !0 !== t && "number" != typeof t && t.effect || r : o,
                s = !d.isEmptyObject(t = "number" == typeof(t = t || {}) ? {
                    duration: t
                } : t);
            t.complete = i, t.delay && e.delay(t.delay), s && d.effects && d.effects.effect[n] ? e[o](t) : n !== o && e[n] ? e[n](t.duration, t.easing, i) : e.queue(function(t) {
                d(this)[o](), i && i.call(e[0]), t()
            })
        }
    }), d.widget
});;
/*!
 * jQuery UI Tabs 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
}(function(l) {
    return l.widget("ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (a = /#.*$/, function(t) {
            var e = (t = t.cloneNode(!1)).href.replace(a, ""),
                i = location.href.replace(a, "");
            try {
                e = decodeURIComponent(e)
            } catch (t) {}
            try {
                i = decodeURIComponent(i)
            } catch (t) {}
            return 1 < t.hash.length && e === i
        }),
        _create: function() {
            var e = this,
                t = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible), this._processTabs(), t.active = this._initialActive(), l.isArray(t.disabled) && (t.disabled = l.unique(t.disabled.concat(l.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(t.active) : this.active = l(), this._refresh(), this.active.length && this.load(t.active)
        },
        _initialActive: function() {
            var i = this.options.active,
                t = this.options.collapsible,
                a = location.hash.substring(1);
            return null === i && (a && this.tabs.each(function(t, e) {
                if (l(e).attr("aria-controls") === a) return i = t, !1
            }), null !== (i = null === i ? this.tabs.index(this.tabs.filter(".ui-tabs-active")) : i) && -1 !== i || (i = !!this.tabs.length && 0)), !1 !== i && -1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0), i = !t && !1 === i && this.anchors.length ? 0 : i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : l()
            }
        },
        _tabKeydown: function(t) {
            var e = l(this.document[0].activeElement).closest("li"),
                i = this.tabs.index(e),
                a = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case l.ui.keyCode.RIGHT:
                    case l.ui.keyCode.DOWN:
                        i++;
                        break;
                    case l.ui.keyCode.UP:
                    case l.ui.keyCode.LEFT:
                        a = !1, i--;
                        break;
                    case l.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;
                    case l.ui.keyCode.HOME:
                        i = 0;
                        break;
                    case l.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                    case l.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, a), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === l.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === l.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === l.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(t, e) {
            var i = this.tabs.length - 1;
            for (; - 1 !== l.inArray(t = (t = i < t ? 0 : t) < 0 ? i : t, this.options.disabled);) t = e ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function(t, e) {
            "active" !== t ? "disabled" !== t ? (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)) : this._setupDisabled(e) : this._activate(e)
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                e = this.tablist.children(":has(a[href])");
            t.disabled = l.map(e.filter(".ui-state-disabled"), function(t) {
                return e.index(t)
            }), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !l.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = l()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = l()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var o = this,
                t = this.tabs,
                e = this.anchors,
                i = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) {
                l(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                l(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return l("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = l(), this.anchors.each(function(t, e) {
                var i, a, s, n = l(e).uniqueId().attr("id"),
                    r = l(e).closest("li"),
                    h = r.attr("aria-controls");
                o._isLocal(e) ? (s = (i = e.hash).substring(1), a = o.element.find(o._sanitizeSelector(i))) : (s = r.attr("aria-controls") || l({}).uniqueId()[0].id, (a = o.element.find(i = "#" + s)).length || (a = o._createPanel(s)).insertAfter(o.panels[t - 1] || o.tablist), a.attr("aria-live", "polite")), a.length && (o.panels = o.panels.add(a)), h && r.data("ui-tabs-aria-controls", h), r.attr({
                    "aria-controls": s,
                    "aria-labelledby": n
                }), a.attr("aria-labelledby", n)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return l("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            l.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var e, i = 0; e = this.tabs[i]; i++) !0 === t || -1 !== l.inArray(i, t) ? l(e).addClass("ui-state-disabled").attr("aria-disabled", "true") : l(e).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var i = {};
            t && l.each(t.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, e = this.element.parent();
            "fill" === t ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = l(this),
                    e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= l(this).outerHeight(!0)
            }), this.panels.each(function() {
                l(this).height(Math.max(0, i - l(this).innerHeight() + l(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() {
                i = Math.max(i, l(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var e = this.options,
                i = this.active,
                a = l(t.currentTarget).closest("li"),
                s = a[0] === i[0],
                n = s && e.collapsible,
                r = n ? l() : this._getPanelForTab(a),
                h = i.length ? this._getPanelForTab(i) : l(),
                i = {
                    oldTab: i,
                    oldPanel: h,
                    newTab: n ? l() : a,
                    newPanel: r
                };
            t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || s && !e.collapsible || !1 === this._trigger("beforeActivate", t, i) || (e.active = !n && this.tabs.index(a), this.active = s ? l() : a, this.xhr && this.xhr.abort(), h.length || r.length || l.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(a), t), this._toggle(t, i))
        },
        _toggle: function(t, e) {
            var i = this,
                a = e.newPanel,
                s = e.oldPanel;

            function n() {
                i.running = !1, i._trigger("activate", t, e)
            }

            function r() {
                e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && i.options.show ? i._show(a, i.options.show, n) : (a.show(), n())
            }
            this.running = !0, s.length && this.options.hide ? this._hide(s, this.options.hide, function() {
                e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r()
            }) : (e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s.hide(), r()), s.attr("aria-hidden", "true"), e.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && s.length ? e.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === l(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), e.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var t = this._findActive(t);
            t[0] !== this.active[0] && (t = (t = !t.length ? this.active : t).find(".ui-tabs-anchor")[0], this._eventHandler({
                target: t,
                currentTarget: t,
                preventDefault: l.noop
            }))
        },
        _findActive: function(t) {
            return !1 === t ? l() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return t = "string" == typeof t ? this.anchors.index(this.anchors.filter("[href$='" + t + "']")) : t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                l.data(this, "ui-tabs-destroy") ? l(this).remove() : l(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var t = l(this),
                    e = t.data("ui-tabs-aria-controls");
                e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var t = this.options.disabled;
            !1 !== t && (t = void 0 !== i && (i = this._getIndex(i), l.isArray(t) ? l.map(t, function(t) {
                return t !== i ? t : null
            }) : l.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(t))
        },
        disable: function(t) {
            var e = this.options.disabled;
            if (!0 !== e) {
                if (void 0 === t) e = !0;
                else {
                    if (t = this._getIndex(t), -1 !== l.inArray(t, e)) return;
                    e = l.isArray(e) ? l.merge([t], e).sort() : [t]
                }
                this._setupDisabled(e)
            }
        },
        load: function(t, a) {
            t = this._getIndex(t);

            function s(t, e) {
                "abort" === e && n.panels.stop(!1, !0), i.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
            }
            var n = this,
                i = this.tabs.eq(t),
                t = i.find(".ui-tabs-anchor"),
                r = this._getPanelForTab(i),
                h = {
                    tab: i,
                    panel: r
                };
            this._isLocal(t[0]) || (this.xhr = l.ajax(this._ajaxSettings(t, a, h)), this.xhr && "canceled" !== this.xhr.statusText && (i.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done(function(t, e, i) {
                setTimeout(function() {
                    r.html(t), n._trigger("load", a, h), s(i, e)
                }, 1)
            }).fail(function(t, e) {
                setTimeout(function() {
                    s(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, a) {
            var s = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, e) {
                    return s._trigger("beforeLoad", i, l.extend({
                        jqXHR: t,
                        ajaxSettings: e
                    }, a))
                }
            }
        },
        _getPanelForTab: function(t) {
            t = l(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + t))
        }
    });
    var a
});