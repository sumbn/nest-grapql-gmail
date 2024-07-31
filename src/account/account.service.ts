import { Injectable } from '@nestjs/common';
import { Account } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  create = async (dataUser: any): Promise<Account> => {
    return await this.prisma.account.create({ data: dataUser });
  };

  findAll = async (): Promise<Account[]> => {
    return await this.prisma.account.findMany();
  };

  findOne = async (id: number): Promise<Account> => {
    return await this.prisma.account.findUnique({ where: { id } });
  };
}
