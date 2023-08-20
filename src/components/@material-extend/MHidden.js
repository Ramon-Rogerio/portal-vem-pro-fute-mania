/* eslint-disable no-unused-vars */
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';


export const MHidden = (props) => {
    const theme = useTheme();
    const { width, children } = props;
    const breakpoint = width.substring(0, 2);

    const hiddenUp = useMediaQuery((theme) => theme.breakpoints.up(breakpoint));
    const hiddenDown = useMediaQuery((theme) => theme.breakpoints.down(breakpoint));

    if (width.includes('Down')) {
        return hiddenDown ? null : children;
    }

    if (width.includes('Up')) {
        return hiddenUp ? null : children;
    }

    return null;
};

export default MHidden;
