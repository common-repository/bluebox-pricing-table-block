import { __ } from '@wordpress/i18n';
import PricingBlockEdit from './PricingBlockEdit';
import PricingBlockSave from './PricingBlockSave';

export const name = 'bluebox-digital/pricing-block';

export const settings = {
	title: __('Pricing Block', 'bluebox-digital'),
	icon: 'index-card',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2',
			default: 'Starter',
		},
		subtitle: {
			type: 'array',
			source: 'children',
			selector: 'h3',
			default: 'For small teams',
		},
		price: {
			type: 'string',
			source: 'text',
			selector: 'h3.price-label',
			default: '$40',
		},
		monthlyLabel: {
			type: 'string',
			source: 'text',
			selector: 'p.monthly-label',
			default: 'Monthly',
		},
		ctaLabel: {
			type: 'string',
			source: 'text',
			selector: 'a.cta-label',
			default: 'Sign Up Now',
		},
		features: {
			type: 'array',
			source: 'children',
			selector: '.features',
		},
		url: {
			type: 'string',
		},
		text: {
			type: 'string',
		},
	},
	example: {
		attributes: {
			title: __('Enterprise', 'bluebox-digital'),
			subtitle: __('For Large Teams', 'bluebox-digital'),
			price: __('$50', 'bluebox-digital'),
			features: [
				__('Unlimited Notes', 'bluebox-digital'),
				__('5 Workspaces', 'bluebox-digital'),
				__('10 Team Members', 'bluebox-digital'),
				'💖',
			],
			bg_color: { type: 'string', default: '#000000' },
			text_color: { type: 'string', default: '#ffffff' },
		},
	},
	edit: PricingBlockEdit,
	save: PricingBlockSave,
};
