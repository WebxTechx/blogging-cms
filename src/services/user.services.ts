import { FilterQuery } from 'mongoose';
import { omit } from 'lodash';
import UserModel, { UserDocument, UserInput } from '../models/user.model';

export const createUser = async (input: UserInput) => {
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), 'password');
  } catch (err: any) {
    throw new Error(err);
  }
};

export const validatePassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) return false;

  return omit(user.toJSON(), 'password');
};

export const findUser = async (query: FilterQuery<UserDocument>) => {
  return UserModel.findOne(query).lean();
};

export const updateUser = async (
  id: string,
  updates: Partial<UserDocument>
) => {
  try {
    const user = await UserModel.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    Object.assign(user, updates);

    await user.save();

    return omit(user.toJSON(), 'password');
  } catch (err: any) {
    throw new Error(err);
  }
};
