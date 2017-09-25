"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,a){return new(t||(t=Promise))(function(o,s){function i(e){try{c(a.next(e))}catch(e){s(e)}}function n(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){e.done?o(e.value):new t(function(r){r(e.value)}).then(i,n)}c((a=a.apply(e,r||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const Debug=require("debug"),debug=Debug("ImageSaver"),TextUtil_1=require("../common/TextUtil"),ImageDTO_js_1=require("../dto/ImageDTO.js"),ImageDescriptor_1=require("../image-descriptor/ImageDescriptor"),ImageSaverDAO_1=require("./dao/ImageSaverDAO");class ImageSaver{constructor(e){this.sources=Array.isArray(e)?e:new Array,this.dao=new ImageSaverDAO_1.default}saveNext(){return __awaiter(this,void 0,void 0,function*(){const e=this.sources.map(e=>e.read());if(!e||e.length<1)return console.warn("No sources found"),Promise.resolve();let r=new Array;try{r=yield Promise.all(e)}catch(e){console.error(e)}let t=new Array;r.forEach(e=>{e&&e.length>0&&(t=t.concat(e))}),(t=t.filter(e=>e instanceof ImageDTO_js_1.default)).forEach(e=>{e.tags=TextUtil_1.default.reduceSetOfWords(e.tags,30,20)});let a=yield ImageDescriptor_1.default.createMany(t);a.forEach(e=>e.reduceWords(30,50));try{yield this.dao.saveDescriptors(a),debug("saved "+a.length+" images")}catch(e){console.error(e)}t=null,a=null})}}exports.default=ImageSaver;