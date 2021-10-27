/// <reference types="react" />
/**
 * Renders an error page.
 * @param {{
 *   baseUrl: string
 *   basePath: string
 *   error?: string
 *   res: import("src/lib/types").NextAuthResponse
 * }} params
 */
export default function Error({ baseUrl, basePath, error, theme, res }: {
    baseUrl: any;
    basePath: any;
    error?: string | undefined;
    theme: any;
    res: any;
}): JSX.Element;
