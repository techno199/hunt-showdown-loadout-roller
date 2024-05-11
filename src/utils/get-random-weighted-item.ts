import {getRandomInt} from "@/utils/get-random-int";

const DEFAULT_ITEM_WEIGHT = 1;

export const getRandomWeightedItem = (items:  any[]) => {
  if (!Array.isArray(items)) return;

  const weightDistribution = [];

  for (let i=0; i<items.length; i++) {
    const item = items[i];
    const itemWeight = item.weight || DEFAULT_ITEM_WEIGHT;
    const prevItemWeight = weightDistribution[i - 1] || 0;
    weightDistribution.push(prevItemWeight + itemWeight);
  }

  const randomWeight = getRandomInt(0, weightDistribution.at(-1), false);
  const randomItemIndex = weightDistribution.findIndex(weightThreshold => weightThreshold > randomWeight);
  const randomItem = items[randomItemIndex];

  return randomItem;
}