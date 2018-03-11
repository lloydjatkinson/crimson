const getters = {
    articleCount: state => state.articles.length,
    articles: state => state.articles,

    sourceCount: state => state.sources.length,
    sources: state => state.sources
};

export default getters;