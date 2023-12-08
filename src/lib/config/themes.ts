export const themes = ['emerald', 'dim', 'sunset'] as const;
export const darkTheme: (typeof themes)[number] = 'sunset';
export const lightTheme = themes[0];
