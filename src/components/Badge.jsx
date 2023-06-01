import PropTypes from "prop-types";

export default function Badge({ status }) {
  function renderBadge() {
    switch (status) {
      case "active":
        return (
          <span className=" font-medium text-sm bg-green-200 text-green-950 rounded-full px-2.5 py-0.5 capitalize absolute top-3 left-3">
            {status}
          </span>
        );
      case "destroyed":
        return (
          <span className=" font-medium text-sm bg-red-200 text-red-950 rounded-full px-2.5 py-0.5 capitalize absolute top-3 left-3">
            {status}
          </span>
        );
      case "retired":
        return (
          <span className=" font-medium text-sm bg-blue-200 text-blue-950 rounded-full px-2.5 py-0.5 capitalize absolute top-3 left-3">
            {status}
          </span>
        );
      case "unknown":
        return (
          <span className=" font-medium text-sm bg-yellow-200 text-yellow-950 rounded-full px-2.5 py-0.5 capitalize absolute top-3 left-3">
            {status}
          </span>
        );
      default:
        return (
          <span className="bg-green-200 text-green-950 rounded-full px-2.5 py-0.5 capitalize absolute top-3 left-3">
            {status}
          </span>
        );
    }
  }

  return renderBadge();
}

Badge.propTypes = {
  status: PropTypes.string.isRequired,
};
