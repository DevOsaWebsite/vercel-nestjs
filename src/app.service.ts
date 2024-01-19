import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const message = this.configService.get<string>('MESSAGE');
    const IS_PRODUCTION = this.configService.get<string>('IS_PROD');

    return message + ' ' + `${IS_PRODUCTION}`;
  }
}
