import "./portfoliocontent.scss";

const PortfolioContent = ({ id, title, active, setSelected, src }) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}>
      {title}
    </li>
  );
};

export default PortfolioContent;
