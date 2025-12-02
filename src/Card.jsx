import "./Card.css";

export default function Card({ data }) {
  return (
    <div className="card">
      <div style={{ width: "30%" }}>
        <img src={data.avatar_url} className="profile" alt="profile image" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
        <div>
          <span style={{ fontSize: "25px" }}>{data.name}</span>
          <span>{`@${data.login}`}</span>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <span className="spanitem">{`${data.public_repos} Repos`}</span>
          <span className="spanitem">{`${data.followers} Followers`}</span>
          <span className="spanitem"> {`${data.following} Following`}</span>
        </div>
        <div>
          <span>{data.location}</span>
          <span>{data.company}</span>
          <a href={data.html_url}>View on GitHub</a>
        </div>
      </div>
    </div>
  );
}
