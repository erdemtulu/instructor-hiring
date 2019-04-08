import { HttpClient } from '@angular/common/http';

import { TranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const TRANSLATE_STORAGE_KEY = 'ngx-translate-lang';
export const SUPPORTED_LANGS: string[] = ['en-US', 'tr'];

export function createTranslateLoader(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
