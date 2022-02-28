import Swordsman from '../Swordsman';

test("should create new character Swordsman", () => {
    const hero = new Swordsman("Мечник", "Swordsman");
    const trueHero = {
        name: "Мечник",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(hero).toEqual(trueHero);
});