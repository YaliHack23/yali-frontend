import { InterfaceEssential } from ".";

export default {
  title: "Components/InterfaceEssential",
  component: InterfaceEssential,
  argTypes: {
    share: {
      options: ["outlined", "filled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    share: "outlined",
  },
};
