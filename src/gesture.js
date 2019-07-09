import SpriteTouchListener from './gesture/SpriteTouchListener';
import DualRecogonizer from './gesture/DualRecogonizer';
import FlickRecogonizer from './gesture/FlickRecogonizer';
import PanRecogonizer from './gesture/PanRecogonizer';
import PressRecogonizer from './gesture/PressRecogonizer';
import TapRecogonizer from './gesture/TapRecogonizer';

export default function install({use, utils, registerNodeType, BaseSprite}) {
  const Gesture = {
    subscribe(target) {
      if(target.__gestureHandlers) return false;
      new SpriteTouchListener(target, [
        new DualRecogonizer((event) => {
          target.dispatchEvent(event.type, event, true, true);
        }),
        new FlickRecogonizer((event) => {
          target.dispatchEvent(event.type, event, true, true);
        }),
        new PanRecogonizer((event) => {
          target.dispatchEvent(event.type, event, true, true);
        }),
        new PressRecogonizer((event) => {
          target.dispatchEvent(event.type, event, true, true);
        }),
        new TapRecogonizer((event) => {
          target.dispatchEvent(event.type, event, true, true);
        }),
      ]);
      return true;
    },
    unsubscribe(target) {
      if(target.__gestureHandlers) {
        const {start, move, end, cancel} = target.__gestureHandlers;
        target.off('touchstart', start);
        target.off('touchmove', move);
        target.off('touchend', end);
        target.off('touchcancel', cancel);
        return true;
      }
      return false;
    },
  };
  return {Gesture};
}