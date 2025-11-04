export const taals = {
  teentaal: {
    name: "Teentaal",
    matras: 16,
    theka: [
      "धा", "धिं", "धिं", "धा",
      "धा", "धिं", "धिं", "धा",
      "धा", "तिं", "तिं", "ता",
      "ता", "धिं", "धिं", "धा",
    ],
    beat: [
      "X", "2", "3", "4",
      "5", "6", "7", "8",
      "O", "10", "11", "12",
      "13", "14", "15", "16",
    ],
    khand: 4,
    sam: 1,
    khali: 9,
  },
  dadra: {
    name: "Dadra",
    matras: 6,
    theka: ["धा", "धी", "ना", "धा", "ती", "ना"],
    beat:["X","2","3","O","5","6"],
    khand:6,
    sam: 1,
    khali: 4,
  },
};

export const layOptions = [
  { value: 'barabar', label: 'Barabar (1x)', multiplier: 1 },
  { value: 'dedhgun', label: 'Dedhgun (1.5x)', multiplier: 1.5},
  { value: 'dugun', label: 'Dugun (2x)', multiplier: 2 },
  { value: 'tigun', label: 'Tigun (3x)', multiplier: 3 },
  { value: 'chaugun', label: 'Chaugun (4x)', multiplier: 4 }
  
];
