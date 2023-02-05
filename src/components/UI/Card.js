import './Card.css';

/**
 * @param {CardProps} props
 * @returns {JSX.Element}
 */
const Card = (props) => {
  const { children, className } = props;

  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;

/**
 * @typedef CardProps
 * @type object
 * @property {React.Children} children - React child components
 * @property {string} className - class name
 */
