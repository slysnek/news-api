import News from '../components/view/news/news';
import Sources from '../components/view/sources/sources';

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

type drawNewsData = void | {
    status: string;
    totalResults: number;
    articles: Array<NewsData>;
};

type drawSourcesData = void | {
    status: string;
    sources: Array<SourcesData>;
};

type Options = {
    apiKey: string;
};

interface IResponse {
    //body?: string;
    bodyUsed: boolean;
    headers: Headers;
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    json: () => void;
}

interface IGetResponse {
    endpoint: string;
    options?: ResponseOptions;
}

type ResponseOptions =
    | undefined
    | {
          sources: string | number | null | undefined;
      };

interface IAppView {
    news: News;
    sources: Sources;
    drawNews(data: drawNewsData): void;
    drawSources(data: drawSourcesData): void;
}

type LoadComeback = (smth: void) => void;

export {
    NewsData,
    Source,
    SourcesData,
    drawNewsData,
    drawSourcesData,
    Options,
    IAppView,
    ResponseOptions,
    IResponse,
    IGetResponse,
    LoadComeback,
};
