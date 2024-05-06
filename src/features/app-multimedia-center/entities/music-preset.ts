export enum MusicPreset {
  MIXED,
  VOCAL,
  INSTRUMENTAL
}

const instrumentalSrc = [
  '/crytek-assets/soundtrack/Bullets Lullaby Instrumental.mp3',
  '/crytek-assets/soundtrack/Devil in the Churchyard Vocal.mp3',
  '/crytek-assets/soundtrack/End Will Come Instrumental.mp3',
  '/crytek-assets/soundtrack/Rise up Dead Man Instrumental 1.mp3',
  '/crytek-assets/soundtrack/Rise up Dead Man Instrumental 2.mp3',
  '/crytek-assets/soundtrack/Sinners Blues Instrumental.mp3'
];

const vocalSrc = [
  '/crytek-assets/soundtrack/Bullets Lullaby Vocal.mp3',
  '/crytek-assets/soundtrack/Devil in the Churchyard Vocal.mp3',
  '/crytek-assets/soundtrack/End Will Come Vocal.mp3',
  '/crytek-assets/soundtrack/Rise up Dead Man Vocal 1.mp3',
  '/crytek-assets/soundtrack/Sinners Blues Vocal.mp3'
]

export const MUSIC_PRESET_CONFIG = [
  {
    preset: MusicPreset.INSTRUMENTAL,
    soundtrackSrc: instrumentalSrc
  },
  {
    preset: MusicPreset.VOCAL,
    soundtrackSrc: vocalSrc
  },
  {
    preset: MusicPreset.MIXED,
    soundtrackSrc: Array.from(new Set([...instrumentalSrc, ...vocalSrc]))
  }
]