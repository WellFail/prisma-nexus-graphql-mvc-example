import { PrismaClient } from '@prisma/client';
import { injectable, decorate, inject } from 'inversify';

decorate(injectable(), PrismaClient);

@injectable()
export class PrismaService extends PrismaClient {
  constructor(@inject('PrismaConfig') private config: any) {
    super(config);
  }
}
