(function() {
    const AsyncScriptLoader = {
        loadScript: function(url, baseElem, resolveWhen, isWithIntegrity, integrity, crossorigin) {
            return new Promise(function(resolve, reject) {
                const scriptElem = document.createElement('script')
                scriptElem.setAttribute('src', url)
                if (isWithIntegrity) {
                    scriptElem.setAttribute('integrity', integrity)
                    scriptElem.setAttribute('crossorigin', crossorigin)
                }
                scriptElem.addEventListener('load', function() {
                    while (!resolveWhen());
                    resolve()
                })
                scriptElem.addEventListener('error', function() {
                    reject(new Error(`AsyncScriptLoader: ${url} fails to load`))
                })
                baseElem.insertAdjacentElement('afterbegin', scriptElem)
            })
        }
    }
    window.AsyncScriptLoader = AsyncScriptLoader
})()
