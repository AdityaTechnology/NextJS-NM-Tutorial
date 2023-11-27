function ProductInformationPage({ params }) {
	console.log(params);

	return <div>Product Information Page of {params.pid}</div>;
}

export default ProductInformationPage;
