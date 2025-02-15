import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseError } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { config } from 'process';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'User', schema: UserSchema}]),
    JwtModule.registerAsync({
      inject:[ConfigService],
      useFactory: (config:ConfigService) =>{
        return{
          secret: config.get<string>('JWT_SECRET'),
          signOptions:{
            expiresIn: config.get<string | number>('JWT_EXPIRE')
          },};
      },
    }) ,
    PassportModule.register({defaultStrategy: 'jwt'})
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
