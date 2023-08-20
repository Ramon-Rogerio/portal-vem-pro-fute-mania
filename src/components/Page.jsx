import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import { Box } from '@mui/material';

const Page = forwardRef(function Page(props, ref) {
    const { children, title = '', ...other } = props;
    return (
        <Box ref={ref} {...other}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </Box>
    );
});

export default Page;
