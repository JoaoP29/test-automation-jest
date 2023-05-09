describe('matchers expanded using words', () => {
    test('there is pool in liverpool', () => {
        expect('Liverpool').toMatch(/pool/)
    })

    test('there is pool in liverpool', () => {
        expect('Liverpool').not.toMatch(/pol/)
    })
})