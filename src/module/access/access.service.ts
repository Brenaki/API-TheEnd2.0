import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { AccessDTO } from './acces.dto';

@Injectable()
export class AccessService {
  constructor(private prisma: PrismaService) {}

  async createAccess(data: AccessDTO) {
    const accessExists = await this.prisma.access.findUnique({
      where: {
        language: data.language,
      },
    });

    if (accessExists) {
      throw new Error('Access already exists');
    }

    const access = await this.prisma.access.create({
      data,
    });

    return access;
  }
}
