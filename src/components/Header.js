import React from 'react'
import Container from '@mui/material/Container';
import logo from 'https://github.com/akashsiddamshetty/ecommerceTemplate/blob/main/src/components/images/logo.svg';
import cartimg from 'https://github.com/akashsiddamshetty/ecommerceTemplate/blob/main/src/components/images/icon-cart.svg';
import avatar from 'https://github.com/akashsiddamshetty/ecommerceTemplate/blob/main/src/components/images/image-avatar.png';
import iconmenu from 'https://github.com/akashsiddamshetty/ecommerceTemplate/blob/main/src/components/images/icon-menu.svg';
import iconclose from 'https://github.com/akashsiddamshetty/ecommerceTemplate/blob/main/src/components/images/icon-close.svg';
import { Drawer, Box } from '@material-ui/core';
import imagethumbnail1 from "https://github.com/akashsiddamshetty/ecommerceTemplate/blob/main/src/components/images/image-product-1-thumbnail.jpg";
import deleteicon from 'https://github.com/akashsiddamshetty/ecommerceTemplate/blob/main/src/components/images/icon-delete.svg';
const Header = (props) => {
    const [state, setState] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        setState(open)
    }
    const [cart, setCart] = React.useState(false);

    const menu = [{
        text: "Collection",
    },
    {
        text: "Men",
    },
    {
        text: "Women",
    },
    {
        text: "About",
    },
    {
        text: "Contact",

    }]

    return (
        <Container>
            <div className="header" >
                <div className="header-divA">
                    <div>
                        <button className="button" onClick={toggleDrawer(true)}>
                            <img src={iconmenu} alt="hamburger" />
                        </button>
                        <a href="/"><img src={logo} alt="logo" /></a>
                        {/* drawer */}
                        <Drawer
                            anchor={"left"}
                            open={state}
                            onClose={toggleDrawer(false)}
                            variant="temporary"
                        >
                            <Box
                                className="header-drawer"
                                role="presentation"
                                onClick={toggleDrawer(false)}
                            >
                                <div className="header-drawer-content">
                                    <button
                                        onClick={toggleDrawer(false)}>
                                        <img src={iconclose} alt="iconclose" />
                                    </button>
                                    {menu.map((item, i) => {
                                        const { text } = item;
                                        return (
                                            <a href={`/${text}`} key={i}>{text}</a>
                                        )
                                    })}
                                </div>
                            </Box>
                        </Drawer>
                        {/* drawer */}
                    </div>
                    <div className="header-divA-menu">
                        {menu.map((item, i) => {
                            const { text } = item;
                            return (
                                <a href={`/${text}`} key={i}>{text}</a>
                            )
                        })}
                    </div>
                </div>
                <div className="header-divB">

                    <button
                        onClick={!cart ? () => setCart(true) : () => setCart(false)}
                    >
                        <div className={props.addtocart ? 'header-divB-cart-counterenabled' : 'header-divB-cart-counterdisabled'}>
                            {props.counter}
                        </div>
                        <img className="header-divB-cart" src={cartimg} alt="cart" />
                    </button>

                    <div className={cart ? "header-divB-cartopen" : "header-divB-cartclosed"}>
                        <h3>Cart</h3>
                        <div className={props.addtocart ? 'header-divB-cartopen-showcontent' : 'header-divB-cartopen-hidecontent'}>
                            <div className='header-divB-cartopen-showcontent-cantent'>
                                <div className='header-divB-cartopen-showcontent-cantent-productimg' >
                                    <img src={imagethumbnail1} alt='cartimg' />
                                </div>
                                <div>
                                    <p>{props.title}</p>
                                    <p>${props.price}.00 x {props.counter} <span>${props.price * props.counter}.00</span></p>
                                </div>
                                <button onClick={props.removeFromCart}>

                                    <img src={deleteicon} alt='delete icon' />
                                </button>
                            </div>
                            <div className='header-divB-cartopen-showcontent-checkout'>
                                <button>
                                    checkout
                                </button>
                            </div>
                        </div>
                        <div className={props.addtocart?'header-divB-cartopen-hidecontent':'header-divB-cartopen-showcontent1'}>
                            <p>Your cart is empty</p>
                        </div>
                    </div>

                    <img className="header-divB-avatar" src={avatar} alt="avatar" />
                </div>
            </div>

        </Container >

    )
}

export default Header
