import { Injectable, Inject } from '@nestjs/common';
import User from 'src/user/entities/user.entity';
import { USER_REPOSITORY } from 'src/config/consts';
import { UserDetailsCreate, UserDetailsUpdate } from 'src/user/dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private repo: typeof User
  ) { }

  async getAllUsers(): Promise<User[]> {
    return this.repo.findAll();
  }

  async saveUser(payload: UserDetailsCreate): Promise<User> {
    return this.repo.create({ ...payload });
  }

  async updateUser(email: string, payload: UserDetailsUpdate): Promise<boolean> {
    await this.repo.update(payload, { where: { email } });
    return true;
  }

  async deleteUser(email: string): Promise<boolean> {
    await this.repo.destroy({ where: { email } });
    return true;
  }
}