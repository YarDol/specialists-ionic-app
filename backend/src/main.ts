import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import type { RequestHandler } from 'express';
import * as swStats from 'swagger-stats';
import basicAuth from 'express-basic-auth';

type SwaggerStatsModule = {
  getMiddleware: (options: {
    uriPath?: string;
    swaggerSpec?: unknown;
    authentication?: boolean;
    onAuthenticate?: (
      req: unknown,
      username: string,
      password: string,
    ) => boolean;
  }) => RequestHandler;
};

type SwaggerModuleStatic = {
  setup: (path: string, app: NestExpressApplication, document: unknown) => void;
};

type BasicAuthFn = (options: {
  users: Record<string, string>;
  challenge?: boolean;
}) => RequestHandler;

type SwaggerDocumentBuilder = {
  setTitle: (title: string) => SwaggerDocumentBuilder;
  setDescription: (description: string) => SwaggerDocumentBuilder;
  setVersion: (version: string) => SwaggerDocumentBuilder;
  addBearerAuth: () => SwaggerDocumentBuilder;
  build: () => Omit<OpenAPIObject, 'paths'>;
};

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });

  app.getHttpServer().setTimeout(5 * 60 * 1000);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const swaggerBuilderCtor = DocumentBuilder as {
    new (): SwaggerDocumentBuilder;
  };
  const config: Omit<OpenAPIObject, 'paths'> = new swaggerBuilderCtor()
    .setTitle('Specialists API')
    .setDescription('API for specialists')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const docUser: string = process.env.DOCS_USER ?? 'developer';
  const docPassword: string = process.env.DOCS_PASSWORD ?? '12345';

  app.use(
    (swStats as SwaggerStatsModule).getMiddleware({
      uriPath: '/api/doc-stats',
      swaggerSpec: document,
      authentication: !!process.env.DOCS_USER,
      onAuthenticate: function (req, username, password) {
        if (process.env.DOCS_USER) {
          return username === docUser && password === docPassword;
        }
        return true;
      },
    }),
  );

  app.use(
    `/api`,
    (basicAuth as BasicAuthFn)({
      users: {
        [docUser]: docPassword,
      },
      challenge: true,
    }),
  );

  (SwaggerModule as SwaggerModuleStatic).setup('api', app, document);

  await app.listen(process.env.PORT || 3001);
}
void bootstrap();
