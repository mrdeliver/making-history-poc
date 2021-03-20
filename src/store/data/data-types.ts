export interface APIResult {
  result: unknown[]
}

export interface Tip {
  heading: string,
  text: string
}

export enum ContentBlockType {
  TEXT_CONTENT_BLOCK='text',
  SOURCE_CONTENT_BLOCK='source'
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
  IMAGE_SOURCE=1,
  TEXT_SOURCE,
  AUDIO_SOURCE,
  MOVIE_SOURCE
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
  tip: Tip,
  x: number,
  y: number
}

export interface Ressource {
  id: string
  typ: RessourceType,
  author: string,
  caption: string,
  content: TextContentBlock[]
}

export type TextRessource = Ressource

export interface AudioRessource extends Ressource {
  url: string,
}

export enum PageType {
  CHAPTER='chapter',
  SUB_CHAPTER='subchapter'
}
