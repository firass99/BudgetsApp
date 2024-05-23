import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService:JwtService
    ){}


    //sign up  
    async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, last_name, email, age,  password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      last_name,
      email,
      age,
      password: hashedPassword
    });

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }


  async login (LoginDto:LoginDto): Promise<{token:string }>{
    const {email, password } = LoginDto;

    const user= await this.userModel.findOne({email})

    if(!user){
        throw new UnauthorizedException("Invalid ##email or Password")
    }

    const validPassword= await bcrypt.compare(password, user.password)

    if(!validPassword){
        throw new  UnauthorizedException("Invalid email or ##Password")
    }
    const token= this.jwtService.sign({id: user._id})

    return {token};
  }


  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({email})
  }


}
