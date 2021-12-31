import React from 'react'
import Container from '@mui/material/Container';
import cartimg from './images/icon-cart.svg';
import iconplus from './images/icon-plus.svg';
import iconminus from './images/icon-minus.svg';
import image1 from "./images/image-product-1.jpg";
import imagethumbnail1 from "./images/image-product-1-thumbnail.jpg";
import imagethumbnail2 from "./images/image-product-2-thumbnail.jpg";
import imagethumbnail3 from "./images/image-product-3-thumbnail.jpg";
import imagethumbnail4 from "./images/image-product-4-thumbnail.jpg";

const Section = (props) => {

    const thumbnails = [
        {
            img: imagethumbnail1
        },
        {
            img: imagethumbnail2
        },
        {
            img: imagethumbnail3
        },
        {
            img: imagethumbnail4
        }
    ]
    return (
        <Container>
            <div className='section'>
                <div className='section-divA'>
                    <img src={image1} alt='image1' />
                    <div className='section-divA-thumbnail'>
                        {thumbnails.map((item, i) => {
                            const { img } = item;
                            return (
                                <img key={i} src={img} alt='product 1' />
                            )
                        })}

                    </div>
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
        </Container>
    )
}

export default Section
