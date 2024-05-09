import {AmmoTypeId} from "@/entities/ammo-type";
import {AmmoModifier} from "@/entities/ammo-modifier";

export type TWeapon = {
  name: string;
  slotSize: number;
  ammoType: AmmoTypeId[];
  dualWieldingAvailable?: boolean;
}