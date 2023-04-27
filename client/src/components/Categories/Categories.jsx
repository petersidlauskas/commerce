import React from 'react'
import "./Categories.scss"
import {Link} from 'react-router-dom'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZzhnuteCafaLQUxdggCzFf-cW7IS5JyYuvbvNJKLJ4iVxlScvUEroN1QldaoidY_pjo&usqp=CAU" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row"><img src="https://hydeparkpicturehouse.co.uk/imager/w_1280,h_640,q_80,f_jpg,g_center//storage/thumbnails/78d0d2b619fa150729f1f85a20fe9e09.jpg" />
                    <button>
                        <Link className="link" to="/products/1">Women</Link>
                    </button></div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://i.pinimg.com/474x/be/af/5c/beaf5cea0436c8db0e9677e56f4fb3ef--josh-kalis-photosynthesis.jpg" />
                    <button>
                        <Link className="link" to="/products/1">New Season</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img src="https://i.ytimg.com/vi/eGFt2fEyLtQ/maxresdefault.jpg" />
                    <button>
                        <Link className="link" to="/products/1">Men</Link>
                    </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img src="https://64.media.tumblr.com/465130c690c91ba145e68859585ed59e/tumblr_inline_ndedls0TYq1rfu32a.jpg" />
                    <button>
                        <Link className="link" to="/products/1">Accessories</Link>
                    </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                <img src="https://64.media.tumblr.com/35eb46099c2f0ec20edd58771e887bec/tumblr_inline_ndgtgxfvNr1rfu32a.png" />
                    <button>
                        <Link className="link" to="/products/1">Shoes</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories