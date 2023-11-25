import s from'./header.module.css';

const Header = () => {
    return(
        <header>
            <div className={s.first}>
                <div className={s.logo}>
                    <img src="https://www.macupdate.com/images/icons512/58650.png"  width={40}></img>
                </div>
                <div className={s.search_icon}>
                    <img src="https://static.vecteezy.com/system/resources/previews/011/947/136/original/silver-search-icon-free-png.png" width={30}></img>
                </div>
            </div>
            <div className={s.second}>
                <div className={s.account}>
                    <img width={30}></img>
                </div>
            </div>
        </header>
    )
  }

  export default Header;