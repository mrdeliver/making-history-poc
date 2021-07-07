import { PageType } from '@/store/data/data-types';

export default interface SliderLink {
    primaryLink: {
        link: string,
        content: string,
    },
    secondaryLink: {
        link: string,
        content: string,
    }
    pageType?: PageType,
/* eslint-disable */
}
/* eslint-enable */
