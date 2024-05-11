import {MUSIC_PRESET_CONFIG, MusicPresetId} from "@/features/app-multimedia-center/entities/music-preset-id";
import {getRandomInt} from "@/utils/get-random-int";
import App from "next/app";

const DEFAULT_LOOP_VOLUME = 0.05;

export class AppMultimediaCenter {
  static preset = MusicPresetId.MIXED;
  static currentLoopTracks = [] as string[];
  static currentLoopTrack = null as unknown as HTMLAudioElement;
  static currentStreamSfx = null as unknown as HTMLAudioElement;
  static loopVolume = DEFAULT_LOOP_VOLUME;
  static soundMuted = false;

  static setMusicPreset = (preset: MusicPresetId) => {
    AppMultimediaCenter.stopCurrentLoop();
    AppMultimediaCenter.preset = preset;
    AppMultimediaCenter.startPresetLoop();
  }

  static startPresetLoop = () => {
    const musicConfig = MUSIC_PRESET_CONFIG.find(c => c.id === AppMultimediaCenter.preset);
    if (!musicConfig) debugger;
    AppMultimediaCenter.currentLoopTracks = [...musicConfig!.soundtrackSrc];

    const playLoopRecursive = () => {
      if (!AppMultimediaCenter.currentLoopTrack) {
        if (AppMultimediaCenter.currentLoopTracks.length > 0) {
          const nextLoopTrackIndex = getRandomInt(0, AppMultimediaCenter.currentLoopTracks.length -1);
          const nextTrackSrc = AppMultimediaCenter.currentLoopTracks[nextLoopTrackIndex];
          AppMultimediaCenter.currentLoopTracks = AppMultimediaCenter.currentLoopTracks.filter(t => t !== nextTrackSrc);
          const track = new Audio(nextTrackSrc);
          AppMultimediaCenter.currentLoopTrack = track;

          if (AppMultimediaCenter.soundMuted) {
            track.volume = AppMultimediaCenter.loopVolume;
          } else {
            track.volume = DEFAULT_LOOP_VOLUME;
          }

          track.play();
          track.onended = () => {
            if (AppMultimediaCenter.currentLoopTracks.length === 0) {
              AppMultimediaCenter.currentLoopTrack = null!;
              AppMultimediaCenter.startPresetLoop();
            } else {
              playLoopRecursive();
            }
          }
        }
      }
    }

    playLoopRecursive();
  }

  static stopCurrentLoop = () => {
    if (AppMultimediaCenter.currentLoopTrack) {
      AppMultimediaCenter.currentLoopTrack.pause();
      AppMultimediaCenter.currentLoopTrack = null!;
    }
  }

  static playStreamSfx = (sfx: HTMLAudioElement) => {
    AppMultimediaCenter.currentStreamSfx?.pause();
    AppMultimediaCenter.currentStreamSfx = sfx;

    if (AppMultimediaCenter.soundMuted) {
      sfx.volume = 0;
    }
    sfx.play();
  }

  static toggleMuted = (muted: boolean = !AppMultimediaCenter.soundMuted) => {
    AppMultimediaCenter.soundMuted = muted;

    if (muted) {
      if (AppMultimediaCenter.currentStreamSfx) {
        AppMultimediaCenter.currentStreamSfx.volume = 0;
      }
      if (AppMultimediaCenter.currentLoopTrack) {
        AppMultimediaCenter.currentLoopTrack.volume = 0;
      }
    } else {
      if (AppMultimediaCenter.currentStreamSfx) {
        AppMultimediaCenter.currentStreamSfx.volume = 1;
      }
      if (AppMultimediaCenter.currentLoopTrack) {
        AppMultimediaCenter.currentLoopTrack.volume = DEFAULT_LOOP_VOLUME;
      }
    }
  }
}