"use client" // This makes this a client-side component
import { useState } from "react"

const WishlistButton = ({ productId }: { productId: string }) => {
  const [wishlist, setWishlist] = useState<string[]>([])

  const handleWishlist = () => {
    setWishlist((prev) => [...prev, productId])
    console.log("Wishlist updated:", wishlist)
  }

  return (
    <button onClick={handleWishlist} className="p-2 bg-gray-200 rounded hover:bg-gray-300">
      ❤️
    </button>
  )
}

export default WishlistButton
