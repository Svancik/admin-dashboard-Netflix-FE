import "./home.css";
import FeaturedInfo from "./../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "./../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
export default function Home() {
  /* V useEffect máme dependency na MONTHS a docházelo k zacyklení, po použití useMemo cyklus zmizel - tím jsme memorizovali tuto závislou konstantu a useEffect se spustí jen když se změní */
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        /* Pomocí kódu níže mapujeme id usera na měsíc v poly MONTHS výše (musíme dělat -1 jelikož index 0 = měsíc 1 / leden). Z nějakého důvodu se zdvojnasobila délka pole = proto slice níže*/
        const res = await axios.get("/users/stats");

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });

        statsList.map((item) =>
          setUserStats((prev) =>
            [
              ...prev,
              { name: MONTHS[item._id - 1], "New User": item.total },
            ].slice(0, res.data.length)
          )
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" dataKey="New User" grid />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
