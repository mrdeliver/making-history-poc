export interface APIResult {
  result: unknown[]
}

export interface Tip {
  heading: string,
  text: string
}

export enum ContentBlockType {
  TEXT_CONTENT_BLOCK='text',
  SOURCE_CONTENT_BLOCK='source',
  IMAGE_BLOCK='image',
}

export interface ContentBlock {
  type: ContentBlockType,
}

export interface TextContentBlock extends ContentBlock {
  glossarEntries: string[],
  heading: string,
  text: string,
  tipps: Tip[]
}

export enum RessourceType {
  IMAGE_SOURCE='image-ressource',
  TEXT_SOURCE='text-ressource',
  AUDIO_SOURCE='audio-ressource',
  MOVIE_SOURCE='movie-ressource'
}

export interface SourceContentBlock extends ContentBlock {
  resourceType: RessourceType,
  sourceId: string,
}

export interface Ressources {
  textSources: string[],
  imageSources: string[],
  audioSources: string[],
  workSheets: string[]
}

export interface Annotation {
  tipp: Tip,
  x: number,
  y: number
}

export interface Ressource {
  id: string
  typ: RessourceType,
  heading: string,
  author: string,
  caption: string,
  content: ContentBlock[]
}

export interface AudioRessource extends Ressource {
  url: string,
}

export enum PageType {
  CHAPTER='chapter',
  SUB_CHAPTER='subchapter'
}
