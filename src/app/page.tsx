'use client';
import Image from "next/image";
import bgSrc from '/public/crytek-assets/WebPageBackgrounds/WebPage-background-2.jpg';
import Button from "@/ui/Button/Button";
import EasyAcWidget from "@/widgets/easy-ac-widget/easy-ac-widget";
import {useState} from "react";
import {useDialog} from "@/hooks/useDialog";
import {useRouter} from "next/navigation";

export default function Home() {
  const easyAcState = useDialog();
  const router = useRouter();

  const [state, setState] = useState({
    appLaunched: false
  });

  const handleLaunch = () => {
    easyAcState.toggle();
    setState({...state, appLaunched: true});
  }

  const handleLoadSuccess = () => {
    easyAcState.toggle();
    setTimeout(() => {
      router.push('/loading');
    }, 666)
  }

  return (
    <main
      className="flex flex-col items-center justify-end grow p-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url("${bgSrc.src}")`
      }}
    >
      <Button disabled={state.appLaunched} variant={'stroke'} onClick={handleLaunch}>Launch</Button>

      {easyAcState.props.open && (
        <EasyAcWidget onLoadSuccess={handleLoadSuccess} />
      )}
    </main>
  );
}
