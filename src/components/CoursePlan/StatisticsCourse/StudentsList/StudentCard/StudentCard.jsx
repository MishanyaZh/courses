import PropTypes from 'prop-types';
import { Item } from '../StudentsList.styled';

const StudentCard = ({ name, city, email, phone }) => {
  return (
    <>
      <Item>
        <h3>name: {name}</h3>
        <div>city: {city}</div>
        <div>email: {email}</div>
        <div>phone: {phone}</div>
      </Item>
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
