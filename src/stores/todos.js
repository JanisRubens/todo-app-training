import Fluxible from 'fluxible';
import {createStore} from 'fluxible/addons';
import { connectToStores, createElementWithContext, provideContext } from 'fluxible-addons-react';

const TodoStore = createStore({
    storeName: 'FooStore',
    handlers: {
        'FOO_ACTION': 'fooHandler'
    },
    initialize: function () { // Set the initial state 
        this.foo = null;
    },
    fooHandler: function (payload) {
        this.foo = payload;
    },
    getState: function () {
        return {
            foo: this.foo
        }
    }
});