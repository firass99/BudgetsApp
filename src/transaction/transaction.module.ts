import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from './transaction.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Transaction', schema: TransactionSchema}])],
  providers: [TransactionService],
  controllers: [TransactionController]
})
export class TransactionModule {}
