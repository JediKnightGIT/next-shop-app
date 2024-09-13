import { Product } from '@prisma/client';
import { axiosInstance } from './instance';
import { APIRoutes } from './constants';

export const search = async (query: string): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>(
    APIRoutes.SEARCH_PRODUCTS,
    {
      params: { query },
    },
  );

  return data;
};