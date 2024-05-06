import {TWeapon} from "@/entities/weapon";

export type TWeaponSlot = {
  weapon: TWeapon;
  dualWielding?: boolean;
}