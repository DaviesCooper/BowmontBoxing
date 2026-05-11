const HEADER_SELECTOR = '.site-header';

/** Scroll so `element`'s top sits just under the sticky site header (measured live). */
export function scrollElementBelowSiteHeader(
  element: HTMLElement,
  behavior: ScrollBehavior = 'auto',
  extraGapPx = 10,
) {
  const header = document.querySelector<HTMLElement>(HEADER_SELECTOR);
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const top =
    element.getBoundingClientRect().top + window.scrollY - headerHeight - extraGapPx;
  window.scrollTo({ top: Math.max(0, top), behavior });
}
