import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '@/components/Page';


const DashboardApp = () => {
    return (
        <Page title="Dashboard | Minimal-UI">
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Olá, Seja bem-vindo novamente!</Typography>
                </Box>
                <Grid container spacing={3}>
                    
                </Grid>
            </Container>
        </Page>
    );
};

export default DashboardApp;
