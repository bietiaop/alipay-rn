"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const react_native_1 = require("react-native");
const { RNAlipay } = react_native_1.NativeModules;
const payFunc = {
    setAlipaySandbox(isSandbox) {
        RNAlipay.setAlipaySandbox(isSandbox);
    },
    alipay(orderInfo) {
        return new Promise((resolve, reject) => {
            RNAlipay.alipay(orderInfo, (res) => {
                const { resultStatus } = res;
                if (resultStatus === '9000') {
                    // 支付成功处理
                    resolve(res);
                }
                else {
                    // 支付失败处理
                    reject(res);
                }
            });
        });
    },
};
exports.default = payFunc;
