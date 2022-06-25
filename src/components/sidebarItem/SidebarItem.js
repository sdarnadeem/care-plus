import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";

import c from "./SidebarItem.module.css";

export default function SidebarItem({
  expanded,
  handleChange,
  text,
  items,
  Icon,
}) {
  return (
    <div>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={items && items.length > 0 && <ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ height: "48px !important" }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Icon />

            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className={expanded && c.active}
            >
              {text}
            </Typography>
          </Stack>
        </AccordionSummary>
        {items && items.length > 0 && (
          <AccordionDetails>
            {items.map((item, index) => (
              <Typography variant="caption" key={index + 10565}>
                {item.text}
              </Typography>
            ))}
          </AccordionDetails>
        )}
      </Accordion>
    </div>
  );
}
