import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Budget } from './budget.schema';
import * as mongoose from 'mongoose';
import { NotFoundError } from 'rxjs';

@Injectable()
export class BudgetService {

    constructor(
        @InjectModel(Budget.name)
        private BudgetModel: mongoose.Model<Budget>
    ){}


    async findAll(){
        const Budgets = await this.BudgetModel.find();
        return Budgets;
    }


    async create(Budget: Budget){
        const res = await this.BudgetModel.create(Budget);
        return res;
    }


    async findById(id:String){
        const Budget = await this.BudgetModel.findById(id);
        if(!Budget){
            throw new NotFoundException('Budget Not Found')
        }
        return Budget
    }


    async updateById(id:String, Budget: Budget){
        const res = await this.BudgetModel.findByIdAndUpdate(
            id,
            Budget,
            {new:true, runValidators:true});
        return res
    }


    async deleteById(id:String){
        return await this.BudgetModel.findByIdAndDelete(id);
        
    }


}
