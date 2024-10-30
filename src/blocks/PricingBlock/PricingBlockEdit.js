import { __ } from '@wordpress/i18n';
import {
	RichText,
	InspectorControls,
	ColorPalette,
	URLInputButton,
} from '@wordpress/block-editor';
import { CheckboxControl, PanelBody, PanelRow } from '@wordpress/components';

const PricingBlockEdit = (props) => {
	const {
		attributes: {
			title,
			subtitle,
			price,
			monthlyLabel,
			ctaLabel,
			features,
			url,
			highlighted,
			backgroundColor,
		},
		setAttributes,
		className,
	} = props;

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeSubtitle = (value) => {
		setAttributes({ subtitle: value });
	};

	const onChangePrice = (value) => {
		setAttributes({ price: value });
	};

	const onChangeMonthly = (value) => {
		setAttributes({ monthlyLabel: value });
	};

	const onButtonLinkChange = (urlLink, post) => {
		setAttributes({
			urlLink,
			text: (post && post.title) || 'Click here',
		});
	};

	const onChangeCta = (value) => {
		setAttributes({ ctaLabel: value });
	};

	const onChangefeatures = (value) => {
		setAttributes({ features: value });
	};

	const onChangeBGColor = (hexColor) => {
		setAttributes({ backgroundColor: hexColor });
	};

	const onChangeHighlighted = (value) => {
		setAttributes({ highlighted: value });
	};

	return (
		<div
			className={`${className} bbd-price-table-block`}
			style={
				highlighted
					? {
							border: `3px solid ${
								backgroundColor ? backgroundColor : '#2253ff'
							}`,
					  }
					: {}
			}
		>
			<InspectorControls key="setting">
				<PanelBody title={__('Base color', 'bluebox-digital')}>
					<PanelRow>
						<ColorPalette onChange={onChangeBGColor} />
					</PanelRow>
				</PanelBody>
				<PanelBody title={__('Highlighted', 'bluebox-digital')}>
					<PanelRow>
						<CheckboxControl
							label="Is highlighted?"
							checked={highlighted}
							onChange={onChangeHighlighted}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<RichText
				tagName="h2"
				placeholder={__('Pricing Name', 'bluebox-digital')}
				value={title}
				onChange={onChangeTitle}
				className="pricing-name"
				style={backgroundColor ? { color: `${backgroundColor}` } : {}}
			/>
			<RichText
				tagName="h3"
				placeholder={__('Pricing Description', 'bluebox-digital')}
				value={subtitle}
				onChange={onChangeSubtitle}
				className="pricing-desc"
			/>
			<RichText
				tagName="h3"
				placeholder={__('$x', 'bluebox-digital')}
				value={price}
				onChange={onChangePrice}
				className="pricing-price"
			/>
			<RichText
				tagName="p"
				value={monthlyLabel}
				onChange={onChangeMonthly}
				className="monthly-label"
			/>
			<div className="bbd-price-table-block__btn">
				<RichText
					tagName="a"
					placeholder="Enter button text"
					value={ctaLabel}
					onChange={onChangeCta}
					className="cta-button"
					style={
						backgroundColor
							? { backgroundColor: `${backgroundColor}` }
							: {}
					}
				/>
				<URLInputButton url={url} onChange={onButtonLinkChange} />
			</div>
			<hr className="bbd-price-table-block__features-splitter" />
			<div className="bbd-price-table-block__features-container">
				<h3>{__('Features', 'bluebox-digital')}</h3>
				<RichText
					tagName="ul"
					multiline="li"
					placeholder={__(
						'Write a list of features…',
						'bluebox-digital'
					)}
					value={features}
					onChange={onChangefeatures}
					className="features"
					style={{
						'--my-color-var': backgroundColor
							? backgroundColor
							: '#2253ff',
					}}
				/>
			</div>
		</div>
	);
};

export default PricingBlockEdit;
