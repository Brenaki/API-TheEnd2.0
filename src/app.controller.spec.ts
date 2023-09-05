import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    const welcome = {
      en: 'Welcome to API of The End!',
      pt: 'Bem-vindo a API do Fim!',
    };

    it('should return "Welcome and Bem-vindo"', () => {
      expect(JSON.stringify(appController.getWelcome())).toBe(
        JSON.stringify(welcome),
      );
    });
  });
});
