import {inject} from 'aurelia-framework';
import {Api} from './services/api';

@inject(Api)
export class Pages {
    
    pages = {};

    constructor(private api: Api) {
    }

    activate(params, routeConfig) {
        this.api.many('page').then(pages => this.pages = pages);
    }
}
