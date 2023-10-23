export function generateNumericValues() {
    const values = [];
    for (let i = 10; i <= 100; i += 10) {
        values.push({
            id: i,
            name: i.toString()
        });
    }
    return values;
}

export function generateMultivaluedValues() {
    const values = [

        // Cachorros
        { id: 1, name: "Labrador Retriever" },
        { id: 2, name: "Golden Retriever" },
        { id: 3, name: "Bulldog" },
        { id: 4, name: "Beagle" },
        { id: 5, name: "Poodle" },
        { id: 6, name: "Chihuahua" },
        { id: 7, name: "Dachshund" },
        { id: 8, name: "Doberman" },
        { id: 9, name: "Boxer" },
        { id: 10, name: "São Bernardo" },
        { id: 11, name: "Pug" },
        { id: 12, name: "Rottweiler" },
        { id: 13, name: "Husky Siberiano" },
        { id: 14, name: "Shih Tzu" },
        { id: 15, name: "Bichon Frisé" },
        { id: 16, name: "Cocker Spaniel" },
        { id: 17, name: "Pomeranian" },
        { id: 18, name: "Maltês" },
        { id: 19, name: "Pinscher" },
        { id: 20, name: "Setter Irlandês" },
        { id: 21, name: "Rhodesian Ridgeback" },
        { id: 22, name: "Basset Hound" },
        { id: 23, name: "Collie" },
        { id: 24, name: "Weimaraner" },
        { id: 25, name: "Akita" },
        { id: 26, name: "Staffordshire Bull Terrier" },
        { id: 27, name: "Dogue Alemão" },
        { id: 28, name: "Mastiff" },
        { id: 29, name: "Dog Papillon" },
        { id: 30, name: "Greyhound" },

        // Gatos
        { id: 34, name: "Siamês" },
        { id: 35, name: "Persa" },
        { id: 36, name: "Maine Coon" },
        { id: 37, name: "Bengal" },
        { id: 38, name: "Sphynx" },

        // Pássaros
        { id: 39, name: "Canário" },
        { id: 40, name: "Calopsita" },
        { id: 41, name: "Periquito" },
        { id: 42, name: "Papagaio" },
        { id: 43, name: "Cacatua" },

        // Répteis
        { id: 44, name: "Iguana" },
        { id: 45, name: "Tartaruga" },
        { id: 46, name: "Cobra" },
        { id: 47, name: "Lagarto" },
        { id: 48, name: "Gecko" },

        // Roedores
        { id: 49, name: "Hamster" },
        { id: 50, name: "Rato" },
        { id: 51, name: "Porquinho-da-índia" },
        { id: 52, name: "Esquilo" },
        { id: 53, name: "Coelho" },

        // Mais alguns exemplos
        { id: 54, name: "Chow Chow" },
        { id: 55, name: "Pug" },
        { id: 56, name: "Arara" },
        { id: 57, name: "Tartaruga Terrestre" },
        { id: 58, name: "Serpente do Milho" },

    ];

    return values.map(value => value.name);
}

export function generateUnivaluedValue(valueName: string, id: number) {
    return [{ id: id, name: valueName }];
}