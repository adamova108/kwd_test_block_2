# KWD Guten BlockJSON

A WordPress plugin that provides custom Gutenberg blocks using the modern block.json approach.

## Features

- KWD Test Block with:
  - Editable text content
  - Text color picker
  - Text alignment controls
  - Font size range slider (10px to 70px)
  - Font family selector with common web-safe fonts

## Installation

1. Clone this repository into your WordPress plugins directory:
```bash
cd wp-content/plugins
git clone https://github.com/adamova108/kwd_test_block_2.git kwd-guten-blockjson
```

2. Install dependencies:
```bash
cd kwd-guten-blockjson
npm install
```

3. Build the blocks:
```bash
npm run build
```

4. Activate the plugin in WordPress admin panel.

## Development

To start development mode with hot reloading:
```bash
npm run start
```

To build for production:
```bash
npm run build
```

## License

GPL-2.0-or-later 