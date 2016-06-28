import Fluxible from 'fluxible';
//import {createStore} from 'fluxible/addons';
//import { connectToStores, createElementWithContext, provideContext } from 'fluxible-addons-react';

const getAllTodos = (actionContext, payload) => {
    actionContext.dispatch('GET_ALL_TODOS', payload);
};

const addTodo = (actionContext, payload) => {
    actionContext.dispatch('ADD_TODO', payload);
};

const deleteTodo = (actionContext, payload) => {
    actionContext.dispatch('DELETE_TODO', payload);
};

const updateTodo = (actionContext, payload) => {
    actionContext.dispatch('UPDATE_TODO', payload);
};

const markComplete = (actionContext, payload) => {
    actionContext.dispatch('COMPLETE_TODO', payload);
};

