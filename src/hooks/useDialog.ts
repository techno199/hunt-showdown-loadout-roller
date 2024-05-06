import {useState} from "react";

export type UseDialogArgs = {
  defaultOpen?: boolean;
}

export const useDialog = (args?: UseDialogArgs) => {
  const [state, setState] = useState({
    open: args?.defaultOpen || false
  });

  const toggle = (open = !state.open) => {
    setState({...state, open})
  }

  const handleClose = () => {
    setState({...state, open: false});
  }

  return {
    toggle,
    props: {
      open: state.open,
      handleClose
    }
  }
}