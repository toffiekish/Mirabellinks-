import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route, s as findProduct } from "./router-DdR67aaX.mjs";
import { n as Shell, t as PageHero } from "./layout-BgtNKHes.mjs";
import { i as saveCart, o as saveOrder, r as loadOrders, t as loadCart } from "./local-orders-BuQGES7Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop._slug-CqB5_EFv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { slug } = Route.useParams();
	const product = findProduct(slug);
	const [variant, setVariant] = (0, import_react.useState)(product?.variants[0] ?? "");
	const [qty, setQty] = (0, import_react.useState)(1);
	const [instructions, setInstructions] = (0, import_react.useState)("");
	const [artworkName, setArtworkName] = (0, import_react.useState)("");
	const [fileError, setFileError] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	const [orderCount, setOrderCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => setOrderCount(loadOrders().length), [msg]);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "SHOP",
		title: "Listing not found.",
		lede: "That sample is not in the catalogue."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "text-gold",
			children: "Back to shop"
		})
	})] });
	function onFile(file) {
		setFileError("");
		if (!file) return;
		if (file.size > 15e5) {
			setFileError("Keep the sample file under 1.5 MB. Email larger artwork with your quote.");
			return;
		}
		setArtworkName(file.name);
	}
	function add() {
		const line = {
			id: `${product.slug}-${Date.now()}`,
			slug: product.slug,
			name: product.name,
			variant,
			qty,
			instructions,
			artworkName
		};
		saveCart([...loadCart(), line]);
		setMsg("Added to the draft on this device.");
	}
	function requestQuote() {
		if (!loadCart().length) add();
		const current = loadCart();
		saveOrder({
			id: `D-${Date.now().toString(36).toUpperCase()}`,
			status: "Quote requested",
			lines: current.length ? current : loadCart(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		setMsg("Draft marked Quote requested. Open Contact to email the details. No payment was taken.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: `${product.category.toUpperCase()} · SAMPLE`,
		title: product.name,
		lede: product.note
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/smoke-still.jpg",
			alt: "",
			className: "w-full rounded-card border border-line object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-4",
			onSubmit: (e) => {
				e.preventDefault();
				add();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-gold",
					children: "Price on quote · PHP"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: ["Variant", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "mt-1 w-full rounded-xl border border-line bg-night px-3 py-3",
						value: variant,
						onChange: (e) => setVariant(e.target.value),
						children: product.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: v }, v))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: ["Quantity", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "mt-1 w-full rounded-xl border border-line bg-night px-3 py-3",
						type: "number",
						min: 1,
						max: 9999,
						value: qty,
						onChange: (e) => setQty(Math.max(1, Number(e.target.value) || 1))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: ["Customization instructions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "mt-1 w-full rounded-xl border border-line bg-night px-3 py-3",
						rows: 4,
						value: instructions,
						onChange: (e) => setInstructions(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: ["Artwork file name (stored locally, not uploaded to a server)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "mt-1 block w-full text-sm",
						type: "file",
						accept: "image/*,.pdf",
						onChange: (e) => onFile(e.target.files?.[0])
					})]
				}),
				artworkName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-mute",
					children: ["Attached name: ", artworkName]
				}),
				fileError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-cyan",
					children: fileError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "rounded-full bg-gold px-5 py-3 text-sm font-medium text-night",
						children: "Add to draft"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: requestQuote,
						className: "rounded-full border border-gold px-5 py-3 text-sm text-gold",
						children: "Mark quote requested"
					})]
				}),
				msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "status",
					className: "text-sm",
					children: msg
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-mute",
					children: [
						"Drafts on this device: ",
						orderCount,
						". Shipping and card payment are not connected."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "text-sm text-cyan",
					children: "All samples"
				})
			]
		})]
	})] });
}
//#endregion
export { Page as component };
