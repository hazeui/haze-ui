import { Tab, Tabs, TabsContent, TabsList } from "@haze-ui/react";

export default () => {
  const tabStyles = [
    "tabs-box",
    "tabs-classic",
    "tabs-outline",
    "tabs-line",
    "tabs-subtle",
  ];

  return (
    <div className="grid gap3">
      {tabStyles.map((tabStyle) => (
        <Tabs key={tabStyle}>
          <TabsList className={tabStyle}>
            <Tab value="account">
              <i className="i-line-md:account" /> Account
            </Tab>
            <Tab value="settings">
              <i className="i-mynaui:cog-two" /> Settings
            </Tab>
            <Tab value="Network">
              <i className="i-eos-icons:network" /> Network
            </Tab>
          </TabsList>

          <div className="rounded bg-input p10 shadow-md brd flex justify-center">
            <TabsContent value="account">Account content</TabsContent>
            <TabsContent value="settings">Settings content</TabsContent>
            <TabsContent value="Network">Network content</TabsContent>
          </div>
        </Tabs>
      ))}
    </div>
  );
};
