import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Le Cabinet', href: getPermalink('/') },
    { text: 'Assurance du Professionnel', href: getPermalink('/') },
    { text: 'Assurance du Particulier', href: getPermalink('/') },
    { text: 'Contact', href: getPermalink('/') },
  ],
};

export const footerData = {
  footNote: `2024 | JP Insurance | Tous droits réservés`,
};
