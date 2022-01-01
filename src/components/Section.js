import React, { useState } from 'react'
import Container from '@mui/material/Container';
import cartimg from './images/icon-cart.svg';
import iconplus from './images/icon-plus.svg';
import iconminus from './images/icon-minus.svg';
import iconnext from './images/icon-next.svg';
import iconprev from './images/icon-previous.svg';
import productimg1 from "./images/image-product-1.jpg";
import productimg2 from "./images/image-product-2.jpg";
import productimg3 from "./images/image-product-3.jpg";
import productimg4 from "./images/image-product-4.jpg";

const Section = (props) => {

    const [activeimg, setActiveimg] = useState(0);
    const next = () => {
        let step = activeimg;
        setActiveimg(++step)
    }
    const prev = () => {
        let step = activeimg;
        setActiveimg(--step)
    }
    const productimages = [
        {
            img: productimg1
        },
        {
            img: productimg2
        },
        {
            img: productimg3
        },
        {
            img: productimg4
        }
    ]
    let allproductimages = productimages;
    const getContent = () => {
        let data = allproductimages[activeimg];
        return (
            <div>
                <img src={data.img} alt={data.img} />
            </div>
        )
    }
    return (
        <Container>
            <div className='section' onClick={props.closeCart}>
                <div className='section-divA'>
                    <button onClick={() => prev()} disabled={activeimg === 0}>
                        <img src={iconprev} alt='prev' />
                    </button>
                    <div className='section-divA-pdtimgcontainer'>
                        {getContent()}
                    </div>
                    <button onClick={() => next()} disabled={activeimg === allproductimages.length - 1}>
                        <img src={iconnext} alt='next' />
                    </button>
                </div>
                <div className='section-divB'>
                    <h3>SNEAKER COMPANY</h3>
                    <h1>{props.title}</h1>
                    <p>
                        These low-profile sneakers are your perfect
                        casual wear companion.
                        Featuring a durable rubber outer sole, they’ll
                        withstand everything
                        the weather can offer.
                    </p>
                    <div className='section-divB-price'>
                        <h1>${props.price}.00 <span>50%</span></h1>
                        <p>$250.00</p>
                    </div>
                    <div className='section-divB-buttonDiv'>
                        <div className='section-divB-counter'>
                            <button
                                onClick={props.minus}
                                disabled={props.counter === 0}
                            >
                                <img src={iconminus} alt='icon minus' />
                            </button>
                            <div>{props.counter}</div>
                            <button onClick={props.plus}>
                                <img src={iconplus} alt='icon plus' />
                            </button>
                        </div>
                        <button onClick={props.addToCart} disabled={props.counter === 0}>
                            <img src={cartimg} alt='cart' />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default Section
