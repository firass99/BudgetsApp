import {Body,Controller,Delete,Get,Param,Post,Put,Query,} from '@nestjs/common';
import { CategoriesDto } from 'src/categories/dto/Categories.dto';
  import { CategoriesService } from './categories.service';
  
  @Controller('category')
export class CategoriesController {
    constructor(private readonly service: CategoriesService) {}

    @Post('/create')
    Add(@Body() body: CategoriesDto) {
      return this.service.Add(body);
    }
  
    @Get()
    FindAll() {
      return this.service.FindAll();
    }
  
    @Get('/:id')
    FindOne(@Param('id') id: string) {
      return this.service.FindOne(id);
    }
  
    @Put('/:id')
    Update(@Param('id') id: string, @Body() body: CategoriesDto) {
      return this.service.Update(id, body);
    } 
  
    @Delete('/:id')
    Delete(@Param('id') id: string) {
      return this.service.Delete(id);
    }
  
    @Post('faker')
    Faker() {
      return this.service.Faker();
    }
  
}