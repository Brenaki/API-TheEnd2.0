import { Test, TestingModule } from '@nestjs/testing';
import { AccessService } from './access.service';
import { PrismaService } from '../../database/PrismaService';
import { AccessDTO, AccessDTOPUT } from './acces.dto';

describe('AccessService', () => {
  let service: AccessService;

  const access: AccessDTO = {
    language: 'en',
    access:
      'To reach the End, the player needs to find a stronghold using eyes of ender and locate the portal room. The room has an End portal with 12 frames, some with eyes already inserted. The player needs to complete the portal with any remaining ender eyes. When activating the portal, a loud sound is emitted and the portal replaces the center blocks with End portal blocks. The player can enter the portal to go to the End, along with other entities that were teleported before.',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessService, PrismaService],
    }).compile();

    service = module.get<AccessService>(AccessService);
  });

  it('Should return "Create new access"', () => {
    expect(service.createAccess(access)).toBe(access); // Funcionou na primeira vez, porém tenho que mockar o banco de dados para continuar testando mais
  });

  it('Should return "get access EN', () => {
    expect(service.getAccess('en')).toBe(JSON.stringify(access));
  });

  it('Should return "get all access', () => {
    expect(service.getAllAccess()).toBe(JSON.stringify(access));
  });

  it('Should return "put access EN"', () => {
    const accessPut: AccessDTOPUT = {
      access: 'OwO',
    };
    expect(JSON.stringify(service.updateAccess('en', accessPut))).toBe(
      JSON.stringify(accessPut),
    );
  });
});
