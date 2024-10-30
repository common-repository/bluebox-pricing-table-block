<?php

/**
 * Plugin Name: Bluebox Pricing Table Block
 * Description: Provides a new customizable pricing table block in the Gutenberg editor
 * Version: 1.0.0
 * Author: Bluebox Digital
 * Author URI: https://blueboxdigital.co.uk
 *
 */

function bbd_register_pricing_block() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'bluebox-digital-pricing-block-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		'bluebox-digital-pricing-block-style',
		plugins_url( 'src/blocks/PricingBlock/style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'src/blocks/PricingBlock/style.css' )
	);

	register_block_type( 'bluebox-digital/pricing-block', array(
		'style' => 'bluebox-digital-pricing-block-style',
		'editor_script' => 'bluebox-digital-pricing-block-script',
	));

}
add_action( 'init', 'bbd_register_pricing_block' );
