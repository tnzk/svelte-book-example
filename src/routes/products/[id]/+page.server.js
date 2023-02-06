// @ts-nocheck

import { addToCart, loadCartItems } from '$lib/server/cart';
import { loadProducts } from '$lib/server/product';

async function getProductFromDatabase(productId) {
	const products = await loadProducts();
	return products.find((product) => productId === product.id);
}

async function getRelatedProductsFromDatabase(productId) {
	const products = await loadProducts();
	return products.filter((product) => productId !== product.id);
}

export async function load({ params, locals }) {
	const productId = params.id;
	const product = await getProductFromDatabase(productId);
	const relatedProducts = await getRelatedProductsFromDatabase(productId);

	return { product, relatedProducts };
}

export const actions = {
	default: async ({ request, locals }) => {
		if (locals.currentUser) {
			const data = await request.formData();
			await addToCart(locals.currentUser.userId, data.get('productId'));
		}
	}
};
