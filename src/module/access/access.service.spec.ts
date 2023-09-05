import { Test, TestingModule } from '@nestjs/testing';
import { AccessService } from './access.service';
import { PrismaService } from '../../database/PrismaService';
import { AccessDTO } from './acces.dto';

describe('AccessService', () => {
  let service: AccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessService, PrismaService],
    }).compile();

    service = module.get<AccessService>(AccessService);
  });

  const accessCreate: AccessDTO = {
    language: 'en',
    access:
      'To reach the End, the player needs to find a stronghold using eyes of ender and locate the portal room. The room has an End portal with 12 frames, some with eyes already inserted. The player needs to complete the portal with any remaining ender eyes. When activating the portal, a loud sound is emitted and the portal replaces the center blocks with End portal blocks. The player can enter the portal to go to the End, along with other entities that were teleported before.',
  };

  it('Should return "Create new access"', () => {
    expect(service.createAccess(accessCreate)).toBe(accessCreate);
  });
});
