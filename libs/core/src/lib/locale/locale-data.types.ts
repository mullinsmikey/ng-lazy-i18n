import { CountryListItem } from "./countries";
import { LanguageListItem } from "./languages";

export interface LocaleData {
    language: LanguageListItem;
    country: CountryListItem;
}

export interface LocaleCodes {
    langCode: string;
    countryCode: string;
}
