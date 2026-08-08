export interface Partner {
  id: string;
  name: string;
  stat: string;
  result: string;
}

export const partners: Partner[] = [
  {
    id: "northbridge",
    name: "Northbridge Systems",
    stat: "91%",
    result: "Program completion across 40 engineers in AI & ML Engineering",
  },
  {
    id: "ferro",
    name: "Ferro Logistics",
    stat: "3.1x",
    result: "Manager-reported increase in on-the-job skill application",
  },
  {
    id: "solace",
    name: "Solace Health",
    stat: "6 weeks",
    result: "From discovery call to a live, running program",
  },
  {
    id: "kestrel",
    name: "Kestrel Financial",
    stat: "87%",
    result: "Capstone pass rate on the first attempt",
  },
  {
    id: "bramwell",
    name: "Bramwell Retail",
    stat: "120",
    result: "Employees trained across three consecutive programs",
  },
  {
    id: "ovation",
    name: "Ovation Media",
    stat: "4.8 / 5",
    result: "Average learner satisfaction score, post-program survey",
  },
];
