import './sources.css';
import { SourcesData } from '../../../types/types';

class Sources {
    draw(data: SourcesData[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        data.forEach((item: SourcesData) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLTemplateElement;
            sourceItemName.textContent = item.name;
            const sourceItem = sourceClone.querySelector('.source__item') as HTMLTemplateElement;
            sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const sourcesWrap = document.querySelector('.sources') as HTMLTemplateElement;
        sourcesWrap.append(fragment);
    }
}

export default Sources;
