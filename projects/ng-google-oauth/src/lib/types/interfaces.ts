export interface GButtonConfig {
  type: 'icon' | 'standard';
  size?: 'small' | 'medium' | 'large',
  shape?: 'square' | 'circle' | 'pill' | 'rectangular';
  text?: 'signin_with' | 'signup_with' | 'continue_with';
  width?: number;
  theme?: 'outline' | 'filled_blue' | 'filled_black';
  logo_alignment?: 'left' | 'center';
}
