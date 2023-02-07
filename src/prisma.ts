import { PrismaClient } from '@prisma/client';

class PrismaSingleton {
  private static instance: PrismaClient;

  static getInstance() {
    if (!this.instance) {
      this.instance = new PrismaClient();
    }
    return this.instance;
  }
}

export default PrismaSingleton.getInstance();
