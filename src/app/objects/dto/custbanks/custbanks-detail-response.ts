import { CommonHeaderResponse } from '../common/common-header-response';


export class NewsBankDetail {
  header: CommonHeaderResponse;
  body: Body;
}


class Body {
  PreDate: Date;
  LastDate: Date;
  banksInfo: [
    {
      bankName: string,
      LastDateInfo: {
        amount: string;
        total: string;
        guarantee: string;
      },
      PreDateInfo: {
        amount: string;
        total: string;
        guarantee: string;
      },
      changeInfo: {
        amount: string;
        total: string;
      }
    }
  ];
}
