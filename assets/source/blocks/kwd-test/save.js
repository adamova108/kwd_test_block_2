import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { content, textColor, textAlign, fontSize, fontFamily } = attributes;
    
    const blockProps = useBlockProps.save({
        style: { textAlign },
        className: `font-${fontFamily.toLowerCase().replace(/\s+/g, '-')}`
    });
    
    return (
        <div {...blockProps}>
            <RichText.Content 
                tagName="p"
                value={content}
                style={{ 
                    color: textColor,
                    fontSize: `${fontSize}px`
                }}
            />
        </div>
    );
} 