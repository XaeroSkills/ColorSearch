"use strict";var __awaiter=this&&this.__awaiter||function(n,o,t,e){return new(t||(t=Promise))(function(c,i){function r(n){try{s(e.next(n))}catch(n){i(n)}}function a(n){try{s(e.throw(n))}catch(n){i(n)}}function s(n){n.done?c(n.value):new t(function(o){o(n.value)}).then(r,a)}s((e=e.apply(n,o||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const mongodb_1=require("mongodb");class MongoDB{constructor(){this.conn=null}connection(n){return __awaiter(this,void 0,void 0,function*(){try{yield this.conn.command({connectionStatus:1})}catch(n){try{yield this.reconnect("mongodb://localhost:27017/node")}catch(n){return console.error("Connection to MongoDB failed."),Promise.reject(new Error("LocalHost MongoDB connection failed."))}}return n?this.conn.collection(n):this.conn})}reconnect(n){return __awaiter(this,void 0,void 0,function*(){this.conn=yield mongodb_1.MongoClient.connect(n)})}}exports.default=MongoDB;