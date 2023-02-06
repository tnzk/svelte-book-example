// @ts-nocheck
import { readFileSync } from 'fs';
import { addToCart, loadCart } from '$lib/server/cart';

function loadProducts() {
	const content = readFileSync('data/products.json', { encoding: 'utf-8' });
	return JSON.parse(content);
}

function getProductFromDatabase(productId) {
	const products = loadProducts();
	return products.find((product) => productId === product.id);
}

function getRelatedProductsFromDatabase(productId) {
	const products = loadProducts();
	return products.filter((product) => productId !== product.id);
}

export function load({ params }) {
	const productId = params.id;
	const product = getProductFromDatabase(productId);
	const relatedProducts = getRelatedProductsFromDatabase(productId);
	const cart = loadCart();

	return { product, relatedProducts, cart };
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		addToCart(data.get('productId'));
	}
};
