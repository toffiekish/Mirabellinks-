import { i as __toESM } from "../_runtime.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, q as require_react, v as createRootRoute, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DdR67aaX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-CThO4fZI.css";
var APP_NAME = "Mirabell Inks";
var Route$13 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Mirabell Inks — living pigments drawn from night cities, nebulae, and the gold of a crown nib."
			},
			{
				name: "theme-color",
				content: "#070b18"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Outfit:wght@300;400;500;600&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$12 = () => import("./routes-BQw1gN0M.mjs");
var Route$12 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => ({ meta: [{ title: "Mirabellinks — Prints and design that speak" }, {
		name: "description",
		content: "Printing, customized products, branding, and digital work from Marikina City."
	}] })
});
var BUSINESS = {
	name: "Mirabellinks",
	legal: "Mirabellinks Advertising Catalogue Printing Services",
	tagline: "PRINTS AND DESIGN THAT SPEAK.",
	email: "mirabellinks@gmail.com",
	address: "101 A. Bonifacio Avenue, Barangka, Marikina City, Philippines",
	facebook: "https://www.facebook.com/share/19jsHnt8Kv/",
	instagram: "https://www.instagram.com/mirabellinks/",
	bio: "One-stop digital solutions corporation."
};
var SERVICES = [
	{
		href: "/printing",
		title: "Printing services",
		blurb: "Catalogues, brochures, flyers, tarpaulins, and other commercial print."
	},
	{
		href: "/custom",
		title: "Customized products",
		blurb: "Items finished with your artwork, sizes, and finishing notes."
	},
	{
		href: "/shop",
		title: "Online shop",
		blurb: "Sample listings you can configure. Nothing here has a live price."
	},
	{
		href: "/branding",
		title: "Branding and graphic design",
		blurb: "Identity, layouts, and print-ready artwork."
	},
	{
		href: "/marketing",
		title: "Digital marketing and advertising",
		blurb: "Campaign creative and advertising materials."
	},
	{
		href: "/web",
		title: "Website development",
		blurb: "Sites planned and built for a Philippine business."
	},
	{
		href: "/ai",
		title: "AI creative services",
		blurb: "Concept exploration with a human designer in the loop."
	},
	{
		href: "/pod",
		title: "Print on demand",
		blurb: "A future module. Not accepting POD orders yet."
	}
];
var PRODUCTS = [
	{
		slug: "catalogue",
		name: "Catalogue",
		category: "Printing",
		summary: "Multi-page catalogue for a product line or price list.",
		variants: [
			"A4 saddle stitch",
			"A4 perfect bind",
			"A5 saddle stitch"
		],
		note: "Sample listing. Request a quote for quantity, paper, and cover."
	},
	{
		slug: "brochure",
		name: "Brochure",
		category: "Printing",
		summary: "Folded brochure for a service, event, or showroom.",
		variants: ["Bi-fold", "Tri-fold"],
		note: "Sample listing. Finishing and stock are quoted per job."
	},
	{
		slug: "flyer",
		name: "Flyer",
		category: "Printing",
		summary: "Single-sheet flyer for a promotion or announcement.",
		variants: [
			"A5",
			"A4",
			"Half long"
		],
		note: "Sample listing. No published unit price."
	},
	{
		slug: "tarpaulin",
		name: "Tarpaulin",
		category: "Printing",
		summary: "Large-format tarp for a storefront or event.",
		variants: ["Standard", "Heavy"],
		note: "Sample listing. Size is custom; quote required."
	},
	{
		slug: "calling-card",
		name: "Calling card",
		category: "Customized",
		summary: "Business cards with your supplied or designed artwork.",
		variants: ["Standard card", "Rounded corners"],
		note: "Sample listing. Paper and spot finishes are quoted."
	},
	{
		slug: "sticker",
		name: "Sticker sheet",
		category: "Customized",
		summary: "Die-cut or kiss-cut stickers from your artwork.",
		variants: ["Kiss-cut sheet", "Die-cut singles"],
		note: "Sample listing. Not a stocked SKU."
	},
	{
		slug: "shirt",
		name: "Printed shirt",
		category: "Customized",
		summary: "Apparel print. Sizes collected as customization notes.",
		variants: ["Front print", "Front and back"],
		note: "Sample listing. Garment brand and sizes are confirmed on quote."
	},
	{
		slug: "logo-pack",
		name: "Logo and brand kit",
		category: "Branding",
		summary: "A design engagement, not a downloadable template.",
		variants: ["Wordmark", "Wordmark and mark"],
		note: "Sample service card. Scope is agreed before work starts."
	}
];
var PORTFOLIO = [
	{
		title: "Catalogue spread",
		kind: "Conceptual layout",
		detail: "A sample page structure for a product catalogue. Not a client project."
	},
	{
		title: "Storefront tarp",
		kind: "Conceptual layout",
		detail: "A sample large-format composition. Not a photographed installation."
	},
	{
		title: "Social announcement",
		kind: "Conceptual layout",
		detail: "A sample square post for a print promo. Not a published campaign."
	}
];
function findProduct(slug) {
	return PRODUCTS.find((p) => p.slug === slug);
}
var $$splitComponentImporter$11 = () => import("./about-C_RIDMax.mjs");
var Route$11 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({ meta: [{ title: "About — Mirabellinks" }, {
		name: "description",
		content: BUSINESS.bio
	}] })
});
var $$splitComponentImporter$10 = () => import("./ai-CGHd5l7g.mjs");
var Route$10 = createFileRoute("/ai")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({ meta: [{ title: "AI creative services — Mirabellinks" }] })
});
var $$splitComponentImporter$9 = () => import("./branding-DlMo9JVT.mjs");
var Route$9 = createFileRoute("/branding")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [{ title: "Branding and graphic design — Mirabellinks" }] })
});
var $$splitComponentImporter$8 = () => import("./contact-0D1y-GVD.mjs");
var Route$8 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [{ title: "Contact and quote — Mirabellinks" }] })
});
var $$splitComponentImporter$7 = () => import("./custom-B1dU2DZR.mjs");
var Route$7 = createFileRoute("/custom")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: "Customized products — Mirabellinks" }] })
});
var $$splitComponentImporter$6 = () => import("./marketing-toXiSLae.mjs");
var Route$6 = createFileRoute("/marketing")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: "Digital marketing — Mirabellinks" }] })
});
var $$splitComponentImporter$5 = () => import("./pod-DeusY5Cq.mjs");
var Route$5 = createFileRoute("/pod")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Print on demand — Mirabellinks" }] })
});
var $$splitComponentImporter$4 = () => import("./portfolio-doAMrRT-.mjs");
var Route$4 = createFileRoute("/portfolio")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Portfolio — Mirabellinks" }] })
});
var $$splitComponentImporter$3 = () => import("./printing-6aOmxLqc.mjs");
var Route$3 = createFileRoute("/printing")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Printing services — Mirabellinks" }] })
});
var $$splitComponentImporter$2 = () => import("./shop-BPePxQ8w.mjs");
var Route$2 = createFileRoute("/shop")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Online shop — Mirabellinks" }, {
		name: "description",
		content: "Sample product listings. Prices are not published."
	}] })
});
var $$splitComponentImporter$1 = () => import("./web-DyMQsVB3.mjs");
var Route$1 = createFileRoute("/web")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Website development — Mirabellinks" }] })
});
var $$splitNotFoundComponentImporter = () => import("./shop._slug-CY94aPG5.mjs");
var $$splitComponentImporter = () => import("./shop._slug-CqB5_EFv.mjs");
var Route = createFileRoute("/shop/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => ({ meta: [{ title: `${params.slug} — Mirabellinks` }] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$11.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var AiRoute = Route$10.update({
	id: "/ai",
	path: "/ai",
	getParentRoute: () => Route$13
});
var BrandingRoute = Route$9.update({
	id: "/branding",
	path: "/branding",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var CustomRoute = Route$7.update({
	id: "/custom",
	path: "/custom",
	getParentRoute: () => Route$13
});
var MarketingRoute = Route$6.update({
	id: "/marketing",
	path: "/marketing",
	getParentRoute: () => Route$13
});
var PodRoute = Route$5.update({
	id: "/pod",
	path: "/pod",
	getParentRoute: () => Route$13
});
var PortfolioRoute = Route$4.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$13
});
var PrintingRoute = Route$3.update({
	id: "/printing",
	path: "/printing",
	getParentRoute: () => Route$13
});
var ShopRoute = Route$2.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$13
});
var WebRoute = Route$1.update({
	id: "/web",
	path: "/web",
	getParentRoute: () => Route$13
});
var ShopRouteChildren = { ShopSlugRoute: Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ShopRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AiRoute,
	BrandingRoute,
	ContactRoute,
	CustomRoute,
	MarketingRoute,
	PodRoute,
	PortfolioRoute,
	PrintingRoute,
	ShopRoute: ShopRoute._addFileChildren(ShopRouteChildren),
	WebRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { PRODUCTS as a, PORTFOLIO as i, Route as n, SERVICES as o, BUSINESS as r, findProduct as s, router_exports as t };
