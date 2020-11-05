describe('loadScript functionality', function() {
    const bodyElem = document.getElementsByTagName('body')[0]

    const scriptsDivElem = document.createElement('div')
    bodyElem.insertAdjacentElement('beforeend', scriptsDivElem) 

    it('plain simple loadScript', function() {
        AsyncScriptLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js', scriptsDivElem, () => {
            return (typeof $ !== 'undefined')
        }, false, null, null)
        .then(() => {
            expect(typeof $).not.toBe('undefined')
        })
    })
})
