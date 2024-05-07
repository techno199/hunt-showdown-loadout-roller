import {getRandomInt} from "@/utils/get-random-int";

export const getRandomWeightedItem = <T extends  {weight: number}>(items: T[]) => {
  const totalWeight = items.reduce((previousValue, currentValue) => previousValue + (currentValue.weight || 1), 0);
  const rnd = getRandomInt(0, totalWeight);

  const item = items.reduce((prev, currentItem) => {
    if (isNaN(prev)) return prev;
    const nextWeight = prev + (currentItem.weight || 1);
    if (prev <= rnd && nextWeight >= rnd) {
      return currentItem;
    }
    return nextWeight;
  }, 0);

  return item;
}