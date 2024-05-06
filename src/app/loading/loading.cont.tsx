import HuntHeadphones from '/public/crytek-assets/hunt_headphones.png';
import CrytekLogo from '/public/crytek-assets/crytek_logo.png';
import CryengineLogo from '/public/crytek-assets/cryengine_logo.png';
import HuntLogo from '/public/crytek-assets/Logo/Hunt_Logo_Textured_White.png'

export const LOADING_PAGE_COPYRIGHT_PARAGRAPHS = [
  (
    <div>
      <p>© 2024 Crytek GmbH. All right reserved.</p>
      <p>Crytek, CRYENGINE, Hunt Showdown and the respective logos are trademarks or registered trademarks of the Crytek
        group in the EU, U.S. and/or other territories.</p>
      <p>All other trademarks are the property of their respective owners.</p>
    </div>
  ),
  (
    <div>
      <h3 className={'text-5xl mb-4'}>Photosensitive seizure warning</h3>
      <p>
        A very small percentage of people may experience a seizure when exposed to certain visual images, including flashing
        lights or patterns that may appear in video games. Even people who have no history of seizures or epilepsy may have
        an undiagnosed condition that can cause these "photosensitive epileptic seizures" while playing video games.
      </p>
      <p className={'font-bold mt-4'}>Immediately stop playing and consult a doctor if you experience any symptoms.</p>
    </div>
  ),
  (
    <div className={'flex flex-col items-center gap-4'}>
      <img src={HuntHeadphones.src} />
      <p>HUNT is best experienced in Stereo with Headphones for full 3D binaural Audio.</p>
    </div>
  ),
  (
    <div>
      <img src={CrytekLogo.src} />
    </div>
  ),
  (
    <div>
      <img src={CryengineLogo.src} />
    </div>
  ),
  (
    <div>
      <p>
        Hunt: Showdown © 2024 CRYTEK GMBH. Crytek, CRYENGINE, Hunt: Showdown and the respective logos are trademarks or registered trademarks of the Crytek
        group in the EU, U.S. and/or other territories. All other trademarks are the property of their respective owners.
        All rights reserved. This software product includes Autodesk ® Scaleform ® software, © 2011 Autodesk, Inc.
        All rights reserved. Uses CRI Movie. © 2008 CRI Middleware, Inc. All rights reserved.
      </p>
      <p className={'mt-4'}>
        Powered by Wwise © 2006-2018 Audiokinetic Inc. All rights reserved.
      </p>
    </div>
  ),
  (
    <div>
      <p>
        As creators, we are part of an ongoing dialogue with our players, and we strive to make the experience of Hunt immersive,
        entertaining, and inclusive  to anyone who wishes to join us.
      </p>
      <p className={'mt-4'}>
        Multi-player games bring people together, and we believe in creating a game community united by mutual respect.
      </p>
    </div>
  ),
  (
    <div className={'w-[650px]'}>
      <img src={HuntLogo.src} />
    </div>
  )
];

export const LOADING_PAGE_COPYRIGHT_PARAGRAPH_TRANSITION_THRESHOLDS = [4, 14, 18, 22, 26, 30, 33.5, 38];

export const LOADING_PAGE_BACKEND_CONNECTION_STAGES = [
  'Checking backend connection...',
  'Checking available missions...',
  'Checking Bloodline...',
  'Checking available regions...',
  'Checking currently running events...',
  'Checking player information...',
  'Checking backend matchmaking settings...',
  'Retrieving list of missions...',
  'Checking reconnect status...',
  'Login successful!',
  'Login successful!' // Нужно продублировать для корректной анимации выхода
]