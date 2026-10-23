import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PORTFOLIO } from "./router-DdR67aaX.mjs";
import { n as Shell, t as PageHero } from "./layout-BgtNKHes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-doAMrRT-.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "PORTFOLIO",
		title: "Conceptual samples only.",
		lede: "These are layout ideas for the kind of work the studio does. They are not client projects, and they are not editable from a public admin yet."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-3",
		children: PORTFOLIO.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "overflow-hidden rounded-card border border-line bg-night-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/city-still.jpg",
				alt: "",
				className: "h-40 w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-cyan",
						children: item.kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-mute",
						children: item.detail
					})
				]
			})]
		}, item.title))
	})] });
}
//#endregion
export { Page as component };
