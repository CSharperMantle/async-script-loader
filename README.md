# async-script-loader

[![Build Status](https://travis-ci.com/CSharperMantle/async-script-loader.svg?branch=main)](https://travis-ci.com/CSharperMantle/async-script-loader)

Asynchronous loader for script tags when dynamic loading is required

## Usage
### Installation
This is a single-file library so simply insert it into your HTML file will be just enough.

```html
<script src="https://cdn.jsdelivr.net/gh/CSharperMantle/async-script-loader@main/src/index.min.js"></script>
```

### API
```js
window.AsyncScriptLoader = {
    loadScript: function(url, baseElem, resolveWhen, isWithIntegrity, integrity, crossorigin) { return new Promise(...); }
}
```
* `url` - A `string` of the URL of the script to load
* `baseElem` - An `Element` object to insert the script as its child, after its starting tag
* `resolveWhen` - A `function` to indicate a script is fully executed
* `isWithIntegrity` - A `boolean` to indicate whether `integrity` and `crossorigin` should be inserted
* `integrity` - A `string` which stores the `integrity` attribute value of the script element, the same as the one defined in HTML5 Spec
* `crossorigin` - A `string` which stores the `crossorigin` attribute value of the script element
* **Returns:** A `Promise` which will be fulfilled when the script *finishes execution* and rejected when it *fails to load*

## Example

A live example may be found [here](http://www.nbxiaoshi.net/bjzy_index.asp?BigClassId=448), while its JS source code is available [here](https://github.com/CSharperMantle/CSharperMantle.github.io/blob/master/assets/js/xs-school-mainpage.js). The core part of the code is listed below.

```js
AsyncScriptLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js', body, () => { return (typeof $ !== 'undefined'); },
  true, 'sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==', 'anonymous')
.then(() => {
  return AsyncScriptLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js', body, () => { return (typeof gsap !== 'undefined'); },
    false, null, null)
})
.then(() => {
  return AsyncScriptLoader.loadScript('https://cdn.jsdelivr.net/gh/CSharperMantle/CSharperMantle.github.io@HEAD/assets/js/CustomEase-3.5.1.min.js', body, () => { return (typeof CustomEase !== 'undefined'); },
    false, null, null)
})
.then(() => {
  return AsyncScriptLoader.loadScript('https://cdn.jsdelivr.net/gh/CSharperMantle/CSharperMantle.github.io@HEAD/assets/js/CustomWiggle-3.4.3.min.js', body, () => { return (typeof CustomWiggle !== 'undefined'); },
    false, null, null);
})
.then(() => {
  loadDropper()
})
.catch((reason) => {
  console.log(reason)
})
```
