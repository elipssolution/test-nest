import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'elips-solution-stage-pgsql.postgres.database.azure.com',
      port: 5432,
      username: 'postgres',
      password: 'h742CpNce68XX4',
      database: 'test',
      ssl: true,
      synchronize: true,
      autoLoadEntities: true,
    }),
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule],
})
export class AppModule {}
