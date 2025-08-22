import { Tab, Tabs, TabsContent, TabsList } from "@haze-ui/react";

const MyTabContent = () => (
  <>
    <TabsContent value="account">Account content</TabsContent>
    <TabsContent value="settings">Settings content</TabsContent>
    <TabsContent value="Network">Network content</TabsContent>
  </>
);

export default () => (
  <>
    <div className="grid">
      <Tabs>
        <TabsList className="tabs-box tabon-(bg-red) tab-(text-white) bg-indigo rounded-b-0">
          <Tab value="account">Account</Tab>
          <Tab value="settings">Settings</Tab>
          <Tab value="Network">Network</Tab>
        </TabsList>

        <div className="rounded-b p7 shadow-md brd-indigo flex justify-center">
          <MyTabContent />
        </div>
      </Tabs>
    </div>

    <div className="grid">
      <Tabs>
        <TabsList className="tabs-outline pt2 tabon-(border-primary) border-primary ">
          <Tab value="account">Account</Tab>
          <Tab value="settings">Settings</Tab>
          <Tab value="Network">Network</Tab>
        </TabsList>

        <div className="rounded-b p7 shadow-md brd-primary border-t-0 flex justify-center">
          <MyTabContent />
        </div>
      </Tabs>
    </div>
  </>
);
