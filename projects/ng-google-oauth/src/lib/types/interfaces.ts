export interface GButtonConfig {
  type: 'icon' | 'standard';
  size?: 'small' | 'medium' | 'large';
  shape?: 'square' | 'circle' | 'pill' | 'rectangular';
  text?: 'signin_with' | 'signup_with' | 'continue_with';
  width?: number;
  theme?: 'outline' | 'filled_blue' | 'filled_black';
  logo_alignment?: 'left' | 'center';
}

export interface CustomButtonConfig {
  text: string;
  style: object;
}

export interface CSSProperties {
  // Box Model
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderWidth?: string;
  borderTopWidth?: string;
  borderRightWidth?: string;
  borderBottomWidth?: string;
  borderLeftWidth?: string;
  borderColor?: string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderStyle?: string;
  borderTopStyle?: string;
  borderRightStyle?: string;
  borderBottomStyle?: string;
  borderLeftStyle?: string;
  boxSizing?: 'content-box' | 'border-box';

  // Positioning
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: string;

  // Display & Flexbox
  display?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  flex?: string;

  // Sizing
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;

  // Typography
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  textDecoration?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  letterSpacing?: string;
  color?: string;
  textShadow?: string;

  // Backgrounds
  backgroundColor?: string;

  // Borders & Outline
  borderRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  outline?: string;
  outlineWidth?: string;
  outlineColor?: string;
  outlineStyle?: string;

  // Box Shadow
  boxShadow?: string;

  // Overflow & Clipping
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto';

  // Transitions & Animations
  transition?: string;
  transitionProperty?: string;
  transitionDuration?: string;
  transitionTimingFunction?: string;
  transitionDelay?: string;
  animation?: string;
  animationName?: string;
  animationDuration?: string;
  animationTimingFunction?: string;
  animationDelay?: string;

  // Transform
  transform?: string;
  transformOrigin?: string;
  transformStyle?: string;

  // Visibility & Opacity
  visibility?: 'visible' | 'hidden' | 'collapse';
  opacity?: string;

  // Cursors
  cursor?: string;
}
