import AuthorContainer from './AuthorContainer'
import ShareContainer from './ShareContainer'

import style from './style.module.css'

const ArticleBottomMainContainer = ({ active, setActive }) => (
  <div className={style.article_bottom_main_container}>
    <AuthorContainer />
    <ShareContainer active={active} setActive={setActive} />
  </div>
)

export default ArticleBottomMainContainer;