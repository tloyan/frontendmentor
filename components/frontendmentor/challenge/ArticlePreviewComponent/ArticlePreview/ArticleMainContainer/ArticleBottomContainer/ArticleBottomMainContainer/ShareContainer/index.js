import ShareBubbleContainer from './ShareBubbleContainer'
import ShareButton from './ShareButton'

import style from './style.module.css'

const ShareContainer = ({ active, setActive }) => (
  <div className={style.share_container}>
    <ShareBubbleContainer active={active} />
    <ShareButton active={active} setActive={setActive} />
  </div>
)

export default ShareContainer;