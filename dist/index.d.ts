export interface AliPayResponseInterface {
    memo: string;
    result: string;
    resultStatus: string;
}
export interface RNAlipayInterface {
    setAlipaySandbox(isSandbox: boolean): void;
    alipay(orderInfo: string): Promise<AliPayResponseInterface>;
}
declare const payFunc: RNAlipayInterface;
export default payFunc;
