import { useState, useEffect } from "react"
import withRouter from "../../components/Common/withRouter"
import i18n from "../../i18n";
import { TabContent, TabPane } from "reactstrap";
import BookingPTDetail from "./BookingPTDetail";
import BookingDetail from "./BookingDetail";

const CreateBooking = (props) => {
  document.title = "Create booking | Final Project";

  // Set default to tab "1" (Đặt lịch PT mới) - tab "0" (Đặt lịch mới) is hidden
  const [currentTabActive, setCurrentTabActive] = useState("1");

  // Filter to only show tab "1" (Đặt lịch PT mới), hide tab "0" (Đặt lịch mới)
  const tabHeaderList = [
    // { name: i18n.t("new_booking"), id: "0" }, // Hidden tab
    { name: i18n.t("new_private_booking"), id: "1" },
  ];

  const handleClick = (section) => {
    setCurrentTabActive(section.id);
  };

  return (
    <div className="">
      <div className="page-content">
        <div className="tabs-container">
          <div className="tabs-header">
            {tabHeaderList.map((section) => {
              return (
                <div
                  key={section.id}
                  onClick={() => handleClick(section)}
                  className={"text-center tab-item " + (currentTabActive === section.id ? "active" : "")}
                >
                  {section.name}
                </div>
              )
            }
            )}
          </div>

          <div className="page-container">
            <TabContent activeTab={currentTabActive}>
              {/* Hidden TabPane "0" (Đặt lịch mới) - component kept but not rendered */}
              <TabPane tabId="0" style={{ display: "none" }}>
                <BookingDetail type="create" />
              </TabPane>

              <TabPane tabId="1">
                <BookingPTDetail type="create" />
              </TabPane>

            </TabContent>

          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateBooking)