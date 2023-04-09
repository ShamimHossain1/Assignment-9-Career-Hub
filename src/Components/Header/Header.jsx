import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='bg-slate-800 flex justify-around items-center py-5 px-20 sticky top-0 '>
            
            <h2>BD Job Bank</h2>

            <div className='text-white text-xl flex gap-10'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>                
            </div>
            <button>Star Applying</button>
        </nav>
            
        </div>
    );
};

export default Header;