import Zombie from '../Zombie';

test("should create new character Zombie", () => {
    const hero = new Zombie("Зомби", "Zombie");
    const trueHero = {
        name: "Зомби",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(hero).toEqual(trueHero);
});