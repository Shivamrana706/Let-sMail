import React from "react";
import { AppBar, Toolbar, styled, Box, InputBase, Typography } from '@mui/material';
import { Menu as MenuIcon, Search } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AppsIcon from '@mui/icons-material/Apps';



const Header = () => {

    const AppBarStyled = styled(AppBar)({
        backgroundColor: '#f5f5f5',
        boxShadow: 'none'
    })
    const LogoBoxStyled = styled(Box)({
        marginRight: '60px',
        display: 'flex',
        alignItems: 'center'

    })
    const LogoTextStyled = styled(Typography)({
        color: 'black',
        fontSize: 30,
        fontFamily: 'ui-serif',
        fontWeight: 600,
        marginLeft: 10,
    })
    const SearchBox = styled(Box)({
        backgroundColor: 'white',
        marginLeft: '30px',
        display: 'flex',
        alignItems: 'center',
        padding: '1px 5px',
        maxWidth: '400px',
        width: '100%',
        height: '50px',
        borderRadius: '50px'

    })
    const InputBaseStyled = styled(InputBase)({
        width: '95%',
        // minWidth: '400px',
        padding: '0px 10px'
    })
    const HeaderRightDiv = styled(Box)({
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    })

    return (
        <div>
            <AppBarStyled>
                <Toolbar>
                    <LogoBoxStyled>
                        <MenuIcon color="action" />
                        <img width="40px" height="40px" style={{ marginLeft: '20px' }}
                            src="https://icons.veryicon.com/png/o/internet--web/billion-square-cloud/mail-213.png" />
                        <LogoTextStyled>Let'sMail</LogoTextStyled>

                    </LogoBoxStyled>
                    <SearchBox>
                        <Search color="action" />
                        <InputBaseStyled />
                    </SearchBox>
                    <HeaderRightDiv>
                        <SettingsIcon color="action" style={{ marginLeft: '5%' }} />
                        <HelpOutlineIcon color="action" style={{ marginLeft: '5%' }} />
                        <AppsIcon color="action" style={{ marginLeft: '5%' }} />
                    </HeaderRightDiv>
                </Toolbar>

            </AppBarStyled>
        </div>
    )
}

export default Header;