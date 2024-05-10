import React, {ContextType, useContext, useEffect} from 'react';
import {IconButton} from "@mui/material";
import {VolumeOff, VolumeUp} from "@mui/icons-material";
import {AppOptionsContext} from "@/features/app-options/app-options.context";

export type AppBarProps = {}

const AppBar = (props: AppBarProps) => {
  const optionsCtx = useContext(AppOptionsContext);
  const {options, setOptions} = optionsCtx;

  const handleToggleMute = () => {
    setOptions(p => ({...p, muted: !p.muted}));
  }

  useEffect(() => {
    const listener = (e: DocumentEventMap['keyup']) => {
      if (e.code === 'KeyP') {
        handleToggleMute();
      }
    }

    document.addEventListener('keyup', listener);

    return () => {
      document.removeEventListener('keyup', listener);
    }
  }, [])

  return (
    <div className={'absolute top-0 left-0 flex justify-between p-4 pr-10 w-full text-sm text-col-2'}>
      {/* App version */}
      <div className={'opacity-50'}>{process.env.NEXT_PUBLIC_APP_VERSION}</div>

      {/* Quick controls */}
      <div>
        <div className={'flex items-center gap-1'}>
          <IconButton className={'text-col-2'} onClick={handleToggleMute}>
            {options.muted && (
              <VolumeUp />
            )}

            {!options.muted && (
              <VolumeOff />
            )}
          </IconButton>
          <span>[P]</span>
        </div>
      </div>
    </div>
  );
};

export default AppBar;