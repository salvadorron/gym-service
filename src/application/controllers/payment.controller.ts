import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PaymentService } from '../services/payment/payment.service';
import { CreatePaymentDto } from '../../domain/model/payment/create-payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.save(createPaymentDto);
  }

  @Get()
  async findAll() {
    return this.paymentService.getPayments();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.paymentService.getPaymentById(id);
  }
}
