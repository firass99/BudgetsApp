import { Body, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CategoriesDto } from 'src/categories/dto/Categories.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Categories, CategoriesDocument } from 'src/categories/models/Categories.models';
import { faker } from '@faker-js/faker';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Categories.name) private categoriesModel: Model<CategoriesDocument>) {}
    Add(body: CategoriesDto) {
      return this.categoriesModel.create(body);
    }
  
    FindAll() {
      return this.categoriesModel.find();
    }
  
    FindOne(id: string) {
      return this.categoriesModel.findOne({ _id: id });
    }
  
    Update(id: string, body: CategoriesDto) {
      return this.categoriesModel.findByIdAndUpdate(
        { _id: id },
        { $set: body },
        { new: true },
      );
    }
  
    Delete(id: string) {
        return this.categoriesModel.deleteOne({ _id: id });
    }
    
  
    Faker() {
      for (let index = 0; index < 30; index++) {
        const fakeCategories = {
          fullname: faker.name.fullName(),
        };
        this.categoriesModel.create(fakeCategories);
      }
      return 'success';
    }
  }
