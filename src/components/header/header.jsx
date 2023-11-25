import './header.css';

const Header = () => {
    return(
        <header>
            <div className="first">
                <div className="logo">
                    <img src="https://www.macupdate.com/images/icons512/58650.png"  width={40}></img>
                </div>
                <div className="search-icon">
                    <img src="https://static.vecteezy.com/system/resources/previews/011/947/136/original/silver-search-icon-free-png.png" width={30}></img>
                </div>
            </div>
            <div className="second">
                <div className="account">
                    <img width={30}></img>
                </div>
            </div>
        </header>
    )
  }

  export default Header;