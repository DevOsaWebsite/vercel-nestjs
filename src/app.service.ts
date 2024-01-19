import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly configService: ConfigService) {}
  async getHello(): Promise<string> {
    const message = this.configService.get<string>('MESSAGE');
    const NODE_ENV = this.configService.get<string>('NODE_ENV');
    const IS_PRODUCTION = this.configService.get<string>('IS_PRODUCTION');

    const result =
      message +
      ' ' +
      `${IS_PRODUCTION}` +
      ' ' +
      `${NODE_ENV}` +
      ' ' +
      'from AppService';

    this.logger.log(`Message: ${result}`);
    return result;
  }
}
