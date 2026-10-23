import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as SERVICES, r as BUSINESS } from "./router-DdR67aaX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layout-BgtNKHes.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		href: "/printing",
		label: "Printing"
	},
	{
		href: "/custom",
		label: "Custom"
	},
	{
		href: "/shop",
		label: "Shop"
	},
	{
		href: "/portfolio",
		label: "Portfolio"
	},
	{
		href: "/about",
		label: "About"
	},
	{
		href: "/contact",
		label: "Contact"
	}
];
function Shell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-night text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-line/80 bg-night/85 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "font-display text-sm tracking-[0.22em] text-gold",
							children: "MIRABELLINKS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-5 text-sm text-mute lg:flex",
							"aria-label": "Primary",
							children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.href,
								className: "hover:text-ink",
								activeProps: { className: "text-gold" },
								children: l.label
							}, l.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "rounded-full bg-gold px-4 py-2 text-xs font-medium tracking-wide text-night",
								children: "Request a quote"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded-full border border-line px-3 py-2 text-sm lg:hidden",
								"aria-expanded": open,
								"aria-controls": "mobile-nav",
								onClick: () => setOpen((v) => !v),
								children: open ? "Close" : "Menu"
							})]
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					id: "mobile-nav",
					className: "border-t border-line px-4 py-3 lg:hidden",
					"aria-label": "Mobile",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "grid gap-1",
						children: [LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.href,
							className: "block rounded-lg px-2 py-3 text-ink",
							onClick: () => setOpen(false),
							children: l.label
						}) }, l.href)), SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: s.href,
							className: "block rounded-lg px-2 py-3 text-mute",
							onClick: () => setOpen(false),
							children: s.title
						}) }, s.href))]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line px-4 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-6 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display tracking-[0.18em] text-gold",
							children: "MIRABELLINKS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mute",
							children: BUSINESS.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm",
							children: BUSINESS.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "mt-1 block text-sm text-cyan",
							href: `mailto:${BUSINESS.email}`,
							children: BUSINESS.email
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm text-mute sm:text-right",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "block hover:text-ink",
								href: BUSINESS.facebook,
								children: "Facebook"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "mt-2 block hover:text-ink",
								href: BUSINESS.instagram,
								children: "Instagram"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4",
								children: "Marikina City, Philippines. Quotes in PHP."
							})
						]
					})]
				})
			})
		]
	});
}
function PageHero({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line bg-night-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.28em] text-gold",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-mute",
					children: lede
				})
			]
		})
	});
}
//#endregion
export { Shell as n, PageHero as t };
