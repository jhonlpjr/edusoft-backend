import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';
import { DATABASE } from './shared/enums/database.enum';
import { CONFIGURATION } from './shared/enums/configuration.enum';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      async useFactory(config: ConfigService) {
        return {
          type: DATABASE.TYPE.MYSQL,
          host: config.get(CONFIGURATION.PARAMETER.DB_HOST),
          port: Number(config.get(CONFIGURATION.PARAMETER.DB_PORT)),
          username: config.get(CONFIGURATION.PARAMETER.DB_USER),
          password: config.get(CONFIGURATION.PARAMETER.DB_PASS),
          database: config.get(CONFIGURATION.PARAMETER.DB_NAME),
          synchronize: config.get(CONFIGURATION.PARAMETER.ORM_SYNCHRONIZE),
          ssl: JSON.parse(config.get(CONFIGURATION.PARAMETER.DB_SSL)),
          autoLoadEntities: JSON.parse(CONFIGURATION.VALUE.AUTOLOAD_ENTITIES),
        } as ConnectionOptions;
      },
    }),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

