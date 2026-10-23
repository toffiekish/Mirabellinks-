import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as BUSINESS } from "./router-DdR67aaX.mjs";
import { n as Shell, t as PageHero } from "./layout-BgtNKHes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C_RIDMax.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "ABOUT",
		title: BUSINESS.legal,
		lede: BUSINESS.bio
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 text-mute",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: BUSINESS.tagline }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The studio is in Barangka, Marikina City. Work covers printing, customized products, branding, advertising materials, and websites." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This site does not list awards, testimonials, or client names. Those are added only when you supply them." })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
			className: "rounded-card border border-line bg-night-2 p-6 not-italic",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: BUSINESS.address }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "mt-3 block text-cyan",
					href: `mailto:${BUSINESS.email}`,
					children: BUSINESS.email
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "mt-2 block",
					href: BUSINESS.instagram,
					children: "Instagram @mirabellinks"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "mt-2 block",
					href: BUSINESS.facebook,
					children: "Facebook"
				})
			]
		})]
	})] });
}
//#endregion
export { Page as component };
