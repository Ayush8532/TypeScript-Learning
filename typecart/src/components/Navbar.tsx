import { Link } from "react-router-dom"
export function Navbar(){
    return(
        <>
        <nav>
            <div>
                <ul>
                    
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/store">Store</Link></li>
                </ul>
                <div>
                    <span><Link to="/cart">Cart</Link></span> <span>10</span>
                    
                </div>                
            </div>
        </nav>
        </>
    )
}