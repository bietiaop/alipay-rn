export interface AliPayResponseInterface {
    memo: string;
    result: string;
    resultStatus: string;
}
export interface RNAlipayInterface {
    setSandbox(isSandbox: boolean): void;
    pay(orderInfo: string): Promise<AliPayResponseInterface>;
}
export declare const alipayErrorReason: {
    '6001': string;
    '6002': string;
    '4000': string;
    '5000': string;
};
declare const AliPay: RNAlipayInterface;
export default AliPay;
