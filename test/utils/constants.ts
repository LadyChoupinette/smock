import { utils } from 'ethers';

export const BYTES32_EXAMPLE = '0x1234123412341234123412341234123412341234123412341234123412341234';

export const BYTES_EXAMPLE =
  '0x56785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678567856785678';

export const STRUCT_FIXED_SIZE_EXAMPLE = {
  valUint256: utils.parseUnits('1'),
  valBoolean: true,
  valBytes32: BYTES32_EXAMPLE,
};

export const STRUCT_DYNAMIC_SIZE_EXAMPLE = {
  valBytes: BYTES_EXAMPLE,
  valString: 'hola',
};