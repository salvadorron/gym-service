import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user.module';
import { RoleModule } from './role.module';
import { ClientModule } from './client.module';
import { TrainerModule } from './trainer.module';
import { AdminModule } from './admin.module';
import { AttendanceModule } from './attendance.module';
import { DayModule } from './day.module';
import { PaymentModule } from './payment.module';
import { PlanModule } from './plan.module';
import { ScheduleModule } from './schedule.module';
import { ExcersiseModule } from './excersise.module';
import { TrainingModule } from './training.module';
import { PreflightMiddleware } from '../middlewares/preflight-middleware';
import { ParrishModule } from './parrish.module';
import { MunicipalityModule } from './municipality.module';
import { StateModule } from './state.module';
import { NutritionalPlanModule } from './nutritional_plan.module';

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
    PaymentModule,
    PlanModule,
    ScheduleModule,
    TrainingModule,
    ParrishModule,
    MunicipalityModule,
    StateModule,
    NutritionalPlanModule
  ]
})
export class AppModule implements NestModule {
  constructor() {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PreflightMiddleware).forRoutes('*');
  }
}
