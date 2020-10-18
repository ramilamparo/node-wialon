"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const RemoteAPI_1 = require("../RemoteAPI");
class Report extends RemoteAPI_1.RemoteAPI {
    constructor() {
        super(...arguments);
        this.cleanupResult = () => __awaiter(this, void 0, void 0, function* () {
            return RemoteAPI_1.RemoteAPI.execute("report/cleanup_result");
        });
        this.execReport = (params) => __awaiter(this, void 0, void 0, function* () {
            return RemoteAPI_1.RemoteAPI.execute("report/exec_report", params, this.sessionId, this.host);
        });
        this.selectResultRows = (params) => __awaiter(this, void 0, void 0, function* () {
            return RemoteAPI_1.RemoteAPI.execute("report/select_result_rows", params, this.sessionId, this.host);
        });
    }
}
exports.Report = Report;
