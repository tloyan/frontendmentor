import { useState } from 'react';

import ArticleBottomMainContainer from './ArticleBottomMainContainer'
import ShareOverlayContainer from './ShareOverlayContainer';

import style from './style.module.css'

const ArticleBottomContainer = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={style.article_bottom_container}>
      <ArticleBottomMainContainer active={active} setActive={setActive} />
      <ShareOverlayContainer active={active} setActive={setActive} />
    </div>
  )
}

export default ArticleBottomContainer;