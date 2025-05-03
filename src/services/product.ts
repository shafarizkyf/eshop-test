import {Category, Product, Products} from 'types/product';
import {eshopApi} from './axios';

export const getProductCategories = async () => {
  try {
    const response = await eshopApi.get<Category[]>('/products/categories');
    return response.data;
  } catch (error) {
    throw error;
  }
};

type GetProductsRequest = {
  limit?: number;
  skip?: number;
  select?: string;
};

export const getProducts = async (params?: GetProductsRequest) => {
  try {
    const response = await eshopApi.get<Products>('/products', {
      params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await eshopApi.get<Product>(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductsByCategory = async (slug: string) => {
  try {
    const response = await eshopApi.get<Products>(`/products/category/${slug}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchProducts = async (keyword: string) => {
  try {
    const response = await eshopApi.get<Products>('/products/search', {
      params: {
        q: keyword,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
