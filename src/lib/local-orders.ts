export type Inquiry = {
  id: string;
  service: string;
  details: string;
  deadline: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
};

export type CartLine = {
  id: string;
  slug: string;
  name: string;
  variant: string;
  qty: number;
  instructions: string;
  artworkName: string;
};

export type DraftOrder = {
  id: string;
  status: "Placed" | "Quote requested";
  lines: CartLine[];
  contact: { name: string; phone: string; address: string; city: string; notes: string };
  createdAt: string;
};

const INQ = "mirabellinks.inquiries";
const CART = "mirabellinks.cart";
const ORDERS = "mirabellinks.orders";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadInquiries() {
  return read<Inquiry[]>(INQ, []);
}

export function saveInquiry(row: Inquiry) {
  const next = [row, ...loadInquiries()];
  write(INQ, next);
  return next;
}

export function loadCart() {
  return read<CartLine[]>(CART, []);
}

export function saveCart(lines: CartLine[]) {
  write(CART, lines);
  if (typeof window !== "undefined") window.dispatchEvent(new Event("mirabellinks-cart"));
}

export function cartCount() {
  return loadCart().reduce((n, line) => n + line.qty, 0);
}

export function loadOrders() {
  return read<DraftOrder[]>(ORDERS, []);
}

export function saveOrder(order: DraftOrder) {
  write(ORDERS, [order, ...loadOrders()]);
  write(CART, []);
}
