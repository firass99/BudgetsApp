import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetSchema } from './budget.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Budget', schema: BudgetSchema}])],
  providers: [BudgetService],
  controllers: [BudgetController]
})
export class BudgetModule {}
