import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user.module';
import { RoleModule } from './role.module';
import { ClientModule } from './client.module';
import { TrainerModule } from './trainer.module';
import { AdminModule } from './admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    RoleModule,
    ClientModule,
    TrainerModule,
    AdminModule
  ],
})
export class AppModule  {}
