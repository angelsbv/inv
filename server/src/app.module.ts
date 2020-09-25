import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './Products/products.module';

@Module({
    imports: [
        ProductsModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
        }),
        MongooseModule.forRoot('mongodb://localhost/invx'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
