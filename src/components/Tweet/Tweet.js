import { Button, Typography } from "@mui/material";
import Spacer from "components/Spacer";
import styled from "styled-components";
import { Star, StarBorder, CheckCircle } from "@mui/icons-material";
import { favouriteTweet } from "api/user";
import formatDate from "util/formatDate";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TerminalIcon from "@mui/icons-material/Terminal";
import Tooltip from "@mui/material/Tooltip";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import { colors } from "util/theme";

const StyledCheckCircle = styled(CheckCircle)`
  color: ${({ isTrusted }) => (isTrusted ? "green" : "gray")};
`;

const StyledStarBorder = styled(StarBorder)`
  color: gold;
  font-size: 28px !important;
`;

const StyledStar = styled(Star)`
  color: gold;
  font-size: 28px !important;
`;

const Div = styled.div`
  border: 1px solid ${colors.PRIMARY};
  max-width: 800px;
  margin: auto;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 6px;
  background-color: white;
  filter: drop-shadow(0px 0px 5px ${colors.HIGHLIGHT});

  .details {
    display: grid;
    grid-template-columns: 200px auto 26px;
    grid-gap: 20px;

    .details__image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        object-fit: cover;
        min-width: 100%;
        height: 150px;
      }
    }

    .details__badges {
      display: flex;
      flex-direction: column;
      justify-items: center;
      padding-top: 10px;
      gap: 5px;
      .details__badges__tw-link {
        cursor: pointer;
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .actions__entities {
      display: flex;
      align-items: center;
      margin-right: auto;
    }

    a {
      text-decoration: none;
    }

    .actions__saved {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 20px;
    }
  }
`;

// MALWARE
// HACKER_GROUPS
// ORGANISATIONS
// OS
//SOFTWARE

const getEntityIcons = (entityList) => {
  const list = [];

  entityList?.forEach((entity) => {
    if (entity === "MALWARE") {
      list.push(
        <Tooltip title="Malware" placement="top">
          <CoronavirusIcon />
        </Tooltip>
      );
    }
    if (entity === "HACKER_GROUPS") {
      list.push(
        <Tooltip title="Hacker groups" placement="top">
          <EngineeringIcon />
        </Tooltip>
      );
    }
    if (entity === "ORGANISATIONS") {
      list.push(
        <Tooltip title="Organisations" placement="top">
          <AccountBalanceIcon />
        </Tooltip>
      );
    }
    if (entity === "OS") {
      list.push(
        <Tooltip title="Operating system" placement="top">
          <SystemSecurityUpdateGoodIcon />
        </Tooltip>
      );
    }
    if (entity === "SOFTWARE") {
      list.push(
        <Tooltip title="Software" placement="top">
          <TerminalIcon />
        </Tooltip>
      );
    }
  });

  return list;
};

function Tweet(props) {
  let imageSrc = "";
  let url = "";

  if (props.urls[0]) {
    url = props.urls[0].url;

    if (props.urls[0].images[0]) {
      imageSrc = props.urls[0].images[0].url;
    }
  }

  const handleFavouriteTweet = () => {
    favouriteTweet(props.id).then(() => props.handleGetTweets());
  };

  return (
    <Div>
      <div className="details">
        <div className="details__image">
          <img src={imageSrc || "/placeholder.png"} alt="" />
        </div>
        <Typography>{props.text}</Typography>
        <div className="details__badges">
          <Tooltip
            title={props.isTrusted ? "Trusted TODO" : "Not trusted TODO"}
            placement="top"
            arrow
          >
            <StyledCheckCircle isTrusted={props.isTrusted} />
          </Tooltip>
          <div className="details__badges__tw-link">
            <img src="twitter-logo.png" alt="" />
          </div>
        </div>
      </div>
      <Spacer px={10} />
      <div className="actions">
        <div className="actions__entities">
          Entities found: {getEntityIcons(props.entityList)}
        </div>
        <Typography>Author ID: {props.authorId}</Typography>
        <Spacer px={20} horizontal />
        <Typography>{formatDate(props.created_at)}</Typography>
        <Spacer px={20} horizontal />
        {/* TODO check no follow stuff */}
        <a href={url} target="_blank" rel="nofollow noreferrer">
          <Button variant="contained">VIEW URL</Button>
        </a>
        <div className="actions__saved">
          {props.isFavourite ? (
            <StyledStar onClick={handleFavouriteTweet} />
          ) : (
            <StyledStarBorder onClick={handleFavouriteTweet} />
          )}
        </div>
      </div>
    </Div>
  );
}

export default Tweet;
