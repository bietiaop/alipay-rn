import alipay from '../dist/index';
alipay.setAlipaySandbox(true);
alipay
  .alipay('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
