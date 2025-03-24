<?php
/**
 * Plugin Name: KWD Guten BlockJSON
 * Plugin URI: https://github.com/adamova108/kwd_test_block_2
 * Description: Custom Gutenberg blocks for KWD using modern block.json approach
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: kwd-guten-blockjson
 *
 * @package KwdGutenBlockJSON
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Register block category
 */
function kwd_guten_blockjson_block_category( $categories ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug'  => 'kwd-guten-blockjson',
                'title' => 'KWD BlockJSON Blocks',
            ),
        )
    );
}
add_filter( 'block_categories_all', 'kwd_guten_blockjson_block_category', 10, 1 );

/**
 * Register block and assets
 */
function kwd_guten_blockjson_init() {
    // Register the block
    register_block_type( 'kwd-guten-blockjson/kwd-test-2', array(
        'editor_script' => 'kwd-guten-blockjson-editor',
        'editor_style'  => 'kwd-guten-blockjson-editor',
        'style'         => 'kwd-guten-blockjson-style',
    ) );
}
add_action( 'init', 'kwd_guten_blockjson_init' );

/**
 * Register block assets
 */
function kwd_guten_blockjson_assets() {
    // Register editor script
    wp_register_script(
        'kwd-guten-blockjson-editor',
        plugins_url( 'assets/blocks/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'assets/blocks/index.js' )
    );

    // Register editor style
    wp_register_style(
        'kwd-guten-blockjson-editor',
        plugins_url( 'assets/blocks/index.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'assets/blocks/index.css' )
    );

    // Register frontend style
    wp_register_style(
        'kwd-guten-blockjson-style',
        plugins_url( 'assets/blocks/style-index.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'assets/blocks/style-index.css' )
    );
}
add_action( 'init', 'kwd_guten_blockjson_assets' );

/**
 * Debug: Log all registered blocks
 */
function kwd_guten_blockjson_debug_blocks() {
    $blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
    error_log('All registered blocks: ' . print_r(array_keys($blocks), true));
}
add_action('init', 'kwd_guten_blockjson_debug_blocks', 30); 