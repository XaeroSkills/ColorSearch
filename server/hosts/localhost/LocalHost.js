"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const Couchbase_1=require("./databases/Couchbase"),MongoDB_1=require("./databases/MongoDB");class LocalHost{constructor(e){switch(this.serverUrl="http://127.0.0.1:8080",this.port=8080,this.ip="127.0.0.1",e.toLowerCase()){case"couchbase":this.dataBase=new Couchbase_1.default;break;default:this.dataBase=new MongoDB_1.default}}getServerUrl(){return this.serverUrl}getIp(){return this.ip}getPort(){return this.port}getDb(){return this.dataBase}}exports.default=LocalHost;