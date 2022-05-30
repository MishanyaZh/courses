import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const StudentCard = ({ name, city, email, phone }) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card sx={{ maxWidth: 370 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                name: {name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                city: {city}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                email: {email}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                phone: {phone}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default StudentCard;

StudentCard.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};
