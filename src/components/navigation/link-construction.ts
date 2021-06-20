export default function buildPageLinkString(bandId: string, pageId: string | undefined): string {
  return `/band/${bandId}/page/${pageId}`;
}
