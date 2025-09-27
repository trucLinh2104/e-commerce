import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import Inventory2SharpIcon from '@mui/icons-material/Inventory2Sharp';
export default function IconMenu() {
    return (
        <Paper sx={{ width: '100%', height: '100%', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
            <MenuList sx={{ width: '100%', height: 500, position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <div className=" h-[100px] sticky z-10 pt-[0px]">
                    <MenuItem sx={{padding:2}}>
                        <ListItemText className="categories-header">Categories</ListItemText>
                    </MenuItem>
                    <Divider sx={{border:'1.5px #0c9b67 solid', width:'60%'}}/>
                </div>
               <div className="mt-[20px] overflow-y-scroll flex-1">
                   <MenuItem sx={{padding:2, border:'1px solid rgba(133,239,203,0.56)', margin:'8px'}}>
                       <ListItemIcon sx={{ color: '#0c9b67' }}>
                           <Inventory2SharpIcon fontSize="medium" />
                       </ListItemIcon>
                       <ListItemText className="categories-item">Web Clipboard</ListItemText>
                   </MenuItem>
                   <MenuItem sx={{padding:2, border:'1px solid rgba(133,239,203,0.56)', margin:'8px'}}>
                       <ListItemIcon sx={{ color: '#0c9b67' }}>
                           <Inventory2SharpIcon fontSize="medium" />
                       </ListItemIcon>
                       <ListItemText className="categories-item">Web Clipboard</ListItemText>
                   </MenuItem>
                   <MenuItem sx={{padding:2, border:'1px solid rgba(133,239,203,0.56)', margin:'8px'}}>
                       <ListItemIcon sx={{ color: '#0c9b67' }}>
                           <Inventory2SharpIcon fontSize="medium" />
                       </ListItemIcon>
                       <ListItemText className="categories-item">Web Clipboard</ListItemText>
                   </MenuItem>
                   <MenuItem sx={{padding:2, border:'1px solid rgba(133,239,203,0.56)', margin:'8px'}}>
                       <ListItemIcon sx={{ color: '#0c9b67' }}>
                           <Inventory2SharpIcon fontSize="medium" />
                       </ListItemIcon>
                       <ListItemText className="categories-item">Web Clipboard</ListItemText>
                   </MenuItem>
                   <MenuItem sx={{padding:2, border:'1px solid rgba(133,239,203,0.56)', margin:'8px'}}>
                       <ListItemIcon sx={{ color: '#0c9b67' }}>
                           <Inventory2SharpIcon fontSize="medium" />
                       </ListItemIcon>
                       <ListItemText className="categories-item">Web Clipboard</ListItemText>
                   </MenuItem>
                   <MenuItem sx={{padding:2, border:'1px solid rgba(133,239,203,0.56)', margin:'8px'}}>
                       <ListItemIcon sx={{ color: '#0c9b67' }}>
                           <Inventory2SharpIcon fontSize="medium" />
                       </ListItemIcon>
                       <ListItemText className="categories-item">Web Clipboard</ListItemText>
                   </MenuItem>
                   <MenuItem sx={{padding:2, border:'1px solid rgba(133,239,203,0.56)', margin:'8px'}}>
                       <ListItemIcon sx={{ color: '#0c9b67' }}>
                           <Inventory2SharpIcon fontSize="medium" />
                       </ListItemIcon>
                       <ListItemText className="categories-item">Web Clipboard</ListItemText>
                   </MenuItem>
                   <MenuItem sx={{padding:2, border:'1px solid rgba(133,239,203,0.56)', margin:'8px'}}>
                       <ListItemIcon sx={{ color: '#0c9b67' }}>
                           <Inventory2SharpIcon fontSize="medium" />
                       </ListItemIcon>
                       <ListItemText className="categories-item">Web Clipboard</ListItemText>
                   </MenuItem>
                   <MenuItem sx={{padding:2, border:'1px solid rgba(133,239,203,0.56)', margin:'8px'}}>
                       <ListItemIcon sx={{ color: '#0c9b67' }}>
                           <Inventory2SharpIcon fontSize="medium" />
                       </ListItemIcon>
                       <ListItemText className="categories-item">Web Clipboard</ListItemText>
                   </MenuItem>
                   <MenuItem sx={{padding:2, border:'1px solid rgba(133,239,203,0.56)', margin:'8px'}}>
                       <ListItemIcon sx={{ color: '#0c9b67' }}>
                           <Inventory2SharpIcon fontSize="medium" />
                       </ListItemIcon>
                       <ListItemText className="categories-item">Web Clipboard</ListItemText>
                   </MenuItem>
                   <MenuItem sx={{padding:2, border:'1px solid rgba(133,239,203,0.56)', margin:'8px'}}>
                       <ListItemIcon sx={{ color: '#0c9b67' }}>
                           <Inventory2SharpIcon fontSize="medium" />
                       </ListItemIcon>
                       <ListItemText className="categories-item">Web Clipboard</ListItemText>
                   </MenuItem>
               </div>

            </MenuList>
        </Paper>
    );
}
