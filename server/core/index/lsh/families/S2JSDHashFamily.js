"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const HashFamily_1=require("../HashFamily"),S2JSDHash_1=require("./S2JSDHash");class S2JSDHashFamily extends HashFamily_1.default{constructor(s,e){super(),this.dimensions=s,this.w=e}createHashFunction(){return new S2JSDHash_1.default(this.dimensions,this.w)}}exports.default=S2JSDHashFamily;