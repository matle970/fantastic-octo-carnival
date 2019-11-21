import { CommonHeaderResponse } from '../common/common-header-response';


export class NewsBanklist {
  header: CommonHeaderResponse;
  body: Body;
}


class Body {
  PreDate: Date;
  LastDate: Date;
  banksList: [
    {
      bank: string,
      valChange: string,
      totalChange: string,
    }
  ];
}
