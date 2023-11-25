import './profile.css';
import avatar from '../img/avatar.jpg';

const Profile = () => {
    return(
        <div className='main'>
            <div className='profile_photo'>
                <img src={avatar}></img>
            </div>
            <div className='profile_info'>
                <div className='name'>
                    <p>
                        Ярослав Римарчук
                    </p>
                    <p className='status'>online</p>
                </div>
                <div className='desc'>
                    <p>
                        Enter any information about yourself
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Profile;