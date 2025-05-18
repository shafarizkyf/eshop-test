import {Matches} from 'types/match';
import {pickzApi} from './axios';

export const getMatches = async (week: number = 1) => {
  try {
    const response = await pickzApi.get<Matches>('/matches', {
      params: {
        week,
      },
    });
    return response.data;
  } catch (error) {
    console.log('error@getMatches: ', error);
    throw error;
  }
};
