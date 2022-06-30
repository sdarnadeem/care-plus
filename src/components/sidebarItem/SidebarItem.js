import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  slug,
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const regexForTab = new RegExp(`^/${slug}`, "i");
  const result = regexForTab.test(pathname);

  const typographyClass = `${!showSidebar && c.hide}`;
  const summaryClass = `${c.item} ${result && c.expanded} `;
  const subTabClass = (slug) => {
    const regexForSubTab = new RegExp(slug + "$", "i");
    const result = regexForSubTab.test(pathname);
    if (result) {
      return `${c.item} ${c.expanded}`;
    } else {
      return `${c.item}`;
    }
  };

  const handleItemClick = () => {
    if (slug === "logout") {
      return navigate("/login", { replace: true });
    }
    navigate(`/${slug}`);
  };

  const handleSubitemClick = (subSlug) => {
    navigate(`/${slug}/${subSlug}`);
  };
  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        disableGutters
        elevation={0}
      >
        <AccordionSummary
          expandIcon={
            items && showSidebar && items.length > 0 && <ExpandMoreIcon />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{ height: "48px !important" }}
          disableGutters
          className={summaryClass}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            onClick={handleItemClick}
          >
            <Icon />

            <Typography
              variant="body1"
              fontSize="medium"
              sx={{ width: "100%", flexShrink: 0 }}
              className={typographyClass}
            >
              {text}
            </Typography>
          </Stack>
        </AccordionSummary>
        {showSidebar && items && items.length > 0 && (
          <AccordionDetails>
            <Stack
              direction="column"
              alignItems="left"
              sx={{ paddingLeft: "10px" }}
            >
              {items.map((item, index) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  className={subTabClass(item.slug)}
                  padding={1}
                  key={index + 10565}
                  sx={{ cursor: "pointer" }}
                  onClick={handleSubitemClick.bind(null, item.slug)}
                >
                  <ArrowForwardIcon fontSize="small" />
                  <Typography
                    className={!showSidebar && c.hide}
                    variant="body2"
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
