import 'reflect-metadata';

const TYPES = {
  IUserRepository: Symbol.for('IUserRepository'),
  IAccountRepository: Symbol.for('IAccountRepository'),
  IUserService: Symbol.for('IUserService'),
  IAccountService: Symbol.for('IAccountService'),
  PrismaService: Symbol.for('PrismaService'),
};

export { TYPES };
