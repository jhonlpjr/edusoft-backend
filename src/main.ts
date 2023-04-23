import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function SwaggerCustomOptions() {
  return {
    swaggerOptions: {
      persistAuthorization: true,
    },
  };
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({});

  //swagger
  const config = new DocumentBuilder()
    .setTitle('Edusor API')
    .setDescription('API usado como backend para el sistema WEB Edusor.')
    .setVersion('1.0')
    .addBearerAuth(
      {
        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header',
      },
      'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();

  const custom = SwaggerCustomOptions();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, custom);

  await app.listen(8075);
}
bootstrap();
