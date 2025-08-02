(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [797], {
        57: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => _
            });
            var r = a(5155),
                n = a(2115),
                s = a(6874),
                i = a.n(s),
                l = a(6766),
                o = a(8405),
                c = a(9166);
            let d = [{
                    name: "Home",
                    href: "/",
                    active: !1
                }, {
                    name: "Ecosystem",
                    href: "#scrolling-text",
                    active: !1
                }, {
                    name: "Product",
                    href: "#parallax",
                    active: !1
                }, {
                    name: "Gem System",
                    href: "#planet-slider",
                    active: !1
                }],
                m = () => {
                    let [e, t] = (0, n.useState)(!1), [a, s] = (0, n.useState)(!0), c = (0, n.useRef)(0), m = (0, o.A)();
                    (0, n.useEffect)(() => {
                        let e = () => {
                            let e = window.scrollY,
                                t = c.current > e || e < 10;
                            c.current = e, s(t)
                        };
                        return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                    }, []);
                    let _ = (e, a) => {
                        if (e.preventDefault(), t(!1), a.startsWith("#")) {
                            let e = a.substring(1),
                                t = document.getElementById(e);
                            if (t) {
                                let e = t.offsetTop - 0;
                                window.scrollTo({
                                    top: e,
                                    behavior: "smooth"
                                })
                            }
                        } else window.location.href = a
                    };
                    return (0, r.jsx)("header", {
                        className: "fixed top-0 left-0 w-full z-50 transition-transform duration-300 ".concat(a ? "translate-y-0" : "-translate-y-full"),
                        children: (0, r.jsxs)("div", {
                            className: "".concat(m ? "bg-[rgba(30,30,30,0.24)] backdrop-blur-lg" : "lg:px-4 lg:py-4"),
                            children: [(0, r.jsxs)("div", {
                                className: "max-w-7xl mx-auto rounded-lg bg-[#121212] flex justify-between items-center p-4 py-2 pl-5 lg:pr-2",
                                children: [(0, r.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, r.jsx)("div", {
                                        className: "relative",
                                        children: (0, r.jsx)(i(), {
                                            href: "#",
                                            children: (0, r.jsx)(l.default, {
                                                src: "/images/logo.svg",
                                                alt: "logo",
                                                width: 115,
                                                height: 20
                                            })
                                        })
                                    })
                                }), (0, r.jsx)("nav", {
                                    className: "".concat(m ? "hidden" : "flex", " items-center gap-8"),
                                    children: d.map(e => (0, r.jsx)(i(), {
                                        href: e.href,
                                        className: "font-mono text-base ".concat(e.active ? "text-white" : "text-[#CACACA]", " hover:text-white transition-colors"),
                                        onClick: t => _(t, e.href),
                                        children: e.name
                                    }, e.name))
                                }), (0, r.jsxs)("div", {
                                    className: "flex items-center gap-4",
                                    children: [(0, r.jsx)("button", {
                                        className: "py-2 lg:py-3 px-4 rounded-lg bg-[rgba(30,30,30,0.8)] border border-white/15 text-white font-mono text-sm hover:bg-white/10 transition-colors",
                                        style: {
                                            boxShadow: "inset 0px 0px 20px 0px rgba(255, 255, 255, 0.1)"
                                        },
                                        children: "Get Started"
                                    }), m && (0, r.jsx)("button", {
                                        className: "text-white p-1",
                                        onClick: () => t(!e),
                                        children: (0, r.jsx)(l.default, {
                                            src: e ? "/images/menu-icon.svg" : "/images/menu-white-icon.svg",
                                            alt: "Menu",
                                            width: 20,
                                            height: 20
                                        })
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "".concat(m ? "" : "hidden", " overflow-hidden transition-all duration-300 ease-in-out max-w-7xl mx-auto lg:mt-2 ").concat(e ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"),
                                children: (0, r.jsx)("div", {
                                    className: "p-4 pt-0",
                                    children: (0, r.jsx)("nav", {
                                        className: "flex flex-col",
                                        children: (0, r.jsx)("div", {
                                            className: "flex justify-center space-x-10 py-2",
                                            children: d.slice(1, 4).map(e => (0, r.jsx)(i(), {
                                                href: e.href,
                                                className: "font-mono text-sm ".concat(e.active ? "text-white" : "text-[#CACACA]", " hover:text-white transition-colors"),
                                                onClick: t => _(t, e.href),
                                                children: e.name
                                            }, e.name))
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                _ = (0, n.memo)(() => (0, r.jsx)(c.A, {
                    children: (0, r.jsx)(m, {})
                }))
        },
        243: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => o
            });
            var r = a(5155),
                n = a(2115),
                s = a(2253),
                i = a.n(s);
            let l = e => {
                    let {
                        title: t,
                        content: a,
                        isOpen: s,
                        onClick: l
                    } = e, o = (0, n.useRef)(null), [c, d] = (0, n.useState)(0);
                    return (0, n.useEffect)(() => {
                        o.current && (s ? d(o.current.scrollHeight) : d(0))
                    }, [s]), (0, r.jsxs)("div", {
                        className: "".concat(i().faq__item, " ").concat(s ? i().faq__item_open : ""),
                        onClick: l,
                        children: [(0, r.jsxs)("div", {
                            className: i().faq__itemHeader,
                            children: [(0, r.jsx)("h3", {
                                className: i().faq__itemTitle,
                                children: t
                            }), (0, r.jsx)("svg", {
                                className: "".concat(i().faq__itemArrow, " ").concat(s ? i().faq__itemArrow_open : ""),
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, r.jsx)("path", {
                                    d: "M6 9L12 15L18 9",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: i().faq__itemContentWrapper,
                            style: {
                                height: "".concat(c, "px")
                            },
                            children: (0, r.jsx)("div", {
                                ref: o,
                                className: i().faq__itemContentInner,
                                children: a && (0, r.jsx)("p", {
                                    className: i().faq__itemContent,
                                    children: a
                                })
                            })
                        })]
                    })
                },
                o = n.memo(() => {
                    let [e, t] = (0, n.useState)(null), a = (0, n.useMemo)(() => [{
                        title: "How is DeCenter different from traditional cloud platforms?",
                        content: "DeCenter combines real-world data centers operated by IPTP with community-powered compute nodes (e.g., PCs, phones, VPS). This hybrid architecture ensures low latency, transparency, and global scalability – beyond what centralized providers offer."
                    }, {
                        title: "Is it safe to share my device with DeCenter?",
                        content: "Yes. Guardian Nodes manage key distribution, monitor behavior, and enforce security standards. You maintain full control over your device and can opt in/out anytime."
                    }, {
                        title: "How is RWA Vault different from DeFi?",
                        content: "Unlike traditional DeFi protocols based on synthetic yields, the RWA Vault is backed by physical assets – like real data centers – and actual service revenue from AI builders and compute users."
                    }, {
                        title: "Why do AI models need ethical auditing?",
                        content: "As AI expands into sensitive areas like education, healthcare, and media, unchecked outputs can be biased, offensive, or even dangerous. DeCCM ensures AI agents meet ethical standards before deployment."
                    }, {
                        title: "What is the ELO Score and how does it affect me?",
                        content: "ELO is your personal reputation score as an auditor. Accurate, consistent reviews raise your ELO, unlocking harder tasks and better rewards."
                    }], []), s = a => {
                        console.log("FAQ Toggle:", {
                            index: a,
                            currentOpenItem: e
                        }), t(e === a ? null : a)
                    };
                    return (0, r.jsxs)("section", {
                        className: i().faq,
                        children: [(0, r.jsx)("h2", {
                            className: i().faq__title,
                            "data-aos": "fade-up",
                            "data-aos-delay": "100",
                            children: "FAQ"
                        }), (0, r.jsx)("div", {
                            className: i().faq__container,
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                            children: a.map((t, a) => (0, r.jsx)(l, {
                                title: t.title,
                                content: t.content,
                                isOpen: e === a,
                                onClick: () => s(a)
                            }, "faq-item-".concat(a)))
                        })]
                    })
                })
        },
        366: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => o
            });
            var r = a(5155),
                n = a(2115),
                s = a(8676),
                i = a.n(s);
            let l = [30, 35, 28, 32],
                o = () => {
                    let e = (0, n.useRef)([]),
                        t = (0, n.useRef)(!1),
                        a = (0, n.useRef)(null),
                        [s, o] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        o(!0)
                    }, []), (0, n.useEffect)(() => {
                        !t.current && (t.current = !0, e.current.forEach((e, t) => {
                            if (e) {
                                let a = e.innerHTML;
                                e.innerHTML = a + a, e.style.animationDuration = "".concat(l[t], "s")
                            }
                        }), a.current && a.current.querySelectorAll(".".concat(i().scrollingRow)).forEach(e => {
                            e.style.animationPlayState = "running"
                        }))
                    }, [s]), (0, r.jsx)("section", {
                        id: "scrolling-text",
                        className: "py-16 pb-0 md:pt-16 lg:pt-24 md:mt-4",
                        children: (0, r.jsxs)("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: [(0, r.jsxs)("div", {
                                className: "text-center mb-12 md:mb-12",
                                "data-aos": "fade-up",
                                children: [(0, r.jsxs)("h2", {
                                    className: "font-mono text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-[#494949] mb-4 tracking-[-0.024em]",
                                    children: ["DeCenter - a next-gen cloud infra merging", (0, r.jsx)("br", {}), "datacenters, community compute, and Web3"]
                                }), (0, r.jsx)("p", {
                                    className: "font-mono text-white/40 text-sm md:text-xl sm:text-sm max-w-4xl mx-auto tracking-[-0.028em] leading-relaxed",
                                    children: "NebulaMesh merges cutting-edge cloud computing (ContainerMesh) with community-driven AI validation (DeCCM), creating a decentralized, transparent, and scalable infrastructure for the AI era."
                                })]
                            }), (0, r.jsx)("div", {
                                className: i().imageWrapper,
                                children: (0, r.jsx)("div", {
                                    className: i().videoWrapper,
                                    children: (0, r.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        playsInline: !0,
                                        loop: !0,
                                        preload: "auto",
                                        children: (0, r.jsx)("source", {
                                            src: "/videos/decenter-video.mp4",
                                            type: "video/mp4"
                                        })
                                    })
                                })
                            })]
                        })
                    })
                }
        },
        459: e => {
            e.exports = {
                partnerLogos__container: "Hero_partnerLogos__container__cwZfN",
                partnerLogos__inner: "Hero_partnerLogos__inner__BgYfa",
                slideRight: "Hero_slideRight__BRdCy",
                partnerLogos__logo: "Hero_partnerLogos__logo__X2Bth",
                partnerLogos__logoImage: "Hero_partnerLogos__logoImage__c8__2",
                partnerLogos: "Hero_partnerLogos__5oXqn"
            }
        },
        507: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => h
            });
            var r = a(5155);
            a(2115);
            var n = a(6874),
                s = a.n(n),
                i = a(6766),
                l = a(7677),
                o = a(7269),
                c = a(9434),
                d = a(5763),
                m = a.n(d),
                _ = a(8405),
                p = a(9166);
            a(2252), a(9408), a(6970);
            let u = [{
                    id: "1",
                    title: "Beyond the Cloud: More Control and Less Cost with DEPIN",
                    date: "Jun 03, 2025",
                    imageUrl: "/images/blog/blog-1.png",
                    slug: "https://news.decenter.ai/latest/beyond-the-cloud-more-control-and-less-cost-with-depin"
                }, {
                    id: "2",
                    title: "Navigating the Double-Edged Sword: Ethical AI in Education and Healthcare",
                    date: "Jun 03, 2025",
                    imageUrl: "/images/blog/blog-2.png",
                    slug: "https://news.decenter.ai/latest/beyond-the-cloud-more-control-and-less-cost-with-depin-69r57"
                }, {
                    id: "3",
                    title: "Unpacking AI: How Models Work – And Why Speedy Connections Are Critical",
                    date: "Jun 03, 2025",
                    imageUrl: "/images/blog/blog-3.png",
                    slug: "https://news.decenter.ai/latest/beyond-the-cloud-more-control-and-less-cost-with-depin-69r57-ldz2g"
                }],
                g = e => {
                    let {
                        posts: t = u,
                        className: a
                    } = e, n = (0, _.A)();
                    return (0, r.jsxs)("section", {
                        className: (0, c.cn)(m().blog, a),
                        children: [(0, r.jsx)("h2", {
                            className: m().blog__title,
                            "data-aos": "fade-up",
                            "data-aos-delay": "100",
                            children: "DeCenter Blog"
                        }), (0, r.jsx)("div", {
                            className: m().blog__slider,
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                            children: (0, r.jsx)(l.RC, {
                                modules: [o.Vx, o.dK],
                                spaceBetween: 24,
                                slidesPerView: n ? "auto" : 3,
                                centeredSlides: !!n,
                                pagination: {
                                    clickable: !0,
                                    bulletActiveClass: "swiper-pagination-bullet-active",
                                    bulletClass: "swiper-pagination-bullet",
                                    renderBullet: function (e, t) {
                                        return '<span class="'.concat(t, '"></span>')
                                    }
                                },
                                navigation: !0,
                                className: m().blog__swiperContainer,
                                centerInsufficientSlides: !0,
                                children: t.map(e => (0, r.jsx)(l.qr, {
                                    className: m().blog__slide,
                                    children: (0, r.jsx)(x, {
                                        post: e
                                    })
                                }, e.id))
                            })
                        }), (0, r.jsx)(s(), {
                            href: "https://news.decenter.ai/",
                            className: m().blog__button,
                            "data-aos": "fade-up",
                            "data-aos-delay": "300",
                            children: "Visit our Blog"
                        })]
                    })
                },
                x = e => {
                    let {
                        post: t
                    } = e;
                    return (0, r.jsxs)(s(), {
                        href: "".concat(t.slug),
                        target: "_blank",
                        className: m().blog__card,
                        children: [(0, r.jsx)("div", {
                            className: m().blog__cardImageContainer,
                            children: (0, r.jsx)(i.default, {
                                src: t.imageUrl,
                                alt: t.title,
                                fill: !0,
                                className: m().blog__cardImage
                            })
                        }), (0, r.jsx)("h3", {
                            className: m().blog__cardTitle,
                            children: t.title
                        }), (0, r.jsx)("div", {
                            className: m().blog__cardDate,
                            children: (0, r.jsx)("span", {
                                children: t.date
                            })
                        })]
                    })
                },
                h = e => (0, r.jsx)(p.A, {
                    children: (0, r.jsx)(g, {
                        ...e
                    })
                })
        },
        689: e => {
            e.exports = {
                container: "WhatIsDeCenter_container__puPR6",
                illustration: "WhatIsDeCenter_illustration__qXqNT",
                isometricScene: "WhatIsDeCenter_isometricScene__Na5AB",
                serverBlock: "WhatIsDeCenter_serverBlock__FzfLe",
                blockFace: "WhatIsDeCenter_blockFace__STsdT",
                blockTop: "WhatIsDeCenter_blockTop__CXUe9",
                blockSide: "WhatIsDeCenter_blockSide__0NXSB",
                block1: "WhatIsDeCenter_block1__ZKws9",
                block2: "WhatIsDeCenter_block2__ROx4k",
                block3: "WhatIsDeCenter_block3___G7p9",
                cylinderBase: "WhatIsDeCenter_cylinderBase__y1jCp",
                cylinderTop: "WhatIsDeCenter_cylinderTop__jsGHH",
                cylinderBody: "WhatIsDeCenter_cylinderBody__iePQd",
                logo: "WhatIsDeCenter_logo__SQLDZ",
                connectionPoint: "WhatIsDeCenter_connectionPoint__7OTMO",
                pulse: "WhatIsDeCenter_pulse__EWE_k",
                point1: "WhatIsDeCenter_point1__m9_r8",
                point2: "WhatIsDeCenter_point2__rnJf5",
                point3: "WhatIsDeCenter_point3__RpoVQ",
                point4: "WhatIsDeCenter_point4__89xlI",
                point5: "WhatIsDeCenter_point5___V5FT",
                point6: "WhatIsDeCenter_point6__S4_sE",
                connectionLine: "WhatIsDeCenter_connectionLine__fU6vq",
                dataFlow: "WhatIsDeCenter_dataFlow__z1Y8W",
                line1: "WhatIsDeCenter_line1__BBk3T",
                line2: "WhatIsDeCenter_line2__99piZ",
                line3: "WhatIsDeCenter_line3__6H_AZ"
            }
        },
        767: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => m
            });
            var r = a(5155),
                n = a(2115),
                s = a(1996);
            a(6298), a(4202);
            var i = a(769),
                l = a.n(i),
                o = a(6766);
            let c = [{
                    key: "Nodus",
                    label: "Nodus",
                    bgColor: "bg-blue-400",
                    textColor: "text-blue-100",
                    title: "Nodus – DePIN Quest",
                    description: "Refine and enhance datasets for better AI.",
                    image: "/images/planets/planet_1.png"
                }, {
                    key: "Elaris",
                    label: "Elaris",
                    bgColor: "bg-yellow-600",
                    textColor: "text-yellow-100",
                    title: "Elaris - Ethics Quest",
                    description: "Start data collection with community collaboration.",
                    image: "/images/planets/planet_2.png"
                }, {
                    key: "Chrona",
                    label: "Chrona",
                    bgColor: "bg-yellow-600",
                    textColor: "text-yellow-100",
                    title: "Chrona - Daily Quest",
                    description: "Validate data integrity and diversity",
                    image: "/images/planets/planet_3.png"
                }, {
                    key: "Questara",
                    label: "Questara",
                    bgColor: "bg-yellow-600",
                    textColor: "text-yellow-100",
                    title: "Questara – Function Quest",
                    description: "Audit AI outputs for fairness and transparency. ",
                    image: "/images/planets/planet_4.png"
                }, {
                    key: "Evalora",
                    label: "Evalora",
                    bgColor: "bg-yellow-600",
                    textColor: "text-yellow-100",
                    title: "Evalora – Audit Quest",
                    description: "Reward contributions and elevate AI standards.",
                    image: "/images/planets/planet_5.png"
                }],
                d = (0, n.memo)(() => {
                    let [e, t] = (0, n.useState)(1), [a, i] = (0, n.useState)(!1), [d, m] = (0, n.useState)(!1), _ = (0, n.useRef)(null), p = (0, n.useRef)(null), u = (0, n.useRef)(null), g = (0, n.useRef)(null), x = (0, n.useRef)(null);
                    (0, n.useEffect)(() => {
                        i(!1), m(!1), u.current && (u.current.pause(), u.current.currentTime = 0)
                    }, []), (0, n.useEffect)(() => {
                        let e = (() => {
                            let e = new IntersectionObserver(e => {
                                let [t] = e;
                                !t.isIntersecting || a || d || (i(!0), u.current && (u.current.currentTime = 0, u.current.play().catch(e => {
                                    console.error("Video play failed:", e)
                                })), x.current = setTimeout(() => {
                                    i(!1), m(!0), setTimeout(() => {}, 500)
                                }, 8e3))
                            }, {
                                threshold: .5
                            });
                            return g.current && e.observe(g.current), e
                        })();
                        return () => {
                            e.disconnect(), x.current && clearTimeout(x.current)
                        }
                    }, []), (0, n.useEffect)(() => {
                        let e = () => {
                            document.hidden && u.current && a ? u.current.pause() : !document.hidden && u.current && a && u.current.play()
                        };
                        return document.addEventListener("visibilitychange", e), () => {
                            document.removeEventListener("visibilitychange", e)
                        }
                    }, [a]);
                    let h = (0, n.useCallback)(e => {
                            var t;
                            null == (t = _.current) || t.slickGoTo(e)
                        }, []),
                        f = (0, n.useCallback)(() => {
                            var e;
                            null == (e = p.current) || e.slickPrev()
                        }, []),
                        b = (0, n.useCallback)(() => {
                            var e;
                            null == (e = p.current) || e.slickNext()
                        }, []),
                        v = (0, n.useCallback)((e, a) => {
                            var r;
                            t(a), null == (r = p.current) || r.slickGoTo(a)
                        }, []),
                        j = (0, n.useCallback)((e, a) => {
                            var r;
                            t(a), null == (r = _.current) || r.slickGoTo(a)
                        }, []),
                        w = (0, n.useMemo)(() => ({
                            dots: !1,
                            infinite: !0,
                            speed: 500,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            centerMode: !1,
                            centerPadding: "0px",
                            initialSlide: 1,
                            arrows: !1,
                            focusOnSelect: !0,
                            beforeChange: v,
                            responsive: [{
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    centerMode: !0,
                                    centerPadding: "70px",
                                    focusOnSelect: !0,
                                    swipe: !0,
                                    touchMove: !0
                                }
                            }]
                        }), [v]),
                        N = (0, n.useMemo)(() => ({
                            dots: !1,
                            infinite: !0,
                            speed: 500,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            centerMode: !0,
                            centerPadding: "0px",
                            initialSlide: 1,
                            arrows: !1,
                            focusOnSelect: !0,
                            beforeChange: j,
                            responsive: [{
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    centerMode: !0,
                                    centerPadding: "0px",
                                    focusOnSelect: !0,
                                    arrows: !1
                                }
                            }]
                        }), [j]),
                        C = (0, n.useMemo)(() => c[e], [e]);
                    return (0, r.jsxs)("section", {
                        id: "planet-slider",
                        ref: g,
                        className: "relative w-full md:min-h-[900px] overflow-hidden px-[20px] md:px-[0px]",
                        children: [(0, r.jsx)("div", {
                            className: "relative flex items-center justify-center w-full min-h-[300px] md:h-[900px]",
                            children: (0, r.jsx)("div", {
                                className: l().videoContainer,
                                children: (0, r.jsx)("div", {
                                    className: l().videoWrapper,
                                    children: (0, r.jsx)("video", {
                                        src: "/videos/gem-ver3.mp4",
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        playsInline: !0,
                                        className: "".concat(l().video, " object-contain rounded-2xl")
                                    })
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "pd-[20px] md:pd-[0px] inset-0",
                            children: (0, r.jsxs)("div", {
                                className: "".concat(l().container, " relative w-full min-h-[600px] bg-gradient-to-b from-gray-900 to-black max-w-7xl mx-auto rounded-2xl overflow-hidden flex flex-col justify-between px-0 py-12 lg:px-8 mt-16"),
                                children: [(0, r.jsxs)("div", {
                                    className: "".concat(l().mobileLayout, " flex flex-col lg:hidden h-full"),
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col items-center text-center md:mb-8 px-4",
                                        children: [(0, r.jsx)("h3", {
                                            className: "text-white text-[28px] font-medium mb-4 transition-all duration-500 ".concat(l().fadeInAnimationDelayed1),
                                            children: C.title
                                        }), (0, r.jsx)("p", {
                                            className: "text-gray-300 text-[16px] leading-relaxed min-h-[150px] md:mb-8 max-w-[300px] transition-all duration-500 ".concat(l().fadeInAnimationDelayed2),
                                            children: C.description
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "flex-1 flex items-center justify-center",
                                        children: (0, r.jsx)("div", {
                                            className: "w-full max-w-[400px]",
                                            children: (0, r.jsx)(s.A, {
                                                ref: _,
                                                ...w,
                                                children: c.map((e, t) => (0, r.jsx)("div", {
                                                    className: "px-2",
                                                    children: (0, r.jsx)("div", {
                                                        className: "".concat(l().planetSlide, " rounded-full cursor-pointer transform mx-auto transition-all duration-500"),
                                                        onClick: () => h(t),
                                                        children: (0, r.jsx)("div", {
                                                            children: (0, r.jsx)(o.default, {
                                                                src: e.image,
                                                                alt: e.label,
                                                                width: 200,
                                                                height: 200
                                                            })
                                                        })
                                                    })
                                                }, e.key))
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "flex justify-center space-x-2 mb-4",
                                        children: c.map((t, a) => (0, r.jsx)("button", {
                                            onClick: () => h(a),
                                            className: "w-2 h-2 rounded-full transition-all duration-300 ".concat(a === e ? "bg-orange-500" : "bg-gray-500")
                                        }, a))
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "hidden md:flex flex-col h-full",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col items-center text-center mb-8",
                                        children: [(0, r.jsx)("h2", {
                                            className: "text-3xl text-[24px] text-white mb-2 tracking-wide",
                                            children: "Step Into GEM Journey Here!"
                                        }), (0, r.jsx)("p", {
                                            className: "font-mono text-center text-2xl text-[24px] leading-tight md:leading-[1.125] tracking-[-5%] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#494949] mb-4 md:mb-8 px-2 aos-init aos-animate",
                                            children: "Interactive gamified AI Training and Audit system"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex flex-row justify-between items-center gap-8 flex-1",
                                        children: [(0, r.jsxs)("div", {
                                            className: "".concat(l().infoCard, " flex flex-col justify-between backdrop-blur-sm transition-all duration-500"),
                                            children: [(0, r.jsxs)("div", {
                                                className: "".concat(l().fadeInAnimation, " opacity-0 translate-y-2 transition-all duration-700 ease-out"),
                                                children: [(0, r.jsx)("h3", {
                                                    className: "text-white text-[24px] mb-3 transition-all duration-500 ".concat(l().fadeInAnimationDelayed1),
                                                    children: C.title
                                                }), (0, r.jsx)("p", {
                                                    className: "text-gray-300 text-[16px] leading-relaxed mb-6 transition-all duration-500 ".concat(l().fadeInAnimationDelayed2),
                                                    children: C.description
                                                })]
                                            }, e)]
                                        }), (0, r.jsx)("div", {
                                            className: "flex-1 flex flex-row lg:ml-[100px] items-center justify-center gap-6 relative",
                                            children: (0, r.jsx)("div", {
                                                className: "flex-1 max-w-2xl",
                                                children: (0, r.jsx)(s.A, {
                                                    ref: _,
                                                    ...w,
                                                    children: c.map((t, a) => {
                                                        let n = a === e;
                                                        return (0, r.jsx)("div", {
                                                            className: "px-2",
                                                            children: (0, r.jsx)("div", {
                                                                className: "".concat(l().planetSlide, " ").concat(n ? "w-48 h-48" : "w-24 h-24", " ").concat(n ? "opacity-100" : "opacity-60", " rounded-full cursor-pointer transform mx-auto "),
                                                                onClick: () => h(a),
                                                                children: (0, r.jsx)("div", {
                                                                    className: "transition-all duration-500 ease-in-out ".concat(n ? "scale-100" : "scale-90 hover:scale-95"),
                                                                    children: (0, r.jsx)(o.default, {
                                                                        src: t.image,
                                                                        alt: t.label,
                                                                        width: 315,
                                                                        height: 315
                                                                    })
                                                                })
                                                            })
                                                        }, t.key)
                                                    })
                                                })
                                            })
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex flex-row items-center justify-center gap-4 mt-8",
                                        children: [(0, r.jsx)("button", {
                                            onClick: f,
                                            className: "flex items-center justify-center cursor-pointer gap-[10px] rounded-[8px] w-[72px] h-[48px] border border-white/15 bg-white/5 shadow-[inset_0_0_20px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px] hover:bg-[rgba(255,100,16,0.6)] transition-all duration-500",
                                            children: (0, r.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                children: (0, r.jsx)("path", {
                                                    d: "M20 13L20 11L8 11L8 9L6 9L6 11L4 11L4 13L6 13L6 15L8 15L8 13L20 13ZM10 17L8 17L8 15L10 15L10 17ZM10 17L12 17L12 19L10 19L10 17ZM10 7L8 7L8 9L10 9L10 7ZM10 7L12 7L12 5L10 5L10 7Z",
                                                    fill: "white"
                                                })
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "flex-1 max-w-2xl",
                                            children: (0, r.jsx)(s.A, {
                                                ref: p,
                                                ...N,
                                                children: c.map((t, a) => {
                                                    let n = a === e;
                                                    return (0, r.jsx)("div", {
                                                        className: "px-2",
                                                        children: (0, r.jsxs)("button", {
                                                            onClick: () => h(a),
                                                            className: "flex items-center justify-center gap-[10px] rounded-[8px] w-[177px] h-[70px] border border-white/15 shadow-[inset_0_0_20px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px] transition-all duration-300 mx-auto ".concat(n ? "bg-[rgba(255,100,16,0.6)]" : "bg-white/5"),
                                                            children: [(0, r.jsx)("div", {
                                                                className: "",
                                                                children: (0, r.jsx)(o.default, {
                                                                    src: t.image,
                                                                    alt: t.label,
                                                                    width: 58,
                                                                    height: 58
                                                                })
                                                            }), (0, r.jsx)("div", {
                                                                className: "text-white text-[22px]",
                                                                children: t.label
                                                            })]
                                                        })
                                                    }, t.key)
                                                })
                                            })
                                        }), (0, r.jsx)("button", {
                                            onClick: b,
                                            className: "flex items-center justify-center cursor-pointer gap-[10px] rounded-[8px] w-[72px] h-[48px] border border-white/15 bg-white/5 shadow-[inset_0_0_20px_0_rgba(255,255,255,0.2)] backdrop-blur-[15px] hover:bg-[rgba(255,100,16,0.6)] transition-all duration-500",
                                            children: (0, r.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                children: (0, r.jsx)("path", {
                                                    d: "M4 11L4 13L16 13L16 15L18 15L18 13L20 13L20 11L18 11L18 9L16 9L16 11L4 11ZM14 7L16 7L16 9L14 9L14 7ZM14 7L12 7L12 5L14 5L14 7ZM14 17L16 17L16 15L14 15L14 17ZM14 17L12 17L12 19L14 19L14 17Z",
                                                    fill: "white"
                                                })
                                            })
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "flex justify-center mt-8",
                                        children: (0, r.jsx)("p", {
                                            className: "text-gray-400 text-center text-base tracking-wide",
                                            children: "Join us on the journey to conquer the galaxy of DeCenter's treasures!"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                });
            d.displayName = "PlanetSlider";
            let m = d
        },
        769: e => {
            e.exports = {
                container: "PlanetSlider_container__nX3fw",
                planetSlide: "PlanetSlider_planetSlide__LB_LS",
                infoCard: "PlanetSlider_infoCard__9ZwVW",
                fadeInAnimation: "PlanetSlider_fadeInAnimation__5vp8A",
                fadeInUp: "PlanetSlider_fadeInUp__rVPpm",
                fadeInAnimationDelayed1: "PlanetSlider_fadeInAnimationDelayed1__ViUtQ",
                fadeInAnimationDelayed2: "PlanetSlider_fadeInAnimationDelayed2__83iy9",
                fadeInAnimationDelayed3: "PlanetSlider_fadeInAnimationDelayed3__pv9hJ",
                videoWrapper: "PlanetSlider_videoWrapper__ROu2f",
                videoContainer: "PlanetSlider_videoContainer__Te4Vz",
                sliderContainer: "PlanetSlider_sliderContainer__PI1T9",
                fadeOut: "PlanetSlider_fadeOut__Qqy6N",
                fadeIn: "PlanetSlider_fadeIn__RkgSp",
                video: "PlanetSlider_video__1zdvN",
                mobileLayout: "PlanetSlider_mobileLayout__tWCg_",
                exploreButton: "PlanetSlider_exploreButton__4get4"
            }
        },
        1129: e => {
            e.exports = {
                container: "Parallax_container__FY3I7",
                titleSection: "Parallax_titleSection__oP89U",
                title: "Parallax_title__wJvIH",
                description: "Parallax_description___JilA",
                row: "Parallax_row__GLPNe",
                content: "Parallax_content__qntit",
                inner: "Parallax_inner__0B_P6",
                sidebar: "Parallax_sidebar__Da02x",
                sidebarItem: "Parallax_sidebarItem__35bq6",
                lastItem: "Parallax_lastItem__GvRKx",
                cardsContainer: "Parallax_cardsContainer__p9Q66",
                card: "Parallax_card__1bmMc",
                cardOpen: "Parallax_cardOpen__ev4vB",
                cardHeader: "Parallax_cardHeader__X7kha",
                cardTitle: "Parallax_cardTitle__kw3a5",
                cardArrow: "Parallax_cardArrow__2kTDU",
                cardArrowOpen: "Parallax_cardArrowOpen__5_IQQ",
                cardContent: "Parallax_cardContent__xLxTy",
                cardContentOpen: "Parallax_cardContentOpen__Q26j1",
                cardDescription: "Parallax_cardDescription__btTid",
                mobileContainer: "Parallax_mobileContainer__znw3V",
                mobileSection: "Parallax_mobileSection__wyqww",
                titleContainer: "Parallax_titleContainer__r4UlV",
                videoContainer: "Parallax_videoContainer__kUn_n",
                mobileVideo: "Parallax_mobileVideo__7ykU6",
                videoWrapper: "Parallax_videoWrapper__vFylL",
                videoInner: "Parallax_videoInner__vu_V3"
            }
        },
        1913: e => {
            e.exports = {
                stateWrapper: "Stats_stateWrapper__qQwLP",
                flexColumn: "Stats_flexColumn__RVyRX",
                transitioningNumber: "Stats_transitioningNumber__N9iA8",
                changing: "Stats_changing__ECD6N",
                featureCard: "Stats_featureCard__KZKol",
                active: "Stats_active__bFqHV",
                featureInner: "Stats_featureInner__JGsw6",
                videoWrapper: "Stats_videoWrapper__n7ykJ",
                wrapper: "Stats_wrapper__ykgnl",
                lastItem: "Stats_lastItem__ewmM_"
            }
        },
        1922: e => {
            e.exports = {
                horizontalBorder: "HorizontalBorder_horizontalBorder__X46Jt",
                iconContainer: "HorizontalBorder_iconContainer__bxiyF",
                iconWrapper: "HorizontalBorder_iconWrapper__n40IB",
                number: "HorizontalBorder_number__4lQMB"
            }
        },
        1975: e => {
            e.exports = {
                container: "DecenterEcosystem_container__9jyg9",
                content: "DecenterEcosystem_content__59FyQ",
                imageWrapper: "DecenterEcosystem_imageWrapper__68f2r",
                image: "DecenterEcosystem_image__8fjSu",
                gradient: "DecenterEcosystem_gradient__gPuJw",
                description: "DecenterEcosystem_description__kg5i8",
                button: "DecenterEcosystem_button__ph2Bt"
            }
        },
        2253: e => {
            e.exports = {
                faq: "Faq_faq__iFuC2",
                faq__title: "Faq_faq__title__SepHQ",
                faq__container: "Faq_faq__container__O0yXn",
                faq__item: "Faq_faq__item__8t0AI",
                faq__item_open: "Faq_faq__item_open__WGz4n",
                faq__itemHeader: "Faq_faq__itemHeader__0CAgJ",
                faq__itemTitle: "Faq_faq__itemTitle__TR7Ca",
                faq__itemArrow: "Faq_faq__itemArrow__PgNFa",
                faq__itemArrow_open: "Faq_faq__itemArrow_open__zaEMH",
                faq__itemContentWrapper: "Faq_faq__itemContentWrapper__0fC7p",
                faq__itemContentInner: "Faq_faq__itemContentInner__194kl",
                faq__itemContent: "Faq_faq__itemContent__AMYkr",
                faq__disclaimer: "Faq_faq__disclaimer__uvRVA"
            }
        },
        2493: e => {
            e.exports = {
                roadmap: "Roadmap_roadmap__K9bfU",
                roadmap__background: "Roadmap_roadmap__background__QbP_e",
                roadmap__map: "Roadmap_roadmap__map__Isvfm",
                roadmap__grid: "Roadmap_roadmap__grid__5rYGY",
                roadmap__line: "Roadmap_roadmap__line__DiXe9",
                roadmap__content: "Roadmap_roadmap__content__GEB_7",
                roadmap__header: "Roadmap_roadmap__header__F6I1I",
                roadmap__title: "Roadmap_roadmap__title__iGTLE",
                roadmap__description: "Roadmap_roadmap__description__h2z_h",
                roadmap__itemsContainer: "Roadmap_roadmap__itemsContainer__jxiaS",
                roadmap__itemsContainerMobile: "Roadmap_roadmap__itemsContainerMobile__w_F_F",
                roadmap__items: "Roadmap_roadmap__items__y_96E",
                roadmap__card: "Roadmap_roadmap__card__oVYE0",
                roadmap__cardContent: "Roadmap_roadmap__cardContent__RYf92",
                roadmap__cardTitle: "Roadmap_roadmap__cardTitle__6FpQh",
                roadmap__cardPeriod: "Roadmap_roadmap__cardPeriod__r2pq7",
                roadmap__card_active: "Roadmap_roadmap__card_active__OxF5Y",
                roadmap__card_mobile: "Roadmap_roadmap__card_mobile__5FCQW"
            }
        },
        3042: e => {
            e.exports = {
                featureItem: "DecenterFeatures_featureItem__7qHV7",
                itemFirst: "DecenterFeatures_itemFirst__CMTPr",
                videoWrapper: "DecenterFeatures_videoWrapper__QwHGm",
                featureInner: "DecenterFeatures_featureInner__BUU2w",
                featureItemContent: "DecenterFeatures_featureItemContent__7IGcm"
            }
        },
        3346: e => {
            e.exports = {
                partnerLogos: "PartnerLogos_partnerLogos__ZL2y6",
                partnerLogos__title: "PartnerLogos_partnerLogos__title__hKSOJ",
                partnerLogos__container: "PartnerLogos_partnerLogos__container__SI68T",
                partnerLogos__patterns: "PartnerLogos_partnerLogos__patterns__GiD5B",
                partnerLogos__pattern: "PartnerLogos_partnerLogos__pattern__KRp37",
                partnerLogos__grid: "PartnerLogos_partnerLogos__grid___YkP7",
                partnerLogos__firstRow: "PartnerLogos_partnerLogos__firstRow__dwp1F",
                partnerLogos__secondRow: "PartnerLogos_partnerLogos__secondRow__YUCgM",
                partnerLogos__firstRow__inner: "PartnerLogos_partnerLogos__firstRow__inner__xdoSX",
                slideLeft: "PartnerLogos_slideLeft__FyuTW",
                partnerLogos__secondRow__inner: "PartnerLogos_partnerLogos__secondRow__inner__mzDxZ",
                slideRight: "PartnerLogos_slideRight__3oeHR",
                partnerLogos__logo: "PartnerLogos_partnerLogos__logo___u0xR",
                partnerLogos__logoImage: "PartnerLogos_partnerLogos__logoImage__QqksO"
            }
        },
        3594: e => {
            e.exports = {
                sectionContainer: "DecentralCompute_sectionContainer__rlxQe",
                videoWrapper: "DecentralCompute_videoWrapper__1fQjE",
                videoContent: "DecentralCompute_videoContent__BchIU",
                gradient: "DecentralCompute_gradient__pzB5X",
                inner: "DecentralCompute_inner__efEzG",
                contentWrapper: "DecentralCompute_contentWrapper__sw9LX",
                backgroundDecoration: "DecentralCompute_backgroundDecoration__xh7XZ",
                topLeft: "DecentralCompute_topLeft__uGFHr",
                topRight: "DecentralCompute_topRight__BhlkY",
                bottomLeft: "DecentralCompute_bottomLeft__WbmVt",
                smallDecoration: "DecentralCompute_smallDecoration__tRUTi",
                columnsContainer: "DecentralCompute_columnsContainer__izMys",
                leftColumn: "DecentralCompute_leftColumn__hWo18",
                rightColumn: "DecentralCompute_rightColumn__F3IVp",
                headerSection: "DecentralCompute_headerSection__JPAo0",
                sectionTitle: "DecentralCompute_sectionTitle__5T__8",
                sectionDescription: "DecentralCompute_sectionDescription__9UWgb",
                totalDevices: "DecentralCompute_totalDevices__Be6eo",
                moduleBox: "DecentralCompute_moduleBox__jwwqu",
                gpuMetrics: "DecentralCompute_gpuMetrics__GcvrE",
                moduleTitle: "DecentralCompute_moduleTitle__XO7N0",
                metricsContainer: "DecentralCompute_metricsContainer__KyS2n",
                totalCounter: "DecentralCompute_totalCounter__ElI6C",
                totalText: "DecentralCompute_totalText__wFvfG",
                featuresList: "DecentralCompute_featuresList__l917F",
                statsList: "DecentralCompute_statsList__lYpeu",
                statNumber: "DecentralCompute_statNumber__U4LqY",
                statText: "DecentralCompute_statText__gvpuL",
                dataCenterWrapper: "DecentralCompute_dataCenterWrapper__SEwCb",
                datacentersBox: "DecentralCompute_datacentersBox__d0k0R",
                datacentersHeader: "DecentralCompute_datacentersHeader__TVGil",
                datacentersScroll: "DecentralCompute_datacentersScroll___fMzH",
                locationsContainer: "DecentralCompute_locationsContainer__o0weP",
                autoScroll: "DecentralCompute_autoScroll__fZS2e",
                metricContainer: "DecentralCompute_metricContainer__3c_sB",
                circleContainer: "DecentralCompute_circleContainer__JpC14",
                svgContainer: "DecentralCompute_svgContainer__wBLMe",
                backgroundCircle: "DecentralCompute_backgroundCircle__M2w5j",
                progressCircle: "DecentralCompute_progressCircle__WxtJz",
                percentageText: "DecentralCompute_percentageText__eEz8X",
                percentageValue: "DecentralCompute_percentageValue__Enulu",
                metricTitle: "DecentralCompute_metricTitle__ME65v",
                featureButton: "DecentralCompute_featureButton__InSoK",
                iconContainer: "DecentralCompute_iconContainer__6kRej",
                featureText: "DecentralCompute_featureText__fcLgC",
                datacenterRow: "DecentralCompute_datacenterRow__T4FvG",
                datacenterCell: "DecentralCompute_datacenterCell__QprY4",
                header: "DecentralCompute_header__9aQGT",
                highlighted: "DecentralCompute_highlighted__CtSbY",
                normal: "DecentralCompute_normal__hQP_u"
            }
        },
        3623: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => c
            });
            var r = a(5155),
                n = a(2115),
                s = a(6766),
                i = a(459),
                l = a.n(i);
            let o = [{
                    id: "1",
                    imageUrl: "/images/partners/1.svg",
                    name: "Partner 1"
                }, {
                    id: "2",
                    imageUrl: "/images/partners/2.svg",
                    name: "Partner 2"
                }, {
                    id: "3",
                    imageUrl: "/images/partners/3.svg",
                    name: "Partner 3"
                }, {
                    id: "4",
                    imageUrl: "/images/partners/4.svg",
                    name: "Partner 4"
                }, {
                    id: "5",
                    imageUrl: "/images/partners/5.svg",
                    name: "Partner 5"
                }, {
                    id: "6",
                    imageUrl: "/images/partners/6.svg",
                    name: "Partner 6"
                }, {
                    id: "7",
                    imageUrl: "/images/partners/7.svg",
                    name: "Partner 7"
                }, {
                    id: "8",
                    imageUrl: "/images/partners/8.svg",
                    name: "Partner 8"
                }, {
                    id: "9",
                    imageUrl: "/images/partners/9.svg",
                    name: "Partner 9"
                }, {
                    id: "10",
                    imageUrl: "/images/partners/10.svg",
                    name: "Partner 10"
                }, {
                    id: "11",
                    imageUrl: "/images/partners/11.svg",
                    name: "Partner 11"
                }, {
                    id: "12",
                    imageUrl: "/images/partners/12.svg",
                    name: "Partner 12"
                }, {
                    id: "13",
                    imageUrl: "/images/partners/13.svg",
                    name: "Partner 13"
                }, {
                    id: "14",
                    imageUrl: "/images/partners/14.svg",
                    name: "Partner 14"
                }, {
                    id: "15",
                    imageUrl: "/images/partners/15.svg",
                    name: "Partner 15"
                }, {
                    id: "16",
                    imageUrl: "/images/partners/16.svg",
                    name: "Partner 16"
                }, {
                    id: "17",
                    imageUrl: "/images/partners/17.svg",
                    name: "Partner 17"
                }, {
                    id: "18",
                    imageUrl: "/images/partners/18.svg",
                    name: "Partner 18"
                }, {
                    id: "19",
                    imageUrl: "/images/partners/19.svg",
                    name: "Partner 19"
                }, {
                    id: "20",
                    imageUrl: "/images/partners/20.svg",
                    name: "Partner 20"
                }, {
                    id: "21",
                    imageUrl: "/images/partners/21.svg",
                    name: "Partner 21"
                }, {
                    id: "22",
                    imageUrl: "/images/partners/22.svg",
                    name: "Partner 22"
                }, {
                    id: "23",
                    imageUrl: "/images/partners/23.svg",
                    name: "Partner 23"
                }, {
                    id: "24",
                    imageUrl: "/images/partners/24.svg",
                    name: "Partner 24"
                }, {
                    id: "25",
                    imageUrl: "/images/partners/25.svg",
                    name: "Partner 25"
                }, {
                    id: "26",
                    imageUrl: "/images/partners/26.svg",
                    name: "Partner 26"
                }, {
                    id: "27",
                    imageUrl: "/images/partners/27.svg",
                    name: "Partner 27"
                }, {
                    id: "28",
                    imageUrl: "/images/partners/28.svg",
                    name: "Partner 28"
                }, {
                    id: "29",
                    imageUrl: "/images/partners/29.svg",
                    name: "Partner 29"
                }, {
                    id: "30",
                    imageUrl: "/images/partners/30.svg",
                    name: "Partner 30"
                }, {
                    id: "31",
                    imageUrl: "/images/partners/31.svg",
                    name: "Partner 31"
                }, {
                    id: "32",
                    imageUrl: "/images/partners/32.svg",
                    name: "Partner 32"
                }, {
                    id: "33",
                    imageUrl: "/images/partners/33.svg",
                    name: "Partner 33"
                }, {
                    id: "34",
                    imageUrl: "/images/partners/34.svg",
                    name: "Partner 34"
                }, {
                    id: "35",
                    imageUrl: "/images/partners/35.svg",
                    name: "Partner 35"
                }, {
                    id: "36",
                    imageUrl: "/images/partners/36.svg",
                    name: "Partner 36"
                }, {
                    id: "37",
                    imageUrl: "/images/partners/37.svg",
                    name: "Partner 37"
                }, {
                    id: "38",
                    imageUrl: "/images/partners/38.svg",
                    name: "Partner 38"
                }, {
                    id: "39",
                    imageUrl: "/images/partners/39.svg",
                    name: "Partner 39"
                }, {
                    id: "40",
                    imageUrl: "/images/partners/40.svg",
                    name: "Partner 40"
                }, {
                    id: "41",
                    imageUrl: "/images/partners/41.svg",
                    name: "Partner 41"
                }, {
                    id: "42",
                    imageUrl: "/images/partners/42.svg",
                    name: "Partner 42"
                }, {
                    id: "43",
                    imageUrl: "/images/partners/43.svg",
                    name: "Partner 43"
                }, {
                    id: "44",
                    imageUrl: "/images/partners/44.svg",
                    name: "Partner 44"
                }, {
                    id: "45",
                    imageUrl: "/images/partners/45.svg",
                    name: "Partner 45"
                }],
                c = (0, n.memo)(() => (0, r.jsxs)("section", {
                    className: "relative min-h-[900px] md:min-h-[1130px] 2xl:min-h-[1400px] pb-10 py-22 md:py-35 md:pb-20 bg-black",
                    children: [(0, r.jsx)("div", {
                        className: "absolute top-[0px] sm:top-[10px] bottom-0 left-0 right-0 w-full h-full z-0 overflow-hidden",
                        children: (0, r.jsx)("video", {
                            className: "absolute left-1/2 -translate-x-1/2 w-[300%] max-w-[300%] h-full sm:static sm:left-0 sm:translate-x-0 sm:w-full sm:max-w-full sm:h-full",
                            muted: !0,
                            playsInline: !0,
                            preload: "auto",
                            autoPlay: !0,
                            loop: !0,
                            children: (0, r.jsx)("source", {
                                src: "/videos/c15.mp4",
                                type: "video/mp4"
                            })
                        })
                    }), (0, r.jsx)("div", {
                        className: "pointer-events-none absolute left-0 right-0 bottom-0 h-[70px] md:h-[200px] w-full z-10",
                        style: {
                            background: "linear-gradient(to top, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0) 100%)"
                        }
                    }), (0, r.jsxs)("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center",
                        children: [(0, r.jsxs)("div", {
                            className: "flex w-full lg:w-1/3 sm:flex-row items-center bg-white/5 border border-white/5 rounded-lg backdrop-blur-[30px] p-1 sm:pr-3 mb-6",
                            children: [(0, r.jsx)("div", {
                                className: "bg-white/5 rounded-md px-4 py-1 mb-1 sm:mb-0 mr-2 shadow-[inset_0px_0px_6px_0px_rgba(255,255,255,0.15)]",
                                children: (0, r.jsx)("span", {
                                    className: "font-mono text-white/80 text-xs sm:text-sm",
                                    children: "V1.0 Release"
                                })
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("span", {
                                    className: "font-mono text-white/80 text-xs sm:text-sm",
                                    children: "Integration with DeCenter"
                                }), (0, r.jsx)("div", {
                                    className: "ml-2 opacity-50",
                                    children: (0, r.jsx)(s.default, {
                                        src: "/images/decentral/arrow-right-fill.svg",
                                        alt: "Arrow right",
                                        width: 12,
                                        height: 12,
                                        className: "sm:w-4 sm:h-4"
                                    })
                                })]
                            })]
                        }), (0, r.jsx)("h1", {
                            className: "font-mono text-center text-2xl sm:text-[64px] md:text-5xl lg:text-[64px] leading-tight md:leading-[1.125] tracking-[-5%] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#494949] mb-4 md:mb-8 px-2",
                            children: "Next-Gen AI Cloud"
                        }), (0, r.jsx)("div", {
                            className: "font-mono text-center text-sm sm:[18px] md:text-lg lg:text-xl leading-tight md:leading-[1.125] tracking-[-5%] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#494949] mb-4 md:mb-8 px-2",
                            children: "The first Human-Centered AI Cloud powered by Hybrid RWA Data Centers and DePIN Edge"
                        }), (0, r.jsx)("p", {
                            className: "font-mono text-center text-sm sm:[18px] md:text-lg lg:text-xl leading-tight md:leading-[1.125] tracking-[-5%] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#494949] mb-4 md:mb-8 px-2",
                            children: "0xComingSoon"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "absolute left-0 right-0 bottom-[20px] z-20 w-full flex flex-col items-center pb-6",
                        "data-aos": "fade-in",
                        children: [(0, r.jsx)("h3", {
                            className: "font-mono text-sm sm:text-base md:text-xl tracking-[-6.8%] sm:tracking-[-4.8%] text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-[#494949] mb-2 sm:mb-6",
                            children: "Powered by the best"
                        }), (0, r.jsx)("div", {
                            "data-aos": "fade-in",
                            className: l().partnerLogos__container,
                            children: (0, r.jsx)("div", {
                                className: l().partnerLogos__inner,
                                children: o.map((e, t) => (0, r.jsx)(d, {
                                    logo: e
                                }, "".concat(e.id, "-").concat(t)))
                            })
                        }), (0, r.jsx)("div", {
                            className: "max-w-[415px] sm:mt-[30px] items-center z-20"
                        })]
                    })]
                })),
                d = (0, n.memo)(e => {
                    let {
                        logo: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: l().partnerLogos__logo,
                        children: (0, r.jsx)(s.default, {
                            src: t.imageUrl,
                            alt: t.name,
                            width: 80,
                            height: 40,
                            className: l().partnerLogos__logoImage
                        })
                    })
                });
            d.displayName = "PartnerLogo"
        },
        3726: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => _
            });
            var r = a(5155),
                n = a(2115),
                s = a(6766),
                i = a(6874),
                l = a.n(i),
                o = a(9434),
                c = a(8765),
                d = a.n(c);
            let m = [{
                    id: "landings",
                    title: "Products",
                    links: [{
                        id: "home1",
                        label: "RWA Vault",
                        href: "#"
                    }, {
                        id: "home2",
                        label: "GEM System",
                        href: "#"
                    }, {
                        id: "home3",
                        label: "Container Mesh",
                        href: "#"
                    }, {
                        id: "home4",
                        label: "DeCCM",
                        href: "#"
                    }]
                }, {
                    id: "pages",
                    title: "Resources",
                    links: [{
                        id: "pricing1",
                        label: "Docs",
                        href: "#"
                    }, {
                        id: "pricing2",
                        label: "Blog",
                        href: "https://news.decenter.ai/"
                    }, {
                        id: "pricing3",
                        label: "Media Kit",
                        href: "#"
                    }]
                }, {
                    id: "blog",
                    title: "Community",
                    links: [{
                        id: "blog1",
                        label: "X",
                        href: "https://x.com/DeCenter_AIDC"
                    }, {
                        id: "blog2",
                        label: "Telegram",
                        href: "https://t.me/DeCenter_Group"
                    }, {
                        id: "blog3",
                        label: "Chart",
                        href: "https://www.dextools.io/app/en/ether/pair-explorer/0xComingSoon"
                    }, {
                        id: "blog4",
                        label: "Buy $DECENTER",
                        href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon"
                    }]
                }],
                _ = n.memo(() => {
                    let [e, t] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        let e = () => {
                            t(window.scrollY > 300)
                        };
                        return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                    }, []), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("footer", {
                            className: d().footer,
                            children: [(0, r.jsx)("div", {
                                className: d().footer__background,
                                children: (0, r.jsx)(s.default, {
                                    src: "/images/footer/footer-bg.png",
                                    alt: "Background",
                                    fill: !0,
                                    className: d().footer__backgroundImage
                                })
                            }), (0, r.jsxs)("div", {
                                className: d().footer__container,
                                "data-aos": "fade-up",
                                children: [(0, r.jsxs)("div", {
                                    className: d().footer__top,
                                    children: [(0, r.jsxs)("div", {
                                        className: d().footer__branding,
                                        children: [(0, r.jsx)("div", {
                                            className: d().footer__logo,
                                            children: (0, r.jsx)(s.default, {
                                                src: "/images/footer/logo-white.png",
                                                alt: "DeCenter Logo",
                                                width: 155,
                                                height: 28
                                            })
                                        }), (0, r.jsxs)("p", {
                                            className: d().footer__description,
                                            children: ["The ethical AI cloud built on ", (0, r.jsx)("br", {}), "real world infrastructure and ", (0, r.jsx)("br", {}), "decentralized trust"]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: d().footer__links,
                                        children: m.map(e => (0, r.jsxs)("div", {
                                            className: d().footer__linksSection,
                                            children: [(0, r.jsx)("h3", {
                                                className: d().footer__linksSectionTitle,
                                                children: e.title
                                            }), (0, r.jsx)("ul", {
                                                className: d().footer__linksList,
                                                children: e.links.map(e => (0, r.jsx)("li", {
                                                    className: d().footer__linksItem,
                                                    children: (0, r.jsx)(l(), {
                                                        href: e.href,
                                                        className: d().footer__link,
                                                        target: "_blank",
                                                        children: e.label
                                                    })
                                                }, e.id))
                                            })]
                                        }, e.id))
                                    })]
                                }), (0, r.jsx)(s.default, {
                                    src: "/images/footer/text-footer.svg.svg",
                                    alt: "Social",
                                    width: 1160,
                                    height: 207
                                })]
                            })]
                        }), (0, r.jsx)("button", {
                            className: (0, o.cn)(d().backToTop, {
                                [d().backToTop_visible]: e
                            }),
                            onClick: () => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                })
                            },
                            "aria-label": "Back to top",
                            children: (0, r.jsx)(s.default, {
                                src: "/images/ui/arrow-up.svg",
                                alt: "Arrow Up",
                                width: 16,
                                height: 16
                            })
                        })]
                    })
                })
        },
        3984: (e, t, a) => {
            "use strict";
            a.d(t, {
                p: () => o
            });
            var r = a(5155),
                n = a(2115),
                s = a(6766),
                i = a(1975),
                l = a.n(i);
            let o = (0, n.memo)(() => (0, r.jsxs)("section", {
                className: l().container,
                children: [(0, r.jsxs)("div", {
                    className: l().imageWrapper,
                    children: [(0, r.jsx)(s.default, {
                        src: "/images/decenter-image.png",
                        alt: "DeCenter Ecosystem",
                        fill: !0,
                        className: l().image,
                        priority: !0
                    }), (0, r.jsx)("div", {
                        className: l().gradient
                    })]
                }), (0, r.jsxs)("div", {
                    className: l().content,
                    children: [(0, r.jsx)("p", {
                        className: l().description,
                        "data-aos": "fade-left",
                        children: "By installing the ContainerMesh Extension, you contribute idle resources from your PC or device to a distributed compute network—enhancing performance, lowering latency, and building a global system with real impact."
                    })]
                })]
            }));
            o.displayName = "DecenterEcosystem"
        },
        4873: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => u
            });
            var r = a(5155),
                n = a(2115),
                s = a(6766),
                i = a(2057),
                l = a(3096),
                o = a(1913),
                c = a.n(o),
                d = a(8042);
            let m = (0, n.memo)(e => {
                let {
                    icon: t,
                    count: a,
                    label: o,
                    delay: d = 0
                } = e, m = parseInt(a.replace(/\D/g, "")) || 0, _ = a.startsWith("+") ? "+" : "", p = a.match(/[KMB]/) ? a.match(/[KMB]/)[0] : "", {
                    ref: u,
                    inView: g
                } = (0, l.Wx)({
                    triggerOnce: !0,
                    threshold: .1
                }), [x, h] = n.useState(!1), [f, b] = n.useState(!1), [v, j] = n.useState(!1);
                return n.useEffect(() => {
                    let e;
                    return g && (e = setTimeout(() => {
                        b(!0), j(!0), setTimeout(() => {
                            h(!0), setTimeout(() => {
                                j(!1)
                            }, 300)
                        }, 300)
                    }, 2500)), () => clearTimeout(e)
                }, [g]), (0, r.jsxs)("div", {
                    ref: u,
                    "data-aos": "fade-up",
                    "data-aos-delay": d,
                    className: "flex flex-col items-center gap-1.5",
                    children: [(0, r.jsx)("div", {
                        className: "relative flex items-center justify-center",
                        children: (0, r.jsx)("div", {
                            className: "w-11 h-11 flex items-center justify-center relative z-10",
                            children: (0, r.jsx)(s.default, {
                                src: "/images/stats/".concat(t),
                                alt: o,
                                fill: !0,
                                className: "object-contain"
                            })
                        })
                    }), (0, r.jsxs)("span", {
                        className: "font-mono text-white text-5xl lg:text-6xl tracking-[-5%] leading-tight ".concat(f ? c().transitioningNumber : "", " ").concat(v ? c().changing : ""),
                        children: [_, g ? x ? ("K" === p ? (m / 1e3).toString() + p : "M" === p ? (m / 1e6).toString() + p : "B" === p ? (m / 1e9).toString() + p : m >= 1e3 ? (m / 1e3).toString() + "K" : m.toString()).replace(p, "") : (0, r.jsx)(i.Ay, {
                            start: 0,
                            end: m,
                            duration: 2.5,
                            separator: "",
                            useEasing: !0
                        }) : "0", x && p]
                    }), (0, r.jsx)("span", {
                        className: "font-mono text-[#FF713F] text-lg uppercase",
                        children: o
                    })]
                })
            });
            m.displayName = "StatItem";
            let _ = e => {
                    let {
                        src: t,
                        className: a,
                        isLastItem: s
                    } = e, {
                        ref: i,
                        inView: o
                    } = (0, l.Wx)({
                        triggerOnce: !0,
                        threshold: .3
                    }), d = n.useRef(null);
                    return n.useEffect(() => {
                        o && d.current && d.current.play().catch(() => {})
                    }, [o]), (0, r.jsx)("div", {
                        ref: i,
                        children: (0, r.jsx)("video", {
                            className: "".concat(a, " ").concat(s ? c().lastItem : ""),
                            ref: d,
                            muted: !0,
                            playsInline: !0,
                            preload: "auto",
                            children: (0, r.jsx)("source", {
                                src: t,
                                type: "video/mp4"
                            })
                        })
                    })
                },
                p = (0, n.memo)(e => {
                    let {
                        title: t,
                        description: a,
                        bgUrl: s,
                        delay: i = 0,
                        isActive: l = !0,
                        isLastItem: o = !1
                    } = e, m = n.useRef(null), p = n.useRef(null), u = n.useRef(null), [g, x] = n.useState(!0);
                    return n.useEffect(() => {
                        let e = () => {
                            x(window.innerWidth >= 1024)
                        };
                        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, []), n.useEffect(() => () => {
                        u.current && (cancelAnimationFrame(u.current), u.current = null)
                    }, []), (0, r.jsx)("div", {
                        className: "flex-1 min-w-[280px] md:min-w-[300px] h-[450px] md:h-auto",
                        "data-aos": "fade-up",
                        "data-aos-delay": i,
                        ref: m,
                        ...g ? {
                            onMouseEnter: () => {
                                g && (u.current && (cancelAnimationFrame(u.current), u.current = null), p.current && p.current.play().catch(() => {}))
                            },
                            onMouseLeave: () => {
                                if (!g || !p.current) return;
                                let e = p.current;
                                e.pause();
                                let t = () => {
                                    p.current && (e.currentTime > 0 ? (e.currentTime = Math.max(0, e.currentTime - .033), u.current = requestAnimationFrame(t)) : (e.pause(), u.current = null))
                                };
                                u.current = requestAnimationFrame(t)
                            }
                        } : {},
                        children: (0, r.jsx)("div", {
                            className: "h-full p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-[#494949]/10",
                            children: (0, r.jsxs)("div", {
                                className: "".concat(c().featureCard, " ").concat(l ? c().active : "", " h-full p-5 md:p-5 rounded-2xl bg-gradient-to-b from-[#121212] to-[#181818] flex flex-col"),
                                children: [(0, r.jsxs)("div", {
                                    className: c().featureInner,
                                    children: [(0, r.jsx)("h3", {
                                        className: "font-mono text-xl md:text-xl text-white tracking-[-3.3%] leading-relaxed mb-4",
                                        children: t
                                    }), (0, r.jsx)("p", {
                                        className: "font-mono text-white/40 text-sm  leading-relaxed",
                                        children: (0, d.Ay)(a)
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "".concat(c().videoWrapper, " rounded-2xl"),
                                    children: g ? (0, r.jsx)("video", {
                                        className: c().video,
                                        ref: p,
                                        muted: !0,
                                        playsInline: !0,
                                        children: (0, r.jsx)("source", {
                                            src: s,
                                            type: "video/mp4"
                                        })
                                    }) : (0, r.jsx)(_, {
                                        src: s || "",
                                        className: c().video,
                                        isLastItem: o
                                    })
                                })]
                            })
                        })
                    })
                });
            p.displayName = "FeatureCard";
            let u = (0, n.memo)(() => {
                let e = [{
                    title: "Top 40 Global Network Operator by AS Influence",
                    description: "Ranked 38th among 89,000+ ISPs worldwide (<a href='https://asrank.caida.org/asns/41095' class='text-[#FF713F]' target='_blank'>AS Rank</a>, 2018), DeCenter's network demonstrates exceptional influence and reach in the global Internet routing ecosystem — a foundation of trust and scale for decentralized infrastructure.",
                    bgUrl: "/videos/stats/c1.mp4",
                    isActive: !0
                }, {
                    title: "24/7 in 10 languages",
                    description: "With hundreds of thousands of users from all over the world - proof of influence in the technology industry.",
                    bgUrl: "/videos/stats/c2.mp4",
                    isActive: !1
                }, {
                    title: "Industry-Certified Performance",
                    description: "We ensure enterprise-grade security, reliability, and operational excellence.",
                    bgUrl: "/videos/stats/c3.mp4",
                    isActive: !1
                }, {
                    title: "Global Low-Latency Network Built for Speed, Security, and AI Performance",
                    description: "DeCenter's global backbone delivers ultra-low latency routes optimized for real-time AI, HPC, and mission-critical workloads. Access metro, regional, and international paths — or request custom routes for unbeatable speed and reliability.",
                    bgUrl: "/videos/stats/c4.mp4",
                    isActive: !0
                }];
                return (0, r.jsx)("section", {
                    className: "relative md:py-20 w-full md:pt-[0]",
                    children: (0, r.jsxs)("div", {
                        className: "",
                        children: [(0, r.jsx)("div", {
                            className: c().stateWrapper,
                            "data-aos": "fade-in",
                            children: (0, r.jsx)("div", {
                                className: "".concat(c().container, " max-w-7xl mx-auto px-4"),
                                children: (0, r.jsx)("div", {
                                    className: "".concat(c().flexColumn, " flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-30"),
                                    children: [{
                                        icon: "user-icon.svg",
                                        count: "+300000K",
                                        label: "users"
                                    }, {
                                        icon: "dev-icon.svg",
                                        count: "+10000K",
                                        label: "Partners"
                                    }, {
                                        icon: "chip-icon.svg",
                                        count: "+3000",
                                        label: "GPUs On Demand"
                                    }, {
                                        icon: "partner-icon.svg",
                                        count: "+200",
                                        label: "Experts"
                                    }].map((e, t) => (0, r.jsx)(m, {
                                        icon: e.icon,
                                        count: e.count,
                                        label: e.label,
                                        delay: 100 * t
                                    }, t))
                                })
                            })
                        }), (0, r.jsxs)("div", {
                            className: "".concat(c().wrapper, " max-w-7xl mx-auto"),
                            children: [(0, r.jsxs)("div", {
                                className: "max-w-7xl flex flex-col lg:flex-row gap-6 md:gap-8 mb-6 md:mb-8",
                                children: [(0, r.jsx)("div", {
                                    className: "w-full lg:w-1/2",
                                    children: (0, r.jsx)(p, {
                                        title: e[0].title,
                                        description: e[0].description,
                                        bgUrl: e[0].bgUrl,
                                        isActive: e[0].isActive,
                                        delay: 100
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "w-full lg:w-1/2 flex flex-col md:flex-row gap-6 md:gap-8",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-full md:w-1/2",
                                        children: (0, r.jsx)(p, {
                                            title: e[1].title,
                                            description: e[1].description,
                                            bgUrl: e[1].bgUrl,
                                            isActive: e[1].isActive,
                                            delay: 200
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "w-full md:w-1/2",
                                        children: (0, r.jsx)(p, {
                                            title: e[2].title,
                                            description: e[2].description,
                                            bgUrl: e[2].bgUrl,
                                            isActive: e[2].isActive,
                                            delay: 300
                                        })
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "w-full",
                                children: (0, r.jsx)(p, {
                                    title: e[3].title,
                                    description: e[3].description,
                                    bgUrl: e[3].bgUrl,
                                    isActive: e[3].isActive,
                                    delay: 400,
                                    isLastItem: !0
                                })
                            })]
                        })]
                    })
                })
            })
        },
        5462: (e, t, a) => {
            "use strict";
            a.d(t, {
                r: () => _
            });
            var r = a(5155),
                n = a(2115),
                s = a(6766),
                i = a(9434),
                l = a(3346),
                o = a.n(l);
            let c = [{
                    id: "1",
                    imageUrl: "/images/partners/1.svg",
                    name: "Partner 1"
                }, {
                    id: "2",
                    imageUrl: "/images/partners/2.svg",
                    name: "Partner 2"
                }, {
                    id: "3",
                    imageUrl: "/images/partners/3.svg",
                    name: "Partner 3"
                }, {
                    id: "4",
                    imageUrl: "/images/partners/4.svg",
                    name: "Partner 4"
                }, {
                    id: "5",
                    imageUrl: "/images/partners/5.svg",
                    name: "Partner 5"
                }, {
                    id: "6",
                    imageUrl: "/images/partners/6.svg",
                    name: "Partner 6"
                }, {
                    id: "7",
                    imageUrl: "/images/partners/7.svg",
                    name: "Partner 7"
                }, {
                    id: "8",
                    imageUrl: "/images/partners/8.svg",
                    name: "Partner 8"
                }, {
                    id: "9",
                    imageUrl: "/images/partners/9.svg",
                    name: "Partner 9"
                }, {
                    id: "10",
                    imageUrl: "/images/partners/10.svg",
                    name: "Partner 10"
                }, {
                    id: "11",
                    imageUrl: "/images/partners/11.svg",
                    name: "Partner 11"
                }, {
                    id: "12",
                    imageUrl: "/images/partners/12.svg",
                    name: "Partner 12"
                }, {
                    id: "13",
                    imageUrl: "/images/partners/13.svg",
                    name: "Partner 13"
                }, {
                    id: "14",
                    imageUrl: "/images/partners/14.svg",
                    name: "Partner 14"
                }, {
                    id: "15",
                    imageUrl: "/images/partners/15.svg",
                    name: "Partner 15"
                }, {
                    id: "16",
                    imageUrl: "/images/partners/16.svg",
                    name: "Partner 16"
                }, {
                    id: "17",
                    imageUrl: "/images/partners/17.svg",
                    name: "Partner 17"
                }, {
                    id: "18",
                    imageUrl: "/images/partners/18.svg",
                    name: "Partner 18"
                }, {
                    id: "19",
                    imageUrl: "/images/partners/19.svg",
                    name: "Partner 19"
                }, {
                    id: "20",
                    imageUrl: "/images/partners/20.svg",
                    name: "Partner 20"
                }, {
                    id: "21",
                    imageUrl: "/images/partners/21.svg",
                    name: "Partner 21"
                }, {
                    id: "22",
                    imageUrl: "/images/partners/22.svg",
                    name: "Partner 22"
                }],
                d = [{
                    id: "23",
                    imageUrl: "/images/partners/23.svg",
                    name: "Partner 23"
                }, {
                    id: "24",
                    imageUrl: "/images/partners/24.svg",
                    name: "Partner 24"
                }, {
                    id: "25",
                    imageUrl: "/images/partners/25.svg",
                    name: "Partner 25"
                }, {
                    id: "26",
                    imageUrl: "/images/partners/26.svg",
                    name: "Partner 26"
                }, {
                    id: "27",
                    imageUrl: "/images/partners/27.svg",
                    name: "Partner 27"
                }, {
                    id: "28",
                    imageUrl: "/images/partners/28.svg",
                    name: "Partner 28"
                }, {
                    id: "29",
                    imageUrl: "/images/partners/29.svg",
                    name: "Partner 29"
                }, {
                    id: "30",
                    imageUrl: "/images/partners/30.svg",
                    name: "Partner 30"
                }, {
                    id: "31",
                    imageUrl: "/images/partners/31.svg",
                    name: "Partner 31"
                }, {
                    id: "32",
                    imageUrl: "/images/partners/32.svg",
                    name: "Partner 32"
                }, {
                    id: "33",
                    imageUrl: "/images/partners/33.svg",
                    name: "Partner 33"
                }, {
                    id: "34",
                    imageUrl: "/images/partners/34.svg",
                    name: "Partner 34"
                }, {
                    id: "35",
                    imageUrl: "/images/partners/35.svg",
                    name: "Partner 35"
                }, {
                    id: "36",
                    imageUrl: "/images/partners/36.svg",
                    name: "Partner 36"
                }, {
                    id: "37",
                    imageUrl: "/images/partners/37.svg",
                    name: "Partner 37"
                }, {
                    id: "38",
                    imageUrl: "/images/partners/38.svg",
                    name: "Partner 38"
                }, {
                    id: "39",
                    imageUrl: "/images/partners/39.svg",
                    name: "Partner 39"
                }, {
                    id: "40",
                    imageUrl: "/images/partners/40.svg",
                    name: "Partner 40"
                }, {
                    id: "41",
                    imageUrl: "/images/partners/41.svg",
                    name: "Partner 41"
                }, {
                    id: "42",
                    imageUrl: "/images/partners/42.svg",
                    name: "Partner 42"
                }, {
                    id: "43",
                    imageUrl: "/images/partners/43.svg",
                    name: "Partner 43"
                }, {
                    id: "44",
                    imageUrl: "/images/partners/44.svg",
                    name: "Partner 44"
                }, {
                    id: "45",
                    imageUrl: "/images/partners/45.svg",
                    name: "Partner 45"
                }],
                m = (0, n.memo)(e => {
                    let {
                        partner: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: o().partnerLogos__logo,
                        children: (0, r.jsx)(s.default, {
                            src: t.imageUrl,
                            alt: t.name,
                            width: 80,
                            height: 40,
                            className: o().partnerLogos__logoImage
                        })
                    })
                });
            m.displayName = "PartnerLogo";
            let _ = e => {
                let {
                    className: t
                } = e;
                return (0, r.jsxs)("section", {
                    className: (0, i.cn)(o().partnerLogos, t),
                    children: [(0, r.jsx)("div", {
                        className: o().partnerLogos__patterns,
                        children: (0, r.jsx)(s.default, {
                            src: "/images/decenter/bg-decenter.png",
                            alt: "Pattern",
                            width: 1920,
                            height: 300,
                            className: o().partnerLogos__pattern
                        })
                    }), (0, r.jsx)("h2", {
                        className: o().partnerLogos__title,
                        children: "Backed by the best"
                    }), (0, r.jsx)("div", {
                        className: o().partnerLogos__container,
                        children: (0, r.jsxs)("div", {
                            className: o().partnerLogos__grid,
                            children: [(0, r.jsx)("div", {
                                className: o().partnerLogos__firstRow,
                                children: (0, r.jsx)("div", {
                                    className: o().partnerLogos__firstRow__inner,
                                    children: c.map((e, t) => (0, r.jsx)(m, {
                                        partner: e
                                    }, "".concat(e.id, "-").concat(t)))
                                })
                            }), (0, r.jsx)("div", {
                                className: o().partnerLogos__secondRow,
                                children: (0, r.jsx)("div", {
                                    className: o().partnerLogos__secondRow__inner,
                                    children: d.map((e, t) => (0, r.jsx)(m, {
                                        partner: e
                                    }, "".concat(e.id, "-").concat(t)))
                                })
                            })]
                        })
                    })]
                })
            }
        },
        5763: e => {
            e.exports = {
                blog: "Blog_blog__7oHZ_",
                blog__title: "Blog_blog__title__3mGhD",
                blog__slider: "Blog_blog__slider__7DNYS",
                blog__swiperContainer: "Blog_blog__swiperContainer__viiBC",
                blog__slide: "Blog_blog__slide__2teOn",
                blog__card: "Blog_blog__card__B77_T",
                blog__cardImageContainer: "Blog_blog__cardImageContainer__PL8uc",
                blog__cardImage: "Blog_blog__cardImage__QiQK1",
                blog__cardTitle: "Blog_blog__cardTitle__RlwGK",
                blog__cardDate: "Blog_blog__cardDate__GWgWt",
                blog__button: "Blog_blog__button__hbgLW"
            }
        },
        5846: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => d
            });
            var r = a(5155),
                n = a(2115),
                s = a(6766),
                i = a(9748),
                l = a.n(i);
            let o = [{
                    id: "case1",
                    description: "Discover DeCenter’s hybrid cloud model, combining high-density data centers with a DePIN edge system — designed for high performance, low latency, and scalable AI services.",
                    stats: [{
                        value: "Hybrid Cloud",
                        label: "Power capacity"
                    }, {
                        value: "DePIN Edge",
                        label: "Building area"
                    }, {
                        value: "AI Infrastructure",
                        label: "Server capacity"
                    }, {
                        value: "Scalable Compute",
                        label: "Infrastructure level"
                    }, {
                        value: "Low Latency",
                        label: "Total area"
                    }],
                    videoId: "55QgJWWMijQ"
                }, {
                    id: "case2",
                    title: "AIDC Danang",
                    description: "A 3D walkthrough of DeCenter’s AI-optimized data center, seamlessly integrated with community-run nodes via the ContainerMesh architecture.",
                    stats: [{
                        value: "15 MW",
                        label: "Power capacity"
                    }, {
                        value: "6,500 sq.m for buildings",
                        label: "Building area"
                    }, {
                        value: "1,500 cabinets",
                        label: "Server capacity"
                    }, {
                        value: "Tier-4 Infrastructure",
                        label: "Infrastructure level"
                    }, {
                        value: "15,000 sq.m in total",
                        label: "Total area"
                    }],
                    videoId: "l42Q5-ljzFI"
                }, {
                    id: "case3",
                    description: "DeCenter’s hybrid architecture delivers reliable, decentralized AI through high-performance core nodes and a resilient DePIN edge, empowering real-world applications with ethical AI.",
                    stats: [{
                        value: "Decentralized AI",
                        label: "Power capacity"
                    }, {
                        value: "Ethical Compute",
                        label: "Building area"
                    }, {
                        value: "Hybrid Infrastructure",
                        label: "Server capacity"
                    }, {
                        value: "Real-World Impact",
                        label: "Infrastructure level"
                    }, {
                        value: "Fault Tolerance",
                        label: "Total area"
                    }],
                    videoId: "Nd0FZwYauM8"
                }],
                c = e => {
                    let {
                        videoId: t
                    } = e, [a, s] = n.useState(!1), i = n.useRef(null);
                    (0, n.useEffect)(() => {
                        let e = i.current,
                            t = new IntersectionObserver(a => {
                                a[0].isIntersecting && (s(!0), e && t.unobserve(e))
                            }, {
                                threshold: .5
                            });
                        return e && t.observe(e), () => {
                            e && t.unobserve(e)
                        }
                    }, []);
                    let l = a ? "https://www.youtube.com/embed/".concat(t, "?autoplay=1&mute=1&loop=0&playlist=").concat(t) : "https://www.youtube.com/embed/".concat(t);
                    return (0, r.jsx)("div", {
                        className: "relative w-full aspect-video rounded-lg overflow-hidden",
                        ref: i,
                        children: (0, r.jsx)("iframe", {
                            src: l,
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0,
                            title: "YouTube video player",
                            className: "absolute top-0 left-0 w-full h-full"
                        })
                    })
                },
                d = () => {
                    let [e, t] = (0, n.useState)("case1"), a = o.find(t => t.id === e) || o[0];
                    return (0, r.jsx)("section", {
                        className: "".concat(l().wrapperCase, " max-w-7xl mx-auto py-20 pt-0"),
                        children: (0, r.jsxs)("div", {
                            "data-aos": "fade-in",
                            className: "relative rounded-[10px] sm:rounded-[16px] overflow-hidden",
                            style: {
                                position: "relative",
                                background: "linear-gradient(to bottom, #121212, #0E0E0E)"
                            },
                            children: [(0, r.jsx)("div", {
                                className: "hidden sm:block",
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "16px",
                                    padding: "1px",
                                    background: "linear-gradient(to bottom, #2C2C2C, rgba(255, 255, 248, 0.8))",
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                    pointerEvents: "none",
                                    zIndex: 10
                                }
                            }), (0, r.jsx)("div", {
                                className: "block sm:hidden",
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "10px",
                                    border: "1px solid #2C2C2C",
                                    pointerEvents: "none",
                                    zIndex: 10
                                }
                            }), (0, r.jsxs)("div", {
                                className: "".concat(l().wrapperHeader, " flex flex-col items-center p-3 md:p-6 lg:p-12"),
                                style: {
                                    background: "linear-gradient(to bottom, #121212, #0E0E0E)"
                                },
                                children: [(0, r.jsx)("div", {
                                    className: l().bgCover,
                                    children: (0, r.jsx)(s.default, {
                                        src: "/images/case-study/bg-header.png",
                                        alt: "Data center case study",
                                        width: 1920,
                                        height: 300,
                                        className: "object-cover"
                                    })
                                }), (0, r.jsxs)("h2", {
                                    className: "relative font-mono text-base sm:text-xl md:text-2xl lg:text-3xl text-center mb-0 max-w-4xl tracking-[-0.028em] sm:tracking-[-0.028em]",
                                    style: {
                                        background: "linear-gradient(to bottom, #FFFFFF, #494949)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        color: "transparent"
                                    },
                                    children: ["DeCenter isn't just decentralized cloud", (0, r.jsx)("br", {}), "It's ethical infrastructure for the AI age."]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "".concat(l().wrapperTabs, " grid grid-cols-3 relative"),
                                children: [(0, r.jsx)("button", {
                                    className: "py-2 px-2 sm:py-3 md:py-6 text-center font-mono text-sm sm:text-base md:text-lg transition-colors ".concat("case1" === e ? "bg-gradient-to-b from-[#FF7D4B] to-[#FF713F] text-[#0E0E0E]" : "bg-gradient-to-b from-[#181818] to-[#0E0E0E] text-white"),
                                    onClick: () => t("case1"),
                                    children: "Showcase 1"
                                }), (0, r.jsx)("button", {
                                    className: "py-2 px-2 sm:py-3 md:py-6 text-center font-mono text-sm sm:text-base md:text-lg transition-colors ".concat("case2" === e ? "bg-gradient-to-b from-[#FF7D4B] to-[#FF713F] text-[#0E0E0E]" : "bg-gradient-to-b from-[#181818] to-[#0E0E0E] text-white"),
                                    onClick: () => t("case2"),
                                    children: "Showcase 2"
                                }), (0, r.jsx)("button", {
                                    className: "py-2 px-2 sm:py-3 md:py-6 text-center font-mono text-sm sm:text-base md:text-lg transition-colors ".concat("case3" === e ? "bg-gradient-to-b from-[#FF7D4B] to-[#FF713F] text-[#0E0E0E]" : "bg-gradient-to-b from-[#181818] to-[#0E0E0E] text-white"),
                                    onClick: () => t("case3"),
                                    children: "Showcase 3"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "relative p-2 sm:p-4 md:p-5 lg:p-6 rounded-b-[10px] sm:rounded-b-[16px]",
                                style: {
                                    background: "linear-gradient(to bottom, #121212, #0E0E0E)"
                                },
                                children: (0, r.jsxs)("div", {
                                    className: "flex flex-col md:flex-row gap-0 md:gap-6 lg:gap-8",
                                    children: [(0, r.jsxs)("div", {
                                        className: l().colLeft,
                                        children: [(0, r.jsx)("div", {
                                            className: "relative w-full aspect-video mb-4 md:mb-6 rounded-lg overflow-hidden",
                                            children: (0, r.jsx)(c, {
                                                videoId: a.videoId
                                            })
                                        }), (0, r.jsx)("p", {
                                            className: "font-mono text-xs sm:text-sm md:text-base leading-6 mb-6 md:mb-0 text-[#CACACA]",
                                            children: a.description
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: l().colRight,
                                        children: [a.title && (0, r.jsx)("h3", {
                                            className: "font-mono text-base sm:text-lg md:text-2xl lg:text-3xl mb-3 md:mb-6 tracking-[-0.02em]",
                                            style: {
                                                background: "linear-gradient(to bottom, #FFFFFF, #494949)",
                                                WebkitBackgroundClip: "text",
                                                backgroundClip: "text",
                                                color: "transparent"
                                            },
                                            children: a.title
                                        }), (0, r.jsx)("div", {
                                            className: "flex flex-col",
                                            children: a.stats.map((e, t) => (0, r.jsxs)("div", {
                                                className: "".concat(l().item_stat, " flex items-start sm:items-center mb-3 sm:mb-5 last:mb-0"),
                                                children: [(0, r.jsx)("div", {
                                                    className: "flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11 mr-2",
                                                    children: (0, r.jsx)("div", {
                                                        className: "relative w-full h-full overflow-hidden rounded-lg",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "absolute inset-0 flex items-center justify-center bg-[#292929] rounded-lg border border-[#A3A3A3]/50",
                                                            children: [(0, r.jsx)("div", {
                                                                className: "absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-white/80 blur-xl opacity-80"
                                                            }), (0, r.jsx)(s.default, {
                                                                src: "/images/case-study/icon.svg",
                                                                alt: "Icon",
                                                                width: 12,
                                                                height: 12,
                                                                className: "relative z-10 sm:w-4 sm:h-4 md:w-6 md:h-6"
                                                            })]
                                                        })
                                                    })
                                                }), (0, r.jsx)("div", {
                                                    className: "flex-1 font-mono text-xs sm:text-sm md:text-base text-white border-[#2C2C2C] pb-0",
                                                    children: e.value
                                                })]
                                            }, t))
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                }
        },
        5887: e => {
            e.exports = {
                linktree__overlay: "Linktree_linktree__overlay__al6vU",
                linktree__topGradient: "Linktree_linktree__topGradient__eYUO7",
                linktree__bottomGradient: "Linktree_linktree__bottomGradient____c4J",
                linktree__title: "Linktree_linktree__title__h2Nw5",
                linktree__button: "Linktree_linktree__button__NJlih",
                linktree__content: "Linktree_linktree__content__G6qD1",
                linktree__background: "Linktree_linktree__background__FQa0M"
            }
        },
        5940: e => {
            e.exports = {
                container: "TokenizedGpu_container__3Rpsp",
                gradient: "TokenizedGpu_gradient__HgNNh",
                content: "TokenizedGpu_content__YwRzk",
                left: "TokenizedGpu_left__9bd3M",
                titleSection: "TokenizedGpu_titleSection__Ax3nv",
                title: "TokenizedGpu_title__39Dd_",
                subtitle: "TokenizedGpu_subtitle__nvHMX",
                tabs: "TokenizedGpu_tabs__fnqSe",
                tab: "TokenizedGpu_tab__icSUA",
                tabTitle: "TokenizedGpu_tabTitle__DC4G7",
                activeTab: "TokenizedGpu_activeTab__aj1qv",
                iconContainer: "TokenizedGpu_iconContainer__1W_Gw",
                icon: "TokenizedGpu_icon__YI_pC",
                tabContent: "TokenizedGpu_tabContent__X8_ra",
                tabDescription: "TokenizedGpu_tabDescription__eZAXv",
                quote: "TokenizedGpu_quote__RB6ru",
                right: "TokenizedGpu_right__NJKk6",
                gpuGraphic: "TokenizedGpu_gpuGraphic__nXLR7",
                aiCircuits: "TokenizedGpu_aiCircuits__IMDrz",
                mobileContent: "TokenizedGpu_mobileContent__FLdXR",
                mobileTitleSection: "TokenizedGpu_mobileTitleSection__kMQbH",
                mobileTitle: "TokenizedGpu_mobileTitle__aQPiF",
                mobileSubtitle: "TokenizedGpu_mobileSubtitle__15mQN",
                slider: "TokenizedGpu_slider__77iLj",
                sliderButton: "TokenizedGpu_sliderButton__2lC2x",
                slide: "TokenizedGpu_slide__Y4b__",
                sliderDots: "TokenizedGpu_sliderDots__FYhJq",
                dot: "TokenizedGpu_dot__xhQ6R",
                activeDot: "TokenizedGpu_activeDot__gS1Ot",
                swiperContainer: "TokenizedGpu_swiperContainer__sz_2O",
                swiper: "TokenizedGpu_swiper__i2GED",
                swiperSlide: "TokenizedGpu_swiperSlide__GbMSD",
                slideCard: "TokenizedGpu_slideCard__wRypH",
                mobileGpuCard: "TokenizedGpu_mobileGpuCard__epLbj",
                mobileGpuCardInner: "TokenizedGpu_mobileGpuCardInner__B4Rn3",
                mobileGpuLabel: "TokenizedGpu_mobileGpuLabel__OQA6K",
                slideContent: "TokenizedGpu_slideContent__WElJw",
                slideIconContainer: "TokenizedGpu_slideIconContainer__Haw1h",
                slideIcon: "TokenizedGpu_slideIcon__7UDo7",
                slideTitle: "TokenizedGpu_slideTitle__sYyQl",
                slideDescription: "TokenizedGpu_slideDescription__xhcOU",
                mobileQuote: "TokenizedGpu_mobileQuote__R6JAa",
                pulse: "TokenizedGpu_pulse__0Qyyr",
                fadeIn: "TokenizedGpu_fadeIn__0XuIX"
            }
        },
        6641: (e, t, a) => {
            "use strict";
            a.d(t, {
                d: () => o
            });
            var r = a(5155),
                n = a(2115),
                s = a(689),
                i = a.n(s);
            let l = (0, n.memo)(() => (0, r.jsx)("section", {
                className: "".concat(i().container, " relative w-full py-20 px-8"),
                children: (0, r.jsx)("div", {
                    className: "max-w-7xl mx-auto",
                    children: (0, r.jsx)("div", {
                        className: "flex flex-col gap-12 justify-center relative z-10",
                        children: (0, r.jsxs)("div", {
                            className: "space-y-6 text-center md:text-left max-w-[835px]",
                            children: [(0, r.jsxs)("h2", {
                                className: "text-[24px] md:text-[32px] text-white leading-tight",
                                children: ["DeCenter — the ethical infrastructure", (0, r.jsx)("br", {}), "for the AI age"]
                            }), (0, r.jsxs)("div", {
                                className: "space-y-4 text-[16px] md:text-[20px] leading-relaxed text-transparent bg-clip-text bg-gradient-to-b from-white to-[#494949]",
                                children: ["DeCenter combines hybrid RWA data centers with crowdsourced", (0, r.jsx)("br", {}), "ethical validation to build a secure, transparent, and future-ready", (0, r.jsx)("br", {}), "AI cloud."]
                            })]
                        })
                    })
                })
            }));
            l.displayName = "WhatIsDeCenter";
            let o = l
        },
        7720: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => h
            });
            var r = a(5155),
                n = a(2115),
                s = a(3458),
                i = a(1129),
                l = a.n(i),
                o = a(6766),
                c = a(1922),
                d = a.n(c);
            let m = (0, n.memo)(e => {
                let {
                    number: t = "03"
                } = e;
                return (0, r.jsxs)("div", {
                    className: d().horizontalBorder,
                    children: [(0, r.jsx)("div", {
                        className: d().iconContainer,
                        "data-aos": "fade-left",
                        children: (0, r.jsx)("div", {
                            className: d().iconWrapper,
                            children: (0, r.jsx)(o.default, {
                                src: "/images/parallax/horizontal_border_icon.svg",
                                alt: "Border Icon",
                                width: 44,
                                height: 44
                            })
                        })
                    }), (0, r.jsx)("span", {
                        className: d().number,
                        "data-aos": "fade-left",
                        children: t
                    })]
                })
            });
            var _ = a(8405),
                p = a(9166),
                u = a(3096);
            let g = e => {
                    let {
                        src: t,
                        className: a
                    } = e, {
                        ref: s,
                        inView: i
                    } = (0, u.Wx)({
                        triggerOnce: !0,
                        threshold: .3
                    }), o = (0, n.useRef)(null);
                    return (0, n.useEffect)(() => {
                        i && o.current && o.current.play().catch(() => {})
                    }, [i]), (0, r.jsx)("div", {
                        className: l().videoWrapper,
                        ref: s,
                        children: (0, r.jsx)("div", {
                            className: l().videoInner,
                            children: (0, r.jsx)("video", {
                                className: a,
                                ref: o,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                children: (0, r.jsx)("source", {
                                    src: t,
                                    type: "video/mp4"
                                })
                            })
                        })
                    })
                },
                x = () => {
                    let [e, t] = (0, n.useState)(null), [a, i] = (0, n.useState)(null), o = (0, _.A)(), c = a => {
                        t(e === a ? null : a)
                    }, d = e => {
                        i(a === e ? null : e)
                    }, p = [{
                        title: "Core Infrastructure Layer",
                        description: "High-density data centers serve as core master nodes, delivering unmatched performance, low latency, and fault-tolerant capacity"
                    }, {
                        title: "Extended Infrastructure Layer",
                        description: "DePIN contributors expand coverage and capacity, enabling scalable, decentralized AI workloads and services"
                    }], u = [{
                        title: "AI Ethics Validation",
                        description: "Every AI model must pass DeCCM’s ethical checks for bias, sensitive content, and harmful behavior, ensuring fairness and user protection before deployment."
                    }, {
                        title: "Full-Scope Model Assessment",
                        description: "Beyond ethics, DeCCM assesses AI usability, logical consistency, and fidelity to ensure models deliver practical, relevant, and valuable responses tailored to human needs."
                    }];
                    return o ? (0, r.jsxs)("div", {
                        id: "parallax",
                        className: l().mobileContainer,
                        children: [(0, r.jsxs)("section", {
                            className: l().mobileSection,
                            children: [(0, r.jsx)(m, {
                                number: "01"
                            }), (0, r.jsxs)("div", {
                                className: l().titleContainer,
                                "data-aos": "fade-up",
                                children: [(0, r.jsx)("h2", {
                                    className: l().title,
                                    children: "ContainerMesh"
                                }), (0, r.jsx)("p", {
                                    className: l().description,
                                    children: "Built on a distributed physical core, ContainerMesh transforms cloud infrastructure by integrating datacenters with edge and community-driven nodes—enabling low-latency, high-availability AI services beyond the limits of centralized architecture."
                                })]
                            }), (0, r.jsx)("div", {
                                className: l().videoContainer,
                                children: (0, r.jsx)(g, {
                                    src: "/videos/parallax/c20.mp4",
                                    className: l().mobileVideo
                                })
                            }), (0, r.jsx)("div", {
                                className: l().cardsContainer,
                                children: p.map((t, a) => (0, r.jsxs)("div", {
                                    className: "".concat(l().card, " ").concat(e === a ? l().cardOpen : ""),
                                    onClick: () => c(a),
                                    children: [(0, r.jsxs)("div", {
                                        className: l().cardHeader,
                                        children: [(0, r.jsx)("h3", {
                                            className: l().cardTitle,
                                            children: t.title
                                        }), (0, r.jsx)("svg", {
                                            className: "".concat(l().cardArrow, " ").concat(e === a ? l().cardArrowOpen : ""),
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, r.jsx)("path", {
                                                d: "M6 9L12 15L18 9",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "".concat(l().cardContent, " ").concat(e === a ? l().cardContentOpen : ""),
                                        children: (0, r.jsx)("p", {
                                            className: l().cardDescription,
                                            children: t.description
                                        })
                                    })]
                                }, a))
                            })]
                        }), (0, r.jsxs)("section", {
                            className: l().mobileSection,
                            children: [(0, r.jsx)(m, {
                                number: "02"
                            }), (0, r.jsxs)("div", {
                                className: l().titleContainer,
                                children: [(0, r.jsx)("h2", {
                                    className: l().title,
                                    children: "DeCCM"
                                }), (0, r.jsx)("p", {
                                    className: l().description,
                                    children: "A crowdsourced cognitive network empowering global communities to audit, evaluate, and monitor AI behavior transparently and decentralized. Human-in-the-Loop Cloud infrastructure - for scalable and ethical AI deployment."
                                })]
                            }), (0, r.jsx)("div", {
                                className: l().videoContainer,
                                children: (0, r.jsx)(g, {
                                    src: "/videos/parallax/c19+c11.mp4",
                                    className: l().mobileVideo
                                })
                            }), (0, r.jsx)("div", {
                                className: l().cardsContainer,
                                children: u.map((e, t) => (0, r.jsxs)("div", {
                                    className: "".concat(l().card, " ").concat(a === t ? l().cardOpen : ""),
                                    onClick: () => d(t),
                                    children: [(0, r.jsxs)("div", {
                                        className: l().cardHeader,
                                        children: [(0, r.jsx)("h3", {
                                            className: l().cardTitle,
                                            children: e.title
                                        }), (0, r.jsx)("svg", {
                                            className: "".concat(l().cardArrow, " ").concat(a === t ? l().cardArrowOpen : ""),
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, r.jsx)("path", {
                                                d: "M6 9L12 15L18 9",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "".concat(l().cardContent, " ").concat(a === t ? l().cardContentOpen : ""),
                                        children: (0, r.jsx)("p", {
                                            className: l().cardDescription,
                                            children: e.description
                                        })
                                    })]
                                }, t))
                            })]
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("section", {
                            id: "parallax",
                            className: l().row,
                            children: [(0, r.jsx)("div", {
                                className: l().sidebar,
                                children: (0, r.jsx)(s.A, {
                                    offsetTop: 115,
                                    offsetBottom: 0,
                                    children: (0, r.jsx)("div", {
                                        className: l().sidebarItem,
                                        children: (0, r.jsx)(g, {
                                            src: "/videos/parallax/c20.mp4",
                                            className: l().video
                                        })
                                    })
                                })
                            }), (0, r.jsxs)("div", {
                                className: l().content,
                                children: [(0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "628",
                                    height: "852",
                                    viewBox: "0 0 628 852",
                                    fill: "none",
                                    children: (0, r.jsx)("path", {
                                        d: "M46.2195 110V0H628L628 851.941H46.2198L46.2195 358L0.0814209 324.5V143.5L46.2195 110Z",
                                        fill: "#181818"
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: l().inner,
                                    children: [(0, r.jsx)(m, {
                                        number: "01"
                                    }), (0, r.jsxs)("section", {
                                        className: l().titleSection,
                                        "data-aos": "fade-left",
                                        children: [(0, r.jsx)("h2", {
                                            className: l().title,
                                            children: "ContainerMesh"
                                        }), (0, r.jsx)("p", {
                                            className: l().description,
                                            children: "Built on a distributed physical core, ContainerMesh transforms cloud infrastructure by integrating datacenters with edge and community-driven nodes—enabling low-latency, high-availability AI services beyond the limits of centralized architecture."
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: l().cardsContainer,
                                        "data-aos": "fade-left",
                                        children: p.map((t, a) => (0, r.jsxs)("div", {
                                            className: "".concat(l().card, " ").concat(e === a ? l().cardOpen : ""),
                                            onClick: () => c(a),
                                            children: [(0, r.jsxs)("div", {
                                                className: l().cardHeader,
                                                children: [(0, r.jsx)("h3", {
                                                    className: l().cardTitle,
                                                    children: t.title
                                                }), (0, r.jsx)("svg", {
                                                    className: "".concat(l().cardArrow, " ").concat(e === a ? l().cardArrowOpen : ""),
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, r.jsx)("path", {
                                                        d: "M6 9L12 15L18 9",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    })
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "".concat(l().cardContent, " ").concat(e === a ? l().cardContentOpen : ""),
                                                children: (0, r.jsx)("p", {
                                                    className: l().cardDescription,
                                                    children: t.description
                                                })
                                            })]
                                        }, a))
                                    })]
                                })]
                            })]
                        }), (0, r.jsxs)("section", {
                            className: l().row,
                            children: [(0, r.jsx)("div", {
                                className: l().sidebar,
                                children: (0, r.jsx)(s.A, {
                                    offsetTop: 115,
                                    offsetBottom: 0,
                                    children: (0, r.jsx)("div", {
                                        className: l().sidebarItem,
                                        children: (0, r.jsx)(g, {
                                            src: "/videos/parallax/c19+c11.mp4",
                                            className: l().video
                                        })
                                    })
                                })
                            }), (0, r.jsxs)("div", {
                                className: l().content,
                                children: [(0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "628",
                                    height: "852",
                                    viewBox: "0 0 628 852",
                                    fill: "none",
                                    children: (0, r.jsx)("path", {
                                        d: "M46.2195 110V0H628L628 851.941H46.2198L46.2195 358L0.0814209 324.5V143.5L46.2195 110Z",
                                        fill: "#181818"
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: l().inner,
                                    children: [(0, r.jsx)(m, {
                                        number: "02"
                                    }), (0, r.jsxs)("section", {
                                        className: l().titleSection,
                                        "data-aos": "fade-left",
                                        children: [(0, r.jsx)("h2", {
                                            className: l().title,
                                            children: "DeCCM"
                                        }), (0, r.jsx)("p", {
                                            className: l().description,
                                            children: "A crowdsourced cognitive network empowering global communities to audit, evaluate, and monitor AI behavior transparently and decentralized. Human-in-the-Loop Cloud infrastructure - for scalable and ethical AI deployment."
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: l().cardsContainer,
                                        "data-aos": "fade-left",
                                        children: u.map((e, t) => (0, r.jsxs)("div", {
                                            className: "".concat(l().card, " ").concat(a === t ? l().cardOpen : ""),
                                            onClick: () => d(t),
                                            children: [(0, r.jsxs)("div", {
                                                className: l().cardHeader,
                                                children: [(0, r.jsx)("h3", {
                                                    className: l().cardTitle,
                                                    children: e.title
                                                }), (0, r.jsx)("svg", {
                                                    className: "".concat(l().cardArrow, " ").concat(a === t ? l().cardArrowOpen : ""),
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, r.jsx)("path", {
                                                        d: "M6 9L12 15L18 9",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    })
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "".concat(l().cardContent, " ").concat(a === t ? l().cardContentOpen : ""),
                                                children: (0, r.jsx)("p", {
                                                    className: l().cardDescription,
                                                    children: e.description
                                                })
                                            })]
                                        }, t))
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                h = () => (0, r.jsx)(p.A, {
                    children: (0, r.jsx)(x, {})
                })
        },
        8045: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => u
            });
            var r = a(5155),
                n = a(2115),
                s = a(9434),
                i = a(2493),
                l = a.n(i),
                o = a(8405),
                c = a(9166),
                d = a(8042);
            let m = [{
                    id: "1",
                    period: "Phase 1 (Completed)",
                    title: "Core Solution Architecture & DeCCM Framework"
                }, {
                    id: "2",
                    period: "Phase 2 (On going)",
                    title: "Kickoff: MVP Launch & Pilot Testing"
                }, {
                    id: "3",
                    period: "Phase 3",
                    title: "Enterprise-Ready AI Cloud & RWA Participation"
                }, {
                    id: "4",
                    period: "2026 Onward",
                    title: "Advanced AI & HPC Integration"
                }, {
                    id: "5",
                    period: "Future Vision",
                    title: "DeCenter's Next Frontier"
                }],
                _ = e => {
                    let {
                        items: t = m,
                        className: a
                    } = e, [i, c] = (0, n.useState)(!1), [d, _] = (0, n.useState)(0), [u, g] = (0, n.useState)(0), x = (0, o.A)(), h = (0, n.useRef)(null);
                    return (0, n.useEffect)(() => {
                        h.current && (h.current.scrollLeft = 0)
                    }, []), (0, r.jsxs)("section", {
                        className: (0, s.cn)(l().roadmap, a),
                        children: [(0, r.jsx)("div", {
                            className: l().roadmap__background
                        }), (0, r.jsxs)("div", {
                            className: l().roadmap__content,
                            children: [(0, r.jsxs)("div", {
                                className: l().roadmap__header,
                                children: [(0, r.jsx)("h2", {
                                    className: l().roadmap__title,
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "100",
                                    children: "Roadmap"
                                }), (0, r.jsx)("p", {
                                    className: l().roadmap__description,
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "150",
                                    children: "Every step is linked to a path toward a sustainable ecosystem, while adapting to technological and market changes."
                                })]
                            }), x ? (0, r.jsx)("div", {
                                ref: h,
                                className: l().roadmap__itemsContainerMobile,
                                "data-aos": "fade-up",
                                "data-aos-delay": "200",
                                children: t.map(e => (0, r.jsx)(p, {
                                    item: e,
                                    isMobile: x
                                }, e.id))
                            }) : (0, r.jsx)("div", {
                                ref: h,
                                className: l().roadmap__itemsContainer,
                                "data-aos": "fade-up",
                                "data-aos-delay": "200",
                                onMouseDown: e => {
                                    h.current && !x && (c(!0), _(e.pageX - h.current.offsetLeft), g(h.current.scrollLeft), document.body.style.cursor = "grabbing")
                                },
                                onMouseLeave: () => {
                                    i && !x && (c(!1), document.body.style.cursor = "default")
                                },
                                onMouseUp: () => {
                                    i && !x && (c(!1), document.body.style.cursor = "default")
                                },
                                onMouseMove: e => {
                                    if (!i || !h.current || x) return;
                                    e.preventDefault();
                                    let t = e.pageX - h.current.offsetLeft;
                                    h.current.scrollLeft = u - (t - d) * 2
                                },
                                onTouchStart: e => {
                                    h.current && !x && (c(!0), _(e.touches[0].pageX - h.current.offsetLeft), g(h.current.scrollLeft))
                                },
                                onTouchMove: e => {
                                    if (!i || !h.current || x) return;
                                    let t = e.touches[0].pageX - h.current.offsetLeft;
                                    h.current.scrollLeft = u - (t - d) * 2
                                },
                                onTouchEnd: () => {
                                    x || c(!1)
                                },
                                children: (0, r.jsx)("div", {
                                    className: l().roadmap__items,
                                    children: t.map(e => (0, r.jsx)(p, {
                                        item: e,
                                        isMobile: x
                                    }, e.id))
                                })
                            })]
                        })]
                    })
                },
                p = e => {
                    let {
                        item: t,
                        isMobile: a
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: (0, s.cn)(l().roadmap__card, {
                            [l().roadmap__card_active]: t.isActive,
                            [l().roadmap__card_mobile]: a
                        }),
                        "data-aos": "fade-up",
                        "data-aos-delay": "".concat(Math.min(100 * (parseInt(t.id) % 5), 400)),
                        children: [(0, r.jsx)("div", {
                            className: l().roadmap__cardContent,
                            children: (0, r.jsx)("div", {
                                className: l().roadmap__cardTitle,
                                children: (0, d.Ay)(t.title)
                            })
                        }), (0, r.jsx)("div", {
                            className: l().roadmap__cardPeriod,
                            children: (0, r.jsx)("span", {
                                children: t.period
                            })
                        })]
                    })
                },
                u = e => (0, r.jsx)(c.A, {
                    children: (0, r.jsx)(_, {
                        ...e
                    })
                })
        },
        8125: e => {
            e.exports = {
                container: "DecenterBanner_container__TBQK_",
                backgroundPatterns: "DecenterBanner_backgroundPatterns__xLVKM",
                patternGroup: "DecenterBanner_patternGroup__ZHhDa",
                pattern: "DecenterBanner_pattern__MSU8D",
                content: "DecenterBanner_content__iCM_o",
                colLeft: "DecenterBanner_colLeft__wvU6h",
                colRight: "DecenterBanner_colRight___w5_u",
                title: "DecenterBanner_title__q3uD4",
                subtitle: "DecenterBanner_subtitle__V5rop",
                buttonContainer: "DecenterBanner_buttonContainer__85X3T",
                button: "DecenterBanner_button__bo6Nl"
            }
        },
        8127: (e, t, a) => {
            "use strict";
            a.d(t, {
                g: () => _
            });
            var r = a(5155),
                n = a(2115),
                s = a(6766),
                i = a(3594),
                l = a.n(i);
            let o = (0, n.memo)(e => {
                let {
                    title: t,
                    percentage: a
                } = e, n = parseInt(a, 10), s = 75 * Math.PI;
                return (0, r.jsxs)("div", {
                    className: "flex flex-col items-center",
                    children: [(0, r.jsxs)("div", {
                        className: l().circleContainer,
                        children: [(0, r.jsxs)("svg", {
                            height: 80,
                            width: 80,
                            className: l().svgContainer,
                            children: [(0, r.jsx)("circle", {
                                className: l().backgroundCircle,
                                r: 37.5,
                                cx: 40,
                                cy: 40
                            }), (0, r.jsx)("circle", {
                                className: l().progressCircle,
                                strokeDasharray: s + " " + s,
                                style: {
                                    strokeDashoffset: n <= 100 ? s - n / 100 * s : s - n / 900 * s
                                },
                                r: 37.5,
                                cx: 40,
                                cy: 40
                            })]
                        }), (0, r.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: (0, r.jsx)("p", {
                                className: "font-bold text-[15px] text-white tracking-[-0.04em]",
                                children: a
                            })
                        })]
                    }), (0, r.jsx)("span", {
                        className: "text-xs text-white tracking-[-0.08em] text-center",
                        children: t
                    })]
                })
            });
            o.displayName = "CircularProgressMetric";
            let c = (0, n.memo)(e => {
                let {
                    icon: t,
                    text: a
                } = e;
                return (0, r.jsxs)("div", {
                    className: "flex items-center gap-2 py-1",
                    children: [(0, r.jsx)("div", {
                        className: "w-6 h-6 flex items-center justify-center",
                        children: (0, r.jsx)(s.default, {
                            src: t,
                            alt: a,
                            width: 24,
                            height: 24
                        })
                    }), (0, r.jsx)("span", {
                        className: l().featureText,
                        children: a
                    })]
                })
            });
            c.displayName = "FeatureButton";
            let d = (0, n.memo)(e => {
                let {
                    name: t,
                    city: a,
                    country: n,
                    isHeader: s = !1,
                    isHighlighted: i = !1
                } = e, l = s ? "text-white/40" : i ? "text-[#FF713F]" : "text-white", o = s ? "font-['Space_Mono'] text-xs uppercase tracking-[-0.03em] font-medium" : "font-['Space_Mono'] text-xs tracking-tighter";
                return (0, r.jsxs)("div", {
                    className: "grid grid-cols-[50%_25%_25%] gap-1",
                    children: [(0, r.jsx)("div", {
                        className: "".concat(l, " ").concat(o, " leading-relaxed"),
                        children: t
                    }), (0, r.jsx)("div", {
                        className: "".concat(l, " ").concat(o, " leading-relaxed"),
                        children: a
                    }), (0, r.jsx)("div", {
                        className: "".concat(l, " ").concat(o, " leading-relaxed"),
                        children: n
                    })]
                })
            });
            d.displayName = "DataCenterRow";
            let m = e => {
                    let {
                        src: t,
                        className: a
                    } = e;
                    return (0, r.jsx)("div", {
                        className: l().videoContent,
                        children: (0, r.jsx)("video", {
                            className: a,
                            autoPlay: !0,
                            muted: !0,
                            playsInline: !0,
                            loop: !0,
                            preload: "auto",
                            children: (0, r.jsx)("source", {
                                src: t,
                                type: "video/mp4"
                            })
                        })
                    })
                },
                _ = (0, n.memo)(() => {
                    let e = [{
                        id: 1,
                        name: "Equinix HK1, MEGA-i..",
                        city: "Hong Kong",
                        country: "China",
                        highlighted: !0
                    }, {
                        id: 2,
                        name: "eASPNet Data Center",
                        city: "Taipei",
                        country: "Taiwan"
                    }, {
                        id: 3,
                        name: "Equinix SG1",
                        city: "Singapore",
                        country: "Singapore"
                    }, {
                        id: 4,
                        name: "Global Switch",
                        city: "Singapore",
                        country: "Singapore"
                    }, {
                        id: 5,
                        name: "Equinix TY2",
                        city: "Tokyo",
                        country: "Japan"
                    }, {
                        id: 6,
                        name: "NTT DATA Otemachi ...",
                        city: "Tokyo",
                        country: "Japan"
                    }, {
                        id: 7,
                        name: "AT TOKYO (CC1/CC2)*",
                        city: "Tokyo",
                        country: "Japan"
                    }, {
                        id: 8,
                        name: "KINX IX Center (Dogok)",
                        city: "Seoul",
                        country: "Korea"
                    }, {
                        id: 9,
                        name: "1 Web Werks Datacenter",
                        city: "Mumbai",
                        country: "India"
                    }, {
                        id: 10,
                        name: "CMC IDC HCMC",
                        city: "HCMC",
                        country: "Vietnam"
                    }, {
                        id: 11,
                        name: "IPTP_USDC HCMC",
                        city: "HCMC",
                        country: "Vietnam"
                    }, {
                        id: 12,
                        name: "Danang Software Park 1",
                        city: "Da Nang",
                        country: "Vietnam"
                    }, {
                        id: 13,
                        name: "CMC IDC Hanoi",
                        city: "Ha Noi",
                        country: "Vietnam"
                    }, {
                        id: 14,
                        name: "NextByte-Cyber1",
                        city: "Jakarta",
                        country: "Indonesia"
                    }, {
                        id: 15,
                        name: "CSF CX1/TelcoHub1",
                        city: "Kuala Lumpur",
                        country: "Malaysia"
                    }];
                    return (0, r.jsx)("section", {
                        className: "".concat(l().sectionContainer),
                        children: (0, r.jsxs)("div", {
                            className: l().inner,
                            children: [(0, r.jsx)("div", {
                                className: l().videoWrapper,
                                children: (0, r.jsx)(m, {
                                    src: "/videos/c14.mp4",
                                    className: l().video
                                })
                            }), (0, r.jsxs)("div", {
                                className: "max-w-7xl mt-5 lg:mt-0 mx-auto relative lg:h-full",
                                children: [(0, r.jsx)("div", {
                                    className: "".concat(l().backgroundDecoration, " ").concat(l().topLeft)
                                }), (0, r.jsx)("div", {
                                    className: "".concat(l().backgroundDecoration, " ").concat(l().topRight)
                                }), (0, r.jsx)("div", {
                                    className: "".concat(l().backgroundDecoration, " ").concat(l().bottomLeft)
                                }), (0, r.jsx)("div", {
                                    className: l().smallDecoration
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row gap-10 lg:h-full lg:justify-between",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex-1 lg:flex lg:flex-col lg:justify-between md:mt-[30px]",
                                        children: [(0, r.jsxs)("div", {
                                            className: "mb-8",
                                            children: [(0, r.jsx)("h2", {
                                                className: "font-['Space_Mono'] lg:text-4xl text-2xl text-white tracking-tighter mb-4",
                                                children: "Decentralized Compute Network"
                                            }), (0, r.jsxs)("p", {
                                                className: "font-['Space_Mono'] text-base text-white leading-relaxed tracking-tight max-w-xl",
                                                children: ["Decentralized computing infrastructure that", (0, r.jsx)("br", {
                                                    className: "hidden lg:block"
                                                }), " combines DePIN and RWA, optimizing", (0, r.jsx)("br", {}), "computing power, reducing costs, and ", (0, r.jsx)("br", {}), "expanding accessibility efficiently."]
                                            }), (0, r.jsx)("a", {
                                                href: "https://www.peeringdb.com/net/1046",
                                                target: "_blank",
                                                className: "inline-block font-mono mt-[20px] text-white py-3 px-4 text-sm sm:text-base border border-white/15 rounded-lg bg-white/5 shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.2)] backdrop-blur-[30px] hover:bg-white/10 transition-colors",
                                                children: "Get it now!"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            children: [(0, r.jsxs)("div", {
                                                className: "".concat(l().moduleBox, " ").concat(l().gpuMetrics, " mb-8"),
                                                children: [(0, r.jsx)("h3", {
                                                    className: l().moduleTitle,
                                                    children: "CAPACITY IN NUMBERS"
                                                }), (0, r.jsx)("div", {
                                                    className: "flex justify-between gap-1 mb-2",
                                                    children: [{
                                                        title: "TBIT/S",
                                                        percentage: "35"
                                                    }, {
                                                        title: "Cable System",
                                                        percentage: "100"
                                                    }, {
                                                        title: "Peering Ports",
                                                        percentage: "1000"
                                                    }].map((e, t) => (0, r.jsx)(o, {
                                                        title: e.title,
                                                        percentage: e.percentage
                                                    }, t))
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "".concat(l().moduleBox, " mb-8"),
                                                children: [(0, r.jsx)("h3", {
                                                    className: l().moduleTitle,
                                                    children: "CHECK THE DEVICES"
                                                }), (0, r.jsx)("div", {
                                                    className: "".concat(l().totalDevices, " mb-4"),
                                                    children: (0, r.jsx)("p", {
                                                        className: "font-['Space_Mono'] font-bold text-lg text-white",
                                                        children: "TOTAL: ..."
                                                    })
                                                }), (0, r.jsx)("div", {
                                                    className: "flex flex-col gap-2",
                                                    children: [{
                                                        icon: "/images/decentral/chip-icon.svg",
                                                        text: "Community Devices"
                                                    }, {
                                                        icon: "/images/decentral/sd-card-icon.svg",
                                                        text: "GPU Fractions"
                                                    }, {
                                                        icon: "/images/decentral/ai-logo-icon.svg",
                                                        text: "Edge AI Devices"
                                                    }].map((e, t) => (0, r.jsx)(c, {
                                                        icon: e.icon,
                                                        text: e.text
                                                    }, t))
                                                })]
                                            })]
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "lg:w-[350px] shrink-0 lg:flex lg:flex-col lg:justify-end",
                                        children: [(0, r.jsxs)("div", {
                                            className: l().dataCenterWrapper,
                                            children: [(0, r.jsx)("div", {
                                                className: l().datacentersHeader,
                                                children: (0, r.jsx)(d, {
                                                    name: "Name",
                                                    city: "City",
                                                    country: "Country",
                                                    isHeader: !0
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: l().datacentersScroll,
                                                children: (0, r.jsxs)("div", {
                                                    className: l().locationsContainer,
                                                    children: [e.map(e => (0, r.jsx)(d, {
                                                        name: e.name,
                                                        city: e.city,
                                                        country: e.country,
                                                        isHighlighted: e.highlighted
                                                    }, "a-".concat(e.id))), e.map(e => (0, r.jsx)(d, {
                                                        name: e.name,
                                                        city: e.city,
                                                        country: e.country,
                                                        isHighlighted: e.highlighted
                                                    }, "b-".concat(e.id)))]
                                                })
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: l().moduleBox,
                                            children: (0, r.jsx)("div", {
                                                className: l().statsList,
                                                children: [{
                                                    number: "230+",
                                                    text: "POINTS OF PRESENCE"
                                                }, {
                                                    number: "77+",
                                                    text: "HOST/COLO FACILITIES"
                                                }, {
                                                    number: "70+",
                                                    text: "CITIES"
                                                }, {
                                                    number: "37+",
                                                    text: "COUNTRIES"
                                                }].map((e, t) => (0, r.jsxs)("div", {
                                                    className: "flex items-end",
                                                    children: [(0, r.jsx)("span", {
                                                        className: l().statNumber,
                                                        children: e.number
                                                    }), (0, r.jsx)("span", {
                                                        className: l().statText,
                                                        children: e.text
                                                    })]
                                                }, t))
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                })
        },
        8405: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            var r = a(2115);
            let n = () => {
                let [e, t] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    let e = () => {
                        let e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                            a = navigator.userAgent.toLowerCase(),
                            r = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(a),
                            n = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
                        t(e <= 1024 || n || r)
                    };
                    return e(), window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, []), e
            }
        },
        8676: e => {
            e.exports = {
                scrollingTextContainer: "styles_scrollingTextContainer__OJnwB",
                scrollingRow: "styles_scrollingRow___MQoV",
                scrollLeft: "styles_scrollLeft__O_Zms",
                scrollRight: "styles_scrollRight__s7trj",
                textItem: "styles_textItem__6H5cG",
                primary: "styles_primary__amB2Z",
                secondary: "styles_secondary__fDYVX",
                accent: "styles_accent__PYTCJ",
                imageWrapper: "styles_imageWrapper__OXXHt",
                videoWrapper: "styles_videoWrapper__Qz2U2",
                dataText: "styles_dataText__jVdUQ"
            }
        },
        8765: e => {
            e.exports = {
                footer: "Footer_footer__7blBZ",
                footer__background: "Footer_footer__background__knEJz",
                footer__backgroundImage: "Footer_footer__backgroundImage__Ber1v",
                footer__container: "Footer_footer__container__PWWIC",
                footer__top: "Footer_footer__top__pxtE5",
                footer__branding: "Footer_footer__branding___zfOf",
                footer__logo: "Footer_footer__logo__Txoyl",
                footer__description: "Footer_footer__description__422j7",
                footer__social: "Footer_footer__social__Ui_90",
                footer__socialLink: "Footer_footer__socialLink__FzJbx",
                footer__socialIcon: "Footer_footer__socialIcon__KzysO",
                footer__links: "Footer_footer__links__c4a2_",
                footer__linksSection: "Footer_footer__linksSection__HwvqE",
                footer__linksSectionTitle: "Footer_footer__linksSectionTitle__Jc4Su",
                footer__linksList: "Footer_footer__linksList__EDMko",
                footer__linksItem: "Footer_footer__linksItem__ma4Y1",
                footer__link: "Footer_footer__link__4PT1x",
                footer__bottom: "Footer_footer__bottom__6AJ_N",
                footer__copyright: "Footer_footer__copyright__sR43Q",
                footer__copyrightLink: "Footer_footer__copyrightLink__UfJDX",
                backToTop: "Footer_backToTop__2Bz22",
                backToTop_visible: "Footer_backToTop_visible__SF_2V"
            }
        },
        8994: (e, t, a) => {
            "use strict";
            a.d(t, {
                _: () => x
            });
            var r = a(5155),
                n = a(2115),
                s = a(7677),
                i = a(7269),
                l = a(8405),
                o = a(5940),
                c = a.n(o),
                d = a(9166),
                m = a(6766),
                _ = a(3096);
            a(2252), a(9408), a(6970);
            let p = [{
                    id: "tier1",
                    title: "Gateway 1: RWA Vault Owner",
                    description: "Fund the Core. Earn from Real Compute.",
                    color: "#FF713F",
                    bgColor: "#FF7D4B",
                    cardLabel: "GPU",
                    cardBgColor: "#FF7D4B",
                    cardInnerColor: "rgba(255, 125, 75, 0.1)",
                    videoUrl: "/videos/gpu/c13.mp4"
                }, {
                    id: "tier2",
                    title: "Gateway 2: Community Node Operator",
                    description: "Contribute Compute. Join the Mesh.",
                    color: "#FFFFFF",
                    bgColor: "#FF7D4B",
                    cardLabel: "NFT",
                    cardBgColor: "#292929",
                    cardInnerColor: "rgba(150, 150, 150, 0.1)",
                    videoUrl: "/videos/gpu/c13.mp4"
                }, {
                    id: "tier3",
                    title: "Gateway 3: Guardian Node Operator",
                    description: "Secure the Network. Govern the Protocol.",
                    color: "#FFFFFF",
                    bgColor: "#FF7D4B",
                    cardLabel: "AI",
                    cardBgColor: "#292929",
                    cardInnerColor: "rgba(21, 4, 89, 0.2)",
                    videoUrl: "/videos/gpu/c13.mp4"
                }],
                u = e => {
                    let {
                        src: t,
                        className: a
                    } = e, {
                        ref: s,
                        inView: i
                    } = (0, _.Wx)({
                        triggerOnce: !0,
                        threshold: .3
                    }), l = (0, n.useRef)(null);
                    return (0, n.useEffect)(() => {
                        i && l.current && l.current.play().catch(() => {})
                    }, [i]), (0, r.jsx)("div", {
                        ref: s,
                        children: (0, r.jsx)("video", {
                            className: a,
                            ref: l,
                            muted: !0,
                            playsInline: !0,
                            preload: "auto",
                            children: (0, r.jsx)("source", {
                                src: t,
                                type: "video/mp4"
                            })
                        })
                    })
                },
                g = () => {
                    let [e, t] = (0, n.useState)("tier1"), a = (0, l.A)();
                    return (0, r.jsxs)("div", {
                        className: c().container,
                        children: [(0, r.jsx)("div", {
                            className: c().gradient
                        }), (0, r.jsx)("div", {
                            className: "max-w-7xl mx-auto px-4 lg:px-0",
                            children: a ? (0, r.jsxs)("div", {
                                className: c().mobileContent,
                                children: [(0, r.jsxs)("div", {
                                    className: c().mobileTitleSection,
                                    children: [(0, r.jsxs)("h1", {
                                        className: c().mobileTitle,
                                        children: ["RWA -", (0, r.jsx)("br", {}), "Tokenized GPU Ownership"]
                                    }), (0, r.jsx)("p", {
                                        className: c().mobileSubtitle,
                                        children: "DeCenter transforms real infrastructure into productive digital assets. Join our network by contributing resources or invest in tokenized GPU assets to unlock DePIN rewards, staking, and DAO governance."
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: c().swiperContainer,
                                    children: (0, r.jsx)(s.RC, {
                                        modules: [i.Vx, i.dK],
                                        spaceBetween: 30,
                                        slidesPerView: 1,
                                        navigation: !0,
                                        pagination: {
                                            clickable: !0
                                        },
                                        onSlideChange: e => {
                                            t(p[e.activeIndex].id)
                                        },
                                        className: c().swiper,
                                        children: p.map(e => (0, r.jsx)(s.qr, {
                                            className: c().swiperSlide,
                                            children: (0, r.jsxs)("div", {
                                                className: c().slideCard,
                                                children: [(0, r.jsxs)("div", {
                                                    className: c().slideContent,
                                                    children: [(0, r.jsx)("div", {
                                                        className: c().slideIconContainer,
                                                        children: (0, r.jsx)("div", {
                                                            className: c().slideIcon,
                                                            style: {
                                                                backgroundColor: e.bgColor
                                                            },
                                                            children: (0, r.jsx)(m.default, {
                                                                src: "/images/token/icon-tier.svg",
                                                                alt: "icon",
                                                                width: 15,
                                                                height: 15
                                                            })
                                                        })
                                                    }), (0, r.jsx)("h3", {
                                                        className: c().slideTitle,
                                                        style: {
                                                            color: "#FF713F"
                                                        },
                                                        children: e.title
                                                    }), (0, r.jsx)("p", {
                                                        className: c().slideDescription,
                                                        children: e.description
                                                    })]
                                                }), (0, r.jsx)("div", {
                                                    className: c().gpuCardInner,
                                                    children: (0, r.jsx)("div", {
                                                        className: c().gpuLabel,
                                                        children: (0, r.jsx)(u, {
                                                            src: e.videoUrl,
                                                            className: c().video
                                                        })
                                                    })
                                                })]
                                            })
                                        }, e.id))
                                    })
                                }), (0, r.jsx)("p", {
                                    className: c().mobileQuote,
                                    children: "‘‘A Community-Powered AI Infrastructure’’"
                                })]
                            }) : (0, r.jsxs)("div", {
                                className: c().content,
                                children: [(0, r.jsxs)("div", {
                                    className: c().left,
                                    children: [(0, r.jsxs)("div", {
                                        className: c().titleSection,
                                        children: [(0, r.jsxs)("h1", {
                                            className: c().title,
                                            "data-aos": "fade-up",
                                            children: ["RWA -", (0, r.jsx)("br", {}), "Tokenized GPU Ownership"]
                                        }), (0, r.jsx)("p", {
                                            className: c().subtitle,
                                            "data-aos": "fade-up",
                                            children: "DeCenter transforms real infrastructure into productive digital assets. Join our network by contributing resources or investing in tokenized GPU assets to unlock DePIN rewards, staking, and DAO governance."
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: c().tabs,
                                        "data-aos": "fade-up",
                                        children: p.map(a => (0, r.jsxs)("div", {
                                            className: "".concat(c().tab, " ").concat(e === a.id ? c().activeTab : ""),
                                            onClick: () => t(a.id),
                                            children: [(0, r.jsx)("div", {
                                                className: c().iconContainer,
                                                style: {
                                                    backgroundColor: e === a.id ? a.bgColor : ""
                                                },
                                                children: (0, r.jsx)("div", {
                                                    className: c().icon,
                                                    style: {
                                                        color: e === a.id ? "#FF713F" : "rgba(255, 255, 255, 0.6)"
                                                    },
                                                    children: (0, r.jsx)(m.default, {
                                                        src: "/images/token/icon-tier.svg",
                                                        alt: "icon",
                                                        width: 28,
                                                        height: 28
                                                    })
                                                })
                                            }), (0, r.jsxs)("div", {
                                                className: c().tabContent,
                                                children: [(0, r.jsx)("h3", {
                                                    className: c().tabTitle,
                                                    style: {
                                                        color: e === a.id ? "#FF713F" : "rgba(255, 255, 255, 1)"
                                                    },
                                                    children: a.title
                                                }), (0, r.jsx)("p", {
                                                    className: c().tabDescription,
                                                    children: a.description
                                                })]
                                            })]
                                        }, a.id))
                                    }), (0, r.jsx)("p", {
                                        className: c().quote,
                                        "data-aos": "fade-up",
                                        children: "‘‘A Community-Powered AI Infrastructure’’"
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: c().right,
                                    children: (0, r.jsx)("div", {
                                        className: c().gpuGraphic,
                                        children: p.map(t => e === t.id && (0, r.jsx)("div", {
                                            className: c().gpuCard,
                                            "data-aos": "fade-up",
                                            children: (0, r.jsx)("div", {
                                                className: c().gpuCardInner,
                                                children: (0, r.jsx)("div", {
                                                    className: c().gpuLabel,
                                                    children: (0, r.jsx)(u, {
                                                        src: t.videoUrl,
                                                        className: c().video
                                                    })
                                                })
                                            })
                                        }, t.id))
                                    })
                                })]
                            })
                        })]
                    })
                },
                x = (0, n.memo)(() => (0, r.jsx)(d.A, {
                    children: (0, r.jsx)(g, {})
                }))
        },
        9166: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            var r = a(5155),
                n = a(2115);

            function s(e) {
                let {
                    children: t
                } = e, [a, s] = (0, n.useState)(!1);
                return ((0, n.useEffect)(() => {
                    s(!0)
                }, []), a) ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        9336: (e, t, a) => {
            "use strict";
            a.d(t, {
                x: () => o
            });
            var r = a(5155);
            a(2115);
            var n = a(6766),
                s = a(9434),
                i = a(5887),
                l = a.n(i);
            let o = e => {
                let {
                    className: t
                } = e;
                return (0, r.jsxs)("section", {
                    className: (0, s.cn)("relative w-full  flex justify-center items-center  overflow-hidden", l().linktree, t),
                    children: [(0, r.jsxs)("div", {
                        className: (0, s.cn)("relative inset-0 z-10", l().linktree__background),
                        "data-aos": "fade-in",
                        children: [(0, r.jsx)(n.default, {
                            src: "/images/hero-bg.png",
                            alt: "DeCenter Background",
                            fill: !0,
                            priority: !0,
                            sizes: "100vw",
                            className: (0, s.cn)("object-cover object-center", l().linktree__backgroundImage)
                        }), (0, r.jsx)("div", {
                            className: (0, s.cn)("absolute inset-0 z-20", l().linktree__overlay)
                        }), (0, r.jsx)("div", {
                            className: l().linktree__topGradient
                        }), (0, r.jsx)("div", {
                            className: l().linktree__bottomGradient
                        })]
                    }), (0, r.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: (0, s.cn)("z-30 max-w-[1000px] flex flex-col items-center text-center gap-8 px-4 md:gap-8", l().linktree__content),
                        children: [(0, r.jsxs)("h1", {
                            className: (0, s.cn)("font-mono font-normal text-2xl md:text-[40px] leading-[1.48] md:leading-[1.4] text-center", l().linktree__title),
                            children: ["Be one of us — everything DeCenter,", (0, r.jsx)("br", {}), "one tap away!"]
                        }), (0, r.jsx)("a", {
                            href: "https://link3.to/decenter_ai",
                            target: "_blank",
                            className: (0, s.cn)("w-full md:w-auto inline-flex items-center justify-center bg-white/5 border border-white/15 rounded-lg py-3 px-6 font-mono font-normal text-base leading-6 text-white transition-all hover:bg-white/10 hover:translate-y-[-2px]", l().linktree__button),
                            children: "Explore Here!"
                        })]
                    })]
                })
            }
        },
        9434: (e, t, a) => {
            "use strict";
            a.d(t, {
                cn: () => s
            });
            var r = a(2596),
                n = a(9688);

            function s() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, n.QP)((0, r.$)(t))
            }
        },
        9615: (e, t, a) => {
            "use strict";
            a.d(t, {
                d: () => _,
                A: () => f
            });
            var r = a(5155),
                n = a(2115),
                s = a(9434),
                i = a(6766),
                l = a(8125),
                o = a.n(l),
                c = a(3096);
            let d = ["Deploy on-demand compute", "Host intelligent agents globally", "Scale with real-time, low-latency, infrastructure", "Access curated AI datasets"],
                m = (0, n.memo)(() => {
                    let [e, t] = (0, n.useState)(["", "", "", ""]), [a, l] = (0, n.useState)(0), [m, _] = (0, n.useState)(0), {
                        ref: p,
                        inView: u
                    } = (0, c.Wx)({
                        triggerOnce: !0,
                        threshold: .3
                    });
                    return (0, n.useEffect)(() => {
                        if (u && !(a >= d.length)) {
                            if (m < d[a].length) {
                                let e = setTimeout(() => {
                                    t(e => {
                                        let t = [...e];
                                        return t[a] = t[a] + d[a][m], t
                                    }), _(e => e + 1)
                                }, 40);
                                return () => clearTimeout(e)
                            } else if (a < d.length - 1) {
                                let e = setTimeout(() => {
                                    l(e => e + 1), _(0)
                                }, 400);
                                return () => clearTimeout(e)
                            }
                        }
                    }, [m, a, u]), (0, n.useEffect)(() => {
                        u || (t(["", "", "", ""]), l(0), _(0))
                    }, [u]), (0, r.jsxs)("section", {
                        ref: p,
                        className: (0, s.cn)(o().container, "py-10 md:py-15 lg:py-20"),
                        children: [(0, r.jsx)("div", {
                            className: o().backgroundPatterns,
                            children: (0, r.jsx)(i.default, {
                                src: "/images/decenter/bg-decenter.png",
                                alt: "Pattern",
                                fill: !0,
                                className: o().partnerLogos__pattern
                            })
                        }), (0, r.jsxs)("div", {
                            className: (0, s.cn)(o().content, "max-w-7xl mx-auto"),
                            children: [(0, r.jsxs)("div", {
                                className: o().colLeft,
                                "data-aos": "fade-up",
                                children: [(0, r.jsxs)("h2", {
                                    className: (0, s.cn)(o().title, "text-transparent bg-clip-text bg-gradient-to-b from-white to-[#494949]"),
                                    children: ["DeCenter is Live!", (0, r.jsx)("br", {}), "Enterprise-Grade AI"]
                                }), (0, r.jsxs)("div", {
                                    className: o().buttonContainer,
                                    children: [(0, r.jsx)("a", {
                                        href: "https://www.iptp.net/iptp-tools/best-path",
                                        target: "_blank",
                                        className: o().button,
                                        children: "Request a Quote"
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: o().colRight,
                                "data-aos": "fade-up",
                                children: (0, r.jsx)("div", {
                                    className: (0, s.cn)(o().subtitle, "text-transparent bg-clip-text bg-gradient-to-b from-white to-[#494949] md:from-white md:to-[#494949]"),
                                    children: e.map((e, t) => (0, r.jsx)("p", {
                                        children: e
                                    }, t))
                                })
                            })]
                        })]
                    })
                });
            m.displayName = "DecenterBanner";
            let _ = (0, n.memo)(m);
            var p = a(3042),
                u = a.n(p),
                g = a(8042);
            let x = e => {
                    let {
                        src: t,
                        className: a
                    } = e, {
                        ref: s,
                        inView: i
                    } = (0, c.Wx)({
                        triggerOnce: !0,
                        threshold: .3
                    }), l = n.useRef(null);
                    return n.useEffect(() => {
                        i && l.current && l.current.play().catch(() => {})
                    }, [i]), (0, r.jsx)("div", {
                        ref: s,
                        children: (0, r.jsx)("video", {
                            className: a,
                            ref: l,
                            muted: !0,
                            playsInline: !0,
                            preload: "auto",
                            children: (0, r.jsx)("source", {
                                src: t,
                                type: "video/mp4"
                            })
                        })
                    })
                },
                h = (0, n.memo)(e => {
                    let {
                        title: t,
                        icon: a,
                        customBg: s = !1,
                        networkEffect: l = !1,
                        aiEffect: o = !1,
                        bgUrl: c
                    } = e, d = n.useRef(null), m = n.useRef(null), [_, p] = n.useState(!0);
                    return n.useEffect(() => {
                        let e = () => {
                            p(window.innerWidth >= 1024)
                        };
                        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, []), n.useEffect(() => () => {
                        m.current && (cancelAnimationFrame(m.current), m.current = null)
                    }, []), (0, r.jsx)("div", {
                        "data-aos": "fade-up",
                        className: "".concat(u().featureItem, " relative bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(73,73,73,0.1)] p-[1px] rounded-2xl h-full overflow-hidden"),
                        ..._ ? {
                            onMouseEnter: () => {
                                _ && (m.current && (cancelAnimationFrame(m.current), m.current = null), d.current && d.current.play().catch(() => {}))
                            },
                            onMouseLeave: () => {
                                if (!_ || !d.current) return;
                                let e = d.current;
                                e.pause();
                                let t = () => {
                                    d.current && (e.currentTime > 0 ? (e.currentTime = Math.max(0, e.currentTime - .033), m.current = requestAnimationFrame(t)) : (e.pause(), m.current = null))
                                };
                                m.current = requestAnimationFrame(t)
                            }
                        } : {},
                        children: (0, r.jsxs)("div", {
                            className: "bg-[#121212] rounded-2xl p-4 md:p-5 lg:p-6 h-full flex flex-col overflow-hidden ".concat(u().featureItemContent),
                            children: [(0, r.jsx)("div", {
                                className: "".concat(u().videoWrapper, " rounded-2xl "),
                                children: _ ? (0, r.jsx)("video", {
                                    className: u().video,
                                    ref: d,
                                    muted: !0,
                                    playsInline: !0,
                                    children: (0, r.jsx)("source", {
                                        src: c,
                                        type: "video/mp4"
                                    })
                                }) : (0, r.jsx)(x, {
                                    src: c || "",
                                    className: u().video
                                })
                            }), (0, r.jsxs)("div", {
                                className: "".concat(u().featureInner, " relative"),
                                children: [(0, r.jsx)("div", {
                                    className: "relative w-12 h-12 mb-2 md:mb-4 lg:mb-6 rounded-md bg-gradient-to-br from-[#FFB47A] to-[#FF7D4B] flex items-center justify-center",
                                    children: (0, r.jsx)(i.default, {
                                        src: a,
                                        alt: "Feature icon",
                                        width: 30,
                                        height: 30,
                                        className: "z-10"
                                    })
                                }), s && (0, r.jsxs)("div", {
                                    className: "absolute inset-0 w-full h-full overflow-hidden rounded-2xl opacity-20",
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute w-3/4 h-3/4 rounded-full bg-black/10 filter blur-[132px]"
                                    }), (0, r.jsx)("div", {
                                        className: "absolute w-1/2 h-1/2 rounded-full bg-black filter blur-[554px]"
                                    })]
                                }), l && (0, r.jsxs)("div", {
                                    className: "absolute inset-0 w-full h-full overflow-hidden rounded-2xl opacity-20",
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white"
                                    }), (0, r.jsx)("div", {
                                        className: "absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-white"
                                    }), (0, r.jsx)("div", {
                                        className: "absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-white"
                                    }), (0, r.jsx)("div", {
                                        className: "absolute border-t border-white/20 top-1/4 left-1/4 w-1/2 h-0 transform rotate-45"
                                    }), (0, r.jsx)("div", {
                                        className: "absolute border-t border-white/20 top-1/2 right-1/4 w-1/3 h-0 transform -rotate-45"
                                    })]
                                }), o && (0, r.jsxs)("div", {
                                    className: "absolute inset-0 w-full h-full overflow-hidden rounded-2xl opacity-30",
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-white/5 filter blur-[20px]"
                                    }), (0, r.jsx)("div", {
                                        className: "absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-white/5 filter blur-[25px]"
                                    }), (0, r.jsx)("div", {
                                        className: "absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-white/5 filter blur-[15px]"
                                    })]
                                }), (0, r.jsx)("h3", {
                                    className: "font-mono text-white text-lg leading-[1.55] tracking-[-0.02em] z-10",
                                    children: (0, g.Ay)(t)
                                })]
                            })]
                        })
                    })
                });
            h.displayName = "FeatureCard";
            let f = (0, n.memo)(() => {
                let e = [{
                    title: "AI cloud solution powered<br /> by core data centers and a ",
                    icon: "/images/features/ai-icon.svg",
                    bgUrl: "/videos/decenter-features/c5.mp4",
                    customBg: !0
                }, {
                    title: "Seamless integration of AI, <br/> Real-World Assets (RWA) and <br/> Decentralized Infra (DePIN)",
                    icon: "/images/features/connection-icon.svg",
                    bgUrl: "/videos/decenter-features/c6.mp4",
                    networkEffect: !0
                }, {
                    title: "Customizable for borderless and <br/> private deployment tailored <br/> to the needs of users and clients",
                    icon: "/images/features/tabler_edit.svg",
                    bgUrl: "/videos/decenter-features/c7.mp4",
                    customBg: !0
                }, {
                    title: "A self-sustaining value loop <br/> connecting audit, compute, <br/> and token incentives",
                    icon: "/images/features/ix_audit-report.svg",
                    bgUrl: "/videos/decenter-features/c8.mp4",
                    networkEffect: !0
                }, {
                    title: "DeCCM - where AI is audited <br/> by real people, on real tasks, <br/> at real scale",
                    icon: "/images/features/branch.svg",
                    bgUrl: "/videos/decenter-features/c9.mp4",
                    aiEffect: !0
                }];
                return (0, r.jsx)("section", {
                    className: "py-16 md:py-24",
                    children: (0, r.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-4",
                        children: [(0, r.jsxs)("div", {
                            className: "text-center mb-6 lg:mb-12 md:mb-16",
                            "data-aos": "fade-up",
                            children: [(0, r.jsx)("h2", {
                                className: "font-mono text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-[#494949] mb-4 tracking-[-0.024em]",
                                children: "DeCenter Makes The Difference"
                            }), (0, r.jsx)("p", {
                                className: "font-mono text-white/40 text-sm md:text-xl sm:text-sm max-w-4xl mx-auto tracking-[-0.028em] leading-relaxed",
                                children: "Proven Business | Global Infrastructure | Community-Powered AI"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, r.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [(0, r.jsx)("div", {
                                    className: "".concat(u().itemFirst, " md:col-span-2 h-full"),
                                    children: (0, r.jsx)(h, {
                                        title: e[0].title,
                                        icon: e[0].icon,
                                        customBg: e[0].customBg,
                                        networkEffect: e[0].networkEffect,
                                        aiEffect: e[0].aiEffect,
                                        bgUrl: e[0].bgUrl
                                    }, 0)
                                }), (0, r.jsx)("div", {
                                    className: "h-full",
                                    children: (0, r.jsx)(h, {
                                        title: e[1].title,
                                        icon: e[1].icon,
                                        customBg: e[1].customBg,
                                        networkEffect: e[1].networkEffect,
                                        aiEffect: e[1].aiEffect,
                                        bgUrl: e[1].bgUrl
                                    }, 1)
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [(0, r.jsx)("div", {
                                    className: "h-full",
                                    children: (0, r.jsx)(h, {
                                        title: e[2].title,
                                        icon: e[2].icon,
                                        customBg: e[2].customBg,
                                        networkEffect: e[2].networkEffect,
                                        aiEffect: e[2].aiEffect,
                                        bgUrl: e[2].bgUrl
                                    }, 2)
                                }), (0, r.jsx)("div", {
                                    className: "h-full",
                                    children: (0, r.jsx)(h, {
                                        title: e[3].title,
                                        icon: e[3].icon,
                                        customBg: e[3].customBg,
                                        networkEffect: e[3].networkEffect,
                                        aiEffect: e[3].aiEffect,
                                        bgUrl: e[3].bgUrl
                                    }, 3)
                                }), (0, r.jsx)("div", {
                                    className: "h-full",
                                    children: (0, r.jsx)(h, {
                                        title: e[4].title,
                                        icon: e[4].icon,
                                        customBg: e[4].customBg,
                                        networkEffect: e[4].networkEffect,
                                        aiEffect: e[4].aiEffect,
                                        bgUrl: e[4].bgUrl
                                    }, 4)
                                })]
                            })]
                        })]
                    })
                })
            })
        },
        9748: e => {
            e.exports = {
                wrapperCase: "CaseStudy_wrapperCase__dlZXX",
                wrapperTabs: "CaseStudy_wrapperTabs__u8TNq",
                wrapperHeader: "CaseStudy_wrapperHeader__Na8vN",
                bgCover: "CaseStudy_bgCover__6qc2x",
                item_stat: "CaseStudy_item_stat__QSS0T",
                colLeft: "CaseStudy_colLeft__8DCAy",
                colRight: "CaseStudy_colRight__kmI1t"
            }
        }
    }
]);