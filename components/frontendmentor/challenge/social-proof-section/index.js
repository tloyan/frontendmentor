import style from './style.module.css';

const SocialProofSectionComponent = () => (
  <div className={style.container}>
    <div className={style.center}>
      <div className={style.description_container}>
        <h1 className={style.description_title}>10,000+ of our users love our products.</h1>
        <p className={style.description_content}>
          We only provide great products combined with excellent customer service.
          See what our satisfied customers are saying about our services.
        </p>
      </div>
      <div className={style.rated_container}>
        <div className={style.rated_item + ' ' + style.first}>
          <div className={style.rated_stars}>
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
          </div>
          <p>Rated 5 Stars in Reviews</p>
        </div>
        <div className={style.rated_item}>
          <div className={style.rated_stars}>
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
          </div>
          <p>Rated 5 Stars in Report Guru</p>
        </div>
        <div className={style.rated_item + ' ' + style.last}>
          <div className={style.rated_stars}>
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
            <img src="/frontendmentor/challenge/social-proof-section/icon-star.svg" />
          </div>
          <p>Rated 5 Stars in BestTech</p>
        </div>
      </div>
      <div className={style.feedback_container}>
        <div className={style.feedback_item + ' ' + style.first}>
          <div className={style.feedback_item_head}>
            <div className={style.feedback_item_head_imageWrapper}>
              <img src="/frontendmentor/challenge/social-proof-section/image-colton.jpg" />
            </div>
            <div className={style.feedback_item_head_content}>
              <p className={style.feedback_item_head_name}>Colton Smith</p>
              <p className={style.feedback_item_head_status}>Verified Buyer</p>
            </div>
          </div>
          <p className={style.feedback_item_content}>
            “ We needed the same printed design as the one we had ordered a week prior.
            Not only did they find the original order, but we also received it in time.
            Excellent! ”
          </p>
        </div>
        <div className={style.feedback_item}>
          <div className={style.feedback_item_head}>
            <div className={style.feedback_item_head_imageWrapper}>
              <img src="/frontendmentor/challenge/social-proof-section/image-irene.jpg" />
            </div>
            <div className={style.feedback_item_head_content}>
              <p className={style.feedback_item_head_name}>Irene Roberts</p>
              <p className={style.feedback_item_head_status}>Verified Buyer</p>
            </div>
          </div>
          <p className={style.feedback_item_content}>
            “ Customer service is always excellent and very quick turn around. Completely
            delighted with the simplicity of the purchase and the speed of delivery. ”
          </p>
        </div>
        <div className={style.feedback_item + ' ' + style.last}>
          <div className={style.feedback_item_head}>
              <div className={style.feedback_item_head_imageWrapper}>
                <img src="/frontendmentor/challenge/social-proof-section/image-anne.jpg" />
              </div>
              <div className={style.feedback_item_head_content}>
                <p className={style.feedback_item_head_name}>Anne Wallace</p>
                <p className={style.feedback_item_head_status}>Verified Buyer</p>
              </div>
          </div>
          <p className={style.feedback_item_content}>
            “ Put an order with this company and can only praise them for the very high
            standard. Will definitely use them again and recommend them to everyone! ”
          </p>
        </div>
      </div>

    </div>
  </div>
);

export default SocialProofSectionComponent;