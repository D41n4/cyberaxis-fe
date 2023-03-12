const formatDate = (isoDate) => {
  const date = new Date(isoDate);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedDate = date.toLocaleDateString("en-GB", options);

  return formattedDate;
};

export default formatDate;
