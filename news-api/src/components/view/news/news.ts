import './news.css';
import { NewsData } from '../../../types/types';
class News {
    draw(data: NewsData[]) {
        const news = data.length >= 10 ? data.filter((_item: NewsData, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: NewsData, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const newsItem = newsClone.querySelector('.news__item') as HTMLTemplateElement;
            if (idx % 2) newsItem.classList.add('alt');
            const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement;
            metaPhoto.style.backgroundImage = `url(${
                item.urlToImage ||
                'https://avatars.mds.yandex.net/i?id=bafc57bf9e3add5350fdd2f782c17859ab2dc98b-4216502-images-thumbs&n=13'
            })`;
            const metaAuthor = newsClone.querySelector('.news__meta-author') as HTMLTemplateElement;
            metaAuthor.textContent = item.author || item.source.name;

            const metaDate = newsClone.querySelector('.news__meta-date') as HTMLTemplateElement;

            metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const descriptionTitle = newsClone.querySelector('.news__description-title') as HTMLTemplateElement;
            const descriptionSource = newsClone.querySelector('.news__description-source') as HTMLTemplateElement;
            const descriptionContent = newsClone.querySelector('.news__description-content') as HTMLTemplateElement;
            const readMore = newsClone.querySelector('.news__read-more a') as HTMLTemplateElement;

            descriptionTitle.textContent = item.title;
            descriptionSource.textContent = item.source.name;
            descriptionContent.textContent = item.description;
            readMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsWrap = document.querySelector('.news') as HTMLTemplateElement;

        newsWrap.innerHTML = '';
        newsWrap.appendChild(fragment);
    }
}

export default News;
