import { Test, TestingModule } from '@nestjs/testing';
import { AccessController } from './access.controller';
import { AccessService } from './access.service';
import { PrismaService } from '../../database/PrismaService';
import { AccessDTO, AccessDTOPUT } from './acces.dto';

describe('AccessController', () => {
  let controller: AccessController;
  const access: AccessDTO = {
    language: 'en',
    access:
      'To reach the End, the player needs to find a stronghold using eyes of ender and locate the portal room. The room has an End portal with 12 frames, some with eyes already inserted. The player needs to complete the portal with any remaining ender eyes. When activating the portal, a loud sound is emitted and the portal replaces the center blocks with End portal blocks. The player can enter the portal to go to the End, along with other entities that were teleported before.',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessController],
      providers: [AccessService, PrismaService],
    }).compile();

    controller = module.get<AccessController>(AccessController);
  });

  it('Should return "Create new access"', () => {
    expect(JSON.stringify(controller.createAccess(access))).toBe(
      JSON.stringify(access),
    );
  });

  it('Should return "Get Access EN"', () => {
    expect(controller.getLanguage('en')).toBe(JSON.stringify(access));
  });

  it('Should return "Get all Access', () => {
    expect(controller.getAllLanguages()).toBeCalled();
  });

  it('Should return "Put EN Access"', () => {
    const accessPut: AccessDTOPUT = {
      access: 'OwO',
    };
    expect(JSON.stringify(controller.updateAccess('en', accessPut))).toBe(
      JSON.stringify(accessPut),
    );
  });
});
