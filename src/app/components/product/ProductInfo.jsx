"use client";

import products from "@/app/assets/productInfo";
import Link from "next/link";
function ProductInfo() {
	// const handleProduct = (pid) => {
	// 	console.log("Product ID Received is ", pid);
	// };
	return (
		<div>
			{products.map((product) => {
				return (
					<div className='flex flex-row gap-5 justify-between items-center border border-cyan-200 p-2'>
						{/* <div>{product.pid}</div> */}
						<div>{product.name}</div>
						{/* <div>{product.price}</div> */}
						<div>
							{/* <button
								className='px-5 py-1 bg-orange-600 text-gray-50 font-fold'
								onClick={() => handleProduct(product.pid)}
							>
								Show Details
							</button> */}

							<Link href={`/product/details/${product.pid}`}>Show Details</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ProductInfo;
