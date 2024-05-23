import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Budget } from './budget.schema';
import { createBudgetDto } from './dto/create-budget.dto';
import { updateBudgetDto } from './dto/update-budget.dto';

@Controller('budget')
//Budget url/Budget*
export class BudgetController {

    constructor(private BudgetService: BudgetService){}

    @Get()
    async getAllBudgets(): Promise<Budget[]>{
        return this.BudgetService.findAll()
    }

    @Post('create')
    async createBudget(
        @Body()
        Budget:createBudgetDto
    ): Promise<Budget>{
        return this.BudgetService.create(Budget);
    }


    @Get('/:id')
    async getBudget(@Param('id') id:String ): Promise<Budget>{
        return this.BudgetService.findById(id)
    }

    
    @Put('/:id')
    async updateBudget( @Param('id') id:String, @Body() Budget:updateBudgetDto ): Promise<Budget>{
        return this.BudgetService.updateById(id, Budget)
    }


    @Delete('/:id')
    async deleteBudget( @Param('id') id:String ): Promise<Budget>{
        return this.BudgetService.deleteById(id)
    }

}
