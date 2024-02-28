"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ResponsiveCalendar } from "@nivo/calendar";

const MyResponsiveCalendar = ({ data }: any) => (
  <ResponsiveCalendar
    data={data}
    from="2023-03-01"
    to="2023-03-27"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    yearSpacing={40}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: "right-to-left",
      },
    ]}
  />
);

export default function Calendar() {
  const data = [
    {
      value: 117,
      day: "2017-12-18",
    },
    {
      value: 311,
      day: "2016-05-02",
    },
    {
      value: 183,
      day: "2017-08-28",
    },
    {
      value: 319,
      day: "2015-09-02",
    },
    {
      value: 213,
      day: "2017-02-27",
    },
    {
      value: 104,
      day: "2017-07-17",
    },
    {
      value: 334,
      day: "2018-03-19",
    },
    {
      value: 72,
      day: "2016-06-13",
    },
    {
      value: 387,
      day: "2017-06-12",
    },
    {
      value: 173,
      day: "2017-09-21",
    },
    {
      value: 344,
      day: "2015-06-24",
    },
    {
      value: 399,
      day: "2017-03-06",
    },
    {
      value: 44,
      day: "2015-04-12",
    },
    {
      value: 284,
      day: "2015-06-14",
    },
    {
      value: 222,
      day: "2016-12-27",
    },
    {
      value: 9,
      day: "2017-06-11",
    },
    {
      value: 126,
      day: "2018-07-28",
    },
    {
      value: 332,
      day: "2015-06-18",
    },
    {
      value: 255,
      day: "2017-05-14",
    },
    {
      value: 66,
      day: "2018-07-29",
    },
    {
      value: 247,
      day: "2016-03-30",
    },
    {
      value: 328,
      day: "2017-04-06",
    },
    {
      value: 169,
      day: "2015-06-16",
    },
    {
      value: 278,
      day: "2015-07-26",
    },
    {
      value: 68,
      day: "2015-08-03",
    },
    {
      value: 389,
      day: "2018-05-05",
    },
    {
      value: 187,
      day: "2016-03-04",
    },
    {
      value: 292,
      day: "2016-12-15",
    },
    {
      value: 198,
      day: "2018-02-25",
    },
    {
      value: 295,
      day: "2018-02-02",
    },
    {
      value: 365,
      day: "2015-12-29",
    },
    {
      value: 389,
      day: "2017-02-08",
    },
    {
      value: 239,
      day: "2018-04-20",
    },
    {
      value: 384,
      day: "2017-10-07",
    },
    {
      value: 205,
      day: "2016-02-01",
    },
    {
      value: 60,
      day: "2018-04-07",
    },
    {
      value: 44,
      day: "2017-12-03",
    },
    {
      value: 166,
      day: "2017-05-11",
    },
    {
      value: 71,
      day: "2015-11-21",
    },
    {
      value: 34,
      day: "2016-06-30",
    },
    {
      value: 143,
      day: "2018-07-22",
    },
    {
      value: 73,
      day: "2015-10-04",
    },
    {
      value: 183,
      day: "2015-05-30",
    },
    {
      value: 297,
      day: "2018-06-29",
    },
  ];
  return (
    <Card>
      <CardContent className="w-full h-full">
        <MyResponsiveCalendar data={data} />
      </CardContent>
    </Card>
  );
}
