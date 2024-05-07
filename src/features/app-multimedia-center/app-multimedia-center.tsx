import {MUSIC_PRESET_CONFIG, MusicPreset} from "@/features/app-multimedia-center/entities/music-preset";
import {getRandomInt} from "@/utils/get-random-int";
import App from "next/app";

export class AppMultimediaCenter {
  static preset = MusicPreset.VOCAL;
  static currentLoopTracks = [] as string[];
  static currentLoopTrack = null as unknown as HTMLAudioElement;
  static currentStreamSfx = null as unknown as HTMLAudioElement;

  static setMusicPreset = (preset: MusicPreset) => {
    AppMultimediaCenter.preset = preset;
    AppMultimediaCenter.startPresetLoop();
  }

  static startPresetLoop = () => {
    const musicConfig = MUSIC_PRESET_CONFIG.find(c => c.preset === AppMultimediaCenter.preset);
    AppMultimediaCenter.currentLoopTracks = [...musicConfig!.soundtrackSrc];

    const playLoopRecursive = () => {
      if (!AppMultimediaCenter.currentLoopTrack) {
        if (AppMultimediaCenter.currentLoopTracks.length > 0) {
          const nextLoopTrackIndex = getRandomInt(0, AppMultimediaCenter.currentLoopTracks.length -1);
          const nextTrackSrc = AppMultimediaCenter.currentLoopTracks[nextLoopTrackIndex];
          AppMultimediaCenter.currentLoopTracks = AppMultimediaCenter.currentLoopTracks.filter(t => t !== nextTrackSrc);
          const track = new Audio(nextTrackSrc);
          AppMultimediaCenter.currentLoopTrack = track;
          track.volume = 0.05;
          track.play();
          track.onended = () => {
            playLoopRecursive();
          }
        }

        if (AppMultimediaCenter.currentLoopTracks.length === 0) {
          AppMultimediaCenter.currentLoopTrack = null!;
          AppMultimediaCenter.startPresetLoop();
        }
      }
    }

    playLoopRecursive();
  }

  static stopCurrentLoop = () => {
    AppMultimediaCenter.currentLoopTrack?.pause();
    AppMultimediaCenter.currentLoopTrack = null!;
  }

  static playStreamSfx = (sfx: HTMLAudioElement) => {
    AppMultimediaCenter.currentStreamSfx?.pause();
    AppMultimediaCenter.currentStreamSfx = sfx;
    sfx.play();
  }
}