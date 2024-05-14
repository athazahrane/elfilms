import { Container , Button } from "react-bootstrap";
// import { useEffect } from "react";
import Typed from "typed.js";
import $ from 'jquery'
import 'paroller.js'
import React, { useEffect } from 'react'

function Intro() {

    useEffect(() => {
        const typing = new Typed(".typing", {
            strings: [
                'disini kami menyediakan film yang seru dan populer',
                'website ini juga selalu update film film terbaru',
                'jangan lupa untuk menikmati film kami sambil ngemil',
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typing.destroy();
        };
    }, []);

    return (
        <div className='intro d-flex justify-content-center align-items-center h-100'>
            <Container className='hero-des text-light'>
                <h3 className='title fw-bold'>SELAMAT DATANG DI <span className='span-title'>ELFILMS</span></h3>
                <h2 className='title fw-bold'>NONTON FILM GRATIS GAK PAKE KARCIS</h2>
                <p className='fs-6'>
                    <span className="typing text-capitalize"> </span>
                </p>
                <button className="btn-hero">Lihat Semua</button>
            </Container>
        </div>
    );
}

export default Intro;
