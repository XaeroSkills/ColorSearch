"use strict";var __awaiter=this&&this.__awaiter||function(e,i,r,t){return new(r||(r=Promise))(function(a,c){function s(e){try{g(t.next(e))}catch(e){c(e)}}function n(e){try{g(t.throw(e))}catch(e){c(e)}}function g(e){e.done?a(e.value):new r(function(i){i(e.value)}).then(s,n)}g((t=t.apply(e,i||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const ServiceExecutor_1=require("../common/ServiceExecutor"),Settings_1=require("../Settings"),ClarifaiService_1=require("./services/ClarifaiService"),ImaggaService_1=require("./services/ImaggaService"),Debug=require("debug"),debug=Debug("ImageTagger"),Services=new Map;Services.set("ClarifaiService",new ClarifaiService_1.default),Services.set("ImaggaService",new ImaggaService_1.default);class ImageTagger{constructor(){const e=Settings_1.default.imageTagger();this.sim=e.similarityThreshold,this.enabled=e.enabled,this.serviceExecutor=new ServiceExecutor_1.default(Services.size,3e4),e.services.forEach(e=>{Services.has(e)&&this.serviceExecutor.addService(Services.get(e))})}isEnabled(){return this.enabled}tagByPublicURL(e,i){return __awaiter(this,void 0,void 0,function*(){const r=this;if(this.enabled&&this.serviceExecutor.hasServices()){debug("tagging by url...");try{yield this.serviceExecutor.execute(function(t){return __awaiter(this,void 0,void 0,function*(){return yield t.tagByPublicURL(e,i,r.sim)})})}catch(e){return console.error("ImageTagger: Tagging by URL failed."),Promise.reject(new Error("Tagging by URL failed."))}}})}tagByBase64(e,i){return __awaiter(this,void 0,void 0,function*(){const r=this;if(this.enabled&&this.serviceExecutor.hasServices()){debug("tagging by base64...");try{yield this.serviceExecutor.execute(function(t){return __awaiter(this,void 0,void 0,function*(){return yield t.tagByBase64(e,i,r.sim)})})}catch(e){return console.error("ImageTagger: Tagging by Base64 failed."),Promise.reject(new Error("Tagging by Base64 failed."))}}})}}exports.default=new ImageTagger;