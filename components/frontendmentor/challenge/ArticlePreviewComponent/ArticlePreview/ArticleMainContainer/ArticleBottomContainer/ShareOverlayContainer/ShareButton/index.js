import ShareLogo from 'public/frontendmentor/challenge/article-preview-component/icon-share.svg';

import style from './style.module.css'

const ShareButton = ({ setActive }) => (
  <button className={style.share_button} onClick={() => setActive(false)}>
    <ShareLogo />
  </button>
)

export default ShareButton;