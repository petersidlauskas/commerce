import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0971/5072/products/og_logo_puff_long_sleeve.jpg?v=1680904253",
            title: "Long Sleeve",
            desc: "Long Sleeve",
            isNew: true,
            oldPrice: 50,
            price: 34,
        },
        {
            id: 2,
            img: "https://cdn.shopify.com/s/files/1/0971/5072/products/og-key-camo-t-shirt-olive.jpg?v=1667584208",
            title: "T-Shirt",
            desc: "T-Shirt",
            isNew: true,
            oldPrice: 50,
            price: 34,
        },
    ]
    return(
        
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x ${item.price} </div>
                </div>
                <DeleteOutlineIcon className="delete" />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
                </div>
                <button>PROCEED TO CHECKOUT</button>
                <span className="reset">Reset Cart</span>
        </div>
    )
}

export default Cart