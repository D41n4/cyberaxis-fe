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
    margin: 0 20px;
  }
  .entities {
    display: flex;
  }
`;

const StyledSelect = styled(Select)`
  width: 130px;
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
  sourceFilter,
  setSourceFilter,
  searchString,
  setSearchString,
}) {
  const handleChangeDateFilter = (event) => {
    setDateFilter(event.target.value);
  };

  const handleChangeSourceFilter = (event) => {
    setSourceFilter(event.target.value);
  };

  return (
    <Div>
      {/* FILTER BY DATE */}
      <div className="item">
        <Typography fontWeight={500}>Filter by date:</Typography>
        <Spacer px={5} />
        <FormControl>
          <StyledSelect
            size="small"
            value={dateFilter}
            onChange={handleChangeDateFilter}
          >
            <MenuItem value={0}>All time</MenuItem>
            <MenuItem value={1}>Last day</MenuItem>
            <MenuItem value={3}>Last 3 days</MenuItem>
            <MenuItem value={7}>Last week</MenuItem>
          </StyledSelect>
        </FormControl>
      </div>
      <div className="item">
        <Typography fontWeight={500}>Filter by source:</Typography>
        <Spacer px={5} />
        <FormControl>
          <StyledSelect
            size="small"
            value={sourceFilter}
            onChange={handleChangeSourceFilter}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={1}>Trusted</MenuItem>
            <MenuItem value={2}>Not trusted</MenuItem>
          </StyledSelect>
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
