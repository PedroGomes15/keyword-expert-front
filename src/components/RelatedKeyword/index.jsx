import "./style.css";

export const RelatedKeyword = ({ keyword, trend, uses }) => {
  const clamp = (num, min, max) => {
    return num <= min ? min : num >= max ? max : num;
  };

  return (
    <div className="keyword-container">
      <p
        className="keyword"
        style={{
          fontSize: 20 + trend / 10 + "px",
          fontWeight: clamp(trend * 10, 200, 800),
        }}
      >
        {keyword}
      </p>
      <p
        className="trend"
        style={{
          fontSize: 20 + trend / 10 + "px",
          fontWeight: clamp(trend * 10, 200, 800),
        }}
      >
        {trend}%
      </p>

      <p
        className="uses"
        style={{
          fontSize: 20 + trend / 10 + "px",
          fontWeight: clamp(trend * 10, 200, 800),
        }}
      >
        {uses}
      </p>
    </div>
  );
};
