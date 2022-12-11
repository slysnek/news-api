import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ffa29b570b1848d08bf4e3bd3eda1a12', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
