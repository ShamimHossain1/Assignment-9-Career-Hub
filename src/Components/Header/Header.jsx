import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Button, Navbar } from 'flowbite-react';

const Header = () => {
    return (


        <nav className='md:px-56 md:py-7 py-2' >
            <Navbar
            fluid={true}
            rounded={true}
            
        >
            <Navbar.Brand >
                <span className="self-center whitespace-nowrap md:text-2xl text-xl font-bold dark:text-white">
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
                
                >
                    <span className='text-base'>Home</span>
                </Navbar.Link>
                <Navbar.Link href="/statistics">
                <span className='text-base'>Statistics</span>
                  
                </Navbar.Link>
                <Navbar.Link href="/applied_jobs">
                <span className='text-base'>Applied Jobs</span>
                   
                </Navbar.Link>
                <Navbar.Link href="/blog">
                <span className='text-base'>Blog</span>
                    
                </Navbar.Link>
            </Navbar.Collapse>

        </Navbar>
        </nav>


    );
};

export default Header;