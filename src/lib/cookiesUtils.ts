import Cookies from 'js-cookie';

/* Language cookies */

// Cookie-nøkkel som skal brukes for å lagre språkvalg
const LANGUAGE_COOKIE_KEY = 'preferred_language';

// Funksjon for å sette oppdater språkvalg i en cookie
export function setLanguageCookie(language: 'nb' | 'nn'): void {
    // Sett cookie med en utløpstid, f.eks., 365 dager
    Cookies.set(LANGUAGE_COOKIE_KEY, language, { expires: 365 });
}

// Funksjon for å hente lagret språkvalg fra en cookie
export function getLanguageCookie(): 'nb' | 'nn' | null {
    const language = Cookies.get(LANGUAGE_COOKIE_KEY);
    return language === 'nb' || language === 'nn' ? language : null;
}

// Funksjon for å slette språkvalg cookien (hvis nødvendig)
export function removeLanguageCookie(): void {
    Cookies.remove(LANGUAGE_COOKIE_KEY);
}
  