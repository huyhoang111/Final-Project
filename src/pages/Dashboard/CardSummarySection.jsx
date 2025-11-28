import { useEffect, useMemo, useState } from "react";
import i18n from "../../i18n";
import dashboardService from "../../services/dashboard.service";
import { formatNumberAsCurrency } from "../../utils/app";

const memberTypeList = [
  {
    value: "total",
    label: i18n.t('total'),
  },
  {
    value: "active",
    label: i18n.t('active_member'),
  },
  {
    value: "inactive",
    label: i18n.t('inactive'),
  },
];


const CardSummarySection = ({
  location,
  year,
  month,
  id
}) => {
  const [memberType, setMemberType] = useState("total");
  const [showInClass, setShowInClass] = useState(false);

  const [data, setData] = useState({
    revenue: {
      current: 0,
      previous: 0,
    },
    member: {
      current: {
        total: 0,
        active: 0,
        inactive: 0,
        new: 0,
      },
      previous: {
        total: 0,
        active: 0,
        inactive: 0,
        new: 0,
      },
      in_class: 0,
    },
    package: {
      current: 0,
      previous: 0,
    },
    product: {
      current: 0,
      previous: 0,
    },
  });

  const cardConfig = useMemo(() => [
    {
      key: "revenue",
      title: i18n.t("total_revenue"),
      format: "currency",
      getCurrent: (data) => data.revenue?.current,
      getPrevious: (data) => data.revenue?.previous,
    },
    {
      key: "member",
      dynamicTitle: (type, showInClass) => showInClass
        ? `${i18n.t("in_class")} ${i18n.t("member")}`
        : `${memberTypeList.find(m => m.value === type)?.label} ${i18n.t("member")}`,
      format: "number",
      getCurrent: (data, type, showInClass) =>
        showInClass ? data.member?.in_class : data.member?.current?.[type],
      getPrevious: (data, type, showInClass) =>
        showInClass ? 0 : data.member?.previous?.[type],
      isDynamicType: true,
    },
    {
      key: "member_new",
      title: i18n.t("new_customers"),
      format: "number",
      getCurrent: (data) => data.member?.current?.new,
      getPrevious: (data) => data.member?.previous?.new,
    },
    {
      key: "package",
      title: i18n.t("package"),
      format: "number",
      getCurrent: (data) => data.package?.current,
      getPrevious: (data) => data.package?.previous,
    },
  ], [showInClass]);

  // Removed getValueWithPrevious function - no longer calculating trend/percentage changes
  // Only keeping main values for 4 KPIs

  const listCardSummary = useMemo(() => {
    return cardConfig.map((card) => {
      const isDynamic = card.isDynamicType;
      const key = card.key;

      const current = card.getCurrent(data, isDynamic ? memberType : undefined, showInClass) ?? 0;
      // Removed previous value calculation - no longer needed for trend display
      // const previous = card.getPrevious(data, isDynamic ? memberType : undefined, showInClass) ?? 0;

      if (current === undefined) return null;

      const title = isDynamic
        ? card.dynamicTitle(memberType, showInClass)
        : card.title;

      const mainValue =
        card.format === "currency"
          ? `${formatNumberAsCurrency(current)} VND`
          : formatNumberAsCurrency(current);

      // Removed trend calculation - only keeping main value
      // const { isNegative, indVal } = getValueWithPrevious(current, previous)

      return {
        key,
        title,
        mainValue,
        // Removed indicationValue and isNegative - no trend display
      };
    }).filter(Boolean); // Clean null cards
  }, [data, memberType, showInClass]);

  const getListStatisticData = async () => {
    let payload = {
      year: year,
    };
    if (month >= 1 && month <= 12) {
      payload = {
        ...payload,
        month: month,
      };
    }
    if (location) {
      payload = {
        ...payload,
        location_ids: [location],
      }
    }
    const res = await dashboardService.getListDataStatistic(payload);
    if (res.success) {
      setData(res.data);
      console.log(res.data);
    }
  };

  useEffect(() => {
    getListStatisticData();
  }, [year, month, location]);

  return (
    <div
      id={id ?? ""}
      className="card-container-summary dashboard-scroll"
    >
      {listCardSummary.map((item) => (
        <div
          key={item.title}
          className="dashboard-card-summary-container"
        >
          <div className="dashboard-card-summary-header">
            <h5 className="dashboard-card-summary-title">
              {item.title}
            </h5>
            {/* Hidden button "Đang diễn ra" - UI removed */}
            {/* {item.key === "member" && (
              <button
                onClick={() => setShowInClass((prev) => !prev)}
                className={`btn btn-in-class-toggle ${showInClass ? "active" : ""}`}
              >
                {i18n.t("in_class")}
              </button>
            )} */}
          </div>
          <div className="dashboard-card-summary-body">
            <p className="dashboard-card-summary-main-figure">
              {item.mainValue}
            </p>
            {/* Removed trend/percentage indication - only showing main value */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSummarySection;
