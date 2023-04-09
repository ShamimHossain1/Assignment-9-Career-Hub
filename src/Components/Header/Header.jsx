import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Button, Navbar } from 'flowbite-react';

const Header = () => {
    return (


        <nav className='md:px-56 py-7' >
            <Navbar
            fluid={true}
            rounded={true}
            
        >
            <Navbar.Brand href="https://flowbite.com/" >
                <span className="self-center whitespace-nowrap md:text-2xl font-bold dark:text-white">
                    BD JOB BANK
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 ">
                <Button style={ {background:' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}} className='px-2 py-1'>
                Star Applying
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/statistics">
                    Statistics
                </Navbar.Link>
                <Navbar.Link href="/applied_jobs">
                    Applied Jobs
                </Navbar.Link>
                <Navbar.Link href="/blog">
                    Blog
                </Navbar.Link>
            </Navbar.Collapse>

        </Navbar>
        </nav>


    );
};

export default Header;