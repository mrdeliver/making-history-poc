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

export enum SourceType {
  IMAGE_SOURCE=1,
  TEXT_SOURCE,
  AUDIO_SOURCE,
  MOVIE_SOURCE
}

export interface SourceContentBlock extends ContentBlock {
  sourceType: SourceType,
  sourceId: string,
}

export interface Ressources {
  textSources: string[],
  imageSources: string[],
  audioSources: string[],
  workSheets: string[]
}
