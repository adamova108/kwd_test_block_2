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
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function kwd_guten_blockjson_init() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'kwd_guten_blockjson_init' ); 