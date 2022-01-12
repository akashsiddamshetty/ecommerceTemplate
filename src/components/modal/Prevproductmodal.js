import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import productimg1 from "../images/image-product-1.jpg";
import productimg2 from "../images/image-product-2.jpg";
import productimg3 from "../images/image-product-3.jpg";
import productimg4 from "../images/image-product-4.jpg";
import thumbnailimg1 from '../images/image-product-1-thumbnail.jpg'
import thumbnailimg2 from '../images/image-product-2-thumbnail.jpg'
import thumbnailimg3 from '../images/image-product-3-thumbnail.jpg'
import thumbnailimg4 from '../images/image-product-4-thumbnail.jpg'
import iconnext from '../images/icon-next.svg';
import iconprev from '../images/icon-previous.svg';
import { Menu, MenuItem } from "semantic-ui-react";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
};
export default function Prevproductmodal({ open, handleClose }) {
    const storedValueAsNumber = Number(localStorage.getItem("state"));
    const [state, setState] = React.useState(Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0)
    const handleSelectedThumbnail = (e, { id: selectedThumbnail }) => {
        setState(selectedThumbnail);
    };
    const next = () => {
        let step = state;
        setState(++step)
    }
    const prev = () => {
        let step = state;
        setState(--step)
    }
    React.useEffect(() => {
        localStorage.setItem("state", String(state))
    }, [state])

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
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className='previmages'>
                        <div className='previmages-closeicon' >
                            <button onClick={handleClose}>
                                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className='previmages-buttonscontainer'>
                            <button onClick={() => prev()} disabled={state === 0}>
                                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                                </svg>
                            </button>
                            <button onClick={() => next()} disabled={state === productimages.length - 1}>
                                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <img src={productimages[state].img} alt='product' />
                        <Menu className='previmages-thumbnail'>
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

                </Box>
            </Modal>
        </div>
    );
}
