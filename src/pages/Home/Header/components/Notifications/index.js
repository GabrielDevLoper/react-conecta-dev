import React, { useState, useRef } from "react";

import useStyles from "./styles";
import { IconButton, SvgIcon, Popover } from "@material-ui/core";
import { Bell } from "react-feather";

function Notification() {
  const classes = useStyles();
  const ref = useRef(null);

  const [isVisiblePopover, setIsVisiblePopover] = useState(false);

  function handleVisiblePopover() {
    setIsVisiblePopover(!isVisiblePopover);
  }

  return (
    <>
      <IconButton
        onClick={handleVisiblePopover}
        ref={ref}
        className={classes.bell}
      >
        <SvgIcon>
          <Bell />
        </SvgIcon>
      </IconButton>
      <Popover
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isVisiblePopover}
        onClose={handleVisiblePopover}
      >
        The content of the Popover.
      </Popover>
    </>
  );
}

export default Notification;
