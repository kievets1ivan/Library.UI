const BASE_URL = 'https://localhost:44380/api';

export const environment = {
  APP_URL: 'http://localhost:4200',
  // ADMIN_URL: 'http://localhost:4210',
  production: false,
  API: {
    image: `${BASE_URL}/image`,
    author: `${BASE_URL}/author`,
    document: `${BASE_URL}/document`,
    section: `${BASE_URL}/section`,
    user: `${BASE_URL}/user`,
    questionAnswer: `${BASE_URL}/questionAnswer`,
    udk: `${BASE_URL}/udk`,
    publicationPeriods: `${BASE_URL}/publicationPeriods`,
  }
};
