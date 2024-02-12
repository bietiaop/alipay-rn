
# react-native-alipay-rn

## Getting started

`$ npm install react-native-alipay-rn --save`

### Mostly automatic installation

`$ react-native link react-native-alipay-rn`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-alipay-rn` and add `RNAlipayRn.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAlipayRn.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNAlipayRnPackage;` to the imports at the top of the file
  - Add `new RNAlipayRnPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-alipay-rn'
  	project(':react-native-alipay-rn').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-alipay-rn/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-alipay-rn')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNAlipayRn.sln` in `node_modules/react-native-alipay-rn/windows/RNAlipayRn.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Alipay.Rn.RNAlipayRn;` to the usings at the top of the file
  - Add `new RNAlipayRnPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNAlipayRn from 'react-native-alipay-rn';

// TODO: What to do with the module?
RNAlipayRn;
```
  