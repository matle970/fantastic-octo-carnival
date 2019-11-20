import { CommonHeaderResponse } from '../common/common-header-response';

export class CustomerHistoryList {
  header: CommonHeaderResponse;
  body: Body;
}

class Body {
  tabList: [
    {
      id: string,
      name: string
    }
  ];
  historyList: [
    {
      id: string,
      type: string,
      type_name: string,
      date_time: string,
      unit: string,
      content_word: string,
    }
  ];
}
