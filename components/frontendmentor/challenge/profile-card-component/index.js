import style from './style.module.css';

const ProfileCardComponentComponent = () => (
  <div className={style.container}>
    <div className={style.profile_card_container}>
      <div className={style.profile_image_container}>
        <div>
          <img src="/frontendmentor/challenge/profile-card-component/image-victor.jpg" />
        </div>
      </div>
      <div className={style.profile_description}>
        <p>Victor Crest <span>26</span></p>
        <p>London</p>
      </div>
      <div className={style.profile_stats}>
        <div>
          <p>80K</p>
          <p>Followers</p>
        </div>
        <div>
          <p>803K</p>
          <p>Likes</p>
        </div>
        <div>
          <p>1.4K</p>
          <p>Photos</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileCardComponentComponent;