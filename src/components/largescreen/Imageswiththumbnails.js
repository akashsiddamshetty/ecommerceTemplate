import React from 'react'
import productimg1 from "../images/image-product-1.jpg";
import productimg2 from "../images/image-product-2.jpg";
import productimg3 from "../images/image-product-3.jpg";
import productimg4 from "../images/image-product-4.jpg";
import thumbnailimg1 from '../images/image-product-1-thumbnail.jpg'
import thumbnailimg2 from '../images/image-product-2-thumbnail.jpg'
import thumbnailimg3 from '../images/image-product-3-thumbnail.jpg'
import thumbnailimg4 from '../images/image-product-4-thumbnail.jpg'
import { Menu, MenuItem } from "semantic-ui-react";
import Prevproductmodal from '../modal/Prevproductmodal';
const Imageswiththumbnails = () => {
    const storedValueAsNumber = Number(localStorage.getItem("state"));
    const [state, setState] = React.useState(Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0)
    const handleSelectedThumbnail = (e, { id: selectedThumbnail }) => {
        setState(selectedThumbnail);
    };
    React.useEffect(() => {
        localStorage.setItem("state", String(state))
    }, [state])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
    return (
        <>
            <div className='imageswiththumbnail'>
                <button
                    onClick={handleOpen}
                >
                    <img src={productimages[state].img} alt='product' />
                </button>
                <Menu className='imageswiththumbnail-thumbnail'>
                    <Menu.Item
                        id={0}
                        active={state === 0}
                        onClick={handleSelectedThumbnail}
                        key={0}
                    >
                        <button><img src={thumbnailimg1} alt='thumbnails' /></button>


                    </Menu.Item>
                    <Menu.Item
                        id={1}
                        active={state === 1}
                        onClick={handleSelectedThumbnail}
                        key={1}
                    >
                        <button ><img src={thumbnailimg2} alt='thumbnails' /></button>

                    </Menu.Item>

                    <Menu.Item
                        id={2}
                        active={state === 2}
                        onClick={handleSelectedThumbnail}
                        key={2}
                    >
                        <button ><img src={thumbnailimg3} alt='thumbnails' /></button>
                    </Menu.Item>
                    <MenuItem
                        id={3}
                        active={state === 3}
                        onClick={handleSelectedThumbnail}
                        key={3}
                    >
                        <button ><img src={thumbnailimg4} alt='thumbnails' /></button>
                    </MenuItem>
                </Menu>
            </div>
            <Prevproductmodal open={open} handleClose={handleClose} />

        </>
    )
}

export default Imageswiththumbnails
