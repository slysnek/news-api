type Data = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
};

type Source = {
    id: string;
    name: string;
};

export { Data, Source };
