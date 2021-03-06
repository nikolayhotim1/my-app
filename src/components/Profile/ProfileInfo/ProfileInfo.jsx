import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/userPhoto.png';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={style.main_image}>
                <img
                    src='https://wallpaperaccess.com/full/2130425.jpg'
                    alt='Savanna'
                />
            </div>

            <div className={style.avatar_with_descriptions}>
                <img
                    src={props.profile.photos.large || userPhoto}
                    alt='Zebra'
                />

                <div className={style.descriptions}>
                    <h1>{props.profile.fullName}</h1>

                    <ProfileStatus
                        status={props.status}
                        getUpdateStatus={props.getUpdateStatus}
                    />

                    <p>Date of birth: 23.12.1992</p>
                    <p>City of residence: Grodno, Belarus</p>
                    <p>About me: {props.profile.aboutMe}</p>

                    <p>Looking for a job: {props.profile.lookingForAJob
                        ? props.profile.lookingForAJobDescription
                        : 'not looking for'}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;