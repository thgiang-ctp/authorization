import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello() {
    return {
      message:
        'Hello, Reading config: ' +
        this.configService.get('authorization.mysql.master.db'),
    };
  }
}
