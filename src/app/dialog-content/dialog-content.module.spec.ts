import { DialogContentModule } from './dialog-content.module';

describe('DialogContentModule', () => {
  let dialogContentModule: DialogContentModule;

  beforeEach(() => {
    dialogContentModule = new DialogContentModule();
  });

  it('should create an instance', () => {
    expect(dialogContentModule).toBeTruthy();
  });
});
