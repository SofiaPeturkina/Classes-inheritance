import Daemon from '../Daemon';

test("should create new character Daemon", () => {
    const hero = new Daemon("Демон", "Daemon");
    const trueHero = {
        name: "Демон",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(hero).toEqual(trueHero);
});