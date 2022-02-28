import Magician from '../Magician';

test("should create new character Magician", () => {
    const hero = new Magician("Маг", "Magician");
    const trueHero = {
        name: "Маг",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(hero).toEqual(trueHero);
});