import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Shell, t as PageHero } from "./layout-BgtNKHes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-page-B7m-P7Ga.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage({ kicker, title, lede, points }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker,
		title,
		lede
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "rounded-card border border-line bg-night-2 px-5 py-4",
				children: p
			}, p))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/contact",
			className: "mt-8 inline-block rounded-full bg-gold px-6 py-3 text-sm font-medium text-night",
			children: "Request a quote"
		})]
	})] });
}
//#endregion
export { ServicePage as t };
