const browserLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0];
const pathLang = window.location.pathname.split('/')[1];

if (pathLang === '') {
  const langMap = {
    ja: '/ja/blog/',
    zh: '/zh/blog/',
    ko: '/ko/blog/',
  };
  window.location.replace(langMap[browserLang] || '/blog/');
}