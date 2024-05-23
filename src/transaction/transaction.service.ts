import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from './transaction.schema';
import * as mongoose from 'mongoose';
import { NotFoundError } from 'rxjs';
import { User } from 'src/auth/schema/user.schema';

@Injectable()
export class TransactionService {

    constructor(
        @InjectModel(Transaction.name)
        private TransactionModel: mongoose.Model<Transaction>
    ){}


    async findAll(){
        const Transactions = await this.TransactionModel.find();
        return Transactions;
    }

    async create(Transaction: Transaction){
        const res = await this.TransactionModel.create(Transaction);
        return res;
    }


    async findById(id:String){
        const Transaction = await this.TransactionModel.findById(id).populate('user').exec();
        if(!Transaction){
            throw new NotFoundException('Transaction Not Found')
        }
        return Transaction
    }


    
    async findByUserId(id:String){
        const Transaction = await this.TransactionModel.find({'user':id}).populate('user').exec();
        if(!Transaction){
            throw new NotFoundException('Transaction Not Found')
        }
        return Transaction
    }


    async updateById(id:String, transaction: Transaction){
        const res = await this.TransactionModel.findByIdAndUpdate(
            id,
            transaction,
            {new:true, runValidators:true});
        return res
    }


    async deleteById(id:String){
        return await this.TransactionModel.findByIdAndDelete(id);
    }


}
