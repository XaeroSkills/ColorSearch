"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const S2JSDHash_1=require("./S2JSDHash");class S2JSDHashFamily{constructor(e,s){this.dimensions=e,this.w=s}createHashFunction(){return new S2JSDHash_1.default(this.dimensions,this.w)}combine(e){if(null===e)return 0;let s=1;for(const t of e)s=31*s+t;return s}}exports.default=S2JSDHashFamily;