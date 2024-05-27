import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDetailsCreate, UserDetailsUpdate } from 'src/user/dto/user.dto';
import User from 'src/user/entities/user.entity';
import { ValidateUserPipe } from 'src/user/pipes/user/validate-user.pipe';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) { }

  @Get()
  async getSavedUsed(): Promise<User[]> {
    return await this.service.getAllUsers();
  }

  @Delete('/:email')
  async deleteUser(
    @Param('email') email: string
  ): Promise<boolean> {
    await this.service.deleteUser(email);
    return true;
  }

  @Post()
  @UsePipes(ValidateUserPipe, new ValidationPipe({ whitelist: true }))
  async saveNewUser(@Body() userDetails: UserDetailsCreate): Promise<User> {
    console.log('userDetails', userDetails);
    try {
      let user = await this.service.saveUser(userDetails);
      return user.dataValues as User;
    } catch (err) {
      throw new HttpException(err.errors[0].message, HttpStatus.BAD_REQUEST)
    }
  }

  @Put('/:email')
  @UsePipes(ValidateUserPipe, new ValidationPipe({ whitelist: true }))
  async putUser(
    @Param('email') email: string,
    @Body() payload: UserDetailsUpdate
  ): Promise<boolean> {
    return this.updateUser(email, payload);
  }

  @Patch('/:email')
  @UsePipes(ValidateUserPipe, new ValidationPipe({ whitelist: true }))
  async patchUser(
    @Param('email') email: string,
    @Body() payload: UserDetailsUpdate
  ): Promise<boolean> {
    return this.updateUser(email, payload);
  }

  async updateUser(email: string, userDetails: UserDetailsUpdate): Promise<boolean> {
    try {
      await this.service.updateUser(email, userDetails);
      return true;
    } catch (err) {
      console.log('err', err);
      throw new HttpException('something went wrong', HttpStatus.BAD_REQUEST)
    }
  }
}
