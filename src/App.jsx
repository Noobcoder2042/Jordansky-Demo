import React, { useState } from "react";

import { Link, Routes, Route } from "react-router-dom";

import Account from "./pages/Account";
import Analytics from "./pages/Analytics";
import Insights from "./pages/Analytics/Insights";
import MIS from "./pages/Analytics/MIS";
import NewVendors from "./pages/Analytics/NewVendors";
import Directory from "./pages/Directory";
import Files from "./pages/Files";
import Financials from "./pages/Financials";
import BalanceSheet from "./pages/Financials/BalanceSheet";
import CashFlowStatement from "./pages/Financials/CashFlowStatement";

import IncomeStatement from "./pages/Financials/IncomeStatement";
import Ratios from "./pages/Financials/Ratios";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Rewards from "./pages/Rewards";
import Timeline from "./pages/Timeline";
import ChartsOfAccount from "./pages/Timeline/ChartsOfAccount";
import SidebarJS from "./compo/SidebarJS";
import TimeLineHome from "./pages/Timeline/TimeLineHome";

function App() {
  return (
    <SidebarJS>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/analytics" element={<MIS />} />
        <Route path="/directory" element={<Directory />} />
        {/* <Route path="/timeline/" element={} /> */}
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/timeline/tm" element={<Timeline />} />
        <Route path="/files" element={<Files />} />
        <Route
          path="/financials/income-statement"
          element={<IncomeStatement />}
        />
         <Route path="/financials/dashboard" element={<Financials />} />
        <Route path="/financials/balance-sheet" element={<BalanceSheet />} />
        <Route path="/financials/cash-flow" element={<CashFlowStatement />} />
        <Route path="/financials/ratios" element={<Ratios />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/analytics/mis" element={<MIS />} />
        <Route path="/analytics/newvendor" element={<NewVendors />} />
        <Route path="/analytics/insights" element={<Insights />} />
        <Route path="/timeline/coa" element={<ChartsOfAccount />} />
      </Routes>
    </SidebarJS>
  );
}

export default App;
