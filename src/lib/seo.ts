import type { Metadata } from "next";

export const SITE_NAME = "London Birthday Club";
const SUFFIX = ` | ${SITE_NAME}`;
const MAX_TITLE = 60;

/**
 * A page title that Google shows in full. The root layout's template appends
 * " | London Birthday Club"; when that would take the <title> past 60
 * characters the body is used on its own.
 */
export function fitTitle(body: string): NonNullable<Metadata["title"]> {
  return body.length + SUFFIX.length <= MAX_TITLE ? body : { absolute: body };
}
