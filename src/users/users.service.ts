import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.model';
import axios from 'axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private userModel: Model<Users>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async store(reqBody) {
    return await new this.userModel(reqBody).save();
  }

  async getDocument(query, selectedData) {
    return await this.userModel.findOne(query).select(selectedData);
  }

  async findAll() {
    const cacheValue = await this.cacheManager.get('my_test_key');

    if (cacheValue) {
      return cacheValue;
    }

    const { data } = await axios.get('https://dummyjson.com/products');

    await this.cacheManager.set('my_test_key', data);
    return data;
  }
}
