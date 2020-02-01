/* @flow strict-local */
/* eslint-disable spellcheck/spell-checker */

import { addLocaleData } from 'react-intl';

import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';


[
  
  de,
  en,
  es,
  fr,
  
].forEach(locale => addLocaleData(locale));
