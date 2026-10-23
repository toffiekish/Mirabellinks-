//#region node_modules/.nitro/vite/services/ssr/assets/local-orders-BuQGES7Q.js
var INQ = "mirabellinks.inquiries";
var CART = "mirabellinks.cart";
var ORDERS = "mirabellinks.orders";
function read(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function write(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}
function loadInquiries() {
	return read(INQ, []);
}
function saveInquiry(row) {
	const next = [row, ...loadInquiries()];
	write(INQ, next);
	return next;
}
function loadCart() {
	return read(CART, []);
}
function saveCart(lines) {
	write(CART, lines);
}
function loadOrders() {
	return read(ORDERS, []);
}
function saveOrder(order) {
	write(ORDERS, [order, ...loadOrders()]);
	write(CART, []);
}
//#endregion
export { saveInquiry as a, saveCart as i, loadInquiries as n, saveOrder as o, loadOrders as r, loadCart as t };
