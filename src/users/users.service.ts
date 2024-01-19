import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private userModel: Model<Users>) {}

  async store(reqBody) {
    return await new this.userModel(reqBody).save();
  }

  async getDocument(query, selectedData) {
    return await this.userModel.findOne(query).select(selectedData);
  }
}
