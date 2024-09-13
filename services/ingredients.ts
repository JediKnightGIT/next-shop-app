import { axiosInstance } from './instance';
import { APIRoutes } from './constants';
import { Ingredient } from '@prisma/client';

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>(APIRoutes.INGREDIENTS);

  return data;
};
