import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ssl: false,
      extra: null,
      type: 'mysql',
      name: 'default',
      host: 'localhost',
      port: 3306,
      database: 'testnest',
      username: 'root',
      password: 'Admin1234',
      logger: 'advanced-console',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
