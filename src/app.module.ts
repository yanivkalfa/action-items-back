import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: `${__dirname}/config/envs/.env`,
      isGlobal: true
    }), 
    DatabaseModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}