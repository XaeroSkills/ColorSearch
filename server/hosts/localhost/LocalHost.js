"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Couchbase_1 = require("./databases/Couchbase");
const MongoDB_1 = require("./databases/MongoDB");
class LocalHost {
    constructor(database) {
        this.serverUrl = "http://192.168.0.12:8080";
        this.port = 8080;
        this.ip = "192.168.0.12"; // "127.0.0.1";
        switch (database.toLowerCase()) {
            case "couchbase":
                this.dataBase = new Couchbase_1.default();
                break;
            default:
                this.dataBase = new MongoDB_1.default();
                break;
        }
    }
    getServerUrl() {
        return this.serverUrl;
    }
    getIp() {
        return this.ip;
    }
    getPort() {
        return this.port;
    }
    getDb() {
        return this.dataBase;
    }
}
exports.default = LocalHost;
