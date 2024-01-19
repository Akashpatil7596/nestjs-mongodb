import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail() {
    return await this.mailerService.sendMail({
      to: 'ap3135198@gmail.com',
      from: 'dummyforaltair@gmail.com',
      subject: 'Welcome to our app!',
      template: 'register.hbs',
      context: { name: 'Bigshow' },
    });
  }
}
