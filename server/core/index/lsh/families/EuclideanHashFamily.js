"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const HashFamily_1=require("../HashFamily"),EuclideanHash_1=require("./EuclideanHash");class EuclideanHashFamily extends HashFamily_1.default{constructor(e,s){super(),this.dimensions=Math.round(e),this.w=s}createHashFunction(){return new EuclideanHash_1.default(this.dimensions,this.w)}}exports.default=EuclideanHashFamily;