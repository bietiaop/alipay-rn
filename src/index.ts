// @ts-ignore
import { NativeModules } from 'react-native';

export interface AliPayResponseInterface {
  memo: string;
  result: string;
  resultStatus: string;
}

export interface RNAlipayInterface {
  setAlipaySandbox(isSandbox: boolean): void;
  alipay(orderInfo: string): Promise<AliPayResponseInterface>;
}

const { RNAlipay } = NativeModules;
const payFunc: RNAlipayInterface = {
  setAlipaySandbox(isSandbox: boolean) {
    RNAlipay.setAlipaySandbox(isSandbox);
  },
  alipay(orderInfo: string): Promise<AliPayResponseInterface> {
    return new Promise((resolve, reject) => {
      RNAlipay.alipay(orderInfo, (res: AliPayResponseInterface) => {
        const { resultStatus } = res;
        if (resultStatus === '9000') {
          // 支付成功处理
          resolve(res);
        } else {
          // 支付失败处理
          reject(res);
        }
      });
    });
  },
};
export default payFunc;
