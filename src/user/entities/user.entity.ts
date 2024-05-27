import { 
  Table, Column, Model, DataType, PrimaryKey, AutoIncrement, 
  Unique, IsEmail, AllowNull
} from 'sequelize-typescript';
import { Picture } from '../dto/user.dto';

@Table
export default class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull
  @Column
  title: string;

  @AllowNull
  @Column
  first: string;

  @AllowNull
  @Column
  last: string;

  @Unique
  @IsEmail
  @Column
  email: string;
  
  @AllowNull
  @Column
  dob: Date;

  @AllowNull
  @Column
  street: string;

  @AllowNull
  @Column
  city: string;

  @AllowNull
  @Column
  state: string;

  @AllowNull
  @Column
  country: string;

  @AllowNull
  @Column
  phone: string;

  @AllowNull
  @Column
  gender: string;

  @Column({
    type: DataType.JSONB,
    defaultValue: {
      large: null,
      medium: null,
      thumbnail: null,
    }
  })
  picture: Picture
}