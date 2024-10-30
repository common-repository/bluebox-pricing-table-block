import { registerBlockType } from '@wordpress/blocks';

import * as PricingBlock from './blocks/PricingBlock';

const blocks = [PricingBlock];

function registerBlock(block) {
	const { name, settings } = block;
	registerBlockType(name, settings);
}

blocks.forEach(registerBlock);
