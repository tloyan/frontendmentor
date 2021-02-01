import ShareLogo from 'public/frontendmentor/challenge/article-preview-component/icon-share.svg';
import style from './style.module.css'

const ShareButton = ({ active, setActive }) => (
  <button className={style.share_button} onClick={() => setActive(!active)}>
    <ShareLogo />
  </button>
)

export default ShareButton;