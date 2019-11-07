import { CompanyModule } from './customer-child.module';

describe('CompanyModule', () => {
  let companyModule: CompanyModule;

  beforeEach(() => {
    companyModule = new CompanyModule();
  });

  it('should create an instance', () => {
    expect(companyModule).toBeTruthy();
  });
});
