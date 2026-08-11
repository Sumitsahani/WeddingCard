import {Composition} from 'remotion';
import {HavanFlame} from './HavanFlame';

export const RemotionRoot=()=> <Composition id="HavanFlame" component={HavanFlame} durationInFrames={120} fps={30} width={640} height={640}/>;
