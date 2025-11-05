# Laykari Trainer 🎵

A web-based practice tool for learning and mastering Indian Classical Music rhythm (Taals) laykari with visual and audio metronome support.

🌐 **[Try it live here!](https://laykari-trainer.netlify.app/)**

## 💡 Motivation

Every music student learning Indian Classical Music faces the challenge of perfecting laykari of a taal. The struggle in simultaneously keeping a steady beat at one laya while reciting the bols of the taal in another, all while accurately marking the key beats such as the taali and khaali is real and this task can feel overwhelming without continuous guidance.

As a music learner, I wanted to create a tool that would help students:
- **Practice anywhere, anytime** without needing a tabla or teacher present
- **Visualize the rhythm** to better understand taal structures
- **Train muscle memory** with synchronized audio and visual cues
- **Build confidence** by gradually increasing speed with layakari variations

This app is born out of the desire to make taal practice more accessible, systematic, and effective for every aspiring musician.

## 🎯 Features

### Supported Taals
- **Dadra** (6 matras)
- **Roopak** (7 matras)
- **Keherwa** (8 matras)
- **Jhaptaal** (10 matras)
- **Ektaal** (12 matras)
- **Chautaal** (12 matras)
- **Deepchandi** (14 matras)
- **Jhoomra** (14 matras)
- **Ada Chautaal** (14 matras)
- **Dhamaar** (14 matras)
- **Teentaal** (16 matras)
- **Tilwada** (16 matras)

### Layakari (Speed Multipliers)
- (1x) - Normal speed
- **Dedhgun** (1.5x) - One and a half times
- **Dugun** (2x) - Double speed
- **Tigun** (3x) - Triple speed
- **Chaugun** (4x) - Quadruple speed

### Additional Features
- **LocalStorage**: Saves your last used settings (taal, lay, BPM)
- **Responsive Design**: Works seamlessly on mobile and desktop

## 🎮 How to Use

1. **Select a Taal**: Choose from 12 different taals including Teentaal, Dadra, Roopak, Keherwa, Jhaptaal, Ektaal, Chautaal, Deepchandi, Jhoomra, Ada Chautaal, Dhamaar, and Tilwada
2. **Select Lay**: Choose the lay (speed multiplier) (Dedhgun, Dugun, Tigun, or Chaugun)
3. **Set BPM**: Enter a tempo between 30-200 beats per minute
4. **Start Practice**: Click the "Start" button to begin. Bol section shows you speed with which you have to say bols of any taal through speech. Beats section shows you speed with which you have to tap beats on your palm.

### Visual Indicators
- 🔵 **Blue Ring**: Sam (first beat)
- 🟢 **Green Ring**: Taali (clap)
- 🔴 **Red Ring**: Khali (wave)
- 🟡 **Yellow Highlight**: Current active beat/bol

## 🛠️ Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Web Audio API** - Metronome sound generation

## 👤 Author

Built with ❤️ by [Ameya Sambhus](https://www.linkedin.com/in/ameya-sambhus-b504912bb/)

---

**Happy Practicing! 🎶**
