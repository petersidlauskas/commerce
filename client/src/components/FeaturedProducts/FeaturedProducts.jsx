import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0971/5072/products/og_logo_puff_long_sleeve.jpg?v=1680904253",
            title: "Long Sleeve",
            isNew: true,
            oldPrice: 50,
            price: 34,
        },
        {
            id: 2,
            img: "https://cdn.shopify.com/s/files/1/0971/5072/products/og-key-camo-t-shirt-olive.jpg?v=1667584208",
            title: "T-Shirt",
            isNew: true,
            oldPrice: 50,
            price: 34,
        },
        {
            id: 3,
            img: "https://cdn.shopify.com/s/files/1/0971/5072/products/DSC_4385.jpg?v=1642541165",
            title: "Hoody",
            isNew: true,
            oldPrice: 50,
            price: 34,
        },
        {
            id: 4,
            img: "https://cdn.shopify.com/s/files/1/0971/5072/products/bolts-hat-white.jpg?v=1666646140",
            title: "Hat",
            isNew: true,
            oldPrice: 50,
            price: 34,
        },
    ]
    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem impedit quo nobis, tempore dolorum nisi, laudantium perferendis odit corporis non ratione vel, dolores doloribus laboriosam? Numquam, adipisci deleniti! Eius, optio!
                </p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts;