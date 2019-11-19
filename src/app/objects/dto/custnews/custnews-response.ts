import { CommonHeaderResponse } from '../common/common-header-response';


export class CompanyNews {
  header: CommonHeaderResponse;
  body: Body;
}


class Body {
  customerId: string;
  newsList: [
    {
      id: string;
      paper: string;
      date: string;
      title: string;
      tag: string;
      content: string;
    }
  ];
}
