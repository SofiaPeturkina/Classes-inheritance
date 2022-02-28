import Bowman from '../Bowman';

test("should create new character Bowman", () => {
    const hero = new Bowman("Лучник", "Bowman");
    const trueHero = {
        name: "Лучник",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(hero).toEqual(trueHero);
});