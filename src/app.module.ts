import { Module } from '@nestjs/common';

import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nestjs-demo'), UsersModule, MailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
