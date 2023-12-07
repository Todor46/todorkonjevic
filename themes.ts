export const themes = ['fantasy', 'dim'] as const;
export const darkTheme: (typeof themes)[number] = 'dim';
export const lightTheme = themes[0];
