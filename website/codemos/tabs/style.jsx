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
    <div class="grid">
      <Tabs>
        <TabsList class="tabs-box tabon-(bg-red) tab-(text-white) bg-indigo rounded-b-0">
          <Tab value="account">Account</Tab>
          <Tab value="settings">Settings</Tab>
          <Tab value="Network">Network</Tab>
        </TabsList>

        <div class="rounded-b p7 shadow-md brd-indigo flex justify-center">
          <MyTabContent />
        </div>
      </Tabs>
    </div>

    <div class="grid">
      <Tabs>
        <TabsList class="tabs-outline pt2 tabon-(border-primary) border-primary ">
          <Tab value="account">Account</Tab>
          <Tab value="settings">Settings</Tab>
          <Tab value="Network">Network</Tab>
        </TabsList>

        <div class="rounded-b p7 shadow-md brd-primary border-t-0 flex justify-center">
          <MyTabContent />
        </div>
      </Tabs>
    </div>
  </>
);
