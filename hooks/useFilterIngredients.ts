import React from 'react';
import { API } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import { useSet } from 'react-use';

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);

  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  React.useEffect(() => {
    const fetchIngredients = async () => {
      try {
        setLoading(true);
        const items = await API.ingredients.getAll();
        setIngredients(items);
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  return {
    ingredients,
    loading,
    selectedIngredients: selectedIds,
    onAddId: toggle,
  };
};
