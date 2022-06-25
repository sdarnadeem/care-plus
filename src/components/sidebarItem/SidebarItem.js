import * as React from "react";

import {
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import c from "./SidebarItem.module.css";

export default function SidebarItem({
  expanded,
  handleChange,
  text,
  items,
  Icon,
  showSidebar,
}) {
  const typographyClass = `${!showSidebar && c.hide}`;
  return (
    <div>
      <Accordion expanded={expanded} onChange={handleChange} disableGutters>
        <AccordionSummary
          expandIcon={
            items && showSidebar && items.length > 0 && <ExpandMoreIcon />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{ height: "48px !important" }}
          disableGutters
          className={expanded && c.expanded}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon />

            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className={typographyClass}
            >
              {text}
            </Typography>
          </Stack>
        </AccordionSummary>
        {items && items.length > 0 && (
          <AccordionDetails>
            <Stack
              direction="column"
              alignItems="left"
              sx={{ paddingLeft: "20px" }}
            >
              {items.map((item, index) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  className={c.item}
                  padding={1}
                >
                  <ArrowForwardIcon fontSize="small" />
                  <Typography
                    className={!showSidebar && c.hide}
                    variant="body2"
                    key={index + 10565}
                  >
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </AccordionDetails>
        )}
      </Accordion>
    </div>
  );
}
