import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome() {
    const welcome = {
      en: 'Welcome to API of The End!',
      pt: 'Bem-vindo a API do Fim!',
    };
    return welcome;
  }
}
