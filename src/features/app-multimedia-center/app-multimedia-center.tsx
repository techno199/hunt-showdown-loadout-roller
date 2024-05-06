import {MUSIC_PRESET_CONFIG, MusicPreset} from "@/features/app-multimedia-center/entities/music-preset";
import {getRandomInt} from "@/utils/get-random-int";

export class AppMultimediaCenter {
  static preset = MusicPreset.VOCAL;
  static currentLoopTracks = [];
  static currentAudio = null as HTMLAudioElement;

  static setMusicPreset = (preset: MusicPreset) => {
    AppMultimediaCenter.preset = preset;
    AppMultimediaCenter.startPresetLoop();
  }

  static startPresetLoop = () => {
    const musicConfig = MUSIC_PRESET_CONFIG.find(c => c.preset === AppMultimediaCenter.preset);
    AppMultimediaCenter.currentLoopTracks = [...musicConfig.soundtrackSrc];

    const playLoopRecursive = () => {
      if (!AppMultimediaCenter.currentAudio) {
        if (AppMultimediaCenter.currentLoopTracks.length > 0) {
          const nextLoopTrackIndex = getRandomInt(0, AppMultimediaCenter.currentLoopTracks.length);
          const nextTrackSrc = AppMultimediaCenter.currentLoopTracks[nextLoopTrackIndex];
          AppMultimediaCenter.currentLoopTracks = AppMultimediaCenter.currentLoopTracks.filter(t => t !== nextTrackSrc);
          const track = new Audio(nextTrackSrc);
          AppMultimediaCenter.currentAudio = track;
          track.volume = 0.1;
          track.play();
          track.onended = () => {
            playLoopRecursive();
          }
        }

        if (AppMultimediaCenter.currentLoopTracks.length === 0) {
          AppMultimediaCenter.currentAudio = null!;
          AppMultimediaCenter.startPresetLoop();
        }
      }
    }

    playLoopRecursive();
  }
}