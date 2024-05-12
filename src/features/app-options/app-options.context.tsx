import {createContext, useEffect, useState} from "react";
import {AppMultimediaCenter, DEFAULT_LOOP_VOLUME} from "@/features/app-multimedia-center/app-multimedia-center";
import {PRESETS_LIST} from "@/loadout-presets/presets-list.const";
import {MusicPresetId} from "@/features/app-multimedia-center/entities/music-preset-id";
import {APP_MUSIC_PRESET_OPTIONS} from "@/features/app-options/app-options.const";

export const AppOptionsContext = createContext(null as any);

export const AppOptionsProvider = ({children}) => {
  const [state, setState] = useState({
    initialized: false,
  });
  const [options, setOptions] = useState({
    muted: false,
    loadoutPreset: 1,
    musicPreset: MusicPresetId.MIXED,
    musicVolume: DEFAULT_LOOP_VOLUME
  });

  // Initialize all options from cache
  useEffect(() => {
    const cachedState = {};
    for (let optionKey in options) {
      const cachedValue = localStorage.getItem(`options.${optionKey}`);

      if (cachedValue) {
        const parsed = JSON.parse(cachedValue);

        switch (parsed) {
          case 'true':
            cachedState[optionKey] = true;
            break;
          case 'false':
            cachedState[optionKey] = false;
            break;
          default:
            cachedState[optionKey] = parsed;
        }
      }
    }

    setState({
      ...state,
      initialized: true,
    });
    setOptions({
      ...options,
      ...cachedState
    })
  }, []);

  // Rewrite localstorage values
  useEffect(() => {
    for (let optionKey in options) {
      localStorage.setItem(`options.${optionKey}`, JSON.stringify(options[optionKey]));
    }
  }, [options]);

  // Apply muted option
  useEffect(() => {
    AppMultimediaCenter.toggleMuted(options.muted);
  }, [options.muted]);

  useEffect(() => {
    AppMultimediaCenter.setMusicPreset(options.musicPreset);
  }, [options.musicPreset]);

  useEffect(() => {
    AppMultimediaCenter.setLoopVolume(options.musicVolume);
  }, [options.musicVolume])

  return (
    <AppOptionsContext.Provider value={{
      options: options,
      setOptions,
    }}>
      {children}
    </AppOptionsContext.Provider>
  )
}
