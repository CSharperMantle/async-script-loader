describe('loadScript functionality', function() {
    // Defs
    const bodyElem = document.getElementsByTagName('body')[0]

    const scriptsDivElem = document.createElement('div')
    bodyElem.insertAdjacentElement('beforeend', scriptsDivElem)

    // Helpers

    function truncateScriptsDiv() {
        while (scriptsDivElem.firstChild) {
            scriptsDivElem.removeChild(scriptsDivElem.firstChild)
        }
    }

    it('single loadScript', function() {
        AsyncScriptLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js', scriptsDivElem, () => (typeof $ !== 'undefined'),
          false, null, null)
        .then(() => {
            expect(typeof $).toBe('function')
        })
        .catch((reason) => {
            fail(reason)
        })
        .finally(() => {
            truncateScriptsDiv()
        })
    })

    it('chaining loadScript', function() {
        AsyncScriptLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js', scriptsDivElem, () => (typeof $ !== 'undefined'),
          true, 'sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==', 'anonymous')
        .then(() => {
            return AsyncScriptLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js', scriptsDivElem, () => (typeof gsap !== 'undefined'),
              false, null, null)
        })
        .then(() => {
            return AsyncScriptLoader.loadScript('https://cdn.jsdelivr.net/gh/CSharperMantle/CSharperMantle.github.io@HEAD/assets/js/CustomEase-3.5.1.min.js', scriptsDivElem, () => (typeof CustomEase !== 'undefined'),
              false, null, null)
        })
        .then(() => {
            return AsyncScriptLoader.loadScript('https://cdn.jsdelivr.net/gh/CSharperMantle/CSharperMantle.github.io@HEAD/assets/js/CustomWiggle-3.4.3.min.js', scriptsDivElem, () => (typeof CustomWiggle !== 'undefined'),
              false, null, null)
        })
        .then(() => {
            expect(typeof gsap).not.toBe('undefined')
            expect(typeof CustomEase).not.toBe('undefined')
            expect(typeof CustomWiggle).not.toBe('undefined')
        })
        .catch((reason) => {
            fail(reason)
        })
        .finally(() => {
            truncateScriptsDiv()
        })
    })

    it('rejected loadScript promise', function() {
        let isRejected = false
        AsyncScriptLoader.loadScript('https://non-existent.nope/no-such-thing.js', scriptsDivElem, () => true,
          false, null, null)
        .catch(() => {
            isRejected = true
        })
        .finally(() => {
            expect(isRejected).toBeTrue()
            truncateScriptsDiv()
        })
    })
})
