import { Product } from "@/sanity.types";
import Link from "next/link";

export function ProductThumb({ product }: { product: Product }) {
  const outOfStock = product.stock != null && product.stock <= 0;
  return (
    <div>

      <Link
        href={`/products/${product.slug?.current}`}
        className={`
          group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm
          hover:shadow-md transition-all duration-200 overflow-hidden ${outOfStock ? "opacity-50" : ""}`}
      >
        product
      </Link>
    </div>
  );
}

