import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user.module';
import { RoleModule } from './role.module';
import { ClientModule } from './client.module';
import { TrainerModule } from './trainer.module';
import { AdminModule } from './admin.module';
import { MembershipModule } from './membership.module';
import { AttendanceModule } from './attendance.module';
import { DayModule } from './day.module';
import { PaymentModule } from './payment.module';
import { PlanModule } from './plan.module';
import { RateModule } from './rate.module';
import { ScheduleModule } from './schedule.module';
import { ExcersiseModule } from './excersise.module';
import { TrainingModule } from './training.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    RoleModule,
    ClientModule,
    TrainerModule,
    AdminModule,
    AttendanceModule,
    DayModule,
    ExcersiseModule,
    MembershipModule,
    PaymentModule,
    PlanModule,
    RateModule,
    ScheduleModule,
    TrainingModule
  ],
})
export class AppModule  {}
