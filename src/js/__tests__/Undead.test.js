import Undead from '../Undead';

test("should create new character Undead", () => {
    const hero = new Undead("Вампир", "Undead");
    const trueHero = {
        name: "Вампир",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(hero).toEqual(trueHero);
});