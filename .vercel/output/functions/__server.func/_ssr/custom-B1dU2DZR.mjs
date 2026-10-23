import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ServicePage } from "./service-page-B7m-P7Ga.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/custom-B1dU2DZR.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePage, {
		kicker: "CUSTOM",
		title: "Products finished with your artwork.",
		lede: "Cards, stickers, apparel, and other customized pieces. Variants and instructions are collected with the quote. These are made to order, not stocked inventory.",
		points: [
			"Share size, color, and where the print sits.",
			"Upload artwork on a sample shop item, or attach it when you email the quote.",
			"Quantities are confirmed before anything is produced."
		]
	});
}
//#endregion
export { Page as component };
