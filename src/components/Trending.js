import React, { useEffect } from 'react'
import $ from 'jquery'
import 'paroller.js'
import jqueryParoller from 'paroller.js'
import { Container, Row, Col, Image, useAccordionButton } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/hero.css'

import Joker from '../assets/images/joker.jpg'
import Antman from '../assets/images/antman.jpg'
import Avenger from '../assets/images/avenger.jpg'
import Dune from '../assets/images/dune.jpg'
import lightyear from '../assets/images/lightyear.jpg'
import Infinite from '../assets/images/infinite.jpg'

function Trending() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <div className='trending' data-paroller-factor="0.5" data-paroller-factor-xs="0.2" id='trending'>
            <h1 className='text-capitalize text-light ps-5'>trending di <span className='text-uppercase text-warning fst-italic'>elfilms</span></h1>
            <div className='swiper-content'>
                <Slider {...settings} className='gap-3'>
                    {/* first card */}
                    <div className='movie-wrapper d-flex'>
                        <div className='card-item'>
                            <div className='image-card-item'>
                                <Image src={Joker} width={250} height={350} className='img-fluid' />
                            </div>
                            <div className='card-description bg-dark p-3 text-light d-flex flex-column justify-content-between'>
                                <h4 className='title-card-item text-capitalize'>joker</h4>
                                <p className='genre text-capitalize'>
                                    drama, thriller, crime
                                </p>
                                <div className='rating d-flex gap-1 align-items-center'>
                                    <div className='star-rate d-flex gap-1'>
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarHalf color='yellow' />
                                    </div>
                                    <div className='score'>
                                        <p>4.5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second card */}
                    <div className='movie-wrapper d-flex'>
                        <div className='card-item'>
                            <div className='image-card-item'>
                                <Image src={Avenger} width={250} height={350} className='img-fluid' />
                            </div>
                            <div className='card-description bg-dark p-3 text-light d-flex flex-column justify-content-between'>
                                <h4 className='title-card-item text-capitalize'>avenger</h4>
                                <p className='genre text-capitalize'>
                                    sci-fi, action
                                </p>
                                <div className='rating d-flex gap-1 align-items-center'>
                                    <div className='star-rate d-flex gap-1'>
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarFill color='yellow' />
                                    </div>
                                    <div className='score'>
                                        <p>5.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* third card */}
                    <div className='movie-wrapper d-flex'>
                        <div className='card-item'>
                            <div className='image-card-item'>
                                <Image src={Dune} width={250} height={350} className='img-fluid' />
                            </div>
                            <div className='card-description bg-dark p-3 text-light d-flex flex-column justify-content-between'>
                                <h4 className='title-card-item text-capitalize'>joker</h4>
                                <p className='genre text-capitalize'>
                                    sci-fi, action, thriller
                                </p>
                                <div className='rating d-flex gap-1 align-items-center'>
                                    <div className='star-rate d-flex gap-1'>
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarFill color='yellow' />
                                        <Icon.StarHalf color='yellow' />
                                    </div>
                                    <div className='score'>
                                        <p>4.5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Trending