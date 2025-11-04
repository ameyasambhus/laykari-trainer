export interface Taal {
  name: string;
  matras: number;
  theka: string[];
  beat: string[];
  khand: number;
  sam: number;
  khali: number[]; // Array to support multiple khali positions
  taali?: number[]; // Optional array of taali positions
}

export const taals: Record<string, Taal> = {
  dadra: {
    name: "Dadra",
    matras: 6,
    theka: ["धा", "धी", "ना", "धा", "ती", "ना"],
    beat:["1","2","3","4","5","6"],
    khand:6,
    sam: 1,
    khali: [4],
    taali: [], 
  },
  roopak: {
    name: "Roopak",
    matras: 7,
    theka: ["ती", "ती", "ना", "धी", "ना","धी", "ना"],
    beat:["1","2","3","4","5","6", "7"],
    khand:7,
    sam: 0,
    khali: [1],
    taali: [4, 6], 
  },
  keherwa: {
    name: "Keherwa",
    matras: 8,
    theka: ["धा", "गे", "न", "ती", "न", "क", "धी", "न"],
    beat:["1","2","3","4","5","6", "7", "8"],
    khand:4,
    sam: 1,
    khali: [5],
    taali: [],
  },
  jhaptaal: {
    name: "Jhaptaal",
    matras: 10,
    theka: ["धी", "ना","धी", "धी", "ना", "ती", "ना", "धी","धी", "ना"],
    beat:["1","2","3","4","5","6", "7", "8", "9", "10"],
    khand:5,
    sam: 1,
    khali: [6],
    taali: [3, 8],
  },
  ektaal: {
    name: "Ektaal",
    matras: 12,
    theka: ["धिं", "धिं","धागे", "तिरकिट", "तूं","ना", "क", "ता", "धागे", "तिरकिट","धिं", "ना"],
    beat:["1","2","3","4","5","6", "7", "8", "9", "10", "11", "12"],
    khand:6,
    sam: 1,
    khali: [3, 7], 
    taali: [5, 9, 11],
  },
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
      "1", "2", "3", "4",
      "5", "6", "7", "8",
      "9", "10", "11", "12",
      "13", "14", "15", "16",
    ],
    khand: 4,
    sam: 1,
    khali: [9],
    taali: [5, 13],
  },
};

export const layOptions = [
  { value: 'barabar', label: '(1x)', multiplier: 1 },
  { value: 'dedhgun', label: 'Dedhgun (1.5x)', multiplier: 1.5},
  { value: 'dugun', label: 'Dugun (2x)', multiplier: 2 },
  { value: 'tigun', label: 'Tigun (3x)', multiplier: 3 },
  { value: 'chaugun', label: 'Chaugun (4x)', multiplier: 4 }
  
];
