import ArticlePictureContainer from './ArticlePictureContainer'
import ArticleMainContainer from './ArticleMainContainer'

import style from './style.module.css'

const ArticlePreview = () => (
  <div className={style.article_preview}>
    <ArticlePictureContainer />
    <ArticleMainContainer />
  </div>
)

export default ArticlePreview;