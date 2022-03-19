import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { UserAPI } from "../../services/UserAPI";
import { useNavigate } from "react-router-dom";
import Badge from "../../components/Badge";
const UserDetail = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState({});
  const navigate = useNavigate();
  const urlParams = useParams();
  const { login } = urlParams;

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const apiResponseUser = await UserAPI.fetchUserInfo(login);
        const apiResponseRepos = await UserAPI.fetchUserRepos(login);

        setUser(apiResponseUser.data);
        setRepos(apiResponseRepos.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetail();
  }, []);

  const {
    avatar_url,
    name,
    company,
    login: username,
    location,
    hireable,
    html_url,
    public_gists,
    following,
    followers,
    public_repos,
  } = user;
  const onBackToHome = () => {
    navigate("/");
  };
  const sectionGeneralInfo = (
    <>
      <div className="user-general-info__left col-12 col-md-5">
        <img src={avatar_url} alt={name} />
        <h3>{name}</h3>
        {location && (
          <p>
            <strong>Location:</strong> {location}
          </p>
        )}
      </div>
      <div className="user-general-info__right col-12 col-md-7">
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Company:</strong> {company}
        </p>
        <a href={html_url} target="_blank" rel="noreferrer">
          <Button
            label="Visit github profile"
            buttonType="secondary"
            type="button"
          />
        </a>
      </div>
    </>
  );

  const sectionStats = (
    <>
      <Badge title={`Followers: ${followers}`} type={1} />
      <Badge title={`Following: ${following}`} type={2} />
      <Badge title={`Public gists: ${public_gists}`} type={3} />
      <Badge title={`Public repos: ${public_repos}`} type={4} />
    </>
  );

  return (
    <div className="user-detail-container mt-5">
      <div className="user-controller mb-3">
        <Button onClick={onBackToHome} className="me-2">
          <i className="fa fa-arrow-left me-2"></i>
          <span>Back to home</span>
        </Button>
        <span>
          <strong>Hierable:</strong>
          {"  "}
          {hireable ? (
            <i className="fa fa-check-circle text-success"></i>
          ) : (
            <i className="fa fa-check-circle text-danger"></i>
          )}
        </span>
      </div>
      <div className="user-general-info section-border row mb-3">
        {sectionGeneralInfo}
      </div>
      <div className="user-stats-info section-border mb-3">{sectionStats}</div>
    </div>
  );
};

export default UserDetail;
