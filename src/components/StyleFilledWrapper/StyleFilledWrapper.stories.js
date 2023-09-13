import { StyleFilledWrapper } from ".";

export default {
  title: "Components/StyleFilledWrapper",
  component: StyleFilledWrapper,
  argTypes: {
    style: {
      options: ["outlined", "filled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "outlined",
    className: {},
  },
};
