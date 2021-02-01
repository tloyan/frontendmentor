import ShareContentContainer from './ShareContentContainer'
import ShareButton from './ShareButton'

import style from './style.module.css'

const ShareOverlayContainer = ({ active, setActive }) => {
  const shareOverlayContainerStyle = active ? style.share_overlay_container + ' ' + style.active : style.share_overlay_container;
  return (
    <div className={shareOverlayContainerStyle}>
      <ShareContentContainer />
      <ShareButton setActive={setActive} />
    </div>
  )
}

export default ShareOverlayContainer;