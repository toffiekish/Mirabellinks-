import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as SERVICES, r as BUSINESS } from "./router-DdR67aaX.mjs";
import { n as Shell, t as PageHero } from "./layout-BgtNKHes.mjs";
import { a as saveInquiry, n as loadInquiries, r as loadOrders } from "./local-orders-BuQGES7Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-0D1y-GVD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMPTY = {
	service: "Printing services",
	details: "",
	deadline: "",
	budget: "",
	name: "",
	email: "",
	phone: ""
};
function QuoteForm() {
	const [values, setValues] = (0, import_react.useState)(EMPTY);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(null);
	function set(key, value) {
		setValues((v) => ({
			...v,
			[key]: value
		}));
	}
	function validate() {
		const next = {};
		if (values.details.trim().length < 12) next.details = "Describe the project in at least a short sentence.";
		if (!values.deadline) next.deadline = "Add a deadline, even if it is flexible.";
		if (!values.budget.trim()) next.budget = "Add a budget range in PHP, or write “to be discussed”.";
		if (values.name.trim().length < 2) next.name = "Add your name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email.";
		if (values.phone.trim().length < 7) next.phone = "Add a phone number we can reach in the Philippines.";
		return next;
	}
	async function onSubmit(e) {
		e.preventDefault();
		const next = validate();
		setErrors(next);
		if (Object.keys(next).length) return;
		setBusy(true);
		await new Promise((r) => setTimeout(r, 500));
		const row = {
			id: `Q-${Date.now().toString(36).toUpperCase()}`,
			...values,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		saveInquiry(row);
		setBusy(false);
		setDone(row);
	}
	if (done) {
		const mail = `mailto:mirabellinks@gmail.com?subject=${encodeURIComponent(`Quote ${done.id}`)}&body=${encodeURIComponent(`${done.name}\n${done.email}\n${done.phone}\n${done.service}\nDeadline: ${done.deadline}\nBudget: ${done.budget}\n\n${done.details}`)}`;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-card border border-gold/50 bg-night p-6",
			role: "status",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-gold",
					children: "REQUEST SAVED ON THIS DEVICE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-2 font-display text-3xl",
					children: ["Reference ", done.id]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-mute",
					children: "This browser kept a copy so you can review it. It is not on a company server yet, and payment is not taken here. Send it by email so Mirabellinks actually receives it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: mail,
					className: "mt-5 inline-block rounded-full bg-gold px-5 py-3 text-sm font-medium text-night",
					children: "Email this quote request"
				})
			]
		});
	}
	const field = "mt-1 w-full rounded-xl border border-line bg-night px-3 py-3 text-ink outline-none focus:border-gold";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-4",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm",
				children: ["Service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: field,
					value: values.service,
					onChange: (e) => set("service", e.target.value),
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s.title }, s.href))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm",
				children: [
					"Project details",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: field,
						rows: 5,
						value: values.details,
						onChange: (e) => set("details", e.target.value)
					}),
					errors.details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-cyan",
						children: errors.details
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: [
						"Deadline",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: field,
							type: "date",
							value: values.deadline,
							onChange: (e) => set("deadline", e.target.value)
						}),
						errors.deadline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-cyan",
							children: errors.deadline
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: [
						"Budget (PHP)",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: field,
							value: values.budget,
							onChange: (e) => set("budget", e.target.value),
							placeholder: "e.g. 5000–8000"
						}),
						errors.budget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-cyan",
							children: errors.budget
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [
							"Name",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: field,
								value: values.name,
								onChange: (e) => set("name", e.target.value),
								autoComplete: "name"
							}),
							errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-cyan",
								children: errors.name
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [
							"Email",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: field,
								type: "email",
								value: values.email,
								onChange: (e) => set("email", e.target.value),
								autoComplete: "email"
							}),
							errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-cyan",
								children: errors.email
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [
							"Phone",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: field,
								value: values.phone,
								onChange: (e) => set("phone", e.target.value),
								autoComplete: "tel"
							}),
							errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-cyan",
								children: errors.phone
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-mute",
				children: "Contact details stay in this browser until you email them. No payment gateway or courier account is connected."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: busy,
				className: "rounded-full bg-gold px-6 py-3 text-sm font-medium text-night disabled:opacity-60",
				children: busy ? "Saving…" : "Save quote request"
			})
		]
	});
}
function Page() {
	const [inq, setInq] = (0, import_react.useState)(0);
	const [orders, setOrders] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setInq(loadInquiries().length);
		setOrders(loadOrders().length);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "CONTACT",
		title: "Request a quote.",
		lede: `${BUSINESS.address}. Email ${BUSINESS.email}. Quotes are discussed in PHP.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-card border border-line bg-night-2 p-5 text-sm text-mute lg:col-span-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl text-ink",
				children: "What is connected"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Quote form: validation works. A copy stays in this browser (",
						inq,
						" saved)."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Email send: use the button after saving. There is no mail server." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Orders on this device: ",
						orders,
						". Status is Draft or Quote requested only."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Payments, shipping labels, and a staff content editor are not configured." })
				]
			})]
		})]
	})] });
}
//#endregion
export { Page as component };
