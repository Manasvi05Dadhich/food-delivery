const logo = new URL('../../assets/anya.jpg', import.meta.url);

const AppBar = () => {
    return <div className="Appbar">
        <div className="logo">
            <img
                src={logo.href} alt="Logo" />
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

export default AppBar;