describe('matchers expanded using words', () => {
    test('there is pool in liverpool', () => {
        expect('Liverpool').toMatch(/pool/)
    })

    test('there is pool in liverpool', () => {
        expect('Liverpool').not.toMatch(/pol/)
    })

    const typicalCuisine = [
        "Tacacá",
        "Tambaqui assado",
        "Matrinxã na brasa",
        "X-caboquinho",
        "Pato no tucupi",
        "Moqueca de pirarucu",
        "Caldeirada de tambaqui"
    ];

    test('typical amazonense cuisine includes tacacá and tambaqui', () => {
        expect(typicalCuisine).toContain('Tacacá', /tambaqui/);
    })
})