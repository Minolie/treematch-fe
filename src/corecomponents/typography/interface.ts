type textAlign = 'left' | 'center' | 'right';

export interface TypographyProps {
    text: string;
    color: string;
    sx? : any;
    transform?: boolean;
    align?: textAlign;
    gradient?: boolean;

}

export interface LogoProps {
    fontSize: number;
    text: string;
}