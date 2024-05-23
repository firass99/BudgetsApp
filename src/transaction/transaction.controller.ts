import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.schema';
import { createTransactionDto } from './dto/create-transaction.dto';
import { updateTransactiontDto } from './dto/update-transaction.dto';

@Controller('Transaction')
//Transaction url/Transaction*
export class TransactionController {

    constructor(private TransactionService: TransactionService){}

    @Get()
    async getAllTransactions(): Promise<Transaction[]>{
        return this.TransactionService.findAll()
    }


    @Post('create')
    async createTransaction(
        @Body()
        transaction:createTransactionDto
    ): Promise<Transaction>{
        return this.TransactionService.create(transaction);
    }

    @Get('/:id')
    async getTransaction(@Param('id') id:String ): Promise<Transaction>{
        return this.TransactionService.findById(id)
    }


    @Get('/user/:id')
    async getByIdTransactions(@Param('id') id:String): Promise<Transaction[]>{
        return this.TransactionService.findByUserId(id)
    }


    @Put('/:id')
    async updateTransaction( @Param('id') id:String, @Body() transaction:updateTransactiontDto ): Promise<Transaction>{
        return this.TransactionService.updateById(id, transaction)
    }
        
    @Delete('/:id')
    async deleteTransaction( @Param('id') id:String ): Promise<Transaction>{
        return this.TransactionService.deleteById(id)
    }

}
