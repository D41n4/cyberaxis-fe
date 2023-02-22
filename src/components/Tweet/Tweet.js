import { Button, Typography } from "@mui/material";
import Spacer from "components/Spacer";
import styled from "styled-components";
import { Star, StarBorder, CheckCircle } from "@mui/icons-material";
import { favouriteTweet } from "api/user";

// const trustedAccounts = [
//   {
//     id: "2778002300",
//     name: "CPO Magazine",
//   },
//   {
//     id: "209811713",
//     name: "The Hacker News",
//   },
//   {
//     id: "3819701",
//     name: "ZDNET",
//   },
//   {
//     id: "29415843",
//     name: "Infosecurity Magazine",
//   },
//   {
//     id: "621583",
//     name: "BBCTech",
//   },
//   {
//     id: "5402612",
//     name: "BBC Breaking News",
//   },
//   {
//     id: "22873424",
//     name: "CIO Online",
//   },
//   {
//     id: "24682806",
//     name: "CSO Online",
//   },
//   {
//     id: "18066440",
//     name: "CISA Cyber",
//   },
//   {
//     id: "41258937",
//     name: "Security Week",
//   },
//   {
//     id: "4210241608",
//     name: "NCSC UK",
//   },
//   {
//     id: "713973",
//     name: "IT Pro",
//   },
// ];

// const trustedIds = trustedAccounts.map((el) => el.id);

const StyledCheckCircle = styled(CheckCircle)`
  color: ${({ isTrusted }) => (isTrusted ? "green" : "purple")};
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
  border: 1px solid red;
  max-width: 800px;
  margin: auto;
  margin-bottom: 10px;
  padding: 10px;

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
        max-width: 100%;
        height: 150px;
      }
    }

    .details__badges {
      display: flex;
      justify-items: center;
      padding-top: 10px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* border: 1px solid green; */

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
          <img src={imageSrc} alt="" />
        </div>
        <Typography>{props.text}</Typography>
        <div className="details__badges">
          <StyledCheckCircle isTrusted={props.isTrusted} />
        </div>
      </div>
      <Spacer px={10} />
      <div className="actions">
        {/* TODO */}
        {`_id: ${props.id} authorId: ${props.authorId} created_at: ${props.created_at}`}
        <a href={url} target="_blank" rel="nofollow">
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
