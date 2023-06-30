// import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle, CardContent } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Card>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};
export default Section;

// Title.propTypes = {
//   title: PropTypes.string,
// };
