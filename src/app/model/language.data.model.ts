export interface LanguageDTO {
    id: number;
    name: string;
    speakers: string;
    region: string;
    script: string;
    family: string;
    notes: string;
    officialStatus: string;
    languageCode: string;
    dialects: string[];
    relatedLanguages: string[];
    languageHistory: string;
    writingSystem: string;
    languageStatus: string;
}