import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 1
  
  6px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #A9A9A9;
  margin: 9px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.5);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid #A9A9A9;
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
