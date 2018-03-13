const getters = {
    articleApiPending: state => state.articleApiPending,
    articleCount: state => state.articles.length,
    articles: state => state.articles,

    sourcesApiPending: state => state.sourcesApiPending,
    sourceCount: state => state.sources.length,
    sources: state => state.sources
};

export default getters;