import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Spacer from "components/Spacer";
import styled from "styled-components";
import { Tag } from "./Tag";

const Div = styled.div`
  display: flex;
  justify-content: center;
  .item {
    margin-right: 40px;
  }
  .entities {
    display: flex;
  }
`;

const entityList = [
  { key: "MALWARE", value: "Malware" },
  { key: "HACKER_GROUPS", value: "Hacker Groups" },
  { key: "ORGANISATIONS", value: "Organisations" },
  { key: "OS", value: "OS" },
];

export function Filters({
  manageEntities,
  selectedEntities,
  dateFilter,
  setDateFilter,
  searchString,
  setSearchString,
}) {
  const handleChange = (event) => {
    setDateFilter(event.target.value);
  };

  return (
    <Div>
      {/* FILTER BY DATE */}
      <div className="item">
        <Typography fontWeight={500}>Filter by date:</Typography>
        <Spacer px={5} />
        <FormControl>
          <Select size="small" value={dateFilter} onChange={handleChange}>
            <MenuItem value={0}>All time</MenuItem>
            <MenuItem value={1}>Last day</MenuItem>
            <MenuItem value={3}>Last 3 days</MenuItem>
            <MenuItem value={7}>Last week</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* ENTITIES */}
      <div className="item">
        <Typography fontWeight={500}>Filter by entities:</Typography>
        <div className="entities">
          {entityList.map((el) => (
            <Tag
              key={el.key}
              onClick={() => manageEntities(el.key)}
              isSelected={selectedEntities.includes(el.key)}
            >
              <Typography variant="body2">{el.value}</Typography>
            </Tag>
          ))}
        </div>
      </div>
      {/* SEARCH */}
      <div className="item">
        <Typography fontWeight={500}>Search:</Typography>
        <TextField
          size="small"
          placeholder="Search by text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
    </Div>
  );
}
