import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { AccessDTO, AccessDTOPUT } from './acces.dto';

@Injectable()
export class AccessService {
  constructor(private prisma: PrismaService) {}

  // Aqui eu estou mostrando todos os dados que estão no banco de dados sobre como acessar o The End.
  async getAllAccess() {
    return await this.prisma.access.findMany();
  }
  // Aqui eu estou mostrando um dos dados que o banco de dados já possui sobre como acessar o The End, em uma linguagem.
  async getAccess(language: string) {
    const accessExists = await this.prisma.access.findUnique({
      where: {
        language,
      },
    });

    if (!accessExists) {
      throw new Error('Access not found!');
    }

    return await accessExists;
  }

  // Aqui eu estou criando uma função que adiciona no banco de dados como acessar o The End.
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

  // Aqui eu estou atualizando o dados de como acessar o The End, utilizando a linguagem como um dos parametros
  async updateAccess(language: string, data: AccessDTOPUT) {
    const accessExists = await this.prisma.access.findUnique({
      where: {
        language,
      },
    });

    if (!accessExists) {
      throw new Error('Access not found');
    }

    return await this.prisma.access.update({
      data,
      where: {
        language,
      },
    });
  }
}
