import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas, faTimes, faSearch, faLocationArrow, faCircle,
} from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon from '@/libs/FontAwesomeIcon.vue';

library.add(fas, faTimes, faSearch, faLocationArrow, faCircle);

export default FontAwesomeIcon;
