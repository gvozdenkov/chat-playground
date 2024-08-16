import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

import { UserRole } from '#common/types';

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
  @Prop({ unique: true, required: true, lowercase: true })
  email: string;

  @Prop({ select: false, required: true })
  password: string;

  @Prop({
    default: () =>
      `https://i.pravatar.cc/200/?img=${Math.floor(Math.random() * 70) + 1}`,
  })
  avatar: string;

  @Prop({ required: true, minLength: 2 })
  name: string;

  @Prop({
    type: SchemaTypes.String,
    required: true,
    enum: Object.values(UserRole),
  })
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
