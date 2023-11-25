import s from './profile.module.css';
import avatar from '../img/avatar.jpg';

const Profile = () => {
    return(
        <div className={s.main}>
            <div className={s.profile_photo}>
                <img src={avatar}></img>
            </div>
            <div className={s.profile_info}>
                <div className={s.name}>
                    <p>
                        Ярослав Римарчук
                    </p>
                    <p className={s.status}>online</p>
                </div>
                <div className={s.desc}>
                    <p>
                        Enter any information about yourself
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Profile;