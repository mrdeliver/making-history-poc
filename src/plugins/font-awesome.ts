import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas, faTimes, faSearch, faLocationArrow, faCircle,
  faLightbulb, faFile, faPen, faMusic, faBook, faBackspace, faBackward, faHome, faCogs, faUndo,
} from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon from '@/libs/FontAwesomeIcon.vue';

library.add(fas, faTimes, faSearch, faLocationArrow, faCircle,
  faLightbulb, faFile, faPen, faMusic, faBook, faBackspace,
  faBackward, faHome, faCogs, faUndo);

export default FontAwesomeIcon;
