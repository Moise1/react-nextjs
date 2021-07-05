import articleStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
        {articles.map(a => <ArticleItem key={a.id} article={a}>{a.title}</ArticleItem>)}
        </div>
    )
}

export default ArticleList
