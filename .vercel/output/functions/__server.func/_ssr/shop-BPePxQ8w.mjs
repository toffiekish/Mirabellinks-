import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PRODUCTS } from "./router-DdR67aaX.mjs";
import { n as Shell, t as PageHero } from "./layout-BgtNKHes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-BPePxQ8w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const [q, setQ] = (0, import_react.useState)("");
	const shown = (0, import_react.useMemo)(() => {
		const n = q.trim().toLowerCase();
		if (!n) return PRODUCTS;
		return PRODUCTS.filter((p) => `${p.name} ${p.category} ${p.summary}`.toLowerCase().includes(n));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "SHOP",
		title: "Sample listings.",
		lede: "Search the catalogue, open an item, and add a configuration to a draft on this device. There is no checkout charge."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm",
				children: ["Search", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					className: "mt-1 w-full rounded-xl border border-line bg-night-2 px-3 py-3",
					placeholder: "Catalogue, sticker, branding…"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-mute",
				children: [
					shown.length,
					" sample ",
					shown.length === 1 ? "item" : "items"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: shown.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-card border border-line bg-night-2 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tracking-widest text-cyan",
							children: [p.category, " · Sample"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mute",
							children: p.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-gold",
							children: "Price on quote · PHP"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop/$slug",
							params: { slug: p.slug },
							className: "mt-4 inline-block text-sm underline",
							children: "View details"
						})
					]
				}, p.slug))
			}),
			shown.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-mute",
				children: "No sample matches that search."
			})
		]
	})] });
}
//#endregion
export { Page as component };
