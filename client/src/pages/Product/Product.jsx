import React from 'react'
import { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance';
import './Product.scss'

const Product = () => {

    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const images = [
        "https://cdn.shopify.com/s/files/1/0971/5072/products/strobe_navy_54882d50-d0d9-4829-afd9-47d4af74a75d.jpg?v=1681224737",
        "https://cdn.shopify.com/s/files/1/0971/5072/products/dj_striped_front_07bcb0db-d7b1-413d-87b0-d9a2b2740030.jpg?v=1666728469"
    ]

    return(
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={(e=>setSelectedImg(0))}/>
                    <img src={images[1]} alt="" onClick={(e=>setSelectedImg(1))}/>
                </div>
                <div className="mainImg">
                <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$200</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi magnam dicta, nemo voluptatibus inventore perferendis, harum sunt, dolore quisquam porro a sint alias cumque asperiores beatae natus quos! Blanditiis.
                </p>
                <div className="quantity">
                    <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className="add">
                <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product