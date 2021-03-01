import React from 'react';
import {Link} from 'react-router-dom';
export default function Nav() {
    return (
        <div>
            <Link to={`/`}>Logo</Link>
            <Link to={`/`}>Home</Link>
            <Link to={`/deals`}>Deals</Link>
            <Link to={`/cart`}>Cart</Link>
        </div>
    )
}
