import '../styles/header.css';


function Header() {

    return (
        <>
            <div className='header'>
                <a href="#" className='brand-name'>3W Blog</a>
                <div className='navigation-menu'>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href="/Contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
        </>
    )
}

export default Header