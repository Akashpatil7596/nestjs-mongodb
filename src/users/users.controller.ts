import { Body, Controller, Get, Param, Post, Query, Request, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { UserDto } from './users.dto';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { writeFileSync } from 'fs';
import { UsersService } from './users.service';
import { UserResources } from './users.resources';
import { hash } from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('register')
  /*
   * For multiple files with defferent names
   */
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 2 },
      { name: 'file', maxCount: 2 },
    ]),
  )

  /*
   * For single file
   */
  // @UseInterceptors(FileInterceptor('image'))

  /*
   * For multiple file in Array
   */
  // @UseInterceptors(FilesInterceptor('image', 2))
  async register(
    @Body() user: UserDto,
    // @UploadedFile() file: any, //* For single file
    @UploadedFiles() file: any, //* For array of files
  ) {
    try {
      user.email = user.email.toLowerCase();

      user.password = await hash(user.password, 8);

      file.image.forEach((singleFile) => {
        writeFileSync(`public/storage/users/${singleFile.originalname}`, singleFile.buffer);

        user.profilePicture = 'storage/users/' + singleFile.originalname;
      });

      const storeUser = await this.userService.store(user);

      const apiResponse = new UserResources(storeUser);

      return apiResponse;
    } catch (error) {
      return error;
    }
  }

  @Get('list')
  async userList() {
    try {
      console.log('Okay');

      return await this.userService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  async getUserDetail(@Param('id') id: string, @Query() query: any) {
    try {
      const getUser = await this.userService.getDocument({ _id: id }, {});

      return getUser;
    } catch (error) {
      return error;
    }
  }
}
