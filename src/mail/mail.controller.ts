import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendMail(@Body() body: any, @Res() res) {
    try {
      const result = await this.mailService.sendMail();

      return res.json(result);
    } catch (error) {
      return error;
    }
  }
}
