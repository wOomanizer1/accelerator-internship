import {iosVhFix} from './utils/ios-vh-fix';
import {initHeroSlider, initProgramsSlider, initReviewsSlider, initNewsSlider} from './modules/init-swiper';
import './vendor/accordion';
import { CustomSelect } from './modules/select/custom-select';
import './modules/burger-menu';
import { StickyHeader } from './modules/sticky-header';

window.addEventListener('DOMContentLoaded', () => {

  // Utils

  iosVhFix();

  // Modules

  initHeroSlider();
  initProgramsSlider();
  initNewsSlider();
  initReviewsSlider();


  window.addEventListener('load', () => {
    const select = new CustomSelect();
    select.init();
    const header = new StickyHeader();
    header.init();
  });
});

