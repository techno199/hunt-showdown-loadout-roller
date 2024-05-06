import {AmmoType} from "@/entities/ammo-type";
import {AmmoModifier} from "@/entities/ammo-modifier";

export type TWeapon = {
  name: string;
  slotSize: number;
  ammoType: AmmoType;
  ammoModifier?: AmmoModifier;
  availableAmmoModifiers?: AmmoModifier[];
  dualWieldingAvailable?: boolean;
}