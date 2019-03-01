"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(s,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function n(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){e.done?s(e.value):new r(function(t){t(e.value)}).then(a,n)}c((i=i.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const fs=require("fs"),TextUtil_1=require("../../common/TextUtil"),ImageDTO_js_1=require("../../dto/ImageDTO.js"),ImageSource_1=require("../ImageSource"),Debug=require("debug"),debug=Debug("FlickrSource"),Flickr_1=require("./flickr-api/Flickr"),flickr=new Flickr_1.default("07d4e8fe2bf1734aef943caa250b67f9");class FlickrSource extends ImageSource_1.default{constructor(e){super(),this.enabled=!0===e.enabled;const t="number"==typeof e.step?e.step:5;this.wordLists=Array.isArray(e.wordLists)?e.wordLists:[],this.wordListsPath=__dirname+"/word-lists",this.randomization="number"==typeof e.randomization?e.randomization:.5,this.sourceName="flickr",this.apiMethod="",this.imgsReader=new FlickrPhotoReader,this.options={extras:"tags,owner_name,license",license:"1,2,3,4,5,6,9,10,4",media:"photos",page:20,per_page:t,text:"",privacy_filter:1,safe_search:1,content_type:1}}getData(){return __awaiter(this,void 0,void 0,function*(){let e=new Array;if(this.enabled){debug("flickr get image data..."),this.setupFlickrSearch(),console.warn("selected word: "+this.options.text);try{const t=yield flickr.get(this.apiMethod,this.options);if(t&&"ok"===t.stat){e=this.imgsReader.read(t).map(e=>{const t=new ImageDTO_js_1.default;return t.id=e.id,t.url=e.url,t.previewURL=e.smallURL,t.originalURL="http://flickr.com/photo.gne?id="+e.id,t.tags=TextUtil_1.default.cleanTextFromHtml(e.tags),t.source=this.sourceName,t.owner=e.owner,t.license=e.license,t.title=TextUtil_1.default.cleanTextFromHtml(e.title),t})}}catch(e){console.error(e)}}return e})}setupFlickrSearch(){if(this.options.text="",this.apiMethod="photos.getRecent",this.options.page=Math.round(1e3*Math.random()),this.wordLists.length>0&&Math.random()>=this.randomization){const e=Math.round(Math.random()*(this.wordLists.length-1)),t=this.wordLists[e];try{const e=fs.readFileSync(this.wordListsPath+"/"+t,"utf8").split("\n"),r=Math.round(Math.random()*(e.length-1));this.options.text=e[r].trim(),this.apiMethod="photos.search"}catch(e){console.error(e)}}}}exports.default=FlickrSource;class FlickrPhotoReader{read(e){const t=[];if("ok"===e.stat){const r=e.photos.photo;for(let e=0;e<r.length;e++)if(r[e].ispublic){const i=this.getImageData(r[e]);t.push(i)}}else console.error(e.message+". Error code: "+e.code);return t}getImageData(e){const t={};t.title=e.title,t.tags=e.tags,t.id=e.id;const r="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret;return t.url=r+"_b.jpg",t.smallURL=r+"_n.jpg",t.owner=e.ownername,t.license=e.license,t}}