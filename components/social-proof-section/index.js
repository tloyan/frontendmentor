import SocialProofSection from "../../pages/social-proof-section";

import style from './style.module.css';

const SocialProofSectionComponent = () => (
  <div className={style.container}>
    <div className={style.description_container}></div>
    <div className={style.rated_container}></div>
    <div className={style.feedback_container}></div>
  </div>
);

export default SocialProofSectionComponent;