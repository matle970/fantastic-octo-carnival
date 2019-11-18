import { CommonHeaderResponse } from '../common/common-header-response';


export class NewsBanklist {
  header: CommonHeaderResponse;
  body: Body;
}


class Body {
  newsList: [
    {
      bank: string,
      valChange: string,
      totalChange: string,
    }
  ];
}
