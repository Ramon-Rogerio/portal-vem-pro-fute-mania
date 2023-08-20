import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import shape from '@/theme/shape';
import palette from '@/theme/palette';
import { customShadows } from '@/theme/shadows';


export const ThemeConfig = (props) => {
    const { children } = props;
    const themeOptions = useMemo(
        () => ({
            palette,
            shape,
            customShadows
        }),
        []
    );

    const theme = createTheme(themeOptions);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default ThemeConfig;
