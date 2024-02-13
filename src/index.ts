// @ts-ignore
import { NativeModules } from 'react-native';

export interface AliPayResponseInterface {
  memo: string;
  result: string;
  resultStatus: string;
}

export interface RNAlipayInterface {
  setSandbox(isSandbox: boolean): void;
  pay(orderInfo: string): Promise<AliPayResponseInterface>;
}

const { RNAlipay } = NativeModules;

if (!RNAlipay) {
  throw new Error(
    '[alipay-rn] 支付宝模块不兼容，初始化失败。请确保你不是在 Expo Go 中运行并且 Native 构建成功。'
  );
}

export const alipayErrorReason = {
  '6001': '支付取消',
  '6002': '网络连接出错',
  '4000': '支付失败',
  '5000': '重复请求',
};

const AliPay: RNAlipayInterface = {
  setSandbox(isSandbox: boolean) {
    RNAlipay.setAlipaySandbox(isSandbox);
  },
  pay(orderInfo: string): Promise<AliPayResponseInterface> {
    return new Promise((resolve, reject) => {
      RNAlipay.alipay(orderInfo, (res: AliPayResponseInterface) => {
        const { resultStatus } = res;
        if (resultStatus === '9000') {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  },
};

export default AliPay;
