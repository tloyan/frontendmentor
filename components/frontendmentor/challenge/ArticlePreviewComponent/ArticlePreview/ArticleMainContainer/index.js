import ArticleContentContainer from './ArticleContentContainer'
import ArticleBottomContainer from './ArticleBottomContainer'

import style from './style.module.css'

const ArticleMainContainer = () => (
  <div className={style.article_main_container}>
    <ArticleContentContainer />
    <ArticleBottomContainer />
  </div>
)

export default ArticleMainContainer;