"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function c(e){try{u(i.next(e))}catch(e){r(e)}}function a(e){try{u(i.throw(e))}catch(e){r(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(c,a)}u((i=i.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const Settings_1=require("../../core/Settings");class IndexDAO{buildIndex(e){return __awaiter(this,void 0,void 0,function*(){const t=yield Settings_1.default.dbConnection();return new Promise((n,i)=>{t?t.collection("images").find().batchSize(100).forEach(t=>e.index(t),e=>{n()}):n()})})}}exports.default=IndexDAO;