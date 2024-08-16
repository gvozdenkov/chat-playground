import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

import { UserRole } from '#common/types';
import { IsEmail, IsOptional, IsString, IsUrl } from 'class-validator';

@Schema({
  timestamps: true,
  toObject: {
    virtuals: true,
    flattenObjectIds: true,
  },
  id: false,
  versionKey: false,
})
export class User extends Document {
  @IsEmail()
  @Prop({ unique: true, required: true, lowercase: true })
  email: string;

  @IsString()
  @Prop({ select: false, required: true })
  password: string;

  @IsOptional()
  @IsUrl()
  @Prop({
    default: () =>
      `https://i.pravatar.cc/200/?img=${Math.floor(Math.random() * 70) + 1}`,
  })
  avatar: string;

  @IsString()
  @Prop({ required: true, minLength: 2 })
  name: string;

  @IsString()
  @Prop({
    type: SchemaTypes.String,
    required: true,
    enum: Object.values(UserRole),
  })
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
