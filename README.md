# alipay-rn

> Only support **Android** now

## Getting started

### Install

`$ npm install alipay-rn --save`

### Mostly automatic installation (RN < 0.60)

`$ react-native link alipay-rn`

> If you are using Expo, make sure to develop locally and not in the Expo Go app. Expo Go may not support the Third-party Native Modules.

## Usage

### Set sandbox environment

```javascript
import Alipay from 'alipay-rn';

// Set sandbox environment (default is false)
Alipay.setSandbox(true);
```

### Pay

```javascript
import Alipay from 'alipay-rn';

// Pay
const pay = async()=>{
  try {
    const result = await Alipay.pay('the string that you get from the server');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Or Promise
Alipay.pay('the string that you get from the server').then(result=>{
  console.log(result);
}).catch(error=>{
  console.error(error);
});
```

The `result` and `error` are the same format as the official document.

```typescript
// Source Code
export interface AliPayResponseInterface {
  memo: string;
  result: string;
  resultStatus: string;
}
```

Explanation of the resultStatus:

`memo`: The result message (natural language).

`result`: It is a json string, you can use `JSON.parse` to parse it.

`resultStatus`: The code of the result, it is a string, you can use `parseInt` to parse it. You can refer to the official document for the meaning of the status code. `9000` means success. You can also use the following code to get the natural language of the status code (from the Internet).

```javascript
// Source Code
export const alipayErrorReason = {
  '6001': '支付取消',
  '6002': '网络连接出错',
  '4000': '支付失败',
  '5000': '重复请求',
};

// You can import it and use it like this
import { alipayErrorReason } from 'alipay-rn';
const pay = async()=>{
  try {
    const result = await Alipay.pay('the string that you get from the server');
    console.log(result);
  } catch (error) {
    // You can use the following code to get the natural language of the status code
    console.error(alipayErrorReason[error.resultStatus]);
    // Recommend
    // const errorMessage = error?.memo || alipayErrorReason[error.resultStatus] || 'Unknown error'
    // console.error(errorMessage);
  }
}
```