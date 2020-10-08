import React, { useEffect, useContext } from "react";
import Prism from "prismjs";
import { DataConsumer } from "../Context/Context";
import { Route } from "react-router-dom";

export default function ComponentGroup() {
  const { dataVal, tabVal } = useContext(DataConsumer);
  const [data] = dataVal;
  const [tab] = tabVal;
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <React.Fragment>
      {data[tab.currentTab].map((item, idx) => {
        return (
          <React.Fragment key={item.dataId}>
            <Route path={`/documentation/${tab.currentTab}/${item.dataId}`}>
              <div
                id={item.dataId}
                className={`component-section fm-tab ${item.theme}`}
              >
                {item.component}
              </div>
            </Route>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
