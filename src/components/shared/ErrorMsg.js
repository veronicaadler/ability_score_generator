import Loading from "../shared/Loading";

const ErrorMsg = ({ error, isPending }) => {
  if (error) {
    return <div>{error}</div>;
  }
  if (isPending) {
    return <Loading />;
  }
};

export default ErrorMsg;
