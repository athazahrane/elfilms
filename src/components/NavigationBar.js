import React, { useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarNavigation = () => {
    useEffect(() => {
        // Handling scroll to add class to Navbar
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar-navigation');
            if (window.scrollY > 200) {
                navbar.classList.add('scroll-nav');
            } else {
                navbar.classList.remove('scroll-nav');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Handling hamburger toggle to show/hide sidebar
        const handleHamburgerChange = () => {
            const hamburger = document.getElementById('hamburger');
            const sidebar = document.querySelector('.nav-links');

            if (hamburger.checked) {
                sidebar.classList.add('active');
            } else {
                sidebar.classList.remove('active');
            }
        };

        const hamburger = document.getElementById('hamburger');
        hamburger.addEventListener('change', handleHamburgerChange);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            hamburger.removeEventListener('change', handleHamburgerChange);
        };
    }, []);

    return (
        <div className='navbar-navigation'>
            <Navbar className='navbar'>
                <Container>
                    {/* Title nav */}
                    <Navbar.Brand>
                        <a href='#' className='nav-title text-uppercase fst-italic fw-semibold text-warning text-decoration-none fs-4'>elfilms</a>
                    </Navbar.Brand>

                    {/* Nav links */}
                    <Nav className='nav-links'>
                        <Nav.Link className='nav-item text-light fs-6'>Trending</Nav.Link>
                        <Nav.Link className='nav-item text-light fs-6'>Super Hero</Nav.Link>
                    </Nav>

                    {/* Hamburger */}
                    <label className='hamburger'>
                        <input type='checkbox' id='hamburger' />
                        <svg viewBox='0 0 32 32'>
                            <path className='line line-top-bottom' d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'></path>
                            <path className='line' d='M7 16 27 16'></path>
                        </svg>
                    </label>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarNavigation;