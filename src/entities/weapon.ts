import {AmmoType} from "@/entities/ammo-type";
import {AmmoModifier} from "@/entities/ammo-modifier";

export type TWeapon = {
  name: string;
  slotSize: number;
  ammoType: AmmoType;
  availableAmmoTypes?: AmmoType[];
  dualWieldingAvailable?: boolean;
  src?: string;
}