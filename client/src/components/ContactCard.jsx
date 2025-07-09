import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";



export default function ContactCard({name,email,phone,onDelete,id}){
  const navigate=useNavigate();
    return(
        <Box sx={{ maxWidth: 275 }} className="mx-2">
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <div className='flex flex-wrap justify-between'>
            <Avatar>{name[0]}</Avatar>
            <Typography
              variant="h5"
              component="div"
              >
              {name}
            </Typography>
                <EditSquareIcon className='cursor-pointer' onClick={()=>navigate(`/edit/${id}`)}/>
            </div>
            <Typography variant="body2" className="mt-4 text-xl">
              email: {email}
            </Typography>
            <Typography variant="body2" className="mt-4 text-xl">
              phone: {phone}
            </Typography>
          </CardContent>
          <CardActions>
            {(
              <Button variant="contained" color='error' onClick={onDelete}>
              Delete Contact
            </Button>
            )}
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
    );
}