import TYPES_LIST from '~/data/types.json';

import type { Type } from '~/lib/types';

const getMergedDamageRelations = (
  types: Type[]
): {
  doubleDamageFrom: string[];
  doubleDamageTo: string[];
  halfDamageFrom: string[];
  halfDamageTo: string[];
  noDamageFrom: string[];
  noDamageTo: string[];
} => {
  const damageRelations = {
    doubleDamageFrom: [...new Set(types.flatMap((type) => type.damage_relations.double_damage_from))],
    doubleDamageTo: [...new Set(types.flatMap((type) => type.damage_relations.double_damage_to))],
    halfDamageFrom: [...new Set(types.flatMap((type) => type.damage_relations.half_damage_from))],
    halfDamageTo: [...new Set(types.flatMap((type) => type.damage_relations.half_damage_to))],
    noDamageFrom: [...new Set(types.flatMap((type) => type.damage_relations.no_damage_from))],
    noDamageTo: [...new Set(types.flatMap((type) => type.damage_relations.no_damage_to))]
  };

  return damageRelations;
};

export const getTypesWeaknesses = (types: string[]): string[] => {
  if (types.length === 0 || types.length > 2) {
    return [];
  }

  if (types.length === 1) {
    const type = TYPES_LIST.find((t) => t.name === types[0])!;

    return type.damage_relations.double_damage_from;
  }

  // If there are two types we need to calculate the correct weaknesses
  const type1 = TYPES_LIST.find((t) => t.name === types[0])!;
  const type2 = TYPES_LIST.find((t) => t.name === types[1])!;

  const { doubleDamageFrom, halfDamageFrom, noDamageFrom } = getMergedDamageRelations([type1, type2]);

  return doubleDamageFrom.filter((weakness) => {
    // 2x * 0.5x = 1x or 2x * 0x = 0x
    if (halfDamageFrom.includes(weakness) || noDamageFrom.includes(weakness)) {
      return false;
    }

    // 2x * 2x = 2x or 2x * 1x = 2x
    return true;
  });
};

export const getTypesResistances = (types: string[]): string[] => {
  if (types.length === 0 || types.length > 2) {
    return [];
  }

  if (types.length === 1) {
    const type = TYPES_LIST.find((t) => t.name === types[0])!;

    return type.damage_relations.half_damage_from;
  }

  // If there are two types we need to calculate the correct resistances
  const type1 = TYPES_LIST.find((t) => t.name === types[0])!;
  const type2 = TYPES_LIST.find((t) => t.name === types[1])!;

  const { doubleDamageFrom, halfDamageFrom, noDamageFrom } = getMergedDamageRelations([type1, type2]);

  return halfDamageFrom.filter((resistance) => {
    // 0.5x * 2x = 1x
    if (doubleDamageFrom.includes(resistance)) {
      return false;
    }

    // 0.5x * 0x = 0x
    if (noDamageFrom.includes(resistance)) {
      return false;
    }

    // 0.5x * 1x = 0.5x or 0.5x * 0.5x = 0.25x
    return true;
  });
};

export const getTypesImmunities = (types: string[]): string[] => {
  if (types.length === 0 || types.length > 2) {
    return [];
  }

  if (types.length === 1) {
    const type = TYPES_LIST.find((t) => t.name === types[0])!;

    return type.damage_relations.no_damage_from;
  }

  // If there are two types we need to calculate the correct immunities
  const type1 = TYPES_LIST.find((t) => t.name === types[0])!;
  const type2 = TYPES_LIST.find((t) => t.name === types[1])!;

  const { noDamageFrom } = getMergedDamageRelations([type1, type2]);

  return noDamageFrom;
};
