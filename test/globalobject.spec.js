describe('global object correctness', function() {
    const asl = AsyncScriptLoader

    it('global object presence', function() {
        expect(typeof asl).not.toBe('undefined')
    })
    
    it('loadScript member function presence', function() {
        expect(typeof asl.loadScript).toBe('function')
    })
})
