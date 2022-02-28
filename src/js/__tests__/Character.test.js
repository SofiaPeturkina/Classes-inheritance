import Character from '../Character';

test("name shouldn't contain less than 2 symbols", () => {
    expect(() => new Character("G", "Magician")).toThrow(new Error("Ошибка! Имя персонажа должно быть от 2 до 10 символов!"));
});

test("name shouldn't contain more than 10 symbols", () => {
    expect(() => new Character("Peterhnfinfidsfcv", "Magician")).toThrow(new Error("Ошибка! Имя персонажа должно быть от 2 до 10 символов!"));
});

test("invalid type", () => {
    expect(() => new Character("Evgenia", "Magic")).toThrow(new Error("Ошибка! Неверный тип персонажа!"));
});