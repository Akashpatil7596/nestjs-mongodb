import { Module } from '@nestjs/common';

import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster-demo.gf2e23g.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster-Demo'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '/public'),
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 30000,
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    UsersModule,
    MailModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
  ],
})
export class AppModule {}
