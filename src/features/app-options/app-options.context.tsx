import {createContext, useState, ContextType, useEffect} from "react";
import {AppMultimediaCenter} from "@/features/app-multimedia-center/app-multimedia-center";
import {any} from "prop-types";

export const AppOptionsContext = createContext(null as any);

export const AppOptionsProvider = ({children}) => {
  const [state, setState] = useState({
    initialized: false,
  });
  const [options, setOptions] = useState({
    muted: false
  });

  // Initialize all options from cache
  useEffect(() => {
    const cachedState = {};
    for (let optionKey in Object.keys(options)) {
      const cachedValue = localStorage.getItem(`options.${optionKey}`);

      if (cachedValue) {
        cachedState[optionKey] = cachedValue;
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


  useEffect(() => {
    AppMultimediaCenter.toggleMuted(options.muted);
  }, [options.muted, state.initialized]);


  return (
    <AppOptionsContext.Provider value={{
      options: options,
      setOptions,
    }}>
      {children}
    </AppOptionsContext.Provider>
  )
}
