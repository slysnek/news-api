import './sources.css';
import { SourcesData } from '../../../types/types';

class Sources {
    draw(data: SourcesData[], char?: string[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        const alphabetCharacters = document.querySelectorAll('.characters');
        alphabetCharacters.forEach((value, index) => {
            value.addEventListener('click', () => {
                const charSelector: string[][] = [
                    ['A', 'B', 'C', 'D', 'E'],
                    ['F', 'G', 'H', 'I', 'K'],
                    ['J', 'L', 'M', 'N', 'O'],
                    ['P', 'Q', 'R', 'S', 'T'],
                    ['U', 'V', 'W', 'X', 'Y', 'Z'],
                ];
                this.draw(data, charSelector[index]);
            });
        });

        const sourcesWrap = document.querySelector('.sources') as HTMLTemplateElement;

        data.forEach((item: SourcesData) => {
            if (char) {
                sourcesWrap.innerHTML = '';
                char.forEach((value) => {
                    if (value === item.name.toUpperCase().split('')[0]) {
                        const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;
                        const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLTemplateElement;
                        sourceItemName.textContent = item.name;
                        const sourceItem = sourceClone.querySelector('.source__item') as HTMLTemplateElement;
                        sourceItem.setAttribute('data-source-id', item.id);
                        fragment.append(sourceClone);
                    }
                });
            } else {
                //dry principle is silently smoking and crying
                const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;
                const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLTemplateElement;
                sourceItemName.textContent = item.name;
                const sourceItem = sourceClone.querySelector('.source__item') as HTMLTemplateElement;
                sourceItem.setAttribute('data-source-id', item.id);
                fragment.append(sourceClone);
            }
        });

        sourcesWrap.append(fragment);
    }
}

export default Sources;
