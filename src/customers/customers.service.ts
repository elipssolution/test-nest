import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = this.customersRepository.create(createCustomerDto);
    await this.customersRepository.save(customer);
    return customer;
  }

  async findAll() {
    return await this.customersRepository.find();
  }

  async findOne(id: number) {
    return await this.customersRepository.findOne(id);
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    await this.customersRepository.update({ id }, updateCustomerDto);
    return await this.customersRepository.findOne({ id });
  }

  async remove(id: number) {
    await this.customersRepository.delete(id);
  }
}
