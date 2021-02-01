import ShareContentContainer from './ShareContentContainer';

import style from './style.module.css'

const ShareBubbleContainer = ({ active }) => {
  const shareBubbleContainerStyle = active ? style.share_bubble_container + ' ' + style.active : style.share_bubble_container;
  return (
    <div className={shareBubbleContainerStyle}>
      <ShareContentContainer />
      <div className={style.triangle} />
    </div>
  )
}

export default ShareBubbleContainer;