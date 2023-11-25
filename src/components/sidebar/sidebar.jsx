
import s from './sidebar.module.css'

const Sidebar = () => {
    return(
        <div className={s.sidebar}>
            <div className={s.elem}>first</div>
            <div className={s.elem}>second</div>
            <div className={s.elem}>third</div>
            <div className={s.elem}>fourth</div>
            <div className={s.elem}>fifth</div>
        </div>
    )
}

export default Sidebar;