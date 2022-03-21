function withError(Component) {
  return (props) => <Component {...props}></Component>;
}
export default withError;
