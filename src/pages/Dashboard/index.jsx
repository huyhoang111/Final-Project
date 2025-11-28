import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import { withTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useAppSelector } from "../../hook/store.hook";
import {
  MONTH_CHART,
} from "../../constants/app.const";

import MyDropdown from "../../components/Common/MyDropdown";
import CardSummarySection from "./CardSummarySection";
// Commented out unused sections - only keeping 4 KPIs
// import CustomerPredictionSection from "./CustomerPredictionSection";
// import StaffSection from "./StaffSection";
// import SalesSection from "./SalesSection";
// import BlackBookSection from "./BlackBookSection";

const Dashboard = () => {
  document.title = "Dashboard | Final Project";

  const { operator, locationOperator } = useAppSelector(
    (state) => state.operator
  );
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  // Removed unused states for tabs and staff
  // const [currentTabActive, setCurrentTabActive] = useState("ai_customer_prediction");
  // const [locationSel, setLocationSel] = useState([]);
  // const [staffIds, setStaffIds] = useState([]);

  const getMonthsToCurrent = useMemo(() => {
    const now = new Date();
    const currentYear = now.getFullYear(); // local
    const currentMonth = now.getMonth(); // local, 0-indexed

    if (parseInt(selectedYear) === currentYear) {
      return MONTH_CHART.slice(0, currentMonth + 1);
    } else {
      return MONTH_CHART;
    }
  }, [selectedYear]);
  const [selectedMonth, setSelectedMonth] = useState(() => getMonthsToCurrent.length);

  // Removed unused functions: formatDate, formatTime, getDataExcel, getStaffForAll
  // Removed unused states and effects for staff and locationSel
  // Removed tabs navigation: listSection, handleChangeSection

  useEffect(() => {
    setLocation(locationOperator);
    // Removed setLocationSel - not needed for simplified dashboard
  }, [locationOperator]);

  const listYear = () => {
    return Array.from(
      { length: 6 },
      (_, index) => new Date().getUTCFullYear() - 5 + index
    ).map((item) => {
      return { value: item, label: item };
    });
  };

  return (
    <React.Fragment>
      <div className="page-content tabs-container">
        <div className="dashboard-title">
          {i18n.t("welcome_back")} {operator?.name}
        </div>
        {/* Simplified header - removed tabs navigation, only keeping filters for 4 KPIs */}
        <div className="dashboard-tabs-header tabs-header-sticky">
          <div className="dashboard-tabs-selects">
            <MyDropdown
              options={location}
              selected={selectedLocation}
              displayEmpty={true}
              setSelected={(e) => setSelectedLocation(e)}
              placeholder={i18n.t("all")}
            />
            <MyDropdown
              options={listYear()}
              selected={selectedYear}
              displayEmpty={false}
              setSelected={(e) => setSelectedYear(e)}
              placeholder={i18n.t("location")}
              disabled={!selectedYear}
            />
            <MyDropdown
              options={getMonthsToCurrent}
              selected={selectedMonth}
              displayEmpty={true}
              setSelected={(e) => setSelectedMonth(e)}
              placeholder={i18n.t("months")}
            />
          </div>
        </div>
        {/* Only showing CardSummarySection with 4 KPIs: Total Revenue, Total Members, New Customers, Packages */}
        <div className="page-container tab-content dashboard-sections">
          <CardSummarySection
            location={selectedLocation}
            year={selectedYear}
            month={selectedMonth}
          />
          {/* Removed all other sections - only keeping 4 KPIs */}
          {/* <CustomerPredictionSection
            location={selectedLocation}
            year={selectedYear}
            month={selectedMonth}
          /> */}
          {/* <StaffSection
            id="trainer_kpi"
            location={selectedLocation}
            year={selectedYear}
            month={selectedMonth}
          /> */}
          {/* <SalesSection
            id="sales_kpi"
            location={selectedLocation}
            year={selectedYear}
            month={selectedMonth}
          /> */}
          {/* <BlackBookSection 
            id="black_book"
            location={selectedLocation}
            year={selectedYear}
            month={selectedMonth}
          /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
