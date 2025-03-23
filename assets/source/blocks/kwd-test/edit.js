import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ColorPicker, RangeControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { content, textColor, textAlign, fontSize, fontFamily } = attributes;
    
    const fontFamilyOptions = [
        { label: 'Arial', value: 'Arial' },
        { label: 'Helvetica', value: 'Helvetica' },
        { label: 'Times New Roman', value: 'Times New Roman' },
        { label: 'Georgia', value: 'Georgia' },
        { label: 'Verdana', value: 'Verdana' },
        { label: 'Courier New', value: 'Courier New' },
        { label: 'Tahoma', value: 'Tahoma' },
        { label: 'Trebuchet MS', value: 'Trebuchet MS' },
        { label: 'Impact', value: 'Impact' },
        { label: 'Comic Sans MS', value: 'Comic Sans MS' }
    ];
    
    const blockProps = useBlockProps({
        style: { textAlign },
        className: `font-${fontFamily.toLowerCase().replace(/\s+/g, '-')}`
    });
    
    return (
        <>
            <BlockControls>
                <AlignmentToolbar
                    value={textAlign}
                    onChange={(newAlign) => setAttributes({ textAlign: newAlign })}
                />
            </BlockControls>
            <InspectorControls>
                <PanelBody title={__('Text Settings', 'kwd-guten-blockjson')}>
                    <div className="components-base-control">
                        <label className="components-base-control__label">
                            {__('Text Color', 'kwd-guten-blockjson')}
                        </label>
                        <ColorPicker
                            color={textColor}
                            onChange={(color) => setAttributes({ textColor: color })}
                            enableAlpha={false}
                        />
                    </div>
                    <SelectControl
                        label={__('Font Family', 'kwd-guten-blockjson')}
                        value={fontFamily}
                        options={fontFamilyOptions}
                        onChange={(family) => setAttributes({ fontFamily: family })}
                    />
                    <RangeControl
                        label={__('Font Size', 'kwd-guten-blockjson')}
                        value={fontSize}
                        onChange={(size) => setAttributes({ fontSize: size })}
                        min={10}
                        max={70}
                        step={1}
                        suffix="px"
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <RichText
                    tagName="p"
                    value={content}
                    onChange={(content) => setAttributes({ content })}
                    placeholder={__('Enter your text here...', 'kwd-guten-blockjson')}
                    style={{ 
                        color: textColor,
                        fontSize: `${fontSize}px`
                    }}
                />
            </div>
        </>
    );
} 