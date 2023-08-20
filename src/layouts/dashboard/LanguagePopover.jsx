import { useRef, useState } from 'react';
import { Box, MenuItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuPopover from '../../components/molecules/MenuPopover';

import flagEn from '@/assets/images/icons/ic_flag_en.svg';
import flagDe from '@/assets/images/icons/ic_flag_de.svg';
import flagFr from '@/assets/images/icons/ic_flag_fr.svg';

const LANGS = [
    {
        value: 'en',
        label: 'English',
        icon: flagEn
    },
    {
        value: 'de',
        label: 'German',
        icon: flagDe
    },
    {
        value: 'fr',
        label: 'French',
        icon: flagFr
    }
];

const LanguagePopover = () => {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                        bgcolor: (theme) =>
                            theme.palette.primary.main
                    })
                }}
            >
                <img src={LANGS[0].icon} alt={LANGS[0].label} />
            </IconButton>

            <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current}>
                <Box sx={{ py: 1 }}>
                    {LANGS.map((option) => (
                        <MenuItem
                            key={option.value}
                            selected={option.value === LANGS[0].value}
                            onClick={handleClose}
                            sx={{ py: 1, px: 2.5 }}
                        >
                            <ListItemIcon>
                                <Box component="img" alt={option.label} src={option.icon} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                                {option.label}
                            </ListItemText>
                        </MenuItem>
                    ))}
                </Box>
            </MenuPopover>
        </>
    );
};

export default LanguagePopover;
