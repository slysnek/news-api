import News from "../components/view/news/news";
import Sources from '../components/view/sources/sources'

type NewsData = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
};

type SourcesData = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

type Source = {
    id: string;
    name: string;
};

type drawNewsData = {
    status: string;
    totalResults: number;
    articles: Array<NewsData>;
}

type drawSourcesData = {
  status: string;
  sources: Array<SourcesData>;
}

interface IAppView {
  news: News;
  sources: Sources;
  drawNews(data:drawNewsData):void
  drawSources(data:drawSourcesData):void
}

export { NewsData, Source, SourcesData,
  drawNewsData, drawSourcesData, IAppView };
