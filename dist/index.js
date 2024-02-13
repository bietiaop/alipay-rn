"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alipayErrorReason = void 0;
// @ts-ignore
const react_native_1 = require("react-native");
const { RNAlipay } = react_native_1.NativeModules;
if (!RNAlipay) {
    throw new Error('[alipay-rn] 支付宝模块不兼容，初始化失败。请确保你不是在 Expo Go 中运行并且 Native 构建成功。');
}
exports.alipayErrorReason = {
    '6001': '支付取消',
    '6002': '网络连接出错',
    '4000': '支付失败',
    '5000': '重复请求',
};
const AliPay = {
    setSandbox(isSandbox) {
        RNAlipay.setAlipaySandbox(isSandbox);
    },
    pay(orderInfo) {
        return new Promise((resolve, reject) => {
            RNAlipay.alipay(orderInfo, (res) => {
                const { resultStatus } = res;
                if (resultStatus === '9000') {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            });
        });
    },
};
exports.default = AliPay;
