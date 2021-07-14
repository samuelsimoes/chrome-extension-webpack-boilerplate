import React from "react";
import Button from "@material-ui/core/Button";

import sendRestore from "../../utils/commonContentEvents";

const Reload = () => {
  return (
    <Button onClick={sendRestore} variant="outlined" color="secondary">
      Reload
    </Button>
  );
};

export default Reload;
