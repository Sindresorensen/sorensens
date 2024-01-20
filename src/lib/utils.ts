import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getIsLoggedInCookie, getLanguageCookie } from "./cookiesUtils";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/* Returns true if it found nynorsk cookie and false if it found nb. 
 * If the getLanguageCookie-function returns null, the findIsNorsk-function
 * returns false (bokmaal)
 */
export function findIsNynorsk(): boolean {
    return getLanguageCookie() === 'nn';
}

export function isLoggedIn(): boolean {
  return getIsLoggedInCookie() === 'true';
}