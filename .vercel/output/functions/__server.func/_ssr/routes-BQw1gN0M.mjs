import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as SERVICES, r as BUSINESS } from "./router-DdR67aaX.mjs";
import { n as Shell } from "./layout-BgtNKHes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQw1gN0M.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[80vh] items-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 h-full w-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "/hero-still.jpg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/hero.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.32em] text-cyan",
						children: BUSINESS.legal
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-4xl leading-none sm:text-6xl",
						children: BUSINESS.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 max-w-xl text-ink/90",
						children: [BUSINESS.bio, " Printing, customized products, branding, advertising, and websites from Barangka, Marikina City."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-full bg-gold px-6 py-3 text-sm font-medium text-night",
							children: "Request a quote"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/printing",
							className: "rounded-full border border-ink/40 px-6 py-3 text-sm",
							children: "Printing services"
						})]
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4",
		children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: s.href,
			className: "rounded-card border border-line bg-night-2 p-5 hover:border-gold/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: s.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-mute",
				children: s.blurb
			})]
		}, s.href))
	})] });
}
//#endregion
export { Home as component };
