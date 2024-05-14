import React, { useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarNavigation = () => {
    useEffect(() => {
        const navbar = document.querySelector('.navbar-navigation');
        const hamburger = document.getElementById('hamburger');

        const handleNavbarScroll = () => {
            const AnimationNavbar = document.querySelector('.navbar-show');
            const onScroll = () => {
                if (window.scrollY > 150) {
                    AnimationNavbar.classList.add('animation');
                } else {
                    AnimationNavbar.classList.remove('animation');
                }
            };
            window.addEventListener('scroll', onScroll);
            return () => window.removeEventListener('scroll', onScroll);
        };

        const handleHamburgerChange = () => {
            const sidebar = document.querySelector('.nav-links');
            if (hamburger.checked) {
                sidebar.classList.add('active');
            } else {
                sidebar.classList.remove('active');
            }
        };

        const handleScroll = () => {
            let lastScrollTop = 0;
            const onScroll = () => {
                if (window.scrollY > lastScrollTop) {
                    navbar.classList.remove("visible");
                } else if (window.scrollY < lastScrollTop) {
                    navbar.classList.add("visible");
                }
                lastScrollTop = window.scrollY <= 0 ? 0 : window.scrollY;
            };
            window.addEventListener('scroll', onScroll, { passive: true });
            return () => window.removeEventListener('scroll', onScroll);
        };

        const cleanupNavbarScroll = handleNavbarScroll();
        const cleanupScroll = handleScroll();
        hamburger.addEventListener('change', handleHamburgerChange);

        // Initial visibility setup
        navbar.classList.add('visible');

        return () => {
            cleanupNavbarScroll();
            cleanupScroll();
            hamburger.removeEventListener('change', handleHamburgerChange);
        };
    }, []);

    return (
        <div className='navbar-navigation navbar-show'>
            <Navbar className='navbar'>
                <Container>
                    <Navbar.Brand>
                        <a href='#' className='nav-title text-uppercase fst-italic fw-semibold text-warning text-decoration-none fs-4'>elfilms</a>
                    </Navbar.Brand>
                    <Nav className='nav-links'>
                        <Nav.Link className='nav-item text-light fs-6'>Trending</Nav.Link>
                        <Nav.Link className='nav-item text-light fs-6'>Super Hero</Nav.Link>
                    </Nav>
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