import { useState } from "react";
import { Dialog } from "@haze-ui/react";

export default () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <div class="flex-(~ gap3 wrap) items-center brd p10 rounded">
      <button className="btn-primary mx-auto" onClick={openDialog}>
        Open
      </button>

      <Dialog open={open} close={closeDialog} className="grid gap4">
        <h3>Edit Account</h3>

        <p className="text-inactivefg mb2">
          Make changes to your user profile here.
        </p>

        <label htmlFor="name">Name</label>
        <input
          className="input-outline"
          id="name"
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="input-outline"
          id="email"
          placeholder="Enter your email"
        />

        <div className="flex gap3 items-center ml-auto mt3">
          <button className="btn-soft" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button className="btn-primary">Save</button>
        </div>
      </Dialog>
    </div>
  );
};
