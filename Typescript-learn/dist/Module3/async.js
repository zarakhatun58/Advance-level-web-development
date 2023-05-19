"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//string tyope
const makePromise = () => {
    new Promise((resolve, reject) => {
        const data = 'data is fetched';
        if (data) {
            resolve(data);
        }
        else {
            reject("failed to fetch");
        }
    });
};
// async er khetre promise hobe Promise<boolean>, Promise<string>, Promise<object>
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    // console.log(data)
    return data;
});
//boolean type
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject("failed to fetch");
        }
    });
};
const getPromiseDataBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    // console.log(data)
    return data;
});
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = { data: "data is fetched" };
        if (data) {
            resolve(data);
        }
        else {
            reject("failed to fetch");
        }
    });
};
const getPromiseDataObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    // console.log(data)
    return data;
});
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    //const data =await response.json()
    return yield response.json();
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getTodo;
    console.log(result);
});
getTodoData();
//npx ts-node-dev src/Module3/async.ts
//npx ts-node-dev src/Module4/object.ts
