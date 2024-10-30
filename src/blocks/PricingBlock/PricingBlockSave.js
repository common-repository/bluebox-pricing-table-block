import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

const PricingBlockSave = (props) => {
	const {
		className,
		attributes: {
			title,
			subtitle,
			price,
			ctaLabel,
			features,
			monthlyLabel,
			url,
			backgroundColor,
			highlighted,
		},
	} = props;
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
			<RichText.Content
				tagName="h2"
				value={title}
				className="pricing-name"
				style={backgroundColor ? { color: `${backgroundColor}` } : {}}
			/>
			<RichText.Content
				tagName="h3"
				value={subtitle}
				className="pricing-desc"
			/>
			<RichText.Content
				tagName="h3.price-label"
				value={price}
				className="pricing-price"
			/>
			<RichText.Content
				tagName="p"
				value={monthlyLabel}
				className="monthly-label"
			/>
			<div
				className="bbd-price-table-block__btn"
				style={
					backgroundColor
						? { backgroundColor: `#${backgroundColor}` }
						: {}
				}
			>
				<RichText.Content
					href={url}
					tagName="a"
					value={ctaLabel}
					className="cta-button"
					style={
						backgroundColor
							? { backgroundColor: `${backgroundColor}` }
							: {}
					}
				/>
			</div>
			<hr className="bbd-price-table-block__features-splitter" />
			<div className="bbd-price-table-block__features-container">
				<h3>{__('Features', 'bluebox-digital')}</h3>
				<RichText.Content
					tagName="ul"
					className="features"
					value={features}
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

export default PricingBlockSave;
